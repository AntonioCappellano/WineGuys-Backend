const index = (req, res) => {
    res.json({ message: "Lista vini" });
};

const show = (req, res) => {
    res.json({ message: "Dettaglio vino" });
};

const store = (req, res) => {
    res.json({ message: "Vino aggiunto" });
};


module.exports = { index, show, store };