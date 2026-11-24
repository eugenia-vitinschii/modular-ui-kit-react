import { useState, type FC } from "react";
import { MukText } from "../../lib";
import { MukBadge } from "../../lib";
import { MukButton } from "../../lib";
export interface MukTableProps {
    actionsType?: ActionsLayoutType
}

//Local type
interface DemoUser {
   id: string
   name: string
   email: string
   role: string
   position: string
   location: string
}

// LOCAL DATA
const INITIAL_USERS: DemoUser[] = [
   {
      id: '1',
      name: 'Alex Morgan',
      email: 'alex@company.com',
      role: 'Admin',
      position: 'Lead Developer',
      location: 'Berlin, DE'
   },
   {
      id: '2',
      name: 'Sarah Connor',
      email: 'sarah@company.com',
      role: 'Member',
      position: 'UX Designer',
      location: 'London, UK'
   },
   {
      id: '3',
      name: 'Michael Scott',
      email: 'michael@company.com',
      role: 'Member',
      position: 'Product Manager',
      location: 'Scranton, US'
   }
]

const ROLE_ICON = (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                           <path
                              d="M707-707q93 93 93 227t-93 227q-93 93-227 93t-227-93q-93-93-93-227t93-227q93-93 227-93t227 93Zm-57 397q70-70 70-170t-70-170q-70-70-170-70t-170 70q-70 70-70 170t70 170q70 70 170 70t170-70Zm-84-57.5q38-27.5 54-72.5H340q16 45 54 72.5t86 27.5q48 0 86-27.5Zm-214.5-164Q363-520 380-520t28.5-11.5Q420-543 420-560t-11.5-28.5Q397-600 380-600t-28.5 11.5Q340-577 340-560t11.5 28.5Zm200 0Q563-520 580-520t28.5-11.5Q620-543 620-560t-11.5-28.5Q597-600 580-600t-28.5 11.5Q540-577 540-560t11.5 28.5ZM40-720v-120q0-33 23.5-56.5T120-920h120v80H120v120H40ZM240-40H120q-33 0-56.5-23.5T40-120v-120h80v120h120v80Zm480 0v-80h120v-120h80v120q0 33-23.5 56.5T840-40H720Zm120-680v-120H720v-80h120q33 0 56.5 23.5T920-840v120h-80ZM480-480Z" />
                        </svg>
)
export type ActionsLayoutType = 'column' | 'row'

export const DemoTable: FC<MukTableProps> = ({
   actionsType = "column"
}) => {

   const [users, setUsers] = useState<DemoUser[]>(INITIAL_USERS);

   const handleEdit = (id: string) => {
      console.log("Edit User: ", id)
   };

   const handlePreview = (id: string)=> {
      console.log("Preview User: ", id)
   };

   const handleDelete = (id: string) => {
      setUsers((prev) => prev.filter((u) => u.id !== id))
   };


  return (
    <div className="muk-table-wrapper muk-section__item">
      <table className="muk-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Position</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
         {users.map((user) =>( 
            <tr key={user.id}>
               <td>
                  <div className="user-info">
                     <MukText as="span">{user.name}</MukText>
                     <MukText as="span">{user.email}</MukText>
                  </div>
               </td>
               <td>
                  <MukBadge
                  text={user.role} variant={user.role === 'Admin' ? 'primary' : 'secondary'}
                  size="sm"
                  icon={ROLE_ICON}
                  />
               </td>
               <td>{user.position}</td>
               <td>{user.location}</td>
               <td>
                  <div className={`muk-table__actions muk-table__actions--${actionsType}`}>
                     <MukButton size="sm" variant="primary" onClick={() => handleEdit(user.id)}>
                     Edit
                     </MukButton>
                     <MukButton size="sm" variant="secondary"onClick={() => handlePreview(user.id)}>
                        View
                     </MukButton>
                     <MukButton size="sm" variant="danger"onClick={() => handleDelete(user.id)}>
                        Delete
                     </MukButton>

                  </div>
               </td>
            </tr>
         ))}
        </tbody>
      </table>
    </div>
  );
};
