
let ABOUTUS = document.getElementById("ABOUTUS");
ABOUTUS.addEventListener("click", () => {
    window.location.href = "#about";
});

let gallery = document.getElementById("gallery");
gallery.addEventListener("click", () => {
    window.location.href = "#Gallery";
});

let more = document.getElementById("more");
more.addEventListener("click", () => {
    window.location.href = "#Forms";
});


let Data = [
    {
        id: 1,
        category: "Milk",
        items: "dairyproducts",
        price:"₹500",
        image: "https://image3.jdomni.in/banner/28032023/7C/83/30/0A601DAC0A2B8170EB6B3F84C6_1679994838944.jpg?output-format=webp"
    },
    {
        id: 2,
        category: "cheese",
        items: "dairyproducts",
        price:"₹190",
        image: "https://image3.jdomni.in/banner/28032023/BA/2E/6F/3BE81CACB23F5B7D336402B21C_1679994631570.jpg?output-format=webp"
    },
    {
        id: 3,
        category: "buttermilk",
        items: "dairyproducts",
        price:"₹70",
        image: "https://image2.jdomni.in/banner/28032023/29/04/13/3644BF1D1AF94C3A51DE99C21C_1679994347293.jpg?output-format=webp"
    },
    {
        id: 4,
        category: "butter",
        items: "dairyproducts",
        price:"₹150",
        image: "https://image3.jdomni.in/banner/28032023/33/DB/6A/AB6A17879ED27417781F11DCFB_1679994590414.png?output-format=webp"
    },
    {
        id: 5,
        category: "panner",
        items: "dairyproducts",
        price:"₹80",
        image: "https://image1.jdomni.in/banner/28032023/32/BD/E8/ED57A2DCA9A934D2484F600EBF_1679994090079.jpg?output-format=webp"
    },
    {
        id: 6,
        category: "tofu  ",
        items: "dairyproducts",
        price:"₹350",
        image: "https://image2.jdomni.in/banner/28032023/E0/70/01/B08195302788346FACD6EDAB99_1679994191928.jpg?output-format=webp"
    },
    {
        id: 7,
        category: "shrikhand",
        items: "dairyproducts",
        price:"₹240",
        image: "https://image3.jdomni.in/banner/28032023/F2/9B/C1/FF78D3F52E2B04394626F4AFB2_1679994223088.jpg?output-format=webp"
    },
    {
        id: 8,
        category: "yoghurt",
        items: "dairyproducts",
        price:"₹280",
        image: "https://image2.jdomni.in/banner/28032023/7A/6F/5C/E101AB88F2198026EFE514968C_1679994990302.png?output-format=webp"
    },
    {
        id: 9,
        category: "barfi",
        items: "sweets",
        price:"₹250",
        image: "https://image3.jdomni.in/banner/28032023/40/B4/8B/39A30933675D4495F17D808787_1679988094668.jpeg?output-format=webp"
    },
    {
        id: 10,
        category: "gulab jamun",
        items: "sweets",
        price:"₹195",
        image: "https://image3.jdomni.in/banner/28032023/F5/29/34/AFFF06425470BC3A6C8B15D553_1679988190529.png?output-format=webp"
    },
    {
        id: 11,
        category: "soan papdi",
        items: "sweets",
        price:"₹350",
        image: "https://image2.jdomni.in/banner/28032023/FE/70/5A/E3713404B218EF0C6DF4917F92_1679988650436.jpg?output-format=webp"
    },
    {
        id: 12,
        category: "rasgulla",
        items: "sweets",
        price:"₹510",
        image: "https://image3.jdomni.in/banner/28032023/DE/C0/8F/9427EF62D3E91E31A8FB2C75FC_1679988745345.jpg?output-format=webp"
    },
    {
        id: 13,
        category: "cham cham",
        items: "sweets",
        price:"₹125",
        image: "https://image1.jdomni.in/banner/28032023/63/DB/CD/7D622E57557239754D2218787B_1679988933808.jpg?output-format=webp"
    },
    {
        id: 14,
        category: "rasmalai",
        items: "sweets",
        price:"₹130",
        image: "https://image2.jdomni.in/banner/28032023/49/FB/BF/42D5CB6A67F0D5707E3182683E_1679989045001.jpg?output-format=webp"
    },
    {
        id: 15,
        category: "modak",
        items: "sweets",
        price:"₹165",
        image: "https://image3.jdomni.in/banner/28032023/CF/ED/FA/40132D7B5125B08ED76D233D8B_1679989138739.jpg?output-format=webp"
    },
    {
        id: 16,
        category: "jalebi",
        items: "sweets",
        price:"₹350",
        image: "https://image2.jdomni.in/banner/28032023/8F/A0/D0/80331B23FB31D464C4DE3C0411_1679994050921.jpg?output-format=webp"
    },
    {
        id: 17,
        category: "chitale shrikhand 500gm",
        items: "products",
        price:"₹60",
        image: "https://image1.jdomni.in/product/15/26/8F/Chitale-Shrikhand_1497680697510.png"
    },
    {
        id: 18,
        category: "dry fruits barfi ",
        items: "products",
        price:"₹90",
        image: "https://image1.jdomni.in/product/29082019/69/86/4E/D9351D685EF5070128EC20210B_1567070474724.jpg"
    },
    {
        id: 19,
        category: "sugarfree gulabjamun",
        items: "products",
        price:"₹110",
        image: "https://image1.jdomni.in/product/B7/D4/DA/Gulabjamun_1498042876184.jpg"
    },
    {
        id: 20,
        category: "amul panner fresh 200 gm",
        items: "products",
        price:"₹100",
        image: " https://images.jdmagicbox.com/grocery/amul-paneer-fresh-200-gm-107049177-ko1wh.jpg"
    },
    {

        id: 21,
        category: "soan papdi",
        items: "products",
        price:"₹180",
        image: "https://image1.jdomni.in/product/29082019/60/B9/AC/01BC2766EE2AAD8482F6EA3606_1567070707087.jpg"

    },
    {
        id: 22,
        category: "cream cheese",
        items: "products",
        price:"₹150",
        image: "https://image1.jdomni.in/product/25052018/50/9A/B2/71D780354DEB5B64809834D26F_1527237172015.jpg"

    }


]


