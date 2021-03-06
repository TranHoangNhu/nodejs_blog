const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
    app.use('/home', siteRouter);

    app.get('/search', (req, res) => {
        res.render('search');
    });

    app.post('/search', (req, res) => {
        res.send('');
    });
}

module.exports = route;