
import React from 'react';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

const LogoutButton = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logout effettuato",
      description: "Hai effettuato il logout con successo.",
    });
    navigate('/login');
  };

  return (
    <Button 
      variant="destructive" 
      onClick={handleLogout}
      className="w-full mt-4"
    >
      <LogOut className="mr-2 h-4 w-4" /> Esci dall'account
    </Button>
  );
};

export default LogoutButton;
