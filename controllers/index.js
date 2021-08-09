const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dash-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dash', dashboardRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;