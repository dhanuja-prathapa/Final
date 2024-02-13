# Use the official Node.js image as the base image for both stages
FROM node:20-alpine as builder
#RUN apk add --no-cache sqlite

ENV NODE_ENV build

WORKDIR /home/node

# Install required system dependencies for SQLite and Prisma
RUN apk add --no-cache \
    g++ \
    make \
    python3 \
    linux-headers \
    sqlite-dev \
    && npm install -g prisma \
    && npm install -g node-gyp

# Add SQLite3 binary to the project files
COPY node-v83-linux-x64.tar.gz /home/node

# Extract SQLite3 binary
RUN tar xvzf node-v83-linux-x64.tar.gz -C /home/node \
    && mv /home/node/node-v83-linux-x64 /home/node/sqlite3

# Install SQLite3 using pre-downloaded binary
RUN npm install sqlite3 --build-from-source --sqlite=/home/node/sqlite3

# Change the RUN npm install sqlite3 --build-from-source line to:
RUN npm install sqlite3 --build-from-source --sqlite=/tmp/sqlite3

# Copy package.json and package-lock.json to the container
COPY package*.json ./

COPY server*.js ./

COPY .env ./

# Copy images from the public folder
COPY --chown=node:node ./public/ ./public/

# Copy Database from the db folder
COPY --chown=node:node ./db/ ./db/

ENV npm_config_fetch_retry_maxtimeout=300000

# Install dependencies using npm ci for production
RUN npm ci

# Copy the rest of the application code to the container
COPY --chown=node:node . .

# Generate Prisma client
RUN npx prisma generate

# Build the application
RUN npm run build
RUN ls -l .next

# Remove development dependencies
RUN npm prune --omit=dev

# Create a new stage for the production image
FROM node:20-alpine

ENV NODE_ENV production

# Set the working directory in the container
WORKDIR /home/node

# Copy package.json and package-lock.json from the builder stage
COPY --from=builder /home/node/package*.json ./

# Copy server.js from the builder stage
COPY --from=builder /home/node/server*.js ./

# Copy .env from the builder stage
COPY --from=builder /home/node/.env ./

# Copy images from the builder stage
COPY --from=builder /home/node/public/ ./public/

# Copy Database from the db folder
COPY --from=builder /home/node/db/ ./db/

# Copy SQLite3 binary from the builder stage
COPY --from=builder /home/node/sqlite3/ /home/node/node_modules/sqlite3/lib/binding/

# Copy node_modules from the builder stage
COPY --from=builder /home/node/node_modules/ ./node_modules/

# Copy the built application code from the builder stage
COPY --from=builder /home/node/.next/ ./.next/

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
#CMD ["npm", "start"concurrently \"next start\" \"node server.js\"]
#CMD ["sh", "-c", "npm start & node server.js"]
#CMD ["pm2-runtime", "start", "npm", "--", "start", "node", "--", "server.js"]
RUN npm install -g concurrently
#CMD ["concurrently", "next start", "node server.js"]

#CMD npm start

CMD ["npm", "start"]
