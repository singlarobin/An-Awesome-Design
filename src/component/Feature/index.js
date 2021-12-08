import classes from './styles.module.css';
import phoneImg from '../../assets/images/phone-img.png';
import UpdateIcon from '../../assets/icons/updateIcon';

const Feature = () => {
    return <div className={classes.container}>
        <div className={classes.heading}>Amazing <span> Features </span></div>
        <div className={classes.subContainer}>
            <div className={classes.list}>
                <div className={classes.listContainer}>
                    <div className={classes.icon_div}>
                        <div className={classes.icon_parent}>
                            <UpdateIcon />
                        </div>
                    </div>
                    <div className={classes.text_div}>
                        <div className={classes.text_heading}>CLEAN DESIGN</div>
                        <div className={classes.text}>{`Lorem ipsum nisi et proident est aliquip ut laboris non ex enim ut qui dolore.`}
                        </div>
                    </div>
                </div>
                <div className={classes.listContainer}>
                    <div className={classes.icon_div}>
                        <div className={classes.icon_parent}>
                            <UpdateIcon />
                        </div>
                    </div>
                    <div className={classes.text_div}>
                        <div className={classes.text_heading}>54 LANGUAGES</div>
                        <div className={classes.text}>{`Lorem ipsum nisi et proident est aliquip ut laboris non ex enim ut qui dolore.`}
                        </div>
                    </div>
                </div>
                <div className={classes.listContainer}>
                    <div className={classes.icon_div}>
                        <div className={classes.icon_parent}>
                            <UpdateIcon />
                        </div>
                    </div>
                    <div className={classes.text_div}>
                        <div className={classes.text_heading}>5000+ SUPPORTERS</div>
                        <div className={classes.text}>{`Lorem ipsum nisi et proident est aliquip ut laboris non ex enim ut qui dolore.`}
                        </div>
                    </div>
                </div>
            </div>

            <img className={classes.imageDiv} src={phoneImg} alt='Not Found' />

            <div className={[classes.list, classes.afterImgList].join(' ')}>
                <div className={classes.listContainer}>
                    <div className={classes.text_divRight}>
                        <div className={classes.text_heading}>FAST CONNECT</div>
                        <div className={classes.text}>{`Lorem ipsum nisi et proident est aliquip ut laboris non ex enim ut qui dolore.`}
                        </div>
                    </div>
                    <div className={classes.icon_div}>
                        <div className={classes.icon_parent}>
                            <UpdateIcon />
                        </div>
                    </div>
                </div>
                <div className={classes.listContainer}>
                    <div className={classes.text_divRight}>
                        <div className={classes.text_heading}>FREE UPDATE</div>
                        <div className={classes.text}>{`Lorem ipsum nisi et proident est aliquip ut laboris non ex enim ut qui dolore.`}
                        </div>
                    </div>
                    <div className={classes.icon_div}>
                        <div className={classes.icon_parent}>
                            <UpdateIcon />
                        </div>
                    </div>
                </div>
                <div className={classes.listContainer}>
                    <div className={classes.text_divRight}>
                        <div className={classes.text_heading}>60+ THEMMES</div>
                        <div className={classes.text}>{`Lorem ipsum nisi et proident est aliquip ut laboris non ex enim ut qui dolore.`}
                        </div>
                    </div>
                    <div className={classes.icon_div}>
                        <div className={classes.icon_parent}>
                            <UpdateIcon />
                        </div>
                    </div>
                </div>
            </div>


            <div className={[classes.list, classes.afterImgDummyList].join(' ')}>
                <div className={classes.listContainer}>
                    <div className={classes.icon_div}>
                        <div className={classes.icon_parent}>
                            <UpdateIcon />
                        </div>
                    </div>
                    <div className={classes.text_div}>
                        <div className={classes.text_heading}>FAST CONNECT</div>
                        <div className={classes.text}>{`Lorem ipsum nisi et proident est aliquip ut laboris non ex enim ut qui dolore.`}
                        </div>
                    </div>
                </div>
                <div className={classes.listContainer}>
                    <div className={classes.icon_div}>
                        <div className={classes.icon_parent}>
                            <UpdateIcon />
                        </div>
                    </div>
                    <div className={classes.text_div}>
                        <div className={classes.text_heading}>FREE UPDATE</div>
                        <div className={classes.text}>{`Lorem ipsum nisi et proident est aliquip ut laboris non ex enim ut qui dolore.`}
                        </div>
                    </div>
                </div>
                <div className={classes.listContainer}>
                    <div className={classes.icon_div}>
                        <div className={classes.icon_parent}>
                            <UpdateIcon />
                        </div>
                    </div>
                    <div className={classes.text_div}>
                        <div className={classes.text_heading}>60+ THEMMES</div>
                        <div className={classes.text}>{`Lorem ipsum nisi et proident est aliquip ut laboris non ex enim ut qui dolore.`}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
};

export default Feature;