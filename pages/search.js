import React from 'react'
import styles from '../styles/search.module.css'
import axios from 'axios'



class FindStats extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    async handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value);
        event.preventDefault();
        const response = await axios.get("https://api.minetools.eu/uuid/" + this.state.value);
        var uuid = response.data.id
        const hyResponse = await axios.get("https://api.hypixel.net/player",
        {params: {key: '3e530656-095b-4e8e-b778-b6fde39f0e92', uuid: uuid}})
        }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    name='username'
                    type="text"
                    id="header-search"
                    placeholder="Username"
                    value={this.state.value}
                    onChange={this.handleChange}
                    className={styles.search}
                />
                <button className={styles.button} onClick={this.getDataAxios}>Find Stats!</button>
            </form>
        )
    }
}


export default FindStats;
//3e530656-095b-4e8e-b778-b6fde39f0e92