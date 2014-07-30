var db = require('../db-config.js');

exports.list = function(callback) {
    db.User.find({}, function(error, users) {
        if(error) {
            callback({ error: "Não foi possível recuperar os usuários" });
        } else {
            callback(users);
        }
    });
};

exports.user = function(id, callback) {
    db.User.findById(id, function(error, user) {
        if(error) {
            callback({ error: "Não foi possível recuperar o usuário" });
        } else {
            callback(user);
        }
    });
};


exports.save = function(userData, callback) {
    new db.User(userData).save(function(error, user) {
        if(error) {
            callback({ error: "Não foi possível salvar o usuário"});
        } else {
            callback(user);
        }
    });
};

exports.update = function(id, userData, callback) {
    db.User.findById(id, function(error, user) {

        if(userData.fullName) {
            user.fullName = userData.fullName;
        }

        if(userData.email) {
            user.email = userData.email;
        }

        if(userData.password) {
            user.password = userData.password;
        }

        user.save(function(error, user) {
            if(error) {
                callback({ error: "Não foi possível atualizar o usuário"});
            } else {
                callback(user);
            }
        });
    }); 
};

exports.delete = function(id, callback) {
    db.User.findById(id, function(error, user) {
        if(error) {
            callback({ error: "Não foi possível recuperar o usuário" });
        } else {
            user.remove(function(error) {
                if(!error) {
                    callback({ response: "Usuário excluído com sucesso!" });        
                }
            });
            
        }
    }); 
};