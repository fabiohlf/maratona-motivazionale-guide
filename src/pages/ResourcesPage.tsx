import React from 'react';
import { ExternalLink, FileText, Video, Heart, PhoneCall, Utensils } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const articles = [
  {
    title: "I benefici dei frullati Herbalife",
    description: "Scopri perché i frullati Herbalife sono un'ottima scelta per un'alimentazione sana ed equilibrata.",
    link: "https://autumn-paradox-10a.notion.site/I-Benefici-dei-Frullati-Herbalife-1c85e92a5bc380b19304d47b5fca8047?pvs=4",
    type: "article"
  },
  {
    title: "Perché eliminare i cereali per 10 giorni",
    description: "I benefici di una pausa dai cereali e come questo può migliorare il tuo metabolismo.",
    link: "https://autumn-paradox-10a.notion.site/Perch-Eliminare-i-Cereali-per-10-Giorni-1c85e92a5bc380dca83ef7a422c6dc41",
    type: "article"
  },
  {
    title: "L'importanza delle proteine nella dieta",
    description: "Come le proteine contribuiscono al mantenimento della massa muscolare e supportano il metabolismo.",
    link: "https://autumn-paradox-10a.notion.site/L-importanza-delle-proteine-nella-dieta-1c85e92a5bc3803eb860d0388b7673bd",
    type: "article"
  },
  {
    title: "Idratazione: la chiave del benessere",
    description: "Perché bere acqua a sufficienza è fondamentale per il tuo benessere e per ottimizzare i risultati.",
    link: "https://autumn-paradox-10a.notion.site/Idratazione-la-chiave-del-benessere-1c85e92a5bc38066a222dd83cf5f2ed3",
    type: "article"
  }
];

const videos = [
  {
    title: "Come preparare un frullato Herbalife",
    description: "Tutorial passo-passo per preparare un frullato nutriente e delizioso.",
    link: "https://www.youtube.com/watch?v=tuo-video-frullato",
    thumbnail: "https://images.unsplash.com/photo-1622484212850-a04e89611fae",
    type: "video"
  },
  {
    title: "Esercizi semplici da fare a casa",
    description: "Una routine di esercizi leggeri perfetti da abbinare alla Maratona 10 Giorni.",
    link: "https://www.youtube.com/watch?v=tuo-video-esercizi",
    thumbnail: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a",
    type: "video"
  },
  {
    title: "Testimonianze di successo",
    description: "Storie di persone che hanno completato con successo la Maratona 10 Giorni.",
    link: "https://www.youtube.com/watch?v=tuo-video-testimonianze",
    thumbnail: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    type: "video"
  }
];

const motivational = [
  {
    quote: "Il successo non è definitivo, il fallimento non è fatale: è il coraggio di continuare che conta.",
    author: "Winston Churchill"
  },
  {
    quote: "Non è mai troppo tardi per essere ciò che avresti potuto essere.",
    author: "George Eliot"
  },
  {
    quote: "La motivazione ti fa iniziare. L'abitudine ti fa continuare.",
    author: "Jim Ryun"
  },
  {
    quote: "Ogni giorno è una nuova opportunità per cambiare la tua vita.",
    author: "Anonimo"
  },
  {
    quote: "Il modo migliore per predire il futuro è crearlo.",
    author: "Peter Drucker"
  }
];

const recipes = [
  {
    title: "Frullato proteico con frutti di bosco",
    description: "Un delizioso frullato ricco di proteine con frutti di bosco e Formula 1 Herbalife.",
    ingredients: [
      "2 misurini di Formula 1 Herbalife gusto Frutti di Bosco",
      "250ml di latte scremato o bevanda vegetale",
      "100g di frutti di bosco freschi o surgelati",
      "Ghiaccio (opzionale)"
    ],
    preparation: "Mescolare tutti gli ingredienti in un frullatore fino a ottenere una consistenza omogenea. Servire immediatamente.",
    type: "recipe"
  },
  {
    title: "Pancake proteici",
    description: "Pancake soffici e proteici, perfetti per una colazione energetica.",
    ingredients: [
      "1 misurino di Formula 1 Herbalife gusto Vaniglia",
      "1 uovo intero",
      "2 albumi",
      "50ml di latte scremato",
      "1/2 banana matura schiacciata",
      "Cannella q.b."
    ],
    preparation: "Mescolare tutti gli ingredienti fino a ottenere una pastella liscia. Cuocere piccole porzioni in una padella antiaderente a fuoco medio per 2-3 minuti per lato.",
    type: "recipe"
  },
  {
    title: "Insalata proteica estiva",
    description: "Un'insalata leggera ma nutriente, ideale per un pranzo durante la Maratona 10 Giorni.",
    ingredients: [
      "Insalata verde mista",
      "1 scatoletta di tonno al naturale",
      "1/2 avocado",
      "Pomodorini ciliegino",
      "1 uovo sodo",
      "1 cucchiaio di semi di chia",
      "Succo di limone e olio EVO q.b."
    ],
    preparation: "Disporre l'insalata in un piatto, aggiungere gli ingredienti tagliati a pezzi e condire con succo di limone e un filo d'olio.",
    type: "recipe"
  }
];

