export const errorHandler = (err, req, res, next) => {
    console.log("Error encountered:", err);
    const statusCode = err.status || 500;   
    res.status(statusCode).json({
        success: false,
        error: err.message || "Internal Server Error"
    });
};