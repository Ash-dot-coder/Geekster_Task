import React, { useState } from "react";
import "./Restaurants.css";
import restaurantData from "./RestaurantData";
// console.log(restaurantData);

export default function Restaurants() {
    const [searchTerm, setSearchTerm] = useState("");
    const [minRating, setMinRating] = useState(0);

    const filteredRestaurants = restaurantData
        .filter((restaurant) =>
            restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((restaurant) => restaurant.rating >= minRating);

    return (
        <div className="restaurant-container">
            <h2 className="restaurant-heading">Restaurants</h2>
            <div className="restaurant-controls">
                <input
                    type="text"
                    placeholder="Search restaurants..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="restaurant-search"
                />
                <div className="rating-filter">
                    <label>Minimum Rating:</label>
                    <input
                        type="number"
                        min="1"
                        max="6"
                        value={minRating}
                        onChange={(e) => setMinRating(Number(e.target.value))}
                    />
                </div>
            </div>
            <div className="restaurant-list">
                {filteredRestaurants.map((restaurant) => (
                    <div key={restaurant.id} className="restaurant-item">
                        <h2 className="restaurant-name">
                            {restaurant.name}{" "}
                            <span className="restaurant-rating">(⭐{restaurant.rating})</span>
                        </h2>
                        <p className="restaurant-address">📍{restaurant.address}</p>
                        <p className="restaurant-location">
                            {restaurant.outcode} &nbsp;
                            {restaurant.postcode}
                        </p>
                        <div className="food-link">
                            <h4 className="restaurant-food">🍽 {restaurant.type_of_food}</h4>
                            <a
                                href={restaurant.URL}
                                className="restaurant-menu-link"
                                target="_blank"
                            >
                                Visit Menu
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}