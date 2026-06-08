# Fase 01 — SQL

## Objetivo

Aprender SQL relacional antes de Prisma y NestJS: tablas, claves foráneas, consultas, joins y modificaciones de datos. Usamos el mismo dominio Pokémon que en TypeScript.

## Herramienta

**SQLite** — base de datos en un archivo, sin servidor. Ideal para aprender en local.

Si no tienes `sqlite3` en terminal, instala [DB Browser for SQLite](https://sqlitebrowser.org/) y ejecuta los `.sql` desde ahí.

## Estructura

```text
01-sql/
├── README.md
├── sql/          # Scripts SQL numerados
└── db/           # Base de datos generada (no se sube a git)
```

## Estado

En progreso.

## Qué se aprendió

_(se completa al finalizar la fase)_

## Comandos útiles (SQLite CLI)

```bash
# Crear/ejecutar script
sqlite3 db/pokedex.db < sql/01-create-tables.sql

# Abrir consola interactiva
sqlite3 db/pokedex.db

# Dentro de sqlite3:
.schema          # ver tablas
.tables           # listar tablas
.quit             # salir
```
