/* ============================================================
   BACKEND CLIENT
   ------------------------------------------------------------
   Talks to the FastAPI inference service in backend/.

   Only the Predictions page needs it: every other screen reads
   results the training run already exported into src/data/, so the
   dashboard works whether or not the service is running.
   ============================================================ */

export const API_BASE =
  import.meta.env.VITE_API_URL ?? "http://localhost:8000";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(detail || `Request failed (${response.status})`);
  }
  return response.json();
}

/* Is the service up and holding a trained model? */
export async function checkHealth() {
  try {
    return await request("/api/health");
  } catch {
    return { status: "offline" };
  }
}

/* Score one transaction through the hybrid ensemble. */
export function scoreTransaction(payload) {
  return request("/api/predict", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

/* Merchants, categories and states the model was trained on. */
export function fetchOptions() {
  return request("/api/options");
}
