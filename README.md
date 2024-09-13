# Quicksell Kanban Board Assignment By Siya Rana

## Demonstration Video

<video width="320" height="240" controls>
  <source src="public/demonstration-siya-.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

public/demonstration-siya-.mp4
## Overview

This project is a simple Kanban board implementation that fetches tickets and users from an API and displays them based on grouping and sorting preferences. The Kanban board is developed using **React** and allows users to group tickets by their `status` or `assignee` and sort them by `priority` or `due date`.

## Features

- **API Integration**: Fetches tickets and users from an API.
- **Dynamic Grouping**: Group tickets based on their `status`.
- **Sorting**: Sort tickets by `priority`.
- **Local Storage**: User preferences for grouping and sorting are saved in local storage and are persistent across page reloads.
- **Responsive UI**: A clean and user-friendly interface, responsive for various screen sizes.

## Project Structure

```
├── src
│   ├── components
│   │   ├── Card.jsx               // Component to display individual tickets
│   │   ├── Column.jsx             // Component to display each column in Kanban
│   │   ├── Header.jsx             // Header component for filters and options
│   │   ├── KanbanBoard.jsx        // Main Kanban board that contains columns and cards
│   ├── styles
│   │   ├── App.css                // Main CSS file for styling
│   │   ├── Card.css               // CSS file for Card Component
│   │   ├── Column.css             // CSS file for Column Component
│   │   ├── Header.css             // CSS file for Header Component
│   │   ├── KanbanBoard.css        // CSS file for KanbanBoard Component
│   └── App.js                     // Main application logic and state management
├── public
│   └── index.html                 // Entry point for the application
└── README.md                      // Project documentation
```

## Components Overview

### 1. App.js
- The main file where the application state is managed.
- Uses `useState` to handle tickets, users, grouping, and sorting.
- Fetches data from an API endpoint using Axios and stores the results in state variables.
- Contains functions to handle changes in grouping and sorting preferences, which are saved in localStorage.

### 2. Header.js
- Displays options for grouping and sorting tickets.
- Grouping can be done by:
  - Status
  - Assignee
- Sorting can be done by:
  - Priority
  - Due Date
- Changes in grouping and sorting trigger re-rendering of the board based on user preferences.

### 3. KanbanBoard.js
- Takes in the tickets and users from the parent App.js and displays them in columns.
- The columns are grouped based on the grouping selected (status or assignee).
- The cards within the columns are sorted based on the selected sorting preference (priority or due date).

### 4. Column.js
- Displays each column in the Kanban board.
- Columns represent either a ticket's status or assignee, depending on the selected grouping.
- Each column contains multiple Card components.

### 5. Card.js
- Displays individual tickets in a column.
- Each card shows ticket details such as:
  - Title
  - Description
  - Priority
  - Due Date
  - Assignee

## API Endpoint

The data is fetched from:

```
https://api.quicksell.co/v1/internal/frontend-assignment
```

The API returns two objects:
- `tickets`: A list of tickets with fields like title, status, priority, due date, and assignee.
- `users`: A list of users with details for each assignee.

## Functionality

### Grouping
- Tickets can be grouped by their current status (e.g., Open, In Progress, Closed) or the assigned user (assignee).

### Sorting
- Tickets can be sorted based on priority (high, medium, low) or due date (ascending order of due dates).

### LocalStorage
- User's selection for grouping and sorting is stored in localStorage to maintain preferences across page reloads.