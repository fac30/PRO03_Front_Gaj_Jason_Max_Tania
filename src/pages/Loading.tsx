import React from 'react';
import { PropagateLoader } from 'react-spinners';

interface LoadingProps {
  loading: boolean; // Whether the spinner should be displayed
}

const Loading: React.FC<LoadingProps> = ({ loading }) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <PropagateLoader
        color="#9a5b93"
        cssOverride={{}}
        loading={loading}
        size={30}
        speedMultiplier={0.7}
      />
    </div>
  );
};

export default Loading;