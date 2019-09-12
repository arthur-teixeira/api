const router = require("express").Router();
const controller = require("../controllers/DiagramController")

router.get("/listar", controller.listar)

router.get("/buscar/:id", controller.buscar)

router.post("/inserir", controller.inserir)

router.put("/atualizar/:id", controller.atualizar)

module.exports = router