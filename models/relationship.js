import User from './user.js';
import Transaction from './transaction.js';

// a User can have multiple Transactions
User.hasMany(Transaction, { 
    foreignKey: { 
        name: 'user_id',         
        allowNull: false         // Ensures foreign key cannot be null
    },
    as: 'transactions'           // Access transactions via user.transactions
});

// One user per transaction 
Transaction.belongsTo(User, { 
    foreignKey: { 
        name: 'user_id',         
        allowNull: false
    },
    as: 'user'                   // Access user via transaction.user
});

export { User, Transaction };
