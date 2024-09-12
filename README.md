# Bucks Cafe Backend

## Getting started

### Local

```bash
pnpm install
pnpm dev
```

### Docker

#### Initialize the database

```bash
docker network create bucks-cafe-network
docker run -d --name my_backend_dock --network bucks-cafe-network -e MYSQL_ROOT_PASSWORD=root -p 3307:3306 mysql:latest
```

#### Seed the database

Run the queries from the sql files in the following order:

- `tables.sql`
- `seed.sql`

#### Start the backend service

```bash
docker build --no-cache -t bucks-cafe-backend .
docker run --network bucks-cafe-network -p 8000:8000 bucks-cafe-backend
```

## Tech Stack

- ExpressJS
- Typescript
