# Fase 00 — TypeScript

## Objetivo

Sentar las bases de TypeScript que usarás en NestJS: tipos, interfaces, funciones tipadas, genéricos básicos, clases y manejo de `async/await`.

## Estado

Completada.

## Estructura del proyecto

```text
src/
├── pokemon.types.ts   # Tipos del dominio (enum, interface, type alias)
├── pokemon.utils.ts   # Funciones utilitarias reutilizables
├── pokedex.ts         # Clase que encapsula la lógica del repositorio
└── index.ts           # Punto de entrada; demo de todo lo aprendido
```

| Archivo | Responsabilidad |
|---------|-----------------|
| `pokemon.types.ts` | Declara los tipos personalizados del dominio (`PokemonType`, `Pokemon`, `PokemonId`) |
| `pokemon.utils.ts` | Funciones puras: `getPokemonById`, `findByProperty` |
| `pokedex.ts` | Clase `Pokedex` que encapsula el array y expone métodos tipados |
| `index.ts` | Inicia el programa y demuestra el uso de `Pokedex` |

## Qué se aprendió

- **Enum** con valores string para datos legibles en JSON/API.
- **Interface** para modelar la forma de un objeto (`Pokemon`).
- **Type alias** para dar semántica a tipos (`PokemonId`).
- **Funciones tipadas** con parámetros y retorno explícitos (`Pokemon | undefined`).
- **Genéricos** con `findByProperty<T, K extends keyof T>` para funciones reutilizables.
- **Clases** con propiedades `private`, constructor y métodos.
- **`Promise` y `async/await`** para operaciones que tardan (simulación de DB/API).
- **Módulos** con `import` / `export` para organizar el código.

## Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| `Cannot find name 'console'` | Faltaban tipos de Node.js | Instalar `@types/node` |
| `'X' is declared but its value is never read` | Import sin usar | Quitar el import o usar el tipo |
| Confundir `Promise<T>` con `T` | El valor viene envuelto en una Promise | Usar `await` para obtener el valor |

## Comandos

```bash
npm install
npm run build
npm start
```
