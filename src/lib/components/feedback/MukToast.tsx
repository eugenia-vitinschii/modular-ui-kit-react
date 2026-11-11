import { Toast } from "./useMukToast";
import React, { useState, useEffect, useRef } from "react";
import { toast as toastManager } from "./useMukToast";
import { MukText } from "../typography/MukText";
import { MukIconButton } from "../buttons/MukIconButton";

export interface MukToastProps {
  toast: Toast;
}

export const MukToast: React.FC<MukToastProps> = ({ toast }) => {
  const [progress, setPropgress] = useState(100);

  const intervalRef = useRef<number | null>(null);
  const remainingRef = useRef<number>(toast.duration);
  const startTimeRef = useRef<number>(Date.now());

  const remove = () => {
    toastManager.remove(toast.id);
  };

  const tick = () => {
    const elapsed = Date.now() - startTimeRef.current;
    const newProgress = 100 - (elapsed / toast.duration) * 100;

    setPropgress(Math.max(0, newProgress));

    if (elapsed >= remainingRef.current) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      remove();
    }
  };

  const pause = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    remainingRef.current -= Date.now() - startTimeRef.current;
  };

  const resume = () => {
    if (remainingRef.current <= 0) return;
    startTimeRef.current = Date.now();
    intervalRef.current = window.setInterval(tick, 16);
  };

  useEffect(() => {
    startTimeRef.current = Date.now();
    intervalRef.current = window.setInterval(tick, 16);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      className={`muk-toast muk-toast--${toast.variant}`}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="muk-toast__wrapper">
        <div className="muk-toast__message">
          <MukText variant={toast.variant}>{toast.message}</MukText>
        </div>
        <MukIconButton
          variant={toast.variant}
          aria-label="close toast"
          onClick={remove}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </MukIconButton>
      </div>
      <div className="muk-toast__progress" style={{ width: `${progress}%` }} />
    </div>
  );
};
