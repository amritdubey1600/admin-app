import { Shield, Users, Lock, UserCheck, ArrowRight, CheckCircle, AlertTriangle, Key } from 'lucide-react';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import Workings from '../sections/Workings';
import UserRoles from '../sections/UserRoles';
import ImportantNotes from '../sections/ImportantNotes';
import CTA from '../sections/CTA';
import Footer from '../sections/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* How It Works */}
      <Workings />
      
      {/* User Roles Section */}
      <UserRoles />

      {/* Important Notes */}
      <ImportantNotes />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;