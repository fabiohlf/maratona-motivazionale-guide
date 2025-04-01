
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Calendar, BarChart2, Library, User } from 'lucide-react';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Linee Guida', href: '/guidelines', icon: BookOpen },
    { name: 'Piano Giornaliero', href: '/daily-plan', icon: Calendar },
    { name: 'Diario Giornaliero', href: '/tracker', icon: BarChart2 },
    { name: 'Risorse', href: '/resources', icon: Library },
    { name: 'Profilo', href: '/profile', icon: User }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="herbalife-gradient py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-2xl font-bold">Maratona 10 Giorni</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-6">
        {children}
      </main>

      {/* Bottom navigation */}
      <nav className="bg-white border-t border-gray-200 fixed bottom-0 w-full">
        <div className="flex justify-around max-w-md mx-auto">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex flex-col items-center pt-2 pb-1 ${
                  isActive 
                    ? 'text-herbalife-green' 
                    : 'text-gray-500 hover:text-herbalife-green'
                }`}
              >
                <item.icon className="h-6 w-6" />
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
      
      {/* Bottom padding to account for fixed navigation */}
      <div className="h-16"></div>
    </div>
  );
};

export default AppLayout;
