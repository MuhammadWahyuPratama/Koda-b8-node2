import moment from "moment";

/**
 * Formats date using moment.js
 * from DD-MM-YYYY to DD/MM/YYYY.
 *
 * @param {string} tanggal date input
 * @returns {string|null} formatted date or null if invalid
 */

export function formatDate(tanggal) {
  const benar = moment(
    tanggal,
    "DD-MM-YYYY",
    true
  );
  if (!benar.isValid()) {
    return null;
  }
  return benar.format("DD/MM/YYYY");
}