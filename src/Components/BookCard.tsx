import React from 'react'
import  '../index.css'
import timer from '../Components/timer.jpg'
import abc from '../Components/Vector.jpg'

interface Props{
  image:string;
  time:number;
  reads:number;
}


const  BookCard:React.FC<Props> = ({image,time,reads}) =>{
  
 let styleDiv={
   width : "284px",
   height:"466px ",
   margin : "auto",
   boxShadow : "0 4px 8px 0 rgba(0,0,0,0.2)",
   transition: "0.3s"
 }

 let styleb={
   cursor: "pointer",
   padding:"14px, 24px, 14px, 24px",
   width:"284px",
   height:"52px"
 }

 let styleh={
  width: "225px",
  height: "23px",
  
  /* Subtitle 1 */
  
  fontFamily: "Cera Pro",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "18px",
  lineHeight: "23px",
  /* identical to box height */
  
  
  /* Text/high_emphasis */
  
  color: "#03314B",
  
  
  /* Inside auto layout */
  
  flex: "none",
  order: "0",
  flexGrow: "0"
 }

 let stylea ={
  width: "95px",
  height: "20px",
  
  /* Body 1 */
  
  fontFamily: 'Cera Pro',
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "20x",
  
  /* Text/low_emphasis */
  
  color : "#6D787E",
  
  
  /* Inside auto layout */
  
  flex : "none",
  order : "1",
  flexGrow: "0"
 }
  return (
    <div>
      <div className="card" style={styleDiv}>
        <img src={image} className="card-img-top" alt="..." height="292px" width="294.1px"/>
          <div className="card-body">
            <h5 className="card-heading" style={styleh}>Bring Your Human to Work</h5>
            <h6 style={stylea}>Ericson</h6>
            <p style={{fontSize :"14px",lineHeight: "18px",color: "#6D787E"}}>
                <img src={timer} alt="timer" height="16.67px" width="16.67px" />{time} minute read&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={abc} alt="timer" height="16.67px" width="16.67px" />{reads}k reads
            </p>

          </div>
          <button className="btn btn-primary" style={styleb}> +   Add to Library</button>

         <div>


        </div>
      </div>
    </div>
  )
}



export default BookCard