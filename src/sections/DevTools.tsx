import React from 'react';

interface DevToolsProps {
  setCurrentPage: (page: string) => void;
}

const DevTools: React.FC<DevToolsProps> = ({ setCurrentPage }) => {
  const pages = ['dummy', 'landing', 'input', 'loading', 'playlist'];

  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, padding: '10px', background: '#f0f0f0' }}>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          style={{ marginRight: '5px' }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default DevTools;
