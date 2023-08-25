import Header from '../components/Header/Header';
import Items from '../components/Items/Items';
import Promo from '../components/Promo/Promo';
import Select from '../components/Select/Select';

const Home = () => {
  return (
    <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
      <Header />
      <Promo />
      <Select />
      <Items />
    </div>
  );
};

export default Home;
