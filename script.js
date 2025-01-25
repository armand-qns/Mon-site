function flipCard(card) {
    // Vérifier si la carte est déjà retournée
    if (card.classList.contains('flipped')) {
        return; // Ne rien faire si la carte est déjà retournée
    }

    // Ajouter la classe 'flipped' pour retourner la carte
    card.classList.add('flipped');
}
