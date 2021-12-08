const AndrodIcon = props => {

    const { width, height, strokeColor, fillColor } = props;

    return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"
        strokeWidth="1.5" stroke={strokeColor} fill={fillColor} strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill={fillColor} />
        <line x1="4" y1="10" x2="4" y2="16" />
        <line x1="20" y1="10" x2="20" y2="16" />
        <path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" />
        <line x1="8" y1="3" x2="9" y2="5" />
        <line x1="16" y1="3" x2="15" y2="5" />
        <line x1="9" y1="18" x2="9" y2="21" />
        <line x1="15" y1="18" x2="15" y2="21" />
    </svg>
}

export default AndrodIcon;

AndrodIcon.defaultProps = {
    width: '1.5rem',
    height: '1.5rem',
    fillColor: 'none',
    strokeColor: '#fff',
}