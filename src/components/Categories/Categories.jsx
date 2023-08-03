import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Categories.module.css";

const Categories = ({ title, products = [], amount }) => {
  const limitedAmount = Math.min(amount, 8); // Ограничиваем значение amount до максимум 8
  const list = products.slice(0, limitedAmount);

  return (
    <section className={styles.section}>
      <h2>{title}</h2>

      <div className={styles.list}>
        {list.map(({ id, name, image }) => (
          <Link to={`/categories/${id}`} key={id} className={styles.item}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${image})` }}
            />
            <h3 className={styles.title}>{name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
