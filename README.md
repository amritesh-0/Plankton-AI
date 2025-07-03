# 🌾 Plankton AI — Protect Your Crops with AI-Powered Disease Detection

Plankton AI empowers farmers with instant and accurate **plant disease detection** using deep learning. Upload a crop image, and our AI model will detect and identify plant diseases to assist with timely treatments and increased yield.

---

## 🚀 Features

* ⚡ Instant plant disease prediction from images
* 🧠 Trained ML model using Convolutional Neural Networks
* 🧪 High-accuracy detection across multiple crop types
* 📦 Modular project structure with separate `frontend` and `backend`
* 🧠 Model served locally using Flask API (can be scaled to cloud)
* 🧬 Git LFS integrated for managing large `.pkl` files

---

## 🧪 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/amritesh-0/Plankton-AI.git
cd Plankton-AI
```

### 2. Setup Python Virtual Environment

```bash
# Navigate to the backend directory
cd backend

# Create virtual environment
python3 -m venv venv

# Activate the virtual environment (Mac/Linux)
source venv/bin/activate

# For Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### 3. Run the Flask Backend

```bash
python app.py
```

### 4. Launch the Frontend (if using React or HTML)

```bash
cd ../frontend
# if React:
npm install
npm run dev
```

> 📸 Upload a crop image **(currently only sugarcane disease)** via the UI and get real-time prediction results from the model.

---

## 🧠 Model Information

* Model Type: `Convolutional Neural Network (CNN)`
* Format: `.pkl` (tracked via Git LFS)
* Trained On: Custom crop disease dataset

---

## 🧰 Tech Stack

* 🐍 Python (Flask, NumPy, OpenCV, scikit-learn)
* 🧠 Machine Learning (CNNs)
* 🌐 React JS
* 📦 Git LFS (for handling large model files)

---

## 📦 Git LFS Setup (For Developers)

If you clone this repo and want to work with the model:

```bash
# Install Git LFS (if not already)
git lfs install

# Pull large files (like .pkl models)
git lfs pull
```

---

## 🤛‍♂️ About the Author

Built with 💡 by [Amritesh Kumar](https://github.com/amritesh-0), CEO at [Localyse.in](https://localyse.in), to bring smart agricultural solutions using AI.

---

## 📜 License

This project is open-source and free to use under the **MIT License**.
