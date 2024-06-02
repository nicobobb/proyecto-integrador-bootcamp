import productsRouter from "./products.routes.js";
import imagesRouter from "./images.routes.js";

function routerApi(app) {
    app.use("/api/products", productsRouter);
    app.use("/images", imagesRouter);
}

export default routerApi;
