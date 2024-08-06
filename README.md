# Ticketing System Backend

Welcome to the backend repository of the Ticketing System project. This project provides a comprehensive solution for managing tickets, designed with scalability and performance in mind.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

This project is a backend implementation of a ticketing system, developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The system allows users to create, manage, and track tickets efficiently. This repository focuses on the backend functionalities, ensuring robust performance and seamless integration with the frontend.

## Features

- User Authentication and Authorization
- Ticket Creation and Management
- RESTful API Design
- Error Handling and Logging

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: ODM for MongoDB
- **JWT**: JSON Web Tokens for authentication
- **Socket.io**: Real-time bidirectional event-based communication

## Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Ashishkc22/ticketing-system-backend.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd ticketing-system-backend
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following variables:
    ```plaintext
    MONGODB_URI=<Your MongoDB URI>
    JWT_SECRET=<Your JWT Secret>
    ```

5. **Start the server:**
    ```bash
    npm start
    ```

## Usage

Once the server is running, you can interact with the API using tools like Postman or by integrating it with the frontend of the ticketing system.
