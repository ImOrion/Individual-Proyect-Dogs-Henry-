import { React, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getTemperaments } from "../../Redux/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import validate from "./Errors/Errors";
import { postDog } from "../../Redux/Actions/Actions";
import styles from "../CreateDog/CreateDog.module.css"

export default function CreateDog() {

  const dispatch = useDispatch();
  const history = useHistory();
  const temperament = useSelector((state) => state.temperaments);

  const [input, setInput] = useState({
    name: "",
    min_height: "",
    max_height: "",
    min_weight: "",
    max_weight: "",
    life_span: "",
    image: "",
    temperament: [],
  });
  const [errors, setErrors] = useState({});
  
  const onChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
    setErrors(validate({ ...input, [event.target.name]: event.target.value }));
  };

  const buttonSelect = (event) => {
    setInput({
      ...input,
      temperament: [...input.temperament, event.target.value],
    });
    setErrors(
      validate({
        ...input,
        temperament: [...input.temperament, event.target.value],
      })
    );
  };

  const buttonSubmit = (event) => {
    event.preventDefault();
    dispatch(postDog(input));
    if (
      errors.name ||
      errors.min_height ||
      errors.max_height ||
      errors.min_weight ||
      errors.max_weight
    ) {
      alert("You need to complete the fields to create new Dog(You need at least a temperament)");
    } else {
      alert("Your dog has been created correclty.");
      setInput({
        name: "",
        min_height: "",
        max_height: "",
        min_weight: "",
        max_weight: "",
        life_span: "",
        image: "",
        temperament: [],
      });
      history.push("/home");
    }
  };

  const buttonTempDelete = (event) => {
    setInput({
      ...input,
      temperament: input.temperament.filter((temp) => temp !== event),
    });
  };

  useEffect(() => {
    dispatch(getTemperaments());
  },[]);

  return (
    <div className={styles.containerForm}>
      <div>
      <div>
        <div className={styles.containerButtonBack}>
        <span>
        <Link to="/home">
        <button className={styles.buttonsForm}>Back</button>
       </Link>
        </span>
      </div>
      <form className={styles.form} onSubmit={(e) => buttonSubmit(e)}>
        <div>
          <div>
          <input
          className={styles.inputForm}
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => onChange(e)}
            placeholder="Name"
          /></div>
          {errors.name ? <span className={styles.errors}>{errors.name}</span> : <span></span>}
        </div>
        <div>
          <div>
          <input
          className={styles.inputForm}
          placeholder="Minimun height"
            type="text"
            value={input.min_height}
            name="min_height"
            onChange={(e) => onChange(e)}
          /></div>
          {errors.min_height ? <span className={styles.errors}>{errors.min_height}</span> : <span></span>}
        </div>
        <div>
          <div>
          <input
          className={styles.inputForm}
          placeholder="Maximum height"
            type="text"
            value={input.max_height}
            name="max_height"
            onChange={(e) => onChange(e)}
          />
          </div>
          {errors.max_height ? <span className={styles.errors}>{errors.max_height}</span> : <span></span>}
        </div>
        <div>
          <div className={styles.containerInput}>
          <input
          className={styles.inputForm}
          placeholder="Minimun weight"
            type="text"
            value={input.min_weight}
            name="min_weight"
            onChange={(e) => onChange(e)}
          />
          </div>
          {errors.min_weight ? <span className={styles.errors}>{errors.min_weight}</span> : <span></span>}
        </div>
        <div>
          <div>
          <input
          className={styles.inputForm}
          placeholder="Maximum weight"
            type="text"
            value={input.max_weight}
            name="max_weight"
            onChange={(e) => onChange(e)}
          />
          </div>
          {errors.max_weight ? <span className={styles.errors}>{errors.max_weight}</span> : <span></span>}
        </div>
        <div>
          <input
          className={styles.inputForm}
          placeholder="Life Span"
            type="text"
            value={input.life_span}
            name="life_span"
            onChange={(e) => onChange(e)}
          />
        </div>
        <br/>
        <br/>
        <div>
          <input
          className={styles.inputForm}
          placeholder="Image"
            type="text"
            value={input.image}
            name="image"
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <label>Temperaments</label>
          <div>
          <select className={styles.select} onChange={(e) => buttonSelect(e)}>
            {temperament.map((temp) => (
              <option key={temp.name} value={temp.name}>{temp.name}</option>
            ))}
          </select>
          </div>
          {errors.temperament && <p>{errors.temperament}</p>}
        </div>
        <div>
        <ul className={styles.listTemps}>
          <p className={styles.containerListTemps}>{input.temperament.map((temp) => temp + ", ")}</p>
        </ul>
        </div>
        {input.temperament.map((temp) => (
        <div>
          <div className={styles.temps}>
          <span>{temp}</span>
          <button className={styles.buttonsForm} onClick={() => buttonTempDelete(temp)}>X</button>
          </div>
        </div>
      ))}
      <div className={styles.containerButton}>
        <button
        className={styles.createButton}
          type="submit"
          disabled={
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
            errors.temperament
          }
        >
          Create dog
        </button>
        </div>
      </form>
     
    </div>
    </div>
    </div>
  );
}
