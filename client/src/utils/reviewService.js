export const GetReviews = async (beerId) => {
    const response = await fetch(`/api/beers/${beerId}/reviews`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        return await response.json();
    } else {
        console.error(await response.text());
        alert("Something went wrong :(");
    }
}

export const AddReview = async ({ beerId, comment, rating }) => {
    const response = await fetch(`/api/beers/${beerId}/reviews`, {
        method: "POST",
        body: JSON.stringify({
            comment,
            rating
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        alert("Could not add your review");
    }
}