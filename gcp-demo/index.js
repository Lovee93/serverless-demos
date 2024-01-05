const functions = require('@google-cloud/functions-framework');

// Register an HTTP function with the Functions Framework that will be executed
// when you make an HTTP request to the deployed function's endpoint.
functions.http('helloYou', (req, res) => {
    // Extract the name from the request body or query parameter.
    let name = req.body.name || req.query.name || 'There';
    res.send('Hello ' + name + '!');
});