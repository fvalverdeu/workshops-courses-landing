const cursos = [
  {
    "id": 2,
    "imagen": "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fuploads.teachablecdn.com%2Fattachments%2FplHUTvCTFqcwdXeXY8PZ_react%2Bnative%2Bfinal%2Bfile.jpg&w=3840&q=75",
    "titulo": "React Native",
    "subtitulo": "Crea aplicaciones híbridas con el framework más popular",
    "descripcion": "Componentes, navegación, consumo de APIs, almacenamiento local y publicación de builds.",
    "precio": 329.00,
    "tag": "Frontend",
    "duration": "20 horas",
    "instructor": "Fernando Valverde",
    "schedule": "Mar/Jue 7:00pm - 9:30pm",
    "active": true
  },
  {
    "id": 3,
    "imagen": "https://static.platzi.com/media/blog/vuejs-4163d340-e1b8-4554-b42a-43d31e9c5b21.jpg",
    "titulo": "Vue.js",
    "subtitulo": "Desarrollo de Aplicaciones Web Modernas",
    "descripcion": "Reactividad, componentes, routing, estado y patrones típicos para apps modernas.",
    "precio": 500.00,
    "tag": "Frontend",
    "duration": "18 horas",
    "instructor": "Gerardo Quispe",
    "schedule": "Sáb 9:00am - 1:00pm",
    "active": true
  },
  {
    "id": 4,
    "imagen": "https://miro.medium.com/v2/1*v3XndYeIsBtk4CkpMf7vmA.jpeg",
    "titulo": "Crea Aplicaciones con Next.js",
    "subtitulo": "Usa React de forma profesional",
    "descripcion": "Rutas, SSR/SSG, APIs, optimización y despliegue para proyectos reales.",
    "precio": 279.00,
    "tag": "Frontend",
    "duration": "22 horas",
    "instructor": "Miguel Huarcaya",
    "schedule": "Lun/Mié 7:00pm - 9:30pm",
    "active": true
  },
  {
    "id": 5,
    "imagen": "https://nestjs.com/img/nest-og.png",
    "titulo": "Microservicios con Nestjs",
    "subtitulo": "Desarrollo de aplicaciones empresariales",
    "descripcion": "Diseño de microservicios, mensajería, módulos, testing básico y documentación.",
    "precio": 299.00,
    "tag": "Backend",
    "duration": "26 horas",
    "instructor": "Gerardo Quispe",
    "schedule": "Mar/Jue 7:00pm - 9:30pm",
    "active": true
  },
  {
    "id": 6,
    "imagen": "https://blog.prosite.dev/content/images/2024/12/NODEJS-API-REST-EXPRESS-1.jpg",
    "titulo": "Mi Primera API REST con Node.js",
    "subtitulo": "Aprende a crear aplicaciones web",
    "descripcion": "Express desde cero: rutas, middlewares, validaciones básicas y conexión a BD.",
    "precio": 159.00,
    "tag": "Backend",
    "duration": "14 horas",
    "instructor": "Fernando Valverde",
    "schedule": "Sáb 3:00pm - 6:30pm",
    "active": true
  },
  {
    "id": 7,
    "imagen": "https://d8285fmxt3duy.cloudfront.net/public/articulos/img/java-script1.jpg",
    "titulo": "Programación con JavaScript",
    "subtitulo": "Aprende creando con el lenguaje de la Web",
    "descripcion": "Variables, funciones, objetos, arrays, DOM y asincronía con ejercicios guiados.",
    "precio": 99.00,
    "tag": "Fundamentos",
    "duration": "16 horas",
    "instructor": "Miguel Huarcaya",
    "schedule": "Dom 9:00am - 1:00pm",
    "active": true
  }
];

const section = document.querySelector('main section');

console.log(section);

function crearArticulo(curso) {
    const article = document.createElement('article');
    article.innerHTML = `
        <img src="${curso.imagen}" alt="${curso.titulo}">
        <div>
            <h3>${curso.titulo}</h3>
            <p class="subtitulo"><strong>${curso.subtitulo}</strong></p>
            <p>${curso.descripcion}</p>
            <p class="precio">S/ ${curso.precio}</p>
            <button>Comprar</button>
        </div>
    `;
    return article;
}

console.log(crearArticulo(cursos[1]));

cursos.forEach(curso => {
    const articulo = crearArticulo(curso);
    section.appendChild(articulo);
});