# Use the official Node.js image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy all of the application code from the project into the container
COPY . /app/

# Install project dependencies
RUN yarn install

# Specify the command to run your application
CMD ["yarn", "dev"]
