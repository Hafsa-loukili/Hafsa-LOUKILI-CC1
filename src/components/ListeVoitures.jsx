import React from 'react';
import AjouterVoiture from './AjouterVoiture';

const ListeVoitures = () => {
    const [voitures, setVoitures] = React.useState([
        { id: "v2", Marque: "Peugeot208", TypeCarburant: "Essance", PrixLocation: 400, image: "img2.jpg" },
        { id: "v1", Marque: "Dacia_Logan", TypeCarburant: "Diesel", PrixLocation: 200, image: "img1.jpg" },
        { id: "v3", Marque: "BMW", TypeCarburant: "Diesel", PrixLocation: 600, image: "img3.jpg" },
        { id: "v4", Marque: "essai", TypeCarburant: "Diesel", PrixLocation: 600, image: "img4.jpg" },
        { id: "v5", Marque: "Toyota", TypeCarburant: "Diesel", PrixLocation: 400, image: "img5.jpg" }
    ]);
    const [showForm, setShowForm] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState('');
    const [alertVisible, setAlertVisible] = React.useState(false);

    const deleteVoiture = (id) => {
        setVoitures(voitures.filter(voiture => voiture.id !== id));
    };

    const addVoiture = (newVoiture) => {
        setVoitures([...voitures, newVoiture]);
        setShowForm(false);
        setAlertMessage('Voiture ajoutée avec succès !');
        setAlertVisible(true);
        setTimeout(() => {
            setAlertVisible(false);
        }, 3000);
    };

    const titleStyle = {
        color: '#227B94',
        textAlign: 'center',
    };

    const buttonStyle = {
        backgroundColor: '#006A67', 
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '8px 16px',
        cursor: 'pointer'
    };

    const alertStyle = {
        border: '2px solid #006A67' 
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px'
    };

    const thStyle = {
        backgroundColor: '#006A67',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        border: '1px solid #006A67',
    };

    const tdStyle = {
        padding: '10px',
        textAlign: 'center',
        textAlign: 'center',
        border: '1px solid #DBD3D3',
    };

    return (
        <div className="container">
            <h1 style={titleStyle}>Liste des Voitures</h1>
            <button style={buttonStyle} onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Annuler' : 'Ajouter une Voiture'}
            </button>
            {showForm && <AjouterVoiture onAdd={addVoiture} />}
            
            {alertVisible && (
                <div className="alert alert-success mt-3" role="alert" style={alertStyle}>
                    {alertMessage}
                </div>
            )}

            <table style={tableStyle} className="table table mt-4">
                <thead>
                    <tr>
                        <th style={thStyle}>Image</th>
                        <th style={thStyle}>Marque</th>
                        <th style={thStyle}>Type de Carburant</th>
                        <th style={thStyle}>Prix de Location</th>
                        <th style={thStyle}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {voitures.map((voiture, index) => (
                        <tr key={voiture.id} style={{ backgroundColor: index % 2 === 0 ? '#DBD3D3' : 'white' }}>
                            <td style={tdStyle}>
                                <img src={`./images/${voiture.image}`} alt={voiture.Marque} style={{ width: '100px' }} />
                            </td>
                            <td style={tdStyle}>{voiture.Marque}</td>
                            <td style={tdStyle}>{voiture.TypeCarburant}</td>
                            <td style={tdStyle}>{voiture.PrixLocation} MAD</td>
                            <td style={tdStyle}>
                                <button style={buttonStyle} onClick={() => deleteVoiture(voiture.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListeVoitures;
