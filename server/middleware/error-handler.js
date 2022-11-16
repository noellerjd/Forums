const errorHandler = (err, req, res, next) => {
    const defaultError = {
        statusCode: err.statusCode,
        message: err.message || "Internal server error occurred."
    }

    res.status(defaultError.statusCode).json({msg: defaultError.message});
};

module.exports = {errorHandler};