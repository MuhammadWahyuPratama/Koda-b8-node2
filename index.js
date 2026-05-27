import readline from "node:readline";
import { formatDate } from "./utils/formatDate.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan tanggal dengan format (DD-MM-YYYY): ", (tanggal) => {
  const hasil = formatDate(tanggal);
  if (hasil) {
        console.log("hasil", hasil);
  } else {
    console.log("format tanggal salah!!");
  }
  rl.close();
});
