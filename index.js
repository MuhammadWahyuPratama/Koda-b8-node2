import readline from "node:readline";
import moment from "moment";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function formatDate(tanggal) {
 const benar = moment(tanggal, "DD-MM-YYYY",true);
 if (!benar.isValid()) {
  return null;
}
return benar.format("DD/MM/YYYY");
};

rl.question("Masukan tanggal dengan format (DD-MM-YYYY): ", (tanggal) => {
  const hasil = formatDate(tanggal);
  if (hasil) {
        console.log("hasil", hasil);
  } else {
    console.log("format tanggal salah!!");
  }
  rl.close();
});
