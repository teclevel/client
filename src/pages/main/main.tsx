import { Link } from "react-router-dom";
import { MainMenus } from "../../const";

function Main(): JSX.Element {
  return (
    <ul>
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