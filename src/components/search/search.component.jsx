
export default function Search (props){
    const search = props.search
    return(
        <div className={checkLoaded()}>
        <input
          type="text"
          placeholder="Search a city and state.."
          className="search-bar"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
        <h1 style={{marginTop: '10px'}}>Search a City and State!</h1>
        <p>EX: Denver, Colorado</p>
      </div>
    )
    }
