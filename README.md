# Sheir Clipboard

Portapapeles con la funcionalidad de compartir cadenas de textos entre diferentes dispositivos que estén conectados a la misma red.

## Tecnologías

**Frontend:** React, Vite, TailwindCSS, Framer Motion

**Backend:** Node.js, Express, socket.io

## Características

- Modo claro/oscuro
- Conexiones en tiempo real con Websockets
- Responsive Design

## Requisitos

- Node.js 20 o versiones superiores.
- Git
- Manejo de consola/terminal

## Como instalar

1. Clonar el repositorio con `git clone git@github.com:bredigian/sheir-clipboard-frontend.git` o `git clone https://github.com/bredigian/sheir-clipboard-frontend.git`.
2. Cambiar de directorio al recientemente creado con `cd sheir-clipboard-frontend`.
3. Ejecutar el archivo `install.sh`.
4. Ejecutar el archivo `run.sh`.

## Scripts

- `update.sh` obtiene los últimos cambios del repositorio y ejecuta nuevamente `install.sh`.
- `install.sh` realiza el "build" de la aplicación.
- `run.sh` ejecuta la aplicación con PM2.
- `stop.sh` finaliza los procesos de PM2 que corresponden a la aplicación.

  Proximamente estarán disponibles los "scripts" correspondientes a Windows.
