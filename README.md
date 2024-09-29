# Address Management Frontend

This is a React-based frontend application for managing user addresses. It interacts with a backend API to register users and retrieve addresses.

## Features

- User registration with name and address.
- Displays a list of addresses from the database.
- Alerts users upon successful address addition.

## Technologies Used

- React
- CSS
- Fetch API

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
2. Install the dependencies:

   ```bash
   npm install

3. To start the application, run:

   ```bash
   npm start

This will start the React development server, and you should see the application running at http://localhost:3000.

### API Endpoints
The frontend interacts with the following backend API endpoints:

1. Register User and Add Address
   ```bash
   POST https://smoke-tree-backend.onrender.com/register

   {
     "name": "User Name",
     "address": "User Address"
   }

2. Get Addresses
   ```bash
   GET https://smoke-tree-backend.onrender.com/address

Response:
  Returns a list of all addresses with user details.
Usage
  Fill in the username and address in the provided form.
  Click the "Submit" button to register the user and add the address.

The application will alert you upon successful registration and will display the updated list of addresses.
Styling

The application uses basic CSS for styling. You can find the styles in App.css.

Contributing
Feel free to submit issues and pull requests. Contributions are welcome!
