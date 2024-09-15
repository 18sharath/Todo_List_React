import List from '@mui/material/List';
import Todoitem from './Todoitem';
import Todoform from './Todoform';
import { useState ,useEffect } from 'react';
import {v4 as uuid} from "uuid"; 
import { Box } from '@mui/material';
// import Todoitem from './Todoitem';
const initialtodo =[
    {id:uuid(),text:"dog",completed:false},
    {id:uuid(),text:"cat",completed:false},
    {id:uuid(),text:"donkey",completed:true},
    {id:uuid(),text:"monkey",completed:false},
];
const Getinitialdata=()=>{  
    const data=JSON.parse(localStorage.getItem("todos"));// to retirve the preious data 
    if(!data)return [];
    return data;
}
export default function TodoList(){
    const [todos,setTodo]=useState(Getinitialdata);

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos));
    },[todos]);
    const todoremove =(id)=>{
        setTodo((prevtodo)=>{
            return prevtodo.filter((t)=>t.id!==id); // using filter removing the item
        })
    }
    const toggletodo=(id)=>{
        setTodo(prevtodo=>{
            return prevtodo.map(todo=>{
                if(todo.id===id)
                    {return {...todo, completed:!todo.completed};}

                else 
                return todo;
            })
        })
    }
    const addtodo = (text) => {
        setTodo(prevTodos => {
            return [...prevTodos, { text: text, id:uuid(), completed: false }];
        });
    };
    return (
    <Box
      sx={{
        display:"flex",
        justifyContent:"center",
        m:3,
      }}
    >
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <h1 style={{color:"blue"}}>Todo List</h1>
    {todos.map((todo)=>{
        return <Todoitem 
        todo={todo} 
        key={todo.id}  
        remove={todoremove}
        toggle={()=>toggletodo(todo.id)} 

        />
        
        
    })}
   <Todoform  addtodo={addtodo}/>
    </List>
    </Box>
);
}





// export default function CheckboxList() {
//   const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   return (
    
//       {[0, 1, 2, 3].map((value) => {
       

//         return (
//           <ListItem
//             key={value}
//             secondaryAction={
//               <IconButton edge="end" aria-label="comments">
//                 <CommentIcon />
//               </IconButton>
//             }
//             disablePadding
//           >
//             <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
//               <ListItemIcon>
//                 <Checkbox
//                   edge="start"
//                   checked={checked.indexOf(value) !== -1}
//                   tabIndex={-1}
//                   disableRipple
//                   inputProps={{ 'aria-labelledby': labelId }}
//                 />
//               </ListItemIcon>
//               <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
//             </ListItemButton>
//           </ListItem>
//         );
//       })}
//     </List>
//   );
// }
