FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

# Ensure dockerignore is present in the root directory to prevent copying of files and folders that are not needed
# Below command will copy everything except the content of .dockerignore
COPY . .

RUN npm run build

FROM nginx:alpine AS production

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
