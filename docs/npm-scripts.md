# To use NPM scripts, you can follow these simple steps

## 1. **Create a `package.json` file:**

If you don't already have one, create a `package.json` file in your project's root directory. You can do this by running `npm init` and following the prompts.

## 2. **Define your scripts:**

In the `scripts` section of your `package.json` file, you can define various scripts. 
Here's an example:

```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
}
```

In this example, running `npm start` will execute the command specified after `"start"`, and `npm test` will execute the command specified after `"test"`.

## 3. **Run your scripts:**

Open your terminal and use the `npm run` command followed by the script name. For example:

```bash
npm run start
```

This will execute the command specified in the `"start"` script.

## 4. **To create a production build, use:**

```bash
npm run build.
```

### OBS

Remember to replace the example commands with your specific application or testing commands. This is a basic overview, and you can customize your scripts to fit your project's needs.
