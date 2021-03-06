const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'users',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            oauthClientId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'oauth_clients',
                    key: 'id'
                },
                field: 'oauth_client_id'
            },
            firstName: {
                type: DataTypes.STRING(32),
                allowNull: false,
                field: 'first_name'
            },
            lastName: {
                type: DataTypes.STRING(32),
                allowNull: false,
                field: 'last_name'
            },
            email: {
                type: DataTypes.STRING(32),
                allowNull: false
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
                field: 'created_at'
            }
        },
        {
            sequelize,
            tableName: 'users',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'id' }]
                },
                {
                    name: 'users_oauth_clients_id_fk',
                    using: 'BTREE',
                    fields: [{ name: 'oauth_client_id' }]
                }
            ]
        }
    );
};
