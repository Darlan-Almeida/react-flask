from flask import Flask, render_template


app = Flask(__name__ , static_folder="../../web/dist", static_url_path='', template_folder='../../web/dist')

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/<path:path>', defaults={'path': 'index.html'})
def static_file(path):
    return app.send_static_file(path)

if __name__ == "__main__":
    app.run(debug=True)
