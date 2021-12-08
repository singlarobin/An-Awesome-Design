import classes from './styles.module.css';
import bucketIcon from '../../assets/icons/icon-bucket.png';
import humanIcon from '../../assets/icons/icon-human.png';
import signboardIcon from '../../assets/icons/icon-signboard.png';
import trophyIcon from '../../assets/icons/icon-trophy.png';

const List = () => {
    return <div className={classes.container}>
        <div className={classes.subContainer}>
            <img className={classes.bucketImg} src={bucketIcon} alt='Bucket Icon' />
            <div className={classes.heading}>Unique Design</div>
            <div className={classes.text}>Lorem ex proident laborum nostrud consequat ullamco duis</div>
        </div>
        <div className={classes.subContainer}>
            <img className={classes.signboardImg} src={signboardIcon} alt='Signboard Icon' />
            <div className={classes.heading}>User Friendly</div>
            <div className={classes.text}>Lorem ex proident laborum nostrud consequat ullamco duis</div>
        </div>
        <div className={classes.subContainer}>
            <img className={classes.humanImg} src={humanIcon} alt='Human Icon' />
            <div className={classes.heading}>Excellent Support</div>
            <div className={classes.text}>Lorem ex proident laborum nostrud consequat ullamco duis</div>
        </div>
        <div className={classes.subContainer}>
            <img className={classes.trophyImg} src={trophyIcon} alt='Trophy Icon' />
            <div className={classes.heading}>App Of the Year</div>
            <div className={classes.text}>Lorem ex proident laborum nostrud consequat ullamco duis</div>
        </div>
    </div>
};

export default List;