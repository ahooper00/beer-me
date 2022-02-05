export const review = async () => {
    const response = await fetch("/api/beers/review", {
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

export const AddReview = async ({ comment }) => {
    const response = await fetch("/api/review", {
        method: "POST",
        body: JSON.stringify({
            comment
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        document.location.replace("/beers");
    } else {
        alert("Could not add your review");
    }
}