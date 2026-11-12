// How visitors reach an agent. There is no on-site application: every
// "apply" action opens WhatsApp or email.

// PLACEHOLDER: replace with the real WhatsApp business number
// (digits only, including country code, no + or spaces).
export const WHATSAPP_NUMBER = '10000000000';

export const EMAIL = 'contact@truviq.com';

export const whatsappLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const emailLink = (subject) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
