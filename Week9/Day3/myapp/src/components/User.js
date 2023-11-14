const User = (props) => {
    // const {name, username, email} = props;
    // return(
    //     <div className = "userstyle">
    //         <h2>Name: {name}</h2>
    //         <p>Email: {email}</p>
    //         <h4>Username: {username}</h4>
    //         {/* <p>{address.city}</p> */}
    //     </div>
    // )
    return(
    <div className = "tc b">
        <img src={`https://robohash.org/${id}?size=150x150`}/>
        <h4>{name}</h4>
        <p>{username}</p>
    </div>
    );
}

export default User