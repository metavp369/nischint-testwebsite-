import { contactSchema } from "@/lib/forms";
import { handleForm } from "@/lib/handle-form";

export const runtime = "nodejs";

export async function POST(req: Request) {
  return handleForm(req, "contact", contactSchema);
}
