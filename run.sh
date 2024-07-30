#!/bin/bash

# Execute commands on second plane
run_in_background() {
  nohup "$@" > "$2" 2>&1 &
  PID=$!
  echo $PID >> processes.pid
  echo "Process $PID running in background..."
}

# Delete 'processes.pid' if already exists
rm -f processes.pid

# Change to backend directory and run
cd sheir-clipboard-backend
run_in_background pnpm run start backend.log

# Back to root
cd ..

# Run frontend
run_in_background pnpm run preview "--host" frontend.log


# Get local IP address
LOCAL_IP=$(hostname -I | awk '{print $1}')

echo "Aplicación corriendo en http://localhost:4173 y http://$LOCAL_IP:4173"
