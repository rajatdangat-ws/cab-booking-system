import { sign } from 'jsonwebtoken';

export const createToken = user =>
    sign({ id: user.id, email: user.email }, 'secretKey', {
        expiresIn: '1h'
    });
