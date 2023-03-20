function useState ( initialState ) {
    let value = initialState;

    function getState () {
        return value;
    }

    function setState ( newValue ) {
        value = newValue;
    }

    return [ getState, setState ];
}

// const [ state, setState ] = useState(0);
// setState(1);
// console.log(state());
// setState(state() + 1);
// console.log(state());


function Counter ( props ) {

    const [ count, setCount ] = MyReact.useState(0);

    return {
        click () {
            setCount(count + 1);
        },
        render () {
            console.log("Count is " + count);
        }
    };
}

// const c = Counter();
// c.render();
// c.click();
// c.render();


const MyReact = (() => {
    let state = null;
    let deps;
    return {

        render ( component ) {
            const Comp = component();
            Comp.render();
            return Comp;
        },
        useState( initialState ) {
            state = state !== null ? state : initialState;
            function setState ( newSate ) {
                state = newSate;
            }
            return [ state, setState ];
        },
        useReducer ( initialState, reducer ) {
            const [ state, setState ] = this.useState(initialState);

            function dispatch ( action ) {
                const val = reducer(state, action);
                setState(val);
            }

            return [ state, dispatch ];
        },
        useEffect ( callback, depsArray ) {
            let hasDepsChanged = deps && depsArray && depsArray.length > 0 ? !depsArray.every((item, idx) => item === deps[idx] ) : true;
            if ( hasDepsChanged ) {
                setTimeout(callback, 0);
                deps = depsArray;
            }
        }
    };
})();

// let App = MyReact.render(Counter);
// App.click();
// App = MyReact.render(Counter);



// useReducer hook
function counterReducer ( state, action ) {
    switch( action.type ) {
        case "add" : {
            return [...state, action.payload];
            break;
        }
        case "remove": {
            state.pop();
            return state;
        }
        default: return state;
    }
}

function ReducerExample ( props ) {
    const [ value, dispatch ] = MyReact.useReducer([], counterReducer);
    // console.log("valueee", value);
    MyReact.useEffect(() => {
        console.log("value changed");
    }, [ value ]);
    return {
        click () {
            dispatch({
                type: "add",
                payload: {val: value + 1}
            })
        },
        render () {
            console.log("Value = ", value);
        }
    }
}

let App = MyReact.render(ReducerExample);
App.click();
App = MyReact.render(ReducerExample);
