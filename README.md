# Makers Challenge API

A TypeScript Express API template for the Makers Challenge.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the root directory (optional):

```
PORT=3000
```

## Running the API

Development mode (with auto-reload using Node.js native watch mode):

```bash
npm run dev
```

Build the TypeScript code:

```bash
npm run build
```

Production mode (after building):

```bash
npm start
```

The API will be available at `http://localhost:3000` (or the port specified in your `.env` file).

## Project Structure

- `src/` - TypeScript source files
- `dist/` - Compiled JavaScript files (generated after build)
- `tsconfig.json` - TypeScript configuration

## Available Endpoints

- `GET /`: Welcome message
