
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Coffee, Utensils, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Daily plan data
const dailyPlans = [
  {
    day: 1,
    title: "Iniziamo!",
    description: "Il primo giorno è fondamentale per impostare il ritmo. Focus sull'idratazione e abituarsi ai frullati.",
    meals: [
      { time: "Colazione", description: "Frullato Herbalife", icon: Coffee },
      { time: "Spuntino", description: "Yogurt greco con cannella", icon: Coffee },
      { time: "Pranzo", description: "Frullato Herbalife + verdure (insalata verde, pomodori, cetrioli) con tonno", icon: Utensils },
      { time: "Merenda", description: "Bastoncini di verdure crude", icon: Coffee },
      { time: "Cena", description: "Frullato Nutrizionale (F1) o cena equilibrata e proteica (40% carboidrati dalle verdure, 30% proteine, 30% grassi buoni)", icon: Utensils },
    ],
    tips: "Bevi molta acqua durante la giornata e prepara i pasti in anticipo.",
    activity: "Camminata leggera di 20 minuti"
  },
  {
    day: 2,
    title: "Continuiamo il Percorso",
    description: "Oggi è importante consolidare le abitudini del primo giorno e mantenere alta l'idratazione.",
    meals: [
      { time: "Colazione", description: "Frullato Herbalife", icon: Coffee },
      { time: "Spuntino", description: "Una manciata di mandorle non salate", icon: Coffee },
      { time: "Pranzo", description: "Frullato Herbalife + verdure (zucchine grigliate, carote)", icon: Utensils },
      { time: "Merenda", description: "Cetrioli a fette con hummus", icon: Coffee },
      { time: "Cena", description: "Frullato Nutrizionale (F1) o cena equilibrata e proteica (40% carboidrati dalle verdure, 30% proteine, 30% grassi buoni)", icon: Utensils },
    ],
    tips: "Monitora la tua fame reale. Bevi un bicchiere d'acqua prima dei pasti.",
    activity: "Stretching mattutino e camminata di 25 minuti"
  },
  // Days 3-10 would follow the same pattern
  {
    day: 3,
    title: "Aumentiamo l'Energia",
    description: "Oggi concentriamoci sull'energia e sul mantenere alta la motivazione.",
    meals: [
      { time: "Colazione", description: "Frullato Herbalife", icon: Coffee },
      { time: "Spuntino", description: "Bastoncini di sedano con un po' di formaggio light", icon: Coffee },
      { time: "Pranzo", description: "Frullato Herbalife + verdure (peperoni grigliati, radicchio)", icon: Utensils },
      { time: "Merenda", description: "Avocado (1/4) con limone", icon: Coffee },
      { time: "Cena", description: "Frullato Nutrizionale (F1) o cena equilibrata e proteica (40% carboidrati dalle verdure, 30% proteine, 30% grassi buoni)", icon: Utensils },
    ],
    tips: "Ricorda di bere un bicchiere d'acqua appena sveglio per riattivare il metabolismo.",
    activity: "Camminata veloce di 30 minuti"
  },
  // Continue with days 4-10...
  {
    day: 4,
    title: "Rafforzare le Abitudini",
    description: "A questo punto dovresti iniziare a sentire i benefici del programma.",
    meals: [
      { time: "Colazione", description: "Frullato Herbalife", icon: Coffee },
      { time: "Spuntino", description: "Un uovo sodo", icon: Coffee },
      { time: "Pranzo", description: "Frullato Herbalife + verdure (insalata di pomodori, finocchi)", icon: Utensils },
      { time: "Merenda", description: "Bastoncini di carote", icon: Coffee },
      { time: "Cena", description: "Frullato Nutrizionale (F1) o cena equilibrata e proteica (40% carboidrati dalle verdure, 30% proteine, 30% grassi buoni)", icon: Utensils },
    ],
    tips: "Fai attenzione alle spezie: curcuma, pepe e zenzero possono aiutare il metabolismo.",
    activity: "Alternanza di camminata e jogging leggero per 20 minuti"
  },
  {
    day: 5,
    title: "Metà Percorso",
    description: "Sei arrivato a metà del percorso! Oggi celebriamo i progressi fatti finora.",
    meals: [
      { time: "Colazione", description: "Frullato Herbalife", icon: Coffee },
      { time: "Spuntino", description: "Yogurt greco con semi di chia", icon: Coffee },
      { time: "Pranzo", description: "Frullato Herbalife + verdure miste grigliate (zucchine, melanzane, peperoni)", icon: Utensils },
      { time: "Merenda", description: "Tofu affumicato (30g)", icon: Coffee },
      { time: "Cena", description: "Frullato Nutrizionale (F1) o cena equilibrata e proteica (40% carboidrati dalle verdure, 30% proteine, 30% grassi buoni)", icon: Utensils },
    ],
    tips: "Fai una lista dei cambiamenti positivi che hai notato finora per mantenerti motivato.",
    activity: "Yoga leggero o stretching completo (30 minuti)"
  },
  // Days 6-10...
  {
    day: 6,
    title: "Nuova Energia",
    description: "Oggi concentriamoci sul rinnovare l'energia e la motivazione per la seconda metà.",
    meals: [
      { time: "Colazione", description: "Frullato Herbalife", icon: Coffee },
      { time: "Spuntino", description: "Bastoncini di peperone con hummus leggero", icon: Coffee },
      { time: "Pranzo", description: "Frullato Herbalife + verdure (zucchine al vapore, pomodorini)", icon: Utensils },
      { time: "Merenda", description: "Una manciata di pistacchi non salati", icon: Coffee },
      { time: "Cena", description: "Frullato Nutrizionale (F1) o cena equilibrata e proteica (40% carboidrati dalle verdure, 30% proteine, 30% grassi buoni)", icon: Utensils },
    ],
    tips: "Sperimenta con nuovi condimenti a base di erbe per rendere i pasti più vari e gustosi.",
    activity: "Camminata di 40 minuti a passo sostenuto"
  },
  {
    day: 7,
    title: "Settimo Giorno",
    description: "Una settimana completata! Il tuo corpo sta già beneficiando dei cambiamenti.",
    meals: [
      { time: "Colazione", description: "Frullato Herbalife", icon: Coffee },
      { time: "Spuntino", description: "Gamberetti bolliti (60g)", icon: Coffee },
      { time: "Pranzo", description: "Frullato Herbalife + verdure (insalata mista, cetrioli, ravanelli)", icon: Utensils },
      { time: "Merenda", description: "Cubetti di formaggio light (30g)", icon: Coffee },
      { time: "Cena", description: "Frullato Nutrizionale (F1) o cena equilibrata e proteica (40% carboidrati dalle verdure, 30% proteine, 30% grassi buoni)", icon: Utensils },
    ],
    tips: "Rifletti sui cambiamenti nelle tue abitudini alimentari e prendi nota di come ti senti.",
    activity: "Allenamento a intervalli: alternare 2 minuti di camminata con 1 minuto di corsa (20 minuti totali)"
  },
  {
    day: 8,
    title: "Ottimizzazione",
    description: "È il momento di ottimizzare il tuo percorso in base alle esperienze dei giorni precedenti.",
    meals: [
      { time: "Colazione", description: "Frullato Herbalife", icon: Coffee },
      { time: "Spuntino", description: "Bastoncini di cetriolo", icon: Coffee },
      { time: "Pranzo", description: "Frullato Herbalife + verdure (broccoli al vapore, cavolfiore)", icon: Utensils },
      { time: "Merenda", description: "Petto di tacchino a fette (30g)", icon: Coffee },
      { time: "Cena", description: "Frullato Nutrizionale (F1) o cena equilibrata e proteica (40% carboidrati dalle verdure, 30% proteine, 30% grassi buoni)", icon: Utensils },
    ],
    tips: "Cerca di dormire almeno 7-8 ore per ottimizzare i risultati del programma.",
    activity: "Camminata in salita o scale (30 minuti)"
  },
  {
    day: 9,
    title: "Penultimo Giorno",
    description: "Sei quasi alla fine del percorso! Mantieni alta la concentrazione.",
    meals: [
      { time: "Colazione", description: "Frullato Herbalife", icon: Coffee },
      { time: "Spuntino", description: "Albume d'uovo (1-2) cotto", icon: Coffee },
      { time: "Pranzo", description: "Frullato Herbalife + verdure (asparagi, spinaci)", icon: Utensils },
      { time: "Merenda", description: "Yogurt greco magro", icon: Coffee },
      { time: "Cena", description: "Frullato Nutrizionale (F1) o cena equilibrata e proteica (40% carboidrati dalle verdure, 30% proteine, 30% grassi buoni)", icon: Utensils },
    ],
    tips: "Inizia a pensare a come manterrai le buone abitudini dopo la fine del programma.",
    activity: "Combinazione di esercizi: camminata, stretching e esercizi di respirazione (40 minuti)"
  },
  {
    day: 10,
    title: "Traguardo Finale",
    description: "Congratulazioni! Hai completato la Maratona 10 Giorni. Oggi celebriamo i tuoi risultati!",
    meals: [
      { time: "Colazione", description: "Frullato Herbalife", icon: Coffee },
      { time: "Spuntino", description: "Noci (una piccola manciata)", icon: Coffee },
      { time: "Pranzo", description: "Frullato Herbalife + verdure colorate (carote, pomodori, lattuga)", icon: Utensils },
      { time: "Merenda", description: "Bastoncini di sedano con ricotta light", icon: Coffee },
      { time: "Cena", description: "Frullato Nutrizionale (F1) o cena equilibrata e proteica (40% carboidrati dalle verdure, 30% proteine, 30% grassi buoni)", icon: Utensils },
    ],
    tips: "Prenditi del tempo per riflettere sui risultati ottenuti e pianifica come mantenere il tuo nuovo stile di vita.",
    activity: "Attività preferita a scelta (45 minuti) per celebrare il traguardo"
  }
];

