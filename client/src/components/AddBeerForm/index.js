import { useState } from 'react';
import { AddBeer } from '../../utils/beerService';

const styles = {
    card: {
        flex: '1 0 100%',
        display: 'inline-flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        flexWrap: 'wrap',
        border: '2px solid rgb(77, 72, 72)',
        width: '80%',
        margin: '20px',
        padding: '10px',
        alignSelf: 'center'
    },
    cardBody: {
        flexDirection: 'column',
        display: 'inline-flex',
        flexWrap: 'wrap',
        alignItem: 'center'
    },
}

const AddBeerButton = () => {
    const [showForm, setShowForm] = useState(false);
    return (
        <div>
            {
                showForm
                    ? (<AddBeerForm onSubmit={() => setShowForm(false)} />)
                    : <button className="addReviewButton" onClick={() => setShowForm(true)}>Add Beer</button>
            }
        </div>)
}

const AddBeerForm = ({ onSubmit }) => {
    const [formState, setFormState] = useState({
        name: '',
        brand: '',
        description: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await AddBeer(formState)
            onSubmit();
        } catch (err) {
            console.log(err)
        };
    }

    return (
        <div className="card" style={styles.card}>
            <div className="cardBody" style={styles.cardBody}>
                <form className="addBeerForm" onSubmit={handleSubmit}>
                    <div>
                        <h3>Add your own beer here!</h3>
                        <label htmlFor="name" className="form-label p-2">Beer Name</label>
                        <input
                            className="form-input"
                            placeholder='Beer name'
                            name="name"
                            type="text"
                            value={formState.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="brand" className="form-label p-2">Brand</label>
                        <input
                            className="form-input"
                            placeholder='Brand name'
                            name="brand"
                            type="text"
                            value={formState.brand}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="form-label p-2">Description</label>
                        <input
                            className="form-input"
                            placeholder='Description'
                            name="description"
                            type="text"
                            value={formState.description}
                            onChange={handleChange}
                        />
                    </div>
                    <button type='submit' className="submitBeerButton">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddBeerButton;