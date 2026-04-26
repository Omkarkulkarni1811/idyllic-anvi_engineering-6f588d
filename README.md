# Anvi Engineering Website

Premium, user-friendly landing website for **Anvi Engineering** and its flagship
mechanical product **Shegdi**.

## Files

- `index.html` - main website page
- `styles.css` - visual design and responsive layout
- `script.js` - interactions and animations
- `assets/anvi_engineering_product_1.mp4` - product demo video
- `assets/anvi-product-shot.jpg` - product visual (captured from demo)
- `assets/anvi-client-use.jpg` - usage visual (captured from demo)

## Run

Open `index.html` directly in your browser.

For best local development experience in VS Code/Cursor, use a local server
extension (like Live Server) and open the site from there.

## Inquiry Database Setup (Netlify + Supabase)

1. Create a Supabase project.
2. Run SQL from `database/inquiries.sql` in the Supabase SQL editor.
3. In Netlify site settings, add environment variables:
   - `SUPABASE_URL` = your Supabase project URL
   - `SUPABASE_SERVICE_ROLE_KEY` = your Supabase service role key (recommended), or
   - `SUPABASE_PUBLISHABLE_KEY` = your Supabase publishable key
4. Deploy the site on Netlify.  
   - Customer inquiry form posts to `/.netlify/functions/create-inquiry` and stores
     entries in `public.inquiries`.
   - Broker partner form posts to `/.netlify/functions/create-broker-lead` and stores
     entries in `public.broker_leads`.