const { Router } = require('express');
const { info,warning,error }  = require('../controllers/example.js');

const router = Router();

router.get('/',info)
router.get('/info',info)
router.get('/warning',warning)
router.get('/error',error)


//Esta ruta solo la invente para que no tire error y confunda
router.get('/favicon.ico', (req, res) => {
    res.sendStatus(200);
});

module.exports = router;  