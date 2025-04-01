
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplet, Coffee, Salad, Clock, BookOpen, Calendar, BarChart2, Library } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const HomePage = () => {
  return (
    <div className="space-y-8 pb-16 animate-fade-in">
      {/* Hero Section */}
      <section className="rounded-2xl overflow-hidden shadow-lg">
        <div className="herbalife-gradient p-6 text-white">
          <h1 className="text-3xl font-bold mb-4">Benvenuto alla Maratona 10 Giorni!</h1>
          <p className="text-lg mb-6">
            Un percorso di 10 giorni che ti guiderà verso uno stile di vita più sano con i prodotti Herbalife.
          </p>
          <Link to="/guidelines">
            <Button className="bg-white text-herbalife-green hover:bg-gray-100 flex items-center gap-2">
              Inizia Ora <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="p-4 bg-white">
          <p className="text-gray-600 italic">
            "Cambia la tua alimentazione, cambia la tua vita. 10 giorni per iniziare un nuovo percorso."
          </p>
        </div>
      </section>

      {/* Program Highlights */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Cosa prevede il programma?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="herbalife-card">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-herbalife-light-green p-3 rounded-full">
                  <Coffee className="h-6 w-6 text-herbalife-green" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Frullati Nutrienti</h3>
                  <p className="text-gray-600">Due frullati Herbalife al giorno per un'alimentazione equilibrata.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="herbalife-card">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-herbalife-light-green p-3 rounded-full">
                  <Salad className="h-6 w-6 text-herbalife-green" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Alimentazione Guidata</h3>
                  <p className="text-gray-600">Consigli alimentari studiati per massimizzare i risultati.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="herbalife-card">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-herbalife-light-green p-3 rounded-full">
                  <Droplet className="h-6 w-6 text-herbalife-green" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Idratazione Corretta</h3>
                  <p className="text-gray-600">Supporto per mantenere un'idratazione ottimale.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="herbalife-card">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-herbalife-light-green p-3 rounded-full">
                  <Clock className="h-6 w-6 text-herbalife-green" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Piano Giornaliero</h3>
                  <p className="text-gray-600">Un percorso strutturato giorno per giorno per guidarti.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Access */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Accesso Rapido</h2>
        <div className="grid grid-cols-2 gap-4">
          <Link to="/guidelines" className="herbalife-gradient text-white p-4 rounded-xl flex flex-col items-center justify-center text-center h-32 shadow-md hover:shadow-lg transition-shadow">
            <BookOpen className="h-8 w-8 mb-2" />
            <span className="font-semibold">Linee Guida</span>
          </Link>
          
          <Link to="/daily-plan" className="herbalife-gradient-orange text-white p-4 rounded-xl flex flex-col items-center justify-center text-center h-32 shadow-md hover:shadow-lg transition-shadow">
            <Calendar className="h-8 w-8 mb-2" />
            <span className="font-semibold">Piano Giornaliero</span>
          </Link>
          
          <Link to="/tracker" className="herbalife-gradient-orange text-white p-4 rounded-xl flex flex-col items-center justify-center text-center h-32 shadow-md hover:shadow-lg transition-shadow">
            <BarChart2 className="h-8 w-8 mb-2" />
            <span className="font-semibold">Diario Giornaliero</span>
          </Link>
          
          <Link to="/resources" className="herbalife-gradient text-white p-4 rounded-xl flex flex-col items-center justify-center text-center h-32 shadow-md hover:shadow-lg transition-shadow">
            <Library className="h-8 w-8 mb-2" />
            <span className="font-semibold">Risorse Utili</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
