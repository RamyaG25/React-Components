function App(){
    const [data, setData] = React.useState(null);        
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        async function getData() {
            const response = await fetch('./books.json');
            const json     = await response.json();
            setData(json);
            setLoaded(true);
        }
        getData();
    },[])
    console.log('loaded:', loaded, 'data:', data);

    return (<>
     
        <div className="container">
            <h1>List of Javascript books</h1>  

       <nav className="nav-bar" >

        <div className="nav-head">
        <a href="#">Home</a>
      <a href="#">Best-Selling</a>
        

       
        <input type="search" placeholder="Search" aria-label="Search"></input>
        <button type="submit">Search</button>
    
       </div>
          </nav>

            {loaded && data.books.map((book,i) => <Book data={book} key={i}/>)}
        </div>     
        
    </>);   
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
