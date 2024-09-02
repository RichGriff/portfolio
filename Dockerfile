# Use a base Node.js image
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Add libc6-compat if necessary for your application
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies using npm
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application using npm
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Create a non-root user to run the application
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy static assets and build output
COPY --from=builder /app/public ./public

# Set the correct permissions for the prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copy the build output from the builder stage
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

# Start the Next.js application
CMD ["node", "server.js"]
