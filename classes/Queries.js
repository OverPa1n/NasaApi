const queries = require('axios');


class Queries {
    constructor(path, key) {
        this.path = path;
        this.key = key;
        this.data

    }

    //Send a request to APOD API
    async sendApodReq() {
        await queries.get(`${this.path}${this.key}`)
            .then((res) => {
                this.data = res.data;
            }).catch((e) => console.log(e))
    }

    //Send a request to Mars Rover Photo API
    async sendRoverReq() {
        await queries.get(`${this.path}${this.key}`)
            .then((res) => {
                this.data = res.data;
            }).catch((e) => console.log(e))
    }
}

module.exports = Queries;