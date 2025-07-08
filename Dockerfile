# Stage 1: build
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package files & install
COPY package.json yarn.lock ./
RUN yarn install

# Copy source code
COPY . .

# Build project
RUN yarn build

# Stage 2: production image
FROM node:18-alpine AS runner
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["yarn", "start"]
