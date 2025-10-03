import React from 'react';
import './styles/landingPage.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface LandingPageProps {
  /** Optional title to display */
  title?: string;
}


const LandingPage: React.FC<LandingPageProps> =  ({title = "Registration"}) => {
  console.log('🚀 LandingPage rendered'); 
  return (
    <div className="formCard">
      <h1>{title}</h1>
    
      {/* TODO: Add your component content here */}
    </div>
  );
};

export default LandingPage;