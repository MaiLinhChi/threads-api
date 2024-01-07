class General {
    /**
     * ### General route
     * Home route has link to documentation
     *
     * ---
     * @method GET
     * @path /
     * @returns html
     */
    public home() {
        return "<html><h1>Welcome to threads api. <a href='/swagger'>Go to documentation</a></h1></html>";
    }
}

const GeneralHandler = new General();

export default GeneralHandler;
