import { Router } from "express";

import { usuarioController } from "../controllers/usuariosController";

class IndexRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/', usuarioController.list);
        this.router.get('/:id', usuarioController.getOne);
        this.router.post('/', usuarioController.create);
        this.router.put('/:id', usuarioController.update);
        this.router.delete('/:id', usuarioController.delete);
    }
}
const indexroutes = new IndexRoutes();
export default indexroutes.router;
