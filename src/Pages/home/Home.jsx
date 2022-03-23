import {Sidebar} from "../../Components/sidebar/Sidebar";
import {Navbar} from "../../Components/navbar/Navbar";
import "./home.scss";

export const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        home cointainer
      </div>
    </div>
  )
}
