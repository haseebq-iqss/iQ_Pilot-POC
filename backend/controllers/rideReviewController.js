import RideReview from "../models/rideReviewModel.js";

export const createRideReview = async (req, res) => {
    try {
        const newRideReview = await RideReview.create(req.body);
        res.status(201).json(newRideReview);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllRideReviews = async (req, res) => {
    try {
        const rideReviews = await RideReview.find();
        res.status(200).json(rideReviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getRideReviewById = async (req, res) => {
    try {
        const rideReview = await RideReview.findById(req.params.id);
        res.status(200).json(rideReview);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateRideReview = async (req, res) => {
    try {
        const updatedReview = await RideReview.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteRideReview = async (req, res) => {
    try {
        await RideReview.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
