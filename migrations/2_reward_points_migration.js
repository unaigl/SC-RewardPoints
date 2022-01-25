
 var RewardPoints = artifacts.require("./RewardPoints.sol");

module.exports = function(deployer) 
{
    deployer.deploy(RewardPoints);
};
