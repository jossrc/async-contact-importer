# async-contact-importer

Backend de importación asíncrona de contactos.

## Requisitos

- Node.js `>= 24.20.0`
- Docker y Docker Compose, o acceso a PostgreSQL

## Arranque

```bash
cp .env.example .env
```

Levanta PostgreSQL 18.4 (puerto `5438` en el host) y, si quieres, la API:

```bash
docker compose up -d postgres
```

```bash
npm install
npm run dev
```

Comandos completos: [docs/DOCKER_COMPOSE.md](docs/DOCKER_COMPOSE.md).

Al iniciar:

1. valida el entorno;
2. autentica contra PostgreSQL;
3. escucha HTTP.

`GET /api/health` comprueba que el proceso está vivo; no consulta la base.

## Scripts

| Script | Uso |
|---|---|
| `npm run dev` | desarrollo con watch |
| `npm run build` | compile a `dist/` |
| `npm start` | ejecuta el build |
| `npm run typecheck` | `tsc --noEmit` |
