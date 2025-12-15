export default function(schema) {
    // console.log("Schema for validation:", schema);
    return (req, res, next) => {
        console.log("Validating request body:", req.body);
        const result = schema.validate(req.body);
        if (result.error) {
            return res.status(400).json({ success: false, message: result.error.details[0].message });
    }
    next();
    };
}