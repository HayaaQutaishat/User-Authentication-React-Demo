# User-Authentication-React-Demo


This simple demo application demonstrates the basic functionality of user authentication in a React environment. The application uses the browser's local storage to save the login state, ensuring that the user remains logged in even if they close the browser or reload the page. The login state will only expire after a specified period of time, after which the user will be prompted to log in again. Additionally, the application includes an auto-login feature that automatically logs the user in if they have previously logged in and their login state has not yet expired. This provides a seamless user experience and eliminates the need for the user to constantly enter their login credentials.

The app allows users to log in using their email and password. Once a user logs in, the app saves their status in the state and displays a welcome message and a logout button. This app persist the user's login status even if the user closes the app or refreshes the page, by saving the user data in browser's local storage. 

The logout feature removes the user data and updates the state to reflect that the user is no longer logged in. This simple user authentication app is a basic but functional example of managing user authentication in a React app.


## Prerequisites :

Before you can run this app, you will need to have the following software installed on your machine:

- Node.js
- npm (which comes with Node)




## Setting up the app :

- Clone the repository: git clone https://github.com/[USERNAME]/react-product-ordering.git
- Navigate to the project directory: cd react-product-ordering
- Install all dependencies: run npm install (when you run npm install, you already installed React Router version 5. No need to install it separately)
- Start the development server: run npm start


This will install all necessary dependencies and start the development server. The app will be available at http://localhost:3000 in your browser.


Built With
React - A JavaScript library for building user interfaces
Create React App - A tool for creating React applications with zero configuration
