import axios from 'axios';
import {useState} from "react"
import * as XLSX from 'xlsx';


function BulkMail() {


  const [msg,setmsg] = useState("")
  const [status, setstatus] = useState(false)
  const [emailList, setEmailList] = useState([])

  function handlemsg(evt){
    setmsg(evt.target.value)
  }


  function handlefile(event)
  {
    const file = event.target.files[0]
    

    const  reader = new FileReader()

    reader.onload = function(evt){
        const data = evt.target.result
        const workbook = XLSX.read(data,{type:"binary"})
        const sheetName = workbook.SheetNames[0]
        const worksheet= workbook.Sheets[sheetName]
        console.log(worksheet)
        const emailList = XLSX.utils.sheet_to_json(worksheet,{header:'A'})
        const totalemail = emailList.map(function(item){
          return item.A
        })
        console.log(totalemail)
        setEmailList(totalemail)
    
    }


    reader.readAsArrayBuffer(file)


  }

  function send()
  {
    setstatus(true)
    axios.post("https://bulkback.onrender.com/sendemail",{msg:msg,emailList:emailList})
    .then(function(data){
      if(data.data === true)
      {
        alert("Email Sent Successfully")
        setstatus(false)
      }
      else{
        alert("Failed")
      }
    })

  }


  return (
    <div>
      <div className="bg-cyan-900 text-white text-center p-8">
        <h1 className="text-5xl font-medium px-5 py-3" >Bulk Mail</h1>

      </div>
      <div className="bg-cyan-800 text-white text-center">
        <h1 className=" text-2xl font-medium p-4" >We can help your business with sending multiple emails at once</h1>

      </div>
      <div className="bg-cyan-600 text-white text-center">
        <h1 className="text-2xl font-medium p-4" >Drag and Drop</h1>
        

      </div>
      <div className="bg-cyan-400 flex flex-col items-center text-black p-10">
        <textarea onChange={handlemsg} value={msg} className="w-[80%] h-32 py-2 outline-none px-2 border border-black rounded-md" placeholder="Enter the email text..."></textarea>
        <div>
          <input type="file" onChange={handlefile} className="border-4 border-dashed py-4 px-4 mt-5 mb-5" />
          
        </div>
        
        <p>Total Emails in the file: {emailList.length}</p>
        <button onClick={send} className="mt-2 bg-blue-950 py-2 px-2 text-white font-medium rounded-md w-fit">{status?"Sending...":"Send"}</button>
      </div>
      <div className="bg-cyan-300 text-white text-center p-8">
       

      </div>
      <div className="bg-cyan-200 text-white text-center p-6">
       

      </div>

    </div>
  )
}
export default BulkMail;  