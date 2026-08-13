const { getPool, sql } = require('../config/dbConfig');

// Handles the insertion of data into MSSQL
const insertData = async (req, res) => {
    try {
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

        // ==========================================
        // 🚨 IMPORTANT: PUT YOUR TABLE NAME HERE! 🚨
        const tableName = 'tblSales';
        // ==========================================

        const request = pool.request();
        
        const columns = Object.keys(payload);
        const values = [];

        // Dynamically build the parameters based on the JSON payload you send
        // This avoids having to write out all 43 columns manually!
        columns.forEach((key, index) => {
            const paramName = `param${index}`;
            let value = payload[key];
            
            // Convert 'NULL' string to actual null if needed
            if (value === 'NULL') value = null;
            
            request.input(paramName, value);
            values.push(`@${paramName}`);
        });

        // Wrap columns in brackets [ColName] to prevent issues with SQL reserved words
        const safeColumns = columns.map(col => `[${col}]`).join(', ');

        const query = `
            SET IDENTITY_INSERT [${tableName}] ON;
            INSERT INTO [${tableName}] (${safeColumns}) 
            VALUES (${values.join(', ')});
            SET IDENTITY_INSERT [${tableName}] OFF;
        `;

        // Execute the insert query
        await request.query(query);

        // Send a success response back to the calling system
        return res.status(201).json({
            message: 'Data successfully inserted into database!',
            insertedColumns: columns.length
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
