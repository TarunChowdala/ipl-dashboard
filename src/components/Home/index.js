// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const formattedData = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({teamsData: formattedData, isLoading: false})
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Three Dots" color="white" height="50" />
    </div>
  )

  render() {
    const {teamsData, isLoading} = this.state

    return (
      <div className="container">
        {isLoading ? (
          this.renderLoader()
        ) : (
          <>
            <div className="logo-heading">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="heading">IPL Dashboard</h1>
            </div>
            <ul className="team-cards-container">
              {teamsData.map(eachItem => (
                <TeamCard key={eachItem.id} eachItem={eachItem} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
