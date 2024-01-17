const fs = require("fs");
const path = require("path");
const { Keys } = require("casper-js-sdk");

const createAccountKeys = () => {
  // Generating keys
  const edKeyPair = Keys.Ed25519.new();
  const { publicKey, privateKey } = edKeyPair;

  // Create a hexadecimal representation of the public key
  const accountAddress = publicKey.toHex();

  // Get the account hash (Uint8Array) from the public key
  const accountHash = publicKey.toAccountHash();

  const privateKeyInPem = edKeyPair.exportPrivateKeyInPem();

  const publicKeyInPem = edKeyPair.exportPublicKeyInPem();

  console.log("Public Key", accountAddress);

  console.log(publicKeyInPem);

  console.log(privateKeyInPem);
};

createAccountKeys();
