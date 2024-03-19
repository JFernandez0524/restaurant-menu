import { useState } from 'react';
import menu from './data';
import Title from './Title';
import Menu from './Menu';
import Categories from './Categories';

const categoriesArray = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(categoriesArray);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const filteredItems = menu.filter(
      (menuItem) => menuItem.category === category
    );
    setMenuItems(filteredItems);
  };

  return (
    <main className='menu'>
      <Title />
      <Categories categories={categories} filterItems={filterItems} />

      <Menu menuItems={menuItems} />
    </main>
  );
};
export default App;
