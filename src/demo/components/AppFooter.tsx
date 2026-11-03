/* COMPONENTS */
import { MukText } from "../../lib/components/typography/MukText";

export const AppFooter = () => {
  return (
    <footer className="muk-footer">
      <div className="muk-container">
        <div className="muk-footer__wrapper">
          <MukText type="muk-subheading" variant="primary" align="center">
            [MODULAR UI KIT]
          </MukText>
          <MukText
            as="a"
            target="_blank"
            href="https://github.com/eugenia-vitinschii/modular-ui-kit-react"
            variant="muted"
            align="center"
          >
            [repo]
          </MukText>
        </div>
      </div>
    </footer>
  );
};
