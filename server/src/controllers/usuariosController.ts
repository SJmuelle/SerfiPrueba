import{Request, Response} from "express";

import bd from "../database";

class UsuarioController{

    public async list (req :Request, res:Response){
        const data_res=await bd.query("SELECT  * from usuario");
        res.json(data_res)
    }


    public async getOne (req :Request, res:Response):Promise<any>{
        const {id}=req.params;
        const data_res =await bd.query("select * FROM usuario u WHERE u.id = ?", [id]);   
        console.log(data_res.length);    
        if(data_res.length > 0){
            return res.json({text:'Usuario Encontrada', codigo:0, data:data_res[0]});
        }else{
            res.status(404).json({text:'Usuario no encontrada',codigo:1});
        }
    }
    public async create(req:Request, res:Response):Promise<void>{
        await bd.query('INSERT INTO usuario set ?', [req.body]);       
        res.json({text:'Usuario Guardada Con Exito',codigo:0});
    }
    public async delete(req:Request, res:Response):Promise<void>{
        const {id}=req.params;
        await bd.query('DELETE FROM usuario WHERE documento = ?', [id]);
        res.json({text:'Usuario Eliminada Con Exito',codigo:0})
    }
    public async update(req:Request, res:Response){
        const {id}=req.params;
        await bd.query('UPDATE usuario SET ? WHERE documento= ?', [req.body, id]);
        res.json({text:'Usuario Actualizada Con Exito',codigo:0})
    }

}
export const usuarioController=new UsuarioController();