function Header({onDarkModeClick}) {
    return (
    <div>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>{onDarkModeClick ? "Dark" : "Light"} Mode</button>
    </div>
    )
}

export default Header;

