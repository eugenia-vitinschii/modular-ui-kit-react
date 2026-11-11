import { useEffect, useState } from "react";
import { UIVariant } from "../../types/ui.types";


export interface Toast {
   id: string;
   message: string;
   variant: UIVariant;
   duration: number;
}

let toastStore: Toast[] = [];

const listeners = new Set<(toasts: Toast[]) => void>();

function notify(){
   listeners.forEach((listener) => listener([...toastStore]));
}

export const toast = {
   add: (message: string, variant:UIVariant = 'secondary', duration: number = 3000) =>{
      const id = Date.now().toString() + Math.random().toString().slice(2,6);
      toastStore = [...toastStore, {id, message, variant, duration}];
      notify();
   },
   remove: (id: string) => {
      toastStore = toastStore.filter((t) => t.id !== id)
      notify();
   },
}; 

export function useMukToast(){
   const [toasts, setToasts] = useState<Toast[]>(toastStore);

   useEffect(() => {
      listeners.add(setToasts);
      return () => {
         listeners.delete(setToasts)
      };
   }, []);
   return {
      toasts,
      addToast: toast.add,
      removeToast: toast.remove
   }
}
