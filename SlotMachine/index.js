const emoji = ["💣", "🔥", "🔫"];
let emoj1 = emoji[Math.floor(Math.random() * emoji.length)];
let emoj2 = emoji[Math.floor(Math.random() * emoji.length)];
let emoj3 = emoji[Math.floor(Math.random() * emoji.length)];
let emoj4 = emoji[Math.floor(Math.random() * emoji.length)];
let emoj5 = emoji[Math.floor(Math.random() * emoji.length)];
let emoj6 = emoji[Math.floor(Math.random() * emoji.length)];
let emoj7 = emoji[Math.floor(Math.random() * emoji.length)];
let emoj8 = emoji[Math.floor(Math.random() * emoji.length)];
let emoj9 = emoji[Math.floor(Math.random() * emoji.length)];

class App extends React.Component {
    render() {
        return (

            <div>
                <h1>Slot Machine:</h1>
                <Machine uno={emoj1} due={emoj3} tre={emoj2}/>
                <Machine uno={emoj4} due={emoj5} tre={emoj6}/>
                <Machine uno={emoj7} due={emoj8} tre={emoj9}/>

                <button>PLAY</button>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

