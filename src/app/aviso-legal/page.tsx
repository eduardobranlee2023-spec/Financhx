import { redirect } from "next/navigation";

// Legacy route — middleware now handles locale prefixing,
// but keep this as fallback redirect to Spanish version.
export default function AvisoLegalRedirect() {
  redirect("/es/aviso-legal");
}
