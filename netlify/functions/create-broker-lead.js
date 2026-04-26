const buildCorsHeaders = (origin = "*") => ({
  "Access-Control-Allow-Origin": origin,
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
});

const jsonResponse = (statusCode, body, origin) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
    ...buildCorsHeaders(origin),
  },
  body: JSON.stringify(body),
});

exports.handler = async (event) => {
  const origin = event.headers?.origin || "*";

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: buildCorsHeaders(origin),
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed" }, origin);
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseApiKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_PUBLISHABLE_KEY ||
    process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseApiKey) {
    return jsonResponse(
      500,
      { error: "Database environment variables are missing" },
      origin
    );
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return jsonResponse(400, { error: "Invalid request payload" }, origin);
  }

  const name = String(payload.name || "").trim();
  const phone = String(payload.phone || "").trim();
  const city = String(payload.city || "").trim();
  const experience = String(payload.experience || "").trim();
  const products = String(payload.products || "").trim();
  const message = String(payload.message || "").trim();

  if (!name || !phone || !city || !experience || !products) {
    return jsonResponse(400, { error: "All required fields are missing" }, origin);
  }

  if (
    name.length > 120 ||
    phone.length > 40 ||
    city.length > 120 ||
    experience.length > 2000 ||
    products.length > 1000 ||
    message.length > 2000
  ) {
    return jsonResponse(400, { error: "Input too long" }, origin);
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/broker_leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseApiKey,
        Authorization: `Bearer ${supabaseApiKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify([
        {
          name,
          phone,
          city,
          experience,
          products,
          message,
          source: "website",
        },
      ]),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return jsonResponse(
        500,
        { error: "Failed to store broker details", detail: errorText },
        origin
      );
    }

    return jsonResponse(201, { ok: true }, origin);
  } catch (error) {
    return jsonResponse(
      500,
      { error: "Unexpected server error", detail: String(error.message || error) },
      origin
    );
  }
};
