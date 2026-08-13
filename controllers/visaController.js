const { getPool, sql } = require('../config/dbConfig');

// Handles the insertion of data into MSSQL
const insertData = async (req, res) => {
    try {
        // 1. Extract data from the request body
        // Example: const { firstName, lastName, passportNumber } = req.body;
        const payload = req.body;

        // Log the received payload for debugging
        console.log('Received data to insert:', payload);

        // Basic validation: ensure data was received
        if (!payload || Object.keys(payload).length === 0) {
            return res.status(400).json({ error: 'No data provided in the request body.' });
        }

        const pool = getPool();
        if (!pool) {
            return res.status(500).json({ error: 'Database connection is not established.' });
        }

        // 2. Prepare the SQL query
        // IMPORTANT: Replace 'YourTableName' with your actual table name
        // and adjust the columns and input variables according to your schema.

        /* 
        Example Implementation:

        const { firstName, lastName, passportNumber } = payload;
        
        const request = pool.request();
        // Add inputs to prevent SQL injection
        request.input('FirstName', sql.VarChar, firstName);
        request.input('LastName', sql.VarChar, lastName);
        request.input('PassportNumber', sql.VarChar, passportNumber);

        const query = `
            INSERT INTO YourTableName (FirstName, LastName, PassportNumber) 
            VALUES (@FirstName, @LastName, @PassportNumber)
        `;

        const result = await request.query(query);
        */

        // ---------------------------------------------------------
        // PLACEHOLDER: Since we don't know the exact schema yet, 
        // this is a generic simulation of the insert.
        // REMOVE this block and use the example above when you know the schema.

        // await pool.request().query('SELECT 1'); // Just testing the connection
        console.warn("WARNING: Insert query is not yet implemented. Please update controllers/visaController.js");
        // ---------------------------------------------------------

        // 3. Send a success response back to the calling system
        return res.status(201).json({
            message: 'Data successfully processed.',
            receivedData: payload
            // result: result.recordset // You can return the result if needed
        });

    } catch (error) {
        console.error('Error inserting data:', error);
        return res.status(500).json({
            error: 'An error occurred while inserting data into the database.',
            details: error.message
        });
    }
};

module.exports = {
    insertData
};
