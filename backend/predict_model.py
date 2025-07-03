import joblib
import cv2
import numpy as np
import os
from config import CATEGORIES, TREATMENTS  # Ensure this exists and is correct

# Load trained model
MODEL_PATH = "models/sugarcane_disease_model.pkl"
if not os.path.exists(MODEL_PATH):
    raise FileNotFoundError("❌ Model file not found. Train the model first!")

model = joblib.load(MODEL_PATH)

def preprocess_image(image_bytes):
    """Reads, processes, and prepares an image for model prediction."""
    img = cv2.imdecode(np.frombuffer(image_bytes, np.uint8), cv2.IMREAD_GRAYSCALE)
    img = cv2.resize(img, (100, 100))
    return img.flatten().reshape(1, -1)

def predict_disease(file_storage):
    """Takes a Werkzeug FileStorage object, returns prediction and treatment."""
    try:
        image_bytes = file_storage.read()
        processed_image = preprocess_image(image_bytes)
        prediction = model.predict(processed_image)[0]
        disease_name = CATEGORIES[int(prediction)]
        treatment = TREATMENTS.get(disease_name, "No treatment available.")
        return {"disease": disease_name, "treatment": treatment}
    except Exception as e:
        raise ValueError(f"Prediction failed: {str(e)}")
