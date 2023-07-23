//let data = null;// {"id":11,"title":"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5","price":109,"description":"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.","category":"electronics","image":"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg","rating":{"rate":4.8,"count":319}};

function getData(){
    let promesa  =  fetch ("https://fakestoreapi.com/products/", {method: "GET"});
    
   promesa.then((response)=>{
    response.json()
    .then((data)=>{
    createCards(data);
    })
    .catch(
        (error)=>{console.error("problema en el json",error);
        });
    }).catch((error)=>{
    console.error(error,"Ocurrio un eror den la solicitud");
    }); 
   
    } // 
    

 //get data 
 getData()
//function createCards(data){
  ///  data.forEach(producto => {
     //   console.log(producto.id, producto.title);
    //});
    
let mainProds = document.getElementById("mainProds");
function createCards(prods){
    prods.forEach(prods => {
        mainProds.insertAdjacentHTML("beforeend",`<div class="card" style="width: 18rem"> 
        <img  src="${prods.image}" class="card-img-top" alt="${prods.description}">
        <div class="col-auto">
        <div class="card-body">
          <h5 class="card-title">${prods.title}</h5>
          <p class="card-text"><strong>${prods.category}</strong></p>
         
        </div>
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Más info...
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel"> ${prods.title}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      ${prods.description}
      <p class="text-end"><strong>${prods.price}</strong> 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      </div>`);

    }
    );}