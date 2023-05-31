const express = require('express');
const app = express();
//bawaan datastore
const { Datastore } = require('@google-cloud/datastore');
const entity = {
    key: datastore.key('Kind'),
    data: { property: 'value' },
  };
const port = 80;
const { Datastore } = require('@google-cloud/datastore');

const datastore = new Datastore({
  projectId: '<ngirit-project>',
  credentials: require('./credentials.json'),
});


app.get('/', (req, res) => {
  res.send('success!');
});

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});

//save objek ke datastore
datastore.save(entity)
  .then(() => {
    console.log('Entity saved successfully.');
  })
  .catch((err) => {
    console.error('Error saving entity:', err);
  });

//membuat rute untuk mengambil dari datastore
app.get('/entities', (req, res) => {
    const query = datastore.createQuery('Kind');
  
    datastore.runQuery(query)
      .then(([entities]) => {
        res.json(entities);
      })
      .catch((err) => {
        console.error('Error retrieving entities:', err);
        res.sendStatus(500);
      });
});