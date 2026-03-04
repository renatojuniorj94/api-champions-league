import express, { json } from "express";
import router from "./routes";
import cors from "cors";

function createApp() {
    const app = express();

    app.use(json());
    app.use("/api", router);

    const corsOptions = {
        origin: ['http://renatojuniordev.com', 'http://gov.br'],
        methods: ["GET", "UPDATE"]
    };
    app.use(cors(corsOptions));

    return app
};

export default createApp;