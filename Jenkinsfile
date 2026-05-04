@Library("Shared") _
pipeline{
    
    agent {label "vinod"}
    
    stages{
        
        stage("Checkout Code"){
            steps{
                echo "This is cloning the code"
                git url: "https://github.com/Avinash8600/cloud-native-todo-app-k8s.git", branch:"main"
                echo "Code cloning done..."
            }
            
        }
        stage("Build Docker Image"){
            steps{
                echo "This is building the code"
                sh "docker build -t avindock/cloud-native-todo-app-cicd:latest ."
            }
            
        }
        stage("Run Tests"){
            steps{
                echo "Running basic tests..."

        sh '''
        # Check required files
        test -f index.html
        test -f dashboard.html
        test -f script.js
        test -f style.css

        # Check docker image exists
        docker images | grep cloud-native-todo-app-cicd

        # Remove old test container if exists
        docker rm -f test-container || true

        # Run container on different port (safe)
        docker run -d -p 8081:80 --name test-container avindock/cloud-native-todo-app-cicd:latest

        sleep 5

        # Check app response
        curl -f http://localhost:8081 || exit 1

        # Cleanup always
        docker rm -f test-container
        '''

        echo "All tests passed ✅"
            }
        }

        stage("Push Image to DockerHub"){
            steps{
                echo "This is pushing the image to Docker Hub"
                withCredentials([usernamePassword(
                    credentialsId: "DockerHubCred",
                    usernameVariable: "DockerHubUser",
                    passwordVariable: "DockerHubPass"
                )]){
                    
                    sh '''
                    echo "$DockerHubPass" | docker login -u "$DockerHubUser" --password-stdin
                    #docker login -u $DockerHubUser -p $DockerHubPass
                    '''
                    
                    sh "docker push avindock/cloud-native-todo-app-cicd:latest"
                }
            }
        }

        stage("Deploy"){
            steps{
                echo "This is deploying the code"
                
                sh """
                docker stop todo-app-container || true
                docker rm todo-app-container || true
                docker run -d -p 80:80 --name todo-app-container avindock/cloud-native-todo-app-cicd:latest
                """
                echo "App is live 🚀"
            }
        }
        stage("Debug Library") {
            steps {
                script {
                    echo "Testing shared library from VS code after SCM..."
                    hello()
                }
            }
        }

        
    }
    
    
}