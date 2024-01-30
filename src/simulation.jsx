import { useForm } from "react-hook-form";
import './App.css'
import './styles/form.css'
function Simulation(){

  const form = useForm();
  const {register} = form;

  return (
    <>
   <form>

   <div>
    <label htmlfor = "username">User Name</label>
    <input type = "text" id = "username" {...register("username")} placeholder="Enter Your name"></input>
    </div>

    <div>
    <label htmlfor = "prosumerCount"> Prosumers</label>
    <input type="number" id = "prosumerCount" {...register("prosumerCount")} placeholder="No. of Prosumers"></input>
    </div>


    <div>
    <label htmlfor = "consumerCount">Consumers</label>
    <input type="number" id = "consumerCount" {...register("consumerCount")} placeholder = "No. of Consumers"></input>
    </div>


     <div>
    <label >Prosumer1</label>
    <input type="file"class = "user"></input>
    </div>


    <div>
    <label >Prosumer2</label>
    <input type="file" class = "user"></input>
    </div>

    <div>
    <label>Prosumer3</label>
    <input type="file" class = "user"></input>
    </div>


    <div>
    <label >Consumer1</label>
    <input type="file" class = "user"></input>
    </div>


    <div>
    <label>Consumers2</label>
    <input type="file" class = "user"></input>
    </div>

 


    <button class = "button-89">Submit</button>



   </form>
   </>
  )
}

export default Simulation








