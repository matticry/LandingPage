# Usa una imagen base de Node.js compatible con Astro
FROM node:18

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Construye el proyecto Astro
RUN npm run build

# Expone el puerto que usa Astro
EXPOSE 4321

# Comando para ejecutar la aplicación
CMD [ "npm", "run", "start" ]
