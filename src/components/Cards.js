import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Popular Pokémon：</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src='images/no1.png'
              text='Grimer臭泥-誕生自海底的污泥。在乾淨的地方，牠會因為體內的細菌無法增長而死去。'
              label='No. 1'
              path='/Game'
            />
            <CardItem
              src='images/no2.png'
              text='Pikachu皮卡丘-越是能製造出強大電流的皮卡丘，臉頰上的囊就越柔軟，同時也越有伸展性。'
              label='No. 2'
              path='/Game'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/no3.png'
              text='Lugia洛奇亞-有著只要輕輕揮動翅膀就能吹走房屋的破壞力，因此躲在不為人知的海底生活。'
              label='No. 3'
              path='/Game'
            />
            <CardItem
              src='images/no4.png'
              text='Lucario路卡利歐-操作一種被稱為波導的力量來進行狩獵。這種力量就連巨大的岩石也能擊得粉碎。'
              label='No. 4'
              path='/Game'
            />
            <CardItem
              src='images/no5.png'
              text='Eevee伊布-伊布擁有著能夠為了適應周遭的環境而改變身體構造的能力。'
              label='No. 5'
              path='/Game'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
