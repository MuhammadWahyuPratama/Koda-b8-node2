import moment from "moment";

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