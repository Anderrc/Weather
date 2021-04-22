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
        powershell 'npm install'
      }
    }

    stage('Build') {
      steps {
        powershell 'npm run build'
      }
    }

  }
}