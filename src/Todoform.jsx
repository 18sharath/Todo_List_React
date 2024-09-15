import { ListItem } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
export default function Todoform({addtodo})
{
    const [text,settext]=useState("");
    const handlechange=(evt)=>{
        settext(evt.target.value);
    }
  const handlesubmit=(e)=>
  {
    e.preventDefault(); // it avoid when u press enter it will not refresh the page 
    addtodo(text);
    settext("");

  };
    return(
    <ListItem>
        <form onSubmit={handlesubmit}>
        <TextField 
        id="outlined-basic" 
        label="Add todo" 
        variant="outlined" 
        value={text}
        onChange={handlechange}
        
        />
       
</form>

    </ListItem>
    );
}