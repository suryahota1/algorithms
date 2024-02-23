// Implement a state manager

class StateManager {
    resource;
    subscribers;
    constructor ( resource ) {
      this.resource = resource;
      this.subscribers = [];
    }
  
    subscribe ( cb ) {
      this.subscribers.push(cb);
      return () => {
        this.subscribers = this.subscribers.filter(currCb => currCb !== cb);
      }
    }
  
    setState(resource) {
      this.resource = {...this.resource, ...resource };
      this.subscribers.forEach(cb => cb(this.resource));
    }
  }
  
  const stateManager = new StateManager({ count: 0 });
  
  const unsubscribe = stateManager.subscribe(state => {
    console.log("changed state", state);
  })
  
  stateManager.setState({ newCount: 1 })
  stateManager.setState({ count: 1 })
  unsubscribe();
  
  stateManager.setState({ count: 2 })