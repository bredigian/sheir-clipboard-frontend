#!/bin/bash

# Change to backend directory and run
cd sheir-clipboard-backend
pm2 start pnpm --name "sheir-backend" -- run start

# Back to root
cd ..

# Run frontend
pm2 start pnpm --name "sheir-frontend" -- run preview "--host"


# Get local IP address
LOCAL_IP=$(hostname -I | awk '{print $1}')

echo "Aplicación corriendo en http://localhost:4173 y http://$LOCAL_IP:4173"
