import ProductsConteiner from 'container/products/Products';
import s from './Home.module.scss';

function Home() {
  return (
    <div className={s["Home"]}>
      <ProductsConteiner/>
    </div>
  );
}

export default Home;
