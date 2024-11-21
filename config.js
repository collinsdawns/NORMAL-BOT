const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVa4+iSBT9K5P6qj3ykJdJJwuI4gNFARU3+6GAAqp5CoU2TvzvG7Q73dnZme3lU6WoOvfce8899QPkBa7RArVg9AOUFT5DgrolaUsERkBpwhBVoA8CSCAYgY0KHYqd7luyulir/UJpoUGonaGEm7JYBoM6q6ydGcFB4jyDWx+UjZdi/zeAp6111TIvfLlkaFWdT+GOW88jbcq33qkNXEcStKvZMz3dLp7BrUOEuMJ5pJUxylAF0wVqTYirr9EvVqo82RW75CVWFW5WrmW8Fw4wguMXBVUnRVhX5lVTiTfRvkZ/so5pQ9TO03RxNdbly96fUn7jqFodc62DBg0nxqIe7DNMPejXOMpRMAtQTjBpv1x3NDVIb2LnWJwd8zZZta1Yc6tE0U1Bc3qL2oJqrlPhsp5svkZc1XMebT3dKMxUnh8g7M2owBqvWOp0sI5q0mBqMs1jJ7Scz8TN6l0ryf+pu7gWoZIfqJXX1Oi6rfhG5UoSmMxBTmqPW3oDvF3aZ+6azr5G33LMdKr6kuk1uwPx7P3+vMnEkh/vhc3syuQlXAykOB6MU/mDPiRN9TuWtZ6yoiCeAgPvJ2i4Z+YFdS35gd7q2Ypqhr1ZbR6bhii6dVqzm/Jw3RWCiub7ukiLuFidRF+tCY+ogGOcWo0vm/AoX57vGSWonQVgRN/6oEIRrkkFCS7y+x5F9wEMzhbyK0Tu5QV2yzm4F4kNmb1G7WZP9Xx7Mr80C8vhbULyGnn2Ejb25DR8Bn1QVoWP6hoFOq5JUbUGqmsYoRqM/rx3qku6QllB0BwHYAQYbihwPCdSDMX/UX+/xJDUsCy/54iAPgirIjMQGJGqQX1wv8Dy1HCoaEN6Qmssq44phpLH8lhiFI6XVEnqUsweQW2coZrArAQjWmAZWqDYIXX7qw9y9Eoe+umyZuk+CHFVEydvyrSAwbu43n9C3y+anFht7qvdAlVgRH1sI0JwHtVdZk0OKz/GZ6R2eYBRCNMa3fogQGfsow4PLA/SQjiuDate+4zlrInsjJeXrnJxkT+OQAZKkgjpp4D3qKchFJkniQ25JykYegxCEhIZH3TleIxud+eXSlqEE8q1Xs/iTmH4OWSCKC/WAY/CKLmr4SEBVKHgvcoe9JOmtIsE5b/Bdd1kIbJmwI/FlFVf/arq5YPmtcWo+IT7kBYY/fiwS7UIOry9eTi4NG2CrltdnJ/UMGKEnwWRw+40sHXt28Sxna32TXUVbdtFfGtHhxUgAnFad+ZitPTZnCnaapH0hGQ6lZNIViMZfLTvfRwfcl/txQF9NZk4fNmybpAZR2dWFERcwjTebss4Zg+VcxX2wvYu93+CdCGJmwss3rEDhz6Ts18og7BMDft0YtrNRVxbDZ8s3ZNxZT2LvBwTndnYUJHIacaL/szNi2l9MDzsvCruRBNEncfYlaPnLtpDRp+DHVPcO6YSGy7MScHLbdPMuV6uj0lelKmzi6yjNU5F5cCk1WCpz9tdxK2n2XG39ZbMtZq4MzqcYpVGjTSlj5LqxPF0pmweRnE3qvTtgcBvI/wQXYjR3W/f2vGfbfvQP3Xrf8J4c/BfaEyxd2dT8q9ScRhSAaMfX6Y7dbFYhipTuo4DXTegedro0Q2FwK0b7DKFJCyqrLPQzIOgD1JYE/ljfv/FEliuD7JWLkuLQPI+9kC+fxsf3P4GXLDirZkIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "SIRENS",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " SIRENS",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/bb374d9e92afbde2bbbfa.png',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE : process.env.ANTIDELETE || 'yes',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

