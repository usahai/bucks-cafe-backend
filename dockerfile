# Use an official Node.js image as the base image
FROM node:20-alpine

ENV DB_HOST=my_backend_dock
ENV DB_USER=root
ENV DB_PASS=root
ENV DB_DATABASE=bucks_cafe
ENV DB_PORT=3306
ENV PORT=8000

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install TypeScript globally (optional if you don’t already have it in your package.json)
RUN npm install --save typescript

# Copy the rest of the application files to the container
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port that the application listens on
EXPOSE 3000

# Command to run your application (after TypeScript has been compiled to JavaScript)
CMD ["node", "dist/index.js"]
