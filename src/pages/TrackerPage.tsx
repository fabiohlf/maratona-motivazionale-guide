
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Droplet, Coffee, Dumbbell, PenSquare, Apple, Pizza } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';

// Get stored tracker data from localStorage
const getStoredTrackerData = () => {
  if (typeof window === 'undefined') return {};
  
  const stored = localStorage.getItem('herbalife-tracker-data');
  return stored ? JSON.parse(stored) : {};
};

// Get today's data or initialize new
const getTodayData = (date: string) => {
  const storedData = getStoredTrackerData();
  return storedData[date] || {
    water: 0,
    shakes: {
      breakfast: false,
      lunch: false,
      dinner: false
    },
    activity: false,
    notes: "",
    meals: {
      snacks: "",
      freeMeal: ""
    }
  };
};

const TrackerPage = () => {
  const today = format(new Date(), 'yyyy-MM-dd');
  const [currentDate, setCurrentDate] = useState(today);
  const [trackerData, setTrackerData] = useState(getTodayData(currentDate));

  // Load data when date changes
  useEffect(() => {
    setTrackerData(getTodayData(currentDate));
  }, [currentDate]);

  // Save data to localStorage when it changes
  useEffect(() => {
    const allData = getStoredTrackerData();
    allData[currentDate] = trackerData;
    localStorage.setItem('herbalife-tracker-data', JSON.stringify(allData));
  }, [trackerData, currentDate]);

  const navigateDate = (direction: number) => {
    const date = new Date(currentDate);
    date.setDate(date.getDate() + direction);
    setCurrentDate(format(date, 'yyyy-MM-dd'));
  };

  const handleWaterChange = (amount: number) => {
    const newWater = Math.max(0, Math.min(8, trackerData.water + amount));
    setTrackerData({ ...trackerData, water: newWater });
    
    if (amount > 0) {
      toast({
        title: "Idratazione aggiornata",
        description: `Hai bevuto ${newWater} bicchieri d'acqua oggi. ${newWater === 8 ? 'Ottimo lavoro!' : ''}`,
      });
    }
  };

  const handleShakeChange = (meal: 'breakfast' | 'lunch' | 'dinner') => {
    const newShakes = {
      ...trackerData.shakes,
      [meal]: !trackerData.shakes[meal]
    };
    
    setTrackerData({ ...trackerData, shakes: newShakes });
    
    if (newShakes[meal]) {
      toast({
        title: "Frullato registrato",
        description: `Hai consumato il frullato per ${
          meal === 'breakfast' ? 'colazione' : meal === 'lunch' ? 'pranzo' : 'cena'
        }. Continua così!`,
      });
    }
  };

  const handleActivityChange = () => {
    const newActivity = !trackerData.activity;
    setTrackerData({ ...trackerData, activity: newActivity });
    
    if (newActivity) {
      toast({
        title: "Attività fisica completata",
        description: "Congratulazioni per aver completato l'attività fisica di oggi!",
      });
    }
  };

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTrackerData({ ...trackerData, notes: e.target.value });
  };

  const handleMealChange = (type: 'snacks' | 'freeMeal', value: string) => {
    setTrackerData({
      ...trackerData,
      meals: {
        ...trackerData.meals,
        [type]: value
      }
    });

    toast({
      title: type === 'snacks' ? "Spuntini aggiornati" : "Pasto libero aggiornato",
      description: `Hai registrato cosa hai mangiato oggi.`,
    });
  };

  const formatDisplayDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, 'dd MMMM yyyy');
  };

  const isToday = currentDate === today;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Tracker Giornaliero</h1>
        <p className="text-gray-600">Monitora i tuoi progressi durante la maratona</p>
      </div>

      {/* Date Navigation */}
      <div className="flex items-center justify-between mb-4">
        <Button 
          variant="outline" 
          onClick={() => navigateDate(-1)} 
          className="flex items-center gap-1"
        >
          <ChevronLeft className="h-4 w-4" /> Giorno Precedente
        </Button>
        <div className="text-center flex items-center">
          <CalendarIcon className="h-4 w-4 mr-2" />
          <span className="font-semibold">
            {isToday ? 'Oggi' : formatDisplayDate(currentDate)}
          </span>
        </div>
        <Button 
          variant="outline" 
          onClick={() => navigateDate(1)} 
          disabled={currentDate >= today}
          className="flex items-center gap-1"
        >
          Giorno Successivo <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Meals Tracker */}
      <Card className="herbalife-card">
        <CardHeader className="bg-amber-600 text-white">
          <CardTitle className="flex items-center gap-2">
            <Apple className="h-5 w-5" /> Spuntini
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="grid w-full gap-2">
              <Textarea 
                id="snacks" 
                placeholder="Cosa hai mangiato come spuntini? (es. frutta secca, barrette Herbalife, ecc.)"
                value={trackerData.meals?.snacks || ''}
                onChange={(e) => handleMealChange('snacks', e.target.value)}
                rows={2}
              />
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Ricorda di scegliere spuntini salutari come barrette Herbalife, frutta secca o altri snack dalla lista consigliata.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Free Meal Tracker */}
      <Card className="herbalife-card">
        <CardHeader className="bg-amber-700 text-white">
          <CardTitle className="flex items-center gap-2">
            <Pizza className="h-5 w-5" /> Pasto Libero
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="grid w-full gap-2">
              <Textarea 
                id="free-meal" 
                placeholder="Descrivi il tuo pasto libero di oggi"
                value={trackerData.meals?.freeMeal || ''}
                onChange={(e) => handleMealChange('freeMeal', e.target.value)}
                rows={2}
              />
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Anche nel pasto libero, cerca di mantenere un buon equilibrio nutrizionale.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Water Tracker */}
      <Card className="herbalife-card">
        <CardHeader className="herbalife-gradient text-white">
          <CardTitle className="flex items-center gap-2">
            <Droplet className="h-5 w-5" /> Idratazione
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="text-center mb-4">
            <span className="text-4xl font-bold text-herbalife-green">{trackerData.water}</span>
            <span className="text-xl text-gray-500">/8</span>
            <p className="text-gray-600 mt-1">bicchieri d'acqua</p>
          </div>
          
          <Progress value={(trackerData.water / 8) * 100} className="h-2 mb-6" />
          
          <div className="flex justify-center gap-4">
            <Button variant="outline" onClick={() => handleWaterChange(-1)} disabled={trackerData.water <= 0}>
              -1 bicchiere
            </Button>
            <Button onClick={() => handleWaterChange(1)} disabled={trackerData.water >= 8}>
              +1 bicchiere
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Shakes Tracker */}
      <Card className="herbalife-card">
        <CardHeader className="herbalife-gradient-orange text-white">
          <CardTitle className="flex items-center gap-2">
            <Coffee className="h-5 w-5" /> Frullati Herbalife
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="shake-breakfast" 
                checked={trackerData.shakes.breakfast} 
                onCheckedChange={() => handleShakeChange('breakfast')}
              />
              <label
                htmlFor="shake-breakfast"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Frullato per colazione
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="shake-lunch" 
                checked={trackerData.shakes.lunch} 
                onCheckedChange={() => handleShakeChange('lunch')}
              />
              <label
                htmlFor="shake-lunch"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Frullato per pranzo
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="shake-dinner" 
                checked={trackerData.shakes.dinner} 
                onCheckedChange={() => handleShakeChange('dinner')}
              />
              <label
                htmlFor="shake-dinner"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Frullato per cena
              </label>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Ricorda di consumare 2 frullati Herbalife al giorno!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Activity Tracker */}
      <Card className="herbalife-card">
        <CardHeader className="bg-gray-800 text-white">
          <CardTitle className="flex items-center gap-2">
            <Dumbbell className="h-5 w-5" /> Attività Fisica
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="activity" 
              checked={trackerData.activity} 
              onCheckedChange={handleActivityChange}
            />
            <label
              htmlFor="activity"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Ho completato l'attività fisica giornaliera (almeno 30 minuti di camminata)
            </label>
          </div>
          
          <div className="mt-4 text-center">
            {trackerData.activity ? (
              <p className="text-herbalife-green font-semibold">
                Ottimo lavoro con l'attività fisica oggi!
              </p>
            ) : (
              <p className="text-gray-600">
                L'attività fisica è essenziale per ottimizzare i risultati del programma.
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Notes */}
      <Card className="herbalife-card">
        <CardHeader className="bg-gray-100">
          <CardTitle className="flex items-center gap-2 text-gray-800">
            <PenSquare className="h-5 w-5" /> Note del Giorno
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <Textarea
            placeholder="Inserisci le tue note, riflessioni o come ti senti oggi..."
            value={trackerData.notes}
            onChange={handleNotesChange}
            rows={4}
            className="resize-none"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default TrackerPage;
