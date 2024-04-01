import React from 'react';
import Paper from './Paper';
import Typography from '../Typography/typograph';
import Button from './Button';

interface ModalProps {
    setIsModalOpen: (isOpen: boolean) => void; // Define the prop type
    children?: React.ReactNode;
    title?: string;
  }
  
export default function Modal({ setIsModalOpen, children, title }: ModalProps) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <Paper>
          <div className="w-[320px] md:w-[744px]">
        <div className="flex flex-1 justify-between p-6">
          <Typography variant="h5">{title}</Typography>
          <Button variant="text" onClick={() => setIsModalOpen(false)}>X</Button>
        </div>
          <div className="p-6">
            {children}
          </div>
          </div>
        </Paper>
      </div>
    );
  }
  