import { useState, createContext} from "react";
import { allStudent } from "./Student/allStudents";
import { allTeacher } from "./Teacher/allTeacher";



    
const Context = createContext();

export default function Provider({props}){
  const [students,setStudents]= useState(allStudent);
  const [teachers,setTeachers]= useState(allTeacher);
//   const [inputVal,setVal] = useState();
    return(
        <Context.Provider
            value={{
                students,
                setStudents,
                teachers,
                setTeachers
            }}
        >
            {props.children}
             
        </Context.Provider>
    )
}


