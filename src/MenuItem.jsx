import React from 'react';

const MenuItem = ({ id, title, category, price, desc, img }) => {
  return (
    <div className='menu-item'>
      <img src={img} alt={title} className='img' />
      <div className='item-info'>
        <header>
          <h5>{title}</h5>
          <span className='item-price'>${price}</span>
        </header>
        <p className='item-text'>{desc}</p>
      </div>
    </div>
  );
};

export default MenuItem;
