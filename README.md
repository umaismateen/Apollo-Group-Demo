# Rick and Morty GraphQL React Application

Welcome to the Rick and Morty GraphQL React Application! This application allows you to explore data about characters from the popular television show "Rick and Morty" using the GraphQL API. With this application, you can easily query and display information about characters, including their images.

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [State Management](#state-management)
- [Styling](#styling)

## Introduction

This application is built using React and TypeScript and leverages the Rick and Morty GraphQL API to fetch data about characters from the show. GraphQL was chosen over REST API due to its ability to fetch only the required data, reducing unnecessary network load. The application is styled using Chakra UI for a customizable and responsive design.

## Technologies Used

- React: JavaScript library for building user interfaces.
- TypeScript: A statically typed superset of JavaScript for enhanced development.
- GraphQL: Query language for APIs, used to fetch data efficiently.
- Apollo Client: State management library for GraphQL integration.
- Chakra UI: A simple and customizable component library for styling.
- Context API: Built-in state management solution for React applications.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/umaismateen/Apollo-Group-Demo`
2. Navigate to the project directory: `cd Apollo-Group-Demo`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and go to `http://localhost:3000` to view the application.

## Project Structure

The project structure is organized as follows:

```
src/
|-- components/            # Reusable React components
|-- store/                 # Context providers for state management
|-- constants/queries      # GraphQL queries 
|-- theme/                 # Global and component-specific styles
|-- App.tsx                # Main component
|-- index.tsx              # Entry point
|-- ...
```

## API Integration

The GraphQL API integration is handled using Apollo Client. GraphQL queries are defined in the `graphql` directory. The Apollo Client setup can be found in the `index.tsx` file. This setup allows us to fetch data efficiently and update the UI with minimal network requests.

## State Management

The application's state management is done using the Context API. Context providers are defined in the `context` directory. This enables sharing state and functions across components without the need for prop drilling.

## Styling

Chakra UI is used for styling the application. It provides a set of customizable components that follow a design system. The `styles` directory contains global styles and theme configurations. Chakra UI's responsive design capabilities ensure the application looks great on various devices.


Feel free to explore the code and make this Rick and Morty GraphQL React Application your own. Happy coding! 🚀
