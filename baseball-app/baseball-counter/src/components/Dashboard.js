import React from 'react'

class Dashboard extends React.Component {
    render(){
        return(
            <>
                <button name="strike-button"onClick={this.props.clickHandler}>Strike</button>
                <button name="ball-button"onClick={this.props.clickHandler}>Ball</button>
                <button name="foul-button"onClick={this.props.clickHandler}>Foul</button>
                <button name="hit-button"onClick={this.props.clickHandler}>Hit</button>
            </>
        )
    }
}

export default Dashboard