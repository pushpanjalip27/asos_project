


    var womenData = [{
        imgurl: "https://m.media-amazon.com/images/I/81FcUgrFGkL._AC_SR736,920_.jpg",
        brandname: "CeCe",
        productname: "Puff Sleeve Square Neck Blouse",
        price: "529.00",
        strikedOffPrice: "724.00",
    },
    {
        imgurl: "https://m.media-amazon.com/images/I/61NbpZQz1ML._AC_SR736,920_.jpg",
        brandname: "CeCe",
        productname : "One Shoulder Ruffled Blouse",
        price: "694.00",
        strikedOffPrice: "895.00",
    },

    {
        imgurl: "https://m.media-amazon.com/images/I/71D-kF+XBEL._AC_SR736,920_.jpg",
        brandname: "CeCe",
        productname : "One Shoulder Ruffled Blouse",
        price: "724.00",
        strikedOffPrice: "895.00",
    },
   

    {
        imgurl: "https://m.media-amazon.com/images/I/81a+h1LtHAL._AC_SR736,920_.jpg",
        brandname: "Nautica",
        productname : "Nautica Women's Laurex Stripe Woven Shirt",
        price: "785.00",
        strikedOffPrice: "1095.00",
    },
   

    {
        imgurl: "https://m.media-amazon.com/images/I/81k4A9VhsUL._AC_SR700,525_.jpg",
        brandname: "Nautica",
        productname : "Nautica Women's Laurex Stripe Woven Shirt",
        price: "724.00",
        strikedOffPrice: "895.00",
    },
   

    {
        imgurl: "https://m.media-amazon.com/images/I/61LNY+GXWSS._AC_SR736,920_.jpg",
        brandname: "Under Armour",
        productname : "UA Teach Twist V Neck",
        price: "340.00",
        strikedOffPrice: "695.00",
    },
   

    {
        imgurl: "https://m.media-amazon.com/images/I/71HfD8Ba9zL._AC_SR736,920_.jpg",
        brandname: "Life Is Good",
        productname : "Hello Universe Star Crusher tee",
        price: "724.00",
        strikedOffPrice: "895.00",
    },
   

    {
        imgurl: "https://m.media-amazon.com/images/I/81QmfDTLcSL._AC_SR736,920_.jpg",
        brandname: "Life Is Good",
        productname : "Hello Universe Star Crusher tee",
        price: "456.00",
        strikedOffPrice: "795.00",
    },
   

    {
        imgurl: "https://m.media-amazon.com/images/I/81YChkyygoL._AC_SR736,920_.jpg",
        brandname: "Under Armour",
        productname : "UA Teach Twist V Neck",
        price: "724.00",
        strikedOffPrice: "895.00",
    },
   

    {
        imgurl: "https://m.media-amazon.com/images/I/817iSq2MSpL._AC_SR736,920_.jpg",
        brandname: "Splendid",
        productname : "Thermal Flifght Cardigan Hoodie",
        price: "794.00",
        strikedOffPrice: "1700.00",
    },

    {
        imgurl: "https://m.media-amazon.com/images/I/81VkG7k7ObL._AC_SR736,920_.jpg",
        brandname: "Hard Tail",
        productname : "Sherpa Slouchy Cardigan",
        price: "1794.00",
        strikedOffPrice: "2700.00",
    },

    {
        imgurl: "https://m.media-amazon.com/images/I/81AB1lnPBjL._AC_SR1400,1050_.jpg",
        brandname: "Blank NYC",
        productname : "Faux Leather Moto Jacket",
        price: "2794.00",
        strikedOffPrice: "3700.00",
    },
];

localStorage.setItem("womenData", JSON.stringify(womenData));
    var product = JSON.parse(localStorage.getItem("womenData")) || [];
    //  var cartArr=[];
    var cartArr = JSON.parse(localStorage.getItem("CartItems")) || [];
    
   

    product.map(function (data) {
        console.log(data);
        var div = document.createElement("div");

        var image = document.createElement("img");
        image.setAttribute("src", data.imgurl);
        image.style.width  = "200px"

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

