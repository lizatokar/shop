import './Main.css';
import woman1 from '../../assets/img/Items/womenFirst.jpg';
import woman2 from '../../assets/img/Items/womenSecond.jpg';
import woman3 from '../../assets/img/Items/womenThird.jpg';
import man1 from '../../assets/img/Items/menFirst.jpg';
import man2 from '../../assets/img/Items/menSecond.jpg';
import man4 from '../../assets/img/Items/menFourth.jpg';
import bag1 from '../../assets/img/Items/bagFirst.jpg';
import bag2 from '../../assets/img/Items/bagSecond.png';
import bag3 from '../../assets/img/Items/bagThird.jpg';
import bag4 from '../../assets/img/Items/bagFourth.jpg';
import bag6 from '../../assets/img/Items/bagSixth.jpg';
import bag7 from '../../assets/img/Items/bagSeventh.jpg';
import accessory1 from '../../assets/img/Items/accessoriesOne.jpg';
import accessory2 from '../../assets/img/Items/accessoriesTwo.jpg';
import accessory5 from '../../assets/img/Items/accessoriesFifth.jpg';

const Main = () => {
    return (
        <div className='Main'>
            <main>
                <section>
                    <h2>women</h2>
                    <div className='Images'>
                        <img src={woman1} alt='woman_clothes'/>
                        <img src={woman2} alt='woman_clothes'/>
                        <img src={woman3} alt='woman_clothes'/>
                    </div>
                    <h2>men</h2>
                    <div className='Images'>
                        <img src={man4} alt='man_clothes'/>
                        <img src={man1} alt='man_clothes'/>
                        <img src={man2} alt='man_clothes'/>
                    </div>
                    <h2>bags</h2>
                    <div className='BagItems'>
                    <div className='Bags'>
                        <img src={bag1} alt='bag'/>
                        <img src={bag2} alt='bag'/>
                        <img src={bag3} alt='bag'/>
                        <img src={bag4} alt='bag'/>
                        <img src={bag7} alt='bag'/>
                        <img src={bag6} alt='bag'/>
                    </div>
                    </div>
                    <h2>accessories</h2>
                    <div className='Images'>
                        <img src={accessory2} alt='accessory'/>
                        <img src={accessory5} alt='accessory'/>
                        <img src={accessory1} alt='accessory'/>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Main;