*É necessário ter o app Postman!*

Você vai entrar no seu terminal e vai dar um npm run dev. Com o localhost funcionando na porta que você colocou no seu código
Abra o Postman. Nesse codigo basico, basicamente funciona somente as requisições GET e POST. A porta que está no meu codigo é a
que está funcionando na minha maquina, porém, se na sua não funcional troque a porta por alguma que funcione no seu computador!

Com a requisição GET e o link que você quer OBTER a resposta que no caso aqui será (http://localhost:"PORTA"/).
"OBS: Essa barra é o endpoint para acessar as tarefas adicionadas!"

Assim que você der o GET, nada vai aparecer. Por que você não tem nenhuma tarefa adicionada.

Para adicionar a sua tarefa, você mudará a requisição para POST e também vai mudar o seu endpoint. E o ip ficará assim:
(http://localhost:"PORTA"/tasks) no Postman existe um local chamado body que significa corpo! E como esse codigo é um JSON
você precisara também escrever em JSON nesse terminal abaixo do link da requisição e assim você fará.

{
"description": "Qual é a sua tarefa"
}

e dará o Post e ai você voltara no GET e ai funcionara e aparecera as suas tarefas!

kkkkk tentei explicar! :D

