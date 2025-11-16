import { faChevronRight } from 'react-icons/fa'; // Example icon 

type Item = { name: string };

const items: Item[] = [
  { name: "Task 1" },
  { name: "Task 2" },
  // more items
];

<ListComponent 
  items={items} 
  renderText={item => item.name} 
  renderIcon={item => <FaChevronTight />} 
  listType="unordered" // or "ordered" 
  itesPerPage={5} 
  textColor="#333" 
  bgColor="#f9fafb" 
  bulletStyle="circle"
/>
