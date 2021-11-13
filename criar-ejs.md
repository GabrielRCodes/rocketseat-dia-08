Para criar um arquivo html ejs é necessário:

Abrir a pasta do projeto no terminal
rodar o npm init -y
criar um arquivo index.html na pasta

ESTILIZANDO O ARQUIVO COM BOOTSTRAP
Adicionando BOOTSTRAP:
Ir no site do getbootstrap
Pegar o BootstrapCDN: https://getbootstrap.com/docs/4.1/getting-started/download/
Adicionar o primeiro link stylesheet no head

CRIANDO HTML EJS:

Trocar nome do arquivo html para ejs

Baixar ejs através do terminal:

- npm install ejs

  Baixar express através do terminal:

- npm install express

  Criar arquivo: server.js

PARA RODAR A APLICAÇÃO: acessar http://localhost:8080 no navegador

Caso ocorra problemas com firewall, pesquisar sobre como usar o ufw do ubuntu.

Criar pasta: views

- Arrastar "index.ejs" para a pasta

COMPARTILHANDO HTML:
Criar head.ejs na pasta views
Criar header.ejs na pasta views
Criar footer.ejs na pasta views
Copiar as tags do index para colocar nesses arquivos ejs

TAG EJS PARA ADICIONAR NO INDEX.EJS: <%- include("arquivo para incluir"); %>
EXEMPLO:
<%- include("head"); %>

OBS: Sempre adicionar o include na parte do código onde realmente ficariam as tags do arquivo que foi removido.

OBS: Alterações em arquivos .ejs não precisam da reinicialização do servidor. Já alterações em arquivos .js precisam da reinicialização do servidor.

ORGANIZANDO OS ARQUIVOS:

- Separando partes de páginas de PÁGINAS:
- Criar pasta pages - "No projeto do curso são as páginas index.ejs e about.ejs"
- Criar pasta partials "No projeto do curso são as partes footer.ejs, head.ejs e header.ejs"

ATENÇÃO: Arquivos ejs sempre dentro da pasta VIEWS.

ATENÇÃO: Ao passar objetos no include, deverão ser feitos ajustes para serem adicionados novos objetos em outras páginas.
OBS: Para não precisar fazer isso é necessário entrar no artigo header: <%= typeof pagina != "undefined" ? pagina: "Home" %>

FOREACH:

- Criar os objetos no server.js

Qualities recebe os items.
Foreach lê o objeto em loop, passando por todos os elementos e depois construindo o que for pedido.

Criar o script no index
<% qualities.forEach(function(quality){ // O script não possui =. // O = é para printar elementos na tela, para mostrar os elementos, por exemplo: <%= quality.title %> // Toda vez ao iniciar e finalizar um script em um arquivo ejs é necessário abrir <% e fechar %> podendo colocar <%= ou outros tipos de símbolos.

A const no foreach é uma constante com elementos dentro para o loop onde a função foreach vai passar.
