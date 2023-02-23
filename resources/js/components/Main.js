import React from 'react';
function Main() {
    return (
        <div className='App'>
            <h1>Hola</h1>
        </div>
    )
}

export default Main;
if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}