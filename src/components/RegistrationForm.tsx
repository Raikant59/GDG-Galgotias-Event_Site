
"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Label } from './ui/Label';
import SuccessModal from './SuccessModal';

const RegistrationForm = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    interest: 'Modern Web',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API
    console.log('Form submitted:', formData);
    setModalOpen(true);
  };

  return (
    <>
      <SuccessModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      <div id="registration" className="w-full py-20 bg-black">
        <div className="container mx-auto">
          <Card className="max-w-2xl mx-auto bg-neutral-900 border-neutral-800">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-white font-poppins">Register for the Event</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input id="name" placeholder="Your name" required onChange={handleChange} value={formData.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" required onChange={handleChange} value={formData.email} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="college" className="text-white">College / Organization</Label>
                  <Input id="college" placeholder="Eg. Galgotias University" required onChange={handleChange} value={formData.college} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interest" className="text-white">Area of Interest</Label>
                  <select 
                    id="interest" 
                    required 
                    onChange={handleChange} 
                    value={formData.interest}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option>Modern Web</option>
                    <option>AI & Machine Learning</option>
                    <option>Multi-platform Development</option>
                    <option>Cloud & DevOps</option>
                  </select>
                </div>
                <Button type="submit" variant="premium" className="w-full !mt-8" size="lg">
                  Submit Registration
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
