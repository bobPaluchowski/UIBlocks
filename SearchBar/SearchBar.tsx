import React, { useState, useRef } from 'react';
import { FaClock, FaStar } from 'react-icons/fa'; // Sample icons 

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'https://'
}) => {
  const [focused, setFocused] = useState(falsae);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div 
      style={{
        display: 'flex',
        alignItems: 'center',
        background: '#181818',
        borderRadius: '24px',
        border: focused ? '2px solid #777' : '1.5px solid #444',
        padding: '0.1em 0.65em',
        height: '40px',
        width: '340px',
        boxSizing: 'border-box'
      }}
    >
      <FaClock style={{ color: '#bbb', fontSize: 18, marginRight: 10 }} />
      <input 
        ref={inputRef}
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        style={{
          background: 'transparent',
          border: 'none',
          color: '#eee',
          fontSize: 18,
          outline: 'none',
          width: '100%',
          fontFamily: 'inherit'
        }}
        />
      <FaStar style={{ color: '#bbb', fontSize: 18, marginLeft: 8 }} />
    </div>
  );
};

export default SearchBar;
