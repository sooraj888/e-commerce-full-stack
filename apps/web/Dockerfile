# ---- Base Stage ----
FROM node:20-alpine AS base
WORKDIR /app
RUN npm install -g pnpm

# ---- Build Stage ----
FROM base AS build
COPY . .
# Install deps & build only web app
RUN pnpm install --frozen-lockfile
RUN pnpm nx reset
ENV NEXT_OUTPUT_MODE=standalone
RUN pnpm nx build web --prod 
RUN pnpm store prune

# ---- Production Stage ----
FROM node:20-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Copy standalone server build
COPY --from=build /app/apps/web/.next/standalone ./

# ✅ Copy the static assets (CSS, JS chunks)
COPY --from=build /app/apps/web/.next/static ./apps/web/.next/static

# ✅ Copy public folder (images, fonts, etc.)
COPY --from=build /app/apps/web/public ./apps/web/public

EXPOSE 3000
CMD ["node", "apps/web/server.js"]