import './App.css'
import React from 'react'

const keyRegex = new RegExp(/([A-Z,0-9]{5})-([A-Z,0-9]{5})-([A-Z,0-9]{5})/ig)
const redeemURL = "https://store.steampowered.com/account/registerkey?key="

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            paste: ""
        }
    }

    render() {
        const keyLinks = []
        let results
        keyRegex.lastIndex = 0

        while(results = keyRegex.exec(this.state.paste)) {
            console.log(results)

            keyLinks.push(
                <div key={results[0]}>
                    <a href={redeemURL + results[0]} target={results[0]}>{results[0]}</a>
                </div>
            )

            if (keyRegex.lastIndex === keyRegex.index) {
                keyRegex.lastIndex++
            }
        }
        if(keyLinks.length === 0)
            keyLinks.push(<em>None</em>)

        return (
            <div className="App">
                <header className="App-header">
                    <h1>Stedeem</h1>
            
                    <p>
                        Paste below any text containing Steam keys, and redemption links will be generated:
                    </p>

                    <textarea style={{width: "60%", height: "200px", fontSize:"16px"}} value={this.state.paste} onChange={(e) => this.setState({paste: e.target.value})} />

                    <h2>Key Redemption Links</h2>

                    {keyLinks}

                    <div style={{fontSize: "66%", marginTop: "100px"}}>
                        Created by <a href="thorne.codes">Thorne Melcher</a>.
                    </div>
                </header>
            </div>
        )
    }
}
