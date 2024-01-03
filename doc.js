const product=[
    {
        id:0,
        image:'image/phone.jpg',
        title: 'Tecno CAMON 20 - Noir',
        marque:'Tecno',
        price: '121,600',
    },
    
    {
        id:1,
        image:'image/airpods.jpg',
        title: 'FreePods 4 ANC',
        marque:'Oraimo',
        price: '21,000',
    },
    {
        id: 2,
        image:'image/smart.jpg',
        title: 'Système Audio - Noir',
        marque:'SMART TECHNOLOGY',
        price: '18,600',
    },
    {
        id: 3,
        image:'image/xbox.jpg',
        title: ' PS2 ',
        marque:'Sony Computer',
        price: '74,900',
    },


];

const categories=[... new Set(product.map((items)=>
    { return items}))]
    let i=0;
    document.getElementById('root').innerHTML = categories.map((items)=>
    {
        var {id, image, title, marque, price}=items;
        return(
             `<div class='box'>
              <div class='img-box'>
              <img class='images' src='${image}'/>
              </div>
              <div class='bottom'>
              <p>${title}</p>
              <p>${marque}</p>
              <h2>${price}.00 FCFA </h2>` +
              "<button onclick='addtocart('+${id}+')'>Ajouter au Panier </button>"+
              `</div>
              </div>`      
        )
    }).join('');

    var cart=[];
    function addtocat(a) {
        cart.push({...categories[a]});
        displaycart();
        
    }
    function displaycart(a) {
        let j=0;
        if (cart.length==0){
            document.getElementById('cartItem').innerHTML="Ton Panier est vide";
        }
        else{
            document.getElementById('cartItem').innerHTML=cart.map((item)=>{
              var{id,image, title, price} =item;
              return(
                `<div class='cart-item'>
                <div class='row-img'>
                <img class='rowimg' src="${image}"/>
                </div>
                <p style='font-size=12px;'>${title}</p>
                <h2 style='font-size=15px;'>${price}.00 FCFA</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement('+${id}+')'></i></div>"

              );

            }).join('');
        }

        
    }
