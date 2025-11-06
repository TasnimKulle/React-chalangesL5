import { intialState, formReducer } from "./formReducer.js";
import { useReducer } from "react";
export const MultiStepForm = () => {
  const [state, dispatch] = useReducer(formReducer, intialState);
  const handleChange =(e)=>{
    dispatch({
        type:'update_field',
        field:e.target.name,
        value:e.target.value
    })
  }

  const handleNext =()=>dispatch({type:'next_step'})
  const handlePrev =()=>dispatch({type:'prev_step'})
  const handleReset=()=>dispatch({type:'reset_form'})
  const handleSubmit =()=>{
    alert ("form completed")
    handleReset()
  }

  return (
    <div>
      <h1>Multi Steps Registaration Form</h1>
      {state.step === 1 && (
        <div>
          <h2>Step:1 PROFILE</h2>
          <lebel htmlFor="firstName">
            First Name :
            <input 
            type="text" 
            name="firstName" 
            id="firstName"
            value={state.firstName}
            onChange={handleChange}
             />
          </lebel>
          <br />
          <br />
           <lebel htmlFor="lastName">
            Last Name:
            <input type="text" name="lastName" id="lastName" value={state.lastName} 
            onChange={handleChange}/>
          </lebel>
          <br />
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {
        state.step === 2 &&(
            <div>
                <h2>Step 2: CONTACT</h2>
                <lebel htmlFor="email">
                    Email:
                    <input type="email" name="email" id="email" value={state.email}
                    onChange={handleChange} />
                </lebel>
                <br /><br />
                 <lebel htmlFor="phone">
                    Phone:
                    <input type="Number" name="phone" id="phone" value={state.phone}
                    onChange={handleChange} />
                </lebel>
                <br /> <br />
                <button onClick={handlePrev}>Back</button>
                <button onClick={handleNext}>Next</button>
            </div>
        )
      }
      {
        state.step === 3 &&(
            <div>
                <h3>STEP : 3 REVIEW</h3>
                <p>
                    <strong>First Name:</strong>
                    {state.firstName}
                </p>
                <p>
                    <strong>Last Name:</strong>
                    {state.lastName}
                </p>
                <p>
                    <strong>Email:</strong>
                    {state.email}
                </p>
                <p>
                    <strong>Phone:</strong>
                    {state.phone}
                </p>
               
                <button onClick={handlePrev}>Back</button>
                <button onClick={handleSubmit}>Comfirm</button>
            </div>
        )
      }
    </div>
  );
};
