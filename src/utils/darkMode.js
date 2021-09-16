const [darkMode, isDarkMode] = useState(!!_.get(this.props, 'data.config.color_scheme', null));

export default function setDarkMode() {
    console.log(!!_.get(this.props, 'data.config.color_scheme', null));
    
    isDarkMode(darkMode => !darkMode);
};

export default function getDarkMode() {
    return darkMode
};