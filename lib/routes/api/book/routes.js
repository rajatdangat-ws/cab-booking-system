import Joi from '@hapi/joi';
// import { getCabById } from 'daos/cabDao';
import { stringSchema, numberSchema } from 'utils/validationUtils';

module.exports = [
    {
        method: 'POST',
        path: '/',
        options: {
            description: 'book a cab',
            notes: 'API to book a cab',
            tags: ['api', 'cab-users'],
            cors: true,
            auth: 'jwt',
            validate: {
                payload: Joi.object({
                    cabId: stringSchema,
                    pickupLocation: stringSchema,
                    dropLocation: stringSchema,
                    lat: numberSchema,
                    lng: numberSchema
                })
            }
        },
        handler: async (request, h) => {
            // const { id: userId } = request.auth.credentials;
            // const { cabId, pickupLocation, dropLocation, lat, lng } =
            //     request.payload;
            // const cab = await getCabById(cabId);
            // if (!cab) {
            // }
        }
    }
];
