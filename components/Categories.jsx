import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCat) => setCategories(newCat));
  }, []);

  return (
    <div className="text-purple-400 bg-white text-center flex justify-center">
      categories{' '}
    </div>
  );
};

export default Categories;
