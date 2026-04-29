const cursos = [
	{
		titulo: 'Svelte',
		imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg',
		descripcion: 'Crea interfaces rápidas y sencillas.',
		precio: 'S/ 450'
	},
	{
		titulo: 'TypeScript',
		imagen: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
		descripcion: 'Agrega tipado a tus proyectos JavaScript.',
		precio: 'S/ 550'
	}
];

const section = document.querySelector('main section');

function crearArticulo(curso) {
	const article = document.createElement('article');
	article.innerHTML = `
		<img src="${curso.imagen}" alt="${curso.titulo}">
		<div>
			<h3>${curso.titulo}</h3>
			<p>Crea aplicaciones modernas</p>
			<p>${curso.descripcion}</p>
			<p class="precio">${curso.precio}</p>
			<button>Comprar</button>
		</div>
	`;
	return article;
}

cursos.forEach((curso) => {
	section.appendChild(crearArticulo(curso));
});
