const UserIcon = props => {
    const { width, height, strokeColor, fillColor } = props;

    return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"
        strokeWidth="1.5" stroke={strokeColor} fill={fillColor} strokeLinecap="round" strokeLinejoin="round">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />    </svg>
}

export default UserIcon;

UserIcon.defaultProps = {
    width: '1.5rem',
    height: '1.5rem',
    fillColor: '#fff',
    strokeColor: '#fff',
}