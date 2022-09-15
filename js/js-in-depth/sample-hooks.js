function useEffect ( cb, dependicies ) {
    const currDeps = React.state[React.index];
    if ( currDeps != dependicies ) cb();
    currDeps = dependicies;
}