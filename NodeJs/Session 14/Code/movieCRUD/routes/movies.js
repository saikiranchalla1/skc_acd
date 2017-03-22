var Movie = require('../models/movie');

var express = require('express');

var router = express.Router();

router.route('/movies')
	.get(function(req, res){
		Movie.find(function(err, movies){
			if(err){
				res.send(err);
			}else{
				res.json(movies);
			}

		})
	})
	.post(function(req, res){
		var movie = new Movie(req.body);
		movie.save(function(err){
			if(err){
				res.send(err);
			}else{
				res.send({
					message : "Movie Added Successfully!!"
				});
			}
		})

	})


router.route('/movies/:id')
	.put(function(req, res){
		Movie.findOne({
			_id : req.params.id
		}, function(err, movie){
			if(err){
				res.send(err);
			}else{
				for(prop in req.body){
					movie[prop] = req.body[prop];
				}

				movie.save(function(err){
					if(err){
						res.send(err)
					}else{
						res.json({
							message : "Movie Updated"
						})
					}
				})
			}
		})
	})

	.get(function(req, res){
		Movie.findOne({
			_id : req.params.id
		}, function(err, movie){
			if(err)
				res.send(err);
			res.json(movie);
		})
	})


	.delete(function(req, res){
		Movie.remove({
			_id : req.params.id
		}, function(err, movie){
			if(err)
				res.send(err);
			res.json({
				message : " Movie Deleted"
			});
		});
	});


module.exports = router;






