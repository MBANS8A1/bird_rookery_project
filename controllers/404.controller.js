exports.handle404 = (req, res) => {
    res.status(404).send({msg: "HTTP 404 error: path cannot be found"})
}