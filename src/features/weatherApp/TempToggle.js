import React, { useContext } from "react";
import { GlobalStateContext } from './reducers/context';

import { setTempreature } from './reducers/actions'
import { TempToggleStyle } from './styles'

function TempToggle() {
    const { state, dispatch } = useContext(GlobalStateContext);

    return <TempToggleStyle onClick={() => { dispatch(setTempreature()); }}>
        <input type="checkbox" className="checkbox" />
        <div className="knobs">
            <span></span>
        </div>
        <div className="layer"></div>
    </TempToggleStyle>;
}

export default TempToggle;
