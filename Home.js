// Keep your original navigation code
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
        price: "₹500",
        image: "https://image3.jdomni.in/banner/28032023/7C/83/30/0A601DAC0A2B8170EB6B3F84C6_1679994838944.jpg?output-format=webp"
    },
    {
        id: 2,
        category: "cheese",
        items: "dairyproducts",
        price: "₹190",
        image: "https://image3.jdomni.in/banner/28032023/BA/2E/6F/3BE81CACB23F5B7D336402B21C_1679994631570.jpg?output-format=webp"
    },
    {
        id: 3,
        category: "buttermilk",
        items: "dairyproducts",
        price: "₹70",
        image: "https://image2.jdomni.in/banner/28032023/29/04/13/3644BF1D1AF94C3A51DE99C21C_1679994347293.jpg?output-format=webp"
    },
    {
        id: 4,
        category: "butter",
        items: "dairyproducts",
        price: "₹150",
        image: "https://image3.jdomni.in/banner/28032023/33/DB/6A/AB6A17879ED27417781F11DCFB_1679994590414.png?output-format=webp"
    },
    {
        id: 5,
        category: "panner",
        items: "dairyproducts",
        price: "₹80",
        image: "https://image1.jdomni.in/banner/28032023/32/BD/E8/ED57A2DCA9A934D2484F600EBF_1679994090079.jpg?output-format=webp"
    },
    {
        id: 6,
        category: "tofu  ",
        items: "dairyproducts",
        price: "₹350",
        image: "https://image2.jdomni.in/banner/28032023/E0/70/01/B08195302788346FACD6EDAB99_1679994191928.jpg?output-format=webp"
    },
    {
        id: 7,
        category: "shrikhand",
        items: "dairyproducts",
        price: "₹240",
        image: "https://image3.jdomni.in/banner/28032023/F2/9B/C1/FF78D3F52E2B04394626F4AFB2_1679994223088.jpg?output-format=webp"
    },
    {
        id: 8,
        category: "yoghurt",
        items: "dairyproducts",
        price: "₹280",
        image: "https://image2.jdomni.in/banner/28032023/7A/6F/5C/E101AB88F2198026EFE514968C_1679994990302.png?output-format=webp"
    },
    {
        id: 9,
        category: "barfi",
        items: "sweets",
        price: "₹250",
        image: "https://image3.jdomni.in/banner/28032023/40/B4/8B/39A30933675D4495F17D808787_1679988094668.jpeg?output-format=webp"
    },
    {
        id: 10,
        category: "gulab jamun",
        items: "sweets",
        price: "₹195",
        image: "https://image3.jdomni.in/banner/28032023/F5/29/34/AFFF06425470BC3A6C8B15D553_1679988190529.png?output-format=webp"
    },
    {
        id: 11,
        category: "soan papdi",
        items: "sweets",
        price: "₹350",
        image: "https://image2.jdomni.in/banner/28032023/FE/70/5A/E3713404B218EF0C6DF4917F92_1679988650436.jpg?output-format=webp"
    },
    {
        id: 12,
        category: "rasgulla",
        items: "sweets",
        price: "₹510",
        image: "https://image3.jdomni.in/banner/28032023/DE/C0/8F/9427EF62D3E91E31A8FB2C75FC_1679988745345.jpg?output-format=webp"
    },
    {
        id: 13,
        category: "cham cham",
        items: "sweets",
        price: "₹125",
        image: "https://image1.jdomni.in/banner/28032023/63/DB/CD/7D622E57557239754D2218787B_1679988933808.jpg?output-format=webp"
    },
    {
        id: 14,
        category: "rasmalai",
        items: "sweets",
        price: "₹130",
        image: "https://image2.jdomni.in/banner/28032023/49/FB/BF/42D5CB6A67F0D5707E3182683E_1679989045001.jpg?output-format=webp"
    },
    {
        id: 15,
        category: "modak",
        items: "sweets",
        price: "₹165",
        image: "https://image3.jdomni.in/banner/28032023/CF/ED/FA/40132D7B5125B08ED76D233D8B_1679989138739.jpg?output-format=webp"
    },
    {
        id: 16,
        category: "jalebi",
        items: "sweets",
        price: "₹350",
        image: "https://image2.jdomni.in/banner/28032023/8F/A0/D0/80331B23FB31D464C4DE3C0411_1679994050921.jpg?output-format=webp"
    },
    {
        id: 17,
        category: "chitale shrikhand",
        items: "products",
        price: "₹60",
        image: "https://image1.jdomni.in/product/15/26/8F/Chitale-Shrikhand_1497680697510.png"
    },
    {
        id: 18,
        category: "dry fruits barfi ",
        items: "products",
        price: "₹90",
        image: "https://image1.jdomni.in/product/29082019/69/86/4E/D9351D685EF5070128EC20210B_1567070474724.jpg"
    },
    {
        id: 19,
        category: "sugarfree gulabjamun",
        items: "products",
        price: "₹110",
        image: "https://image1.jdomni.in/product/B7/D4/DA/Gulabjamun_1498042876184.jpg"
    },
    {
        id: 20,
        category: "amul panner",
        items: "products",
        price: "₹100",
        image: "https://images.jdmagicbox.com/grocery/amul-paneer-fresh-200-gm-107049177-ko1wh.jpg"
    },
    {
        id: 21,
        category: "soan papdi",
        items: "products",
        price: "₹180",
        image: "https://image1.jdomni.in/product/29082019/60/B9/AC/01BC2766EE2AAD8482F6EA3606_1567070707087.jpg"
    },
    {
        id: 22,
        category: "cream cheese",
        items: "products",
        price: "₹150",
        image: "https://image1.jdomni.in/product/25052018/50/9A/B2/71D780354DEB5B64809834D26F_1527237172015.jpg"
    },
    {
        id: 23,
        category: "Bhadusha",
        items: "products",
        price: "₹130",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Xk9s_Vrs1uQmDNTL8gbYOhjDuM1vg9e7aA&s"
    },
    {
        id: 24,
        category: "Rasagulla",
        items: "products",
        price: "₹160",
        image: "https://m.media-amazon.com/images/I/61xZAGE0WEL.jpg"
    }
];

