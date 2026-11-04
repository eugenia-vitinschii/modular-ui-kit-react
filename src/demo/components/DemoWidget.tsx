import React, {useState, useRef} from 'react';
import { CSSTransition } from 'react-transition-group';

/* COMPONENTS */
import { MukButton } from "../../lib"
import { DemoNavigation } from './DemoNavigation';


export const DemoWidget:React.FC = () => {
   const [isOpen, setIsOpen] = useState(false)
   const menuRef = useRef<HTMLDivElement>(null)

   const toggleMenu = () => {
      setIsOpen((prev) => !prev)
   }

   return (
      <div className="demo-widget">
         <MukButton onClick={toggleMenu}>Demo UI Kit</MukButton>
         <CSSTransition in={isOpen} timeout={250} classNames="fade"  unmountOnExit nodeRef={menuRef}>
            <div ref={menuRef} className="demo-widget__menu">
               <DemoNavigation onClose={() => setIsOpen(false)}/>
            </div>
         </CSSTransition>
      </div>
   )
}