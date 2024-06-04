const createVegetableItemTemplate = (vegetable) => `
  <div class="vegetable-item">
    <div class="vegetable-item__header">
      <img class="vegetable-item__header__image" alt="${vegetable.name}" src="${vegetable.image}">
      <div class="vegetable-item__content__store">${vegetable.category}</div>
      <div class="vegetable-item__header__rating">
        <p>⭐️<span class="vegetable-item__header__rating__score">${vegetable.rate}</span></p>
      </div>
    </div>
    <div class="vegetable-item__content">
      <h3><a href="#/detail/${vegetable.idProduct}">${vegetable.name}</a></h3>
      <p class="vegetable-item__content__description">${vegetable.description}</p>
    </div>
  </div>
`;

const createProductDetailTemplate = (product) => `
  <div class="container">
    <section class="product-detail">
      <div class="farmer-info">
        <div class="farmer-image-container">
          <div class="farmer-image" style="background-image: url('${product.image}')"></div>
          <button class="check-store-button">Cek Toko</button>
        </div>
        <div class="farmer-details">
          <h2>Detail</h2>
          <p class="farmer-name">${product.name}</p>
          <p class="farmer-location">${product.type}</p>
          <div class="organic-level">
            <h3>Tingkat Keorganisasian</h3>
            <p class="product-category">${product.category}</p>
            <p class="product-desc">${product.description}</p>
          </div>
        </div>
      </div>
      <div class="product-info">
        <h2>${product.name}</h2>
        <div class="price">
          <span class="current-price">${product.price}</span> / 1 kg
        </div>
        <div class="rating">
          <span class="star">★</span>
          <span class="rating-value">${product.rate}</span>
          <span class="review-count">(20)</span>
        </div>
        <button class="buy-button">Beli</button>
        <button class="share-button">Share</button>
      </div>
    </section>
    <section class="related-products">
      <h3>Sering dibeli bersama</h3>
      <div class="related-product-list">
        <div class="related-product-item"></div>
        <div class="related-product-item"></div>
        <div class="related-product-item"></div>
      </div>
    </section>
  </div>
`;

export {
  createVegetableItemTemplate,
  createProductDetailTemplate,
};
