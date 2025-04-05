"use client";
import { useState } from "react";

export default function Page() {
  const [response, setResponse] = useState("");

  const testerAPI = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ poste: "Développeur" })
    });
    const data = await res.json();
    setResponse(JSON.stringify(data));
  };

  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>Test API /api/generate</h1>
      <button onClick={testerAPI} style={{ padding: 12, fontSize: 16 }}>Appeler API</button>
      <pre style={{ marginTop: 20 }}>{response}</pre>
    </div>
  );
}
