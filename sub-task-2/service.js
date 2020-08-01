function additon(req, res) {
    var n1 = req.body.num1,
        n2 = req.body.num2,
        sum = parseInt(n1,10) + parseInt(n2,10);
    res.send(n1 + ' plus ' + n2 + ' is equal to ' + sum);
}
var attachService = function (app) {
    app.post('/svc/add', additon);
};
 
exports.attachService = attachService;