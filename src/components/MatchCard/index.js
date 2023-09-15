// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = eachMatch
  let classNameForWinner
  if (matchStatus === 'Won') {
    classNameForWinner = 'won'
  } else {
    classNameForWinner = 'lost'
  }

  return (
    <li className="list-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-img"
      />
      <p className="opp-team-name">{competingTeam}</p>
      <p className="results">{result}</p>
      <p className={`match-status ${classNameForWinner}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
