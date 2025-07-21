#!/bin/bash
set -e

# Auto-load .env without exposing values
set -a
source .env
set +a

docker build --no-cache \
  --build-arg TURBO_TEAM=$TURBO_TEAM \
  --build-arg TURBO_TOKEN=$TURBO_TOKEN \
  -t admin -f apps/admin/Dockerfile .

# DOCKER_BUILDKIT=1 docker build --no-cache \
#   --build-arg TURBO_TEAM=$TURBO_TEAM \
#   --build-arg TURBO_TOKEN=$TURBO_TOKEN \
#   -t auth \
#   -f apps/auth/Dockerfile .

#   DOCKER_BUILDKIT=1 docker build --no-cache \
#   --build-arg TURBO_TEAM=$TURBO_TEAM \
#   --build-arg TURBO_TOKEN=$TURBO_TOKEN \
#   -t api-gateway \
#   -f apps/api-gateway/Dockerfile .

#   DOCKER_BUILDKIT=1 docker build --no-cache \
#   --build-arg TURBO_TEAM=$TURBO_TEAM \
#   --build-arg TURBO_TOKEN=$TURBO_TOKEN \
#   -t products \
#   -f apps/products/Dockerfile .

#   DOCKER_BUILDKIT=1 docker build --no-cache \
#   --build-arg TURBO_TEAM=$TURBO_TEAM \
#   --build-arg TURBO_TOKEN=$TURBO_TOKEN \
#   -t user \
#   -f apps/user/Dockerfile .
