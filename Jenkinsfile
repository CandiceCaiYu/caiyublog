pipeline {
  agent { 
    docker {
      image 'node:6-alpine'
      args '-p 3000:3000'
    }
    
     }
  environment {
      CI = 'true'
    }
  stages {
    stage('build') {
      steps {
        sh 'echo "Hello World 1-16-task-demo"'
        sh 'npm install'
      }
    }
    stage('test'){
      steps {
        sh './jenkins/scripts/test.sh'
      }
    }
  }
}