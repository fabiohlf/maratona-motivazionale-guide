
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { useIsMobile } from '@/hooks/use-mobile';

const FoodsSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">🌟 Cibi Consigliati</h2>
      
      <Tabs defaultValue="proteins" className="w-full">
        {isMobile ? (
          <TabsList className="w-full flex items-center mb-6">
            <TabsTrigger value="proteins" className="flex-1 text-xs">Proteine</TabsTrigger>
            <Separator orientation="vertical" className="h-4 mx-0.5 bg-gray-300" />
            <TabsTrigger value="vegetables" className="flex-1 text-xs">Verdure</TabsTrigger>
            <Separator orientation="vertical" className="h-4 mx-0.5 bg-gray-300" />
            <TabsTrigger value="fruits" className="flex-1 text-xs">Frutta</TabsTrigger>
            <Separator orientation="vertical" className="h-4 mx-0.5 bg-gray-300" />
            <TabsTrigger value="fats" className="flex-1 text-xs">Grassi Sani</TabsTrigger>
            <Separator orientation="vertical" className="h-4 mx-0.5 bg-gray-300" />
            <TabsTrigger value="avoid" className="flex-1 text-xs">Da Evitare</TabsTrigger>
          </TabsList>
        ) : (
          <TabsList className="w-full flex items-center mb-6">
            <TabsTrigger value="proteins" className="flex-1">Proteine</TabsTrigger>
            <Separator orientation="vertical" className="h-6 mx-1 bg-gray-300" />
            <TabsTrigger value="vegetables" className="flex-1">Verdure</TabsTrigger>
            <Separator orientation="vertical" className="h-6 mx-1 bg-gray-300" />
            <TabsTrigger value="fruits" className="flex-1">Frutta</TabsTrigger>
            <Separator orientation="vertical" className="h-6 mx-1 bg-gray-300" />
            <TabsTrigger value="fats" className="flex-1">Grassi Sani</TabsTrigger>
            <Separator orientation="vertical" className="h-6 mx-1 bg-gray-300" />
            <TabsTrigger value="avoid" className="flex-1">Da Evitare</TabsTrigger>
          </TabsList>
        )}
        
        <TabsContent value="proteins" className={`space-y-4 ${isMobile ? 'pb-8' : ''}`}>
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

        <TabsContent value="vegetables" className={`space-y-4 ${isMobile ? 'pb-8' : ''}`}>
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

        <TabsContent value="fruits" className={`space-y-4 ${isMobile ? 'pb-8' : ''}`}>
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

        <TabsContent value="fats" className={`space-y-4 ${isMobile ? 'pb-8' : ''}`}>
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

        <TabsContent value="avoid" className={`space-y-4 ${isMobile ? 'pb-8' : ''}`}>
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
  );
};

export default FoodsSection;
