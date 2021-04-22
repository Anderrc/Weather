pipeline {
  agent any
  stages {
    stage('Checkou') {
      steps {
        git(url: 'https://github.com/Anderrc/Weather', branch: 'main')
      }
    }

    stage('Install') {
      parallel {
        stage('Install') {
          steps {
            sh 'npm install'
          }
        }

        stage('') {
          steps {
            powershell 'npm install'
          }
        }

      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

  }
}