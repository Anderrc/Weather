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
        bat(script: 'npm run build', encoding: 'npm run build')
      }
    }

  }
}