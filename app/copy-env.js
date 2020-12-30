const fs = require("fs");

fs.writeFileSync(".env", process.env.ENV_FILE)