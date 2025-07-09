# Rate Limiter Service

A simple rate limiter service built with Node.js.

## Features

- Limits the rate of incoming requests to protect your services.
- Easy to configure and deploy with Docker.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) (optional, for containerization)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rate-limiter-service.git
   cd rate-limiter-service
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Service

#### With Node.js

```bash
npm start
```

#### With Docker

```bash
docker-compose up --build
```

## Configuration

- Edit `docker-compose.yaml` and `Dockerfile` as needed for your environment.
- Source code is located in the `src/` directory.
