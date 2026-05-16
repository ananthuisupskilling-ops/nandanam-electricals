import { company } from "@/data/site";

export function whatsappUrl(message: string) {
  return `https://wa.me/${company.phone}?text=${encodeURIComponent(message)}`;
}

export function enquiryMessage(data: Record<string, string>) {
  return [
    `New enquiry for ${company.shortName}`,
    `Name: ${data.fullName || "-"}`,
    `Phone: ${data.phone || "-"}`,
    `Email: ${data.email || "-"}`,
    `Location: ${data.location || "-"}`,
    `Service: ${data.service || "-"}`,
    `Solar Capacity: ${data.capacity || "-"}`,
    `Message: ${data.message || "-"}`
  ].join("\n");
}
