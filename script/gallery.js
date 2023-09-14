
const root = document.querySelector('.image-gallery');

axios.get('https://api.miamibeachcocktails.com/products?location=1')
  .then((response) => {

    const data = response.data;

    let enableds = data.filter(product => isValidURL(product.image));

    // Obtener el contenedor
    const gridContainer = document.getElementById("grid-container");

    // Recorrer los datos de la API y crear elementos para cada producto
    enableds.forEach(product => {
      // Crear un elemento <article>
      const article = document.createElement("article");

      // Asignar clases al elemento <article>
      article.className = `beach ${product.category} ${product.location}`;

      // Crear un elemento <img> y asignar el atributo src
      const img = document.createElement("img");
      img.src = product.image;
      img.className = "img-responsive";

      // Agregar la imagen al elemento <article>
      article.appendChild(img);

      // Agregar el elemento <article> al contenedor
      gridContainer.appendChild(article);

    })
  }, (error) => {
    console.log(error);
  });

function isValidURL(str) {
  // Expresión regular para validar URLs
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlPattern.test(str);
}
