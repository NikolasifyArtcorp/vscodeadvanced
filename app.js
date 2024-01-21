const fs = require('fs');

// Define the HTML content
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is a sample HTML website generated using JavaScript.</p>

    <script src="app.js"></script>


    <h1>Welcome to My Website</h1>
    <p>This is a sample HTML website generated using JavaScript.</p>
</body>
</html>
`;

// Write the HTML content to a file
fs.writeFile('index.html', htmlContent, (err) => {
    if (err) {
        console.error('Error writing HTML file:', err);
    } else {
        console.log('HTML file generated successfully!');
    }
});
