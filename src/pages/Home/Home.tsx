import { useEffect } from 'react';
import { Category, Product } from '../../types/types';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Home.css';
import { useProductContext } from '../../context/ProductContext';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchCategories } from '../../api/api';

const Home: React.FC = () => {
  const { products, dispatch, selectedCategory } = useProductContext();

  const { data: productsData } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  useEffect(() => {
    if (productsData) {
      dispatch({ type: 'SET_PRODUCTS', payload: productsData.data });
    }
  }, [productsData, dispatch]);

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const getFilteredProducts = () => {
    if (selectedCategory) {
      return products?.filter(
        (product: Product) => product.category === selectedCategory
      );
    }
    return products;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div>
      <select
        onChange={(e) =>
          dispatch({ type: 'SET_SELECTED_CATEGORY', payload: e.target.value })
        }
        value={selectedCategory}
      >
        <option value=''>All Categories</option>
        {categories?.data.map((category: Category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
      <button
        onClick={() => dispatch({ type: 'SET_SELECTED_CATEGORY', payload: '' })}
      >
        Clear Filter
      </button>
      <div className='container'>
        {filteredProducts.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
export default Home;
