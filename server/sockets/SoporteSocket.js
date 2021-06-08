const { io } = require('../server');

const { DBUsuario } = require('../DBConnection/DBUsuario')
const Usuario = new DBUsuario();

const { DBForo } = require('../DBConnection/DBForo')
const Foro = new DBForo();

//var CryptoJS = require("crypto-js");
//const clave = "laindesifrablelellaman";

class SoporteSocket {

    CreateReport(report, callback){
        //var usu_id = CryptoJS.AES.decrypt(report.usu_id, clave).toString(CryptoJS.enc.Utf8);
        console.log(usu_id, "dsdsd");
        Foro.CreateReport(usu_id, report.cri_id, report.for_tit, report.for_des, (err, res) => {
            Usuario.GetByIdUsuario(report.usu_id, (err2, res2) => {
                console.log(res2.usu_cor);
            })
            return callback(res);
        })
    }

    GetAllReports(callback){
        Foro.GetAllReports((err, res) => {
            return callback(res);
        })
    }
}

module.exports = {
    SoporteSocket
}