# Release port in use

## 1. Identify the process that is using the port

```bash
sudo lsof -i :5555
```

This command will show the process that is using the port.
Note the PID (Process ID) of the process.

## 2. End the process

```bash
sudo kill -9 PID
```

Replace "PID" with the process number.

### ALERT

The `kill -9` command terminates the process immediately, without giving the process the opportunity to perform cleanup tasks. Make sure you are ending the correct process.
