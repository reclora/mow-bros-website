// Cloudflare Pages function to serve static files
export async function onRequest(context) {
  return context.next();
}