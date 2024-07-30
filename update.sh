#!/bin/bash

./stop.sh

# Make a pull from frontend origin
git pull origin main

./install.sh

echo "Actualizado exitosamente. ✅"
