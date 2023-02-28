const data = await chrome.storage.sync.get("encryption");
console.log(data);

function generateEncryption() {
  return "";
}

function encrypt(key, password) {
  return `${key}${password}`;
}

function applyEncryption(encryption) {
  const inputs = document.querySelectorAll("input[type=password]");
  console.log(inputs);
  for (const inp of inputs) {
    inp.value = encrypt(encryption, inp.value);
  }
}

if (data) {
  console.log("encryption found");
  document.getElementById("enchrome-popup-body").value =
    "1 encryption found for this site.";
  //encryption found, auto apply encryption to password in inputs or ask for entry of base pw
  applyEncryption(data);
}

//encryption not found, apply new encryption to new password and store
const encrypt = generateEncryption();
applyEncryption(encrypt);
