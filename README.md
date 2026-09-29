# 💣 React Minesweeper

Welcome to the **Minesweeper** repository! This project is a recreation of the classic Minesweeper game built from scratch using **React**. 

The main purpose of this repository is to serve as a hands-on learning project to solidify core React concepts, as well as deepen understanding of DOM manipulation, complex JavaScript logic, and modern CSS/HTML layouts.

---

## 🎯 Learning Objectives

Through the development of this project, the following core concepts are practiced and refined:

- **React:**
  - Building and structuring reusable components (`Board`, `Cell`, `Scoreboard`, etc.).
  - Managing application state using `useState` and side effects with `useEffect`.
  - Handling two-dimensional array states immutably.
- **JavaScript (ES6+):**
  - Algorithms for random mine placement.
  - Cascade/flood-fill algorithms (recursion) to reveal adjacent empty cells automatically.
  - Event handling (left-click to reveal, right-click to place/remove flags).
- **CSS3 & HTML5:**
  - Responsive layouts and centered grids using **CSS Grid** and **Flexbox**.
  - Visual state styling (hidden, revealed, mine, flag, and numerical indicators).
  - Basic accessibility and interactive UI elements.

---

## 🛠️ Built With

- **React** (Vite / Create React App)
- **JavaScript** (ES6+)
- **CSS3**
- **HTML5**

---

## 🎮 Game Features

- 🚩 **Flagging System:** Right-click to flag potential mine locations and prevent accidental clicks.
- 🔍 **Auto-Clear (Flood Fill):** Clicking an empty cell automatically clears neighboring safe areas.
- ⏱️ **Mine/Flag Counter:** Real-time feedback on remaining flags and mines.
- 🔄 **Quick Reset:** Reset button to start a new game instantly.
- 💥 **Win/Loss States:** Dynamic feedback upon victory or detonating a mine.
