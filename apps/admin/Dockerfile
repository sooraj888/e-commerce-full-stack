FROM node:lts-alpine AS pruner
WORKDIR /app
RUN npm i -g pnpm turbo
COPY . .
RUN turbo prune --scope=admin --docker

FROM node:lts-alpine AS installer
WORKDIR /app
COPY --from=pruner /app/out/json .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/turbo.json ./turbo.json
RUN npm i -g pnpm && pnpm install --frozen-lockfile

FROM node:lts-alpine AS builder
ARG TURBO_TOKEN
ENV TURBO_TOKEN=$TURBO_TOKEN
ARG TURBO_TEAM
ENV TURBO_TEAM=$TURBO_TEAM
WORKDIR /app
COPY --from=installer /app/ .
COPY --from=pruner /app/out/full .
RUN npm i -g pnpm && pnpm build
RUN rm -rf node_modules && pnpm install --frozen-lockfile --prod 

FROM node:lts-alpine AS runner
WORKDIR /app 
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/admin/dist ./apps/admin/dist
COPY --from=builder /app/apps/admin/node_modules ./apps/admin/node_modules
CMD ["node","apps/admin/dist/src/main.js"]
EXPOSE 3005