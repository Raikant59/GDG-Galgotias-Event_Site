"use client";
import Countdown from "@/components/Countdown";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Location from "@/components/Location";
import RegistrationForm from "@/components/RegistrationForm";
import Schedule from "@/components/Schedule";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <Countdown />
      <Highlights />
      <Schedule />
      <RegistrationForm />
      <Location />
      <Footer />
    </main>
  );
}
