exports.createPostValidator = (req, res, next) => {
    res.check('title', "Adj meg egy címet!").notEmpty;
    res.check('title', "A cím hossza minimum 4 és maximum 150 karakter lehet!").isLength({
        min: 4,
        max: 150
    });
    res.check('body', "Add meg a tartalmat!").notEmpty;
    res.check('body', "A tartalom hossza minimum 4 és maximum 2000 karakter lehet!").isLength({
        min: 4,
        max: 2000
    });
    const errors = req.validationErrors()
    if(errors) {
        const firstError = errors.map(error => error.msg) [0]
        return res.status(400).json({error: firstError})
    }
    next();
}