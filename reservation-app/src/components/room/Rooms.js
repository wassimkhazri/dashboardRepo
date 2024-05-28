import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const api = axios.create({
	baseURL: "http://localhost:9192"
})

const cors = require('cors')
const corsOption = {
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
api.use(cors(corsOption));

const Rooms = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await api.get('/rooms/room/types');
        console.log('Response:', response); // Log the response
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div>
    {loading && <div>Loading</div>}
    {!loading && (
      <div>
        <h2>Doing stuff with data</h2>
        {data.map(item => (<span>{item.name}</span>))}
      </div>
    )}
    </div>
  )
}

export default Rooms;