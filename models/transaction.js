import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const Transaction = sequelize.define('Transaction', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    amount: {
        type: DataTypes.FLOAT
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descrip: {
        type: DataTypes.STRING
    }
});

module.exports = Transaction;