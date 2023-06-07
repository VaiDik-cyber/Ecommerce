let form = document.querySelector("form");

// Add event listener for form submission
form.addEventListener("submit", myfunc);
async function myfunc(e) {
  e.preventDefault();
  let price = e.target.price.value;
  let product = e.target.product.value;

  let user = {
    price,
    product,
  };

  try {
    await axios.post(
      "https://crudcrud.com/api/3ed902c18a6440ca8bf548e38d655f7f/ecommerce",
      { user }
    );
    alert("Product Added");
    // console.log(res.data);
    e.target.price.value = "";
    e.target.product.value = "";
    // window.location.reload();
    getData();
  } catch (error) {
    console.log(error);
  }
}

//Display Details
function DisplayUser(res) {
  console.log(res);
  let heading = document.createElement("h1");
  heading.innerHTML = "Products";

  let divMain = document.getElementById("container");
  divMain.innerHTML = "";
  divMain.append(heading);

  let div = document.getElementById("div");

  let ul = document.createElement("ul");
  let totalPrice = 0;

  res.forEach((element) => {
    let li = document.createElement("li");
    let delbtn = document.createElement("button");

    delbtn.innerHTML = "Delete Product";
    li.innerText = `Product-Price : ${element.user.price} ₹ ----- Product-Name : ${element.user.product}`;

    li.append(delbtn);
    ul.append(li);
    divMain.append(ul);

    totalPrice = totalPrice + Number(element.user.price);

    div.innerHTML = `<b>Total Value Worth of Products:-</b>  Rs. ${Number(
      totalPrice
    )}`;

    delbtn.addEventListener("click", () => {
      axios.delete(
        "https://crudcrud.com/api/3ed902c18a6440ca8bf548e38d655f7f/ecommerce/" +
          element._id
      );
      ul.removeChild(li);
      alert("User Deleted");

      totalPrice = totalPrice - Number(element.user.price);

      div.innerHTML = `<b>Total Value Worth of Products:-</b>  Rs. ${Number(
        totalPrice
      )}`;
    });
  });
}
async function getData() {
  try {
    let res = await axios.get(
      "https://crudcrud.com/api/3ed902c18a6440ca8bf548e38d655f7f/ecommerce"
    );

    DisplayUser(res.data);
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener("load", getData);
