const wrapper=document.querySelector(".sliderWrapper")
const menuItems=document.querySelectorAll(".menuItem");
menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>
    {
        wrapper.style.transform=`translatex(${-100 *index}vw)`
    })
})

const products=[
    {
        id:1,
        title: "Air Force",
        price:199,
        colors:[
            {
                code: "black",
                img:"./img/AQ8650_001.png.png"
            },
            {
                code: "darkblue",
                img: "./img/patch img/IMG_20231218_172949.png",
            }
        ],
    },
    {
        id:2,
        title: "Air Jordan",
        price:213,
        colors:[
            {
                code: "gray",
                img:"./img/WhatsApp Image 2023-12-16 at 17.56.36.png"
            },
            {
                code: "lightblue",
                img: "./img/patch img/IMG_20231218_173200.png",
            }
        ],
    },
    {
        id:3,
        title: "Blazer",
        price:169,
        colors:[
            {
                code: "white",
                img:"./img/patch img/IMG_20231218_171848.png"
            },
            {
                code: "red",
                img: "./img/patch img/IMG_20231218_172649.png",
            }
        ],
    },
    {
        id:4,
        title: "CRAT",
        price:189,
        colors:[
            {
                code: "orange",
                img:"./img/crat2_adobe_express.png"
            },
            {
                code: "darkgray",
                img: "./img/patch img/IMG_20231218_173411.png",
            }
        ],
    },
    {
        id:5,
        title: "Hippy",
        price:521,
        colors:[
            {
                code: "lightgreen",
                img:"./img/15-nike-running-shoes-png-image.png"
            },
            {
                code: "blue",
                img: "./img/shoe 2/hippy_adobe_express.png",
            }
        ],
    },
];

let choosenProduct=products[0]
const currentProductImg =document.querySelector(".productImg");
const currentProductTitle =document.querySelector(".productTitle");
const currentProductPrice =document.querySelector(".productprice");
const currentProductColor =document.querySelectorAll(".color");
const currentProductSizes =document.querySelectorAll(".size");

menuItems.forEach((item,index)=>
{
     item.addEventListener("click",()=>
     {
        //change the current slide
        wrapper.style.transform=`translateX(${-100 * index}vw)`;

        //change the choosen productt
        choosenProduct=products[index]

        //change the title of currentProduct
        currentProductTitle.textContent=choosenProduct.title
        currentProductPrice.textContent="$"+choosenProduct.price
        currentProductImg.src=choosenProduct.colors[0].img

        currentProductColor.forEach((color,index)=>
        {
            color.style.backgroundColor=choosenProduct.colors[index].code;
        })



     })
});

currentProductColor.forEach((color,index)=>
{
    color.addEventListener("click",()=>
    {
        currentProductImg.src=choosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size,index)=>
{
    size.addEventListener("click",()=>
    {
        currentProductSizes.forEach((size)=>{
        size.style.backgroundColor="white";
        size.style.color="black";
    });
    size.style.backgroundColor="black";
    size.style.color="white";
  });
});

const productButton =document.querySelector(".productButton");
const payment =document.querySelector(".payment");
const close =document.querySelector(".close");

productButton.addEventListener("click",()=>
{
    payment.style.display="flex"
})

close.addEventListener("click",()=>
{
    payment.style.display="none"
})