// Get reference to dairy products container
let Dairyproducts = document.getElementById("dairy");

// FIX 1: Make sure image displays properly by setting fixed height and ensuring the image loads
function renderitems(items) {
    if (!Dairyproducts) {
        console.error("Container with ID 'dairy' not found");
        return;
    }
    
    Dairyproducts.innerHTML = "";
    const filetrData = Data.filter(x => x.items === items);
    
    if (filetrData.length === 0) {
        Dairyproducts.innerHTML = "<div class='not-found'>No products found in this category.</div>";
        return;
    }
    
    filetrData.forEach(y => {
        let newCard = document.createElement("div");
        newCard.className = "CARDS";
        
        // FIX 2: Use onError handler for images that fail to load
        newCard.innerHTML = `
            <div class="image-container">
                <img src="${y.image}" alt="${y.category}" class="images" 
                     onerror="this.onerror=null; this.src='https://via.placeholder.com/260x180?text=Image+Not+Found';" />
            </div>
            <h2>${y.category}</h2>
            <h3>${y.price}</h3>
            <button class="Adds"><i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Add</button>
        `;

        Dairyproducts.appendChild(newCard);
        
        // Add event listeners
        newCard.querySelector(".Adds").addEventListener("click", (e) => {
            e.stopPropagation();
            const allCarts = JSON.parse(localStorage.getItem("cartItems")) || [];
            allCarts.push(y);
            localStorage.setItem("cartItems", JSON.stringify(allCarts));
            updateCartCount();
            alert("Your Item is added to cart!");
        });

        newCard.querySelector(".images").addEventListener("click", () => {
            localStorage.setItem("singleproduct", JSON.stringify(y));
            window.location.href = "../singleitem.html";
        });
    });
}

// Your category navigation
let sweet1 = document.getElementById("sweetshead");
if (sweet1) {
    sweet1.addEventListener('click', function() {
        renderitems("sweets");
    });
}

let pro = document.getElementById("PRODUCTS");
if (pro) {
    pro.addEventListener('click', function() {
        renderitems("products");
    });
}

// Add event listener for dairy products if it exists
let dairy = document.getElementById("dairyhead");
if (dairy) {
    dairy.addEventListener('click', function() {
        renderitems("dairyproducts");
    });
}

// Add event listener for all products if it exists
let allProducts = document.getElementById("allProducts");
if (allProducts) {
    allProducts.addEventListener('click', function() {
        renderAllProducts();
    });
}

