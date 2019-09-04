const router = require("express").Router();
const controller = require("../controllers/DiagramController")

router.get("/listar", controller.listar)

router.get("/buscar/:id", controller.buscar)

router.post("/inserir", controller.inserir)

module.exports = router