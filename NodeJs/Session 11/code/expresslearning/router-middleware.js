var app = express();

var router = express.Router();

router.use(function(req, res, next){
	console.log('Current Time: ' + Date.now());
	next();
});

router.use('/user/:id', function(req, res, next){
	console.log("URL : " + req.originalUrl);
	next();
}, function(req, res, next){
	console.log('Req type: ' + req.method);
});

router.get('/user/:id', function(req, res, next){
	if(req.params.id == 0){
		next('route');
	}else {
		next();
	}
}, function(req, res, next){
	res.render('regular');
	//res.render('special');
});

app.use('/', router);





