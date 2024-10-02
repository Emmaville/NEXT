import Header from "../../components/Header";
import {useEffect, useState} from "react";
import Api from "../../services/Api";
import {Box, Code, Flex, Text} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

const About = () => {
  const [readme, setReadme] = useState('');

  useEffect(() => {
    getReadmeApi();
  }, []);

  const getReadmeApi = async () => {
    try{
    const content = await Api.get('/about');
    setReadme(content.data);
  }catch (error) {
    console.error("Failed to fetch the about content", error);
  }
}

  return (
      <>
        <Header pageName={"About"}/>
        <Flex justifyContent={'center'} alignItems={'center'} minHeight={'100vh'} >
          <Box maxW={1000} padding={10} bg={'gray.100'} borderRadius={20}>
            <Box maxH={600} overflowY={'auto'} overflowX={'hidden'} >
              <ReactMarkdown>{readme}</ReactMarkdown>
            </Box>
          </Box>
        </Flex>
      </>
  )
}

export default About;
