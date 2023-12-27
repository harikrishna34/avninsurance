const express = require('express')
const router = express.Router()
const _constants = require('../config/constants')
const Mapper = require('../repository/baserepository')
const Employeemodel = require('../models/employeemodel')
const saveAndFetchData = require('../sequence/employeesequencemodel/employeesequencefunction')
const sequencemodel = require('../sequence/employeesequencemodel/employeesequencemodel')
const loginmodel = require('../models/login/loginmodel')
const models = {
    Employeemodel,
}
const mapper = new Mapper(models)

/**
 * @swagger
 *  components:
 *      schemas:
 *          Employee:
 *              type: object
 *              properties:
 *                  FirstName:
 *                      type: string
 *                  LastName:
 *                      type: string
 *                  DOB:
 *                      type: string
 *                  Age:
 *                      type: number
 *                  ContactNumber:
 *                      type: number
 *                  PrimaryMobileNumber:
 *                      type: number
 */

/**
 * @swagger
 * /api/employee/addemployee:
 *   post:
 *     summary: Create a new employee
 *     description: This API will be used to add employees
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Employee'
 *     responses:
 *       200 :
 *         description: Employee created successfully
 *       400 :
 *         description: Invalid Parameters
 *       500 :
 *         description: Internal Server Error
 */

router.post('/api/employee/addemployee', async (req, res) => {
    console.log('stage22')
    console.log(req.body)

    try {
        if (
            req.body == undefined ||
            req.body == null ||
            Object.keys(req.body).length < 1
        ) {
            res.json({
                type: false,
                code: 'S000',
                message: 'Body required',
            })
            return
        }
        let requiredParams = {
            FirstName: true,
            LastName: true,
        }

        for (const requestKey in requiredParams) {
            if (
                req.body[requestKey] == null ||
                req.body[requestKey] == undefined ||
                req.body[requestKey].length < 1
            ) {
                res.status(
                    _constants.serverResponseCodes.Invalid_Parameters
                ).json({
                    type: true,
                    code: 'S002',
                    data:
                        'Invalid Parameters, ' +
                        requestKey +
                        ' must not be Empty',
                })

                return
            }
        }
        const employeeID = await saveAndFetchData(
            sequencemodel,
            _constants.INSUEMPLOYEE
        )

        const result = await mapper.create('Employeemodel ', pipeline)

        res.status(_constants.serverResponseCodes.Success).json({
            type: true,
            msg: 'Data Fetch Successfully',
            Data: result,
        })
    } catch (error) {
        res.status(_constants.serverResponseCodes.Error).json({
            type: false,
            data: error,
        })
    }
})
module.exports = router
