# Secure Chat App (E2EE)

## Project Description
This is a real-time chat application that ensures privacy using End-to-End Encryption (E2EE). It uses RSA encryption to secure messages so that only the intended recipient can read them. The server acts merely as a relay and cannot decrypt the message content, ensuring complete privacy.

## Tools Used
* **Node.js:** Runtime environment for the server.
* **Express.js:** Web framework to serve the client files.
* **Socket.io:** Library for real-time, bi-directional communication between web clients and the server.
* **JSEncrypt:** Client-side library to handle RSA encryption and decryption in the browser.
* **HTML/CSS:** For the user interface.

## How to Run the Project
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME_HERE/hh8-minor-project-1.git](https://github.com/YOUR_USERNAME_HERE/hh8-minor-project-1.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd hh8-minor-project-1
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the server:**
    ```bash
    node server.js
    ```
5.  **Access the App:**
    Open a web browser and go to `http://localhost:3000`. Open a second tab to simulate a second user.

## What I Learned
* **Socket.io:** I learned how to establish real-time connections using WebSockets to send data instantly between clients.
* **Asymmetric Encryption (RSA):** I understood the concept of Public and Private keys—how a Public key encrypts data that only the corresponding Private key can decrypt.
* **Node.js Server Management:** I learned how to manage connected users in memory and broadcast events (like `user_joined`) to specific clients.