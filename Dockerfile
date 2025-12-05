# ==== Build stage ====
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# ==== Runtime stage ====
FROM nginx:alpine

# Copy built frontend to Nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose http
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
