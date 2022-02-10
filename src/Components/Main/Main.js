import React from 'react'
import './Main.css'
import Banner from '../Banner/Banner'
import NavBar from '../NavBar/NavBar'
import Table from '../Table/Table'


function Main() {
    return (
        <div className="background-image">
            <NavBar/>
            <Banner/>
            <Table/>
            
        </div>
    )
}

export default Main
