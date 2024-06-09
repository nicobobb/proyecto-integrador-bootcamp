import productsRouter from "./products.routes.js";
import imagesRouter from "./images.routes.js";
import cartRouter from "./cart.routes.js";
import checkoutRouter from "./checkout.routes.js";

function routerApi(app) {
    app.use("/api/products", productsRouter);
    app.use("/images", imagesRouter);
    app.use("/api/cart", cartRouter);
    app.use("/api/checkout", checkoutRouter);
}

export default routerApi;
