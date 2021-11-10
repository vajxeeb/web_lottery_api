
const express = require('express')
const route = express.Router()
const brance = require('../controllers/brance.controller')

/**
 * @swagger
 * tags:
 *  name: Brance
 *  description: Brance api
 */

/**
 * @swagger
 * components:
 *  schemas:
 *   brance:
 *    type: object
 *    required:
 *      - brance_id
 *      - brance_name
 *      - brance_address
 *    properties:
 *     brance_id:
 *      type: integer
 *      description: Brance id
 *     brance_name:
 *      type: string
 *      description: Brance name
 *     brance_phone:
 *      type: string
 *      description: Brance phone 
 *    example:
 *      brance_id: 22
 *      brance_name: ຕົວຢ່າງ
 *      brance_phone: 02051201014
 */

//...........POST..................//
/**
 * @swagger
 * /api/brance:
 *  post:
 *   summary: Create a new brance
 *   tags: [Brance]
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/brance'
 *   responses:
 *    201:
 *       description: Create
 *    403:
 *       description: Forbiden
 *    404:
 *       description: Not found
 *    500:
 *       description: Some server error
 */
route.post('/brance', brance.Create)

//............PUT..................//

/**
 * @swagger
 * /api/brance:
 *  put:
 *   summary: Update the brance by brance id
 *   tags: [Brance]
 *   requestBody: 
 *    required: true
 *    content:
 *     application/json:
 *       schema:
 *         $ref: '#/components/schemas/brance'
 *   responses:
 *    200:
 *       description: OK
 *    401:
 *       description: Unauthorization
 *    403:
 *       description: Forbiden
 *    404:
 *       description: Not found
 *    500:
 *       description: Some server error
 */

route.put('/brance', brance.Update)
//.............DELETE...............//

/**
 * @swagger
 * /api/brance/{brance_id}:
 *  put:
 *   summary: Delete the brance by brance id
 *   tags: [Brance]
 *   parameters:
 *    - in: path
 *      name: brance_id
 *      schema:
 *       type: integer
 *      require: true
 *      description: Brance id
 *      example: 2
 *   responses:
 *    200:
 *       description: OK
 *    401:
 *       description: Unauthorization
 *    403:
 *       description: Forbiden
 *    404:
 *       description: Not found
 *    500:
 *       description: Some server error
 */

route.put('/brance/:brance_id', brance.Delete)

//.............GET..................//

/**
 * @swagger
 * /api/brance:
 *  get:
 *   summary: Get a list of brance
 *   tags: [Brance]
 *   responses:
 *    200:
 *       description: OK
 *    401:
 *       description: Unauthorization
 *    403:
 *       description: Forbiden
 *    404:
 *       description: Not found
 *    500:
 *       description: Some server error
 * 
 */
route.get('/brance', brance.Get)


module.exports = route