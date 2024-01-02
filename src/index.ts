import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import routes from "./routes/index.route";

const app = new Elysia();
const PORT = process.env.PORT || 8080;

// allow return html
app.use(html());

// all routes
app.use(routes);

app.listen(PORT, () => {
    console.log(`🦊 Elysia is running at ${app.server?.hostname}:${PORT}`);
});
