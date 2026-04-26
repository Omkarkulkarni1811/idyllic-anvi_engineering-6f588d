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
  const address = String(payload.address || "").trim();
  const usageType = String(
    payload.usageType || payload.usage_type || ""
  ).trim();
  const quantityRequiredRaw = payload.quantityRequired ?? payload.quantity_required;
  const quantityRequired = Number.parseInt(String(quantityRequiredRaw || ""), 10);
  const requirement = String(payload.requirement || "").trim();

  if (!name || !phone || !address || !usageType || !requirement) {
    return jsonResponse(400, { error: "All fields are required" }, origin);
  }

  if (!Number.isInteger(quantityRequired) || quantityRequired < 1) {
    return jsonResponse(400, { error: "Quantity must be at least 1" }, origin);
  }

  if (
    name.length > 120 ||
    phone.length > 40 ||
    address.length > 500 ||
    !["home", "commercial"].includes(usageType) ||
    quantityRequired > 10000 ||
    requirement.length > 4000
  ) {
    return jsonResponse(400, { error: "Input too long" }, origin);
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/inquiries`, {
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
          address,
          usage_type: usageType,
          quantity_required: quantityRequired,
          requirement,
          source: "website",
        },
      ]),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return jsonResponse(
        500,
        { error: "Failed to store inquiry", detail: errorText },
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
