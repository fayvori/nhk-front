import Dropdown from 'react-dropdown';
import './style.css';

export const LanguageDropdown = () => {
    const options = [
        {label: '🇷🇺', value: 'ru'},
        {label: '🇬🇧', value: 'en'}
    ];
const defaultOption = options[0];
    
    const onChange = (val) => {
        console.log(val)
    }

    return (
        <div className="px-5">
        <Dropdown options={options} onChange={onChange} value={defaultOption} placeholder="Select an option" />
        </div>
    )
}
