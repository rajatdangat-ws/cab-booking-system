import Joi from '@hapi/joi';
import { getNearbyCabs } from 'daos/cabDao';
import { numberSchema } from 'utils/validationUtils';

module.exports = [
    {
        method: 'POST',
        path: '/',
        options: {
            description: 'get nearest cabs',
            notes: 'API to get nearest cabs',
            tags: ['api', 'cab-users'],
            cors: true,
            // auth: false,
            validate: {
                payload: Joi.object({
                    lat: numberSchema,
                    lng: numberSchema
                })
            }
        },
        handler: async (request, h) => {
            const { lat, lng } = request.payload;

            const nearbyCabs = await getNearbyCabs(`POINT(${lat} ${lng})`);
            return nearbyCabs;
        }
    }
];
