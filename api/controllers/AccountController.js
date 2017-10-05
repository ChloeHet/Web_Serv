module.exports = {
    index: function(req, res) {
        var data = {
            name: 'test',
            address: 'une autre data'
        };
        return res.view('account', data);
    }
}