# Movie Listing App
A movie listing site built with Node.js, Express, Mongoose, and EJS, following the MVC (Model-View-Controller) architecture. The site displays a list of movies from the sample-mflix collection and allows users to view detailed information for each movie, including plot, cast, genres, IMDb ratings, and more.

## MVC Architecture
It is a design pattern used for structuring applications. It separates concerns by dividing the application into three interconnected components:
- Model: The layer responsible for handling data logic and business rules. In this project, it interacts with the database (MongoDB) via Mongoose models.
- View: The presentation layer that displays data to the user. In this project, EJS templates are used to render dynamic HTML based on data provided by the controllers.
- Controller: The layer that handles the user input, processes requests, interacts with the Model, and determines which View to render. It serves as the intermediary between the Model and the View.

## Tech Stack
- Node.js
- Express
- Mongoose
- EJS

## Installation
```bash
git clone https://github.com/MananKansara26/node-mvc-demo.git
cd node-mvc-demo
npm install
```

## Load mongodb sample data
Since this project uses sample data from the `sample-mflix` collection, you'll first need to load the sample data by following the steps outlined [here](https://www.mongodb.com/docs/guides/atlas/sample-data/).

## Set up environment variables
Copy the .env.example file and rename it to .env. Then, fill in the required values. Don't forget to include `sample-mflix` collection name in MongoDB uri
```bash
PORT=server_port
MONGO_URI=your_mongo_db_uri
```

## Usage
To run the app in development mode with Nodemon
```bash
npm run dev
```
To run the app normally
```bash
npm start
```
