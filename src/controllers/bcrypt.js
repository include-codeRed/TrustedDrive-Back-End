const bcryptjs = require('bcryptjs');

const securePass = async (pass) => {
    return await bcryptjs.hash(pass,10);
    // const passwordHash = await bcryptjs.hash(pass,10);
    // console.log(passwordHash);
    // return await passwordHash;
}

const comparePass = async (pass,hashPass) => {
    return await bcryptjs.compare(pass,hashPass);
    // const isPassMatch = await bcryptjs.compare(pass,hashPass);
    // console.log(isPassMatch);
    // return await isPassMatch;
}


module.exports = {securePass,comparePass};