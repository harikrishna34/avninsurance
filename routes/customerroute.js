/** @format */
const express = require('express')
const router = express.Router()
const CustomerDetails = require('../models/customermodel')
const PolicyDetails = require('../models/policymodel')
const AddressDetails = require('../models/addressmodel')
const _constants = require('../config/constants')
const Mapper = require('../repository/baserepository')
const saveAndFetchData = require('../sequence/customersequencefunction')
var multipart = require('connect-multiparty')
var moment = require('moment')
var moment = require('moment-timezone')
moment.tz.setDefault('Asia/Kolkata')
var multipartMiddleware = multipart()

const models = {
    CustomerDetails,
    PolicyDetails,
    AddressDetails,
}
const mapper = new Mapper(models)

router.post('/create/customer', multipartMiddleware, async (req, res) => {
    console.log('stage111')
    console.log(req.body)

    try {
        // var date = moment(date1, "DD-MM-YYYY").unix()
        let CustomerID = await saveAndFetchData()
        const customerobj = {}
        customerobj['customerid'] = CustomerID
        customerobj['customername'] = req.body.customername
        customerobj['emailid'] = req.body.emailid
        customerobj['phonenumber'] = req.body.phonenumber
        customerobj['customerstatus'] = req.body.customerstatus
        customerobj['interactiondate'] = moment(
            req.body.interactiondate,
            'DD-MM-YYYY'
        ).unix()

        customerobj['employeeid'] = req.body.employeeid
        customerobj['ReferedBy'] = req.body.ReferedBy
        customerobj['customertype'] = req.body.customertype
        // let startdate = moment(req.body.startdate, 'DD-MM-YYYY').unix()
        const policyDetailsobj = {}
        policyDetailsobj['customerid'] = CustomerID
        policyDetailsobj['providername'] = req.body.providername
        policyDetailsobj['policytype'] = req.body.policytype
        policyDetailsobj['startdate'] = moment(
            req.body.startdate,
            'DD-MM-YYYY'
        ).unix()
        policyDetailsobj['enddate'] = moment(
            req.body.enddate,
            'DD-MM-YYYY'
        ).unix()

        const Customer = await mapper.create('CustomerDetails', customerobj)
        const PolicyDetails = await mapper.create(
            'PolicyDetails',
            policyDetailsobj
        )

        res.status(_constants.serverResponseCodes.Success).json({
            type: true,
            msg: 'data adde successfully',
            customerdata: Customer,
            policydetails: PolicyDetails,
        })
    } catch (error) {
        console.log('111', error)
        res.status(_constants.serverResponseCodes.Error).json({
            type: false,
            data: error.errors,
        })
    }

    return
})
/**
 * @swagger
 * /api/customer/ViewAllCustomer:
 *   get:
 *     summary: Get a hello message
 *     responses:
 *       200:
 *         description: Hello message returned successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get('/api/customer/ViewAllCustomer', async (req, res) => {
    try {
        const { customerid } = req.query
        console.log('11111', customerid)
        if (!customerid) {
            return res.status(400).json({ error: 'customerid is required' })
        }

        const pipeline = [
            {
                $match: {
                    customerid: customerid,
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
        const result = await mapper.aggregate('CustomerDetails', pipeline)

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
