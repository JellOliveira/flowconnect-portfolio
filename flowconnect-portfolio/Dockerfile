FROM node:20-alpine AS builder

# Dockerfile for FlowConnect Portfolio
# NOTE: This file assumes the build context is the project root.
# Run the build command from the project root (one level up):
# docker build -f client/Dockerfile -t flowconnect-portfolio .

# ==========================================
# Stage 1: Builder
# ==========================================

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copy package configuration files
COPY package.json pnpm-lock.yaml ./

# Copy patches directory (required for pnpm installed patches)
COPY patches ./patches

# Install dependencies (including devDependencies for build)
RUN pnpm install --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Build the application (client and server)
RUN pnpm build

# ==========================================
# Stage 2: Runner
# ==========================================
FROM node:20-alpine AS runner

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

ENV NODE_ENV=production
ENV PORT=3000

# Copy package files for production install
COPY package.json pnpm-lock.yaml ./
COPY patches ./patches

# Install ONLY production dependencies
RUN pnpm install --prod --frozen-lockfile

# Copy built artifacts from builder stage
# dist/ contains both public/ (frontend) and index.js (server)
COPY --from=builder /app/dist ./dist

# Expose the server port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]