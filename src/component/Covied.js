import React, { useEffect , useState} from 'react'
import './Style.css';

const Covied = () => {
  const [data,setData] = useState([])

  const getCoviedData = async () => {
      try{
        const res = await fetch("https://api.rootnet.in/covid19-in/stats/latest")
          const actdata = await res.json();
         console.log(actdata.data.regional);
         setData(actdata.data.regional);
         
      }catch(err){
        console.log("error")
      }
       

  }
   
   useEffect(() => {
           getCoviedData();
   },[])

  return (
    <>
       {/* <h2>INDIA COVID-19 Dashboard </h2> */}
       <div className="container1">
         <div className="container2">
          <h2 className="mb-5"> <span className="bold-1">INDIA </span> COVID-19 Dashboard </h2>
         </div>
         <div className="table-responsive">
             <table className="table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th>State</th>
                    <th>Confirmed</th>
                    <th>Discharged</th>
                    <th>Deaths</th>
                  </tr>
                </thead>
                  <tbody>
                    {
                      data.map((curr) => {
                           return(
                     <tr>
                    <th>{curr.loc}</th>
                    <td>{curr.totalConfirmed}</td>
                    <td>{curr.discharged}</td>
                    <td>{curr.deaths}</td>
                     </tr>
                           )
                      })
                    }
                   
                 
                  </tbody>
             </table>
         </div>
       </div>
    </>
  )
}

export default Covied
