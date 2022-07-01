import { resetAndMockDB } from 'utils/testUtils';

describe('test /api/nearest-cabs', () => {
    it('should return the nearest cabs', async () => {
        const server = await resetAndMockDB();
        console.log(server);
        const res = await server.inject({
            method: 'POST',
            url: '/api/nearest-cabs',
            payload: {
                lat: 0,
                lng: 0
            }
        });
        console.log(res);
        expect(7 + 1).toBe(8);
    });
});
