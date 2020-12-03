# Desafio iFood

Desafio técnico que visava implementar um back end usando .Net Core e um front end utilizando Angular.

## Como rodar?
É necessário ter um banco SQL Server e rodar este [script](https://github.com/vinisaeta/desafio-netcore-angular/blob/main/Script/create-table.sql), além de atualizar a ConnectionString do arquivo [appsettings.json](https://github.com/vinisaeta/desafio-netcore-angular/blob/main/iFood/iFood.Mercado.API/appsettings.json).

Em seguida basta roda o projeto iFood.Mercado.API que automaticamente irá subir uma versão já deployada do front end da aplicação;


## Ambiente de desenvolvimento utilizado
Para desenvolver o desafio foram usados os seguintes recursos:
- Sistema Operacional: MacOS Mojave
- IDE: Visual Studio fo Mac e Visual Studio Code
- Banco de Dados: SQL Server rodando em Docker

## Considerações Técnicas
O desafio foi implementado como solicitado nos requisitos pedidos. Entendo que os requisitos foram simplificados para não tornar o desafio maior que o necessário, porém gostaria de registrar algumas alternativas ou estratégias a serem adotadas em cenários reais:
- **Autenticação:** A abordagem mais adequada para os cenários de SPA com uma WEB API seria o uso de um ```Token JWT``` ao invés de ```HTTP Basic Authentication```.
- **Notification Pattern:** Devido a simplicidade do contexto fiz uso de exceções para validação de domínio, porém em cenários mais complexos é interessante substituir esse tipo de estrégia pelo padrão Notification Pattern, visto que o lançamento de exceção de forma indiscriminada, e em grande escala de usuários, pode afetar a performance da aplicação.
- **Armazenamento de Imagem:** Acredito que a forma mais adequada para armazenamento de imagens seja através de serviços de Storages como ```S3``` e ```Azure Blob Storage``` por exemplo. 
- **Modelos de Escrita e Leitura:** Como o cenário do desafio era algo bem simples, a estratégia de separar em modelo de escrita e leitura não foi adotada. Entretanto em cenários mais complexos na qual se tenha múltiplas visões de uma única informação, vale adotar a estratégia para melhorar segregação de código e ganho de performance.
- **Async/Await:** Vale destacar que para aplicações que possuam grande volume de acesso, o uso de ```Async``` e ```Await``` trará ganho de performnace. O mesmo não foi usado no desafio devido a natureza do exercício.
- **Swagger:** Não foi solicitado, porém está disponível a documentação da API do Desafio, através da rota```/swagger```.


## Screenshots
Seguem abaixo algumas imagens referentes a versão Desktop e Mobile para ilustrar a responsividade implementada no desafio:
<div>
<img src="https://github.com/vinisaeta/desafio-netcore-angular/blob/main/screenshots/desktop/desktop.png" width="1100"/> 
</div>

<div>
<img src="https://github.com/vinisaeta/desafio-netcore-angular/blob/main/screenshots/mobile/mobile.png" width="1100"/> 
</div>
