var express = require('express');
var router = express.Router();




router.get('/', function(req, res, next) {

	var contenido = '';
	contenido +'<form id="" method="post" >';
	contenido +'<input type="text" id="" name="" class="form-control" value="casa">';
	contenido +'</form>';



	res.render('con_desempenho', { title: 'Hey', message: contenido});

	});

module.exports = router;
