import React, { useState , useEffect } from "react"; 
import axios from "axios";
import { Dialog, DialogContent, DialogTitle, Typography } from "@material-ui/core"; 
 
const PopUp = ({workshop ,openPopup , setOpenPopup}) => { 
 
    // 29/03 code

    const [ ws , setWs ] = useState({})
    useEffect(async () => {

        await axios.get(
           "http://localhost:8000/api/getworkshop" , {params:{"_id":workshop._id}})
         .then(
             res => setWs(res.data)
         ).catch( err =>
             console.log(err.message)
         )
   } , [])

    // 29/03 code

    return ( 
        <div>
        <Dialog open={openPopup} maxWidth="md"> 
        
            <DialogTitle> 
                <div style={{display:'flex'}}> 
                    <Typography  
                        variant="h6" component="div" style={{flexGrow:1}} 
                    > 
                    Seats Info
                    </Typography> 
                    <button style={{
                        width:"15px",
                        color:"red",
                        marginRight:"10px",
                        backgroundColor:"white"
                    }} onClick={()=>{setOpenPopup(false)}}> 
                        X
                    </button> 
                </div> 
            </DialogTitle> 
            <DialogContent dividers> 
                <div> 
                    <h3>Seats Left :{ws.seats}</h3> 
                    <h3> Students Enrolled : </h3>
                    {
                        (ws.students)?.map( (student) => {
                            return <p>{student}</p>
                        } )
                    }
                    

                </div> 
            </DialogContent> 
        </Dialog> 
        </div>
    ) 
 
} 
export default PopUp;