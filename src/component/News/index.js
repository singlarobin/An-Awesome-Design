import classes from './styles.module.css';
import postImg2 from '../../assets/images/img-post-two.jpg';
import postImg3 from '../../assets/images/img-post-three.jpg';
import ArrowUpIcon from '../../assets/icons/arrowUpIcon';

const News = () => {
    return <div className={classes.container}>
        <div className={classes.header}>
            <div className={classes.heading}>Latest <span>News</span></div>
            <div className={classes.subHeading}>Lorem ipsum esse aliquip quis occaecat velit aliquip aliquip deserunt tempor elit quis ea.</div>
        </div>
        <div className={classes.content}>
            <div className={classes.leftContainer}>
                <div className={classes.textContainer}>
                    <div className={classes.date}>20 April 2016</div>
                    <div className={classes.text}>Amazing For App</div>
                    <div className={classes.subText}>{`Lorem ipsum consequat est exercitation qui sint excepteur cillum id velit.`}</div>

                </div>
            </div>
            <div className={classes.rightContainer}>
                <div className={classes.newsContainer}>
                    <img className={classes.imagePostDiv} src={postImg2} alt='Not Found' />
                    <div className={classes.newsContent}>
                        <div className={classes.newsDate}>20 April 2016</div>
                        <div className={classes.newsHeading}>Amazing For App</div>
                        <div className={classes.newsText}>{`Lorem ipsum consequat est exercitation qui sint excepteur cillum id velit.`}</div>
                    </div>
                </div>

                <div className={classes.newsContainer}>
                    <img className={classes.imagePostDiv} src={postImg3} alt='Not Found' />
                    <div className={classes.newsContent}>
                        <div className={classes.newsDate}>20 April 2016</div>
                        <div className={classes.newsHeading}>Amazing For App</div>
                        <div className={classes.newsText}>{`Lorem ipsum consequat est exercitation qui sint excepteur cillum id velit.`}</div>
                    </div>
                </div>

                <div className={classes.newsContainer}>
                    <img className={classes.imagePostDiv} src={postImg2} alt='Not Found' />
                    <div className={classes.newsContent}>
                        <div className={classes.newsDate}>20 April 2016</div>
                        <div className={classes.newsHeading}>Amazing For App</div>
                        <div className={classes.newsText}>{`Lorem ipsum consequat est exercitation qui sint excepteur cillum id velit.`}</div>
                    </div>
                </div>
            </div>
        </div>
        <div className={classes.iconDiv}><ArrowUpIcon /></div>
    </div>
};

export default News;