import {
    getAllPassengers,
} from "../queries/passenger.queries.js";


export default async(req, res) => {
    try {
        const passengers = await getAllPassengers();
        res.render("home/index", { passengers: passengers });
    } catch (err) {
        console.log(err);
    }

};

