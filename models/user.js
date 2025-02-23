import { DataTypes } from "sequelize";
import sequelize from "../config/dbconn.js";

const User = sequelize.define(
  'User',
  {
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING(20), 
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING(30), 
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    pwd_hash: {
      type: DataTypes.STRING(60), 
      allowNull: false,
    },
  },
  {
    timestamps: true,          
    createdAt: 'created_at',     
    updatedAt: 'updated_at',      
    tableName: 'users',            
  }
);

export default User;
