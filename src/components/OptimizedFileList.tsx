import React from 'react';

interface OptimizedFileListProps {
  files: File[];
}

const OptimizedFileList: React.FC<OptimizedFileListProps> = ({ files }) => {
  return (
    <div>
      <h3>Optimized Files</h3>
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file.name} - {(file.size / 1024).toFixed(2)} KB</li>
        ))}
      </ul>
    </div>
  );
};

export default OptimizedFileList;
