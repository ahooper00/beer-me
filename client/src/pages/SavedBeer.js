import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_BEER } from '../utils/mutations';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import { removeBeer, saveBeer } from 

const SavedBeers = () => {
    const [refetchData, setRefetchData] = useState(true);
    const [removeBook, { error }] = useMutation(REMOVE_BEER);
    const { loading, data, refetch } = useQuery(QUERY_ME, {
        refetchOnMount: "always",
        force: true,
    });
    const userData = data?.me || { savedBeers: [] };

    if (refetchData) {
        setRefetchData(!refetchData);
        refetch();
    }

    const handleDeleteBeer = async (bookId) => {

        try {
            const { data } = await removeBeer({ variables: { beerId: beerId } });
            removeBeerId(beerId)

        } catch (err) {
            console.error(err);
        }
        setRefetchData(true);
    };

    return (
        <section>
            <div>
                <h1>
                    Here are your saved beers!
                </h1>
            </div>
            <div>
                <h2>
                    {userData.savedBeers.length
                        ? `Viewing ${userData.savedBeers.length} saved ${userData.savedBeers.length === 1 ? 'beer' : 'beers'}:`
                        : 'You have no saved beers!'}
                </h2>
                <CardColumns>
                    {userData.savedBooks.map((beer) => {
                        return (
                            <Card key={beer.beerId} border='dark'>
                                {beer.image ? <Card.Img src={beer.image} alt={`The beer can for ${beer.name}`} variant='top' /> : null}
                                <Card.Body>
                                    <Card.Title>{beer.name}</Card.Title>
                                    <p className='small'>Brand: {beer.brand}</p>
                                    <Card.Text>{beer.description}</Card.Text>
                                    <Button className='btn-block btn-danger' onClick={() => handleDeleteBeer(beer.beerId)}>
                                        Delete this Beer!
                                    </Button>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </CardColumns>
            </div>
        </section>
    );
};

export default SavedBeers;