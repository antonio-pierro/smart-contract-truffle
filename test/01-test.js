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
    it("The name variable is Antonio", function() {
      return demoContract.name().then(function(res){
          expect(res.toString()).to.be.equal("Antonio");
      });
    });
  });
});
