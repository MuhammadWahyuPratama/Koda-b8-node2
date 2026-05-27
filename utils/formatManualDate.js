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