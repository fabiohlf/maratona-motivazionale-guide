
import React from 'react';
import { X, Check, Coffee, Clock, Droplet, Beef } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
        <h2 className="text-2xl font-bold mb-4 text-gray-800">🌟 Cibi Consigliati</h2>
        
        <Tabs defaultValue="proteins" className="w-full">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-5 mb-6">
            <TabsTrigger value="proteins">Proteine</TabsTrigger>
            <TabsTrigger value="vegetables">Verdure</TabsTrigger>
            <TabsTrigger value="fruits">Frutta</TabsTrigger>
            <TabsTrigger value="fats">Grassi Sani</TabsTrigger>
            <TabsTrigger value="avoid">Da Evitare</TabsTrigger>
          </TabsList>
          
          <TabsContent value="proteins" className="space-y-4">
            <Card className="herbalife-card">
              <CardContent className="pt-6">
                <p className="mb-4 text-herbalife-green font-semibold">Consuma proteine magre per supportare il tuo metabolismo e nutrire i tuoi muscoli! 💪</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Pollo (senza pelle)</li>
                  <li>Tacchino</li>
                  <li>Pesce (salmone, tonno, merluzzo, sgombro, branzino)</li>
                  <li>Uova (intere e albumi)</li>
                  <li>Tofu e tempeh</li>
                  <li>Legumi (lenticchie, ceci, fagioli, piselli)</li>
                  <li>Yogurt greco</li>
                  <li>Formaggio di capra (l'unico ammesso)</li>
                  <li>Prodotti Herbalife: Formula 1 (Frullato proteico), Formula 3 (Integratore proteico personalizzabile), Barrette proteiche</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vegetables" className="space-y-4">
            <Card className="herbalife-card">
              <CardContent className="pt-6">
                <p className="mb-4 text-herbalife-green font-semibold">Verdure a volontà! Sono ricche di fibre, vitamine e minerali essenziali. 🥦🥕</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Tutte le verdure, preferibilmente crude o cotte al vapore.</li>
                  <li>Insalate miste, zucchine, carote, broccoli, spinaci, cavolfiore, cetrioli, peperoni, pomodori, ecc.</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fruits" className="space-y-4">
            <Card className="herbalife-card">
              <CardContent className="pt-6">
                <p className="mb-4 text-herbalife-green font-semibold">La frutta è fantastica ma va consumata al momento giusto per evitare picchi glicemici. 🍎🍇</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Consenti ogni tipo di frutta fresca ma solo entro le 10:00 del mattino.</li>
                  <li>Suggerimenti: mele, pere, arance, kiwi, prugne, frutti di bosco.</li>
                </ul>
                <p className="mt-4 text-red-500 font-semibold">Ricorda: consuma la frutta solo entro le 10:00 del mattino!</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fats" className="space-y-4">
            <Card className="herbalife-card">
              <CardContent className="pt-6">
                <p className="mb-4 text-herbalife-green font-semibold">I grassi buoni ti danno energia e supportano il tuo benessere! 🥑</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Avocado</li>
                  <li>Olio extravergine d'oliva</li>
                  <li>Frutta secca (mandorle, noci, nocciole – senza sale e non tostate)</li>
                  <li>Semi (chia, lino, zucca, girasole)</li>
                  <li>Burro di mandorle o arachidi (naturale e senza zuccheri aggiunti)</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="avoid" className="space-y-4">
            <Card className="herbalife-card">
              <CardContent className="pt-6">
                <p className="mb-4 text-red-500 font-semibold">Per ottenere i migliori risultati, è fondamentale evitare questi alimenti. 🚫</p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-red-500">
                  <li>Dolci, zuccheri raffinati, prodotti da forno industriali</li>
                  <li>Bevande zuccherate, alcolici, succhi di frutta confezionati</li>
                  <li>Pasta bianca, pane bianco, riso raffinato</li>
                  <li>Patatine, snack confezionati</li>
                  <li>Formaggi (eccetto il formaggio di capra)</li>
                  <li>Latte vaccino (da sostituire con latte vegetale come mandorla o soia)</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
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
