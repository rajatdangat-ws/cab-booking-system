import { cabs } from 'models';
import { sequelize } from 'models';

export const getNearbyCabs = async location => {
    const [results] = await sequelize.query(`
        SELECT
        id,
        car_model,
        vehicle_number,
        ST_X(current_location) AS "latitude",
        ST_Y(current_location) AS "longitude",
        (
        ST_Length(
                ST_LineStringFromWKB(
                ST_AsBinary(
                    LineString(
                    current_location, 
                    ST_GeomFromText('${location}')
                    )
                )
            )
        )
        )
        AS distance
        FROM cabs HAVING distance < 5
        ORDER BY distance ASC;
    `);

    return results;
};

export const getCabById = cabId =>
    cabs.findOne({
        where: {
            id: cabId
        }
    });
