# Progressive Web Application: Text Editor

## Overview

The Text Editor is a web-based application that allows users to create, edit, and store text documents in their browser. The application is designed as a Progressive Web Application (PWA) that works offline and can be installed on your desktop or mobile device.

This project leverages the power of `idb`, a lightweight wrapper for IndexedDB - a low-level API for client-side storage of significant amounts of structured data. This allows the application to function reliably even without an internet connection, providing a seamless user experience.

The application is bundled with Webpack and employs next-generation JavaScript features ensuring optimal performance and efficient resource management.

## Features

* Online and offline functionality.
* IndexedDB for data persistence.
* Service Worker for caching and faster load times.
* Web Manifest for installability.
* Heroku deployment.

## Usage

To use the text editor, simply open the application in your web browser. You can enter text directly into the text editor. Your entries are saved as you type, even if you close your browser or lose your internet connection.

You can also install the application for easier access. Click the Install button in the address bar of your browser and follow the prompts.

## Deployment

The application is deployed on Heroku and can be accessed [here](https://module191-7882ca207ec1.herokuapp.com/).

## Development

To run the application locally, clone the repository and install the dependencies by running `npm install`. You can start the application with `npm run start`. 

Make sure you have Node.js and npm installed in your system.

---

Feel free to customize this README to better suit your project's needs!

