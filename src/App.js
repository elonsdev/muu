import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import { TypeAnimation } from 'react-type-animation';

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: 1px black solid;
  background-color: var(--secondary);
  padding: 10px;
  font-weight: bold;
  color: var(--secondary-text);
  width: 200px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
  font-family: 'Kalam';
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Mint your .muu.eth now!`);
  const [mintAmount, setMintAmount] = useState(1);
  const [subdomainLabel, setSubDomainLabel] = useState('');
  const [randomImage, setRandomImage] = useState('/config/images/2.png')
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting ${subdomainLabel}.muu.eth...`);
    setClaimingNft(true);

    blockchain.smartContract.methods.mint(subdomainLabel).estimateGas({gasLimit: 300000,value: 5000000000000000}, function(error, gasAmount){
      if(error.message[18] == ":") {
        setFeedback("Someone has already registered this domain.");
        setClaimingNft(false);
      } else {
        blockchain.smartContract.methods
        .mint(subdomainLabel)
        
        .send({
          to: CONFIG.CONTRACT_ADDRESS,
          from: blockchain.account,
          value: totalCostWei,
          gasLimit: 300000,
        })
        
        .once("error", (err) => {
          console.log(err);
          setFeedback("Sorry, something went wrong please try again later.");
          setClaimingNft(false);
        })
        .then((receipt) => {
          console.log(receipt);
          setFeedback(
            `Aaaah yeah, ${subdomainLabel}.muu.eth is yours! go visit Opensea.io to view it.`
          );
          setClaimingNft(false);
          dispatch(fetchData(blockchain.account));
        }); 
      }
          
    });
    
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  const listenToEvent = () => {
    const contract = new ethers.Contract("", erc)
  }

  const handleChangeSub = event => {
    setSubDomainLabel(event.target.value);

    console.log('calue is.', event.target.value)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      let r = (Math.ceil((Math.random() * 30)));
      let randomI = "/config/images/"+ r + ".png";
      setRandomImage(randomI)
    }, 2500);
  
    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [])

  return (
    <s.Screen>
      <s.Container
        flex={1}
        ai={"center"}
        style={{ padding: 24, backgroundColor: "var(--primary)" }}
      > 
        
        <s.SpacerSmall />
        <ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
          <s.Container flex={1} jc={"center"} ai={"center"}>
            <StyledImg alt={"example"} src={randomImage} />
          </s.Container>
          <s.SpacerLarge />
          <s.Container
            flex={2}
            jc={"center"}
            ai={"center"}
            style={{

              padding: 24,

            }}
          >
            
            <s.SpacerSmall />
  
              <>
                
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <s.Container ai={"center"} jc={"center"}>
                    <h1 className="muulogo">
                      <TypeAnimation
                        sequence={['vitalik', 2000, '420', 2000, '😋', 2000, 'mike', 2000, 'trade', 2000, '🤌', 2000, 'fomo', 2000, 'king', 2000, 'my', 2000, '88', 2000, '💀', 2000, 'elon', 2000, 'grail', 2000, 'guy', 2000]}
                                      //  Replacing previous Text
                        wrapper="span"
                        repeat={Infinity}
                      />
                      .muu.eth
                    </h1>
                    <br/>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "black",
                      }}
                    >
                      Connect to mint your .muu.eth
                    </s.TextDescription>
                    <s.SpacerSmall />
                    <StyledButton
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    >
                      CONNECT
                    </StyledButton>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <s.SpacerSmall />
                        <s.TextDescription
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)",
                          }}
                        >
                          {blockchain.errorMsg}
                        </s.TextDescription>
                      </>
                    ) : null}
                  </s.Container>
                ) : (
                  <>
                      
                      <s.SpacerXSmall />
                      
                      <s.SpacerSmall />
                    
                    
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "black",
                      }}
                    >
                      {feedback}
                    </s.TextDescription>
                    <s.SpacerMedium />
                    <div >
                      <input
                        className="inputsub doodle-border"
                        type="text"
                        id="message"
                        name="message"
                        onChange={handleChangeSub}
                        value={subdomainLabel}
                      />.muu.eth
                    </div>
                    
                    
                    <s.SpacerSmall />
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs();
                          getData();
                        }}
                      >
                        {claimingNft ? "Busy minting..." : "Costs 0.005 ETH + gas"}
                      </StyledButton>
                    </s.Container>
                    <br/>
                   
                    <s.TextDescription
                        style={{ textAlign: "center", color: "black" }}
                      >
                        
                      <small style={{fontSize: "smaller"}}>There are no yearly renewal fee on .muu.eth subdomains*!! 😃</small>
                      <br/>
                      <small style={{fontSize: "6px"}}>*...As long as this service makes enough ETH per year to keep up registration fees on muu.eth ($640/yr).</small>
                      </s.TextDescription>
                  </>
                )}
              </>
            
            <s.SpacerMedium />
          </s.Container>
          <s.SpacerLarge />
          <s.Container flex={1} jc={"center"} ai={"center"}>
            <StyledImg
              alt={"example"}
              src={randomImage}
              style={{ transform: "scaleX(-1)" }}
            />
          </s.Container>
        </ResponsiveWrapper>
        <s.SpacerMedium />
        <s.Container jc={"center"} ai={"center"} style={{ width: "70%" }}>
          <s.TextDescription
            style={{
              textAlign: "center",
              color: "var(--primary-text)",
            }}
          >
            Wondering wtf this is all about? muu.eth is a experimental NFT by <a href="https://twitter.com/elonsdev">ElonsDev</a> that uses the muu.eth ENS name to issue subdomains that are also ERC721 tokens with a randomly generated face from croodles by <a href="https://twitter.com/realvjy">@realvjy</a> (under CC BY 4.0 License) and <a href="https://avatars.dicebear.com/">avatars.dicebear.com</a> free api*. Thus it can generate new and unique...ish faces forever.
            <br/><small style={{fontSize: "6px"}}>*...Hopefully the API doesn't break or I will have to remake it to keep the NFT images up. FAQ coming soon...</small>
          </s.TextDescription>
          <s.SpacerSmall />
          
          Smart Contract: <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
                {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
              </StyledLink>
        </s.Container>
      </s.Container>
    </s.Screen>
  );
}

export default App;
