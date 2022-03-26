import dd2ABI from "./DD2.json";
import masterChefABI from "./Masterchef.json";
import wethABI from "./WETH.json";
import Web3 from "web3";

export const getWethContract = (provider) => {
  const web3 = new Web3(provider);
  const wethContract = new web3.eth.Contract(
    wethABI,
    "0xc778417e063141139fce010982780140aa0cd5ab"
  );
  return { web3, wethContract };
};

export const getDD2Contract = (provider) => {
  const web3 = new Web3(provider);
  const dd2Contract = new web3.eth.Contract(
    dd2ABI,
    "0xb1745657cb84c370dd0db200a626d06b28cc5872"
  );
  return { web3, dd2Contract };
};

export const getMasterChefContract = (provider) => {
  const web3 = new Web3(provider);
  const masterchefContract = new web3.eth.Contract(
    masterChefABI,
    "0x9da687e88b0A807e57f1913bCD31D56c49C872c2"
  );
  return { web3, masterchefContract };
};
