"use server";

import { redirect } from "next/navigation";

function read(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitEstimate(formData: FormData) {
  // Honeypot: treat as success without processing.
  if (read(formData, "company")) {
    redirect("/contact/thank-you");
  }

  const name = read(formData, "name");
  const email = read(formData, "email");
  const phone = read(formData, "phone");
  const address = read(formData, "address");
  const service = read(formData, "service");

  if (!name || !email || !phone || !address || !service) {
    redirect("/contact?error=missing");
  }

  redirect("/contact/thank-you");
}
