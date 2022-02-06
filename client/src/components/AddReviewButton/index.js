import { useState } from 'react';
import { AddReview } from '../../utils/reviewService';

const AddReviewButton = ({beerId}) => {
    const [showForm, setShowForm] = useState(false);
    return (
        <div>
            {
                showForm
                    ? (<AddReviewForm beerId={beerId} onSubmit={() => setShowForm(false)} />)
                    : <button onClick={() => setShowForm(true)}>Add Review</button>
            }
        </div>)
}

const AddReviewForm = ({ onSubmit, beerId }) => {
    const [formState, setFormState] = useState({
        comment: '',
        rating: '',
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
            await AddReview({...formState, beerId})
            onSubmit();
        } catch (err) {
            console.log(err)
        };
    }

    return (
        <div className="card">
            <div className="cardBody">
                <form className="addReviewForm" onSubmit={handleSubmit}>
                    <div>
                        <h3>Add your own review here!</h3>
                        <label htmlFor="name" className="form-label">You review here</label>
                        <input
                            className="form-input"
                            placeholder='Review'
                            name="comment"
                            type="text"
                            defaultValue={formState.comment}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="brand" className="form-label">Rating</label>
                        <input
                            className="form-input"
                            placeholder='Rating'
                            name="rating"
                            type="number"
                            value={formState.rating}
                            onChange={handleChange}
                        />
                        /10
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddReviewButton;