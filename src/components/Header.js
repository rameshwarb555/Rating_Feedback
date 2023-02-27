function Header({text, bgColor, textColor}) {
    const headerStyles ={
        backgroundColor: bgColor,
        color: textColor
    }

    return(
        <header style={headerStyles}>
        
        </header>
    )

}

    Header.defaultProps = {
        text:'Feedback',
        bgColor: 'rgba(0,0,0,0.4)',
        textColor: '#362FD9'
    


}
export default Header;