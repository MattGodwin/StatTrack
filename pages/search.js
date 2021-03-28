import React from 'react'
import styles from '../styles/search.module.css'
import axios from 'axios'

class FindStats extends React.Component {

    constructor() {
        super();
        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    }

    async handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value);
        event.preventDefault();
        const response = await axios.get("https://api.minetools.eu/uuid/" + this.state.value);
        const hyResponse = await axios.get("https://api.hypixel.net/player",
            { params: { key: '3e530656-095b-4e8e-b778-b6fde39f0e92', uuid: response.data.id } })
        console.log(hyResponse)
        this.setState({
            uuid: response.data.id,
            name: response.data.name,
            rank: hyResponse.data.player.newPackageRank,
            karma: hyResponse.data.player.karma,
            bedWarsStars: hyResponse.data.player.achievements.bedwars_level,
            bedWarsCoins: hyResponse.data.player.stats.Bedwars.coins,
            bedWarsWins: hyResponse.data.player.achievements.bedwars_wins,
            bedWarsLosses: hyResponse.data.player.stats.Bedwars.eight_one_losses_bedwars,
            bedWarsKills: hyResponse.data.player.stats.Bedwars.eight_one_kills_bedwars,
            bedWarsDeaths: hyResponse.data.player.stats.Bedwars.eight_one_deaths_bedwars
        });

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className={styles.form}>
                    <input
                        name='username'
                        type="text"
                        id="header-search"
                        placeholder="Username"
                        value={this.state.value}
                        onChange={this.handleChange}
                        className={styles.search}
                    />
                    <button className={styles.button}>Find Stats!</button>
                </form>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <p>
                            <h2>
                                General Information
                            </h2>
                        </p>
                        <p>
                            Username - {this.state.name}
                        </p>
                        <p>
                            UUID - {this.state.uuid}
                        </p>
                        <p>
                            Rank - {this.state.rank}
                        </p>
                        <p>
                            Karma - {this.state.karma}
                        </p>

                    </div>
                    <div className={styles.card}>
                        <p>
                            <h2>
                                Bedwars Stats
                            </h2>
                        </p>
                        <p>
                            level - {this.state.bedWarsStars}
                        </p>
                        <p>
                            Coins - {this.state.bedWarsCoins}
                        </p>
                        <p>
                            Wins - {this.state.bedWarsWins}
                        </p>
                        <p>
                            Losses - {this.state.bedWarsLosses}
                        </p>
                        <p>
                            Kills - {this.state.bedWarsKills}
                        </p>
                        <p>
                            Deaths - {this.state.bedWarsDeaths}
                        </p>
                    </div>
                    <div className={styles.card}>
                        <p>
                            <h2>
                                COMING SOON!!!
                            </h2>
                        </p>
                    </div>
                    <div className={styles.card}>
                        <p>
                            <h2>
                                COMING SOON!!!
                            </h2>
                        </p>
                    </div>
                    <div className={styles.card}>
                        <p>
                            <h2>
                                COMING SOON!!!
                            </h2>
                        </p>
                    </div>
                    <div className={styles.card}>
                        <p>
                            <h2>
                                COMING SOON!!!
                            </h2>
                        </p>
                    </div>
                </div>
            </div>

        )
    }
}


export default FindStats;
//3e530656-095b-4e8e-b778-b6fde39f0e92