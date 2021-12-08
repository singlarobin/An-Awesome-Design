import classes from './styles.module.css';
import AndrodIcon from '../../assets/icons/androidIcon';
import IosIcon from '../../assets/icons/iosIcon';
import sliderImg from '../../assets/images/slider-img.png'

const Header = () => {
    return <div className={classes.container}>
        <div className={classes.heading}>
            <div className={classes.head1}>We're happy to tell you about our new product</div>
            <div className={classes.head2}>AN AWESOME DESIGN</div>
            <div className={classes.type}>
                <div className={classes.buttonDiv}>
                    <IosIcon />
                    <div className={classes.text}>Apple IOS</div>
                </div>
                <div className={classes.buttonDiv}>
                    <AndrodIcon />
                    <div className={classes.text}>Android</div>
                </div>
            </div>
        </div>
        <img className={classes.imgDiv} src={sliderImg} alt='Not Found'/>
    </div>;
}

export default Header;