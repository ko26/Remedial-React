import {useEffect, useState} from 'react';
import {SimpleGrid, Heading, Flex, Button, Divider, Spacer} from '@chakra-ui/react';
import CredentialCard from '../components/CredentialCard';
import {useNavigate} from 'react-router-dom'

function CredentialListPage(){
    
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState([]);

    const fetchData = async () =>{
        try {
            const response = await fetch('http://localhost:3366/credentials');

            const data = await response.json();
            setCredentials(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    const handleButtonClick = (e) =>{
        e.preventDefault();

        navigate('/credentials/add');
    };

    const handleClickDelete = async (id) => {
        try {
            await fetch(`http://localhost:3366/credentials/${id}`, {
                method: 'DELETE',
            });

            fetchData();
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
        <Flex my={4} mx={4}>
            <Heading>
                credentials 123
            </Heading>
            <Spacer/>
            <Button color="blue" onClick={handleButtonClick}>Add</Button>
        </Flex>
        <Divider/>
        <SimpleGrid column={3} spacing={4}>
            {credentials.length > 0 && credentials.map((credential, index) =>{
                return <CredentialCard key={index} credential={credential} onDelete={handleClickDelete}/>;
            })}
        </SimpleGrid>
        </>
    );
}

export default CredentialListPage;