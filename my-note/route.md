
# Class Route

@ember/routing

https://api.emberjs.com/ember/3.17/classes/Route/methods/activate?anchor=activate


==================================================================


### Methods

- activate() : This hook is executed when the router enters the route.

- deactivate() : This hook is executed when the router completely exits this route.

- afterModel(resolvedModel, transition) : 이 hook에서 반환 될 값이 promise라면 반환될때까지 transition이 pause된다. 

- beforeMdoel(transition) : `Model` hook 전에 수행.
