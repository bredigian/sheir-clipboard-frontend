#!/bin/bash

# Clone backend
git clone git@github.com:bredigian/sheir-clipboard-backend.git

# Get local IP address
LOCAL_IP=$(hostname -I | awk '{print $1}')

# Make a .env file and save keyvalue
echo "VITE_WEBSOCKET_API=http://$LOCAL_IP:4096" > .env

# Enter to backend directory , npm install, build, and back to root directory
cd sheir-clipboard-backend && npm install && npm run build && cd ..

# Execute npm install and build frontend
npm install && npm run build

echo "La aplicación se ha configurado exitosamente. ✅"
