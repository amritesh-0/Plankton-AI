from flask import Flask, request, jsonify
from flask_cors import CORS
import logging
from predict_model import predict_disease  # Now a sync function

# Initialize Flask app
app = Flask(__name__)
CORS(app)

logging.basicConfig(level=logging.INFO)

@app.route('/upload', methods=['POST'])
def upload():
    try:
        if 'file' not in request.files:
            return jsonify({"error": "No file uploaded"}), 400

        file = request.files['file']

        if file.filename == '':
            return jsonify({"error": "No selected file"}), 400

        result = predict_disease(file)
        return jsonify(result)

    except Exception as e:
        logging.error(f"Error in /upload: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
