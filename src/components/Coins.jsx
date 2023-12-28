// Import necessary dependencies and components
import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";
import "../styles/header.css";

// Define the Coins component
const Coins = () => {
  // State variables for managing data, loading, errors, page, currency, search input, and filtered coins
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  const [searchInput, setSearchInput] = useState("");
  const [filteredCoins, setFilteredCoins] = useState([]);

  // Define the currency symbol based on the selected currency
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  // Function to change the current page
  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  // Create an array of buttons for pagination
  const btns = new Array(132).fill(1);

  // useEffect to fetch coins from the server based on currency and page
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  // useEffect to filter coins based on search input
  useEffect(() => {
    const filtered = coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredCoins(filtered);
  }, [searchInput, coins]);

  // If an error occurs during data fetching, display an error component
  if (error) return <ErrorComponent message={"Error While Fetching Coins"} />;

  // Render the main body of the Coins component
  return (
    <Container maxW={"container.x2"} className="main-body" width={"100%"}>
      {loading ? (
        // If loading is true, display a loader component
        <Loader />
      ) : (
        // Otherwise, display the content of the Coins component
        <>
          {/* RadioGroup for selecting currency and search input field */}
          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={"4"} className="filter">
              <div className="currency-filter">
                {/* Radio buttons for selecting currency */}
                <Radio value={"inr"}>
                  <p className="radio-label">INR</p>
                </Radio>
                <Radio value={"usd"}>
                  <p className="radio-label">USD</p>
                </Radio>
                <Radio value={"eur"}>
                  <p className="radio-label">EUR</p>
                </Radio>
              </div>
              {/* Search input field */}
              <input
                type="Search Coin"
                placeholder="Search coins...🔍"
                className="searchbar"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </HStack>
          </RadioGroup>

          {/* Display CoinCard components for each filtered coin */}
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {filteredCoins.map((i) => (
              <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                img={i.image}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>

          {/* Pagination buttons */}
          <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {btns.map((item, index) => (
              <Button
                key={index}
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

// Export the Coins component
export default Coins;
