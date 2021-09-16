const [darkMode, isDarkMode] = useState(!!_.get(this.props, 'data.config.color_scheme', null));

export function setDarkMode() {
    console.log(!!_.get(this.props, 'data.config.color_scheme', null));
    
    isDarkMode(darkMode => !darkMode);
};

export function getDarkMode() {
    return darkMode
};