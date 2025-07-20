import { ArrowRight } from "lucide-react";

const steps = [
    {
      number: "1",
      title: "Create Account",
      description: "Register with your email and create a secure password"
    },
    {
      number: "2", 
      title: "Login",
      description: "Access the system with your credentials"
    },
    {
      number: "3",
      title: "Manage Access",
      description: "Use the dashboard to manage users (Admin) or update your profile (User)"
    }
];

const Workings = () => {
  return (
    <section className="py-20 bg-white">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-16">
         <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
           How It Works
         </h2>
         <p className="text-xl text-slate-600">
           Simple steps to get started with our access control system
         </p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {steps.map((step, index) => (
           <div key={index} className="text-center">
             <div className="w-16 h-16 bg-slate-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
               {step.number}
             </div>
             <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
             <p className="text-slate-600">{step.description}</p>
             {index < steps.length - 1 && (
               <ArrowRight className="h-6 w-6 text-slate-400 mx-auto mt-6 hidden md:block" />
             )}
           </div>
         ))}
       </div>
     </div>
    </section>
  );
}

export default Workings
