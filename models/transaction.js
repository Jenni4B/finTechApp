import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const Transaction = sequelize.define('Transaction', {
    trans_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    amount: {
        type: DataTypes.FLOAT
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    trans_description: {
        type: DataTypes.STRING
    }
});

export default Transaction;