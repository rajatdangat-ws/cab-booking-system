import Joi from '@hapi/joi';
import { compare } from 'bcrypt';
import { findUserByEmail } from 'daos/cabUserDao';
import { badRequest } from 'utils/responseInterceptors';
import { stringSchema, emailSchema } from 'utils/validationUtils';
import { createToken } from 'utils/authUtils';

const verifyCredentials = async request => {
    const { email, password } = request.payload;
    const user = await findUserByEmail(email);
    if (user) {
        const result = await compare(password, user.password);
        if (result) {
            return user;
        } else {
            throw badRequest('Invalid password');
        }
    } else {
        throw badRequest('Invalid email');
    }
};

module.exports = [
    {
        method: 'POST',
        path: '/',
        options: {
            description: 'user login',
            notes: 'API for user signin',
            tags: ['api', 'cab-users'],
            cors: true,
            auth: false,
            pre: [
                {
                    method: verifyCredentials,
                    assign: 'user'
                }
            ],
            validate: {
                payload: Joi.object({
                    email: emailSchema,
                    password: stringSchema
                })
            }
        },
        handler: async (request, h) =>
            h.response({ id_token: createToken(request.pre.user) }).code(201)
    }
];
