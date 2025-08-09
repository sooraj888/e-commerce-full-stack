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

# ---- Production Stage ----
FROM node:20-alpine AS production
WORKDIR /app
RUN npm install -g pnpm

ENV NODE_ENV=production

# Copy built output for api-gateway
COPY --from=build /app/dist/apps/api-gateway .

RUN pnpm install --prod --frozen-lockfile

# Start NestJS app
EXPOSE 3001
CMD ["node", "main.js"]
