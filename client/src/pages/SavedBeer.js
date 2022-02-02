import React, { useState } from 'react';
import { QUERY_ME } from '../utils/queries';
import { Card, Button } from 'react-bootstrap';

const SavedBeers = () => { return (<div/>)
    // const [refetchData, setRefetchData] = useState(true);
    // const [removeBeer, { error }] = useMutation(REMOVE_BEER);
    // const { data, refetch } = useQuery(QUERY_ME, {
    //     refetchOnMount: "always",
    //     force: true,
    // });
    // const userData = data?.me || { savedBeers: [] };

    // if (refetchData) {
    //     setRefetchData(!refetchData);
    //     refetch();
    // }

    // const handleDeleteBeer = async (beerId) => {

    //     try {
    //         const { data } = await removeBeer({ variables: { beerId: beerId } });
    //         removeBeer(beerId)

    //     } catch (err) {
    //         console.error(err);
    //     }
    //     setRefetchData(true);
    // };

    // return (
    //     <section>
    //         <div>
    //             <h1>
    //                 Here are your saved beers!
    //             </h1>
    //         </div>
    //         <div>
    //             <h2>
    //                 {userData.savedBeers.length
    //                     ? `Viewing ${userData.savedBeers.length} saved ${userData.savedBeers.length === 1 ? 'beer' : 'beers'}:`
    //                     : 'You have no saved beers!'}
    //             </h2>
    //             <div>
    //                 {userData.savedBeers.map((beer) => {
    //                     return (
    //                         <Card key={beer.beerId} border='dark'>
    //                             {beer.image ? <Card.Img src={beer.image} alt={`The beer can for ${beer.name}`} variant='top' /> : null}
    //                             <Card.Body>
    //                                 <Card.Title>{beer.name}</Card.Title>
    //                                 <p className='small'>Brand: {beer.brand}</p>
    //                                 <Card.Text>{beer.description}</Card.Text>
    //                                 <Button className='btn-block btn-danger' onClick={() => handleDeleteBeer(beer.beerId)}>
    //                                     Delete this Beer!
    //                                 </Button>
    //                             </Card.Body>
    //                         </Card>
    //                     );
    //                 })}
    //             </div>
    //         </div>
    //     </section>
    // );
};

export default SavedBeers;