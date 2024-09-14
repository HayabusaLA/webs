# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia los archivos del proyecto al directorio de trabajo
COPY . .

# Compila TypeScript a JavaScript
RUN npm run build

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 8081

# Define el comando para ejecutar la aplicación
CMD [ "npm", "start" ]
