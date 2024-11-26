# 0x07. React, Redux, Action Creators, and Normalizr

This project focuses on core concepts of state management with Redux, writing action creators, managing async actions, and normalizing nested JSON data with Normalizr.

---

## Concepts Covered

1. **React & Redux**:
   - **Store**: Holds the application state.
   - **Actions**: Objects that describe changes to the state.
   - **Reducers**: Pure functions that update the state based on actions.
   - **Action Creators**: Functions that return action objects.
   - **Async Actions**: Handle side effects like API calls using middleware (e.g., `redux-thunk`).

2. **Normalizr**:
   - Used to normalize deeply nested JSON into a flat structure.
   - Simplifies state updates and retrieval by storing entities by IDs.

---

## Installation and Setup

1. **Install Dependencies**:
   ```bash
   npm install redux react-redux normalizr redux-thunk
   ```
2. **Run the project**:
   ```bash
   npm start
   ```