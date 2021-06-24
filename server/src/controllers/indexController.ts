import { json, Request, Response } from "express";

import bd from "../database";

class IndexController {
    public async index(req: Request, res: Response) {
        // const data_res = await bd.query("SELECT  u.documento, u.nombre, u.apellido,u.email,u.estado,u.salario,DATE_FORMAT(u.fecha_nacimiento, '%Y-%m-%d')fecha_nacimiento,u.area, a.nombre nombre_area,(SELECT COUNT(*) FROM area WHERE lider=u.documento)lider_area  FROM usuario u INNER JOIN area a on a.codigo=u.area ORDER BY u.documento");
        // res.json(data_res)

        const usuarios = await bd.query('SELECT * FROM usuario');
        // let usuario=JSON.stringify(usuarios);
        // res.json(usuarios)

        res.json({ message: 'Datos Encontrados con exito', codigo: 0, usuario: usuarios })
    }

}

export const indexController = new IndexController();