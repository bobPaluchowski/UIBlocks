// how to use the button

import Button from './Button';

const App = () => (
  <div>
    <Button 
      text="Click Me"
      color='fff'
      backgroundColor="#28a745"
      fontSize="18px"
      padding="0.75em 2em"
      margin="1em"
      borderRadius={16}
      boxShadow=" 0 2px 4px rgba(0, 0, 0, 0.2)"
      hoverBackgroundColor="#218838"
      hoverBoxShadow="0 4px 8px rgba(0, 0, 0, 0.3)"
      onClick={() => alert('Button clicked')}
      />
  </div>
);
