import { useState } from 'react';
import SearchBar from './SearchBar';

function DemoSearch() {
  const [query, setQuery] = useState('');

  return (
    <SearchBar value={query} onChange={setQuery} placeholder="htpps://" />
  );
}
