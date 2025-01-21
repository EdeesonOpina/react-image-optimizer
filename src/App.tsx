import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import FileOptimizer from './components/FileOptimizer';

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Image Optimizer</h1>
        <FileUploader onFileSelect={setSelectedFile} />
        {selectedFile && <FileOptimizer file={selectedFile} />}
      </div>
    </div>
  );
};

export default App;
