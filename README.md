# 🎲 Dice Game

An interactive dice game built with React and styled-components, featuring a clean and modern user interface.  Test your luck by selecting numbers and rolling the dice to accumulate points! 

## 🌟 Features

- **Interactive Gameplay** - Select a number (1-6) and roll the dice to score points
- **Dynamic Scoring System** - Earn points for correct predictions, lose points for incorrect ones
- **Modern UI** - Built with styled-components for a polished, responsive design
- **Game Rules Display** - Toggle game instructions on/off
- **Score Reset** - Reset your score anytime to start fresh
- **Smooth Animations** - Engaging visual feedback for dice rolls

## 🎮 How to Play

1. Select a number from 1 to 6 by clicking on the number boxes
2. Click on the dice image to roll
3. If your selected number matches the dice result, you earn points equal to the dice number
4. If your prediction is wrong, 2 points will be deducted from your score
5. Use the "Reset Score" button to start over
6. Toggle the "Show Rules" button to view or hide game instructions

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Abhishek8719/Dice-Game.git
```

2. Navigate to the project directory:
```bash
cd Dice-Game
```

3. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will open in your default browser at `http://localhost:5173` (or another port if 5173 is in use).

### Build for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🛠️ Tech Stack

- **React** (v19.1.0) - Frontend library for building user interfaces
- **Vite** (v6.3.5) - Next-generation frontend build tool
- **styled-components** (v6.1.19) - CSS-in-JS styling solution
- **ESLint** - Code quality and consistency

## 📂 Project Structure

```
Dice-Game/
├── public/
│   └── images/          # Dice images and game assets
├── src/
│   ├── components/
│   │   ├── StartGame.jsx      # Landing page component
│   │   ├── GamePlay.jsx       # Main game logic component
│   │   ├── TotalScore.jsx     # Score display component
│   │   ├── Numberselector.jsx # Number selection component
│   │   ├── RoleDice.jsx       # Dice rolling component
│   │   └── Rules.jsx          # Game rules component
│   ├── styled/
│   │   └── Button.jsx         # Reusable button component
│   ├── App.jsx                # Root application component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Game Logic

- **Correct Prediction**: Score increases by the dice number (1-6 points)
- **Wrong Prediction**: Score decreases by 2 points
- **Minimum Score**: Score can go negative
- **Number Selection Required**: Must select a number before rolling

## 🎨 Components Overview

| Component | Purpose |
|-----------|---------|
| `StartGame` | Initial landing screen with play button |
| `GamePlay` | Main game container managing state and logic |
| `TotalScore` | Displays current score |
| `Numberselector` | Number selection interface (1-6) |
| `RoleDice` | Dice display and roll functionality |
| `Rules` | Game instructions and rules |

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint for code quality |

## 🔧 Configuration

The project uses: 
- **Vite** for fast development and optimized builds
- **ESLint** for code linting with React-specific rules
- **React Hooks** best practices enforcement

## 🌐 Live Demo

[GitHub Pages](https://abhishek8719.github.io/Dice-Game/) *(if deployed)*

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Abhishek8719/Dice-Game/issues).

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Abhishek8719**

- GitHub: [@Abhishek8719](https://github.com/Abhishek8719)

## ⭐ Show Your Support

Give a ⭐️ if you enjoyed playing this game!

---

*Built with ❤️ using React and styled-components*
