import React, { useCallback, useState } from 'react'

function UseCallbackComp() {

    let [skill,setSkill]=useState(["HTML", "CSS", "JavaScript", "React"])
    let [input,setInput]=useState('')
    let [err,setErr]=useState('')

    const handleAdd=useCallback(()=>{

        if(input.trim()===''){
            setErr('please enter any skill')

        }else if(skill.includes(input)){
            setErr('This skill has already been added')

        }else{
            setSkill([...skill,input])
            setErr('')
            setInput('')
        }
    },[input,skill])

    const handleDel=useCallback((indexToRemove)=>{
        // let filtered=skill.filter((_,index)=>{
        //     return index!==indexToRemove
        // })
        // setSkill(filtered)
        setSkill((prev)=>
            prev.filter((_,index)=> index!==indexToRemove)
        )
    },[])

  return (
    <div>
        <h1 id="heading">Skills</h1>
        <input type="text" id="skill-input" value={input}  onChange={(e)=>{setInput(e.target.value)}} />
        <button id="skill-add-btn" onClick={handleAdd} >Add Skill</button>
        {
            err && <p>{err}</p>
        }
        <ul id="skill-list" >
        {
            skill.length>0?(
                skill.map((ski,idx)=>(
                    // <li id='skill-number-idx'  key={index} style={{display:'flex', alignItems: 'center', gap: '10px'}} >
                    //     <p id='skill-number-idx'>{ski}</p>
                    // <button id="skill-del-btn" onClick={()=>handleDel(index)} >Del</button>
                    // </li>
                    <li key={idx} id={`skill-number-${idx}`} onClick={()=>handleDel(idx)} >
                        {ski}
                    </li>
            ))
            ):(
                <li id="empty-skill">No skills available</li> // Ensure ul always has content
            )
        }
        </ul>
    </div>
  )
}

export default UseCallbackComp