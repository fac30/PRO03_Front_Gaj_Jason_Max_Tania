import React from 'react';
import { PropagateLoader } from 'react-spinners';

interface LoadingProps {
  loading: boolean;
  bgColor?: string; // Optional prop for background color
}

const LoadingPage: React.FC<LoadingProps> = ({ loading, bgColor = "#94CD31" }) => {
  return (
    <div 
      className="flex justify-center items-center w-full h-full"
      style={{ backgroundColor: loading ? bgColor : "transparent" }}
    >
      {loading && (
        <PropagateLoader
          color= '#9a5b93'
          loading = {loading}
          size={30}
          speedMultiplier={0.7}
      />
      )}
    </div>
  );
};

export default LoadingPage;