

let api = "https://fakestoreapi.com/products"

async function getApi(url) {
    let response = await fetch(url)
    let data = await response.json()
    console.log(data);

    let card = ""

    data.forEach(element => {

        card += `
         <div class="card m-2" style="width: 15rem;">
             <div class="box"> 
         <img src="${element.image}" class="card-img-top" alt="...">
             </div>

                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.description}</p>
                        <h6 class="card-title"><b>Rs: <span>${element.price}</span></b></h6>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        `
        document.getElementById("showproducts").innerHTML = card
    });


}

getApi(api)