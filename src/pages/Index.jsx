import Accordion from "../components/Accordion"
import Cards from "../components/Cards"
import Casino from "../components/Casino"
import Ellos from "../components/Ellos"
import Footer from "../components/Footer"
import FooterTopSec from "../components/FooterTopSec"
import Header from "../components/Header"
import Jackpot from "../components/Jackpot"
import PokerSec from "../components/PokerSec"
import Seven from "../components/Seven"
import Slots from "../components/Slots"

const Index = () => {
    return (
        <div>
            <Header />
            <PokerSec />
            <Slots />
            <Jackpot />
            <Casino />
            <Seven />
            <Cards />
            <Ellos />
            <Accordion />
            <FooterTopSec />
            <Footer />
        </div>
    )
}

export default Index
