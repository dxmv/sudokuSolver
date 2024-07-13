
# Sudoku Solver

This project provides tools to generate and solve **Sudoku puzzles**. It's designed for Sudoku *enthusiasts, developers, and educators* who want to understand the algorithms behind Sudoku solving and generation or integrate these functionalities into their own applications.


## Key Features
- Generate sudoku boards based on the diffuculty selected
- Solve sudoku boards

## How to run
Open the terminal and type:
```
npm install
npm start
```

## Validating the board

Before solving and generating, we ensure the board is valid using the **isValidBoard** function:

- *isValidRows*: Checks if each row contains unique numbers from 1 to 9.
- *isValidCols*: Verifies that each column has unique numbers from 1 to 9.
- *isValidSquare*: Confirms that each 3x3 square contains unique numbers from 1 to 9.

## Solving The Sudoku
The Sudoku solver implements a backtracking algorithm to find the solution for a given Sudoku puzzle.

The solveBoard function implements the main solving logic:

- It iterates through the board, looking for empty cells (value 0).
- For each empty cell, it determines the possible valid numbers using getPossible.
- The possible numbers are shuffled to introduce randomness in the solution.
- The solver tries each possible number recursively.
- If a solution is found and the board is valid, it returns the solved board.
- If no solution is found, it backtracks and tries the next possible number.

### Helper Functions

- *getPossible*: Finds valid numbers for a given cell by intersecting possible numbers for its row, column, and 3x3 square.
- *getPossibleRow, getPossibleCol, getPossibleSquare*: Determine valid numbers for a row, column, and 3x3 square respectively.

### Animation
The solver includes an optional animation feature:

- It visualizes the solving process by updating the DOM.
- The sleep function introduces delays between steps for a visual effect.
- Animation speed can be adjusted using the speed parameter.

### Using the solver
To use the solver:
```
const solvedBoard = await solveBoard(initialBoard, speed, animation);
```
Where:

- **initialBoard** is the starting Sudoku board
- **speed** determines the animation speed
- **animation** is a boolean to enable/disable the visual solving process

The solver will return the solved board if a solution exists, or undefined if no valid solution is found.


## Generating the board

The board generation process creates a new Sudoku puzzle with a specified number of empty cells. Here's an overview of how it works:
Board Generation Process

- **Start with an Empty Board**: The process begins with a completely empty 9x9 grid.
- **Solve the Empty Board**: The solveBoard function is called on the empty grid.
- This generates a **fully solved** Sudoku board.
- A **brief pause** (500ms) is added after solving for visual effect.


### Helper Functions

- *convertNumToBoard*: Converts a 2D array of numbers to the Board type used by the solver.
- *sleep*: A utility function to introduce delays in the process.
- *deleteFromBoard*: called to remove a specified number of digits from the solved board

### Remove Numbers:

The deleteFromBoard function **carefully removes numbers** to create a valid puzzle:

- It **randomly** selects a cell and removes its value.
- It then attempts to solve the board **without this value**.
- If the board is still solvable (i.e., has a unique solution), the number is permanently removed.
- If removing the number results in multiple solutions, the original value is restored.
- This process continues **until the desired number of cells** have been emptied.

### Usage
To generate a new Sudoku board:
```
const newBoard = await generateBoard(numToDelete);
```
Where:
- **numToDelete** is the number of cells you want to be empty in the final puzzle.

The generation process includes some visual elements:

This generation method ensures that the created Sudoku puzzles are always solvable and have a unique solution, making them fair and enjoyable for players to solve.
