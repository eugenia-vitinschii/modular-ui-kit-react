import React from "react";
import { MukToast } from "./MukToast";
import { useMukToast } from "./useMukToast"


export const MukToastContainer: React.FC = () => {
   const { toasts} = useMukToast();

   return (
      <div className="muk-toast-container">
         {toasts.map((toast) => (
            <MukToast key={toast.id} toast={toast}/>
         ))}
      </div>
   )
}