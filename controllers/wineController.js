// importa la connessione al database
const connection = require("../connections/connDb");

// importa le funzioni di utilità per gestire gli errori
const { handleFailQuery, handleResourceNotFound } = require("../utils/dbUtils");

// INDEX - ritorna tutti i vini colla loro categoria
const index = (req, res) => {
  // query che prende tutti i prodotti e fa JOIN conlle categorie
  const sql = `
   SELECT p.*, c.category_name
   FROM products p
   JOIN mrk_categories c 
   ON p.category_id = c.id
   `;

  // esegue la query sul database
  connection.query(sql, (err, results) => {
    // se c'è un errore lo manda al client
    if (err) return handleFailQuery(err, res);
    // se va bene manda i risultati al client
    res.json(results);
  });
};

const show = (req, res) => {
  res.json({ message: "Dettaglio vino" });
};

const store = (req, res) => {
  res.json({ message: "Vino aggiunto" });
};

module.exports = { index, show, store };
