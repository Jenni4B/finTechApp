import { DataTypes } from 'sequelize';
import sequelize from '../config/dbconn.js';

const Transaction = sequelize.define(
  'Transaction',
  {
    trans_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // Matches SERIAL in SQL
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'users', // assumes there is a users table
        key: 'user_id',
      },
      onDelete: 'CASCADE', // Matches ON DELETE CASCADE in SQL
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2), // More accurate than FLOAT for money
      allowNull: false,
      validate: {
        min: 0, // Ensures amount can't be negative
      },
    },
    trans_type: {
      type: DataTypes.ENUM('Withdraw', 'Deposit', 'Expense'),
      allowNull: false,
    },
    trans_description: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
    createdAt: 'created_at', // Renaming fields to match SQL naming convention
    updatedAt: 'updated_at',
    tableName: 'transactions', // Ensures the table name matches exactly
  }
);

export default Transaction;
