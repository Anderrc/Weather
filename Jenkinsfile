pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        powershell 'git pull origin main'
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