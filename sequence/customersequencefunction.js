const util = require('util')

const sequencemodel = require('./customersequencemodel')

async function saveAndFetchData() {
    try {
        const customerSequence = new sequencemodel()
        const promisifiedSave = util.promisify(
            customerSequence.save.bind(customerSequence)
        )
        const promisifiedFindById = util.promisify(
            sequencemodel.findById.bind(sequencemodel)
        )

        // Save the customerSequence and handle the error if any
        await promisifiedSave()

        // Fetch the newly created sequence document by ID
        const seqResponse = await promisifiedFindById(customerSequence['_id'])

        // Manipulate the data and return the result
        const customerSequenceID = 'AKCINS'
            .concat('00')
            .concat(seqResponse.CustomerID)

        return customerSequenceID
    } catch (error) {
        // Handle errors during the save or fetch operations
        throw new Error('customer Schema', error)
    }
}

module.exports = saveAndFetchData
