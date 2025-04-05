export async function POST(req) {
  const { poste } = await req.json();
  return new Response(JSON.stringify({ result: `Lettre générée pour : ${poste}` }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
