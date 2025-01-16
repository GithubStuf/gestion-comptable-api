FROM node:22-alpine

 # Set the working directory inside the container
WORKDIR /app

# Copy pnpm-lock.yaml and package.json to the working directory
COPY package*.json .

# Install dependencies using pnpm
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]