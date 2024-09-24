"use client";

import { useState } from 'react';
import Confetti from 'react-confetti';
import styles from './prize.module.css';

const itemImages = {
  Laptop: '/assets/laptop.png',
  Smartphone: '/assets/smartphone.png',
  Headphones: '/assets/headphones.png',
  Cap: '/assets/cap.png',
  No_Cap: '/assets/nocap.png',
  'T-Shirt': '/assets/tshirt.png',
};

const PrizePage = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [items, setItems] = useState([]);
  const [winningItem, setWinningItem] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = () => setShowOptions(true);

  const handleCategoryClick = (category) => {
    const randomItems = generateRandomItems(category);
    setItems(randomItems);
    setWinningItem(randomItems[0]);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const generateRandomItems = (category) => {
    const itemsData = {
      ELECTRONICS: ['Laptop', 'Smartphone', 'Headphones'],
      FASHION: ['T-Shirt', 'Cap', 'No_Cap'],
    };
    return itemsData[category].sort(() => 0.5 - Math.random()).slice(0, 3);
  };

  return (
    <div className={styles.prizeContainer}>
      {showConfetti && <Confetti />}
      <div className={styles.prizeCard}>
        <h2>Claim Your Prize!</h2>
        {!showOptions ? (
          <button className={styles.prizeButton} onClick={handleClick}>
            Click to avail your prize
          </button>
        ) : (
          <div className={styles.optionsContainer}>
            <button className={styles.optionButton} onClick={() => handleCategoryClick('ELECTRONICS')}>GADGETS</button>
            <button className={styles.optionButton} onClick={() => handleCategoryClick('FASHION')}>FASHION</button>
          </div>
        )}
        {winningItem && <h3 className={styles.winningMessage}>Congratulations, you won {winningItem}!</h3>}
        {items.length > 0 && (
          <div className={styles.itemsList}>
            <h3>Items available:</h3>
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <img src={itemImages[item]} alt={item} className={styles.itemImage} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrizePage;
