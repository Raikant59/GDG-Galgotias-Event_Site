
"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { FiCheckCircle } from 'react-icons/fi';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <Card className="bg-neutral-900 border-neutral-800 w-full max-w-md mx-4">
              <CardHeader className="items-center text-center">
                <FiCheckCircle className="w-16 h-16 text-gdg-green mb-4" />
                <CardTitle className="text-white text-2xl">Registration Successful!</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-neutral-400">Thank you for registering. A confirmation email has been sent to your address. We look forward to seeing you at the event!</p>
                <Button onClick={onClose} variant="premium" className="mt-6 w-full">
                  Close
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
