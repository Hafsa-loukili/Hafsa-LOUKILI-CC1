
import React from 'react';

const Voiture = ({ voiture, onDelete }) => {
    const handleDelete = () => {
        const confirmation = window.confirm("Êtes-vous sûr de vouloir supprimer cette voiture ?");
        if (confirmation) {
            onDelete(voiture.id);
        }
    };

    return (
        <div className="card mb-3">
            <img src={`./images/${voiture.image}`} className="card-img-top" alt={voiture.Marque} />
            <div className="card-body">
                <h5 className="card-title">{voiture.Marque}</h5>
                <p className="card-text">Type de carburant : {voiture.TypeCarburant}</p>
                <p className="card-text">Prix de location : {voiture.PrixLocation} MAD</p>
                <button className="btn btn-danger" onClick={handleDelete}>Supprimer</button>
            </div>
        </div>
    );
};

export default Voiture;
