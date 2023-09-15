// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="first-container">
        <div>
          <p className="opp-team-name">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue-result">{venue}</p>
          <p className="venue-result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="opp-team-logo"
        />
      </div>
      <hr className="horizontal-line" />
      <div className="result-container">
        <h1 className="side-headings">first innings</h1>
        <p className="results">{firstInnings}</p>
        <h1 className="side-headings">second innings</h1>
        <p className="results">{secondInnings}</p>
        <h1 className="side-headings">Man of the match</h1>
        <p className="results">{manOfTheMatch}</p>
        <h1 className="side-headings">umpires</h1>
        <p className="results">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
