# Configuration

The "**package.json**" file is a manifest file used in **Javascript** projects.
It contains information about the project, its dependencies, execution scripts, metadata, and other important settings.

## Configuration: Create a `package.json` file

If you don't already have one, create a `package.json` file in your project's root directory. You can do this by running `npm init` and following the prompts.

## Configuration: "scripts" (for execution)

"node: bad option: --watch" error when using the "watch" option.
Possible cause: The "--watch" option is not recognized by the version of Node.js in use.
Solution: Use **Nodemon**.

### Explanation

The "**watch**" option in the "**package.json**" configuration file script is used to monitor changes to specified files and automatically restart the application when changes occur.

In the example below, the "**start**" script uses the "**node**" command to run the file located in "src/server", and the "**--watch**" option is added to enable monitoring of changes to this file.

```json
"scripts": {
    "start": "node --watch src/server"
  }
```

This is useful during development as it allows the application to automatically restart whenever you make changes to the source code, facilitating the testing and debugging process.

1. **Installation**

```bash
npm install --save-dev nodemon
```

2. **Edit configuration file "package.json"**

Removed the script:

```json
"scripts": {
    "start": "node --watch src/server"
  }
```

Included the script:

```json
"scripts": {
  "start": "nodemon src/server"
}
```

### Execution

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Configuration: "type: module"

The "type: module" is not configured in the "package.json".
So instead of doing "import", you do "require" on the files.
