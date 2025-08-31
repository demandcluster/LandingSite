# ---- Base Stage ----
# Use an official Node.js runtime as a parent image.
# We are using node:20 as it is more compatible with various packages.
FROM node:20 AS base

# Set the working directory in the container.
WORKDIR /app


# ---- Dependencies Stage ----
# This stage is dedicated to installing dependencies.
# Caching this layer will speed up subsequent builds if dependencies don't change.
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci


# ---- Builder Stage ----
# This stage builds the Next.js application.
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY package.json package-lock.json* ./
COPY . .
# The NEXT_TELEMETRY_DISABLED environment variable is set to 1 to disable
# Next.js's telemetry data collection during the build.
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
RUN npm run build


# ---- Runner Stage ----
# This is the final, production-ready image.
# It starts from a fresh, lightweight Node.js image.
FROM base AS runner
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1

# Create a non-root user for security purposes.
RUN groupadd --system --gid 1001 nodejs
RUN useradd --system --uid 1001 nextjs

# Copy the built application artifacts from the builder stage.
# We are using the standalone output feature of Next.js for a minimal image.
# Ensure `output: 'standalone'` is in your next.config.js file.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to the non-root user.
USER nextjs

# Expose the port the app runs on.
EXPOSE 3000

# Set the PORT environment variable.
ENV PORT 3000

# The command to start the Next.js server.
# The server.js file is created by the `standalone` output mode.
CMD ["node", "server.js"]
