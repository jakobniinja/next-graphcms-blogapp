import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCat) => setCategories(newCat));
  }, []);

  return (
    <div className="text-purple-400 bg-white text-center flex justify-center pt-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-2  ">
        {categories.map((category) => (
          <Link
            rel="stylesheet"
            key={category.slug}
            href={`/categories/${category.slug}`}
          >
            <span className="cursor-pointer block pb-3 mb-3">
              {category.name}
            </span>
          </Link>
        ))}
      </h3>
    </div>
  );
};

export default Categories;
