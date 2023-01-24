
let bag;
async function getData() {
    try {
      let res = await fetch("https://vast-lime-giraffe-wrap.cyclic.app/adminproduct/allproducts");
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
    document.querySelector(".fetchdata").innerHTML=""
    // console.log(bag)
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
  
  let count=0;
  let deleteData=document.querySelector("form")
  deleteData.addEventListener("submit",my)
  
   async function my(e){
      e.preventDefault()
      console.log("hii")
     
      let response=await deletedata(deleteData.id.value)
       console.log(response)
       alert(response.message)
       getData()
  }
  async function deletedata(ID){
    console.log(ID)
    try {
        let response=await fetch(`https://vast-lime-giraffe-wrap.cyclic.app/adminproduct/delete/${ID}`,{
            
          method:"DELETE",
          headers:{
            "Content-Type":"application/json",
            Authorization:`${localStorage.getItem("token")}`
          },
         
        })
        count++;
        localStorage.setItem("count",count)
        return await response.json()
        
    } catch (err) {
      console.log(err)
    }
  }
  