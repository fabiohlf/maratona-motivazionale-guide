import React from 'react';
import { X, Check, Coffee, Clock, Droplet, Beef } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const GuidelinesPage = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Linee Guida del Programma</h1>
        <p className="text-gray-600">Segui queste regole per ottenere i migliori risultati durante i 10 giorni</p>
      </div>

      {/* Main Rules */}
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

      {/* Foods Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Cibi Consigliati</h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="proteins">
            <AccordionTrigger className="text-lg font-semibold">Proteine</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Pollo (senza pelle)</li>
                <li>Tacchino</li>
                <li>Pesce (salmone, tonno, merluzzo)</li>
                <li>Uova</li>
                <li>Tofu e tempeh</li>
                <li>Legumi (lenticchie, ceci, fagioli)</li>
                <li>Yogurt greco</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="vegetables">
            <AccordionTrigger className="text-lg font-semibold">Verdure</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Spinaci</li>
                <li>Broccoli</li>
                <li>Cavolfiore</li>
                <li>Zucchine</li>
                <li>Peperoni</li>
                <li>Pomodori</li>
                <li>Carote</li>
                <li>Cetrioli</li>
                <li>Insalata verde</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="fruits">
            <AccordionTrigger className="text-lg font-semibold">Frutta (solo prima delle 10:00)</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Mele</li>
                <li>Pere</li>
                <li>Kiwi</li>
                <li>Arance</li>
                <li>Bacche (fragole, mirtilli, lamponi)</li>
                <li>Pesche</li>
                <li>Albicocche</li>
              </ul>
              <p className="mt-2 text-red-500 font-semibold">Ricorda: consuma la frutta solo entro le 10:00 del mattino!</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="fats">
            <AccordionTrigger className="text-lg font-semibold">Grassi Sani</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Avocado</li>
                <li>Olio d'oliva (con moderazione)</li>
                <li>Noci e semi (con moderazione)</li>
                <li>Pesce grasso (salmone, sgombro)</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="avoid">
            <AccordionTrigger className="text-lg font-semibold">Cibi da Evitare</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside space-y-1 ml-4 text-red-500">
                <li>Cereali e prodotti a base di cereali</li>
                <li>Pasta, pane e prodotti da forno</li>
                <li>Zuccheri aggiunti e dolci</li>
                <li>Bevande zuccherate</li>
                <li>Alcol</li>
                <li>Cibi processati e fast food</li>
                <li>Snack confezionati</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Tips Section */}
      <section className="mt-8 bg-herbalife-light-green p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2 text-gray-800">Consigli per il Successo</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-herbalife-green mr-2 flex-shrink-0 mt-0.5" />
            <span>Prepara i pasti in anticipo per evitare scelte impulsive</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-herbalife-green mr-2 flex-shrink-0 mt-0.5" />
            <span>Porta sempre con te una bottiglia d'acqua</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-herbalife-green mr-2 flex-shrink-0 mt-0.5" />
            <span>Fai una leggera attività fisica quotidiana, come una camminata di 30 minuti</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-herbalife-green mr-2 flex-shrink-0 mt-0.5" />
            <span>Utilizza il tracker giornaliero per monitorare i tuoi progressi</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-herbalife-green mr-2 flex-shrink-0 mt-0.5" />
            <span>Contatta il tuo consulente Herbalife per consigli personalizzati</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default GuidelinesPage;
