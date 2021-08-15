


import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { ChakraProvider } from "@chakra-ui/react"

import Homepage from "./pages/Homepage";
import YourPokemonPage from "./pages/YourPokemonPage";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/yourpokemon">
              <YourPokemonPage />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </div>
      </Router>

    </ChakraProvider>
  );
}

export default App;
