import classes from './styles.module.css';
import PhoneIcon from '../../assets/icons/phoneIcon';
import UserIcon from '../../assets/icons/userIcon';
import DownloadIcon from '../../assets/icons/downloadIcon';
import MailIcon from '../../assets/icons/mailIcon';

const Facts = () => {
    return <div className={classes.container}>
        <div className={classes.header}>Some <span>Facts</span></div>
        <div className={classes.content}>
            <div className={classes.subContainer}>
                <div className={classes.outer}>
                    <div className={classes.inner}>
                        <div className={classes.heading}>1991</div>
                        <div className={classes.text}>Calls</div>
                    </div>
                    <div className={classes.iconDiv}>
                        <PhoneIcon />
                    </div>
                </div>
            </div>
            <div className={classes.subContainer}>
                <div className={classes.outer}>
                    <div className={classes.inner}>
                        <div className={classes.heading}>4047</div>
                        <div className={classes.text}>User</div>
                    </div>
                    <div className={classes.iconDiv}>
                        <UserIcon />
                    </div>
                </div>
            </div>
            <div className={classes.subContainer}>
                <div className={classes.outer}>
                    <div className={classes.inner}>
                        <div className={classes.heading}>10000</div>
                        <div className={classes.text}>Downloads</div>
                    </div>
                    <div className={[classes.iconDiv, classes.downloadIcon].join(' ')}>
                        <DownloadIcon />
                    </div>
                </div>
            </div>
            <div className={classes.subContainer}>
                <div className={classes.outer}>
                    <div className={classes.inner}>
                        <div className={classes.heading}>2390</div>
                        <div className={classes.text}>Mails</div>
                    </div>
                    <div className={classes.iconDiv}>
                        <MailIcon />
                    </div>
                </div>
            </div>
        </div>

    </div>;
};

export default Facts;