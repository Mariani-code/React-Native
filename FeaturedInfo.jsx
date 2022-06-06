import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">New Technology Submissions</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">15</span>
          <span className="featuredMoneyRate">
            +11 <ArrowUpward  className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Number of Technologies Unscored</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">24</span>
          <span className="featuredMoneyRate">
            +9 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Number of Technologies Recently Scored</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">5</span>
          <span className="featuredMoneyRate">
            -2 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}