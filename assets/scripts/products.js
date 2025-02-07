const products = [
    {
        name: "At The Beach",
        type: "Daily Nourishing Body Lotion",
        originalPrice: 1000,
        salePrice: 545,
        image: "../assets/imgs/products/product_5.jpeg",
        ratings: 21,
        trending: true
    },
    {
        name: "Kitchen Lemon",
        type: "Fine Fragrance Mist",
        originalPrice: 1200,
        salePrice: 599,
        image: "../assets/imgs/products/product_2.jpeg",
        ratings: null,
        trending: true
    },
    {
        name: "Gingham Love",
        type: "Shower Gel",
        originalPrice: 895,
        salePrice: 545,
        image: "../assets/imgs/products/product_3.jfif",
        ratings: 223,
        trending: true
    },
    {
        name: "IN THE STARS",
        type: "Daily Nourishing Body Lotion",
        originalPrice: 1500,
        salePrice: 750,
        image: "../assets/imgs/products/product_4.jpeg",
        ratings: 13,
        trending: true
    }
];

function generateProductGrid() {
    const productGrid = document.getElementById('productGrid');
    
    for (let i = 0; i < 10; i++) {
        products.forEach((product, index) => {
            const productCol = document.createElement('div');
            productCol.className = 'col-md-3 mb-4';
            
            productCol.innerHTML = `
                <div class="card product-card">
                    ${product.trending ? '<span class="badge trending-badge position-absolute top-0 start-0 m-2">Trending!</span>' : ''}
                    <div class="heart-container">
                        <input type="checkbox" class="checkbox" id="heart-${i}-${index}">
                        <div class="svg-container">
                            <svg viewBox="0 0 24 24" class="svg-outline" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"/>
                            </svg>
                            <svg viewBox="0 0 24 24" class="svg-filled" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"/>
                            </svg>
                            <svg viewBox="0 0 24 24" class="svg-celebrate" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3C19.58,3,22,5.42,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35z"/>
                            </svg>
                        </div>
                    </div>
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text text-muted">${product.type}</p>
                        <div class="mb-2">
                            <span class="price-original">EGP ${product.originalPrice}</span>
                            <span class="price-sale">EGP ${product.salePrice}</span>
                        </div>
                        <a href="#" class="promotion-link">5 for EGP 2295</a>
                        <div class="star-rating mb-3">
                            ★★★★★ ${product.ratings ? `(${product.ratings})` : ''}
                        </div>
                        <button class="add-to-bag button">ADD TO BAG</button>
                    </div>
                </div>
            `;
            
            productGrid.appendChild(productCol);
        });
    }
}

document.addEventListener('DOMContentLoaded', generateProductGrid);