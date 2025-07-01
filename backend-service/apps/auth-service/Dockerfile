# # Stage 1: Build
# FROM node:20-alpine AS builder

# WORKDIR /app

# COPY . .

# RUN npm ci

# RUN npm run build auth-service


# # Stage 2: Run
# FROM node:20-alpine 

# WORKDIR /app 

# COPY --from=builder /app/dist/apps/auth-service ./dist

# COPY --from=builder /app/node_modules ./node_modules

# EXPOSE 3000

# CMD ["node", "dist/main.js"]





# # Stage 1: Build
# FROM node:20-alpine AS builder

# WORKDIR /app

# # Copy only what's needed
# COPY package*.json ./
# COPY tsconfig*.json ./
# COPY nest-cli.json ./
# COPY apps/auth-service ./apps/auth-service
# COPY libs ./libs

# RUN npm ci

# # Generate Prisma if needed (optional)
# # RUN npx prisma generate --schema=libs/prisma/prisma/schema.prisma

# RUN npm run build auth-service

# # Stage 2: Run
# FROM node:20-alpine AS runner

# WORKDIR /app

# # Copy only compiled code and production deps
# COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/node_modules ./node_modules

# EXPOSE 3000

# CMD ["node", "dist/apps/auth-service/main.js"]



# # Stage 1: Build
# FROM node:20-alpine AS builder

# WORKDIR /app

# # Copy package files only
# COPY package*.json ./

# # Install all dependencies (including dev)
# RUN npm ci

# # Copy only the source needed
# COPY tsconfig*.json ./
# COPY nest-cli.json ./
# COPY apps/auth-service ./apps/auth-service
# COPY libs ./libs

# # Build the service
# RUN npm run build auth-service

# # Stage 2: Production
# FROM node:20-alpine AS runner

# WORKDIR /app

# # Set environment to production
# ENV NODE_ENV=production

# # Copy compiled output only
# COPY --from=builder /app/dist ./dist

# # Copy only production dependencies
# COPY package*.json ./
# RUN npm ci --omit=dev

# EXPOSE 3000

# CMD ["node", "dist/apps/auth-service/main.js"]



# Stage 1: Build
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy only the dependency-related files first (for better caching)
COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./

# Copy the relevant app and libs
COPY apps/auth-service ./apps/auth-service
COPY libs ./libs

# Install all dependencies including dev ones
RUN npm ci

# Generate Prisma Client if applicable (uncomment if needed)
# RUN npx prisma generate --schema=libs/prisma/prisma/schema.prisma

# Build the specific service only
RUN npm run build auth-service

# Stage 2: Production
FROM node:20-alpine AS runner

# Set NODE_ENV to production to skip dev deps
ENV NODE_ENV=production

WORKDIR /app

# Copy only required files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy the built application
COPY --from=builder /app/dist ./dist

# Expose the service port
EXPOSE 3001

# Run the app
CMD ["node", "dist/apps/auth-service/main.js"]
