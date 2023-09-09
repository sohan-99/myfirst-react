import { useState } from "react"

export default function Team(){
    const [Team, setTeam] = useState(11)
const handle =() =>{
    const newTeam = Team+1 
    setTeam(newTeam)
}
const handle2 =() =>{
    const newTeam = Team-1 
    setTeam(newTeam)
}
    return(
    <div style={{border: '2px solid green', 
    }}>
        <h2>লা ইলাহা ইল্লাল্লাহু মুহাম্মাদুর রাসূলুল্লাহ</h2>
        <h4>Tasbih count:{Team} </h4>
        <button style={{border: '2px solid yellow'}} onClick={handle}>Add</button>
        <button onClick={handle2}>Reduce</button>
    </div>
    )
}


