import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function InputPage() {
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [text, setText] = useState('');

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const extractText = async () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = new Uint8Array(e.target.result);
        const pdf = await pdfjs.getDocument(data);
        setNumPages(pdf.numPages);

        // Loop through pages and extract text
        let extractedText = '';
        for (let pageIndex = 1; pageIndex <= pdf.numPages; pageIndex++) {
          const page = await pdf.getPage(pageIndex);
          const textContent = await page.getTextContent();
          const pageText = textContent.items.map((item) => item.str).join(' ');
          extractedText += pageText + ' ';
        }

        // Store the extracted text in the state
        setText(extractedText);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={onFileChange} />
      <button onClick={extractText}>Extract Text</button>
      {file && (
        <div>
          <Document file={file}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
          <div>
            <p>Extracted Text:</p>
            <p>{text}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default InputPage;
