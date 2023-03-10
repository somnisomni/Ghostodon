### Simple Dockerfile for Ghostodon ###
## Port expose : 50000 (Webhook server itself)
## Volume bind (recommended) : /app/config (config/cache/log files)

# Use Node.js v18 LTS, Alpine image
FROM node:18-alpine

# Set working directory to /app
WORKDIR /app

# Copy source files
COPY . .

# Use example configuration file as base config
RUN cp config/config.example.json config/config.json

# Install Node.js global dependencies
RUN npm install -f --location=global yarn@latest

# Install project dependencies
RUN yarn install --immutable

# Entrypoint
ENTRYPOINT [ "yarn", "start:prod" ]
EXPOSE 50000
