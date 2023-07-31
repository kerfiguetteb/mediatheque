// Import de l'interface Product
import Product from "./product.model";

// Création du modèle Film qui est une interface qui étend Product
export default interface Film extends Product {
  real: string;
  synopsis: string;
}