const DailyPlanPage = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const plan = dailyPlans.find(p => p.day === currentDay) || dailyPlans[0];

  const navigateDay = (direction: number) => {
    const newDay = currentDay + direction;
    if (newDay > 0 && newDay <= dailyPlans.length) {
      setCurrentDay(newDay);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Piano Giornaliero</h1>
        <p className="text-gray-600">Segui il programma giorno per giorno</p>
      </div>

      {/* Day Navigation */}
      <div className="flex items-center justify-between mb-4">
        <Button 
          variant="outline" 
          onClick={() => navigateDay(-1)} 
          disabled={currentDay === 1}
          className="flex items-center gap-1"
        >
          <ChevronLeft className="h-4 w-4" /> Giorno Precedente
        </Button>
        <div className="text-center">
          <span className="text-lg font-semibold">Giorno {currentDay}/10</span>
        </div>
        <Button 
          variant="outline" 
          onClick={() => navigateDay(1)} 
          disabled={currentDay === dailyPlans.length}
          className="flex items-center gap-1"
        >
          Giorno Successivo <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Day Overview */}
      <Card className="herbalife-card">
        <CardHeader className="herbalife-gradient text-white">
          <CardTitle className="text-2xl">{plan.title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="mb-4">{plan.description}</p>
          
          <div className="bg-herbalife-light-green p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2 mb-2">
              <Sun className="h-5 w-5" /> Consiglio del Giorno
            </h3>
            <p>{plan.tips}</p>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2 mb-2">
              <Moon className="h-5 w-5" /> Attività Suggerita
            </h3>
            <p>{plan.activity}</p>
          </div>
        </CardContent>
      </Card>

      {/* Meal Plan */}
      <div>
        <h2 className="text-xl font-bold mb-4 text-gray-800">Piano Alimentare - Giorno {currentDay}</h2>
        
        <Tabs defaultValue="all">
          <TabsList className="mb-4">
            <TabsTrigger value="all">Tutti i Pasti</TabsTrigger>
            <TabsTrigger value="morning">Mattina</TabsTrigger>
            <TabsTrigger value="afternoon">Pomeriggio</TabsTrigger>
            <TabsTrigger value="evening">Sera</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            {plan.meals.map((meal, index) => (
              <MealCard key={index} meal={meal} />
            ))}
          </TabsContent>
          
          <TabsContent value="morning" className="space-y-4">
            {plan.meals.slice(0, 2).map((meal, index) => (
              <MealCard key={index} meal={meal} />
            ))}
          </TabsContent>
          
          <TabsContent value="afternoon" className="space-y-4">
            {plan.meals.slice(2, 4).map((meal, index) => (
              <MealCard key={index} meal={meal} />
            ))}
          </TabsContent>
          
          <TabsContent value="evening" className="space-y-4">
            {plan.meals.slice(4).map((meal, index) => (
              <MealCard key={index} meal={meal} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

// Meal Card Component
interface Meal {
  time: string;
  description: string;
  icon: React.ElementType;
}

const MealCard = ({ meal }: { meal: Meal }) => {
  const Icon = meal.icon;
  
  return (
    <Card className="herbalife-card">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="bg-herbalife-light-green p-3 rounded-full flex-shrink-0">
            <Icon className="h-5 w-5 text-herbalife-green" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{meal.time}</h3>
            <p className="text-gray-600">{meal.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyPlanPage;
