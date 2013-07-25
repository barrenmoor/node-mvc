var models = require('../models');
var studentList = models.studentList;

app.get('/list', function(request, response) {
	console.log(studentList.students);
	response.render('list', {list : studentList});
});

app.del('/list', function(request, response) {
	var ids = request.body.ids;
	for(var id in ids) {
		console.log("looping id: " + id);
		studentList.remove(ids[id]);
	}

	response.writeHead(200);
	response.end('received messages by node js');
});
