export default function setDarkMode() {
    console.log(!!_.get(this.props, 'data.config.color_scheme', null));
        
    const [darkMode, isDarkMode] = useState(!!_.get(this.props, 'data.config.color_scheme', null));
    
        const buttonHandler = () => {
            isDarkMode(darkMode => !darkMode);
        }
};