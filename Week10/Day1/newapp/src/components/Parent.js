const Parent = (props) => {
    console.log('props=>', props);
    // return (
    // <h1>Parent</h1>

    // )
    if (props.user === 'admin')
        return <h1>Admin Dashboard</h1>
    return props.children;
};

export default Parent;