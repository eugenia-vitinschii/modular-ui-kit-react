import { useState } from "react";

import { MukRadio, MukText } from "../../../lib";
import type { UITextVariant, UISize } from "../../../lib";
import { MukBadge } from "../../../lib/components/data-display/MukBadge";

const variantOptions: UITextVariant[] = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "muted",
];
/* sizes */
const sizes: UISize[] = ["sm", "md", "lg"];

function BadgesView() {
  const [selectedVariant, setSelectedVariant] =
    useState<UITextVariant>("secondary");

  return (
    <div className="muk-page">
      <div className="muk-container">
        <div className="muk-page__wrapper">
          <MukText as="h2" type="muk-heading">
            Badges Preview
          </MukText>
          <div className="muk-page__content">
            <div className="demo-controls muk-section">
              <MukText type="muk-subheading">Demo controls</MukText>
              <div className="demo-controls--row">
                {variantOptions.map((variant) => (
                  <MukRadio
                    key={variant}
                    name="text-variant"
                    value={variant}
                    label={variant}
                    checked={selectedVariant === variant}
                    onChange={() => setSelectedVariant(variant)}
                  />
                ))}
              </div>
            </div>
            <div className="muk-section">
              <MukText type="muk-subheading">Badges</MukText>
              <div className="badges-wrapper">
                <div className="badge__item">
                  {sizes.map((size) => (
                    <div className="badge" key={size}>
                      <MukBadge
                        variant={selectedVariant}
                        text="Tag: frontend"
                        size={size}
                        icon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                          >
                            <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
                          </svg>
                        }
                      />
                    </div>
                  ))}
                </div>
                <div className="badge__item">
                  {sizes.map((size) => (
                    <div className="badge" key={size}>
                      <MukBadge
                        variant={selectedVariant}
                        text="New Release"
                        size={size}
                        icon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                          >
                            <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm28.5 188.5Q520-303 520-320t-11.5-28.5Q497-360 480-360t-28.5 11.5Q440-337 440-320t11.5 28.5Q463-280 480-280t28.5-11.5ZM440-440h80v-240h-80v240Z" />
                          </svg>
                        }
                      />
                    </div>
                  ))}
                </div>
                <div className="badge__item">
                  {sizes.map((size) => (
                    <div className="badge" key={size}>
                      <MukBadge
                        variant={selectedVariant}
                        text={
                          <>
                            Published <strong>2 days ago</strong>
                          </>
                        }
                        size={size}
                        icon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                          >
                            <path d="M289-329q-29-29-29-71t29-71q29-29 71-29t71 29q29 29 29 71t-29 71q-29 29-71 29t-71-29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
                          </svg>
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgesView;
