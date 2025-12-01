const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Secure CI/CD Pipeline Working Perfectly da Machi!</h1><p>Secured by SonarQube + OWASP Dependency-Check</p>');
});

app.listen(port, () => console.log('App running on port ' + port));
