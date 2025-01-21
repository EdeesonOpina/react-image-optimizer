# Image Optimizer

A web-based image optimizer that allows users to upload and compress image files while preserving quality. Built with **React + TypeScript** and styled using **Tailwind CSS**, this project provides an intuitive UI similar to Optimizilla.

## Features

- **Image Compression**: Optimize images while maintaining visual quality.
- **Drag and Drop Support**: Easily upload files using a drag-and-drop interface.
- **File Size Reduction Statistics**: View original and optimized file sizes along with the percentage reduction.
- **Download Optimized Files**: Easily download compressed images after processing.
- **File Validation**: Ensures that only image files (JPEG, PNG, GIF, etc.) can be uploaded.
- **Responsive Design**: Optimized for both desktop and mobile users.

## Technologies Used

- **React (TypeScript)** – Frontend framework for building UI components.
- **Tailwind CSS** – Utility-first CSS framework for styling.
- **Vite** – Fast build tool for modern web applications.
- **browser-image-compression** – Library for client-side image compression.
- **file-saver** – Utility for saving files to the user's device.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/image-optimizer.git
   cd image-optimizer
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser:

   ```
   http://localhost:5173
   ```

## Usage

1. Click on the upload area or drag an image to upload.
2. The app will validate and display the uploaded image.
3. Click the "Optimize Image" button to compress the image.
4. View the compression statistics and download the optimized image.

## Project Structure

```
image-optimizer/
│-- src/
│   ├── components/
│   │   ├── FileUploader.tsx
│   │   ├── FileOptimizer.tsx
│   ├── App.tsx
│   ├── main.tsx
│-- public/
│-- index.html
│-- package.json
│-- tailwind.config.js
│-- tsconfig.json
│-- vite.config.ts
```

## Author

Developed by **Edeeson Opina**.

## License

This project is licensed under the MIT License.

---

Happy optimizing!

