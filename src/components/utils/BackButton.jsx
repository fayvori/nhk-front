import { Button } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import { red } from '@mui/material/colors';

export const BackButton = (props) => {
    const navigate = useNavigate();

    return (
        <Button 
            variant="outlined"
            color="primary"
            onClick={() => navigate(-1)}
        >{props.title}</Button>
    )
}
