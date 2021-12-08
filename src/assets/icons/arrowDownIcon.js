const ArrowDownIcon = props => {

    const { width, height, strokeColor, fillColor } = props;

    return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"
        strokeWidth="1.5" stroke={strokeColor} fill={fillColor} strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="6 9 12 15 18 9" />
    </svg>
}

export default ArrowDownIcon;

ArrowDownIcon.defaultProps = {
    width: '1.5rem',
    height: '1.5rem',
    fillColor: 'none',
    strokeColor: '#fff',
}