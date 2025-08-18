nx run-many -t test build lint e2e -p web* api-gateway*

nx run-many -t dev -p api-gateway

pnpm prisma studio --schema=./libs/my-prisma-schema/prisma/schema.prisma

nx run-many -t generate-types

nx run-many -t migrate

nx graph

nx run my-prisma-schema:studio

docker run -d -p 3000:3000 sooraj888/web:latest
docker run -d -p 3001:3001 sooraj888/api-gateway:latest

docker build -f apps/web/Dockerfile -t web .
