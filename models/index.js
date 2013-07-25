var makeId = function() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
};

var initialSet = [{
			name:"Peter"
		}, {
			name:"Paul"
		}, {
			name:"John"
		}];

var StudentList = function() {
	this.students = {};

	this.add = function (student) {
		var id = makeId();
		this.students[id] = student;
		return id;
	},

	this.remove = function(id) {
		delete this.students[id];
	}

	for(var i in initialSet) {
		this.add(initialSet[i]);
	}
};

console.log('running models/index.js');

exports.studentList = new StudentList();
