const fetch = require("node-fetch");
const objectConverter = require("../helpers/objectConverter");
const Diagrama = require("../models/Diagrama")

const handleRequests = async (rota, options = {}) => {
   const blob = await fetch(`${process.env.BASE_URL}/${rota}`, options);
   const data = await blob.json();
   return data;
}

const checkData = (data, res, erro) => {
   if (data)
      return res.json(data)
   else
      return res.json(erro)
}

module.exports = {
   listar: async (req, res, next) => {
      try {
         const data = await handleRequests("processo/listar")
         res.json(data)
      } catch (error) {
         next(error)
      }
   },

   buscar: async (req, res, next) => {
      try {
         const id = req.params.id
         const data = await handleRequests(`processo/buscar/${id}`);
         if (data)
            res.json(data)
         else
            res.json({ erro: "nenhum diagrama encontrado" })
      } catch (error) {
         next(error)
      }
   },

   inserir: async (req, res, next) => {
      try {
         const body = objectConverter(req.body.data);
         const newDiagrama = new Diagrama({ processo: JSON.stringify(body) })
         await newDiagrama.save();
         res.json({ mensagem: "sucesso" })
      } catch (error) {
         next(error)
      }
   },

   atualizar: async (req, res, next) => {
      const { id } = req.params;
      let novoDiagrama;
      req.query.update ?
      novoDiagrama = objectConverter(req.body.processo) :
      novoDiagrama = req.body.data;
      try {
         const diagram = Diagrama.findById(id);
         diagram.processo = novoDiagrama
         await Diagrama.save()
      } catch (error) {
         next(error)
      }

   },

   remover: async (req, res, next) => {
      try {
         const id = req.params.id
         const data = await handleRequests(`processo/remover/${id}`, { method: "DELETE" })
         res.json({ mensagem: "diagrama deletado com sucesso" })
      } catch (error) {
         next(error)
      }
   },

   automatizar: async (req, res, next) => {
      try {
         const id = req.params.id
         const data = await handleRequests("gerador/inserir", { method: "POST", body: { processoID: id } })
      } catch (error) {
         next(error)
      }
   }

}