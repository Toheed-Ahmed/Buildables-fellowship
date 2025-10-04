# 🎯 Guess The Number Game

<div align="center">

![Game Preview](https://img.shields.io/badge/Game-Number%20Guessing-3c6fff?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A sleek, interactive number guessing game built with vanilla JavaScript!**

[Features](#-features) • [Installation](#-quick-start) • [How to Play](#-how-to-play) • [Full Code](#-complete-code)

</div>

---

## 📖 About The Project

Test your intuition and logic with this classic number guessing game! The computer thinks of a random number between 1 and 100, and your challenge is to guess it in as few attempts as possible. With real-time feedback, smooth animations, and a clean interface, this game offers an engaging experience for players of all ages.

---

## ✨ Features

- 🎲 **Random Number Generation** - Each game generates a unique number between 1-100
- 💡 **Smart Hints** - Get "Too High" or "Too Low" feedback after each guess
- 📊 **Progress Tracking** - Keep track of your guesses and number of attempts
- 🎨 **Smooth Animations** - Eye-catching pop animations for feedback messages
- ♻️ **Quick Restart** - Start a new game instantly with the restart button
- ⌨️ **Keyboard Support** - Press Enter to submit your guess
- 📱 **Responsive Design** - Perfectly adapts to all screen sizes
- 🎯 **Input Validation** - Ensures only valid numbers between 1-100 are accepted
- 📦 **Single File** - Everything in one HTML file for easy deployment

---

## 🎮 How to Play

1. **Start the Game** - The computer automatically thinks of a number when the page loads
2. **Make Your Guess** - Enter a number between 1 and 100 in the input field
3. **Get Feedback** - Receive hints if your guess is too high or too low
4. **Keep Trying** - Use the hints to narrow down the correct number
5. **Win!** - Guess the correct number and see how many attempts it took
6. **Play Again** - Click the restart button to start a new game

---

## 🚀 Quick Start

### Option 1: Copy and Use
1. Copy the complete code from below
2. Save it as `index.html`
3. Open the file in any web browser
4. Start playing!

### Option 2: Download
1. Download the HTML file from this repository
2. Double-click to open in your browser
3. Enjoy the game!

**No installation, no dependencies, no build process required!**

---

## 💻 Complete Code

Copy the entire code below and save it as `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charset="UTF-8">
  <title>Guess The Number Game</title>
  
  <!-- Google Font -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
  
  <style>
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }
    
    body {
      background-color: #3c6fff;
    }
    
    .container {
      width: min(90%, 31.25em);
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      background-color: #ffffff;
      padding: 4em 2em;
      border-radius: 0.5em;
      box-shadow: -1.5em -1.5em #202020;
      text-align: center;
    }
    
    h3 {
      font-size: 1.2em;
      font-weight: 500;
      line-height: 2em;
      color: #303030;
    }
    
    .input-wrapper {
      width: 70%;
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 1em;
      margin: 3em auto 1.5em auto;
    }
    
    input[type="number"] {
      width: 100%;
      padding: 1em;
      font-size: 1.2em;
      text-align: center;
      border: 2px solid #adaeae;
      border-radius: 0.3em;
      outline: none;
      appearance: textfield;
      -moz-appearance: textfield;
    }
    
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    
    input[type="number"]:focus {
      border-color: #3c6fff;
    }
    
    button {
      font-size: 1em;
      background-color: #3c6fff;
      color: #ffffff;
      border: none;
      outline: none;
      border-radius: 0.5em;
      font-weight: 500;
      cursor: pointer;
    }
    
    #restart {
      margin: 0 auto 0 auto;
      padding: 0.8em 1em;
      display: none;
    }
    
    .result {
      margin-top: 1em;
    }
    
    p {
      font-size: 1em;
      font-weight: 400;
      color: #565b70;
      word-break: break-all;
    }
    
    .error,
    .success {
      padding: 0.5em 0;
      border-radius: 0.3em;
      margin-bottom: 1em;
      animation: pop 0.4s forwards;
      transform: scale(0);
    }
    
    .error {
      background-color: #ffcbcb;
      color: #ff3e3e;
    }
    
    .success {
      background-color: #b9ffd5;
      color: #05c451;
    }
    
    @keyframes pop {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
  </style>
</head>

<body>
  <div class="container">
    <div id="game">
      <h3>
        I am thinking of a number between 1-100.<br />
        Can you guess it?
      </h3>
      <div class="input-wrapper">
        <input type="number" placeholder="00" id="guess" />
        <button id="check-btn">Guess</button>
      </div>
      <p id="no-of-guesses">No. Of Guesses: 0</p>
      <p id="guessed-nums">Guessed Numbers are: None</p>
    </div>
    <button id="restart">Restart</button>
    <div class="result">
      <div id="hint"></div>
    </div>
  </div>

  <script>
    const hint = document.getElementById("hint");
    const noOfGuessesRef = document.getElementById("no-of-guesses");
    const guessedNumsRef = document.getElementById("guessed-nums");
    const restartButton = document.getElementById("restart");
    const game = document.getElementById("game");
    const guessInput = document.getElementById("guess");
    const checkButton = document.getElementById("check-btn");

    let answer, noOfGuesses, guessedNumsArr;

    const play = () => {
      const userGuess = guessInput.value;
      if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        alert("Please enter a valid number between 1 and 100.");
        return;
      }
      guessedNumsArr.push(userGuess);
      noOfGuesses += 1;
      if (userGuess != answer) {
        if (userGuess < answer) {
          hint.innerHTML = "Too low. Try Again!";
        } else {
          hint.innerHTML = "Too high. Try Again!";
        }
        noOfGuessesRef.innerHTML = `<span>No. Of Guesses:</span> ${noOfGuesses}`;
        guessedNumsRef.innerHTML = `<span>Guessed Numbers are: </span>${guessedNumsArr.join(",")}`;
        hint.classList.remove("error");
        setTimeout(() => {
          hint.classList.add("error");
        }, 10);
      } else {
        hint.innerHTML = `Congratulations!<br>The number was <span>${answer}</span>.<br>You guessed the number in <span>${noOfGuesses} </span>tries.`;
        hint.classList.add("success");
        game.style.display = "none";
        restartButton.style.display = "block";
      }
    };

    const init = () => {
      console.log("Game Started");
      answer = Math.floor(Math.random() * 100) + 1;
      console.log(answer);
      noOfGuesses = 0;
      guessedNumsArr = [];
      noOfGuessesRef.innerHTML = "No. Of Guesses: 0";
      guessedNumsRef.innerHTML = "Guessed Numbers are: None";
      guessInput.value = "";
      hint.classList.remove("success", "error");
    };

    guessInput.addEventListener("keydown", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        play();
      }
    });

    restartButton.addEventListener("click", () => {
      game.style.display = "grid";
      restartButton.style.display = "none";
      hint.innerHTML = "";
      hint.classList.remove("success");
      init();
    });

    checkButton.addEventListener("click", play);
    window.addEventListener("load", init);
  </script>
</body>
</html>
```

---

## 🎨 Design Highlights

### Color Palette
- **Primary Blue:** `#3c6fff` - Main theme color
- **Success Green:** `#05c451` - Winning feedback
- **Error Red:** `#ff3e3e` - Wrong guess feedback
- **Background:** Clean white with dramatic shadow effects

### Typography
- **Font Family:** Poppins (Google Fonts)
- **Weight:** 400 (Regular) and 600 (Semi-Bold)
- Clean, modern, and highly readable across all devices

### Animations
- Smooth scale pop effect for feedback messages
- Border color transitions on input focus
- Seamless state transitions

---

## 💡 Code Structure

### HTML Structure
- Semantic HTML5 markup
- Clean, organized container layout
- Accessible form elements

### CSS Styling
- Modern CSS Grid for layout
- CSS Custom properties for consistency
- Responsive design using `min()` function
- Smooth animations with `@keyframes`

### JavaScript Logic
- ES6+ syntax
- Event-driven architecture
- Input validation
- State management with variables
- Clean function separation

---

## 📊 Technical Details

| Feature | Implementation |
|---------|---------------|
| **Number Generation** | `Math.floor(Math.random() * 100) + 1` |
| **Input Validation** | Checks for range (1-100) and NaN |
| **State Management** | Variables: answer, noOfGuesses, guessedNumsArr |
| **Event Handling** | Click and Enter key support |
| **DOM Manipulation** | Direct element reference and updates |
| **Animations** | CSS keyframes with class toggling |

---

## 🌟 Future Enhancement Ideas

- [ ] Add difficulty levels (Easy: 1-50, Medium: 1-100, Hard: 1-200)
- [ ] Implement localStorage for high scores
- [ ] Add sound effects for feedback
- [ ] Create a leaderboard system
- [ ] Add dark mode toggle
- [ ] Include progressive hints (show narrowing range)
- [ ] Add achievement badges
- [ ] Implement multiplayer mode
- [ ] Add timer for speed challenges
- [ ] Create mobile app version

---

## 🤝 Contributing

Contributions make the open-source community amazing! Here's how you can contribute:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Ideas
- Improve UI/UX design
- Add new features from the enhancement list
- Fix bugs or improve code quality
- Add translations for internationalization
- Write better documentation

---

## 🐛 Known Issues

Currently, there are no known issues. If you find a bug, please open an issue on GitHub!

---

## 📱 Browser Support

| Browser | Supported |
|---------|-----------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| Opera | ✅ Latest |

---

## 📝 License

Distributed under the MIT License. See `LICENSE` file for more information.

```
MIT License

Copyright (c) 2025 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 👨‍💻 Author

**Your Name**


- 💼 LinkedIn: [@toheed-ahmed](https://www.linkedin.com/in/toheed-ahmed-7aa7162b4)  
- 📧 Email: kalwartoheed060@gmail.com  
- 💻 GitHub: [@Toheed-Ahmed](https://github.com/Toheed-Ahmed)


---

## 🙏 Acknowledgments

- [Google Fonts](https://fonts.google.com/) - Beautiful Poppins font family
- [MDN Web Docs](https://developer.mozilla.org/) - Excellent web development resources
- Classic number guessing games - Inspiration for gameplay mechanics
- The open-source community - For continuous learning and support

---

## 📞 Support

If you have any questions or need help, feel free to:

- Open an issue on GitHub
- Send me an email
- Connect on LinkedIn
- Join the discussion in Issues tab

---

## ⭐ Show Your Support

If you found this project helpful or interesting:

- Give it a ⭐️ on GitHub
- Share it with your friends
- Fork it and create your own version
- Contribute to make it better

---

<div align="center">

### 🎮 Ready to Play? Copy the code and start guessing!

**Made with ❤️ and JavaScript**

![Love](https://img.shields.io/badge/Made%20with-Love-red?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/Powered%20by-JavaScript-yellow?style=for-the-badge)

---

© 2025 Your Name. All rights reserved.

</div>