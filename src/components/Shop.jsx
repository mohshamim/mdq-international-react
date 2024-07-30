import products from "../products"; // Adjust the import path as necessary
import h_product01 from "../assets/shop/h_product01.jpg";

function Shop() {
  return (
    <section
      className="home-product-area h-product-bg"
      data-background="img/bg/h_product_bg.jpg"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center mb-50">
              <h6 className="sub-title">WHAT WE DO</h6>
              <h2 className="title">
                <span>Welcome to</span> Organic Farming
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="product-menu">
              <button className="active" data-filter="*">
                All Products
              </button>
              <button className="" data-filter=".cat-one">
                Organic
              </button>
              <button className="" data-filter=".cat-two">
                Halal Product
              </button>
              <button className="" data-filter=".cat-three">
                Accessories
              </button>
            </div>
          </div>
        </div>
        <div className="row h-product-active">
          {/* Iterate over the products array and render a product item for each product */}
          {products.map((product) => (
            <div
              key={product.id} // Unique key for efficient rendering
              className={`col-xl-3 col-lg-4 col-sm-6`}
            >
              <div className="h-product-item">
                <div className="h-product-thumb">
                  <a href="#">
                    <img src={h_product01} alt={product.name} />{" "}
                    {/* Product image */}
                  </a>
                </div>
                <div className="h-product-content">
                  <div className="shop-item-rating">
                    {/* You can add rating stars here */}
                  </div>
                  <h5>
                    <a href="#">{product.name}</a> {/* Product name */}
                  </h5>
                  <span>
                    Category : <a href="#">{product.category}</a>{" "}
                    {/* Product category */}
                  </span>
                </div>
                <div className="h-product-action">
                  <ul>
                    <li className="price">
                      Price : <span>${product.price.toFixed(2)}</span>{" "}
                      {/* Formatted price */}
                    </li>
                    <li className="hp-cart">
                      <a href="#">
                        <i className="fas fa-shopping-basket"></i>{" "}
                        {/* Add to cart icon */}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;
