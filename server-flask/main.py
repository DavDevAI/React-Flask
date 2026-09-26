from flask import Flask
from flask_cors import CORS #CHECK THE VERSION AND THE VENV for the setup of the project

app = Flask(__name__)
CORS(app) #enables CORS in all routes
#CORS ALLOWS that my app accepts HTTP requests coming from a DOMAIN, PORT, SUBDOMAIN or different that its own

@app.route('/')
def hello_world(): 
    return 'Hello World!'

@app.route('/api/users')
def get_users(): 
    return {
        'users': [ 
            {

            'id': 1, 
            'name' : 'Alice'
            },
            {
                'id': 1, 
                'name' : 'Bob'
            }, 
            {
                'id': 1, 
                'name' : 'Juan'
            }, 
        ]  #no importa que formato le demos, siempre nos lo regresa en formato JSON
    }

@app.route('/api/fruits')  #Esto lo que fue es un request directo a nuestra API
def get_fruits(): 
    return ['Apple', 'Banana','Cherry']


if __name__ == '__main__': 
    app.run(debug=True) #by defaults restarts our server each time a change is done runs on port 5000