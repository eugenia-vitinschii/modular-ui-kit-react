import { UIVariant } from "../../../lib";

import { MukText } from "../../../lib";
import { MukButton } from "../../../lib";
import { useMukToast } from "../../../lib/components/feedback/useMukToast";

const variants: UIVariant[] = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
];
// messages for demo
const toastMessages: Record<UIVariant, string> = {
  primary: "New system updates are now available.",
  secondary: "Your draft has been saved automatically.",
  success: "Changes saved successfully!",
  warning: "Please review your entries before proceeding.",
  danger: "Something went wrong. Please try again.",
};

function FeedbackDemoView() {
  const { addToast } = useMukToast();

  function triggerToast(variant: UIVariant) {
    const message = toastMessages[variant];
    addToast(message, variant, 3000);
  }
  return (
    <div className="muk-page">
      <div className="muk-container">
        <div className="muk-page__wrapper">
          <div className="muk-page__header">
            <MukText as="h2" type="muk-heading">
              Toast & Modal Preview
            </MukText>
          </div>
          <div className="muk-page__content">
            <div className="demo-controls muk-section">
              <MukText type="muk-subheading">Demo controls</MukText>
              <div className="demo-controls__buttons">
                {variants.map((variant) => (
                  <MukButton
                    key={variant}
                    onClick={() => triggerToast(variant)}
                    size="sm"
                    variant={variant}
                  >
                    Show {variant} toast
                  </MukButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackDemoView;
