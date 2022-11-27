import {Box, Button, Flex, Heading, Link, LinkBox, LinkOverlay, Select, Text} from '@chakra-ui/react';
import {AiOutlineAreaChart} from 'react-icons/ai'
import Api from "../../../services/Api";
import {useEffect, useState} from "react";
import {BsPencilSquare} from "react-icons/bs";
import CreateVisualizationModal from "../../_modals/CreateVisualizationModal";

export default function VisualizationTab({gameId}) {
  const [visualizations, setVisualizations] = useState([])
  const [currentVisualization, setCurrentVisualization] = useState({})
  const [sessionList, setSessionList] = useState([])
  const [currentSession, setCurrentSession] = useState({})

  const [isVisualizationModalOpen, setIsVisualizationModalOpen] = useState(false)

  useEffect(() => {
    getVisualizations()
    getSessionList()
  }, [])

  const getVisualizations = async () => {
    try {
      const response = await Api.get(`/visualization/${gameId}`);
      setVisualizations(response.data)
    } catch (e) {
      console.error(e.response)
    }
  }

  const getSessionList = async () => {
    try {
      const response = await Api.get(`/session/${gameId}`);
      console.log(response.data)
      setSessionList(response.data)
    } catch (e) {
      console.error(e.response)
    }
  }

  return (
      <>
        <CreateVisualizationModal isOpen={isVisualizationModalOpen} gameId={gameId} onClose={() => {setIsVisualizationModalOpen(false)}}/>
        <Flex justifyContent={'end'}>
          <Button variant={'primary'} onClick={()=>setIsVisualizationModalOpen(true)}>Criar visualização</Button>
        </Flex>
        <Flex w={'100%'} flexDirection={'column'} mt={5}>
          <Box display={currentVisualization?.id ? 'none' : 'block'}>
            <Heading size={'md'} mb={3}>Escolha uma visualização</Heading>
            <Select maxW={'400px'} onChange={e => setCurrentVisualization({
              id: e.target.value,
              name: e.target.options[e.target.selectedIndex].textContent
            })} value={currentVisualization.id}>
              <option value={''}>Selecione</option>
              {
                visualizations.map(v => (
                    <option key={v.visualization_id} value={v.visualization_id}>{v.name}</option>
                ))
              }
            </Select>
          </Box>
          <Box display={currentVisualization?.id ? 'block' : 'none'}>
            <Heading size={'md'} display={'inline'}>Visualização:</Heading>
            <Text display={'inline'} ms={2}>{currentVisualization.name}</Text>
            <BsPencilSquare size={18} style={{display: 'inline', marginLeft: 10}}/>
            <Link ms={1} onClick={() => setCurrentVisualization({id: ''})}>
              Alterar
            </Link>
          </Box>
          <Box mt={5} display={(currentVisualization?.id && !currentSession.session_id) ? 'block' : 'none'}>
            <Heading size={'md'} mb={3}>Escolha uma sessão</Heading>
            <Select maxW={'400px'} onChange={e => setCurrentSession({
              session_id: e.target.value,
              name: e.target.options[e.target.selectedIndex].textContent
            })}>
              <option value={''}>Selecione</option>
              {sessionList.map(session => (
                  <option id={session.session_id}>{session.name}</option>
              ))}
            </Select>
          </Box>
          <Box display={currentSession?.session_id ? 'block' : 'none'}>
            <Heading size={'md'} display={'inline'}>Sessão:</Heading>
            <Text display={'inline'} ms={2}>{currentSession.name}</Text>
            <BsPencilSquare size={18} style={{display: 'inline', marginLeft: 10}}/>
            <Link ms={1} onClick={() => setCurrentSession({id: ''})}>
              Alterar
            </Link>
          </Box>
        </Flex>
        {visualizations.length === 0 && (
            <Flex w={'100%'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} mt={20}>
              <AiOutlineAreaChart size={64} color={'#cdcdcd'}/>
              <Text mt={3}>Não há visualizações disponíveis</Text>
            </Flex>
        )}
      </>
  );
}