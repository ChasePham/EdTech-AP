import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import NavBar from "../components/NavBar";
import "../css/InputPage.css";
import img from "../images/realInput.jpg";
import { Outlet, Link, useNavigate } from "react-router-dom";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function InputPage() {
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [text, setText] = useState('');
  const [dates, setDates] = useState(['']);
  const navigate = new useNavigate();

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const extractText = async () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = new Uint8Array(e.target.result);
        const pdf = await pdfjs.getDocument({
          data: data,
          verbosity: 0,
        }).promise;
        // Loop through pages and extract text
        let extractedText = '';
        for (let pageIndex = 1; pageIndex <= pdf.numPages; pageIndex++) {
          const page = await pdf.getPage(pageIndex);
          const textContent = await page.getTextContent();
          const pageText = textContent.items.map((item) => item.str).join(' ');
          extractedText += pageText + ' ';
        }
        console.log(extractedText)
        // Store the extracted text in the state
        setText(extractedText);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const getDates = async () => {
    //text.replace(/(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.]\d{4}/g, '');
    //var str = 'On the 03/09/2015 I am swiming in a pool, that was build on the 27-03-1994';
    setDates(text.match(/\d{1}([\/.-])\d{2}\1\d{2}/g));
  };

  const makeSchedule = async () => {
    navigate("/home");
  }

  return (
    <div>
      <NavBar curPage="input"/>
      {/* Get your first two classes added for free! Click <a href="/about">here</a> 
      &nbsp;for an upgrade to Octo Plus™
      <br/>
      <br/> */}
      <div class="container">
        <input class="tag" type="file" accept=".pdf" onChange={onFileChange} src={img}/>
        <img style={{width: "80%", cursor: "pointer", zIndex: 0}} onClick={makeSchedule} src = {img}/>
      </div>

      {/* <button class = "input-button" onClick={extractText}>Parse Syllabus</button>
      <button class = "input-button" onClick={getDates}>Extract Dates</button> */}

      {file && (
        <div>
          {/* <Document file={file}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document> */}
          <div>
            <p>Due Dates:</p>
            {/* <p>{text}</p> */}
            <ul>{dates.map(date => (<li>{date}&nbsp;</li>))}</ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default InputPage;
