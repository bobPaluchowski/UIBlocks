import { FaCheck } from 'react-icons/fa';

const menuItems = [
  { value: 'profile', label: 'Profile', icon: <FaCheck /> },
  { value: 'settings', label: 'Settings', icon <FaCheck /> },
  { value: 'logout', label: 'Logout', icon <FaCheck /> },
];

<DropdownMenu 
  items={menuItems} 
  onSelect={item => { alert(`Selected: ${item.label}`);}} 
  buttonLabel="Menu" 
  textColor="#111" 
  bgColor="#f8fafc" 
  menuBgColor="#fff" 
  iconColor="#5b5fc9"
/>
