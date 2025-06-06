module.exports = function (sequelize, dataTypes){

    let alias = 'User';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        username: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        contrasennia: {
            type: dataTypes.STRING
        },
        birthdate: {
            type: dataTypes.DATE
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        },
        
    }

    let config = {
        tableName : "users",
        timestamps:true,
        underscored: false,
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.hasMany(models.Product, {
            as: "products",
            foreignKey: "usersId"
        })
    }
    User.associate = function(models){
        User.hasMany(models.Coment, {
            as: "coments",
            foreignKey: "usersId"
        })
    }

    return User;

}