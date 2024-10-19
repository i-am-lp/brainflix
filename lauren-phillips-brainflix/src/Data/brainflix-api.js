import { useEffect, useState} from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { getDate } from 'date-fns';

const BASE_URL = '`https://unit-3-project-api-0a5620414506.herokuapp.com'
const apiKey = 'b286a708-8923-4590-9df6-3b753af414ce'

function VideoData() {
    const { id } = useParams();
    const [video, setVideo] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(url);
        
                // Check if the response is JSON or HTML
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const data = await response.json();
                    console.log(data);  // Process your JSON data
                } else if (contentType.includes('text/html')) {
                    const text = await response.text();
                    console.error('Expected JSON, but got HTML:');
                    console.log(text);  // This will log the HTML response (likely an error page)
                } else {
                    console.error('Unexpected content type:', contentType);
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
}, [])};

VideoData();

