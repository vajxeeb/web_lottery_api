
const connection = require('../DBConfig/connection')
const logger = require('../LogConfig/logger')
let brance = require('../models/brance.model')
const process = require('../Processes')

//............CREATE.................//
exports.Create = async (req, res) => {
    brance = req.body

    //Check brance id or brance name in database if already exist do not allow to insert
    SQL = `SELECT * FROM public.tbbrance WHERE brance_id =$1 OR brance_name = $2`

    await connection.query(SQL, [brance.brance_id, brance.brance_name], (error, results) => {

        if (error) logger.error(error)

        if (results.rowCount > 0) {
            res.status(403).send({ message: 'ສາຂານີ້ມີ້ຢູ່ໃນລະບົບແລ້ວ' })
        }

        //If not exist allow insert
        else {

            SQL = `INSERT INTO public.tbbrance VALUES ($1, $2, $3)`

            if (!brance.brance_id || !brance.brance_name || !brance.brance_phone)
                return res.status(400).json({ message: 'Enter the brance data' })

            process.POST(
                res,
                req.body,
                SQL,
                [brance.brance_id, brance.brance_name, brance.brance_phone],
            )
        }
    })


}

//............PUT.................//
exports.Update = async (req, res) => {
    brance = req.body
    SQL = `UPDATE tbbrance SET brance_name = $1, brance_phone = $2 WHERE brance_id = $3`

    if (!brance.brance_id || !brance.brance_name || !brance.brance_phone)
        return res.status(400).json({ message: 'Choose the brance data' })

    process.PUT(
        res,
        req.body,
        SQL,
        [brance.brance_name, brance.brance_phone, brance.brance_id],
    )
}

//............DELETE.................//
// this we say that delete, but really we just update the brance status false

exports.Delete = async (req, res) => {
    brance = req.params
    SQL = `UPDATE  public.tbbrance SET brance_dlst = false WHERE brance_id = $1`
    if (!brance.brance_id)
        return res.status(400).json({ message: 'Choose the brance Id' })

    process.PUT(
        res,
        req.params,
        SQL,
        [brance.brance_id],
    )
}

//............GET................./
exports.Get = async (req, res) => {
    SQL = `SELECT * FROM  public.tbbrance`
    process.GET(
        res,
        '',
        SQL,
        '',
    )
}


