import React from 'react';
import './DownloadFiles.css';

const DownloadFiles = () => {
  return (
    <div className="download-section">
      <h3>Скачать материалы</h3>
      <ul>
        <li><a href="file1_url" download>Материал 1</a></li>
        <li><a href="file2_url" download>Материал 2</a></li>
        <li><a href="file3_url" download>Материал 3</a></li>
      </ul>
    </div>
  );
};

export default DownloadFiles;