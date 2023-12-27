const util = require('util')
async function saveAndFetchData(sequencemodel, sequence) {
    try {
        const insurancesequence = new sequencemodel()
        const promisifiedSave = util.promisify(
            insurancesequence.save.bind(insurancesequence)
        )
        const promisifiedFindById = util.promisify(
            sequencemodel.findById.bind(sequencemodel)
        )

        // Save the insurancesequence and handle the error if any
        await promisifiedSave()

        // Fetch the newly created sequence document by ID
        const seqResponse = await promisifiedFindById(insurancesequence['_id'])

        // Manipulate the data and return the result
        const sequenceID = sequence.concat('00').concat(seqResponse.EmployeeID)

        return sequenceID
    } catch (error) {
        // Handle errors during the save or fetch operations
        throw new Error('customer Schema', error)
    }
}

module.exports = saveAndFetchData
