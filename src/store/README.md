# Tudo relacionado com redux está nessa pasta
Nem toda aplicação precisa de Redux. Só vai ser usado Redux quando
a aplicação precisar de um estado global.
Como funciona:
  Estado inicial: {
    usuário_logado: false
  }

  Para alterar o estado inicial, o usuário executa uma ação que será
  entendida pelo reducer. O reducer cria um novo estado, altera o valor
  que o usuário pediu e retorna o novo estado.

  ação -> reducer -> novoEstado


# Redux saga
ação (request)  -> saga -> reducer -> success/fail
