pipeline {
  agent any
  stages {
    stage('Checkou') {
      steps {
        git(url: 'https://github.com/Anderrc/Weather', branch: 'main')
      }
    }

    stage('Install') {
      steps {
        sh 'npm i'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

  }
}