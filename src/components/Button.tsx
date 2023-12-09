import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

const ColorButton = styled(Button)<ButtonProps>(() => ({
    // color: theme.palette.getContrastText(purple[500]),
    color: '#000',
    backgroundColor: '#ffffff',
    '&:hover': {
        backgroundColor: '#FFF3EA',
        color: '#000',
    },
}));

export default function CustomizedButtons() {
    return (
        <ColorButton onClick={() => window.open('https://calendar.google.com/calendar', '_blank')} variant="contained">Book Appointment</ColorButton>
    );
}