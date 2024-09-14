from flask import Flask, send_file, send_from_directory
import os

app = Flask(__name__, static_folder='.')

@app.route('/')
def serve_html():
    return send_file('index.html')

@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('.', filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)