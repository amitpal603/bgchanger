import { useState } from "react"

const App = ()=>{
    const [color , setColor] = useState("black")
    return (
      <div className=" w-full h-screen"
      style={{backgroundColor : color}}>
        <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className=" flex flex-wrap justify-center gap-4 bg-white shadow-lg px-3 py-2 rounded-3xl">

            <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={()=> setColor("red")}
            style={{backgroundColor : "red"}}
            >red</button>

            <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={()=> setColor("green")}
            style={{backgroundColor : "green"}}
            >green</button>

            <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={()=> setColor("pink")}
            style={{backgroundColor : "pink"}}
            >pink</button>

            <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={()=> setColor("blue")}
            style={{backgroundColor : "blue"}}
            >blue</button>

            <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={()=> setColor("purple")}
            style={{backgroundColor : "purple"}}
            >purple</button>

            <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={()=> setColor("violet")}
            style={{backgroundColor : "violet"}}
            >violet</button>

            <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={()=> setColor("maroon")}
            style={{backgroundColor : "maroon"}}
            >maroon</button>

            <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={()=> setColor("skyblue")}
            style={{backgroundColor : "skyblue"}}
            >skyblue</button>

            <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg hover:cursor-pointer"
            onClick={()=> setColor("lightcoral")}
            style={{backgroundColor : "lightcoral"}}
            >lightcoral</button>

            <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg hover:cursor-pointer"
            onClick={()=> setColor("hotpink")}
            style={{backgroundColor : "hotpink"}}
            >hotpink</button>
            
          </div>
        </div>
      </div>
    )
}

export default App