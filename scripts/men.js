var menData = [{
    imgurl: "https://m.media-amazon.com/images/I/71MJ9bnxpjL._AC_SR736,920_.jpg",
    brandname: "Under Armour",
    productname: "Fast Left Chest 2.0 Short Sleeve",
    price: "1529.00",
    strikedOffPrice: "1709.00",
},
{
    imgurl: "https://m.media-amazon.com/images/I/71I6iNvdUFL._AC_SR736,920_.jpg",
    brandname: "Under Armour",
    productname : "Fast Left Chest 2.0 Short Sleeve",
    price: "694.00",
    strikedOffPrice: "895.00",
},

{
    imgurl: "https://m.media-amazon.com/images/I/618ZcqijTyL._AC_SR736,920_.jpg",
    brandname: "Calvin Klien Underwear",
    productname : "Cotton Classics Multipack Short Sleeve V-Neck",
    price: "1724.00",
    strikedOffPrice: "1895.00",
},


{
    imgurl: "https://m.media-amazon.com/images/I/61UlieOAG8S._AC_SR736,920_.jpg",
    brandname: "Under Armor",
    productname : "UA Tech Short Sleeve Tee",
    price: "785.00",
    strikedOffPrice: "1095.00",
},


{
    imgurl: "https://m.media-amazon.com/images/I/91iwrr7Lm3L._AC_SR736,920_.jpg",
    brandname: "Calvin Klien Underwear",
    productname : "Cotton Classics Multipack Short Sleeve V-Neck",
    price: "724.00",
    strikedOffPrice: "895.00",
},


{
    imgurl: "https://m.media-amazon.com/images/I/81PcmMN1kkL._AC_SR736,920_.jpg",
    brandname: "Lavi's Mens",
    productname : "541 Athletic Fit",
    price: "340.00",
    strikedOffPrice: "695.00",
},


{
    imgurl: "https://m.media-amazon.com/images/I/711tWDpLzuL._AC_SR736,920_.jpg",
    brandname: "Lavi's Mens",
    productname : "541 Athletic Fit",
    price: "724.00",
    strikedOffPrice: "895.00",
},


{
    imgurl: "https://m.media-amazon.com/images/I/81IhxAIlh0L._AC_SR736,920_.jpg",
    brandname: "Lavi's Mens",
    productname : "512 Slim Taper Fit",
    price: "456.00",
    strikedOffPrice: "795.00",
},


{
    imgurl: "https://m.media-amazon.com/images/I/81aiTjVs3xL._AC_SR736,920_.jpg",
    brandname: "IZOD",
    productname : "Button Down Long Sleeve Stretch Performance Gingham Shirt",
    price: "824.00",
    strikedOffPrice: "995.00",
},


{
    imgurl: "https://m.media-amazon.com/images/I/91hEhau5DhL._AC_SR736,920_.jpg",
    brandname: "Van Heusen",
    productname : "Big and Tall Air Short Sleeve Button Down Poly Rayon Stripe Shirt",
    price: "1594.00",
    strikedOffPrice: "1700.00",
},

{
    imgurl: "https://m.media-amazon.com/images/I/91HbcELgdLL._AC_SR736,920_.jpg",
    brandname: "Van Heusen",
    productname : "Big and Tall Air Short Sleeve Button Down Poly Rayon Stripe Shirt",
    price: "1794.00",
    strikedOffPrice: "1970.00",
},

{
    imgurl: "https://m.media-amazon.com/images/I/81TDxLMakwL._AC_SR736,920_.jpg",
    brandname: "Levi's Mens",
    productname : "512 Slim Taper Fit",
    price: "1794.00",
    strikedOffPrice: "1890.00",
},
];



localStorage.setItem("menData", JSON.stringify(menData));
var product = JSON.parse(localStorage.getItem("menData")) || [];
//  var cartArr=[];
var cartArr = JSON.parse(localStorage.getItem("CartItems")) || [];
product.map(function (data) {
    console.log(data);
    var div = document.createElement("div");

    var image = document.createElement("img");
    image.setAttribute("src", data.imgurl);
    image.style.width="200px";

    var brandname = document.createElement("h2");
    brandname.textContent = data.brandname;

    var productname = document.createElement("h6");
    productname.textContent = data.productname;


    var div2 = document.createElement("div");
    div2.setAttribute("id", "flex");

    var p1 = document.createElement("p");
    p1.textContent = data.price;

    

    div2.append(p1);

    var div1 = document.createElement("div");
    div1.setAttribute("id","flex1")

    var btn1 = document.createElement("button");
    btn1.textContent = "Add To Cart";
    btn1.addEventListener("click", function () {
        addToCart(data);
    });
    div1.append(btn1);

    div.append(image, brandname, productname, div2,div1);

    document.querySelector("#box").append(div);
});

function addToCart(data) {
    console.log(data);
    cartArr.push(data);
    localStorage.setItem("CartItems", JSON.stringify(cartArr));
    alert("added successfully");
}


