module.exports = function (sequelize, dataTypes){

    let alias = 'Coment';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        coment: {
            type: dataTypes.STRING
        },
        usersId: {
            type: dataTypes.STRING
        },
        productsId: {
            type: dataTypes.STRING
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
        tableName : "coments",
        timestamps:true,
        underscored: false,
    };

    const Coment = sequelize.define(alias, cols, config);

    Coment.associate = function(models){
        Coment.belongsTo(models.Product, {
            as: "products",
            foreignKey: "productsId"
        })
    }
    Coment.associate = function(models){
        Coment.belongsTo(models.User, {
            as: "user",
            foreignKey: "usersId"
        })
    }

    return Coment;

}