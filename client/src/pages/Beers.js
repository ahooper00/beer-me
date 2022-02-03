import React, { useEffect } from 'react';

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

const Beers = () => {
    return (
        <div className="card" style={styles.card}>
            <div className="cardBody" style={styles.cardBody}>
                <form className="addBeerForm">
                    <div>
                        <h3>Add your own beer here!</h3>
                        <label htmlFor="name" className="form-label">Beer Name</label>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            id="name"
                            aria-describedby="nameHelp"
                        />
                    </div>
                    <div>
                        <label htmlFor="brand" className="form-label">Brand</label>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            id="brand"
                            aria-describedby="nameHelp"
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="form-label">Description</label>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            id="description"
                            aria-describedby="nameHelp"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Beers;