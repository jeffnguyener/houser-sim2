module.exports = {
    getProperties: (req, res) => {
        const database = req.app.get('db')

        database.all_homes().then(houses =>
            res.status(200).send(houses)
        )
            .catch(err => {
                res.status(500).send({ errorMessage: "Error" });
                console.log(err);
            })
    },
    addProperty: (req, res) => {
        const database = req.app.get('db')
        const { propertyName, address, city, state, zip } = req.body

        database.add_property({propertyName, address, city, state, zip}).then(houses =>
            res.status(200).then(houses))
    },
    deleteProperty: (req, res) => {
        const database = req.app.get('db')
        const { id } = req.params

        database.delete_property(id).then(house =>
            res.status(200).send(house)
        )
            .catch(err => {
                res.status(500).send({ errorMessage: "Error" });
                console.log(err);
            })
    }
}