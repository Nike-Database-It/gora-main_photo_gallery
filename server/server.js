require('newrelic');

const express = require('express');

const parser = require('body-parser');
const morgan = require('morgan');
const compression = require('compression');
const path = require('path');

//const Shoe = require('../db/Shoe.js');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use(parser.json());
app.use(morgan('dev'));
app.use(compression());

const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  database: 'nike',
  host: 'ec2-54-219-162-194.us-west-1.compute.amazonaws.com',
  port: "5432",
})

client.connect();

// SERVER METHODS //
app.get('/:shoeID/images', ({ params }, res) => {
  const shoeID = params.shoeID.slice(1);
  const query = {
  	text: 'SELECT * FROM image WHERE shoeID = $1',
  	values: [shoeID],
  };

  console.log(shoeID);
  client.query(query)
  	.then((resp) => {
  		// console.log(resp.rows);
  		res.send(resp.rows);
  	})
  	.catch((err) => {
  		console.log(err);
  	})
});

app.post('/api/shoes/:shoeID/images', (req, res) => {
	const id = req.params.shoeID;
	// const shMETHODS //

	let imageUrl = req.body;

	// Shoe.update(
	//     { shoeID }, 
	//     {$push: { imageUrls: imageUrl }},
	//     (err, result) => {
	//     	if (err) throw err;
	//     	res.end();
 //  		}
	// );
});

app.get('/api/shoes/:shoeID/images/:imageID', ({ params }, res) => {
	const shoeID = params.shoeID.substring(1, id.length);
	const imageID = params.imageID;

//	Shoe.find({ shoeID.imageUrls : { imageID } }, (err, result) => {
		//if (err) throw err;
		// res.end();
//	});
});

app.put('/api/shoes/:shoeID/images/:imageID', ({ params }, res) => {
	const shoeID = params.shoeID.substring(1, id.length);
	const imageID = params.imageID;

	let imageUrl = req.body;

	// Shoe.findOneAndUpdate({ shoeID, shoeID.imageUrls : imageID }, { imageUrl }, (err, result) => {
	// 	if (err) throw err;
	// 	res.end();
	// })
});

app.delete('/api/shoes/:shoeID/images/:imageID', ({ params }, res) => {
	const shoeID = params.shoeID.substring(1, id.length);
	const imageID = params.imageID;

	// Shoe.deleteOne({ shoeID, shoeID.imageUrls : imageID }, (err, result) => {
	// 	if (err) throw err;
	// 	res.end();
	// })
})

// APP LISTENING PROTOCOL
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`>>>>> Express server listening on port ${PORT}...`);
});
