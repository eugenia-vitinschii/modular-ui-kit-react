/* COMPONENTS */
import { MukText } from "../../lib/components/typography/MukText";

export const AppHeader = () => {
  return (
    <div className="muk-header">
      <div className="muk-container">
        <div className="muk-header__wrapper">
          <div className="muk-header__logo">
            <MukText as="a" variant="primary" href="/">
              [Modular UI Kit]
            </MukText>
          </div>
          <nav className="muk-header__nav">
            <ul>
              <li>
                <MukText as="a" href="#">Profile</MukText>
              </li>
              <li>
                <MukText as="a" href="#">Login</MukText>
              </li>
              <li>
                <MukText as="a" href="#">Register</MukText>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
