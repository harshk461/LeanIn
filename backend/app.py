from flask import Flask, request
from flask_cors import CORS
from PIL import Image
from model import Prediction
import os

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "test"


@app.route('/upload', methods=['POST'])
def success():
    if (request.method == 'POST'):
        f = request.files['file']
        img=Image.open(f)
        img.save('test.jpg')
        img_path='test.jpg'
        obj = Prediction("model/224_b0_0.pt")
        output = obj.predict(img_path)
        output=list(x.strip() for x in output.split(','))
        print(output)
        os.remove('test.jpg')
        return {"sucess":output,"File":f.filename}


if __name__ == '__main__':
    app.run(debug=True)
