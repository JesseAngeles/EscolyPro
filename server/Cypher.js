/*const { enc } = require("crypto-js");
var CryptoJS = require("crypto-js");
const clave = "laindesifrablelellaman"

class Cypher {

    Cifrar(decrypt){
        return CryptoJS.AES.encrypt(String(decrypt), clave).toString();   
    }

    Descifrar(encrypt) {
        encrypt = String(encrypt);
        while (encrypt.indexOf("%20") != -1) {
            encrypt = encrypt.replace("%20", "+");
        }
        while (encrypt.indexOf(" ") != -1) {
            encrypt = encrypt.replace(" ", "+");
        }
        encrypt = CryptoJS.AES.decrypt(encrypt, clave).toString(CryptoJS.enc.Utf8);
        return encrypt;
    }
}

module.exports = {
    Cypher
}*/