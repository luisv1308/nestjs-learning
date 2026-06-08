# Notas de aprendizaje

## Fase actual

`01-sql` — pendiente

## Resumen por fase

| Fase | Estado | Fecha inicio | Fecha fin |
|------|--------|--------------|-----------|
| 00-typescript | completada | 2026-06-03 | 2026-06-03 |
| 01-sql | pendiente | — | — |
| 02-prisma | pendiente | — | — |
| 03-nest-basic | pendiente | — | — |
| 04-nest-validation | pendiente | — | — |
| 05-nest-swagger | pendiente | — | — |
| 06-nest-auth | pendiente | — | — |
| 07-nextjs | pendiente | — | — |
| 08-docker | pendiente | — | — |
| 09-testing | pendiente | — | — |
| 10-redis | pendiente | — | — |
| 11-rabbitmq | pendiente | — | — |
| 12-microservices | pendiente | — | — |

## Lo aprendido

### 00-typescript

- Enum, interface y type alias para modelar dominio.
- Funciones con retorno `T | undefined` y genéricos con `keyof`.
- Clases con propiedades `private` y métodos tipados.
- `Promise<T>` vs valor directo; `async/await` para operaciones lentas.
- Organización en módulos separados por responsabilidad.

## Errores comunes

### 00-typescript

- `Cannot find name 'console'` → faltaba `@types/node`.
- Imports sin usar → aviso del compilador en modo strict.
- Confundir `Promise<T>` con `T` → hay que usar `await`.
