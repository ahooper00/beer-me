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

export const addBeer = async ({ name, brand, description }) => {
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