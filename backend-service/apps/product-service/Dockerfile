
# # Stage 1: Build
# FROM node:20-alpine AS builder

# # Set working directory
# WORKDIR /app

# # Copy only the dependency-related files first (for better caching)
# COPY package*.json ./
# COPY tsconfig*.json ./
# COPY nest-cli.json ./

# # Copy the relevant app and libs
# COPY apps/product-service ./apps/product-service
# COPY libs ./libs

# # Install all dependencies including dev ones
# RUN npm ci

# # Generate Prisma Client if applicable (uncomment if needed)
# RUN npx prisma generate --schema=libs/prisma/src/schema.prisma

# # Build the specific service only
# RUN npm run build product-service

# # Stage 2: Production
# FROM node:20-alpine AS runner

# # Set NODE_ENV to production to skip dev deps
# ENV NODE_ENV=production

# WORKDIR /app

# # Copy only required files
# COPY package*.json ./

# # Install only production dependencies
# RUN npm ci --omit=dev

# # Copy the built application
# COPY --from=builder /app/dist ./dist

# # Expose the service port
# EXPOSE 3000

# # Run the app
# CMD ["node", "dist/apps/product-service/main.js"]



# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./

COPY apps/product-service ./apps/product-service
COPY libs ./libs

RUN npm ci

# Generate Prisma Client
RUN npx prisma generate --schema=libs/prisma/src/schema.prisma

# Build the specific service only
RUN npm run build product-service

# Stage 2: Production
FROM node:20-alpine AS runner

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

# Copy built app
COPY --from=builder /app/dist ./dist

# ✅ Copy Prisma Client generated output
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma/client ./node_modules/@prisma/client

EXPOSE 3000

CMD ["node", "dist/apps/product-service/main.js"]
