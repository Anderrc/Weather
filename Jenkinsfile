pipeline {
  agent any
  stages {
    stage('Checkou') {
      steps {
        git(url: 'https://github.com/Anderrc/Weather', branch: 'main')
      }
    }

    stage('build') {
      steps {
        powershell(script: 'npm run build', returnStatus: true)
      }
    }

  }
}