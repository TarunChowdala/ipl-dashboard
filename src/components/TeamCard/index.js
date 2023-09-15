// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachItem} = props
  return (
    <Link to={`/team-matches/${eachItem.id}`} className="link-item">
      <li className="team-card">
        <img
          src={eachItem.teamImageUrl}
          alt={eachItem.name}
          className="team-image"
        />
        <p className="team-name">{eachItem.name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
