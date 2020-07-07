pipeline {
  environment {
    registry = "matheusmaais/testedocker2"
    registryCredential = "dockerhub"
    container_name = "testedocker"
    dockerImage = ''
  }
  agent any
  stages {
    stage('Git Clone') {
      steps {
        git 'https://github.com/matheusmaais/testegit.git'
      }
    }
    
    stage('Build Image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    
    stage ('Stop Existing container'){
      steps {
         sh '[ -z $(docker ps -q --filter "name=$container_name") ] || docker stop $container_name && docker container prune -f'
         /*sh 'docker container prune -f'*/
      }
   }
    
   stage ('Run Container'){
      steps {
          sh 'docker run -d -p 3000:3000 --name $container_name $registry:$BUILD_NUMBER'
      }
   }
  
   stage('Deploy Image') {
   steps{
    script {
      docker.withRegistry( '', registryCredential ) {
        dockerImage.push()
         }
       }
      }
    }
    
    stage('Remove unused images') {
      steps{
        //sh 'docker images rmi $registry:$BUILD_NUMBER'
        sh 'docker image prune -f -a'
      }
    } 
  }
}


