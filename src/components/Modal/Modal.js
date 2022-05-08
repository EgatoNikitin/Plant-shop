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
                <li><img alt="#" src={ElipceIcon} /> Calathea Silhouette</li>
                <li>Calathea Veitchiana Hook.<img alt="#" src={BascetIcon} className='basket' /></li>
                <li>Calathea Orbifolia <img alt="#" src={BascetIcon} className='basket' /></li>
                <li>Calathea Minature <img alt="#" src={BascetIcon} className='basket' /></li>
                <li><img alt="#" src={ElipceIcon} /> Calathea Lietzei ‘Fusion White’</li>
                <li>Monstera Deliciosa<img alt="#" src={BascetIcon} className='basket' /></li>
                <li>Anthurium Clarinervium <img alt="#" src={BascetIcon} className='basket' /></li>
                <li><img alt="#" src={ElipceIcon} /> Fancy-leaf Caladium </li>
                <li><img alt="#" src={ElipceIcon} /> Billbergia Viridis</li>
            </ul>
        </div>
    )
}