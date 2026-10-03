import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/hero/Hero';
import NextSection from './components/layout/NextSection';

export function App() {
  return (
    <Layout>
      <Hero />
      <NextSection />
    </Layout>
  );
}

export default App;
