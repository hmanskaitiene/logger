const { logger } = require("../utils/logger");

const info = (req, res) => {
    res.send('INFO')
}

//Si quisiera mandar un warning lo puedo hacer asi
const warning = (req, res) => {
    logger.warn('Aca se indica un warning')
    res.send('WARNING')
}

//Fijate aca como marco el error
const error = (req, res) => {
    logger.error('Aca se indica un error')
    res.send('ERROR')
}

module.exports = {
    info,warning,error
  };