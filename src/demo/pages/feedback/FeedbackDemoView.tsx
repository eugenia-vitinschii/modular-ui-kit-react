import { useState } from "react";
import type { UIVariant } from "../../../lib";

import { MukCheckbox, MukInput, MukText } from "../../../lib";
import { MukButton } from "../../../lib";
import { useMukToast } from "../../../lib/components/feedback/useMukToast";
import { MukModal } from "../../../lib/components/overlays/MukModal";

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
  //toast
  const { addToast } = useMukToast();

  function triggerToast(variant: UIVariant) {
    const message = toastMessages[variant];
    addToast(message, variant, 3000);
  }

  //modal
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [activeVariant, setActiveVariant] = useState<UIVariant>("success");
  let [activeTitle, setActiveTitle] = useState("");

  //modalForm State
  let [confirmText, setConfirmText] = useState("");
  let [inputError, setInputError] = useState("");
  let [isAgreed, setIsAgreed] = useState(false);

  function handleConfirm() {
    if (activeVariant === "danger" && confirmText !== "DELETE") {
      setInputError( "Please type DELETE exactly to confirm!");
      return;
    }
    const message = `Action confirmed for variant ${activeVariant}`;
    addToast(message, "success", 3000);

    setIsModalOpen(false);
  }

  function openModal(variant: UIVariant) {
    setActiveVariant(variant);
    setActiveTitle(`${variant.toUpperCase()} Action Required`);

    setConfirmText('')
    setInputError('')
    setIsAgreed(false)

    setIsModalOpen(true);
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
              <MukText type="muk-subheading">Demo controls [Toast]</MukText>
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
            <div className="demo-controls muk-section">
              <MukText type="muk-subheading">Demo controls [Modal]</MukText>
              <div className="demo-controls__buttons">
                {variants.map((variant) => (
                  <MukButton
                    key={variant}
                    onClick={() => openModal(variant)}
                    size="sm"
                    variant={variant}
                  >
                    Open {variant} modal
                  </MukButton>
                ))}
              </div>
            </div>
          </div>
          <MukModal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title={activeTitle}
            variant={activeVariant}
            content={
              <>
                <MukText>variant: {activeVariant}</MukText>
                {activeVariant === "danger" && (
                  <MukInput
                    value={confirmText}
                    onChange={(val) => setConfirmText(val)}
                    placeholder="Type 'DELETE' to confirm"
                    error={inputError}
                  />
                )}
                {
                  activeVariant === 'warning' && (
                    <MukCheckbox
                      label="I accept the risk and want to proceed"
                      value={isAgreed}
                      onChange={(val) => setIsAgreed(val)}
                    />
                  )
                }
              </>
            }
            actions = {
              <>
              <MukButton variant="secondary" onClick={() => setIsModalOpen(false)}>Cancel</MukButton>
              <MukButton variant={activeVariant} onClick={ handleConfirm}
              disabled={ activeVariant === 'warning' && !isAgreed}
              >Confirm</MukButton>
               </>
            }
           
          />
        </div>
      </div>
    </div>
  );
}

export default FeedbackDemoView;
