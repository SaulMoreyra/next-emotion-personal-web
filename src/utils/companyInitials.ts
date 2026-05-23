export function getCompanyInitials(company: string): string {
  const cleaned = company.replace(/\(.*?\)/g, "").trim();
  const words = cleaned.split(/\s+/).filter(Boolean);

  if (words.length >= 2) {
    return `${words[0][0]}${words[1][0]}`.toUpperCase();
  }

  return cleaned.slice(0, 2).toUpperCase();
}
