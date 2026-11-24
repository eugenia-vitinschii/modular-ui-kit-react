import { MukBadge } from "./MukBadge";
import { MukText } from "../typography/MukText";
import { MukSkeleton } from "../feedback/MukSkeleton";
import React, { type FC } from "react";

export interface MukMetricCardProps {
  title: string;
  value: string | null;
  change?: number | null;
  changePeriod?: string;
  invert?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

const DEFAULT_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
    <path d="M439-480ZM240-80h119q-13-17-22-37t-14-43h-83l-1-437h1l202-203 197 203v118q21 0 41 3.5t39 11.5v-132q1-16-5-30.5T697-653L499-856q-12-12-26.5-18t-30.5-6q-15 0-30 6t-26 18L183-653q-11 11-17 25t-6 31v437q0 35 22.5 57.5T240-80Zm200-519q-25 0-41.5-17.5T380-659q2-25 18.5-42.5T440-719q25 0 41 17.5t19 42.5q-3 25-19 42.5T440-599Zm80 519q-51 0-85.5-34.5T400-200q0-48 33-82.5t81-36.5q16-36 49.5-58.5T637-400q47 0 85.5 26.5T773-300q45 0 76 32.5t31 77.5q0 45-28.5 77.5T780-80H520Zm0-80h250q12 0 21-8.5t9-21.5q0-12-9-21t-21-9h-57l-17-57q-5-20-21-31.5T639-320q-17 0-31.5 10T586-285l-20 45h-46q-17 0-28.5 11.5T480-200q0 17 11.5 28.5T520-160Zm120 0Z" />
  </svg>
);

const TREND_ICONS = {
  up: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
      <path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" />
    </svg>
  ),
  down: (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M16,18V16h2.6l-5.2-5.15l-4,4L2,7.4L3.4,6l6,6l4-4L20,14.6V12h2v6H16Z"/></svg>
  ),
  flat: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
      <path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" />
    </svg>
  ),
};

export const MukMetricCard: FC<MukMetricCardProps> = ({
  title,
  value,
  change = null,
  invert = false,
  loading = false,
  icon,
  changePeriod,
}) => {
  const getTrendVariant = (): "success" | "danger" | "secondary" => {
    if (change === null || change === undefined || change === 0) {
      return "secondary";
    }
    const isPositive = change > 0;
    const isGood = invert ? !isPositive : isPositive;
    return isGood ? "success" : "danger";
  };

  const getTrendIcon = () => {
    if (change === null || change === undefined || change === 0) {
      return TREND_ICONS.flat;
    }
    const isPositive = change > 0;
    const isVisualUp = invert ? !isPositive : isPositive;

    return isVisualUp ? TREND_ICONS.up : TREND_ICONS.down
  };

  const formattedChange =
    change !== null && change !== undefined ? `${Math.abs(change)}%` : "";

  const hasStats =
    (change !== null && change !== undefined) || Boolean(changePeriod);

  return (
    <div className="muk-metric-card">
      <div className="muk-metric-card__data">
        <div className="muk-metric-card__data--head">
          <MukText variant="muted" type="muk-subheading">
            {title}
          </MukText>
          {loading ? (
            <MukSkeleton className="muk-metric-card--loading" width="50px" />
          ) : (
            <MukText variant="secondary">{value}</MukText>
          )}
        </div>
        <div className="muk-metric-card__data--icon">
          <div className="muk-svg-icon">{icon ?? DEFAULT_ICON}</div>
        </div>
      </div>
      {hasStats && (
        <div className="muk-metric-card__stats">
          {change !== null && change !== undefined && (
            <div className="muk-metric-card__stats--bagde">
              {loading ? (
                <MukSkeleton width="60px" />
              ) : (
                <MukBadge
                  size="sm"
                  variant={getTrendVariant()}
                  icon={getTrendIcon()}
                  text={formattedChange}
                />
              )}
            </div>
          )}
          {changePeriod && (
            <div className="muk-metric-card__stats--info">
              {loading ? (
                <MukSkeleton
                  className="muk-metric-card--loading"
                  width="83px"
                />
              ) : (
                <MukText variant="muted" type="muk-caption">
                 {changePeriod}
                </MukText>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
