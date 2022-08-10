import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);
 // {books.map(book => <li key={book.id}>{book.title} by {book.author}</li>)}
 console.log('!', products);
  return (
    <section>
      {products.map(product => <Product key={product.id} {...product}/>)}
    </section>
  );
};

export default Products;