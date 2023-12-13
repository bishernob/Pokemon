FROM node:14

# Install wait-for-it
RUN apt-get update && apt-get install -y wait-for-it

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the application port
EXPOSE 8080

# Command to run the application
CMD ["npm", "run", "start"]
