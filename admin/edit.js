
let bag;
async function getData() {
    try {
      let res = await fetch("https://lively-tan-trunks.cyclic.app/adminproduct/allproducts");
      let data = await res.json();
      console.log(data);
      bag=data
      displayData(bag);
      
    } catch (error) {
      console.log(error);
    }
  }
  getData();
  
  function displayData(bag) {
    // document.querySelector("fetchdata").innerHTML=""
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
  
     /*...........................Update.......................*/
  
  let editData=0
  let edit=document.querySelector("form")
  edit.addEventListener("submit",my)
  
   async function my(e){
      e.preventDefault()
      console.log("hii")
      let editObj={
      Id:edit.id.value,
      Title: edit.title.value,
      Img_url: edit.image.value,
      Mrp: edit.mrp.value,
      Price: edit.price.value,
      Category: edit.category.value,
      Gender: edit.gender.value,
      Brand: edit.brand.value,
      Design: edit.design.value,
      Rating: edit.rating.value,
      }
      let response=await update(edit.id.value,editObj)
       console.log(response)
       alert(response.message)
       getData()
  }
  async function update(Id , editObj){
    try {
        let response=await fetch(`https://vast-lime-giraffe-wrap.cyclic.app/adminproduct/edit/${Id}`,{
          method:"PATCH",
          headers:{
            "Content-Type":"application/json",
            Authorization:`${localStorage.getItem("token")}`
          },
          body:JSON.stringify(editObj)
        })
        editData++
        localStorage.setItem("editData",editData)
        return  response.json()
    } catch (err) {
      console.log(err)
    }
  }
  