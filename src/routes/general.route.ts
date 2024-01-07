import type Elysia from "elysia";
import GeneralHandler from "../handlers/general.handler";
import { homeHook } from "../hooks/general.hook";

const generalRoutes = (app: Elysia) => {
    app.get("/", GeneralHandler.home, homeHook);

    return app;
};

export default generalRoutes;
