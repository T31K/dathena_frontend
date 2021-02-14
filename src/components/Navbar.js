import {ButtonIcon,} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuestion, faTrash, faPlus, faHome} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom"
import axiosInstance from "../utils/api"

const Navbar = (selection) => {
  const deleteSelectedUser = () => {
    let data = selection.selection
    for (let i = 0 ; i < data.length ; i++){
      axiosInstance.delete(`${data[i].id}/`)
   }
   window.location.reload()
  }

  return(
  <>
  <div>
    <div className="rainbow">
      <Link to="/"><ButtonIcon variant="border-filled"  icon={<FontAwesomeIcon icon={faHome} />} /></Link>
      <Link to="/create"><ButtonIcon variant="border-filled"  icon={<FontAwesomeIcon icon={faPlus} />} /></Link>
      <Link to="/"><ButtonIcon variant="border-filled"  icon={<FontAwesomeIcon icon={faQuestion} />} /></Link>
      <ButtonIcon variant="border-filled"  icon={<FontAwesomeIcon icon={faTrash} />} onClick={deleteSelectedUser}/>
    </div>
  </div>
  </>
  )
}

export default Navbar

