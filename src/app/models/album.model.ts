// Import de l'interface Product
import Product from "./product.model";

// Création du modèle album qui est une interface qui étend Product
export default interface Album extends Product {
  artiste: string;
}