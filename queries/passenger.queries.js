import Passenger from "../models/Passenger.js";

export const getAllPassengers = () => {
    return Passenger.find({Survived :true}).exec();
};