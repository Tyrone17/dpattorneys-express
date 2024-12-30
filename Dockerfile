<<<<<<< HEAD
# Use Node.js 16 as the base image
FROM node:16
=======
# Use the official Node.js image as the base
FROM node:18
>>>>>>> dad14ac81f86177e989fffe38d20b8978c48042a

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3333

# Start the application
CMD ["node", "index.js"]
