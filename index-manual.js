
const readline = require("node:readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Masukan Tanggal dengan Format (DD-MM-YYYY) :", (tanggal) => {
    const pemisah = tanggal.split("-")

    if (pemisah.length !== 3) {
        console.log("Format Tanggal Salah!!")
        rl.close()
        return
    }
    const hari = pemisah[0]
    const bulan = pemisah[1]
    const tahun = pemisah[2]

    if (hari.length !== 2 || bulan.length !== 2 || tahun.length !== 4) {
        console.log("Format Tanggal Salah")
    } else {
        console.log(`Tanggal : ${hari}/${bulan}/${tahun}`)
    } rl.close()
}
)

