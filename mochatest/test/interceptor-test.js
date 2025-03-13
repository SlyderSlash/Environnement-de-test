const { expect } = require("chai")
const axios = require('axios')
const sinon = require('sinon')

describe('Test Interceptor with sinon', () => {
    let stub
    beforeEach(() => {
        //Surveille les requêtes Get depuis axios
        stub = sinon.stub(axios, 'get')
    })
    afterEach(() => {
        //Réinitialise la configuration et les éléments
        stub.restore()
    })

    it('Devrait intercepter l\'appel get - Obiwan', async() => {
        const data = {id: 1, name:"Obiwan", email: "obiwan@hellothere.galaxy"}
        
        //Indique les informations à renvoyer :
        stub.resolves({status: 200, data})

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

        expect(response.status).to.equal(200)
        expect(response.data).to.deep.equal(data)
    })
    it('Devrait intercepter l\'appel get - Anakin', async() => {
        const data = {id: 2, name:"Anakin", email: "Anakin@highground.galaxy"}
        
        //Indique les informations à renvoyer :
        stub.resolves({status: 200, data})

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

        expect(response.status).to.equal(200)
        expect(response.data).to.deep.equal(data)
    })
})