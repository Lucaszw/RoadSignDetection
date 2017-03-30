import json

from flask import Flask, render_template , request

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
app.config['DEBUG'] = True
app.config['TEMPLATES_AUTO_RELOAD'] = True

@app.route('/boundingBoxes')
def boundingBoxes():
    # print request.args
    # Get bounding boxes here:

    boxes = []
    boxes.append({
        "label": "someSign",
        "x": 100,
        "y": 100,
        "w": 100,
        "h": 100
    })

    boxes.append({
        "label": "someSign",
        "x": 400,
        "y": 400,
        "w": 100,
        "h": 100
    })

    return json.dumps(boxes)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001)
