
import React,{useState} from 'react'
import "./index.css";
// import Axios from 'axios'
const App = () => {

  const [data, setdata] = useState({json:""});
  // const [testdata, settestdata] = useState("");
   const handleclick=async (e)=>{
    const host = "http://localhost:8000";

    e.preventDefault();
    const reader = new FileReader();
    reader.onload =async (e) => {
      const text = e.target.result;
      console.log('data',text);
      const res = await fetch(`${host}/Getdata`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body:text 
      }); 
      const json=await res.json();    
   
      const element=document.createElement("a");
      const file=new Blob([JSON.stringify(json.users) ],{
        type:"text/plain;charset-utf-8",
      });
      element.href=URL.createObjectURL(file);
      element.download='myfile.txt';
      document.body.appendChild(element);
      element.click();
    };
    reader.readAsText(data.json);
   }

  return (
    <div className="container my-3">
       <div className="row">
       <div className="card" >
       <div className="card-body">
         <h5 className="card-title">Assignment</h5>
         <input type="file" name="" id="input" className="form-control" required="required" onChange={(e)=>{ setdata({...data, json: e.target.files[0]});}}/>               
         <button type="submit" className="btn btn-primary my-2 center" accept=".txt" id='filename' name='filename' onClick={handleclick}>Submit</button>
       </div>
       </div>
       </div>
    </div>
  )
}

export default App
