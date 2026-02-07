function ListGroup() {
    const items = [
        'New York',
        'San Fran',
        'Tokyo',
        'London',
        'Sydney'
    ]

    //Event Handler for mouse click
    // const handleClick = (event : React.MouseEvent<HTMLLIElement>) => console.log(event)
    const handleItemClick = (item : string) => console.log("handleItemClick: " + item)
    //
    // if (items.length === 0) {
    //     return (<>
    //         <p>No items</p>
    //     </>);
    // }
    return (
        <>
            <h1>Cities</h1>
            {/*{items.length === 0 ? <p>No Cities</p> : null}*/}
            <ul className="list-group">
                {items.map( item =>
                    <li
                        className={`list-group-item`}
                    key={item}
                    onClick={() => handleItemClick(item)}
                    >
                        {item}
                    </li>
                )}
            </ul>
        </>
    )
}

export default ListGroup