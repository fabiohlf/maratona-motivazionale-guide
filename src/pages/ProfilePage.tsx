
import React, { useState } from 'react';
import { User, Settings, BarChart2, Calculator, Save } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/components/ui/use-toast';

const ProfilePage = () => {
  // Load user data from localStorage or use defaults
  const [userData, setUserData] = useState(() => {
    if (typeof window === 'undefined') return {
      name: '',
      weight: '',
      targetWeight: '',
      height: ''
    };
    
    const stored = localStorage.getItem('herbalife-user-data');
    return stored ? JSON.parse(stored) : {
      name: '',
      weight: '',
      targetWeight: '',
      height: ''
    };
  });
  
  // Current day of the program (based on first tracker entry)
  const [currentDay, setCurrentDay] = useState(() => {
    if (typeof window === 'undefined') return 1;
    
    const trackerData = localStorage.getItem('herbalife-tracker-data');
    if (!trackerData) return 1;
    
    const dates = Object.keys(JSON.parse(trackerData));
    if (dates.length === 0) return 1;
    
    // Sort dates and calculate days since the first entry
    dates.sort();
    const firstDate = new Date(dates[0]);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - firstDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return Math.min(diffDays + 1, 10); // Cap at 10 days
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const saveProfile = () => {
    localStorage.setItem('herbalife-user-data', JSON.stringify(userData));
    toast({
      title: "Profilo Salvato",
      description: "Le tue informazioni personali sono state aggiornate con successo.",
    });
  };

  // Calculate protein needs (1.2g per kg of target weight)
  const calculateProteinNeeds = () => {
    const targetWeight = parseFloat(userData.targetWeight);
    if (isNaN(targetWeight)) return 0;
    return Math.round(targetWeight * 1.2);
  };

  // Calculate BMI
  const calculateBMI = () => {
    const weight = parseFloat(userData.weight);
    const height = parseFloat(userData.height) / 100; // convert cm to m
    
    if (isNaN(weight) || isNaN(height) || height === 0) return 0;
    
    return (weight / (height * height)).toFixed(1);
  };

  // Interpret BMI
  const interpretBMI = (bmi: number) => {
    if (bmi < 18.5) return "Sottopeso";
    if (bmi < 25) return "Normopeso";
    if (bmi < 30) return "Sovrappeso";
    return "Obesità";
  };

  const proteinNeeds = calculateProteinNeeds();
  const bmi = calculateBMI();

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Il Mio Profilo</h1>
        <p className="text-gray-600">Gestisci le tue informazioni personali e monitora i tuoi progressi</p>
      </div>

      {/* Program Progress */}
      <Card className="herbalife-card border-t-4 border-t-herbalife-green">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart2 className="h-5 w-5 text-herbalife-green" />
            Progressi del Programma
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-4">
            <span className="text-4xl font-bold text-herbalife-green">{currentDay}</span>
            <span className="text-xl text-gray-500">/10</span>
            <p className="text-gray-600 mt-1">giorni completati</p>
          </div>
          
          <Progress value={(currentDay / 10) * 100} className="h-2 mb-4" />
          
          <div className="bg-herbalife-light-green p-4 rounded-lg text-center">
            {currentDay < 10 ? (
              <p>Continua così! Sei a {Math.round((currentDay / 10) * 100)}% del tuo percorso.</p>
            ) : (
              <p className="font-semibold">Congratulazioni! Hai completato la Maratona 10 Giorni!</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card className="herbalife-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Informazioni Personali
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input 
                type="text" 
                id="name" 
                name="name"
                placeholder="Il tuo nome" 
                value={userData.name}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="weight">Peso Attuale (kg)</Label>
              <Input 
                type="number" 
                id="weight" 
                name="weight"
                placeholder="Peso in kg" 
                value={userData.weight}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="targetWeight">Peso Ideale (kg)</Label>
              <Input 
                type="number" 
                id="targetWeight" 
                name="targetWeight"
                placeholder="Peso ideale in kg" 
                value={userData.targetWeight}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="height">Altezza (cm)</Label>
              <Input 
                type="number" 
                id="height" 
                name="height"
                placeholder="Altezza in cm" 
                value={userData.height}
                onChange={handleInputChange}
              />
            </div>
            
            <Button 
              onClick={saveProfile} 
              className="w-full flex items-center justify-center gap-2"
            >
              <Save className="h-4 w-4" /> Salva Profilo
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Calculators */}
      <Card className="herbalife-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Calcolatori
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Protein Calculator */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Fabbisogno Proteico Giornaliero</h3>
              <p className="text-gray-600 mb-4">
                Basato sul tuo peso ideale ({userData.targetWeight || '?'} kg), il fabbisogno proteico giornaliero consigliato è:
              </p>
              <div className="text-center">
                <span className="text-3xl font-bold text-herbalife-green">
                  {proteinNeeds || '?'}
                </span>
                <span className="text-xl"> g</span>
                <p className="text-gray-600 mt-1">di proteine al giorno</p>
              </div>
            </div>
            
            {/* BMI Calculator */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Indice di Massa Corporea (BMI)</h3>
              <p className="text-gray-600 mb-4">
                Basato sul tuo peso attuale ({userData.weight || '?'} kg) e altezza ({userData.height || '?'} cm):
              </p>
              <div className="text-center">
                <span className="text-3xl font-bold text-herbalife-green">
                  {bmi || '?'}
                </span>
                <p className="text-gray-600 mt-1">
                  {bmi > 0 ? interpretBMI(parseFloat(bmi)) : 'Inserisci peso e altezza'}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
