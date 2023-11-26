const mongoose = require('mongoose');
const model = mongoose.model('trips');

// GET: /trips - list all the trips
const tripsList = async (req, res) => {
    model
        .find({}) .then((trips) => {
            return res
                .status(200)
                .json(trips);
        }) //empty filter for all
        .catch((err) => {
            if (!trips) {
                return res
                    .status(404)
                    .json({ "message": "trips not found"});
            } else if (err) {
                return res  
                    .status(404)
                    .json(err);
            }
        });
};

// GET: /trips/:tripCode - returns a single trip
const tripsFindCode = async (req, res) => {
    model
        .find({'code': req.params.tripCode}).then((trip) => {
            return res
                .status(200)
                .json(trip);
        })
        .catch((err) => {
            return res
                .status(404)
                .json(err);
        });
};

module.exports = {
    tripsList,
    tripsFindCode
}