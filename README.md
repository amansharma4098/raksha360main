# Raksha360 React (Vite) – Deploy to Vercel

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run locally:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Deploy to Vercel:
   - Create a new project in Vercel and connect the Git repo.
   - Add domains `raksha360.co.in` and `www.raksha360.co.in` in Vercel.
   - Set GoDaddy DNS: `A @ -> 76.76.21.21`, `CNAME www -> cname.vercel-dns.com`.
   - Wait for SSL certificate and DNS propagation.

Routes `/patient`, `/doctor`, `/hospital`, `/admin` redirect to subdomains automatically.
