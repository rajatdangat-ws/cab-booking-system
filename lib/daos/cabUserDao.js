import { cab_users as cabUsers } from 'models';

export const addUser = async userData => cabUsers.create(userData);

export const findUserByEmail = async email =>
    cabUsers.findOne({
        where: {
            email: email
        }
    });
