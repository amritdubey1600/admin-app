import { Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate=useNavigate();

  return (
    <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-slate-600 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-700 opacity-15 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Shield className="h-20 w-20 mx-auto mb-6 text-white drop-shadow-lg" />
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
          Secure Access Control
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-slate-300 max-w-4xl mx-auto leading-relaxed">
          A comprehensive user management system where admins control access and users manage their own profiles securely.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button onClick={ () => navigate('/signup') } className="px-8 py-4 w-full sm:w-fit bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get Started
          </button>
          <a href="#Features" className='w-full sm:w-fit block'>
            <button className="px-8 py-4 w-full sm:w-fit border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
