import Link from "next/link";
import styles from './Header.module.sass'
import { ShoppingCart } from '../ShoppingCart'

export const Header = () => {
  console.log("Hola mundo header");
  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Header__list}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/store">
            <li>Store</li>
          </Link>
        </ul>
      </nav>
      <div className={styles.Header__user}>
        <ShoppingCart />
      </div>
    </header>
  );
};
