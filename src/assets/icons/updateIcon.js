const UpdateIcon = props => {

    const { width, height, strokeColor, fillColor } = props;

    return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"
        strokeWidth="1.5" stroke={strokeColor} fill={fillColor} strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill={fillColor} />
        <path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1" />
        <path d="M8 15a6 6 0 1 0 12 0v-3" />
        <path d="M11 3v2" />
        <path d="M6 3v2" />
        <circle cx="20" cy="10" r="2" />
    </svg>
}

export default UpdateIcon;

UpdateIcon.defaultProps = {
    width: '1.5rem',
    height: '1.5rem',
    fillColor: 'none',
    strokeColor: '#fff',
}