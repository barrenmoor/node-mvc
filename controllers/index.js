app.get('/about', function(request, response) {
    // just render the view called 'about'
    // this requires us to have a file called 'about.jade' in our 'views' folder we defined
    response.render('about');
});
