import React, { useState } from 'react';

const AjouterVoiture = ({ onAdd }) => {
    const [marque, setMarque] = useState('');
    const [typeCarburant, setTypeCarburant] = useState('');
    const [prixLocation, setPrixLocation] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newVoiture = {
            id: Date.now().toString(),
            Marque: marque,
            TypeCarburant: typeCarburant,
            PrixLocation: parseInt(prixLocation),
            image: image
        };
        onAdd(newVoiture);
        setMarque('');
        setTypeCarburant('');
        setPrixLocation('');
        setImage('');
    };

    const formStyle = {
        padding: '20px',
        borderRadius: '10px',
        border: '2px solid #006A67',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '400px', 
        margin: '0 auto' 
    };

    const labelStyle = {
        color: '#003161'
    };

    const buttonStyle = {
        backgroundColor: '#006A67',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        marginTop: '10px'
    };

    const inputStyle = {
        border: '2px solid #006A67',
        borderRadius: '5px',
        width: '100%',
        padding: '10px',
        marginBottom: '10px'
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4" style={formStyle}>
            <div className="mb-3" style={{ width: '100%' }}>
                <label className="form-label" style={labelStyle}>Marque</label>
                <input type="text" className="form-control" value={marque} onChange={(e) => setMarque(e.target.value)} required style={inputStyle} />
            </div>
            <div className="mb-3" style={{ width: '100%' }}>
                <label className="form-label" style={labelStyle}>Type de Carburant</label>
                <input type="text" className="form-control" value={typeCarburant} onChange={(e) => setTypeCarburant(e.target.value)} required style={inputStyle} />
            </div>
            <div className="mb-3" style={{ width: '100%' }}>
                <label className="form-label" style={labelStyle}>Prix de Location</label>
                <input type="number" className="form-control" value={prixLocation} onChange={(e) => setPrixLocation(e.target.value)} required style={inputStyle} />
            </div>
            <div className="mb-3" style={{ width: '100%' }}>
                <label className="form-label" style={labelStyle}>Image</label>
                <input type="file" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} required style={inputStyle} />
            </div>
            <button type="submit" style={buttonStyle}>Ajouter</button>
        </form>
    );
};

export default AjouterVoiture;
