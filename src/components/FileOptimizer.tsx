import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';
import { saveAs } from 'file-saver';

interface FileOptimizerProps {
  file: File;
}

const FileOptimizer: React.FC<FileOptimizerProps> = ({ file }) => {
  const [optimizedFile, setOptimizedFile] = useState<File | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [compressionStats, setCompressionStats] = useState({
    originalSize: 0,
    optimizedSize: 0,
    reductionPercentage: 0,
  });

  const formatFileSize = (size: number): string => {
    return (size / 1024).toFixed(2) + ' KB';
  };

  const calculateReductionPercentage = (original: number, optimized: number): number => {
    return ((original - optimized) / original) * 100;
  };

  const optimizeImage = async () => {
    setIsOptimizing(true);

    const options = {
      maxSizeMB: 1, 
      maxWidthOrHeight: 1024,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      
      const originalSize = file.size;
      const optimizedSize = compressedFile.size;
      const reductionPercentage = calculateReductionPercentage(originalSize, optimizedSize);

      setOptimizedFile(compressedFile);
      setCompressionStats({
        originalSize,
        optimizedSize,
        reductionPercentage,
      });
    } catch (error) {
      console.error('Compression failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  };

  const downloadOptimizedFile = () => {
    if (optimizedFile) {
      saveAs(optimizedFile, `optimized-${file.name}`);
    }
  };

  return (
    <div className="mt-6 text-center bg-gray-50 p-6 rounded-lg shadow-md">
      <button
        onClick={optimizeImage}
        disabled={isOptimizing}
        className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 disabled:bg-gray-400"
      >
        {isOptimizing ? 'Optimizing...' : 'Optimize Image'}
      </button>

      {optimizedFile && (
        <div className="mt-6">
          <p className="text-lg font-bold text-gray-800">Optimization Results</p>
          <p><strong>Original Size:</strong> {formatFileSize(compressionStats.originalSize)}</p>
          <p><strong>Optimized Size:</strong> {formatFileSize(compressionStats.optimizedSize)}</p>
          <p className="text-green-600">
            <strong>Reduction:</strong> {compressionStats.reductionPercentage.toFixed(2)}%
          </p>
          <button
            onClick={downloadOptimizedFile}
            className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Download Optimized File
          </button>
        </div>
      )}
    </div>
  );
};

export default FileOptimizer;
