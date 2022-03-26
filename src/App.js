/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { useWeb3React } from "@web3-react/core";
import { Button, Card, Col, Descriptions, message, Row, Statistic } from "antd";
import { useEffect, useState } from "react";
import Web3 from "web3";
import { getWethContract, getMasterChefContract } from "./abi/contract";
import "./App.css";
import CustomModal from "./components/Modal";
import { injected, walletConnectConnector } from "./config/wallets";
import { icons } from "./themes/icon";
import { MASTERCHEF_SC, TIME_DURATION, WETH_SC } from "./utils/constant";
import { EllipsisMiddle } from "./utils/functions";
import wethABI from "./abi/WETH.json";
import masterChefABI from "./abi/Masterchef.json";
import { Multicall } from "ethereum-multicall";
import { BigNumber } from "@ethersproject/bignumber";
import { ethers } from "ethers";
import moment from 'moment';
import axios from "axios";
import HistoryTable from "./components/HistoryTable";

const endpoint =
  "https://api.thegraph.com/subgraphs/name/sotatek-daipham/web3final";
const headers = {
  "content-type": "application/json",
};

function App() {
  const { activate, account, chainId, library } = useWeb3React();
  const [loadingButton, setLoadingButton] = useState(false);
  const [loadingHarvest, setLoadingHarvest] = useState(false);
  const [stakeModal, setStakeModal] = useState(false);
  const [withdrawModal, setWithdrawModal] = useState(false);
  const [balance, setBalance] = useState(0);
  const [yourStake, setYourStake] = useState(0);
  const [tokenEarned, setTokenEarned] = useState(0);
  const [totalStaked, setTotalStaked] = useState(0);
  const [isApprove, setApprove] = useState(0);
  const [historyData, setHistoryData] = useState([]);
  const web3 = new Web3(library?.provider);
  const multicall = new Multicall({
    web3Instance: web3,
    tryAggregate: true,
  });

    // Fetch data from subgraph
  const fetchHistory = async (account) => {
    try {
      const response = await axios({
        url: endpoint,
        method: "POST",
        headers: headers,
        data: {
        "query": `
          {depositEntities(orderBy: time, orderDirection:desc, first: 5, where:{
            user: "${account}"
            }) {
              id
              time
              user
              amount
            }
          withdrawEntities(orderBy: time, orderDirection:desc, first: 5, where:{
                user: "${account}"
          }) {
            id
            time
            user
            amount
          }}`,
          "variables": null,
        },
      });

      const depositHistory = response.data.data.depositEntities;
      
      const historyResponse = [...response.data.data.depositEntities, ...response.data.data.withdrawEntities];

      
      const sortHistoryByTime = historyResponse.sort(function(x, y){
        return x.time - y.time;
      }).reverse()

      const historyData = sortHistoryByTime.map(rec => {
        return {
          id: rec.id,
          action: depositHistory.find(item => item.id === rec.id) ? "Deposit" : "Withdraw",
          amount: web3.utils.fromWei(rec.amount),
          time: moment.unix(rec.time).format("YYYY-MM-DD HH:mm:ss"),
        }
      })
      setHistoryData(historyData);
    } catch (error) {
      console.log(error);
    }
  }


  const contractCallContext = [
    {
      reference: "userBalance",
      contractAddress: WETH_SC,
      abi: wethABI,
      calls: [
        {
          reference: "balance",
          methodName: "balanceOf",
          methodParameters: [account],
        },
      ],
    },
    {
      reference: "userStake",
      contractAddress: MASTERCHEF_SC,
      abi: masterChefABI,
      calls: [
        {
          reference: "userStake",
          methodName: "userInfo",
          methodParameters: [account],
        },
      ],
    },
    {
      reference: "tokenEarned",
      contractAddress: MASTERCHEF_SC,
      abi: masterChefABI,
      calls: [
        {
          reference: "tokenEarned",
          methodName: "pendingDD2",
          methodParameters: [account],
        },
      ],
    },
    {
      reference: "totalStaked",
      contractAddress: WETH_SC,
      abi: wethABI,
      calls: [
        {
          reference: "totalStaked",
          methodName: "balanceOf",
          methodParameters: [MASTERCHEF_SC],
        },
      ],
    },
  ];
  console.log(account);
  //get data with multicall
  const getMulticalData = async () => {
    try {
      const results = await multicall.call(contractCallContext);
      setBalance(
        ethers.utils.formatEther(
          BigNumber.from(
            results.results.userBalance.callsReturnContext[0].returnValues[0]
              .hex
          )
        )
      );
      setYourStake(
        ethers.utils.formatEther(
          BigNumber.from(
            results.results.userStake.callsReturnContext[0].returnValues[0].hex
          )
        )
      );
      setTokenEarned(
        ethers.utils.formatEther(
          BigNumber.from(
            results.results.tokenEarned.callsReturnContext[0].returnValues[0]
              .hex
          )
        )
      );
      setTotalStaked(
        ethers.utils.formatEther(
          BigNumber.from(
            results.results.totalStaked.callsReturnContext[0].returnValues[0]
              .hex
          )
        )
      );
      console.log(results);
    } catch (error) {
      console.log(
        "🚀 ~ file: App.js ~ line 50 ~ getMulticalData ~ error",
        error
      );
    }
  };

  const connectInjectedConnector = () => {
    activate(injected);
  };

  const connectWalletConnectConnector = () => {
    activate(walletConnectConnector, undefined, true).catch((e) =>
      console.log("error", e)
    );
  };

  const handleCloseStakeModal = () => {
    setStakeModal(false);
  };

  const handleCloseWithdrawModal = () => {
    setWithdrawModal(false);
  };

  const handleOpenStakeModal = () => {
    setStakeModal(true);
  };

  const handleOpenWithdrawModal = () => {
    setWithdrawModal(true);
  };

  const checkAllowance = async () => {
    const { wethContract } = getWethContract(library.provider);
    const isAllowance = await wethContract.methods
      .allowance(account, MASTERCHEF_SC)
      .call();
    setApprove(isAllowance);
  };

  // Approve
  const handleApprove = async () => {
    const { web3, wethContract } = getWethContract(library.provider);
    await wethContract.methods
      .approve(MASTERCHEF_SC, web3.utils.toWei(balance))
      .send({ from: account });
    checkAllowance();
  };

  // Deposit
  const handleDeposit = async (amount) => {
    const { web3, masterchefContract } = getMasterChefContract(
      library.provider
    );

    if (amount > parseFloat(balance)) {
      message.error({
        content: "Insufficient funds",
        duration: TIME_DURATION,
      });
    } else if (account) {
      try {
        setLoadingButton(true);
        const depositRes = await masterchefContract.methods
          .deposit(web3.utils.toWei(amount.toString()))
          .send({ from: account });

        if (depositRes) {
          message.success({
            content: "Transaction Success",
            duration: TIME_DURATION,
          });
          handleCloseStakeModal();
          getStaticInfo();
          setLoadingButton(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  //Withdraw
  const handleWithdraw = async (amount) => {
    const { web3, masterchefContract } = getMasterChefContract(
      library.provider
    );

    if (amount > parseFloat(yourStake)) {
      message.error({
        content: "Insufficient funds",
        duration: TIME_DURATION,
      });
    } else if (account) {
      try {
        setLoadingButton(true);
        const depositRes = await masterchefContract.methods
          .withdraw(web3.utils.toWei(amount.toString()))
          .send({ from: account });

        if (depositRes) {
          message.success({
            content: "Transaction Success",
            duration: TIME_DURATION,
          });
          handleCloseStakeModal();
          getStaticInfo();
          setLoadingButton(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Harvest
  const handleHarvest = async () => {
    const { masterchefContract } = getMasterChefContract(library.provider);

    try {
      setLoadingHarvest(true);
      const depositRes = await masterchefContract.methods
        .deposit(0)
        .send({ from: account });

      if (depositRes) {
        message.success({
          content: "Transaction Success",
          duration: TIME_DURATION,
        });
        handleCloseStakeModal();
        getStaticInfo();
        setLoadingHarvest(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getStaticInfo = async () => {
    await getMulticalData();
    await fetchHistory(account);
  };

  useEffect(() => {
    if (account && library) {
      getStaticInfo();
      checkAllowance();
    }
  }, [account, library]);

  const renderConnectWallet = () => {
    return (
      <div className="connect__wallet">
        <div
          className="connect__wallet__option"
          onClick={connectInjectedConnector}
        >
          <img src={icons.metaMask} />
          <span>Connect Metamask</span>
        </div>
        <br />
        <div
          className="connect__wallet__option"
          onClick={connectWalletConnectConnector}
        >
          <img src={icons.walletConnect} />
          <span>Wallet Connect</span>
        </div>
      </div>
    );
  };

  console.log(balance);
  const renderStake = () => {
    return (
      <div className="stake__container">
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={true}>
              <Descriptions
                title="Stake Detail"
                bordered
                size="middle"
                column={2}
              >
                <Descriptions.Item label="Wallet Address">
                  {account && EllipsisMiddle(account)}
                </Descriptions.Item>
                <Descriptions.Item label="Balance">
                  {balance && balance} <strong>WETH</strong>
                </Descriptions.Item>
                <Descriptions.Item label="Token Earned">
                  {tokenEarned} <strong>DD2</strong>
                </Descriptions.Item>
                <Descriptions.Item label="Your Stake">
                  {yourStake} <strong>WETH</strong>
                </Descriptions.Item>
                <Descriptions.Item label="Total Staked">
                  {totalStaked} <strong>WETH</strong>
                </Descriptions.Item>
                <Descriptions.Item>
                  <Button
                    type="primary"
                    block
                    onClick={handleHarvest}
                    loading={loadingHarvest}
                  >
                    Harvest
                  </Button>
                </Descriptions.Item>
              </Descriptions>
              <div className="stake__action">
                {parseFloat(isApprove) ? (
                  <>
                    <button onClick={handleOpenStakeModal} className="deposit">
                      Deposit
                    </button>
                    <button
                      onClick={handleOpenWithdrawModal}
                      className="withdraw"
                    >
                      Withdraw
                    </button>
                  </>
                ) : (
                  <button onClick={handleApprove} className="approve">
                    Approve
                  </button>
                )}
              </div>
              <CustomModal
                title={"Stake"}
                isModalVisible={stakeModal}
                handleCancel={handleCloseStakeModal}
                handleAction={handleDeposit}
                loading={loadingButton}
                modalInfoName={"Your WETH balance"}
                modalInfoValue={balance}
              />
              <CustomModal
                title={"Withdraw"}
                isModalVisible={withdrawModal}
                handleCancel={handleCloseWithdrawModal}
                handleAction={handleWithdraw}
                loading={loadingButton}
                modalInfoName={"Your WETH deposited"}
                modalInfoValue={yourStake}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="History" bordered={true}>
              <HistoryTable history={historyData}/>
            </Card>
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <div className="App">
      {!account ? renderConnectWallet() : renderStake()}
    </div>
  );
}

export default App;
