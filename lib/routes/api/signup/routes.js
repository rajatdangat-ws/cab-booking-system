import Joi from '@hapi/joi';
import { genSalt, hash } from 'bcrypt';
import { badImplementation, badRequest } from 'utils/responseInterceptors';
import { addUser, findUserByEmail } from 'daos/cabUserDao';
import { stringSchema, emailSchema } from 'utils/validationUtils';
import { createToken } from 'utils/authUtils';

const hashPassword = async password => {
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);
    return hashedPassword;
};

const verifyUniqueUser = async (request, h) => {
    const { email } = request.payload;
    const user = await findUserByEmail(email);
    if (user) {
        throw badRequest('Email taken');
    }
    return h.response(request.payload);
};

module.exports = [
    {
        method: 'POST',
        path: '/',
        options: {
            description: 'user signup',
            notes: 'API to create a user',
            tags: ['api', 'cab-users'],
            cors: true,
            auth: false,
            pre: [
                {
                    method: verifyUniqueUser
                }
            ],
            validate: {
                payload: Joi.object({
                    name: stringSchema,
                    email: emailSchema,
                    password: Joi.string().min(5).max(30).required()
                })
            }
        },
        handler: async (request, h) => {
            const { name, email, password } = request.payload;
            try {
                const hashedPassword = await hashPassword(password);
                const user = await addUser({
                    password: hashedPassword,
                    name,
                    email
                });
                return h.response({ id_token: createToken(user) }).code(201);
            } catch (e) {
                return badImplementation('Could not create account');
            }
        }
    }
];
