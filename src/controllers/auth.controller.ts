import type { Handler } from "elysia";

class Auth {
    /**
     * ### Auth route
     * Sign in to get a token
     *
     * ---
     * @method POST
     * @path /auth/sign-in
     * @param handler
     * @returns
     */
    public signIn(handler: Handler) {
        return handler;
    }

    /**
     * ### Auth route
     * Sign up to create an account
     *
     * ---
     * POST /auth/sign-up
     * @param handler
     * @returns
     */
    public signUp(handler: Handler) {
        return handler;
    }
}
const AuthController = new Auth();

export default AuthController;
