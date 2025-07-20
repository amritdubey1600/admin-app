import { CheckCircle, Shield } from "lucide-react";

const userRoles = [
    {
      role: "Admin",
      permissions: [
        "View all user accounts",
        "Edit any user's details",
        "Delete user accounts",
        "Modify own account"
      ],
      color: "border-slate-300 bg-slate-50"
    },
    {
      role: "Regular User",
      permissions: [
        "View own profile",
        "Edit own details"
      ],
      color: "border-slate-300 bg-slate-50"
    }
];

const UserRoles = () => {
  return (
    <section className="py-20 bg-slate-50">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-16">
         <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
           User Roles & Permissions
         </h2>
         <p className="text-xl text-slate-600">
           Different access levels for different user types
         </p>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {userRoles.map((role, index) => (
           <div key={index} className={`rounded-lg border-2 p-6 ${role.color}`}>
             <div className="flex items-center mb-4">
               <Shield className="h-8 w-8 text-slate-700 mr-3" />
               <h3 className="text-2xl font-bold text-slate-900">{role.role}</h3>
             </div>
             <ul className="space-y-3">
               {role.permissions.map((permission, idx) => (
                 <li key={idx} className="flex items-center">
                   <CheckCircle className="h-5 w-5 text-slate-600 mr-3 flex-shrink-0" />
                   <span className="text-slate-700">{permission}</span>
                 </li>
               ))}
             </ul>
           </div>
         ))}
       </div>
     </div>
    </section>
  )
}

export default UserRoles
