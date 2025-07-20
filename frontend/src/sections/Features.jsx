import { Users, Lock, UserCheck, Key } from "lucide-react";

const features = [
    {
      icon: Users,
      title: "User Management",
      description: "Admins can view, edit, and delete user accounts with full administrative control."
    },
    {
      icon: Lock,
      title: "Secure Access",
      description: "Role-based access control ensures users only see and modify what they're authorized to."
    },
    {
      icon: UserCheck,
      title: "Account Control",
      description: "Users can manage their own profiles while admins have system-wide access."
    },
    {
      icon: Key,
      title: "Authentication",
      description: "Secure login system with token-based authentication for enhanced security."
    }
];

const Features = () => {
  return (
    <section id="Features" className="py-20 bg-slate-50">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-16">
         <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
           System Features
         </h2>
         <p className="text-xl text-slate-600 max-w-2xl mx-auto">
           Our access control system provides comprehensive user management with role-based permissions
         </p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         {features.map((feature, index) => (
           <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-slate-200">
             <div className="bg-slate-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
               <feature.icon className="h-6 w-6 text-slate-700" />
             </div>
             <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
             <p className="text-slate-600">{feature.description}</p>
           </div>
         ))}
       </div>
     </div>
    </section>
  );
}

export default Features;
