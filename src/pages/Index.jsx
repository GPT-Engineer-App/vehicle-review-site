import React, { useState } from "react";
import { Box, Heading, Text, Image, Stack, Grid, Input, Button, Flex, Spacer } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const carReviews = [
  {
    id: 1,
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    image: "https://images.unsplash.com/photo-1624709646753-32336632b902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwyMDIyJTIwVG95b3RhJTIwQ29yb2xsYXxlbnwwfHx8fDE3MTA4MTk5MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    review: "O Toyota Corolla 2022 é um sedã confiável e econômico, perfeito para o dia a dia.",
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2022,
    image: "https://images.unsplash.com/photo-1664209448379-732f0dac59bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwyMDIyJTIwSG9uZGElMjBDaXZpY3xlbnwwfHx8fDE3MTA4MTk5MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    review: "O Honda Civic 2022 impressiona com seu design moderno e tecnologias avançadas.",
  },
  {
    id: 3,
    make: "Ford",
    model: "Mustang",
    year: 2022,
    image: "https://images.unsplash.com/photo-1682278889076-07fdb93cb8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwyMDIyJTIwRm9yZCUyME11c3Rhbmd8ZW58MHx8fHwxNzEwODE5OTAzfDA&ixlib=rb-4.0.3&q=80&w=1080",
    review: "O Ford Mustang 2022 continua sendo o ícone dos muscle cars, com desempenho empolgante.",
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredReviews = carReviews.filter((review) => `${review.make} ${review.model} ${review.year}`.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Box maxWidth="1200px" margin="auto" padding={8}>
      <Flex align="center" marginBottom={8}>
        <Heading as="h1" size="xl">
          Review de Veículos
        </Heading>
        <Spacer />
        <Input placeholder="Buscar veículo..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} width="300px" marginRight={4} />
        <Button leftIcon={<FaSearch />} colorScheme="blue">
          Buscar
        </Button>
      </Flex>

      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={8}>
        {filteredReviews.map((review) => (
          <Box key={review.id} borderWidth={1} borderRadius="lg" padding={6}>
            <Image src={review.image} alt={`${review.make} ${review.model}`} borderRadius="md" />
            <Stack mt={6} spacing={3}>
              <Heading as="h2" size="md">
                {review.make} {review.model}
              </Heading>
              <Text fontSize="lg" fontWeight="bold">
                Ano: {review.year}
              </Text>
              <Text>{review.review}</Text>
            </Stack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
