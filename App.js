const heading = React.createElement('div',
 { id : 'parent'},
 React.createElement('div', {id: 'child'},
 React.createElement('h1', {}, 'h1 heading is this')));

 console.log(heading)

 const root = ReactDOM.createRoot(document.getElementById('root'))

 root.render(heading);