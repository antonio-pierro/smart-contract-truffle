var Demo = artifacts.require('./Demo.sol');
chai = require('chai');
chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
expect = chai.expect;

contract('Test the Demo contract', accounts => {
    describe('Deploy the Demo smart contract', () => {
        it('Catch an istance of the Demo contract', () => {
            return Demo.new().then(instance => {
                demoContract = instance;
            });
        });
    });

    describe('Check the contract variable', () => {
        it('Call the function change name Antonio', () => {
            demoContract.setName('Antonio')
            .then(res => expect(res).to.not.be.an('error'));
        });
        it('check the variable name - should be Antonio', () => {
            return demoContract.name().then(res => {
                expect(res.toString()).to.be.equal('Antonio');
            });
        });
        it('Call the function change name Ilaria - should fail', () => {
            expect(demoContract.setName('Ilaria', {'from': accounts[1]}))
            .to.be.eventually.rejected;
        });
        it('check the variable name - should be Antonio', () => {
            demoContract.name().then(res => {
                expect(res.toString()).to.be.equal('Antonio');
            });
        });
    });
});
