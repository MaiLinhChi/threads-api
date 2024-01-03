import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import routes from "./routes/index.route";
import swagger from "@elysiajs/swagger";

const app = new Elysia();
const PORT = process.env.PORT || 8080;

// allow return html
app.use(html());

// all routes
app.use(routes);

// apply swagger
app.use(
    swagger({
        path: "/documentation",
        documentation: {
            info: {
                title: "Welcome to Threads api",
                version: "1.0.0",
            },
        },
    }),
);

app.listen(PORT, () => {
    console.log(`🦊 Elysia is running at ${app.server?.hostname}:${PORT}`);
});
