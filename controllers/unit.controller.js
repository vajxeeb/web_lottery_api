
const unit = require('../models/unit.model')
let SQL =``
const connection = require('../DBConfig/connection')
const logger = require('../LogConfig/logger')
const process = require('../Processes')

//..............POST.......................//

exports.create = async (req, res) => {

    unit = req.body

    //Check the unit id and unit name that it exist in DB or not
    SQL = `SELECT * FROM public.tbl_service_unit WHERE us_id = $1 OR service_unit_name = $2`
    await connection.query(SQL, [unit.unit_id, unit.unit_name], (error, results) => {

        if(error) logger.error(error)

        if(results.rowCount>0) {
            res.status(403).send({message: 'ຫນ່ວຍບໍລິການນີ້ມີຢູ່ໃນລະບົບແລ້ວ'})
        }
        else {
            SQL = `INSERT INTO public.tbl_service_unit 
                   (us_id, brance_id, service_unit_name, 
                   create_by, create_date, tel1) VALUES ($1,$2,$3,$4,$5)`
             process.POST(
                 res,
                 req.body,
                 SQL,
                 [unit.unit_id, unit.brance_id, unit.unit_name, unit.create_by, unit.create_date, unit.tel1]
             )
        }
    })

}
//..............PUT.......................//
exports.update = async (req, res) => {

    
}
//..............DELETE.....................//
exports.delete = async (req, res) => {

    
}
//..............GET.......................//
exports.get = async (req, res) => {

    
}