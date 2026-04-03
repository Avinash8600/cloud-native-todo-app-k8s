# 🚀 Cloud-Native To-Do App on Kubernetes

## 📌 Overview

A modern, cloud-native To-Do web application built using **HTML, CSS, and JavaScript**, containerized with **Docker**, and deployed on **Kubernetes**. The application is exposed using an **NGINX Ingress Controller**, simulating a production-like environment on AWS EC2.

This project demonstrates core **DevOps and Cloud Engineering practices**, including containerization, orchestration, and traffic routing.

---

## 🧩 Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Containerization:** Docker
* **Orchestration:** Kubernetes (K8s)
* **Ingress Controller:** NGINX
* **Cloud Platform:** AWS EC2

---

## ⚙️ Features

* ✨ Modern UI with glassmorphism design
* ➕ Add and delete tasks
* 💾 Persistent storage using browser localStorage
* 🌐 Exposed via Kubernetes Ingress
* 📦 Containerized using Docker

---

## 🏗️ Architecture

```
User → NGINX Ingress → Kubernetes Service (ClusterIP) → Pod (To-Do App)
```

---

## 🚀 Deployment Steps

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/cloud-native-todo-app-k8s.git
cd cloud-native-todo-app-k8s
```

### 2️⃣ Build Docker Image

```bash
docker build -t todo-app .
```

### 3️⃣ Deploy to Kubernetes

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f ingress.yaml
```

### 4️⃣ Access the Application

```bash
http://<EC2-PUBLIC-IP>:<INGRESS-PORT>
```

---

## 📂 Project Structure

```
cloud-native-todo-app-k8s/
│
├── index.html
├── style.css
├── script.js
├── Dockerfile
├── deployment.yaml
├── service.yaml
├── ingress.yaml
└── README.md
```

---

## 📸 Screenshots

*Add screenshots of your app here to make it more attractive.*

---

## 🔥 Key Learnings

* Kubernetes Deployment & Service configuration
* Ingress setup using NGINX
* Containerizing frontend applications with Docker
* Exposing applications in a production-like environment

---

## 🌱 Future Enhancements

* 🔐 Add HTTPS using TLS
* 🌍 Configure custom domain
* ⚙️ CI/CD pipeline (GitHub Actions)
* 🗄️ Backend + Database integration

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

---

## 📧 Contact

**Avinash Wagh**
Software Engineer | DevOps Enthusiast

---

⭐ If you like this project, give it a star!
