import classes from './styles.module.css';
import bgTitled from '../../assets/images/bg-tilted.png'
import ArrowDownIcon from '../../assets/icons/arrowDownIcon';

const Choose = () => {
    return <div className={classes.container}>
        <img className={classes.imageDiv} src={bgTitled} alt='Not Found' />
        <div className={classes.rightContainer}>
            <div className={classes.heading}><span>Why</span> Choose Avante</div>
            <div className={classes.topContainer}>
                <div className={classes.text}> et cupidatat aliquip id elit tempor</div>
                <ArrowDownIcon />
            </div>
                <div className={classes.midContainer}>
                    <div className={classes.subHeading}>voluptate enim occaecat fugiat</div>
                    <div className={classes.subText}>Lorem ipsum laborum qui cupidatat aute et mollit pariatur consequat eu id aute non nisi excepteur fugiat.</div>
                </div>
            <div className={classes.topContainer}>
                <div className={classes.text}>dolore ipsum sint cupidatat amet</div>
                <ArrowDownIcon />
            </div>
            <div className={classes.topContainer}>
                <div className={classes.text}> non elit pariatur pariatur</div>
                <ArrowDownIcon />
            </div>
        </div>
    </div>;
}

export default Choose;