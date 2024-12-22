import axios from 'axios';
import { useState } from "react";
import * as XLSX from 'xlsx';

function BulkMail() {
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState(false);
  const [emailList, setEmailList] = useState([]);
  const [resultDetails, setResultDetails] = useState([]);
  const [alertMessage, setAlertMessage] = useState(""); // To show custom alert messages

  function handleMsg(evt) {
    setMsg(evt.target.value);
  }

  function handleFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (evt) {
      const data = evt.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const emails = XLSX.utils.sheet_to_json(worksheet, { header: "A" }).map(item => item.A);
      setEmailList(emails);
    };

    reader.readAsArrayBuffer(file);
  }

  async function send() {
    setStatus(true);
    setAlertMessage(""); // Reset previous alert
    try {
      const response = await axios.post("https://bulkback.onrender.com/sendemail", { msg, emailList });
      const details = response.data.details || [];
      setResultDetails(details);

      // Check if all emails were successfully sent
      const failedEmails = details.filter(item => item.status.startsWith("Failed"));
      if (failedEmails.length === 0) {
        setAlertMessage("All emails sent successfully!");
      } else {
        setAlertMessage(`Some emails failed. Check details for more info.`);
      }
    } catch (err) {
      setAlertMessage("Error occurred while sending emails. Please try again.");
      console.error(err.message);
    }
    setStatus(false);
  }

  return (
    <div>
      <div className="bg-cyan-900 text-white text-center p-8">
        <h1 className="text-5xl font-medium px-5 py-3">Bulk Mail</h1>
      </div>
      <div className="bg-cyan-800 text-white text-center">
        <h1 className="text-2xl font-medium p-4">We can help your business send multiple emails at once</h1>
      </div>
      <div className="bg-cyan-600 text-white text-center">
        <h1 className="text-2xl font-medium p-4">Drag and Drop</h1>
      </div>
      <div className="bg-cyan-400 flex flex-col items-center text-black p-10">
        <textarea onChange={handleMsg} value={msg} className="w-[80%] h-32 py-2 outline-none px-2 border border-black rounded-md" placeholder="Enter the email text..."></textarea>
        <input type="file" onChange={handleFile} className="border-4 border-dashed py-4 px-4 mt-5 mb-5" />
        <p>Total Emails in the file: {emailList.length}</p>
        <button onClick={send} className="mt-2 bg-blue-950 py-2 px-2 text-white font-medium rounded-md w-fit">
          {status ? "Sending..." : "Send"}
        </button>
        {alertMessage && <div className="mt-5 text-red-500 font-bold">{alertMessage}</div>}
        <div className="mt-5">
          <h2>Email Status Details:</h2>
          {resultDetails.map((result, index) => (
            <p key={index}>{result.email}: {result.status}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BulkMail;
