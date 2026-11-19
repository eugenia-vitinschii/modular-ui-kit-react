import { useState } from "react";
import { MukButton, MukRadio, MukText } from "../../../lib";

import { MukEmptyState } from "../../../lib/components/feedback/MukEmptyState";
import { MukErrorState } from "../../../lib/components/feedback/MukErrorState";
import { MukSkeleton } from "../../../lib/components/feedback/MukSkeleton";
import { MukPagination } from "../../../lib/components/navigation/MukPagination";


const MOCK_ARTICLES = [
   { slug: 'vue3-guide', title: 'Mastering Vue 3 Composition API', description: 'Deep dive into setup, refs, and clean architecture.' },
   { slug: 'sass-mixins', title: 'Advanced Sass Architecture', description: 'How to structure your design system tokens and mixins efficiently.' },
   { slug: 'npm-package', title: 'Publishing your first NPM Package', description: 'A complete step-by-step guide for frontend developers.' }
]

type StateType = 'content' | 'loading' | 'error' | 'empty';

const STATE_OPTIONS: {value: StateType; label: string}[] = [
   {value: 'content', label: 'Show Content'},
   {value: 'loading', label: 'Loading'},
   {value: 'error', label: 'Error State'},
   {value: 'empty', label: 'Empty state'},
]


function ComponentFlowView(){

   const [stateType, setStateType] = useState<StateType>('content')

   const handleRetry = () => {
      setStateType('loading');
      setTimeout(() => {
         setStateType('content');
      }, 1500)
   }

   const [currentPage, setCurrentPage] = useState<number>(2)
   const totalPages = 12

   const renderFlowContent = () => {
      if(stateType === 'loading'){
         return (
            <div className="demo-content">
               {[1,2,3].map((n) => (
                  <div className="skeleton-item" key={n}>
                     <MukSkeleton height="25px" width="300px"/>
                     <br />
                      <MukSkeleton height="23px" width='500px'/>
                     <br />
                  </div>
               ))}
            </div>
         )
      }
      if(stateType === 'error'){
         return (
            <div className="demo-content">
               <MukErrorState
                  action={
                     <MukButton onClick={handleRetry} variant="ghost">Try again</MukButton>
                  }
               />
            </div>
         )
      }
      if(stateType === 'empty'){
         return (
            <div className="demo-content">
               <MukEmptyState variant="primary"/>
            </div>
         );
      }
      return( 
        <div className="p">
         {MOCK_ARTICLES.map((article) => (
            <div className="article" key={article.slug}>
               <MukText type="muk-subheading" variant="primary">{article.title}</MukText>
               <MukText>{article.description}</MukText>
            </div>
         ))}
        </div>
      )
   };


   return(
      <div className="muk-page">
         <div className="muk-container">
            <div className="muk-page__wrapper">
               <div className="muk-page__header">
                  <MukText as="h2" type="muk-heading">Component Flow Preview</MukText>
               </div>
               <div className="muk-page__content">
                  <div className="demo-controls muk-section">
                     <MukText as='h3' type='muk-subheading'>Demo Controls</MukText>
                     {STATE_OPTIONS.map((option) => (
                        <MukRadio
                           key={option.value}
                           name="page-flow-state"
                           value={option.value}
                           selectedValue={stateType}
                           label={option.label}
                           onChange={(val) => setStateType(val as StateType)}
                        />
                     ))}
                  </div>
                  <div className="muk-section" key={stateType}>
                     {renderFlowContent()}
                  </div>
               </div>
               <div className="muk-page__footer">
                  <MukPagination  totalPages={totalPages} page={currentPage} 
                  onChange={setCurrentPage}  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default ComponentFlowView