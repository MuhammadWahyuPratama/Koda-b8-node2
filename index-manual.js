import readline from "node:readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function formatManualDate (tanggal) {
 const pemisah = tanggal.split("-");
if(pemisah.length !== 3) {
  return null;
}
  const hari = pemisah[0];
  const bulan = pemisah[1];
  const tahun = pemisah[2];

if (hari.length !==2 ||
    bulan.length !==2 ||
    tahun.length !==4 
) {
  return null;
}
return `${hari}/${bulan}/${tahun}`;
}

rl.question("Masukan Tanggal dengan Format (DD-MM-YYYY) :", (tanggal) => {
  const hasil = formatManualDate(tanggal);
  if (hasil) {
    console.log(`Tanggal : ${hasil}`);
  } else {
    console.log("Format Tanggal Salah");
  }
  rl.close();
});
