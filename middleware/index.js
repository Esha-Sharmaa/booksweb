const fs = require("fs");

function logReqRes(filePath) {
    return function (req, res, next) {
        const logData = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
        fs.appendFile(filePath, logData, (err) => {
            if (err) console.error("Error logging request:", err);
        });
        next();
    };
}

module.exports =  logReqRes;