
const root = document.querySelector('.image-gallery');

axios.get('https://api.miamibeachcocktails.com/products?location=1')
.then((response) => {

    const data = response.data;

  // Crear un div para contenedor de todas las columnas
  const columnContainer = document.createElement('div');
  columnContainer.classList.add('columns-container');
  
  // Variable para rastrear el número de productos por columna
  let productosPorColumna = 0;
  
  // Variable para rastrear la columna actual
  let columnaActual = null;
  
  // Iterar a través de los productos
   data.forEach(producto => {
    // Crear una nueva columna si es el primer producto de la columna
    if (productosPorColumna === 0) {
      columnaActual = document.createElement('div');
      columnaActual.classList.add('column');
      columnContainer.appendChild(columnaActual);
    }
  
    // Crear un div de imagen con overlay para cada producto
    const imageItem = document.createElement('div');
    imageItem.classList.add('image-item');
  
    // Crear la imagen
    const image = document.createElement('img');
    console.log(producto.image);
    image.src = producto.image;
    image.alt = '';
  
    // Crear el div de overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
  
    // Crear el span con el título del producto
    const titleSpan = document.createElement('span');
    titleSpan.textContent = producto.name;
  
    // Agregar la imagen y el título al div de overlay
    overlay.appendChild(image);
    overlay.appendChild(titleSpan);
  
    // Agregar el div de overlay al div de imagen
    imageItem.appendChild(overlay);
  
    // Agregar el div de imagen a la columna actual
    columnaActual.appendChild(imageItem);
  
    // Incrementar el contador de productos por columna
    productosPorColumna++;
  
    // Si ya hemos agregado tres productos a la columna, reiniciamos el contador
    if (productosPorColumna === 3) {
      productosPorColumna = 0;
    }

      // Agregar el contenedor de columnas al documento
    root.appendChild(columnContainer);
})
},(error) => {
  console.log(error);
});
