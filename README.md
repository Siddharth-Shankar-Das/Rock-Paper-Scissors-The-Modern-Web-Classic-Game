# Rock-Paper-Scissors-The-Modern-Web-Classic-Game

✂️ Rock-Paper-Scissors Game

A classic Rock-Paper-Scissors game implemented using HTML, CSS, and modern JavaScript (ES6+). This version includes persistent score tracking using **`localStorage`** and an **Auto-Play** feature.

✨ Features
**Classic Gameplay:** Play against the computer using Rock, Paper, or Scissors.
**Persistent Score:** Your Wins, Losses, and Ties are saved locally in the browser's storage, persisting even after you close the tab.
**Reset Score:** A dedicated button to wipe the scoreboard clean.
**Auto-Play Mode:** Enable continuous, hands-free gameplay that automatically stops and starts.
**Responsive Design:** Styled with CSS3 for a clean and simple dark-mode interface.

---

🚀 How to Run the Project

This project is a static front-end application and does not require a complex build process or server.

### Prerequisites

You only need a modern **web browser** (like Chrome, Firefox, Safari, or Edge) to run this game.

### Steps

1.  **Save the Files:** Ensure you have the three files (`index.html`, `rock-paper-scissor.css`, and `rock-paper-scissor.js`) saved correctly in the folder structure assumed by the HTML:

    ```
    /ProjectRoot/
    ├── index.html
    │   ├── Styles/
    │   │   └── rock-paper-scissor.css
    │   ├── Logic/
    │   │   └── rock-paper-scissor.js
    │   └── Images/
    │       ├── rock-emoji.png
    │       ├── paper-emoji.png
    │       └── scissors-emoji.png
    ```

    **(Note: You will also need the corresponding image files for the emojis.)**

2.  **Open `index.html`:** Locate the `index.html` file on your computer.

3.  **Launch in Browser:** **Double-click** the `index.html` file.

The game will automatically open in your default web browser, and you can start playing immediately!

---

## 🛠️ Technology Stack

* **HTML5:** For the page structure and semantic content.
* **CSS3:** For styling, including the dark theme and button aesthetics.
* **JavaScript (ES6+):** For the core game logic, score management, and the `setInterval` function used for Auto-Play.

---

## 🧠 Game Logic Explained

The game uses simple decision logic and `localStorage` for score management:

* **`score` Object:** An object `{ win, lose, tie }` stores the current scores and is retrieved from/saved to `localStorage` as a JSON string.
* **`playGame(playerChoice)`:** Determines the computer's random move, compares it to the player's move to find the `result`, updates the `score`, and refreshes the display.
* **`autoPlay()`:** Toggles the automatic game function. It uses `setInterval` to call `playGame` every **2 seconds** with a random player choice, allowing the game to run continuously until the "Stop Play" button is clicked, which calls `clearInterval`.
