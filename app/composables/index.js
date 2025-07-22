/**
 * Truncate text to a specified length and append ellipsis if it exceeds the length.
 * @param {string} text - The text to truncate.
 * @param {number} length - The maximum length of the text before truncation.
 */
export const truncateText = (text, length = 15) => {
  if (!text) return '';
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
}

/**
 * Generate initials from a name.
 * @param {string} name - The name from which to generate initials.
 * @return {string} - The initials derived from the name.
 * 
 * If the name is empty, returns an empty string.
 * 
 * If the name consists of a single word, returns the first letter capitalized.
 * 
 * If the name consists of multiple words, returns the first letter of each word capitalized.
 * 
 * Example: "John Doe" -> "JD", "Alice" -> "A"
 * * @example 
 */
export function initials(name = '') {
  if (!name) return '';
  const parts = name.split(' ');
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }
  return parts.map(part => part.charAt(0).toUpperCase()).join('');
}

