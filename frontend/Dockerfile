# frontend/Dockerfile
FROM node:20

# Créer le répertoire
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Exposer le port
EXPOSE 3000

# Commande de démarrage (en dev ici, adapte pour prod)
CMD ["npm", "run", "dev"]
