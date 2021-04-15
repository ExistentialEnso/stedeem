import './App.css'
import React from 'react'

const keyRegex = new RegExp(/([A-Z,0-9]{5})-([A-Z,0-9]{5})-([A-Z,0-9]{5})/ig)
const redeemURL = "https://store.steampowered.com/account/registerkey?key="

/**
 * Simple React app that extracts Steam keys from text
 */
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

        // eslint-disable-next-line
        while(results = keyRegex.exec(this.state.paste)) {
            keyLinks.push(
                <div key={results[0]}>
                    <a href={redeemURL + results[0]} target="_blank" rel="noreferrer">{results[0]}</a>
                </div>
            )

            if (keyRegex.lastIndex === keyRegex.index) {
                keyRegex.lastIndex++
            }
        }
        if(keyLinks.length === 0)
            keyLinks.push(<em>None</em>)

        return (
            <div className="app">
                <div className="content">
                    <h1>Stedeem</h1>
            
                    <p>
                        Paste any text below containing Steam keys, and redemption links will be auto-generated:
                    </p>

                    <textarea value={this.state.paste} onChange={(e) => this.setState({paste: e.target.value})} />

                    <h2>Key Redemption Links</h2>

                    {keyLinks}

                    <div className="created-by">
                        Created by <a href="https://www.thorne.codes" target="_blank" rel="noreferrer">Thorne Melcher</a> with React.
                    </div>
                </div>
            </div>
        )
    }
}
