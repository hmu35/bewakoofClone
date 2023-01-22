
/*.............................AddData.............................*/
let addData=0;
let result = document.querySelector("form");
result.addEventListener("submit", myfun);

async function myfun(event) {
 
  event.preventDefault();
  let obj = {
    Title: result.title.value,
    Img_url: result.image.value,
    Mrp: result.mrp.value,
    Price: result.price.value,
    Category: result.category.value,
    Gender: result.gender.value,
    Brand: result.brand.value,
    Design: result.design.value,
    Rating: result.rating.value,
  };
  console.log(obj);
  let data = await add(obj);
  console.log(data);
  getData()
   if(data.message="Prooduct has been added"){
    alert(data.message)
   }else{
    alert(data.message)
   }
}
async function add(obj) {
  
  try {
    let result = await fetch("https://lively-tan-trunks.cyclic.app/adminproduct/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:`${localStorage.getItem("token")}`
      },
      body: JSON.stringify(obj),
    });
    // console.log(localStorage.getItem("token"))
    addData++
localStorage.setItem("addData",addData)
    return result.json();
  
  } catch (err) {
    console.log(err);
  }
}  
/*...............................FetchData......................................*/

async function getData() {
  try {
    let res = await fetch("https://lively-tan-trunks.cyclic.app/adminproduct/allproducts");
    let data = await res.json();
    console.log(data);
    bag=data
    localStorage.setItem("data",bag.length)
    displayData(bag);
    
  } catch (error) {
    console.log(error);
  }
}
getData();

function displayData(bag) {
  document.querySelector(".fetchdata").innerHTML=""
  console.log(bag)
  bag.forEach((ele) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", ele.Img_ulr);
    let Title = document.createElement("p");
    Title.innerText = ele.Title;
    let Brand = document.createElement("h5");
    Brand.innerText = ele.Brand;
    let MRP = document.createElement("h3");
    MRP.innerHTML = `<h5>&#8377; ${ele.Mrp}</h5>`;
   
    // MRP.innerText=ele.MRP
    let price = document.createElement("h5");
    price.innerHTML = `<h4>&#8377; ${ele.Price}</h4>`
    price.style.textDecoration=`line-through`
    let Id=document.createElement("p")
    Id.innerText=ele._id
    div.append(img, Title, Brand, MRP, price,Id);
    document.querySelector(".fetchdata").append(div);
  });
}


