"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // this.router.get('/',(req, res)=>res.send("LISTA "))
        this.router.get('/', indexController_1.indexController.index);
    }
}
const indexroutes = new IndexRoutes();
exports.default = indexroutes.router;
