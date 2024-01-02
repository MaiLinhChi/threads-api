import type Elysia from "elysia";
import generalController from "../controllers/general.controller";

const generalRoutes = (app: Elysia) => {
    app.get("/", generalController.home);

    return app;
};

export default generalRoutes;
