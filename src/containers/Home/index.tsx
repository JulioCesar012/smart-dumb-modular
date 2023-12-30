
import { FormEvent, useState } from 'react';
import { FormHome } from '~/components';

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const layoutProps = {
    handleSubmit,
    username,
    setUsername,
    password,
    setPassword,
  }
  
  return  <FormHome {...layoutProps} />
}

export default Home;