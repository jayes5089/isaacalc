# Isaac Calculator README

## Project Overview

The Isaac Calculator is a web application designed for fans of "The Binding of Isaac: Rebirth." This application allows users to select characters, view their stats, and manage items that affect gameplay. It provides an interactive interface to enhance the gaming experience.

## Features

- **Character Selection**: Users can choose from a variety of characters using a dropdown menu.
- **Character Stats Display**: The application displays the stats of the currently selected character.
- **Selected Items**: Users can view the items they have selected, which affect their character's performance.
- **All Items Display**: A comprehensive list of all in-game items that influence character statistics is available for reference.

## Project Structure

```
isaac-calculator
├── src
│   ├── assets
│   │   └── images          # Contains images of the characters
│   ├── components
│   │   ├── CharacterImage.js  # Displays the selected character's image
│   │   ├── CharacterDropdown.js # Dropdown for changing characters
│   │   ├── StatsDisplay.js     # Displays character stats
│   │   ├── SelectedItems.js     # Shows currently selected items
│   │   └── AllItems.js         # Displays all in-game items
│   ├── styles
│   │   └── main.css           # CSS styles for the application
│   ├── App.js                  # Main application component
│   └── index.js                # Entry point of the application
├── public
│   └── index.html              # HTML template for the application
├── package.json                # Configuration file for npm
└── README.md                   # Documentation for the project
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd isaac-calculator
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the app in your default web browser.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.