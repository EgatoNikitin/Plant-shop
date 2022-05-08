import ElipceIcon from "../assests/backgrounds/O.png";
import BascetIcon from "../assests/backgrounds/Basket.png";

import './Modal.scss'

export const Modal = ({ isOpen }) => {
    return (

        isOpen && <div className="modalWrapper">
            <div className='modalTitle'>
                <h3>Foliage for plants</h3>
                <p>21 PLANTS</p>
            </div>
            <ul>
                <li><img src={ElipceIcon} /> <span>Calathea Silhouette</span></li>
                <li><span>Calathea Veitchiana Hook.</span><img src={BascetIcon} /></li>
                <li><span>Calathea Orbifolia</span> <img src={BascetIcon} /></li>
                <li><span>Calathea Minature</span> <img src={BascetIcon} /></li>
                <li><img src={ElipceIcon} /><span>Calathea Lietzei ‘Fusion White’</span></li>
                <li><span>Monstera Deliciosa</span> <img src={BascetIcon} /></li>
                <li><span>Anthurium Clarinervium</span> <img src={BascetIcon} /></li>
                <li><img src={ElipceIcon} /><span>Fancy-leaf Caladium</span> <img src={BascetIcon} /></li>
                <li><img src={ElipceIcon} /><span>Billbergia Viridis</span><img src={BascetIcon} /></li>
            </ul>
        </div>
    )
}