#!/bin/bash

# Verify if processes.pid already exists
if [ ! -f processes.pid ]; then
  echo "No se encontró el archivo processes.pid. No hay procesos para detener."
  exit 1
fi

# Read and kill the processes
while IFS= read -r pid; do
  echo "Deteniendo el proceso $pid..."
  kill $pid
done < processes.pid

# Delete PIDs file
rm -f processes.pid

echo "Todos los procesos han sido detenidos."
