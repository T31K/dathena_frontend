import {ButtonIcon,} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuestion, faTrash, faPlus, faHome} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom"
import axiosInstance from "../utils/api"

const Navbar = (selection) => {
  let data = selection.selection
  const deleteSelectedUser = () => {
    for (let i = 0 ; i < data.length ; i++){
      axiosInstance.delete(`${data[i].id}/`)
    }
    window.location.reload()
  }

  return(
  <>
  <div>
  <img src="https://lever-client-logos.s3.us-west-2.amazonaws.com/e5f0087a-1035-41fe-99d4-f546801d326e-1599804405935.png" alt="logo" className="logo" />

    <div className="rainbow">
      <Link to="/"><ButtonIcon variant="border-filled"  icon={<FontAwesomeIcon icon={faHome} />} /></Link>
      <Link to="/create"><ButtonIcon variant="border-filled"  icon={<FontAwesomeIcon icon={faPlus} />} /></Link>
      <Link to="/help"><ButtonIcon variant="border-filled"  icon={<FontAwesomeIcon icon={faQuestion} />} /></Link>
      <ButtonIcon variant="border-filled"  icon={<FontAwesomeIcon icon={faTrash} />} disabled={data.length <= 0 ?  true : false} onClick={deleteSelectedUser}/>
    </div>
  </div>
  </>
  )
}

export default Navbar

