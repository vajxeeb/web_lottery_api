
const connection = require('./DBConfig/connection')
const logger = require('./LogConfig/logger')

//............POST................./
const POST = async function (res,loggerinfo, SQL, Parameters) {

    logger.info(loggerinfo)
    await connection.query(SQL, Parameters, (err, results) => {

        if (err) {
            logger.error(err);
            res.status(403).send({ err: err })
        }
        else {
            logger.info(results)
            res.status(201).send(results)
        }
    });
}
//............GET................./
let GET = async function (res,loggerinfo, SQL, Parameters) {
    logger.info(loggerinfo)
    await connection.query(SQL, Parameters, (err, results) => {
        if (err) {
            logger.error(err);
            res.status(403).send({ err: err })
        }
        if (results.rowCount == 0) {
            res.status(404).send({ message: "Not found data Or data in database empty" })
        }
        else {
            logger.info(results)
            res.status(200).send(results.rows)
        }
    });
}
//............PUT................./
let PUT = async function (res,loggerinfo, SQL, Parameters) {
    logger.info(loggerinfo)
    await connection.query(SQL, Parameters, (err, results) => {
        if (err) {
            logger.error(err);
            res.status(403).send({ err: err })
        }
        if (results.rowCount == 0) {
            res.status(404).send({ message: "Not found data for update" })
        }
        else {
            logger.info(results)
            res.status(200).send(results)
        }
    });
}

//............DELTE................./
let DELETE = async function (res,loggerinfo, SQL, Parameters) {
    logger.info(loggerinfo)
    await connection.query(SQL, Parameters, (err, results) => {
        if (err) {
            logger.error(err);
            res.status(403).send({ err: err })
        }
        if (results.rowCount == 0) {
            res.status(404).send({ message: "Not found data for delete" })
        }
        else {
            logger.info(results)
            res.status(200).send(results)
        }
    });
}

module.exports = { POST, GET, PUT, DELETE }