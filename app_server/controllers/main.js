const index = (req, res) => {
    res.render('index', {title: 'travlr Getaway'});
};

module.exports = {
    index
}