
import React from 'react';
import Header from '@/components/guidelines/Header';
import MainRules from '@/components/guidelines/MainRules';
import FoodsSection from '@/components/guidelines/FoodsSection';
import TipsSection from '@/components/guidelines/TipsSection';

const GuidelinesPage = () => {
  return (
    <div className="space-y-8 animate-fade-in pb-12">
      <Header />
      <MainRules />
      <FoodsSection />
      <TipsSection />
    </div>
  );
};

export default GuidelinesPage;
