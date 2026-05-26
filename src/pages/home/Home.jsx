import Background from "../../components/background/Background";
import Cards from "../../components/cards/Cards";
import Pictures from "../../components/pictures/Pictures";
import Why from "../../components/whyus/why";

export default function Home(){
    return(
        <div>
            <Background/>
            <Cards/>
            <Why/>
            <Pictures/>
        </div>
    )
}