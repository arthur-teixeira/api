module.exports = diagrama => {
   if (!diagrama) throw new Error("nenhum diagrama recebido")
   const a = {
      codigo: diagrama.id,
      versao: diagrama.versao || "1.0",
      nome: diagrama.nome,
      criador: diagrama.email,
      data: diagrama.data || new Date(),
      tipo: diagrama.tipo || "aplicacao",
      atributosBase: [
         {
            codigo: "APA_ocorrencia",
            descricao: "",
            rotulo: "Ocorrência",
            tipo: "texto",
            mascara: " ",
            nulo: false,
            unico: true
         },
         {
            codigo: "APA_data_geracao",
            descricao: " ",
            rotulo: "Data Geração",
            tipo: "data",
            mascara: "dd / MM / yyyy hh: mm: ss",
            nulo: false,
            unico: false
         },
         {
            codigo: "APA_situacao",
            descricao: " ",
            rotulo: "Situação",
            tipo: "texto",
            mascara: " ",
            nulo: false,
            unico: false
         },
         {
            codigo: "APA_org_consumidora",
            descricao: " ",
            rotulo: "Organização Consumidora",
            tipo: "texto",
            mascara: " ",
            nulo: false,
            unico: false
         },
         {
            codigo: "APA_org_proprietaria",
            descricao: "",
            rotulo: "Organização Proprietária",
            tipo: "texto",
            mascara: "",
            nulo: false,
            unico: false
         },
         {
            codigo: "APA_data_previsao",
            descricao: "",
            rotulo: "Data Previsão",
            tipo: "data",
            mascara: "dd/MM/yyyy hh:mm:ss",
            nulo: true,
            unico: false
         },
         {
            codigo: "APA_data_validade",
            descricao: "",
            rotulo: "Data Validade",
            tipo: "data",
            mascara: "dd/MM/yyyy hh:mm:ss",
            nulo: true,
            unico: false
         }
      ],
      elementos: {
         elementosEventos: [
            diagrama.nodes.map(i => {
               return {
                  codigo: i.id,
                  descricao: i.name,
                  tipo: i.type == "default" ? "padrao" : i.type,
                  x: i.x,
                  y: i.y,
                  rotulo: i.name,
                  rotuloVisivel: i.visibility || true,
                  padrao: {},
                  interface: {}
               }
            })
         ],
         elementosConexoes: [
            diagrama.links.map(i => {
               return {
                  codigo: i.id,
                  tipo: "",
                  tipoModelo: "",
                  elementoInicial: i.source,
                  elementoFinal: i.target
               }
            })
         ],
         elementosGateways: {},
      },
      interface: {}
   }

   return a;
}

