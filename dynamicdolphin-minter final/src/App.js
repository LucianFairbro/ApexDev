import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand
} from 'reactstrap';
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

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
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
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mintDolphin(mintAmount)
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

  return (
    <s.Screen>
      
      <s.Container
        flex={1}
        ai={"center"}
        id="Home"
        style={{ padding: 0, backgroundColor: "#4da3ff", flexDirection:"column" }}
      >
        <Navbar fixed= "top" color=""  >
        <s.Container flex={2} style={{ padding: 20, backgroundColor: "#007bff", flexDirection:"row" }}>
        <s.Container flex={.06}>
        <StyledImg3
              alt={"example"}
              src={"/config/images/example.png"}
              style={{ transform: "scaleX(1)" }}
            />
        </s.Container>
        <s.Container flex={1}>
        
          <s.TextTitle
              style={{
                textAlign: "left",
                fontSize: 15,
                fontWeight: "bold",
                color: "white",
                fontFamily:"Poppins, sans-serif"
              

              }}
            >
            DYNAMIC DOLPHINS
            </s.TextTitle></s.Container>
        <s.Container flex={.09}><a href="#Home" >
            <s.TextTitle
              style={{
                textAlign: "left",
                fontSize: 15,
                fontWeight: "bold",
                color: "white",
                fontFamily:"Poppins, sans-serif"
              

              }}
            >HOME</s.TextTitle>
              </a></s.Container>
        
        <s.Container flex={.1}> <a href="#About" >
            <s.TextTitle
              style={{
                textAlign: "left",
                fontSize: 15,
                fontWeight: "bold",
                color: "white",
                fontFamily:"Poppins, sans-serif"
              

              }}
            >ABOUT</s.TextTitle>
              </a></s.Container>
        <s.Container flex={.12}>
            <a href="#Lorem_Ipsum" >
            <s.TextTitle
              style={{
                textAlign: "left",
                fontSize: 15,
                fontWeight: "bold",
                color: "white",
                fontFamily:"Poppins, sans-serif"
              

              }}
            >ROADMAP</s.TextTitle>
              </a>
          </s.Container>
        <s.Container flex={.09}><a href="#Team" >
            <s.TextTitle
              style={{
                textAlign: "left",
                fontSize: 15,
                fontWeight: "bold",
                color: "white",
                fontFamily:"Poppins, sans-serif"
              

              }}
            >TEAM</s.TextTitle>
              </a></s.Container>
        
        <s.Container flex={.12}><a href="https://discord.com/" >
            <s.TextTitle
              style={{
                textAlign: "left",
                fontSize: 15,
                fontWeight: "bold",
                color: "white",
                fontFamily:"Poppins, sans-serif"
              

              }}
            >DISCORD</s.TextTitle>
              </a></s.Container>
        <s.Container flex={.1}><a href="https://twitter.com/Social_Dolphins" >
            <s.TextTitle
              style={{
                textAlign: "left",
                fontSize: 15,
                fontWeight: "bold",
                color: "white",
                fontFamily:"Poppins, sans-serif"
              

              }}
            >TWITTER</s.TextTitle>
              </a></s.Container>
        </s.Container>
                
            </Navbar>
         
       
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
            Dynamic Dolphins
            </s.TextTitle>
          </s.Container>
          
          <s.Container flex={1} jc={"center"} ai={"left"}>
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
          5,000 Community-Driven Dynamic Dolphins
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
          depart for Polygon soon!
          <s.SpacerLarge />
          </s.TextTitle>
          <s.Container
            flex={2}
            jc={"center"}
            ai={"center"}
            style={{
              backgroundColor: "#ffce88",
              padding: 24,
              borderRadius: 24,
             
              boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
            }}
          >
            <s.TextTitle
          style={{
            textAlign: "left",
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            fontFamily:"Poppins, sans-serif"

          }}
        >
      Dynamic Dolphins - 3 Matic
      
      </s.TextTitle>
              
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
                      <StyledRoundButton
                        style={{ lineHeight: 0.4 }}
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                      >
                        -
                      </StyledRoundButton>
                      <s.SpacerMedium />
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        {mintAmount}
                      </s.TextDescription>
                      <s.SpacerMedium />
                      <StyledRoundButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                      >
                        +
                      </StyledRoundButton>
                    </s.Container>
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
                        {claimingNft ? "BUSY" : "BUY"}
                      </StyledButton>
                    </s.Container>
                  </>
                )}
              </>
            )}
            <s.SpacerMedium />
          </s.Container>
          <s.SpacerLarge />
          
        </ResponsiveWrapper>
              </s.Container>
    
   
          </s.Container>
          </s.Container>
          <s.Container flex={1} jc={"center"} ai={"center"}>
          <s.SpacerMedium />
          <s.SpacerMedium />
          <s.SpacerMedium />
          <StyledImg
              alt={"example"}
              src={"/config/images/example.png"}
              style={{ transform: "scaleX(1)" }}
            />
          </s.Container>
          <s.Container flex={.2} jc={"center"} ai={"center"} fd={"column"}>
        </s.Container>
          </s.Container>
         
          <s.SpacerLarge />
          
        <s.SpacerMedium />
        
        <s.Container jc={"center"} ai={"center"} style={{ width: "70%" }}>
          <s.TextDescription
            style={{
              textAlign: "center",
              color: "var(--primary-text)",
            }}
          >
            
          </s.TextDescription>
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
      <s.Container flex={2} jc={"center"} ai={"center"} fd={"column"} backgroundColor={"white"} color={"white"}>
      <s.SpacerLarge />
      <s.SpacerLarge />
      <s.SpacerLarge />
      <StyledImg2
              alt={"example"}
              src={"/config/images/back.png"}
              style={{ transform: "scaleX(1)" }}
            />
              <s.SpacerLarge />
      <s.SpacerLarge />
      <s.SpacerLarge />
      </s.Container>
      <s.Container flex={2} jc={"center"} ai={"center"} fd={"column"} backgroundColor={"white"} color={"white"}>

    <s.TextTitle
              style={{
                textAlign: "left",
                fontSize: 30,
                fontWeight: "bold",
                color: "#1b30a4",
                fontFamily:"Poppins, sans-serif"
              

              }}
            >
            What are Dynamic Dolphins?
            </s.TextTitle>
            <s.SpacerLarge />
            <s.TextTitle
              style={{
                textAlign: "left",
                fontSize: 15,
                fontWeight: "",
                color: "black",
                fontFamily:"Poppins, sans-serif"
              

              }}
            >
            Dynamic Dolphins are a collection of 5,000 high-quality dolphins, each unique in their own way. We are community-led with a focus on creating long-term benefits for our holders and making an extraordinary impact on Dolphin exploitation and conservation.
            </s.TextTitle>
            
            
        </s.Container>
        <s.Container flex={1} jc={"center"} ai={"center"} fd={"column"} backgroundColor={"white"} color={"white"}>
            </s.Container>
            
        </s.Container>
        <s.Container
        flex={1}
        id="Lorem_Ipsum"
        ai={"center"}
        style={{ padding: 20, backgroundColor: "#BBDBF7", flexDirection:"column" }}
      >
         <StyledImg1
              alt={"example"}
              src={"/config/images/road.png"}
              style={{ transform: "scaleX(1)" }}
            />
        </s.Container>
       
        <s.Container
        flex={1}
        ai={"center"}
        id="Team"
        style={{ padding: 20, backgroundColor: "#BBDBF7", flexDirection:"column" }}
      >
          <s.SpacerLarge />
        <s.SpacerLarge />
        <s.SpacerLarge />
        
        <s.SpacerLarge />
        <s.SpacerLarge />
        <s.TextTitle
              style={{
                textAlign: "left",
                fontSize: 30,
                fontWeight: "bold",
                color: "white",
                fontFamily:"Poppins, sans-serif"
              

              }}
            >
            OUR TEAM
            </s.TextTitle>
            <s.SpacerLarge />
        <s.SpacerLarge />
       
        <s.SpacerLarge />
        </s.Container>
        
        <s.Container
        flex={1}
        ai={"center"}
        style={{ padding: 20, backgroundColor: "#BBDBF7", flexDirection:"row" }}
      >
        <s.Container flex={.4}></s.Container>
        <s.Container flex={.1}><StyledImg4
              alt={"example"}
              src={"/config/images/person1.png"}
              style={{ transform: "scaleX(1)" }}
            />
            <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: "bold",
                color: "white",
                fontFamily:"Poppins, sans-serif"
              

              }}
            >
            Lucian - Programming Director
            </s.TextTitle>
            <s.SpacerLarge />
        <s.SpacerLarge />
            </s.Container>
            <s.Container flex={.1}></s.Container>
        <s.Container flex={.1}><StyledImg4
              alt={"example"}
              src={"/config/images/person2.png"}
              style={{ transform: "scaleX(1)" }}
            />
            <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: "bold",
                color: "white",
                fontFamily:"Poppins, sans-serif"
              

              }}
            >
           Jenny - Solidity Programmer
            </s.TextTitle>
            <s.SpacerLarge />
        <s.SpacerLarge />
            </s.Container>
            <s.Container flex={.1}></s.Container>
        <s.Container flex={.6}>
        <StyledImg4
              alt={"example"}
              src={"/config/images/person3.png"}
              style={{ transform: "scaleX(1)" }}
            />
            
            <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: "bold",
                color: "white",
                fontFamily:"Poppins, sans-serif"
              

              }}
            >
            Abby - JavaScript Programmer
            </s.TextTitle>
            <s.SpacerLarge />
        <s.SpacerLarge />
        </s.Container>
        
      </s.Container>
      
      <s.Container
        flex={1}
        ai={"center"}
        style={{ padding: 20, backgroundColor: "#ffce88", flexDirection:"column" }}
      >
        <s.SpacerLarge />
         <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 25,
                fontWeight: "bold",
                color: "white",
                fontFamily:"Poppins, sans-serif"
              

              }}
            >
            Join Our Community
            </s.TextTitle>
            <s.SpacerLarge />
            <s.SpacerLarge />
            <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: "",
                color: "black",
                fontFamily:"Poppins, sans-serif"
              

              }}
            >
            Copyright © 2022, Dynamic Dolphins.

            </s.TextTitle>
            <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: "",
                color: "black",
                fontFamily:"Poppins, sans-serif"
              

              }}
            >
          All trademarks and copyrights belong to their respective owners.

            </s.TextTitle>
            <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: "",
                color: "black",
                fontFamily:"Poppins, sans-serif"
              

              }}
            >
          Built by Apex Digital Development

            </s.TextTitle>
            <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: "",
                color: "black",
                fontFamily:"Poppins, sans-serif"
              

              }}
            >
          All Content exists on the Polygon Blockchain

            </s.TextTitle>
        </s.Container>
    </s.Screen>
  );
}

export default App;
