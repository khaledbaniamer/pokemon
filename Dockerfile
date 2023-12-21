# Use a specific Node.js version as the base image
FROM node:18.13.0

# Set the working directory within the container
WORKDIR /pokemon

# Copy package files for dependency installation
COPY package*.json ./
COPY tsconfig.json .
COPY entrypoint.sh ./


# Install Node.js dependencies
RUN npm install

RUN apt update && apt install mariadb-client -y

# Copy the application source code to the working directory
COPY src/ .
COPY prisma/ .

# Copy environment files
COPY .env ./

RUN npm i -g @nestjs/cli
# Generate Prisma client
RUN npx prisma generate
# Build the application
RUN npm run build

RUN chmod +x /pokemon/entrypoint.sh
#RUN /pokemon/entrypoint.sh

# Expose the port on which the app will run
EXPOSE 8080
# RUN npx prisma migrate dev --name init

# Start the server using the production build
CMD ["npm", "start"]