// Cart count functionality
let cartCount = 0;
function updateCartCount() {
    cartCount++;
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

// FIX 3: Initialize cart count from localStorage
function initializeCartCount() {
    const allCarts = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartCount = allCarts.length;
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

// Call this function on page load
window.addEventListener('DOMContentLoaded', function() {
    initializeCartCount();
    // Initial loading of all products (if container exists)
    if (Dairyproducts) {
        renderAllProducts();
    }
});

// Function to render all products
function renderAllProducts() {
    if (!Dairyproducts) {
        console.error("Container with ID 'dairy' not found");
        return;
    }
    
    Dairyproducts.innerHTML = "";
    
    Data.forEach(z => {
        let card = document.createElement("div");
        card.className = "CARDS";
        
        // FIX 4: Use the same improved image handling as above
        card.innerHTML = `
            <div class="image-container">
                <img src="${z.image}" alt="${z.category}" class="images" 
                     onerror="this.onerror=null; this.src='https://via.placeholder.com/260x180?text=Image+Not+Found';" />
            </div>
            <h2>${z.category}</h2>
            <h3>${z.price}</h3>
            <button class="Adds"><i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Add</button>
        `;

        Dairyproducts.appendChild(card);

        card.querySelector(".Adds").addEventListener("click", (e) => {
            e.stopPropagation();
            const allCarts = JSON.parse(localStorage.getItem("cartItems")) || [];
            allCarts.push(z);
            localStorage.setItem("cartItems", JSON.stringify(allCarts));
            updateCartCount();
            alert("Your Item is added to cart!");
        });

        card.querySelector(".images").addEventListener("click", () => {
            localStorage.setItem("singleproduct", JSON.stringify(z));
            window.location.href = "../singleitem.html";
        });
    });
}

// Fix search function
function displayCards(k) {
    if (!Dairyproducts) {
        console.error("Container with ID 'dairy' not found");
        return;
    }
    
    Dairyproducts.innerHTML = "";
    
    if (k.length === 0) {
        Dairyproducts.innerHTML = "<div class='not-found'>No products found matching your search.</div>";
        return;
    }
    
    k.forEach(M => {
        let NewCards = document.createElement("div");
        NewCards.className = "CARDS";
        
        // FIX 5: Use the same improved image handling here too
        NewCards.innerHTML = `
            <div class="image-container">
                <img src="${M.image}" alt="${M.category}" class="images" 
                     onerror="this.onerror=null; this.src='https://via.placeholder.com/260x180?text=Image+Not+Found';" />
            </div>
            <h2>${M.category}</h2>
            <h3>${M.price}</h3>
            <button class="Adds"><i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Add</button>
        `;
        
        Dairyproducts.appendChild(NewCards);
        
        // Add event listeners to search results too
        NewCards.querySelector(".Adds").addEventListener("click", (e) => {
            e.stopPropagation();
            const allCarts = JSON.parse(localStorage.getItem("cartItems")) || [];
            allCarts.push(M);
            localStorage.setItem("cartItems", JSON.stringify(allCarts));
            updateCartCount();
            alert("Your Item is added to cart!");
        });
        
        NewCards.querySelector(".images").addEventListener("click", () => {
            localStorage.setItem("singleproduct", JSON.stringify(M));
            window.location.href = "../singleitem.html";
        });
    });
}

// Search functionality
let searchValue = document.getElementById("searchValue");
if (searchValue) {
    searchValue.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevent form submission if inside a form
            let inputValue = searchValue.value.trim().toLowerCase();
            
            if (inputValue === "") {
                renderAllProducts();
                return;
            }
            
            // Use includes() for better search results
            const searchData = Data.filter(n => 
                n.category.toLowerCase().includes(inputValue)
            );
            
            console.log("Search results:", searchData);
            displayCards(searchData);
        }
    });
}

// Mobile Menu Toggle
let mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });
}

// Scroll Header Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});
// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create hamburger menu element
    const hamburgerMenu = document.createElement('div');
    hamburgerMenu.className = 'hamburger-menu';
    hamburgerMenu.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    // Find the header part where to insert the hamburger
    const headerPartTwo = document.querySelector('.headerpart_two-2');
    if (headerPartTwo) {
        headerPartTwo.appendChild(hamburgerMenu);
    }
    
    // Find the navigation element
    const navigation = document.querySelector('.headerpart_two-3');
    
    // Toggle menu on hamburger click
    hamburgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        if (navigation) {
            navigation.classList.toggle('active');
        }
    });
    
    // Close menu when clicking on a menu item or outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navigation && navigation.contains(event.target);
        const isClickOnHamburger = hamburgerMenu.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnHamburger && navigation && navigation.classList.contains('active')) {
            navigation.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });
    
    // Close menu when clicking on navigation links
    const navLinks = document.querySelectorAll('.headinks a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navigation) {
                navigation.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            // Reset menu state when returning to desktop size
            if (navigation) {
                navigation.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            }
        }
    });
});