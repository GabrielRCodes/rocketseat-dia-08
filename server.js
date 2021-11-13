const express = require("express"); // Criando servidor, dando require no módulo instalado.
const app = express(); // Instanciando o express, guardando na variável app

app.set("view engine", "ejs"); // Falando que será utilizado o ejs // app. carregando tudo o que tem dentro do express // set = método

app.get("/", function (req, res) {
  const items = [
    {
      title: "D",
      message: "esenvolver aplicações/serviços de forma fácil.",
    },
    {
      title: "E",
      message: "JS usa JavaScript para renderizar HTML.",
    },
    {
      title: "M",
      message: "uito fácil de usar.",
    },
    {
      title: "A",
      message: "morzinho",
    },
    {
      title: "I",
      message: "nstall ejs",
    },
    {
      title: "S",
      message: "intaxe simples",
    },
  ];
  // app = pegando tudo do express // get = método // "/" = rota // res.render = renderização do "index"// Não é necessário colocar .ejs já que foi avisado no código que arquivos ejs serão de render // res = response
  const subtitle =
    "Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript";
  res.render("pages/index", {
    qualities: items,
    subtitle: subtitle,
  });
});

app.get("/sobre", function (req, res) {
  res.render("pages/about");
});

app.listen(8080); // app. carrega tudo do express // listen = fica ouvindo uma porta // Chamando porta 8080 para rodar tudo

console.log("Aplicação iniciada!");
