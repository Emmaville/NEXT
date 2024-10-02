
/*import { Box, Flex, Text, Stat, StatLabel, StatNumber, StatHelpText, Button } from '@chakra-ui/react';

const DashboardPreview = ({ summaryData }) => {
  return (
    <Flex w="100%" mb={10} justifyContent="space-between" wrap="wrap">
      {summaryData.map((item) => (
        <StatCard key={item.title} title={item.title} value={item.value} description={item.description} />
      ))}
    </Flex>
  );
};

const StatCard = ({ title, value, description }) => {
  const handleClick = () => {
    alert(`Button clicked for ${title}`);
                                        //i'm gonna put my logic here later....
  };

  return (
    <Box
      w={{ base: '100%', sm: '48%', md: '24%' }}
      p={5}
      bg="white"
      boxShadow="md"
      borderRadius="md"
      mb={5}
    >
      <Stat>
        <StatLabel>{title}</StatLabel>
        <StatNumber>{value}</StatNumber>
        <StatHelpText>{description}</StatHelpText>
        <Button
          mt={4}
          colorScheme="teal"
          onClick={handleClick}
        >
          Click Me
        </Button>
      </Stat>
    </Box>
  );
};

export default DashboardPreview; */













import { useState } from 'react';
import { Box, Flex, Text, Stat, StatLabel, StatNumber, StatHelpText, Button } from '@chakra-ui/react';

console.log('DashboardPreview Loaded');


const DashboardPreview = ({ summaryData }) => {
  return (
    <Flex w="100%" mb={10} justifyContent="space-between" wrap="wrap">
      {summaryData.map((item) => (
        <StatCard key={item.title} title={item.title} value={item.value} description={item.description} />
      ))}
    </Flex>
  );
};

const StatCard = ({ title, value, description }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Box
      w={{ base: '100%', sm: '48%', md: '24%' }}
      p={5}
      bg="white"
      boxShadow="md"
      borderRadius="md"
      mb={5}
    >
      <Stat>
        <StatLabel>{title}</StatLabel>
        <StatNumber>{value}</StatNumber>
        <StatHelpText>{description}</StatHelpText>
        {showDetails && (
          <Text mt={3}>
            {/* Add the details you want to display here */}
            Here are the details for {title}.
          </Text>
        )}
        <Button
          mt={4}
          colorScheme="teal"
          onClick={handleClick}
        >
          {showDetails ? 'Show Less' : 'Show More'} 
        </Button> 
      </Stat>
    </Box>
  );
};
export default DashboardPreview; 









/*
import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, Stat, StatLabel, StatNumber, StatHelpText, Button, VStack } from '@chakra-ui/react';
import Api from '../services/Api'; // Adjust the path based on your directory structure

const DashboardPreview = () => {
  const [games, setGames] = useState([]);
  const [groups, setGroups] = useState([]);
  const [isGamesExpanded, setIsGamesExpanded] = useState(false);
  const [isGroupsExpanded, setIsGroupsExpanded] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await Api.get('/game', { withCredentials: true });
        setGames(response.data.data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    const fetchGroups = async () => {
      try {
        const response = await Api.get('/group', { withCredentials: true });
        setGroups(response.data.data);
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };

    fetchGames();
    fetchGroups();
  }, []);

  const displayedGames = isGamesExpanded ? games : games.slice(0, 1);
  const displayedGroups = isGroupsExpanded ? groups : groups.slice(0, 1);

  return (
    <Flex w="100%" mb={10} flexDirection="column" alignItems="center">
      <Box w="100%" p={5} bg="white" boxShadow="md" borderRadius="md" mb={5}>
        <Text fontSize="2xl" mb={4}>Games</Text>
        {games.length > 0 ? (
          <>
            {displayedGames.map((game) => (
              <Box key={game.id} p={4} bg="gray.100" borderRadius="md" mb={3}>
                <Text fontWeight="bold">{game.name}</Text>
                <Text>Version: {game.version}</Text>
                <Text>Creator: {game.creator}</Text>
                <Text>Token: {game.token}</Text>
              </Box>
            ))}
            {games.length > 1 && (
              <Button
                mt={4}
                colorScheme="teal"
                onClick={() => setIsGamesExpanded(!isGamesExpanded)}
              >
                {isGamesExpanded ? 'Show Less' : 'Show More'}
              </Button>
            )}
          </>
        ) : (
          <Text>No games registered yet.</Text>
        )}
      </Box>

      <Box w="100%" p={5} bg="white" boxShadow="md" borderRadius="md" mb={5}>
        <Text fontSize="2xl" mb={4}>Groups</Text>
        {groups.length > 0 ? (
          <>
            {displayedGroups.map((group) => (
              <Box key={group.session_group_id} p={4} bg="gray.100" borderRadius="md" mb={3}>
                <Text fontWeight="bold">{group.name}</Text>
                <Text>Group Name: {group.group_name}</Text>
                <Text>Total Sessions: {group.total_sessions}</Text>
              </Box>
            ))}
            {groups.length > 1 && (
              <Button
                mt={4}
                colorScheme="teal"
                onClick={() => setIsGroupsExpanded(!isGroupsExpanded)}
              >
                {isGroupsExpanded ? 'Show Less' : 'Show More'}
              </Button>
            )}
          </>
        ) : (
          <Text>No groups registered yet.</Text>
        )}
      </Box>
    </Flex>
  );
};

export default DashboardPreview; */