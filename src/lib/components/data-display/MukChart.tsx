import { HTMLAttributes, type FC, useRef, useEffect, useMemo } from "react";

import {
  Chart,
  registerables,
  type ChartData,
  type ChartOptions,
  type ChartType,
} from "chart.js";
import { MukSkeleton } from "../feedback/MukSkeleton";
import { MukEmptyState } from "../feedback/MukEmptyState";
import { MukText } from "../typography/MukText";

Chart.register(...registerables);

export interface MukChartProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  loading?: boolean;
  emptyText?: string;
  height?: string | number;
  type?: ChartType;
  data: ChartData | null;
  options?: ChartOptions;
}

export const MukChart: FC<MukChartProps> = ({
  title,
  loading = false,
  emptyText = "No data available",
  height = "300px",
  type = "bar",
  data,
  options,
  className,
  ...rest
}) => {
  const canvaRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  const normalizedHeight = typeof height === "number" ? `${height}px` : height;

  const isEmpty = useMemo(() => {
    if (!data || !data.datasets || data.datasets.length === 0) return true;
    return data.datasets.every(
      (dataset) => !dataset.data || dataset.data.length === 0,
    );
  }, [data]);

  useEffect(() => {
    const destroyChart = () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };

    if (loading || isEmpty || !canvaRef.current || !data) {
      destroyChart();
      return;
    }

    destroyChart();

    const defaultOptions: ChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };

    chartInstanceRef.current = new Chart(canvaRef.current, {
      type,
      data,
      options: { ...defaultOptions, ...options },
    });

    return () => {
      destroyChart();
    };
  }, [data, type, options, loading, isEmpty]);

  const renderedContent = () => {
    if (loading) {
      return (
        <div
          className="muk-chart__loading"
          style={{ height: normalizedHeight }}
        >
          <MukSkeleton width="100%" height="100%" />
        </div>
      );
    }
    if (isEmpty) {
      return (
        <div className="muk-chart__empty" style={{ height: normalizedHeight }}>
          <MukEmptyState height="100%" width="100%" description={emptyText} />
        </div>
      );
    }

    return (
      <div className="muk-chart__wrapper" style={{ height: normalizedHeight }}>
        <canvas ref={canvaRef} />
      </div>
    );
  };
  const chartClasses = ["muk-chart", className].filter(Boolean).join(" ");

  return (
    <div className={chartClasses} {...rest}>
      {title && (
        <div className="muk-chart__header">
          <MukText variant="muted">{title}</MukText>
        </div>
      )}
      {renderedContent()}
    </div>
  );
};
