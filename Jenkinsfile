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
        sh 'npm run build'
        bat(script: 'npm run build', encoding: 'npm run build')
      }
    }

  }
}