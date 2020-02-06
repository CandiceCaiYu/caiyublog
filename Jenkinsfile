pipeline {
  agent { 
    docker {
      image 'node:latest'
      
    }
    
     }
  environment {
      CI = 'true'
    }
  stages {
    stage('build') {
      steps {
        sh 'echo "Hello World 1-16-task-demo-2"'
        sh 'yarn install'
      }
    }
    stage('test'){
      steps {
        sh 'echo "This is test stage"'
      }
    }
    stage('deliver') {
      steps {
        sh 'echo "This is Deliver stage"'
        input message: 'Finished using the web site?(Click "Proceed" to continue)'
        sh 'echo "----end----"'
      }
    }
  }
}