export function makeDateStringIntoDate(dateString: string): Date {
  const [_, year, month, day] =
    dateString.match(/(\d{4})-(\d{2})-(\d{2})/) || [];
  return new Date(Number(year), Number(month) - 1, Number(day));
}

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};


export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
