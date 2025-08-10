# ---- Base Stage ----
FROM node:20-alpine AS base
WORKDIR /app
RUN npm install -g pnpm

# ---- Build Stage ----
FROM base AS build
COPY . .
# Install all deps & build only api-gateway
RUN pnpm install --frozen-lockfile
RUN pnpm nx build api-gateway

# ---- Prune Stage ----
FROM base AS prune
WORKDIR /app
RUN npm install -g pnpm

# Copy built output for api-gateway
COPY --from=build /app/dist/apps/api-gateway .

RUN pnpm install --prod --frozen-lockfile

# ---- Production Stage ----
FROM node:20-alpine AS production
WORKDIR /app

ENV NODE_ENV=production

# Copy prune output for api-gateway
COPY --from=prune /app .

# Start NestJS app
EXPOSE 3001
CMD ["node", "main.js"]
