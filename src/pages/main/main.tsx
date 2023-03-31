import { Link } from "react-router-dom";
import { MainMenus } from "../../const";
import styles from  './main.module.css'


function Main(): JSX.Element {
  return (
    <ul className={styles.header}>
      {
        MainMenus.map((menu) =>
          <li key={menu.name}>
            <Link
              to={menu.path}>
              {menu.name}
            </Link>
          </li>
        )
      }
    </ul>
  )
};

export default Main;
