import z from "zod";

/**
 * CONTACT_SCHEMA: Zod schema defining validation rules for the form.
 */
const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  practiceArea: z.string().min(1, "Please select a practice area"),
  phoneNumber: z.string().min(1, "Please enter phone number"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactProps = z.infer<typeof contactSchema>;
export { contactSchema };
export type { ContactProps };
