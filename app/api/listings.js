import client from "./client";
const endpoint = "/listings"


const getListings = () => client.get(endpoint)

const addListing = listings => {
    const data = new FormData();
    data.append("title", listings.title)
    data.append("price", listings.price)
    data.append("categoryId", listings.category.value)
    data.append("description", listings.description)
    listings.images.forEach((image, index) => {
        data.append("images", {
            name: "image" + index,
            type: "image/jpg",
            uri: image
        })
    })
    if(listings.locations)
        data.append('location', JSON.stringify(listings.location))
    return client.post(endpoint, data)
}

export default {
    addListing,
    getListings,
}


