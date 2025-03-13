# Utiliser l'image Node.js LTS basée sur Debian
FROM node:22

# Installer les dépendances nécessaires pour Puppeteer et Chromium
RUN apt-get update && apt-get install -y \
    chromium=134.* \
    fonts-liberation \
    libnss3 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libxkbcommon-x11-0 \
    libxcomposite1 \
    libxrandr2 \
    libgbm1 \
    libasound2 \
    libpangocairo-1.0-0 \
    libgtk-3-0 \
    libxdamage1 \
    libxtst6 \
    xdg-utils \
    chromium-sandbox \
    --no-install-recommends \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    && chmod 4755 /usr/lib/chromium/chrome-sandbox
WORKDIR /app
COPY package*.json ./
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
RUN npm install && chown -R node:node /app
COPY --chown=node:node . .
RUN mkdir -p /app/src/data/auth && mkdir -p /app/src/data/scrap && chown -R node:node /app/src/data
USER node
EXPOSE 3000

CMD ["npm", "start"]