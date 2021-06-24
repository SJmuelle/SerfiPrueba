"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
const database_1 = __importDefault(require("../database"));
class IndexController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const data_res = await bd.query("SELECT  u.documento, u.nombre, u.apellido,u.email,u.estado,u.salario,DATE_FORMAT(u.fecha_nacimiento, '%Y-%m-%d')fecha_nacimiento,u.area, a.nombre nombre_area,(SELECT COUNT(*) FROM area WHERE lider=u.documento)lider_area  FROM usuario u INNER JOIN area a on a.codigo=u.area ORDER BY u.documento");
            // res.json(data_res)
            const usuarios = yield database_1.default.query('SELECT * FROM usuario');
            // let usuario=JSON.stringify(usuarios);
            // res.json(usuarios)
            res.json({ message: 'Datos Encontrados con exito', codigo: 0, usuario: usuarios });
        });
    }
}
exports.indexController = new IndexController();
