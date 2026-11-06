import React, { type FC } from "react";

import type { UIEmptyStateVariant } from "../../types/ui.types";
import { formatSize } from "../../utils/formatSize";

import { MukText } from "../typography/MukText";

export interface MukEmptyStateProps {
  title?: string;
  description?: string;
  variant?: UIEmptyStateVariant;
  width?: string | number;
  height?: string | number;
  action?: React.ReactNode;
}

export const MukEmptyState: FC<MukEmptyStateProps> = ({
  variant =  'secondary',
  title = "No data available",
  description = 'There is nothing to display here at the moment. Please try refreshing the page',
  width,
  height,
  action,
}) => {
  const computedStyle: React.CSSProperties = {
    width: formatSize(width),
    height: formatSize(height),
  };


  return (
    <div className={`muk-empty-state muk-empty-state--${variant}`} style={computedStyle}>
      <div className="muk-empty-state__text">
        <MukText as='h3' type='muk-subheading'>{title}</MukText>
        <MukText>{description}</MukText>
      </div>
      {action && (
        <div className="muk-empty-state__actions">
          {action}
        </div>
      )}
    </div>
  )
}


