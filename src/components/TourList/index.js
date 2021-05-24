import React, { Component } from 'react'
import './TourList.scss'
import Tour from '../Tour/Tour'
import {tourData} from '../../tourData'
export default class TourList extends Component {
    state={
        tours:tourData
    }
    deleteTour=(id)=>{
        
    this.setState({tours:this.state.tours.filter(tour=>tour.id!==id)})
    }
    render() {
        return (
            <section className='tourlist' > 
                {
                    this.state.tours.map(
                        tour=><Tour deleteTour={this.deleteTour} key={tour.id} {...tour}/>
                    )
                }
            </section>
        )
    }
}
