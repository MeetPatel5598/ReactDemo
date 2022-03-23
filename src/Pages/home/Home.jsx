import {Sidebar} from "../../Components/sidebar/Sidebar";
import {Navbar} from "../../Components/navbar/Navbar";
import {Widget} from "../../Components/widget/Widget";
import "./home.scss";

export const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
       <div className="widgets">
         <Widget/>
         <Widget/>
         <Widget/>
         <Widget/>
       </div>
      </div>
    </div>
  )
}
