// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamDetails: {}, isLoading: true}

  componentDidMount = () => {
    this.fetchData()
  }

  formatMatchDetails = matchData => ({
    competingTeam: matchData.competing_team,
    competingTeamLogo: matchData.competing_team_logo,
    date: matchData.date,
    id: matchData.id,
    firstInnings: matchData.first_innings,
    secondInnings: matchData.second_innings,
    manOfTheMatch: matchData.man_of_the_match,
    matchStatus: matchData.match_status,
    venue: matchData.venue,
    umpires: matchData.umpires,
    result: matchData.result,
  })

  fetchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedData = await response.json()
    const formattedData = {
      latestMatchDetails: this.formatMatchDetails(
        fetchedData.latest_match_details,
      ),
      recentMatches: fetchedData.recent_matches.map(eachMatch =>
        this.formatMatchDetails(eachMatch),
      ),
      teamBannerUrl: fetchedData.team_banner_url,
    }

    this.setState({teamDetails: formattedData, isLoading: false})
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Three Dots" color="white" height="50" />
    </div>
  )

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {teamDetails, isLoading} = this.state
    const {latestMatchDetails, recentMatches, teamBannerUrl} = teamDetails

    const className = `${id.toLowerCase()}`
    return (
      <div className={className}>
        {isLoading ? (
          this.renderLoader()
        ) : (
          <>
            <img src={teamBannerUrl} alt="team banner" className="team-logo" />
            <p className="latest-matches-text">Latest Matches</p>
            <LatestMatch
              latestMatchDetails={latestMatchDetails}
              key={latestMatchDetails.id}
            />
            <ul className="match-card-container">
              {recentMatches.map(eachMatch => (
                <MatchCard eachMatch={eachMatch} key={eachMatch.id} />
              ))}
            </ul>{' '}
          </>
        )}
      </div>
    )
  }
}
export default TeamMatches
