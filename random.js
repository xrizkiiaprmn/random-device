const randomString = require("randomstring");
const random = require("random");
const readline = require("readline");
const process = require("process");

console.info("Android Device Generator");

const device = [
  "Samsung",
  "SonyEricsson",
  "Xiaomi",
  "OPPO",
  "Huawei",
  "Sony",
  "Motorola",
  "Google",
];

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Masukkan jumlah data yang kamu inginkan : ", (data) => {
  generator(data);
  input.close();
});

const generator = (length) => {
  for (let i = 0; i < length; i++) {
    const imsi = random.int(1000000000000000, 9999999999999999);
    const imei = random.int(1000000000000000, 9999999999999999);
    const id = randomString.generate({
      length: 16,
      charset: "hex",
    });

    console.info(`\nAndroid Device Generator - Data ${i + 1}\nBrand\t\t: ${
      device[Math.floor(Math.random() * device.length)]
    }\nModel\t\t: ${randomString.generate({
      length: Math.floor(Math.random() * 7) + 3,
      charset: "hex",
    })}\n\nIMSI\t\t: ${imsi}\nAndroid ID\t: ${id}\nIMEI\t\t: ${imei} 
    `);
  }
};
