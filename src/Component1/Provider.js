import { createContext, useContext, useState } from 'react';

const Context = createContext()

function AppProvider({child}){

    const allStudent=[
        {
            name: "Estelle Reichel",
            batch:"B47-English",
            year:2023,
            id: 1
        },
        {
            name: "Newton Solomon",
            batch:"B45-English",
            year:2022,
            id: 2
           },
           {
            name: "Tracy Sanford",
            batch:"B48-Tamil",
            year:2023,
            id: 3
           },
           {
            name: "Jimmie Rutherford",
            batch:"B44-Tamil",
            year:2021,
            id: 4
           },
           {
            name: "Shelia Lynch",
            batch:"B47-English",
            year:2023,
            id: 5
           },
           {
            name: "Alonzo Ferry",
            batch:"B48-Tamil",
            year:2023,
            id: 6
           }
    
    ]


    const allTeacher=[
        {
            name: "Eric Gould",
            qualification:"B.E CS",
            year:2023,
            id: 1,
        },
        {
            name: "Samema Begum",
            qualification:"B.E ECE",
            year:2022,
            id: 2,
           },
           {
            name: "Taylor Swift",
            qualification:"B.Tech IT",
            year:2023,
            id: 3,
           },
           {
            name: "Bill Clinton",
            qualification:"B.E ECE",
            year:2021,
            id: 4,
           },
           {
            name: "Angel Ferry",
            qualification:"B.E MECH",
            year:2023,
            id: 5,
           },
           {
            name: "Micheal Philips",
           qualification:"B.E IT",
            year:2023,
            id: 6,
           }
    
    ]

    const stuPath= [
        {
            name: "Student",
            path:"/all/students"
        }
    ]

    const teaPath= [
        {
            name: "Teacher",
            path:"/all/teachers"
        }
    ]

    const [snavState,setSnavState] = useState(stuPath)
    const [tnavState,setTnavState] = useState(teaPath)

    const[stuData,setStuData]=useState(allStudent)
    const[teaData,setTeaData]=useState(allTeacher)

 return(
    <Context.Provider 
     value={{
        snavState,
        setSnavState,
        stuData,
        setStuData,
        tnavState,
        setTnavState,
        teaData,
        setTeaData
      }}>
        {child}
    </Context.Provider>
    )
}

export  const AppState =()=>{

    return useContext(Context)

}

export default AppProvider;
