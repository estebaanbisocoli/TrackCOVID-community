const fs = require("fs");

fs.writeFile(".env", process.env.ENV_FILE)