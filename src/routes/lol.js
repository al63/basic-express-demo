exports.route = function(request, response) {
    var arbitraryid = request.params.arbitraryid;

    // Let's pass id to the template
    response.render('lol', {'id': arbitraryid} );
}
