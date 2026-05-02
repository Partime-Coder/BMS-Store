import React, { useState } from 'react'
import {Input, Button} from '../index.js'
import { FiSearch } from '../../assets/icons/icons.js'
import { useNavigate } from 'react-router-dom';

function SearchInput() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-center'>
      <Input
        rounded='rounded-l-lg'
        placeholder='Search for products...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button
        type='submit'
        bgColor='bg-VividOrange-200'
        hoverBgColor='hover:bg-VividOrange-400'
        rounded='rounded-r-lg'
        className='px-2 py-2'
      >
        <FiSearch size={24} />
      </Button>
    </form>
  );
}

export default SearchInput