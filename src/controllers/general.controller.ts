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
        return "<html><h1>Welcome to threads api. <a href='/documentation'>Go to documentation</a></h1></html>";
    }
}

const GeneralController = new General();

export default GeneralController;
