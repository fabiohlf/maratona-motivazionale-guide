
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from '@/hooks/use-toast';
import { Lock } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const formSchema = z.object({
  password: z.string().min(1, {
    message: "La password è obbligatoria",
  }),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();
  
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const appPassword = "herbalife2024"; // In a real app, this would be stored securely
    
    if (values.password === appPassword) {
      login();
      toast({
        title: "Accesso effettuato",
        description: "Benvenuto alla Maratona 10 Giorni!",
      });
      navigate('/');
    } else {
      toast({
        title: "Password errata",
        description: "La password inserita non è corretta.",
        variant: "destructive",
      });
      form.reset();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-herbalife-green">
            <Lock className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">Maratona 10 Giorni</CardTitle>
          <p className="text-sm text-gray-500">
            Inserisci la password per accedere
          </p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder="Inserisci la password" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Accedi
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="border-t p-4 text-center">
          <p className="text-xs text-gray-500 w-full">
            Per ottenere la password contatta il tuo coach Herbalife
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
