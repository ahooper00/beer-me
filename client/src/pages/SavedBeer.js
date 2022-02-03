import React, { useState } from 'react';
import { QUERY_ME } from '../utils/queries';
import { Card, Button } from 'react-bootstrap';

const SavedBeers = () => {
    return (<div />)
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
};

export default SavedBeers;