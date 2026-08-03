# Contact form setup (Resend + Vercel function)

The contact form now posts to a serverless function at `/api/contact`, which
sends you an email via [Resend](https://resend.com). Follow these steps to make
it work.

## 1. Install the new dependencies

```bash
npm install
```

This pulls in `resend` and `@vercel/node` (added to `package.json`).

## 2. Get a Resend API key

1. Create a free account at https://resend.com
2. Go to **API Keys** → **Create API Key** (a key looks like `re_...`).
3. Copy it.

The free tier lets you send to **your own account email** using the built-in
sender `onboarding@resend.dev`. That's already configured in
`api/contact.ts` and is enough to receive messages at `009bennyreyes@gmail.com`.

> Later, if you want emails to come from your own domain (e.g.
> `hello@bennyreyes.dev`) and send to any address, verify your domain in Resend
> → **Domains**, then change `FROM_EMAIL` in `api/contact.ts`.

## 3. Add the API key to Vercel

In your Vercel project: **Settings → Environment Variables**

| Name             | Value            | Environments                     |
| ---------------- | ---------------- | -------------------------------- |
| `RESEND_API_KEY` | `re_...` (your key) | Production, Preview, Development |

Redeploy after adding it (or it takes effect on the next deploy).

## 4. Test locally (optional)

Plain `vite dev` does **not** run the `/api` function. To test the whole flow
locally, use the Vercel CLI:

```bash
npm i -g vercel
echo "RESEND_API_KEY=re_your_key" > .env.local   # already git-ignored
vercel dev
```

Then open the local URL, fill out the form, and check your inbox.

## How it works

- **Frontend** (`src/pages/ContactPage.tsx`): controlled inputs with React
  state, client-side validation (name ≥ 2 chars, valid email, message ≥ 10
  chars). The **Send** button is disabled until the form is valid and shows a
  loading spinner while sending, then a success or error message.
- **Backend** (`api/contact.ts`): re-validates the input (never trust the
  client), checks a hidden "honeypot" field to block bots, and sends the email
  through Resend. Your email address lives here, so it's never exposed in the
  browser.
- **`vercel.json`**: the SPA catch-all rewrite now excludes `/api/*` so the
  function is reachable.

## Where you read the messages

They arrive as emails in **009bennyreyes@gmail.com**. Because `replyTo` is set to
the visitor's address, you can just hit **Reply** to answer them directly.
You can also see delivery logs in the Resend dashboard.
