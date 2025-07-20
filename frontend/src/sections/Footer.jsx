import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white pb-12">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex flex-col md:flex-row justify-between items-center">
         <div className="flex items-center mb-4 md:mb-0">
           <Shield className="h-8 w-8 mr-3" />
           <span className="text-xl font-bold">Authenticator</span>
         </div>
         <div className="text-slate-400">
           <p>&copy; 2025 Authenticator Secure user management.</p>
         </div>
       </div>
     </div>
    </footer>
  );
}

export default Footer;
