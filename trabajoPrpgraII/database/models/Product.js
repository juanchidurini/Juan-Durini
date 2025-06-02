module.exports = function (sequelize, dataTypes){

    let alias = 'Product';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        image: {
            type: dataTypes.STRING
        },
        productName: {
            type: dataTypes.STRING
        },
        usersId: {
            type: dataTypes.STRING
        },
        descripcion: {
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
        tableName : "products",
        timestamps:true,
        underscored: false,
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsTo(models.User, {
            as: "user",
            foreignKey: "usersId"
        })
    }
    Product.associate = function(models){
        Product.hasMany(models.Coment, {
            as: "coments",
            foreignKey: "productsId"
        })
    }

    return Product;

}