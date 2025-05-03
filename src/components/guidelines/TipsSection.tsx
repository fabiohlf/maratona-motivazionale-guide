
import React from 'react';
import { Check } from 'lucide-react';

const TipsSection = () => {
  return (
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
          <span>Utilizza il diario giornaliero per monitorare i tuoi progressi</span>
        </li>
        <li className="flex items-start">
          <Check className="h-5 w-5 text-herbalife-green mr-2 flex-shrink-0 mt-0.5" />
          <span>Contatta il tuo consulente Herbalife per consigli personalizzati</span>
        </li>
      </ul>
    </section>
  );
};

export default TipsSection;
