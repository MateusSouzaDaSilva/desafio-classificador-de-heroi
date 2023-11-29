# desafio-classificador-de-heroi
Desafio da plataforma DIO para a criação de um sistema de classificação de herói, atraves do terminal escolhe-se o nome do herói e determina a quantidade de xp que ele possui. O nível do herói é definido com base na quantidade de xp.


Seguindo além do conteúdo ministrado nas aulas, utilizei o módulo readLine do Node.js para facilitar a interação com o console e possibilitar a inserção do nome do herói e sua quantidade de xp através do console, deixando o código mais flexível. 


Utilizando o createInterface criei uma interface para ler o fluxo de entrada e escrever no fluxo de saída.


Então chamo essa interface através da função question() passo a pergunta que será exibida e a função de retorno de chamada que será executada quando o usuário fornecer a resposta.


Depois de fazer a verificação do nível por meio dos if's,exibo o nome e o nível do herói no console e fecho interface com a função close()
