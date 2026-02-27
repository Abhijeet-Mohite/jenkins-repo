

pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/Abhijeet-Mohite/jenkins-repo.git'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                  rm -rf /var/www/html/*
                  cp -r * /var/www/html/
 
                  systemctl restart apache2
                '''
            }
        }
    }

    post {
        success {
              "Deployment Successful 🚀"
        }
        failure {
              "Deployment Failed ❌"
        }
    }
}
 
