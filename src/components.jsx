import './App.css'
import { useNavigate } from 'react-router-dom';

function MainButton({message , navigateTo}){
const navigate = useNavigate()

    return(
        <>
        <div className='mainButton'>
        <button className="button-89" role="button" onClick={(e) => {navigate('/' + navigateTo)}}>{message}</button>
      </div>
        
        </>
    )
}

export default MainButton