import { bookings } from 'models';

export const bookCab = async data => bookings.create(data);

export const getPastBookings = async userId =>
    bookings.find({
        where: {
            userId: userId
        }
    });
