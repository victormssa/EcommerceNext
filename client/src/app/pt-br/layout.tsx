
import React from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Cookie from '@/components/cookie/Cookie';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  );
};

