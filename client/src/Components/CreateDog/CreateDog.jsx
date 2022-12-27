import { React, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getDogs, getTemperaments } from "../../Redux/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import validate from "./Errors/Errors";
import { postDog } from "../../Redux/Actions/Actions";
export default function CreateDog() {
  const dispatch = useDispatch()
    const history = useHistory()
    const temperament = useSelector(state=>state.temperaments)

    const [input, setInput] = useState({
        name: "",
        min_height: "",
        max_height: "",
        min_weight: "",
        max_weight: "",
        life_span: "",
        image: "",
        temperament: [], 
    })
    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setInput({...input, [event.target.name]: event.target.value})
        setErrors(validate({...input, [event.target.name]: event.target.value}))
        console.log(input);
    }

    const handleSelect = (event) => {
        setInput({...input, temperament: [...input.temperament, event.target.value]})
        setErrors(validate({...input, temperament: [...input.temperament, event.target.value]}))
        console.log(input);
    }

    const handleSumbit = (event) =>{
        event.preventDefault()
        console.log(input);
        dispatch(postDog(input))
        if(errors.name || errors.min_height || errors.max_height || errors.min_weight || errors.max_weight ){
            alert("You need to complete the fields?")
        } else {
        alert("Your dog has been created.")
        setInput({
        name: "",
        min_height: "",
        max_height: "",
        min_weight: "",
        max_weight: "",
        life_span: "",
        image: "",
        temperament: [],
        })
        history.push('/home')
    }
    }

    const handleTempDelete = (event) =>{
        setInput({...input, temperament: input.temperament.filter(temp => temp !== event)})
    }

    useEffect(()=>{
        dispatch(getTemperaments())
    },[])

  return (
    <div>
      <Link to="/home">
        <button>Back</button>
      </Link>
             <form onSubmit={(e) => handleSumbit(e)}>
                <div>
                    <label>Name: </label>
                    <input type="text" value={input.name} name="name" onChange={(e) => handleChange(e)}/>
                    {errors.name ? (<span>{errors.name}</span>) : <span></span>}
                </div>    
                <div>
                    <label>Minimun height: </label>
                    <input type="text" value={input.min_height} name="min_height" onChange={(e) => handleChange(e)}/>
                    {errors.min_height ? (<span>{errors.min_height}</span>): <span></span>}
                </div>
                <div>
                    <label>Maximum height: </label>
                    <input type="text" value={input.max_height} name="max_height" onChange={(e) => handleChange(e)}/>
                    {errors.max_height ? (<span>{errors.max_height}</span>): <span></span>}
                </div>
                <div>
                    <label>Minimun weight: </label>
                    <input type="text" value={input.min_weight} name="min_weight" onChange={(e) => handleChange(e)}/>
                    {errors.min_weight ? (<span>{errors.min_weight}</span>): <span></span>}
                </div>
                <div>
                    <label>Maximum weight: </label>
                    <input type="text" value={input.max_weight} name="max_weight" onChange={(e) => handleChange(e)}/>
                    {errors.max_weight ? (<span>{errors.max_weight}</span>): <span></span>}
                </div>
                <div>
                    <label>Life Span: </label>
                    <input type="text" value={input.life_span} name= "life_span" onChange={(e) => handleChange(e)}/>
                </div>
                <div>
                    <label>Image: </label>
                    <input type="text" value={input.image} name= "image" onChange={(e) => handleChange(e)}/>
                </div>
                <div>
                    <label>Temperament: </label>
                <select onChange = {(e) => handleSelect(e)}>
                    {
                        temperament.map((temp)=>(
                            <option value={temp.name}>{temp.name}</option>
                        ))
                    }
                </select>
                {errors.temperament && (<p>{errors.temperament}</p>)}
                </div>
                <ul><li>{input.temperament.map(temp => temp + ', ')}</li></ul>
                <button type="submit" disabled={
                    !input.name ||
                     !input.min_height ||
                      !input.max_height ||
                       !input.min_weight ||
                        !input.max_weight || 
                         !input.temperament ||
                     errors.name ||
                      errors.min_height ||
                       errors.max_height ||
                        errors.min_weight ||
                         errors.max_weight || 
                          errors.temperament}>Create dog</button>
            </form>
                {input.temperament.map(temp => 
                    <div>
                        
                        <span>{temp}</span>
                        <button onClick={()=>handleTempDelete(temp)}>X</button>
                       
                    </div>
                    )}
        </div>
  );
}
