import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Card Number</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">1</span>
          <span className="featuredMoneyRate">
           
          </span>
        </div>
     
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Card Style</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Black</span>
          <span className="featuredMoneyRate">
           
          </span>
        </div>
       
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">.1 ETH/HR</span>
          <span className="featuredMoneyRate">
           
          </span>
        </div>
     
      </div>
    </div>
  );
}
