import readline from "node:readline";
import moment from "moment";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan tanggal dengan format (DD-MM-YYYY): ", (tanggal) => {
  const benar = moment(tanggal, "DD-MM-YYYY", true);

  if (benar.isValid()) {
    const hasil = benar.format("DD/MM/YYYY");
    console.log("hasil", hasil);
  } else {
    console.log("format tanggal salah!!");
  }

  rl.close();
});
