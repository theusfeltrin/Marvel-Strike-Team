import { FaSpinner } from 'react-icons/fa'
import './loadingStyles.sass'

export const Loading = () => {
  return (
    <div className="loadingContainer">
      <div className="loadingSpinner">
        <FaSpinner />
      </div>
    </div>
  )
}
