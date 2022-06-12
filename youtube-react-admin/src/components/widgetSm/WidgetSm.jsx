import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Your Card</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://apexcards.s3.amazonaws.com/black/1.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
          
          </div>
          
        </li>
        <li className="widgetSmListItem">
        <span className="widgetSmTitle">Your Hours:  22</span>
        </li>
        <li className="widgetSmListItem">
          <span className="widgetSmUsername">0.1 ETH Per Hour</span>
          <input></input>
            <span className="widgetSmUserTitle"></span>
            <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            BUY HOURS
          </button>
            </li>
        
        
        
      </ul>
    </div>
  );
}
