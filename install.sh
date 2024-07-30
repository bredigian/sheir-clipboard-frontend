#!/bin/bash

# Install 'pnpm'
echo "Instalando 'pnpm'..."
npm install -g pnpm

# Clone or update repository
clone_or_pull() {
  REPO_URL=$1
  DIR_NAME=$2

  if [ -d "$DIR_NAME" ]; then
    echo "El directorio $DIR_NAME ya existe. Actualizando repositorio..."
    cd "$DIR_NAME"
    git pull origin main
    cd ..
  } else
    echo "Clonando $DIR_NAME desde $REPO_URL..."
    git clone "$REPO_URL"
  fi
}


# Clone backend
echo "Descargando backend..."
clone_or_pull "git@github.com:bredigian/sheir-clipboard-backend.git" "sheir-clipboard-backend"

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
