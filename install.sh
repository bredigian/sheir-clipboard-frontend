#!/bin/bash

# Install 'pnpm'
echo "Instalando 'pnpm'..."
npm install -g pnpm

# Clone backend
echo "Descargando backend..."
git clone git@github.com:bredigian/sheir-clipboard-backend.git

# Get local IP address
LOCAL_IP=$(hostname -I | awk '{print $1}')

# Make a .env file and save keyvalue
echo "VITE_WEBSOCKET_API=http://$LOCAL_IP:4096" > .env

# Enter to backend directory , npm install, build, and back to root directory
echo "Instalando backend..."
cd sheir-clipboard-backend && pnpm install && pnpm run build && cd ..

# Execute npm install and build frontend
echo "Instalando frontend..."
pnpm install && pnpm run build

echo "La aplicación se ha instalado exitosamente. ✅"
