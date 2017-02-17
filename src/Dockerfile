FROM node:boron

# Create app dir
RUN mkdir -p /home/server/resume
WORKDIR /home/server/resume

# Install deps
COPY package.json /home/server/resume/
RUN npm install

# Bundle app
COPY . /home/server/resume

# Add non-root user
RUN addgroup -S node && adduser -S -g node node 

# Run
EXPOSE 3000
CMD [ "node", "server.js" ]