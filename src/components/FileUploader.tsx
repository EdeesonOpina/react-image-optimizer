import React, { useState } from 'react';

interface FileUploaderProps {
  onFileSelect: (file: File) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Please upload only image files (JPEG, PNG, GIF, etc.).');
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);
      setError(null);
      onFileSelect(file);
    }
  };

  return (
    <div className="border-2 border-dashed border-gray-300 p-6 text-center rounded-lg bg-gray-50 shadow-inner">
      <label className="cursor-pointer text-gray-600 font-medium">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <span className="block text-blue-500 underline">Click to upload or drag an image here</span>
      </label>
      {error && <p className="text-red-600 mt-4">{error}</p>}
      {selectedFile && (
        <p className="mt-4 text-sm text-gray-700">
          Selected File: <span className="font-bold">{selectedFile.name}</span>
        </p>
      )}
    </div>
  );
};

export default FileUploader;
