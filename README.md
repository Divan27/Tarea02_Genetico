# Tarea 2 - Algoritmo genetico con JavaScript y React

## Instituto Tecnológico de Costa Rica

Profesor: Joss Pecou Johnson  
Analisis de algoritmos  
Segundo semestre de 2025 - Grupo 60

## Integrantes del grupo

- Roymar Castillo Carvajal
- Dilan Zamora Sanchez

---

## Tecnologías Utilizadas

### Frontend

- **React** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite** - Herramienta de construcción y desarrollo rápido
- **HTML5** - Estructura y marcado de la aplicación web
- **CSS3** - Estilos y diseño responsivo con variables CSS

### Lenguajes de Programación

- **JavaScript** - Lenguaje principal de desarrollo
- **JSX** - Sintaxis de JavaScript extendida para React

### Herramientas de Desarrollo

- **ESLint** - Linter para mantener calidad del código
- **npm** - Gestor de paquetes y dependencias
- **Git** - Control de versiones

### Algoritmos y Técnicas

- **Algoritmos Genéticos** - Técnica de optimización evolutiva
- **Programación Funcional** - Paradigma utilizado en componentes React
- **Hooks de React** - Gestión de estado con `useState`

## Ejecución del Programa

Se puede ingresar a la pagina por medio de este link:

```bash
https://divan27.github.io/Tarea02_Genetico/

Profe disculpe, la verdad es que no entendemos cual puede ser el error. Personalmente no es la
primera vez que hacemos un despliegue de react.
prueba: https://racc1210.github.io/Prueba-accesibilidad/
```

O esta la opción de la ejecución en local.

### Instalación Local

#### Prerrequisitos

- **Node.js** (versión 16 o superior)
- **npm** (incluido con Node.js)

#### Pasos de Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/Divan27/Tarea02_Genetico.git
   cd Tarea02_Genetico
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**

   ```bash
   npm run dev
   ```

   La aplicación estará disponible en: `http://localhost:5173`

4. **Construir para producción**

   ```bash
   npm run build
   ```

5. **Previsualizar build de producción**
   ```bash
   npm run preview
   ```

### Instrucciones de Uso

#### Paso 1: Configurar el Límite

- Ingresa un número en el campo **"Valor límite L"**
- Este valor representa la suma máxima permitida
- Ejemplo: Si ingresas `50`, el algoritmo buscará subconjuntos cuya suma no exceda 50

#### Paso 2: Ejecutar el Algoritmo

- Haz clic en el botón **"Iniciar Algoritmo Genético"**
- El programa generará automáticamente 10 números aleatorios
- Se ejecutarán 100 generaciones del algoritmo genético

#### Paso 3: Explorar los Resultados

- **Panel Izquierdo**: Muestra la configuración, números generados y mejor solución
- **Panel Derecho**: Navega entre generaciones usando los botones de flechas
- **Individuos**: Cada generación muestra 10 individuos con sus respectivas aptitudes
- **Mejor Individuo**: Destacado con color verde y símbolo de una estrella
