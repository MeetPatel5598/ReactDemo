import {Sidebar} from "../../Components/sidebar/Sidebar";
import {Navbar} from "../../Components/navbar/Navbar";
import {Widget} from "../../Components/widget/Widget";
import "./home.scss";
import { Featured } from "../../Components/featured/Featured";
import { Charts } from "../../Components/charts/Charts";

export const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
       <div className="widgets">
         <Widget type="user"/>
         <Widget type="order"/>
         <Widget type="earning"/>
         <Widget type="balance"/>
       </div>
       <div className="charts">
         <Featured/>
         <Charts/>
       </div>
      </div>
    </div>
  )
}
