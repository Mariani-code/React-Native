import FeaturedInfo from "../../featuredInfo/FeaturedInfo"
import "./home.css"
import Chart from "../../Charts/Chart"
import WidgetLg from "../../widgetLg/WidgetLg"
import WidgetSm from "../../widgetSm/WidgetSm"

export default function Home() { 

    return ( 
        <div className = "home"> 
            <FeaturedInfo/>
            <Chart/>
            <div className="homeWidgets">
                <WidgetSm/> 
                <WidgetLg/> 
            </div> 
        </div> 
    )
}