import React, { Component } from 'react'
import styles from '../styles/search.module.css'
import axios from 'axios'

const getDataAxios =
    async () => {
        const response =
          await axios.get("https://api.hypixel.net/player",
          {params: {key: '3e530656-095b-4e8e-b778-b6fde39f0e92', uuid: 'c8237bd3-44f9-479a-9420-7110136c7e05'}})
        console.log(response.data)
    }

const Search = () => (
    <div>
        <input
            type="text"
            id="header-search"
            placeholder="Username"
            className={styles.search}
        />
        <button className={styles.button} onClick={getDataAxios}>Find Stats!</button>
    </div>
);

export default Search;
//3e530656-095b-4e8e-b778-b6fde39f0e92