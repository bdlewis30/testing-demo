const fns = require('./utils/App.functions.js');

describe('testing for all users endpoint', () => {

    test('checking to make sure the return value is an array', async () => {
        let data = await fns.getAllUsers('http://localhost:3005/api/getAllUsers')
        expect(Array.isArray(data)).toBeTruthy();
    })

    test('getting an array of users', () => {
        expect.assertions(1)
        return fns.getAllUsers('http://localhost:3005/api/getAllUsers').then(
            res => {
                expect(res.length).toBeGreaterThan(0)
        })
    })

    // what if you pass the wrong URL?
    // test('check if passed in the wrong url', () => {
    //     let data = await fns.getAllUsers('http://localhost:3005/api/getAllUsers')
    //     expect()
    // })

})