# Lengua de Suegra

**Lengua de Suegra** es una aplicación de comercio electrónico (e-commerce) de una sola página (SPA) desarrollada con [Vite](https://vitejs.dev/), [React](https://reactjs.org/), [Firebase](https://firebase.google.com/), [Firestore](https://firebase.google.com/docs/firestore), y [Bootstrap](https://getbootstrap.com/). Esta tienda en línea se especializa en la venta de plantas, ofreciendo a los clientes una experiencia de compra única y fluida.

## Descripción

Lengua de Suegra es una e-commerce dedicada a la venta de plantas, proporcionando a los usuarios una interfaz fácil de usar para explorar diferentes tipos de plantas, agregarlas al carrito de compras y realizar pedidos. La aplicación utiliza Firestore para almacenar datos en tiempo real. El diseño responsivo está asegurado mediante Bootstrap, proporcionando una experiencia visual atractiva en cualquier dispositivo.

## Características

- **Vite y React**: Desarrollo rápido y eficiente con React y Vite para construir una SPA moderna.
- **Firestore**: Utilizado para almacenamiento de datos en tiempo real, incluyendo productos, pedidos, y detalles de usuarios.
- **Bootstrap**: Proporciona un diseño responsivo y estético para la interfaz de usuario.
- **CSS Modules**: Ofrece estilos encapsulados para componentes específicos.
- **Carrito de Compras**: Permite a los usuarios añadir, eliminar y actualizar productos en su carrito de compras.
- **Filtro de Productos**: Los clientes pueden buscar y filtrar plantas según categorías y características.

## Instalación

Para comenzar con este proyecto, sigue estos pasos:

1. **Clonar el repositorio**:

    ```bash
    git clone https://github.com/port1llo/miTienda.git
    cd miTienda
    ```

2. **Instalar las dependencias**:

    ```bash
    npm install
    ```

3. **Configuración de Firebase**:

    Los detalles de la configuración de Firebase están directamente incluidos en el archivo de configuración `firebaseConfig.js` en este repositorio para facilitar la corrección educativa.

    ```javascript
    // src/firebaseConfig.js
    import { initializeApp } from 'firebase/app';
    import { getFirestore } from 'firebase/firestore';
    import { getAuth } from 'firebase/auth';

    const firebaseConfig = {
      apiKey: "AIzaSyCHe_-TJZzWLdOTIGG8YPfIEqY8GbQEaKU",
  authDomain: "mitiendavivero.firebaseapp.com",
  projectId: "mitiendavivero",
  storageBucket: "mitiendavivero.appspot.com",
  messagingSenderId: "979831488792",
  appId: "1:979831488792:web:4be413f5673b666b301e6d"
    };

    const app = initializeApp(firebaseConfig);
    export const db = getFirestore(app);
    export const auth = getAuth(app);
    ```

## Uso

Para ejecutar la aplicación en un entorno de desarrollo:

```bash
npm run dev


Abre tu navegador y navega a https://mi-tienda-lac.vercel.app/ para ver la aplicación en acción 


## Estructura del Proyecto

La estructura del proyecto "Lengua de Suegra" está organizada de la siguiente manera:

```bash
miTienda/
├── public/                          # Archivos públicos y recursos estáticos generales
├── src/                             # Código fuente principal de la aplicación
│   ├── assets/                      # Recursos estáticos como imágenes y SVGs
│   │   ├── logo.png
│   │   └── react.svg
│   ├── components/                  # Componentes de React utilizados en la aplicación
│   │   ├── AboutUs/
│   │   │   └── AboutUs.jsx
│   │   ├── Cart/
│   │   │   ├── Cart.jsx
│   │   │   └── cart.module.css
│   │   ├── CartWidget/
│   │   │   ├── CartWidget.jsx
│   │   │   └── CartWidget.module.css
│   │   ├── Contact/
│   │   │   └── Contact.jsx
│   │   ├── Error404/
│   │   │   └── Error404.jsx
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── footer.module.css
│   │   ├── Item/
│   │   │   └── Item.jsx
│   │   ├── ItemCount/
│   │   │   └── ItemCount.jsx
│   │   ├── ItemDetail/
│   │   │   ├── ItemDetail.jsx
│   │   │   └── ItemDetail.module.css
│   │   ├── ItemDetailContainer/
│   │   │   └── ItemDetailContainer.jsx
│   │   ├── ItemList/
│   │   │   ├── ItemList.jsx
│   │   │   └── ItemList.module.css
│   │   ├── ItemListContainer/
│   │   │   ├── ItemListContainer.jsx
│   │   │   └── ItemListContainer.module.css
│   │   ├── Navbar/
│   │   │   ├── Navbar.css
│   │   │   ├── Navbar.jsx
│   │   │   └── NavbarLink.jsx
│   ├── mock/                        # Datos ficticios para desarrollo y pruebas
│   │   └── mockData.js
│   ├── pages/                       # Componentes de página para la estructura general
│   │   └── Layout.jsx
│   ├── spinner/                     # Componentes relacionados con el spinner de carga
│   │   ├── PVtR.gif
│   │   └── spinner.jsx
│   ├── utils/                       # Funciones utilitarias generales
│   │   └── fetchData.js
│   ├── context/                     # Contextos de React para el manejo del estado global
│   │   └── CartContext.jsx
│   ├── firebase/                    # Configuración de Firebase
│   │   └── dbConnection.js
│   ├── App.css                      # Estilos globales para la aplicación
│   ├── App.jsx                      # Componente principal de la aplicación
│   ├── index.css                    # Estilos CSS globales
│   ├── main.jsx                     # Punto de entrada de la aplicación React
├── .gitignore                       # Archivos y directorios a ignorar en Git
├── README.md                        # Documentación del proyecto
├── eslint.config.js                 # Configuración de ESLint para el proyecto
├── index.html                       # Archivo HTML principal
├── package-lock.json                # Dependencias bloqueadas para la versión del proyecto
├── package.json                     # Dependencias del proyecto y scripts de npm
└── vite.config.js                   # Configuración de Vite para el proyecto

Notas Adicionales
.env: Este archivo contiene configuraciones sensibles que normalmente no se deberían subir al repositorio, pero en este caso se incluye por razones educativas.
.gitignore: Contiene las reglas para ignorar ciertos archivos o carpetas al hacer commits, como el archivo .env, carpetas de dependencias (node_modules), archivos de construcción (dist), entre otros.

Licencia
Este proyecto está bajo la licencia Port1llo.

Contacto
Portillo -  portilloborbore@gmail.com

Enlace del proyecto: https://github.com/port1llo/miTienda
