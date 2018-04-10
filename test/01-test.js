var Demo = artifacts.require("./Demo.sol");
expect = require("chai").expect;

contract("Test the Demo contract", function(accounts) {
    describe("Deploy the Demo smart contract", function() {
        it("Catch an istance of the Demo contract", function() {
            return Demo.new().then(function(instance) {
                demoContract = instance;
            });
        })
    });

    describe("Check the contract variable", function() {
        it("Call the function change name Antonio", function() {
            return demoContract.setName("Antonio").then(function(res){
                expect(res).to.not.be.an("error");
            });
        });
        it("check the variable name - should be Antonio", function() {
            return demoContract.name().then(function(res) {
                 expect(res.toString()).to.be.equal("Antonio");
            });
        });
        it("Call the function change name Ilaria", function() {
            return demoContract.setName("Ilaria").then(function(res){
                expect(res).to.not.be.an("error");
            });
        });
        it("check the variable name - should be Ilaria", function() {
            return demoContract.name().then(function(res) {
                 expect(res.toString()).to.be.equal("Ilaria");
            });
        });
    });
});
