import { FC } from 'react';

// Définition de l'interface pour les props du composant
interface GreetingProps {
  name: string;
}

// Déclaration du composant fonctionnel avec le type FC et les props typées
export const App: FC<GreetingProps> = ({ name }) => {
  return <div>Bonjour, {name}!</div>;
};

// Exportation du composant


import  { Component } from 'react';

// Définition de l'interface pour l'état du composant
interface CompteurState {
  compte: number;
}

// Déclaration de la classe Compteur en tant que composant de type Component
class Compteur extends Component<{}, CompteurState> {
  // Initialisation de l'état
  state: CompteurState = {
    compte: 0
  };

  // Méthode pour incrémenter le compteur
  increment = () => {
    this.setState({ compte: this.state.compte + 1 });
  };

  // Méthode render pour afficher le composant
  render() {
    return (
      <div>
        <p>Compte : {this.state.compte}</p>
        <button onClick={this.increment}>Incrément</button>
      </div>
    );
  }
}

// Exportation du composant
export default Compteur;

