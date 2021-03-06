'use strict';
module.exports = (sequelize, DataTypes) => {
    const Activity = sequelize.define('Activity', {
        guide_id: DataTypes.INTEGER, // FK
        title: DataTypes.TEXT,
        description: DataTypes.STRING,
        city: DataTypes.STRING,
        lat: DataTypes.FLOAT,
        lng: DataTypes.FLOAT,
        category_id: DataTypes.INTEGER,
        price: DataTypes.DECIMAL(6,2),
        min_people: DataTypes.INTEGER,
        n_people: DataTypes.INTEGER,
        duration: DataTypes.INTEGER,
        photo_path: DataTypes.STRING
    }, {});
    Activity.associate = function(models) {
        Activity.hasMany(models.Activity_Evaluation, {foreignKey: 'activity_id'});
        Activity.hasMany(models.Activity_Date, {foreignKey: 'activity_id'});
        Activity.belongsTo(models.Guide, {foreignKey: 'guide_id'});
        Activity.belongsTo(models.Category, {foreignKey: 'category_id'});
        Activity.hasMany(models.Booking, {foreignKey: 'activity_id', sourceKey: 'id'});
        Activity.hasMany(models.Highlight, {foreignKey: 'activity_id'});
        Activity.hasMany(models.Activity_Language, {foreignKey: 'activity'});
    };
    return Activity;
};