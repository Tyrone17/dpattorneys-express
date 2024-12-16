# Use the official Node.js image as the base
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app's code into the container
COPY . .

# Expose the port the app runs on
EXPOSE 3333

# Define environment variables
ENV NODE_ENV=production

# Start the app
CMD ["node", "index.js"]