const ResourceCard = ({ resource }: { resource: any }) => {
  return (
    <Card className="herbalife-card h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {resource.type === "article" ? (
            <FileText className="h-5 w-5 text-herbalife-green" />
          ) : (
            <Video className="h-5 w-5 text-herbalife-orange" />
          )}
          {resource.title}
        </CardTitle>
        <CardDescription>{resource.description}</CardDescription>
      </CardHeader>
      {resource.thumbnail && (
        <div className="px-6">
          <img
            src={resource.thumbnail}
            alt={resource.title}
            className="rounded-md object-cover w-full h-40"
          />
        </div>
      )}
      <CardFooter className="mt-auto pt-4">
        <Button 
          variant="outline" 
          className="w-full flex items-center gap-2"
          onClick={() => window.open(resource.link, '_blank')}
        >
          Leggi di più <ExternalLink className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const QuoteCard = ({ quote, author }: { quote: string; author: string }) => {
  return (
    <Card className="herbalife-card bg-gradient-to-r from-herbalife-light-green to-white">
      <CardContent className="pt-6">
        <blockquote className="italic text-gray-800 mb-2">"{quote}"</blockquote>
        <footer className="text-right font-semibold text-herbalife-green">- {author}</footer>
      </CardContent>
    </Card>
  );
};

const RecipeCard = ({ recipe }: { recipe: any }) => {
  return (
    <Card className="herbalife-card h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Utensils className="h-5 w-5 text-herbalife-green" />
          {recipe.title}
        </CardTitle>
        <CardDescription>{recipe.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-sm mb-2">Ingredienti:</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {recipe.ingredients.map((ingredient: string, idx: number) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-sm mb-2">Preparazione:</h4>
            <p className="text-sm">{recipe.preparation}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ResourcesPage = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Risorse Utili</h1>
        <p className="text-gray-600">Articoli, video e consigli per supportarti durante la tua maratona</p>
      </div>

      <Tabs defaultValue="articles">
        <TabsList className="mb-6 w-full grid grid-cols-4">
          <TabsTrigger value="articles">Articoli</TabsTrigger>
          <TabsTrigger value="videos">Video</TabsTrigger>
          <TabsTrigger value="recipes">Ricette</TabsTrigger>
          <TabsTrigger value="motivation">Motivazione</TabsTrigger>
        </TabsList>
        
        <TabsContent value="articles" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <ResourceCard key={index} resource={article} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="videos" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <ResourceCard key={index} resource={video} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="recipes" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recipes.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="motivation" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {motivational.map((item, index) => (
              <QuoteCard key={index} quote={item.quote} author={item.author} />
            ))}
          </div>
          
          <div className="mt-8">
            <Card className="herbalife-card border-t-4 border-t-herbalife-green">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  Supporto e Motivazione
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Hai bisogno di supporto personalizzato o hai domande sul programma? 
                  Il nostro team di consulenti Herbalife è qui per aiutarti a raggiungere i tuoi obiettivi.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-4">
                  <PhoneCall className="h-10 w-10 text-herbalife-green" />
                  <div>
                    <h3 className="font-semibold">Contatta Fabio Gelmetti</h3>
                    <p className="text-gray-600">Consulente Herbalife</p>
                    <a href="tel:+393401234567" className="text-herbalife-green hover:underline">
                      +39 340 123 4567
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResourcesPage;
