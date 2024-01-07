import type Elysia from "elysia";
import AuthHandler from "../handlers/auth.handler";
import { signInHook, signUpHook } from "../hooks/auth.hook";

const authRoutes = (app: Elysia) => {
    app.group("/auth", (app) => {
        app.get("/sign-in", AuthHandler.signIn, signInHook);
        app.get("/sign-up", AuthHandler.signUp, signUpHook);

        return app;
    });

    return app;
};

export default authRoutes;
