
# QR Code Generator

This project is a simple QR Code Generator built using Node.js. It allows users to input a URL or text via the command line, generate a QR code from the input, and save both the QR code as an image and the input as a text file.

## Features

- Command-line interface for easy input using `inquirer`
- Generates QR code images in PNG format
- Saves the input URL or text in a text file

## Installation

To use this project, follow these steps:

1. **Clone the repository:**

    ```zsh
    git clone https://github.com/rohit-pachar/QR-code-generator
    ```

2. **Navigate to the project directory:**

    ```zsh
    cd Qr-code-generator
    ```

3. **Install the necessary dependencies:**

    ```zsh
    npm install
    ```

## Usage

After installation, you can use the QR Code Generator by running the following command:

```zsh
node index.js
```

### Example

1. **Run the application:**

    ```bash
    node index.js
    ```

2. **Enter your URL when prompted:**

    ```
    ? Type in your URL: https://example.com
    ```

3. **Output:**

    - A QR code image (`qr_image.png`) will be generated in the project directory.
    - The entered URL will be saved in a text file named `URL.txt`.

### Command-line Interaction

```zsh
$ node index.js
? Type in your URL: https://example.com
File has been saved!
```

## Project Structure

```
qr-code-generator/
│
├── index.js          # Main application file
├── qr_image.png      # Generated QR code image (output)
├── URL.txt           # Saved URL or text (output)
├── package.json      # Project metadata and dependencies
└── README.md         # Project documentation
```

## Dependencies

This project uses the following npm packages:

- **[inquirer](https://www.npmjs.com/package/inquirer):** For creating an interactive command-line interface.
- **[qr-image](https://www.npmjs.com/package/qr-image):** For generating QR codes from text or URLs.
- **[fs](https://nodejs.org/api/fs.html):** For writing files to the filesystem (built-in Node.js module).

## Contributing

Contributions are welcome! If you'd like to improve this project, please fork the repository, make your changes in a new branch, and submit a pull request.


## Acknowledgements

- **[Node.js](https://nodejs.org/)** for providing the runtime environment
- **[Inquirer.js](https://www.npmjs.com/package/inquirer)** for simplifying user input
- **[qr-image](https://www.npmjs.com/package/qr-image)** for making QR code generation easy

## Contact

For any inquiries or support, please contact [rohitpachar05@gmail.com].
