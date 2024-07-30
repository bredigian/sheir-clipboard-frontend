#!/bin/bash

pm2 stop "sheir-backend"
pm2 stop "sheir-frontend"

pm2 delete "sheir-backend"
pm2 delete "sheir-frontend"

echo "Todos los procesos han sido detenidos."