let Dairyproducts = document.getElementById("dairy")
function renderitems(items) {
    Dairyproducts.innerHTML = ""
    const filetrData = Data.filter(x => x.items === items)
    filetrData.forEach(y => {
        let newCard = document.createElement("div")
        newCard.innerHTML = `<div class="CARDS" >
    <img src="${y.image}"  width="260"  class="images"/>
    <h2>${y.category}</h2>
    <h3>${y.price}</h3>
    <button class="Adds"><i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Add</button>
    </div>`

        Dairyproducts.append(newCard)
    //     let imageData = document.querySelectorAll(".images")
    // imageData.forEach(m=>{
    //     m.addEventListener("click",()=>{
    //     localStorage.setItem("singleproduct",JSON.stringify(y));
    //     window.location.href="./singleitem.html";
    // })
    // }
    // )
    }
    )

    
    
}

let sweet1 = document.getElementById("sweetshead")
sweet1.addEventListener('click', function () {
    renderitems("sweets")
})

let pro = document.getElementById("PRODUCTS")
pro.addEventListener('click', function () {
    renderitems("products")
})
console.log(Data)


Data.forEach(z => {
    
    let card = document.createElement("div")
    card.innerHTML = `
    <div  class="CARDS" >
    <img src="${z.image}"  width="260"  class="images"/>
    <h2>${z.category}</h2>
    <h3>${z.price}</h3>
    <button class="Adds"><i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Add</button>
    </div>`

    Dairyproducts.append(card)

    card.querySelector(".Adds").addEventListener("click", (e) => {
        e.stopImmediatePropagation(); 
        const allCarts = JSON.parse(localStorage.getItem("cartItems")) || []; 
        allCarts.push(z); 
        localStorage.setItem("cartItems", JSON.stringify(allCarts)); 
       
        alert(" Your Item is  added to cart!");
    });


    card.querySelector(".images").addEventListener("click",()=>{
        localStorage.setItem("singleproduct",JSON.stringify(z))
        window.location.href="../singleitem.html";
    })
   
})



function displayCards(k) {
    Dairyproducts.innerHTML = ""
    k.forEach(M =>                                           //search functionality//
    {
        let NewCards = document.createElement("div")
        NewCards.innerHTML = `
    <img src="${M.image}"  width="260"/>
    <h2>${M.category}</h2>
     <h3>${M.price}</h3>
    <button class="Adds"><i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Add</button>`
        Dairyproducts.append(NewCards)
    })

}
let searchValue = document.getElementById("searchValue")
searchValue.addEventListener("keypress", (e) => {
   e.stopPropagation();
    if (e.key == "Enter") {
        let inputValue = searchValue.value.trim();
        console.log(inputValue)
        console.log("found")
        const searchData =  Data.filter(n => n.category.toLowerCase().trim() === inputValue.toLowerCase())

        console.log(searchData)
        displayCards(searchData)
    }
    else
    {
        console.log("not found")
    }
}
)



































