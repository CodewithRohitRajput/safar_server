module.exports = {
    getGoogleReviews : async (req , res) => {
        const response = await fetch("https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJzdy64F7jYjkRvdyYHSzrhck&fields=name,rating,reviews&key=AIzaSyAbEYcE1E7YizpYFDp2nX2fwkWs3D58APg")
        const data = await response.json();
        res.json(data.result.reviews);
    }
}