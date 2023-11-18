var Migrations = artifacts.require("./Migrations.sol");
var DoctorAddRecord=artifacts.require("./DoctorAddRecord.sol");
module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(DoctorAddRecord);
};
