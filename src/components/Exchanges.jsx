import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredExchanges, setFilteredExchanges] = useState([]);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

  useEffect(() => {
    // Filter the exchanges based on the search input
    const filtered = exchanges.filter((exchange) =>
      exchange.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredExchanges(filtered);
  }, [searchInput, exchanges]);

  if (error)
    return <ErrorComponent message={"Error While Fetching Exchanges"} />;

  return (
    <Container maxW={"container.x2"} className="main-body" width={"100%"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* Search filter input field */}
          <input
              type="text"
              className="searchbar"
            placeholder="Search exchanges..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {filteredExchanges.map((exchange) => (
              <ExchangeCard
                key={exchange.id}
                name={exchange.name}
                img={exchange.image}
                rank={exchange.trust_score_rank}
                url={exchange.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target={"blank"}>
    <VStack
      className="card-body"
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>

      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
);

export default Exchanges;
