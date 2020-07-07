Lab de teste que visa exercitar a criação de:


  Uma aplicação  de exemplo em note que exibe uma mensagem no browser (roda na porta 3000)
  Dockerizar a aplicação em um docker file
  Submeter ao GitHub
  Rodar uma pipeline no jenkins que executa as seguintes funcoes:
    A cada push no repositorio:
       * Clona o repositório atual
       * Faz o build da imagem e gera uma tag baseado no numero de builds
       * Verifica se existe um conteiner rodando, se sim STOP  nele
       * Roda o container com a imagem buildada
       * Submete a imagem ao dockerhub
       * Remove as imagens não utilizadas localmente
