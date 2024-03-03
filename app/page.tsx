// pages/index.js
"use client";
// import Head from 'next/head';
import Header from './components/Header';
import ParentComponent from './components/ParentComponent';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-8">
        {/* <h1 className="text-3xl font-bold">Home Page</h1> */}
        {/* Your home page content goes here */}
      </div>

      
      <main className="max-w-3xl mx-auto ">
        <h1 className="text-3xl font-bold mb-8">Track Your Fitness Activities</h1>
        {/* <ActivityForm /> */}
        <ParentComponent/>
        
        {/* <Recommendations /> */}
      </main>
      <Footer />
      {/* Footer component can be added here */}
    </div>
  );
}
