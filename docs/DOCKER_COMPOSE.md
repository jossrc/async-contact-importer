# Docker Compose: API y PostgreSQL 18.4

Levanta el proyecto y PostgreSQL 18.4 en la misma red (`async_contact_importer_net`).

El volumen de datos vive en `docker/postgres-data/` (dentro de este repo) para poder borrarlo sin tocar otras instancias de PostgreSQL.

## Credenciales

| Campo | Valor |
|---|---|
| Usuario | `admin` |
| Contraseña | `postgre` |
| Base de datos | `async_contact_importer` |
| Puerto en el host | `5438` |
| Puerto interno del contenedor | `5432` |

## Connection strings

Desde el host (IDE, `npm run dev`, cliente SQL):

```text
postgresql://admin:postgre@localhost:5438/async_contact_importer
```

Entre contenedores (la API del compose):

```text
postgresql://admin:postgre@postgres:5432/async_contact_importer
```

## Arranque

Copia el entorno si aún no tienes `.env`:

```bash
cp .env.example .env
```

Levantar solo PostgreSQL (para desarrollar la API en local):

```bash
docker compose up -d postgres
```

Levantar PostgreSQL y la API:

```bash
docker compose up -d --build
```

Ver logs:

```bash
docker compose logs -f
```

Solo logs de PostgreSQL:

```bash
docker compose logs -f postgres
```

Comprobar que ambos servicios están sanos:

```bash
docker compose ps
```

Health HTTP de la API:

```bash
curl http://localhost:3000/api/health
```

Probar la conexión a PostgreSQL desde el host:

```bash
docker compose exec postgres psql -U admin -d async_contact_importer -c 'SELECT version();'
```

## Desarrollo local contra la base del compose

Con PostgreSQL ya levantado:

```bash
docker compose up -d postgres
npm install
npm run dev
```

`DATABASE_URL` en `.env` debe apuntar a `localhost:5438`.

## Parar y limpiar

Parar contenedores (el volumen local se conserva):

```bash
docker compose down
```

Parar y borrar el volumen de este proyecto:

```bash
docker compose down
rm -rf docker/postgres-data
```

Tras borrar `docker/postgres-data`, el siguiente `docker compose up` crea una base vacía.
