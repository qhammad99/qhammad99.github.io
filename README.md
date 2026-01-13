# React Project Setup with Docker

This guide explains how to set up, develop, and run this React project entirely using Docker. This approach eliminates the need to install Node.js locally on your machine.

## Prerequisites

-   [Docker](https://www.docker.com/get-started) installed and running.

## Initial Setup

If this is a fresh project and you need to generate the initial files (e.g., `package.json`, `vite.config.ts`), run the following command. **Skip this if the project files are already present.**

```powershell
docker run -it --rm -v ${PWD}:/app -w /app node:24.12.0-alpine npm create vite@latest . -- --template react-ts
```

### Configuration

Ensure your `vite.config.ts` is configured to expose the server correctly for Docker:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Needed for Docker container port mapping to work
  }
})
```

## Running the Application

To start the development server:

```bash
docker-compose up
```

The application should be accessible at `http://localhost:5173` (or the port specified in your `docker-compose.yml`).

## Workflow & Common Commands

### Installing Dependencies

To install a new package (e.g., `axios`):

```bash
docker-compose run --rm react-app npm install axios
```

### Rebuilding the Image

If you modify the `Dockerfile` or add dependencies that require a rebuild:

```bash
docker-compose up --build
```

### Stopping the Server

To stop the running containers:

```bash
docker-compose down
```
