import type Elysia from "elysia";
import authRoutes from "./auth.route";
import generalRoutes from "./general.route";

const routes = (app: Elysia) => {
    app.use(generalRoutes);
    app.use(authRoutes);
    app.onError(({ code }) => {
        if (code === "NOT_FOUND") return "Route not found :(";
    });

    return app;
};

export default routes;
