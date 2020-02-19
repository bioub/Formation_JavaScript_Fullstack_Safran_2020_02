const contacts = [
  {
    id: 123,
    prenom: 'Bill',
    nom: 'Gates'
  },
  {
    id: 456,
    prenom: 'Steve',
    nom: 'Jobs'
  }
];

const express = require('express');

const app = express();
app.use(express.json())

// GET http://localhost:8080/api/contacts
// reponse en JSON du tableau complet
// status code : 200
app.get('/api/contacts', (req, res) => {
  res.json(contacts);
});

// GET http://localhost:8080/api/contacts/:id
// par exemple http://localhost:8080/api/contacts/123
// reponse en JSON le contact dont l'id est dans l'URL
// status code : 200
// si le contact n'est pas de le tableau : 404
// en JSON {message: 'Not found'}
// Array.prototype.find
app.get('/api/contacts/:id', (req, res) => {
  console.log(Number(req.params.id));

  // res.json
});


// DELETE http://localhost:8080/api/contacts/:id
// par exemple http://localhost:8080/api/contacts/123
// reponse en JSON le contact dont l'id est dans l'URL
// mais aussi le supprimer du tableau
// status code : 200
// si le contact n'est pas de le tableau : 404
// en JSON {message: 'Not found'}
// Array.prototype.findIndex + splice

// POST http://localhost:8080/api/contacts
// en body de la requete du JSON {prenom: 'Mark', nom: 'Zuckerberg'}
// -> générer un id (différent des autres)
// stocker le contact avec id dans le tableau
// répondre en JSON le contact avec son id
// status code : 201
// Array.prototype.push


app.listen(8080, () => {
  console.log(`Server running at http://localhost:8080`);
});
