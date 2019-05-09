const router = require("express").Router();
const axios = require("axios");

router.route("/openstate").post((req, res) => {
    axios.create({
        baseURL: "https://openstates.org/",
        headers: {
            "X-API-Key": "1a2c6c72-7b8f-48be-8e94-d4e69c31b7a0"
        }
    })
    .get(req.body.query)
    .then(response => {
        console.log(response.data);
        res.json(response.data)
    });
})

router.route("/propublica").post((req, res) => {
    axios.create({
        baseURL: "https://api.propublica.org",
        headers: {
            "X-API-Key": "API key: S7rXcvNNyKCQjMyHjzug6HChVXuoEYRtYGEBsEaF"
        }
    })
    .get(req.body.query)
    .then(response => {
        console.log(response.data);
        res.json(response.data);
    });
});




module.exports = router;