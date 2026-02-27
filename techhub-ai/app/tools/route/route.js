export async function GET() {
  const tools = [
    {
      id: 1,
      name: "ChatGPT",
      link: "https://chat.openai.com"
    },
    {
      id: 2,
      name: "Google Gemini",
      link: "https://gemini.google.com"
    },
    {
      id: 3,
      name: "GitHub",
      link: "https://github.com"
    },
    {
      id: 4,
      name: "Canva",
      link: "https://canva.com"
    }
  ];

  return Response.json(tools);
}