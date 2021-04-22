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
        build(job: 'build ', quietPeriod: 3)
      }
    }

  }
}