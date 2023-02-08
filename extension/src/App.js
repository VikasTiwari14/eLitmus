import React, { useState } from 'react'
import "./App.css"
import RequirementCheck from './Components/RequirementCheck/RequirementCheck';
import UserDetailForm from './Components/UserDetailForm/UserDetailForm'


const App = () => {
    const [tab, setTab] = useState(0);
    const [id, setId] = useState(0);
    const [testDetails, setTestDetails] = useState({
        duration : 90,
        imageInterval : 3
    });

    const getComponent = () => {
        switch(tab){
            case 0 : return <UserDetailForm setTab={setTab} setTestDetails={setTestDetails} setId={setId}/>
            case 1 : return <RequirementCheck setTab={setTab} id={id} />
        }
    }

    return (
        <div className='App'>
            {
                getComponent()
            }
        </div>
    )
}

export default App