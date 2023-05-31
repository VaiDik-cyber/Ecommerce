let form = document.querySelector("form");

form.removeEventListener("submit", myfunc);

// Add event listener for form submission
form.addEventListener("submit", myfunc);
async function myfunc(e){
    e.preventDefault();
    let price = e.target.price.value;
    let product = e.target.product.value;

    let user = {
        price,
        product,
    };
    // console.log(price);
    // console.log(product);
    try{
         await axios.post("https://crudcrud.com/api/b40999f5171748e1ab946e3f43ac4f6e/ecommerce",{user});
        alert("User Added");
        // console.log(res.data);
        e.target.price.value = "";
        e.target.product.value = "";
        // window.location.reload();
        getData();
    }
    catch(error){
        console.log(error);
    }
}
function DisplayUser(res){
    console.log(res);
    let heading = document.createElement("h1");
    heading.innerHTML = "Products";
    
    let divMain = document.getElementById("container");
    divMain.innerHTML = "";
    divMain.append(heading);
    res.forEach(element => {
        // let div = document.createElement("div");
        
        
        let li = document.createElement("li");
        let delbtn = document.createElement("button");
        delbtn.innerHTML="Delete Product";
        // li.append(element.user.price,"-",element.user.product,"-",delbtn);
        li.innerText = `Product-Price : ${element.user.price} ₹ ----- Product-Name : ${element.user.product}`;
        li.append(delbtn);
        divMain.append(li);
        // document.body.append(div);

        delbtn.addEventListener("click",()=>{
            axios.delete("https://crudcrud.com/api/b40999f5171748e1ab946e3f43ac4f6e/ecommerce/"+ element._id);
            divMain.removeChild(li);
            alert("User Deleted");
        })
    });
}
async function getData(){
    try{
        let res = await axios.get("https://crudcrud.com/api/b40999f5171748e1ab946e3f43ac4f6e/ecommerce");
        // console.log(res.data);
        DisplayUser(res.data);
    }
    catch(error){
        console.log(error);
    }
}

window.addEventListener("load", getData);
