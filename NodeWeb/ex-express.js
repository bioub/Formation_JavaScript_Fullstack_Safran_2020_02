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
// app.use(express.json())

app.use((req, res, next) => {
  console.log(req.method + ' ' + req.url);
  next();
})

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
  const id = Number(req.params.id);
  const contact = contacts.find((c) => c.id === id);

  if (!contact) {
    // res.statusCode = 404;
    // return res.json({
    //   message: 'Contact not found',
    // });
    return next();
  }

  res.json(contact);
});


// DELETE http://localhost:8080/api/contacts/:id
// par exemple http://localhost:8080/api/contacts/123
// reponse en JSON le contact dont l'id est dans l'URL
// mais aussi le supprimer du tableau
// status code : 200
// si le contact n'est pas de le tableau : 404
// en JSON {message: 'Not found'}
// Array.prototype.findIndex + splice
app.delete('/api/contacts/:id', (req, res) => {
  const id = Number(req.params.id);
  const contact = contacts.find((c) => c.id === id);

  if (!contact) {
    // res.statusCode = 404;
    // return res.json({
    //   message: 'Contact not found',
    // });

    return next();
  }

  const i = contacts.indexOf(contact);
  contacts.splice(i, 1);

  res.json(contact);
});

// POST http://localhost:8080/api/contacts
// en body de la requete du JSON {prenom: 'Mark', nom: 'Zuckerberg'}
// -> générer un id (différent des autres)
// stocker le contact avec id dans le tableau
// répondre en JSON le contact avec son id
// status code : 201
// Array.prototype.push

// POST /api/contacts HTTP/1.1
// Host: localhost:8080
// Content-type: application/json
// {"prenom": "Mark", "nom": "Zuckerberg"}
app.post('/api/contacts', express.json(), (req, res) => {
  const contact = req.body;
  contact.id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

  contacts.push(contact);

  res.statusCode = 201;
  return res.json(contact);
})

// Middleware 404
app.use((req, res, next) => {
  res.statusCode = 404;
  res.json({
    message: 'Not Found',
  })
})

app.listen(8080, () => {
  console.log(`Server running at http://localhost:8080`);
});
