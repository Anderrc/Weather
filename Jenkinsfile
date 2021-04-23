pipeline {
  agent any
  stages {
    stage('Checkout') {
      parallel {
        stage('Checkout') {
          steps {
            git(url: 'https://github.com/Anderrc/Weather.git', branch: 'main')
            archiveArtifacts 'node_modules'
          }
        }

        stage('error') {
          steps {
            powershell 'git pull origin main'
          }
        }

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

    stage('publish') {
      steps {
        powershell 'cd build'
        powershell 'git checkout build'
        powershell 'git add . '
        powershell 'git commit -am "add change jenkins"'
        powershell 'git push origin build'
      }
    }

  }
}