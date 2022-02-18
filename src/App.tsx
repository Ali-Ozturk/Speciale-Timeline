import React from "react"
import {Chrono} from "react-chrono";
import {items} from "./data/TimelineData";
import moment from 'moment';

function App() {

    const [isAlternating, setAlternating] = React.useState(false);

    const today = moment();
    let chosenItem = null;

    items.forEach((item) => {
        const itemDate = moment(item.title!, 'DD-MM-YYYY');

        if (itemDate < today) {
            chosenItem = item;
        }
    })

    const foundIndex = chosenItem ? items.indexOf(chosenItem) : 0;

    return (
        <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', margin: 'auto'}}>
            <Chrono items={items}
                    mode={isAlternating ? "VERTICAL_ALTERNATING" : "VERTICAL"}
                    activeItemIndex={foundIndex}
                    cardHeight={100}
                    theme={{
                        primary: "#6F2232",
                        secondary: "#ffffff",
                        cardBgColor: "#ffffff",
                        cardForeColor: "black",
                        titleColor: "black"
                    }}
                    hideControls={true}
            />

            <div style={{position: 'absolute', top: '1rem', left: '2rem'}}>
                <button className={'alternate-button'} onClick={() => setAlternating(!isAlternating)}>Change view
                </button>
            </div>
        </div>
    )

}

export default App;
