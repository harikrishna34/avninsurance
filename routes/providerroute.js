const express = require('express')
const router = express.Router()
const _constants = require('../config/constants')
const Mapper = require('../repository/baserepository')
const providermodel = require('../models/providermodel')
const saveAndFetchData = require('../sequence/providersequencemodel/providersequencefunction')
const sequencemodel = require('../sequence/providersequencemodel/providersequencemodel')
const loginmodel = require('../models/login/loginmodel')
const moment=require('moment')
const models = {
    providermodel,
}
const mapper = new Mapper(models)

/**
 * @swagger
 *  components:
 *      schemas:
 *          Provider:
 *              type: object
 *              properties:
 *                  Providertype:
 *                      type: string
 *                  Commission:
 *                      type: number
 *                  EffectiveStartDate:
 *                      type: number
 *                  EffectiveEndDate:
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

router.post('/api/provider/addprovider', async (req, res) => {
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
            providerName: true,
            commission: true,
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
   
            let ProviderID = await saveAndFetchData(sequencemodel, _constants.INSUPROVIDER)

        const providerobj = {}
        providerobj['providerid'] = ProviderID
        providerobj['providerName'] = req.body.providerName
        providerobj['providertype'] = req.body.providertype
        providerobj['commission'] = req.body.commission
        providerobj['effectivestartdate'] = moment(
            req.body.effectivestartdate,
            'DD-MM-YYYY'
        ).unix()
        providerobj['effectiveenddate'] = moment(
            req.body.effectiveenddatedate,
            'DD-MM-YYYY'
        ).unix()

        const Provider = await mapper.create('providermodel', providerobj)

        res.status(_constants.serverResponseCodes.Success).json({
            type: true,
            msg: 'data added successfully',
            providerdata: Provider
        })
        return;
    
    } catch (error) {
        console.log('111', error)
        res.status(_constants.serverResponseCodes.Error).json({
            type: false,
            data: error.errors,
        })
        return;
    }

    
})


router.get('/api/provider/ViewProvider', async (req, res) => {
    try {
        const { providerid } = req.query
        console.log('11111', providerid)
        if (!providerid) {
            return res.status(400).json({ error: 'providerid is required' })
        }

        const pipeline = [
            {
                $match: {
                    providerid: providerid,
                },
            },
            {
                $lookup: {
                    from: 'PolicyDetails',
                    localField: 'customerid',
                    foreignField: 'customerid',
                    as: 'policyInfo',
                },
            },
            // {
            //     $project: {
            //         _id: 0, // Exclude _id field from the output
            //     },
            // },
        ]


        const providerID = await saveAndFetchData(
            sequencemodel,
            _constants.INSUEMPLOYEE
        )

        const result = await mapper.create('Providermodel ', pipeline)

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
