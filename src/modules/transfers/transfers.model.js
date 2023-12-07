import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/database/database.js';
//hacer importación de sequelize

export const Transfer  = sequelize.define('transfers', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    senderUserId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    receiverUserId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});
