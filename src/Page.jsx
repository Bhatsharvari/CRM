import React from 'react';
import Pagination from './Pagination';

const Page = () => {
  const items = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);

  return (
    <div>
      <h1>Pagination Example</h1>
      <Pagination data={items} itemsPerPage={5} />
    </div>
  );
};

export default Page;
