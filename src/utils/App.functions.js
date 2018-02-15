const axios = require('axios');

// PURPOSE  - a function that will return all users
// EDGE CASES: 
// - ther are no users
// - could check for duplicates
// - server, network, etc... error


module.exports = {
    getAllUsers: (url) => {
        return axios.get(url).then(res => {
            return res.data;
        })
    }
}