import RouteReview from "../models/routeReviewModel.js";   


export const createRouteReview = async (req, res) => {
    try {
        const newRouteReview = await RouteReview.create(req.body);
        res.status(201).json(newRouteReview);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllRouteReviews = async (req, res) => {
    try {
        const routeReviews = await RouteReview.find();
        res.status(200).json(routeReviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getRouteReviewById = async (req, res) => {
    try {
        const routeReview = await RouteReview.findById(req.params.id);
        res.status(200).json(routeReview);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateRouteReview = async (req, res) => {
    try {
        const updatedReview = await RouteReview.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteRouteReview = async (req, res) => {
    try {
        await RouteReview.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};