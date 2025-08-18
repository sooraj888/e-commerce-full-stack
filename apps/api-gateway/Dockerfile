# ---- Base Stage ----
FROM node:lts-alpine3.17 AS base
WORKDIR /app
RUN npm install -g pnpm

# ---- Build Stage ----
FROM base AS build

COPY pnpm-lock.yaml ./
COPY package.json ./
COPY pnpm-workspace.yaml ./
COPY nx.json ./
COPY tsconfig.base.json ./
COPY libs/nest-core/package.json ./libs/nest-core/

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm prisma generate --schema=libs/my-prisma-schema/prisma/schema.prisma

RUN pnpm nx build api-gateway

# RUN pnpm nx run-many -t generate-types

# ---- Prune Stage ----
FROM base AS prune
WORKDIR /app
RUN npm install -g pnpm

# Copy built output for api-gateway
COPY --from=build /app/dist/apps/api-gateway .

COPY --from=build /app/libs/my-prisma-schema/generated/three ./libs/my-prisma-schema/generated/three

RUN pnpm install --prod --frozen-lockfile

# ---- Production Stage ----
FROM node:lts-alpine3.17 AS production
WORKDIR /app

ENV NODE_ENV=production

# Copy prune output for api-gateway
COPY --from=prune /app .

# Start NestJS app
EXPOSE 3001
CMD ["node", "main.js"]
