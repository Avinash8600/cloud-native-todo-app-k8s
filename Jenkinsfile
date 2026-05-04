@Library("Shared") _
pipeline{
    
    agent {label "vinod"}
    
    stages{
        
        stage("Checkout Code"){
            steps{
                script{
                    checkoutCode("https://github.com/Avinash8600/cloud-native-todo-app-k8s.git", "main")
                }
            }
            
        }
        stage("Build Docker Image"){
            steps{
                script{
                    buildDockerImage("cloud-native-todo-app", "latest", "avindock")
                }
            }
            
        }
        stage("Run Tests"){
            steps{
                script{
                    runTests()
                }
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
                script{
                    deployToDocker()
                }
            }
        } 

        
    }
    
}