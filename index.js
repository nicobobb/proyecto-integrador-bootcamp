import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routerApi from "./src/routes/index.js";
import { dbConection } from "./src/database/dbConection.js";

const app = express();

dotenv.config();

const appServer = async () => {
    await dbConection();

    app.use(cors());
    app.use(express.json());
    app.use("/public", express.static(`./temp/imgs`));
    routerApi(app);

    app.listen(process.env.PORT, () =>
        console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
    );
};

appServer();
