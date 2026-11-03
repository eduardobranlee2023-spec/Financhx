export interface EarlyAccessSubmission {
  nombre: string;
  empresa: string;
  email: string;
  cargo?: string;
  interes?: string;
  mensaje?: string;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  data?: EarlyAccessSubmission;
}

/**
 * Service to handle early access submissions.
 * Conecta con el endpoint /api/early-access (alimentado por Resend).
 */
export async function submitEarlyAccess(
  data: EarlyAccessSubmission
): Promise<SubmissionResponse> {
  // Validación básica del lado cliente
  if (!data.email || !data.nombre || !data.empresa) {
    return {
      success: false,
      message: "Por favor completá los campos obligatorios.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return {
      success: false,
      message: "Por favor ingresá un correo corporativo válido.",
    };
  }

  // Backup en localStorage para auditoría local
  if (typeof window !== "undefined") {
    try {
      const existing = JSON.parse(
        localStorage.getItem("financhx_leads") || "[]"
      );
      existing.push({
        ...data,
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem("financhx_leads", JSON.stringify(existing));
    } catch {
      // Ignorar error de localStorage
    }
  }

  try {
    const response = await fetch("/api/early-access", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return {
      success: result.success,
      message: result.message || (result.success ? "Solicitud registrada con éxito." : "Error al procesar la solicitud."),
      data,
    };
  } catch (error) {
    console.error("Error al conectar con la API de Early Access:", error);
    return {
      success: false,
      message: "No se pudo conectar con el servidor. Por favor, intentá nuevamente.",
    };
  }
}
