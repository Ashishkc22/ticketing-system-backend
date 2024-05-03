const crypto = require("crypto");
const fs = require("fs");

const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
});

// Save the public key to a file or use it as needed
fs.writeFileSync("privateKey.pem", privateKey);
fs.writeFileSync("publicKey.pem", publicKey);
