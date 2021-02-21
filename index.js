const axios = require('axios');

class IPBlacklistAI {
    constructor(apiKey) {
        this.apiKey = apiKey
    }

    async checkIP(ip_address) {

        let res = await axios.post('https://api.ipblacklist.ai/checkIP',
            {
                apikey: this.apiKey,
                ip: ip_address
            })
        
        return new IPBlacklistAIResult(res.data.blacklisted, res.data.country);
    }
}

class IPBlacklistAIResult {
    constructor(isBlackListed, country) {
        this.isBlackListed = isBlackListed
        this.country = country
    }
}

exports.IPBlacklistAI = IPBlacklistAI
exports.IPBlacklistAIResult = IPBlacklistAIResult