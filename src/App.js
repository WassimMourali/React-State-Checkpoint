import React, { Component } from 'react';
import './App.css'; 
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'; 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        Name: 'Wassim MOURALI',
        bio: 'Developer FullStack JS',
        imgSrc: 'https://scontent.ftun10-2.fna.fbcdn.net/v/t39.30808-6/425986600_6668868563219178_3960490196495086665_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=UBfjYTtO9JkQ7kNvgGZ-ypZ&_nc_ht=scontent.ftun10-2.fna&oh=00_AYClSmzBbIWfv_k-dq59Kxtd4Pn1fJsMKSXdSnCrKB9jfQ&oe=66BAB29B',
        profession: 'System Weighing Manager',
        linkedin: 'https://www.linkedin.com/in/wassim-mourali/', 
        github: 'https://github.com/WassimMourali',
        facebook: 'https://www.facebook.com/wassim.mourali1/?locale=fr_FR' 
      },
      shows: false,
      mountedTime: 0,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({ shows: !this.state.shows });
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => {
        const newTime = prevState.mountedTime + 1;
        return { mountedTime: newTime };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(secs)}`;
  }

  pad(num) {
    return num.toString().padStart(2, '0');
  }

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div className="App">
        <button className="toggle-button" onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        
        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.Name} className="profile-image" />
            <div className="profile-details">
              <h1 className="profile-name">{person.Name}</h1>
              <p className="profile-bio">{person.bio}</p>
              <h2 className="profile-profession">{person.profession}</h2>
            </div>
            <div className="profile-icons">
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href={person.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub />
              </a>
              <a href={person.twitter} target="_blank" rel="noopener noreferrer" title="Twitter">
                <FaFacebook />
              </a>
            </div>
          </div>
        )}

        <div className="mounted-time">
          <h3>{this.formatTime(mountedTime)}</h3>
        </div>
      </div>
    );
  }
}

export default App;
