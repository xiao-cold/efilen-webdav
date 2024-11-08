<h1 align="center">EFilen WebDAV</h1>

<p align="center">
  A Docker-ready WebDAV server for Filen cloud storage, supporting multiple accounts.
</p>

## Features

- Multi-user support through proxy mode
- Docker ready deployment
- Flexible configuration via environment variables
- Simple configuration

## Quick Start

### 1. Start the Server

#### Using Docker

```bash
docker run -d --name efilen-webdav -p 8888:8888 xicodocker/efilen-webdav:latest
```

#### Using Docker Compose

1. Clone the repository:

```bash
git clone https://github.com/xiao-cold/efilen-webdav.git
cd efilen-webdav
```

2. Copy and modify environment file:

```bash
cp .env.example .env
```

3. Start the service:

```bash
docker-compose up -d
```

### 2. Connect to WebDAV

The server will be available at: `http://localhost:8888`

Use your Filen credentials in the following format:

- Username: `your.email@example.com`
- Password: `password=yourPassword`

If you have 2FA enabled:

- Password: `password=yourPassword&twoFactorAuthentication=123456`

## Advanced Usage

### Custom Configuration

```bash
docker run -d \
  --name efilen-webdav \
  -p 8888:8888 \
  -e PORT=8888 \
  -e HOST=0.0.0.0 \
  -e AUTH_MODE=basic \
  xicodocker/efilen-webdav:latest
```

## Configuration

### Environment Variables

| Variable  | Description                        | Default |
| --------- | ---------------------------------- | ------- |
| HOST      | Server hostname                    | 0.0.0.0 |
| PORT      | Server port                        | 8888    |
| HTTPS     | Enable HTTPS                       | false   |
| AUTH_MODE | Authentication mode (basic/digest) | basic   |
| LOG_LEVEL | Logging level (info/debug/error)   | info    |

### Configuration Methods

1. Environment file (.env)
2. Docker environment variables
3. Docker Compose environment variables

## Development

### Prerequisites

- Node.js 18 or later
- npm or yarn
- Git

### Project Structure

```
efilen-webdav/
├── src/
│   └── server.js
├── .env.example
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── package.json
└── README.md
```

### Local Development

1. Clone the repository

```bash
git clone https://github.com/xiao-cold/efilen-webdav.git
cd efilen-webdav
```

2. Set up environment

```bash
# Copy environment file
cp .env.example .env

# Edit .env file with your preferred settings
vim .env
```

3. Install dependencies

```bash
npm install
# or
yarn install
```

4. Start development server

```bash
npm start
# or
yarn start
```

### Building Docker Image Locally

```bash
# Build image
docker build -t efilen-webdav .

# Run container
docker run -d --name efilen-webdav -p 8888:8888 efilen-webdav
```

## License

Distributed under the AGPL-3.0 License. See [LICENSE](https://github.com/xiao-cold/efilen-webdav/blob/main/LICENSE.md) for more information.

## Acknowledgments

This project is based on the official [Filen WebDAV](https://github.com/FilenCloudDienste/filen-webdav) package. Special thanks to:

- [FilenCloudDienste](https://github.com/FilenCloudDienste) for creating and maintaining the original WebDAV package
- The Filen.io team for providing the cloud storage service and SDK
