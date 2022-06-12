import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements.js";
import 'bootstrap/dist/css/bootstrap.min.css';

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #89cff0};
  background-image: linear-gradient(to right, #16a4fd 0%, #41faa4 100%);
}
  padding: 20px;
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
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color:.text #89cff0};
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: blue};
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
  width: 10px;
  @media (min-width: 767px) {
    width: 20px;
    height: 20px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0);
  border: 1px var(--secondary);
  background-color: var(--accent);
  border-radius: 10%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 370px;
  }
  transition: width 0.5s;
`;
export const StyledImg1 = styled.img`
  
  
 padding: 0;
  
  width: 1000px;
  @media (min-width: 900px) {
    width: 1000px;
  }
  @media (min-width: 1000px) {
    width: 1000px;
  }
  transition: width 0.5s;
`;
export const StyledImg2 = styled.img`
  
  
 padding: 0;
  
  width: 100px;
  @media (min-width: 900px) {
    width: 200px;
  }
  @media (min-width: 1000px) {
    width: 350px;
  }
  transition: width 0.5s;
`;
export const StyledImg3 = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0);
  border: 1px var(--secondary);
  background-color: var(--accent);
  border-radius: 10%;
  width: 20px;
  @media (min-width: 900px) {
    width: 20px;
  }
  @media (min-width: 1000px) {
    width: 25px;
  }
  transition: width 0.5s;
`;
export const StyledImg4 = styled.img`
  
  
 padding: 0;
 border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 200px;
  }
  @media (min-width: 1000px) {
    width: 250px;
  }
  transition: width 0.5s;
`;
export const StyledImg5 = styled.img`
  
  
padding: 0;
  
  width: 1000px;
  @media (min-width: 900px) {
    width: 1000px;
  }
  @media (min-width: 1000px) {
    width: 100%;
  }
  transition: width 0.5s;
`;
export const StyledLink = styled.a`
  color: blue;
  text-decoration: none;
`;
const StyledInput = styled.input`
  display: block;
  margin: 20px 0px;
  border: 1px solid lightblue;
`;

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  function onChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange,
  };
}
function App() {

  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  console.log(data);
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
    let cost = data.fee;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mintTest(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };
  const sendwithdraw = () => {
    let gasLimit = CONFIG.GAS_LIMIT;
    let inputv=(inputProps.value);
    let totalCostWei = String(inputv+'000000000000000000');
    console.log(totalCostWei)
    let totalGasLimit = String(gasLimit * 100);
    blockchain.smartContract.methods
      .withdraw()
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: String(0),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        
        dispatch(fetchData(blockchain.account));
      });
  };
  const updatePrice = () => {
    let gasLimit = CONFIG.GAS_LIMIT;
    let inputv=(inputProps.value);
    let totalCostWei = String(inputv+'000000000000000000');
    console.log(totalCostWei)
    let totalGasLimit = String(gasLimit * mintAmount);
    blockchain.smartContract.methods
      .updateFee(totalCostWei)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: String(0),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        
        dispatch(fetchData(blockchain.account));
      });
  };
  const whitelister= () => {
    let gasLimit = CONFIG.GAS_LIMIT;
    let inputv=String(inputProps1.value);
    let totalGasLimit = String(gasLimit * mintAmount);
    blockchain.smartContract.methods
      .whitelistUser(inputv)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: String(0),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        
        dispatch(fetchData(blockchain.account));
      });
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
  const names = [['Update Price',updatePrice], ['Whitelist',whitelister], ['Withdraw',sendwithdraw], ['Buy',claimNFTs] ];
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
  const inputProps = useInput();
  const inputProps1 = useInput();
  return (
    <s.Screen>
     
      <s.Container
        flex={1}
        ai={"center"}
        id="Home"
        style={{ padding: 0, backgroundColor: "black", flexDirection:"column" }}
      >
        
         
       
        <s.SpacerLarge />
        <s.SpacerLarge />
        <s.SpacerLarge />
       
       
        
        <s.Container flex={1} jc={"center"} ai={"center"} fd={"row"}>
        <s.Container flex={.3} jc={"center"} ai={"center"} fd={"column"}>
        </s.Container>

        <s.Container flex={.7} jc={"center"} ai={"center"} fd={"column"}>
          
        <s.Container flex={2} jc={"center"} ai={"left"} >
        <s.TextTitle
              style={{
                textAlign: "left",
                fontSize: 35,
                fontWeight: "bold",
                color: "white",
                fontFamily:"Poppins, sans-serif"
              

              }}
            >
              <s.SpacerLarge /><s.SpacerLarge />
           *CollectioName* Controller
            </s.TextTitle>
          </s.Container>
          
          <s.Container flex={1} jc={"center"} ai={"left"}>
          <s.SpacerLarge />
          <s.SpacerLarge />
          <s.SpacerLarge />
          <s.SpacerLarge />
          <s.SpacerLarge />
          <s.SpacerLarge />
          <s.TextTitle
              style={{
                textAlign: "left",
                fontSize: 20,
                fontWeight: "",
                color: "white",
                fontFamily:"Poppins, sans-serif"

              }}
            >
          
          </s.TextTitle>
          <s.TextTitle
              style={{
                textAlign: "left",
                fontSize: 20,
                fontWeight: "",
                color: "white",
                fontFamily:"Poppins, sans-serif"

              }}
            >
          
        
          <s.SpacerLarge />
          </s.TextTitle>
          <s.Container
            flex={2}
            jc={"center"}
            ai={"center"}
            style={{
              backgroundColor: "grey",
              padding: 24,
              borderRadius: 24,
             
              boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
            }}
          >
            
              
              <ResponsiveWrapper flex={1} style={{ padding: 24, color:"#ffc107" }} test>
          <s.Container
            flex={2}
            jc={"center"}
            ai={"center"}
            style={{
              backgroundColor: "clear",
              padding: 5,
              borderRadius: 0,
              border: "0px var(--secondary)",
              boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.7)",
            }}
          >
            
            <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 50,
                fontWeight: "bold",
                color: "",
              }}
            >
              
          
            </s.TextTitle>
            <s.TextDescription
              style={{
                textAlign: "center",
                color: "#ffc107",
              }}
            >
              <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
                
              </StyledLink>
            </s.TextDescription>
            <s.SpacerSmall />
            {Number(data.totalMintAmount) >= CONFIG.MAX_SUPPLY ? (
              <>
                <s.TextTitle
                  style={{ textAlign: "center", color: "#ffc107" }}
                >
                  The sale has ended.
                </s.TextTitle>
                <s.TextDescription
                  style={{ textAlign: "center", color: "#ffc107" }}
                >
                  You can still find {CONFIG.NFT_NAME} on
                </s.TextDescription>
                <s.SpacerSmall />
                <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                  {CONFIG.MARKETPLACE}
                </StyledLink>
              </>
            ) : (
              <>
                <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                
                </s.TextTitle>
                <s.SpacerXSmall />
                <s.TextDescription
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                 
                </s.TextDescription>
                <s.SpacerSmall />
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <s.Container ai={"center"} jc={"center"}>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      Connect to the {CONFIG.NETWORK.NAME} network
                      
                    </s.TextDescription>
                    <s.SpacerSmall />
                    <StyledButton
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    >
                      Connect
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
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      {feedback}
                    </s.TextDescription>
                    <s.SpacerMedium />
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      
                      <s.SpacerMedium />
                      
                      
                      <s.SpacerMedium />
                      
                    </s.Container>
                    <s.SpacerSmall />
                    
                    <s.Container ai={"center"} jc={"center"} fd={"column"}>
                    <s.Container ai={"center"} jc={"center"} fd={"column"}>
                    Change Mint Price:   
                    
                    <StyledInput
        {...inputProps}
        placeholder="Type in here"
      />
    
                     
                      </s.Container>
                      <s.SpacerMedium />
                     
                      
                      <s.Container ai={"center"} jc={"center"} fd={"column"}>
                    Add Address to Whitelist:
                    
                    <StyledInput
        {...inputProps1}
        placeholder="Type in here"
      />
     
                     
                      </s.Container>
                      <s.SpacerMedium />
                      <div>
      {names.map(name => (
        <div>
          <s.SpacerLarge />
          <StyledButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          name[1]();
                          getData();
                        }}
                      >
                        
                        {claimingNft ? "BUSY" : name[0]}
                      </StyledButton>
        </div>
      ))}
    </div>
                   

                      <s.Container ai={"center"} jc={"center"} fd={"column"}>
                   
                      
                   
                      
                      </s.Container>
                   
                
                      

                     
                    </s.Container>
                  </>
                )}
              </>
            )}
            
         
          </s.Container>
          <s.SpacerLarge />
          
        </ResponsiveWrapper>
              </s.Container>
    
   
          </s.Container>
          </s.Container>
          
          <s.Container flex={1} jc={"center"} ai={"center"}>
          <s.SpacerMedium />
          
         
          <StyledImg
              alt={"example"}
              src={"/config/images/example.png"}
              style={{ transform: "scaleX(1)" }}
            />
          <s.SpacerMedium />
          
            <s.TextDescription
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 24
            }}
          >
            Analytics
          </s.TextDescription>
          <s.SpacerMedium />
          <s.TextDescription
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16
            }}
          >
           Total Minted: {data.totalMintAmount}
           
          </s.TextDescription>
          <s.TextDescription
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16
            }}
          >
           Price in MATIC: {data.fee/1000000000000000000}
           
          </s.TextDescription>
         
          </s.Container>
          <s.Container flex={.2} jc={"center"} ai={"center"} fd={"column"}>
        </s.Container>
          </s.Container>
         
          <s.SpacerLarge />
          
        <s.SpacerMedium />
        
        <s.Container jc={"center"} ai={"center"} style={{ width: "70%" }}>
          
          <s.SpacerSmall />
          <s.TextDescription
            style={{
              textAlign: "center",
              color: "var(--primary-text)",
            }}
          >
           
          </s.TextDescription>
          
        </s.Container>
        
        <s.Container flex={.2} jc={"center"} ai={"center"} fd={"column"} backgroundColor={"white"} color={"white"}>
      
        </s.Container>
        
        <StyledImg5
              alt={"example"}
              src={"/config/images/mask.png"}
              style={{ transform: "scaleX(1)" }}
            />
      </s.Container>
      <s.Container flex={2} jc={"center"} ai={"center"} fd={"row"} backgroundColor={"white"} color={"white"} id="About">
      
      
            
        </s.Container>
        
       
        
       
      
    </s.Screen>
  );
}

export default App;
