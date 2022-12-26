import { React, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getDogs, getTemperaments } from "../../Redux/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";

export default function CreateDog() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);

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

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  return (
    <div>
      <Link to="/home">
        <button>Back To Home</button>
      </Link>
      <h1>Create New Breed!</h1>
      <form>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={input.name}
            name="name"
          />
        </div>
        <div>
          <label>Minimun height: </label>
          <input
            type="text"
            value={input.min_height}
            name="min_height"
          />
        </div>
        <div>
          <label>Maximum height: </label>
          <input
            type="text"
            value={input.max_height}
            name="max_height"
          />
        </div>
        <div>
          <label>Minimun weight: </label>
          <input
            type="text"
            value={input.min_weight}
            name="min_weight"
          />
        </div>
        <div>
          <label>Maximum weight: </label>
          <input
            type="text"
            value={input.max_weight}
            name="max_weight"
          />
        </div>
        <div>
          <label>Life Span: </label>
          <input
            type="text"
            value={input.life_span}
            name="life_span"
          />
        </div>
        <div>
          <label>Image: </label>
          <input
            type="text"
            value={input.image}
            name="image"
          />
        </div>
      </form>
    </div>
  );
}
