const util = require('util')
async function saveAndFetchData(sequencemodel, sequence) {
    try {
        const employeeSequence = new sequencemodel()
        const promisifiedSave = util.promisify(
            employeeSequence.save.bind(employeeSequence)
        )
        const promisifiedFindById = util.promisify(
            sequencemodel.findById.bind(sequencemodel)
        )

        // Save the employeeSequence and handle the error if any
        await promisifiedSave()

        // Fetch the newly created sequence document by ID
        const seqResponse = await promisifiedFindById(employeeSequence['_id'])

        // Manipulate the data and return the result
        const sequenceID = sequence.concat('00').concat(seqResponse.EmployeeID)

        return sequenceID
    } catch (error) {
        // Handle errors during the save or fetch operations
        throw new Error('customer Schema', error)
    }
}

module.exports = saveAndFetchData
