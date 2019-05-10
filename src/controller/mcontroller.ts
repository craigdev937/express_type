// Connection to the Database/Model.

export const home = async (req, res, next) => {
    await res.render("index", { title: "TypeScript" });
};

