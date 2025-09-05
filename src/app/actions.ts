'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email.'),
  phone: z.string().min(10, 'Please enter a valid phone number.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export type FormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  };
  success?: boolean;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors and try again.',
      success: false,
    };
  }

  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log it and simulate success.
  console.log('New Contact Form Submission:', validatedFields.data);

  revalidatePath('/');
  return {
    message: 'Thank you! Your message has been sent successfully.',
    success: true,
  };
}
