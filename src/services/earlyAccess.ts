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
 * This is configured as a clear integration point for Supabase.
 * In production, simply configure your SUPABASE_URL and SUPABASE_ANON_KEY.
 */
export async function submitEarlyAccess(
  data: EarlyAccessSubmission
): Promise<SubmissionResponse> {
  // Simulate network round-trip for realistic feedback
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Basic validation check
  if (!data.email || !data.nombre || !data.empresa) {
    return {
      success: false,
      message: "Por favor completá los campos obligatorios.",
    };
  }

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return {
      success: false,
      message: "Por favor ingresá un correo corporativo válido.",
    };
  }

  /*
   * ==========================================
   * PUNTO DE INTEGRACIÓN SUPABASE:
   * ==========================================
   * import { createClient } from '@supabase/supabase-js'
   * const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
   * const { error } = await supabase.from('early_access_leads').insert([data])
   * if (error) throw error
   */

  // Store in localStorage if available for demo persistence
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
      // Ignore localStorage errors
    }
  }

  return {
    success: true,
    message: "Solicitud registrada con éxito para el programa de validación.",
    data,
  };
}
