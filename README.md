# Rate Limiter Service

A simple rate limiter service built with Node.js, Express, and Redis. This service limits the number of requests from a single IP address within a given time window.

## Installation

1. Clone the repository: `git clone https://github.com/nkuv/rate-limiter-service.git`
2. Install the dependencies: `npm install`

## Usage

1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables to the `.env` file:
    - `PORT`: The port number for the server to run on (default: 3000).
    - `REDIS_HOST`: The host for the Redis server (default: localhost).
    - `REDIS_PORT`: The port for the Redis server (default: 6379).
    - `RATE_LIMIT_WINDOW`: The time window in seconds for the rate limiter (default: 10).
    - `RATE_LIMIT_MAX`: The maximum number of requests allowed within the time window (default: 5).
3. Start the server: `npm start`

## Configuration

The rate limiter can be configured by setting the following environment variables in the `.env` file:
- `RATE_LIMIT_WINDOW`: The time window in seconds for the rate limiter (default: 10).
- `RATE_LIMIT_MAX`: The maximum number of requests allowed within the time window (default: 5).

## Running the tests

There are no tests specified for this project.

## Dependencies

- `dotenv`: Loads environment variables from a `.env` file.
- `express`: A fast, unopinionated, minimalist web framework for Node.js.
- `moment`: A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.
- `redis`: A modern, high-performance Redis client for Node.js.

## API Reference

- `GET /`: Returns a "Request successful" message if the request is within the rate limit. Otherwise, it returns a "Too many requests" error.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.
