import express from "express";
import hbs from "express-handlebars";
import bodyParser from "body-parser";
import path from "path";
import mroute from "./routes/mroute";

const main = async () => {
    const app = await express();

    app.set("view engine", ".hbs");
    app.set('views', path.join(__dirname, "../src/views"));
    app.engine(".hbs", hbs({
        defaultLayout: "main",
        extname: ".hbs",
        // layoutsDir: path.join(__dirname + "../src/views/layouts/"),
        // partialsDir: path.join(__dirname + "../src/views/partials/")
    }));
    
    app.use(express.static(path.join(__dirname, "../src/public")));
    app.use((bodyParser.urlencoded({ extended: false })));
    await app.use(bodyParser.json());

    await app.use("/", mroute);

    const port = process.env.PORT || 9000;
    await app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        console.log(`Press Ctrl + C to quit.`);
    })
};

main();

