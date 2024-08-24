# QR-code-generator

Uses Node.js , NPM , native fs module
The two npm packages used for this project are: 
1. Inquirer.js : allow us to get input from the user
2. qr-image : generate images as png to save on our local   file system

# Flow of Project
1.  Used the innquirer npm package to get user input
2. Used the qr-image npm package to turn the user entered URL into a QR code image
3. Created a txt file to save the user input uing the native fs node module


# Info about Inquirer package
Inquirer is an interactive command line user interface library for Node.js that simplifies the process of gathering user input through various prompt types. Below are some important terms and concepts related to the Inquirer package:

## Key Terms

### 1. **Prompt Types**
Inquirer supports multiple types of prompts, each designed for specific user interactions:

- **Input**: A simple text input.
- **Number**: Input that expects a numeric value.
- **Confirm**: A yes/no question.
- **List**: Presents a list of options for the user to choose from.
- **Checkbox**: Allows multiple selections from a list.
- **Password**: Hides user input for sensitive information.
- **Editor**: Opens a text editor for user input.

### 2. **Question Object**
Each prompt is defined by a question object that includes properties such as:

- **type**: Specifies the prompt type (e.g., 'input', 'list').
- **name**: The key used to store the answer.
- **message**: The question text displayed to the user.
- **choices**: An array of options for list or checkbox prompts.
- **validate**: A function to check if the input is valid.
- **filter**: A function to modify the input before storing it.

### 3. **Prompt Interface**
The main method to launch prompts is `inquirer.prompt(questions)`, which takes an array of question objects and returns a promise with the user's answers.

### 4. **Answers Object**
The answers from the prompts are stored in an object where each key corresponds to the `name` property of the question object, allowing easy access to user responses.

### 5. **Reactive Interface**
Inquirer uses a reactive programming model, allowing dynamic question flows. You can add questions dynamically during the prompt session using observables.

### 6. **Custom Prompts**
Inquirer allows the creation of custom prompt types through plugins. You can register these custom prompts using `inquirer.registerPrompt(name, prompt)`.

### 7. **Installation**
Inquirer can be installed via npm or yarn:

```bash
npm install inquirer
```

or 

```bash
yarn add inquirer
```

### 8. **Legacy Version**
The version of Inquirer available at the provided link is the legacy version. For newer projects, it is recommended to use `@inquirer/prompts`, which offers a more modern API.

### 9. **Error Handling**
Inquirer provides mechanisms to handle errors, such as when prompts cannot be rendered in non-interactive environments. The error object will have an `isTtyError` property to indicate this issue.

### 10. **Environment Support**
Inquirer is designed to work well across various terminal environments, including macOS, Windows, and Linux, although some known issues exist with certain terminals.

These terms encapsulate the core functionality and usage of the Inquirer package, making it a powerful tool for creating interactive command line applications.

Citations:
[1] https://www.npmjs.com/package/inquirer?activeTab=code