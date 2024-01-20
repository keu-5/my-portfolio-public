FROM node:20.9.0

WORKDIR /app/frontend

COPY ./frontend /app/frontend

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]

