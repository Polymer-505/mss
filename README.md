# mss (Minecraft Server Status)

Command-line tool for checking Minecraft servers.

## Features

- You can immediately tell the server's status by its color: online or offline.
- Displays the IP, port, version, count of players and software
- No configuration required: just one argument, and you get the result.
- Works as a regular command or via npx, with no installation needed.

## Install

- Via npm

```bash
npm install -g @polymer505/mss
```

- Via npx

```bash
npx @polymer505/mss <host>
```

## Usage

Run `mss` by specifying server ip:

```bash
mss <host>
```

## Example

```bash
mss 2b2t.org
```

### Preview

```
2b2t.org is online
Ip: 40.223.14.133:25565
Version: 1.7.2-26.2
Players: 1125/1
Software: Velocity
```

## Building from Source

If you want to compile `mss` into a standalone executable file, use `@yao-pkg/pkg`:

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Build executables:**

- For linux (mss-linux)

```bash
   npm run build
```

- For linux arm64 (mss-linux-arm64)

```bash
   npm run build-arm64
```

- For Windows (mss-win.exe)

```bash
   npm run build:win
```

- For Windows arm64 (mss-win-arm64.exe)

```bash
   npm run build:win-arm64
```

## License

This project is licensed under the [MIT License](LICENSE).
