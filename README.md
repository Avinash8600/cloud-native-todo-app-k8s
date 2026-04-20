# 🚀 Cloud-Native To-Do App (Kubernetes | Helm | AWS)

## 📌 Overview

Designed and deployed a **cloud-native To-Do application** using modern DevOps practices. The application is containerized with Docker, deployed on Kubernetes using **Helm**, and exposed via **NGINX Ingress Controller** on AWS EC2.

This project demonstrates hands-on expertise in **container orchestration, Helm-based deployments, and production-style application exposure using Docker Hub images**.

---

## 🧩 Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Containerization:** Docker (Docker Hub)
* **Orchestration:** Kubernetes
* **Deployment:** Helm
* **Ingress:** NGINX Ingress Controller
* **Cloud:** AWS EC2

---

## ⚙️ Key Features

* Scalable deployment using **Kubernetes + Helm**
* Containerized app using **Docker Hub image (avindock/cloud-canvas-app)**
* External access via **NGINX Ingress**
* Lightweight and responsive UI
* Stateless architecture (client-side persistence using localStorage)

---

## 🏗️ Architecture

**Client → NGINX Ingress → Kubernetes Service → Pod (Docker Container)**

---

## 🚀 Deployment Highlights

* Deployed using **Helm charts for reusable and scalable configuration**
* Used **Docker Hub image** to streamline CI/CD-ready deployment
* Configured **Ingress routing** for external traffic management
* Hosted on **AWS EC2**, simulating real-world production setup

---

## 📂 Project Structure

```bash
.
├── README.md
├── dockerfile
├── helm
│   ├── cloud-native-todo-app
│   │   ├── Chart.yaml
│   │   ├── charts
│   │   ├── templates
│   │   │   ├── NOTES.txt
│   │   │   ├── _helpers.tpl
│   │   │   ├── deployment.yaml
│   │   │   ├── hpa.yaml
│   │   │   ├── httproute.yaml
│   │   │   ├── ingress.yaml
│   │   │   ├── service.yaml
│   │   │   ├── serviceaccount.yaml
│   │   │   └── tests
│   │   │       └── test-connection.yaml
│   │   └── values.yaml
│   └── cloud-native-todo-app-0.1.0.tgz
├── index.html
├── script.js
└── style.css
```

---

## 📈 Key Learnings

* Kubernetes resource management (**Deployment, Service, Ingress, HPA**)
* Helm chart structuring and parameterization
* Docker image lifecycle and registry usage
* End-to-end cloud deployment workflow

---

## 🌱 Future Enhancements

* 🔐 HTTPS with TLS (Ingress SSL)
* 🌍 Custom domain mapping
* ⚙️ CI/CD pipeline integration (GitHub Actions)
* 🗄️ Backend & database integration

---

## 📬 Contact

**Avinash Wagh**
Software Engineer | DevOps & Cloud Enthusiast

---

⭐ **Open to Cloud / DevOps opportunities | Immediate Joiner**
