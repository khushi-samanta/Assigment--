# Assigment 
Login Page:

What It Does:
The first page asks the user to enter an email and password.

How It Works:
When the user clicks the login button, the app sends these details to an API using Axios. If the details are correct, the API sends back a token. This token is stored in the browser (in local storage) to keep the user logged in.

Result:
Once logged in, the user is taken to the User List page.

User List Page:

What It Does:
This page shows a list of users fetched from the API. It also allows the user to delete a user or click to edit a user's details.

How It Works:
The page makes an API call to fetch users and displays them in cards. The user can navigate between different pages of users (pagination).

Actions:

Edit Button: Takes the user to the Edit page.

Delete Button: Sends a delete request to remove that user (this is simulated with the dummy API).

Edit Page:

What It Does:
This page lets the user update a selected user’s details.

How It Works:
When the page loads, it gets the user’s current details from the API . A form is pre-filled with the user’s data.

Result:
After editing and submitting the form, the changes are sent to the API, and the user is navigated back to the User List page.

Styling & Responsiveness:

What It Does:
The project uses Bootstrap and some custom CSS to make sure everything looks neat and works well on both desktops and mobile devices.

How It Works:
CSS files (like Login.css, UserList.css, and Edit.css) define the layout and appearance of each page, while Bootstrap classes handle basic styling and responsiveness.

How to Run the Project:

Installation:
First, you install the required packages using npm install.

Starting the App:
Run npm start in your terminal. This launches the development server and opens your project in a web browser.
 
