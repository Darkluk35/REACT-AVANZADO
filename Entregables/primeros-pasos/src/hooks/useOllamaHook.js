// src/hooks/useOllamaHook.js
import { useState } from "react";

const BASE = "http://localhost:11434";

export default function useOllamaHook() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const enviarPrompt = async (prompt) => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`${BASE}/api/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "deepseek-r1:1.5b", // <- modelo corregido
          prompt,
          stream: false              // <- pide respuesta no-streaming
        }),
      });

      if (!res.ok) {
        const texto = await res.text();
        throw new Error(`Ollama API error ${res.status}: ${texto}`);
      }

      const data = await res.json();
      // Según docs la respuesta viene en data.response
      const texto = data?.response ?? JSON.stringify(data);
      setResponse(texto);
      return texto;
    } catch (err) {
      setError(err.message ?? String(err));
      console.error("enviarPrompt error:", err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, enviarPrompt };
}
