pipeline {
  environment {
    registry = "matheusmaais/testedocker2"
    registryCredential = "dockerhub"
    container_name = "testedocker"
    dockerImage = ''
  }
  agent any
  stages {
    stage('Clonando Git') {
      steps {
        git 'https://github.com/matheusmaais/testegit.git'
      }
    }
    stage('Building image') {
      steps{
          echo "Buildando Imagem"
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage ('Parando o container existente'){
      steps {
         sh '[ -z $(docker ps -q --filter "name=$container_name") ] || docker stop $container_name && docker container prune -f'
         /*sh 'docker container prune -f'*/
      }
   }
   stage ('Rodando Container'){
      steps {
          sh 'docker run -d -p 3000:3000 --name $container_name $registry:$BUILD_NUMBER'
      }
   }
   /*stage ('Registrando no Dockerhub'){
      steps{
          //sh 'docker login -u "matheusmaais" -p "tampico" docker.io'
          sh 'docker push  $registry:$BUILD_NUMBER'
      }
   }*/
   stage('Deploy Image') {
   steps{
    script {
      docker.withRegistry( '', registryCredential ) {
        dockerImage.push()
         }
       }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        //sh 'docker images rmi $registry:$BUILD_NUMBER'
        sh 'docker image prune -f -a'
      }
    }
}
}


