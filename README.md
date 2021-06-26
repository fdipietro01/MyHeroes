
# My Heroes 
(for Alkemy Challenge)

Funny App to create a team of superheroes/villans based in a huge heroe´s database provided by Alkemy.   

## Description

It allows browsing through a universe of heroes, consulting their powerstats and another interesting features and selecting those that user like to made a 6 members team.

## Features

- Keeps all the App sections privated until the user get the correct credentials.
- Validates the login credentials at http://challenge-react.alkemy.org/ and recive a token from it place when credentials are the correct ones. 
- Save the token at localStorage to keep sesion open until the user log our or browser session finished.
- Connect with the https://superheroapi.com/ API service to access to superheroes database.
- Allows a preview and a deatailed view of each each superhero, their stats and characteristics.
- All the characters are recheable from a name sekeer.
- Let the user choose a 6 member team composed by util 3 good heroes and 3 bad ones. Also let add neutral heroes too. 
- At the team view, all added stats are calculated and the prevailing one is highlighted to point team´s most developed skill.
- To change heroes, add new ones, deleting previous ones its aloud too.

### `Techs`

 - React Js
 - Node Js
 - React Bootstrap
 - Axios library
 - Formik library
 - FontAwsome Lybrais

### `Usage`

- Clone the repository.
- Make sure you have installed Node Js version v14.16.0 or higher.
- From the directory internal to Root-py where the package.json file is located, open the console and execute the following commands:

    - npm install
    (installs all modules / dependencies used in the project - the process may take a few minutes)
    - npm start
    (it will automatically open the project on the port [http: // localhost: 3000] (http: // localhost: 3000))
    -to get a succesfull logIn, insert this credential:
    user:challenge@alkemy.org
    password:react

### `Take a look`

![](.gif)
