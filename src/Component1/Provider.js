import { useState, createContext, React } from "react";
import { allStudent } from "./Student/allStudents";
import { allTeacher } from "./Teacher/allTeacher";

export const Context = createContext();
 

export default function Provider({children}){
  const [students,setStudents]= useState(allStudent);
  const [teachers,setTeachers]= useState(allTeacher);

    return(
        <Context.Provider
            value={{
                students,
                setStudents,
                teachers,
                setTeachers
            }}
        >
            {children}
             
        </Context.Provider>
    )


}
