FROM node:alpine
WORKDIR /usr/app

#copia os arquivos package pra dentro da imagem
COPY package*.json ./ 
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]