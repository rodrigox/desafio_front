


 


***********Historias de usuario ***************

00 Criar um novo usuario e Listar Usuarios 

01 Buscar Usuario por ID 

02 Remover Usuario 

03 Atualizar Usuario 


#Usuario logado 


HST 04 Cadastrar e listar carro do Usuario

HST 05 Buscar Carros do usuario por id 

HST 06 Remover carro do usuario 

HST 07 Atualizar carro do usuario 

HST  08 Exibir informações do usuario 

HST 09 Autenticação Utilizando Token JWT 


***********SOLUÇÃO **************

* O projeto foi construido utilizando  Angular (Cli),Typescript,Bootstrap

* Para  navegação / roteamento foi criado um modudo de router onde foram adicionados os paths da aplicação 

* Foi criado também um modulo de Autenticação onde o usuario poderá realizar login e ter acesso as rotas  protegidas 

	api/me
	api/cars
	api/cars/{id}

* Para acomodar as operações do Usuario foi criado o mudulo "user" 
    1 Foi adicionado um service "user.service" que consome os serviços do Backend 
	2 Definidas  operações que são consumidas, como também o paths 
	3 Definido component para tratar das ações da view do usuario  (cadastro de usuario, listagem entre outros )
	

 
************INSTRUÇÕES  PARA EXECUTAR O PROJETO  **************


* intalar um cliente git na maquina 

* Baixar o projeto do repositorio remoto  ->   https://github.com/rodrigox/desafio_front.git

* Utilizar o Git bath ou terminal para instalação da fonte awsome "npm install --save font-awesome angular-font-awesome"



* Utilizar o Git bath ou terminal para startar a aplicação utilizando o comando : npm start

* Acessar a URL http://localhost:4200/home no navegador .



