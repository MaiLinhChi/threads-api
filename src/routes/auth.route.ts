import type Elysia from "elysia";
import AuthController from "../controllers/auth.controller";

const authRoutes = (app: Elysia) => {
    app.group("/auth", (app) => {
        app.get("/sign-in", AuthController.signIn);
        app.get("/sign-up", AuthController.signUp);

        return app;
    });

    return app;
};

export default authRoutes;
