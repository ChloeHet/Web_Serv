module.exports = {
    ma_methode: function(reg, res) {
        return res.view('homepage');
    },

    find: function(rep, res){
        res.json({user: 'toto'});
    },

    find: function(rep,res){
        Address.find().exec(function(err, records){
            return res.json(records);
        });
    },

    find: function(rep,res) {
        var where = {
            street: 'test'
        };
        Address.find(where).exec(function(err,records){
            return res.json(records);
        });
    }
};