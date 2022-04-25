
a. what's the difference between state and props?
There are 5 main differences.

1. State deals with individual component’s information and props allows to pass
data from one component to a different one.
2. State is mutable but props is immutable.
3. State are often changed using setState() but props can’t.
4. Stateless components can’t have state but can have props
5. Child components can access parent component’s props, but not state.

b. What are synthetic events in React? (Provide an example)
Recat has it’s own event handling system that it's like event handling system on DOM. it's called Synthetic Events.
for instance, onClick() and onChange() are samples of synthetic events.
  Example:

    showAlert() {
        alert("Im an alert");
    }
    render() {
        return (
            <button onClick={this.showAlert}>show alert </button>
        );
    }

c. What are portals in React?
Portals are accustomed render part outside of it’s parent component’s DOM node while keeping the React hierarchy.

e. what's going to happen if you utilize setState in constructor?
If you utilize setState in constructor, then you'll see the error like this.
Can only update a mounted or mounting component.
this suggests that you just should call setState on an unmounted component.
Constructor is helping to initialize the state.
So you  can only use this.state in constructor.
setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses.
