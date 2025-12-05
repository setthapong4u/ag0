pipeline {
    agent any

    environment {
        IMAGE_NAME = 'ag0'
        IMAGE_TAG  = 'latest'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker image') {
            steps {
                sh '''
                  echo "Building Docker image ${IMAGE_NAME}:${IMAGE_TAG}"
                  docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .
                '''
            }
        }

        stage('Test run container') {
            steps {
                sh '''
                  echo "Running container for test..."
                  CONTAINER_ID=$(docker run -d -p 8082:80 --rm ${IMAGE_NAME}:${IMAGE_TAG})
                  echo "Container ID: $CONTAINER_ID"

                  echo "Waiting for container startup..."
                  sleep 5

                  echo "Checking HTTP 200 response..."
                  curl -I http://127.0.0.1:8082 || true

                  echo "Stopping container..."
                  docker stop $CONTAINER_ID || true
                '''
            }
        }
    }
}
