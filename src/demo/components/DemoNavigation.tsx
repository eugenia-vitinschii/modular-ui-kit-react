import { MukIconButton, MukText } from "../../lib"

interface NavItem {
   label: string
   path: string
}

interface NavGroup {
   title: string
   items: NavItem[]
}

interface DemoNavigationProps {
   onClose?: () => void
}

const navConfig: NavGroup[] = [
   {
      title: 'General',
      items: [
         { label: 'Typography', path: '/demo/ui/text' },
         { label: 'Button', path: '/demo/ui/buttons' },
         { label: 'Icon Button', path: '/demo/ui/icon-buttons' },
         { label: 'Component Flow', path: '/demo/ui/flow' },
         { label: 'Feedback & Toast', path: '/demo/ui/feedback' },
         { label: 'Badges', path: '/demo/ui/badge' },
         { label: 'Table', path: '/demo/ui/table' },
         { label: 'Comments', path: '/demo/ui/comments' },
         { label: 'Metrics Card', path: '/demo/ui/metrics' },
         { label: 'Charts', path: '/demo/ui/charts' },
      ]
   },
   {
      title: 'Form Elements',
      items: [
         { label: 'Inputs', path: '/demo/ui/form/inputs' },
         { label: 'Selects', path: '/demo/ui/form/selects' },
         { label: 'Textareas', path: '/demo/ui/form/textareas' },
         { label: 'Checkboxes', path: '/demo/ui/form/checkboxes' },
         { label: 'Radio', path: '/demo/ui/form/radio' },
      ]
   },
   {
      title: 'System & Errors',
      items: [
         { label: '401 Unauthorized', path: '/401' },
         { label: '403 Forbidden', path: '/403' },
         { label: '404 Not Found', path: '/404' },
         { label: '500 Server Error', path: '/500' },
      ]
   }
]

export const DemoNavigation = ({onClose}: DemoNavigationProps) => {
   return (
      <aside className="demo-nav">
         <div className="demo-nav__header">
            <MukText>UI Kit Showcase</MukText>
            <MukIconButton aria-label="Close Demo" onClick={onClose}> 
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
               <path
                  d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z" />
               </svg>
            </MukIconButton>
         </div>
         <div className="demo-nav__body">
            {navConfig.map((group) => (<div className="demo-nav__group" key={group.title}>
                  <MukText as="span" variant="primary">{group.title}</MukText>
                  <ul>
                     {group.items.map((link) => (
                      <li key={link.path}>
                        <MukText as="a" href={link.path}>{link.label}</MukText>
                     </li> 
                      ))}
                  </ul>
            </div>))}
         </div>
      </aside>
   )
}