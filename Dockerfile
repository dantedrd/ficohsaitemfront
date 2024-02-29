# Usa una imagen de Node.js como base
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json a la imagen
COPY package*.json ./

# Instala las dependencias
RUN npm install -g npm@latest

RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

RUN rm /app/enviroment/enviroment.tsx

RUN mv /app/enviroment/enviroment.pdn.tsx /app/enviroment/enviroment.tsx

RUN apt-get update && \
    apt-get install -y iputils-ping





# Compila la aplicación (esto es específico de Next.js)
RUN npm run build

RUN apt-get update && \
    apt-get install -y curl


# Expone el puerto 3000 en el contenedor
EXPOSE 3000

# Comando para ejecutar la aplicación cuando el contenedor se inicia
CMD ["npm", "start"]