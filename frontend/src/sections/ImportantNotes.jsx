import { AlertTriangle } from "lucide-react";

const ImportantNotes = () => {
  return (
    <section className="py-20 bg-white">
     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="bg-slate-50 border-l-4 border-slate-400 p-6 rounded-lg">
         <div className="flex items-start">
           <AlertTriangle className="h-6 w-6 text-slate-600 mr-3 flex-shrink-0 mt-0.5" />
           <div>
             <h3 className="text-lg font-semibold text-slate-800 mb-2">Important Security Notes</h3>
             <ul className="space-y-2 text-slate-700">
               <li>• Admin users have full control over all accounts - use admin privileges responsibly</li>
               <li>• Regular users can only modify their own account information</li>
               <li>• Account deletion by admins is permanent and cannot be undone</li>
               <li>• Keep your login credentials secure and don't share them with others</li>
               <li>• Contact your system administrator if you need role changes or have access issues</li>
             </ul>
           </div>
         </div>
       </div>
     </div>
    </section>
  );
}

export default ImportantNotes;
