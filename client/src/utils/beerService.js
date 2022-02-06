export const topBeers = async () => {
  const response = await fetch("/api/beers/top", {
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

export const AllBeers = async () => {
  const response = await fetch("/api/beers/all", {
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

export const AddBeer = async ({ name, brand, description }) => {
  const response = await fetch("/api/beers", {
    method: "POST",
    body: JSON.stringify({
      name,
      brand,
      description
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/beers");
  } else {
    alert("Failed to add your beer!");
  }
}

export const SearchBeers = async (query) => {
  const response = await fetch("/api/beers/search", {
    method: "POST",
    body: JSON.stringify({ query }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    return await response.json();
  } else {
    alert("No beer with that name found :(");
  }
}

export const FavouriteBeer = async (beerId) => {
  const response = await fetch("/api/beers/favourite", {
    method: "POST",
    body: JSON.stringify({
      beerId
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    alert("Failed to save your beer!");
  }
}

export const UnfavouriteBeer = async (beerId) => {
  const response = await fetch("/api/beers/unfavourite", {
    method: "POST",
    body: JSON.stringify({
      beerId
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    alert("Failed to save your beer!");
  }
}

export const GetFavouriteBeers = async () => {
  const response = await fetch("/api/beers/favourites", {
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

export const GetBeer = async (beerId) => {
  const response = await fetch(`/api/beers/${beerId}`, {
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