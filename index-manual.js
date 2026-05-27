import readline from "node:readline";
import { formatManualDate } from "./utils/formatManualDate.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan Tanggal dengan Format (DD-MM-YYYY) :", (tanggal) => {
  const hasil = formatManualDate(tanggal);
  if (hasil) {
    console.log(`Tanggal : ${hasil}`);
  } else {
    console.log("Format Tanggal Salah");
  }
  rl.close();
});
