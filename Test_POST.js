const fs = require('fs');

console.log("Reading test_payload.json...");
const payload = fs.readFileSync('test_payload.json', 'utf8');

console.log("Sending POST request to the API...");
fetch('http://localhost:3000/api/visa', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'BISMACKjEEECVVBSDXXXXdfsfhUFDDGGDFGDeFJKHGGFhFHFGHsdgFSfSvccBrJDnnfnFkejeWEQWEFDFdfkF2026'
    },
    body: payload
})
    .then(async (response) => {
        const text = await response.text();
        console.log("\n--- API RESPONSE ---");
        console.log("Status Code:", response.status);
        console.log(text);
        console.log("--------------------");
    })
    .catch((error) => {
        console.error("Error sending POST request:", error);
    });
