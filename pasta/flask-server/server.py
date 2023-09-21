from flask import Flask, render_template


app = Flask(__name__ , template_folder="../client/public/src/index.html")


@app.route('/')
def index():
    return render_template(template_folder)


if __name__ == "__main__":
    app.run(debug=True)
