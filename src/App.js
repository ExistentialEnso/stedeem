import './App.css'
import React from 'react'
import RedemptionLink from './RedemptionLink'

const keyRegex = new RegExp(/([A-Z,0-9]{5})-([A-Z,0-9]{5})-([A-Z,0-9]{5})/ig)

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
            // React needs a key for each element in the list, which then can't be retrieved via props
            // So we have to double up on using the key -- both as a React key and as a prop
            keyLinks.push(<RedemptionLink key={results[0]} steamKey={results[0]} />)

            if (keyRegex.lastIndex === keyRegex.index) {
                keyRegex.lastIndex++
            }
        }
        if(keyLinks.length === 0)
            keyLinks.push(<em key="none">None</em>)

        return (
            <div className="app">
                <div className="content">
                    <h1>Stedeem</h1>
            
                    <p>
                        Paste any text below containing Steam keys, and redemption links will be auto-generated.
                    </p>

                    <p className="small">
                        (No data is sent to our servers, and you can self-host your own instance with the MIT-licensed 
                        <a href="https://github.com/ExistentialEnso/stedeem" target="_blank" rel="noreferrer">source code.</a>)
                    </p>

                    <textarea
                        value={this.state.paste}
                        onChange={(e) => this.setState({paste: e.target.value})} />

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
