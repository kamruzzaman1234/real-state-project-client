
import LocationProparty from "../LocationPropaty/LocationProparty";
import AgentsArea from "./AgentsArea/AgentsArea";
import BackgroundImg from "./BackgroundImg/BackgroundImg";
import Banner from "./Banner/Banner";
import ClientDes from "./ClientDes/ClientDes";
import DreamHouseContact from "./DreamHouseContact/DreamHouseContact";
import Features from "./Features/Features";
import Propartes from "./Propartes/Propartes";

const Home = ()=>{
    return(
        <div>
                <div>
                <Banner></Banner>
                </div>
                <div className="max-w-7xl mx-8 md:mx-12 lg:mx-auto">
                    <Propartes></Propartes>
                    <LocationProparty></LocationProparty>
                </div>
                <div >
                    <Features></Features>
                </div>
                <div className="max-w-7xl mx-8 md:mx-12 lg:mx-auto">
                    <AgentsArea></AgentsArea>
                </div>
                <div>
                    <BackgroundImg></BackgroundImg>
                    <ClientDes></ClientDes>
                    <DreamHouseContact></DreamHouseContact>
                </div>
        </div>
    )
}
export default Home;