import React from 'react'

class Display extends React.Component {
    static defaultProps = {
        count: {
            strikes: 0,
            balls: 0,
            outs: 0,
            hits: 0,
            walks: 0
        }
    }
    render(){
        return(
            <div>
                <h1>Scoreboard</h1>
                <h3>Strikes</h3>
                <h2 data-testid="strikes-count">{this.props.count.strikes}</h2>
                <h3>Balls</h3>
                <h2 data-testid="balls-count">{this.props.count.balls}</h2>
                <h3>Outs</h3>
                <h2 data-testid="outs-count">{this.props.count.outs}</h2>
                <h3>Hits</h3>
                <h2 data-testid="hits-count">{this.props.count.hits}</h2>
                <h3>Walks</h3>
                <h2 data-testid="walks-count">{this.props.count.walks}</h2>
            </div>
        )
    }
}

export default Display