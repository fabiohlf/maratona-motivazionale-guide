
import React from 'react';
import { X, Coffee, Clock, Droplet, Beef } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const MainRules = () => {
  return (
    <section className="space-y-4">
      <Card className="herbalife-card border-l-4 border-l-herbalife-green">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-herbalife-light-green p-2 flex-shrink-0">
              <X className="h-5 w-5 text-herbalife-green" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">No cereali o pasta per 10 giorni</h3>
              <p className="text-gray-600">Evita tutti i cereali, pasta, pane e prodotti a base di farina durante il programma.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="herbalife-card border-l-4 border-l-herbalife-green">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-herbalife-light-green p-2 flex-shrink-0">
              <Clock className="h-5 w-5 text-herbalife-green" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Stop alla frutta dopo le 10:00</h3>
              <p className="text-gray-600">Consuma la frutta solo entro le 10:00 del mattino per un migliore metabolismo.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="herbalife-card border-l-4 border-l-herbalife-green">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-herbalife-light-green p-2 flex-shrink-0">
              <Coffee className="h-5 w-5 text-herbalife-green" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">2 frullati Herbalife al giorno</h3>
              <p className="text-gray-600">Consuma due frullati Herbalife al giorno a colazione e pranzo o cena.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="herbalife-card border-l-4 border-l-herbalife-green">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-herbalife-light-green p-2 flex-shrink-0">
              <Droplet className="h-5 w-5 text-herbalife-green" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Idratazione corretta</h3>
              <p className="text-gray-600">Bevi almeno 8 bicchieri d'acqua al giorno (circa 2 litri) per mantenere un'idratazione ottimale.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="herbalife-card border-l-4 border-l-herbalife-green">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-herbalife-light-green p-2 flex-shrink-0">
              <Beef className="h-5 w-5 text-herbalife-green" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Proteine adeguate</h3>
              <p className="text-gray-600">Consuma circa 1,2 g di proteine per kg del tuo peso ideale ogni giorno.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default MainRules;
