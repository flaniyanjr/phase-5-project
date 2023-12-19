# Phase 5 Full-Stack Application Project

## PickupPal

Welcome to PickupPal! This web application allows users to create and sign up for sports-related pickup games in their area. The app was built as a final project for the Flatiron School Software Engineering Bootcamp. It utilizes React for the front end and Flask for the back end. 

---

## Features

- **User Authentication**: Users can create an account (or login if an account was previously created) in order to save their personal choices.
- **Register for a Game**: Users can register for an existing pickup game.
- **Manage Registered Games**: Users can see all of the games they registered for in their personal games page, and unregister from a game if need be.
- **Create New Pickup Game**: Users can create a new pickup game, thus adding it to the overall list of games.
- **Update and Delete Created Game**: Users can update the date and time of a game that they created, and also delete a created game.
- **Controlled Searches**: Users can filter games by sport, and sort games by date, time, state, and total attendeees.

## Technologies Used
- Frontend
    - **React**: JavaScript library for building user interfaces.
    - **React Router**: For managing navigation within the app.

- Backend
    - **Flask**: Python web framework used for the server-side application.
    - **SQLAlchemy**: ORM for interacting with the database.
    - **Flask-CORS**: Handling Cross-Origin Resource Sharing


## Where Do I Start?

To run the application, follow these steps:

1. Clone the repository
2. In your terminal, run pipenv install & pipenv shell
3. Run npm install --prefix client
4. Run python server/app.py to start the backend
5. Run npm start --prefix client to start the frontend


### Author
This application was created by Felix Laniyan.

