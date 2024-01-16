
const root = document.querySelector('.carta');

const CATEGORY_DEFAULT = 'cocteles';
const CATEGORY_ALCOHOL = 'con alcohol';
const CATEGORY_NOT_ALCOHOL = 'sin alcohol';
const CATEGORY_FRUITS = 'frutales';
const CATEGORY_KIDS = 'kids';
const CATEGORY_ADITIONAL = 'adicionales';

var arr = { "cocteles": "blue", 
"con alcohol": "green", 
"sin alcohol": "yellow", 
"tradicionales": "blue", 
"kids": "white",
"frutales": "white",
"shots": "white",
"adicionales": "white" }; 


axios.get('https://api2.miamibeachcocktails.com/products?location=1')
.then((response) => {

  const data = response.data;

  let enableds = data.filter(product => product.enabled > 0);

  enableds.forEach((product) => {
    
    let hidden = '';
    let type_cat = '';
    let color = 'white'

    type_cat = 'card';

    const container = document.createElement('div');
    if(product.category !== CATEGORY_DEFAULT){
      hidden = ' hidden'      
    }
    if(product.category === CATEGORY_ADITIONAL){
      type_cat = "card-tiny"
    }else{
      type_cat = "card"
    }

    color = arr[product.category];

   /* if(!arr.includes(product.category.name)){
      color = "white";
    }*/
     

  container.setAttribute('class', type_cat+hidden);

  const title = document.createElement('h3');
  title.setAttribute('class', 'card-title');
  title.textContent = product.name

  const midcontain = document.createElement('div');
  midcontain.setAttribute('class', 'container-card bg-'+color+'-box');

  const data = document.createElement('div');
  data.setAttribute('class', 'container-data')
  

  /*const picture = document.createElement('div');
  picture.setAttribute('class', 'product__picture');*/
  const img = document.createElement('img');
  img.setAttribute('class', 'product-image') 
  if(product.image.includes("http")){
    img.setAttribute('src', product.image);
  }else{
    img.setAttribute('src', "img/"+product.image);
  }
 
 // picture.appendChild(img);
  
      midcontain.appendChild(img);
      
      data.appendChild(title);

      midcontain.appendChild(data);

      const description = document.createElement('p');
      description.setAttribute('class', 'product__description');
      description.textContent = product.description;
      //midcontain.appendChild(description);

      container.appendChild(midcontain);

      const pricesList = document.createElement('div');
      pricesList.setAttribute('class', 'prices_list');

      data.appendChild(pricesList);

      const presentations = product.presentations;
      
      var format = new Intl.NumberFormat();

      let band = 0;
      presentations.forEach((pres) => {

        if(pres._enabled>0){

            const price = document.createElement('div');
            price.setAttribute('class', 'price');

            const value = document.createElement('p');
            value.setAttribute('class', 'value');
            
            value.innerHTML = '<span class="highl">'+format.format(Number(pres.price).toFixed(0))+'</span>'+'<span class="press">'+pres.name.toUpperCase()+'</span>';

            price.appendChild(value);
            pricesList.appendChild(price);
            ++band;
        }
      })

      if(band===0){
        const price = document.createElement('div');
        price.setAttribute('class', 'price');

        const value = document.createElement('p');
        value.setAttribute('class', 'value');
        value.innerHTML = '<span class="highl">'+format.format(Number(product.price).toFixed(0))+'</span>';

        price.appendChild(value);
        pricesList.appendChild(price);
      }

      const category = document.createElement('span');
      category.setAttribute('class', 'category');
      category.textContent = product.category;

      container.appendChild(category);

      root.appendChild(container);
    })
},(error) => {
  console.log(error);
});
