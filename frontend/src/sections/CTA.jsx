import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate=useNavigate();

  return (
    <section className="py-20 bg-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 text-slate-300">
          Join our secure access control system today and manage your account with confidence.
        </p>
        <div onClick={ () => navigate('/signup') } className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-slate-800 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
            Create Account
          </button>
          <button onClick={ () => navigate('/login') } className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors">
            Login to Existing Account
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
