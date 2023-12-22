import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PaymentIcon from '@mui/icons-material/Payment';
import ShareIcon from '@mui/icons-material/Share';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import './Product.css';

const cardData = [
  {
    title: 'AC Repair (split/window)',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 10000</>,
    imageUrl: 'https://img.freepik.com/premium-photo/male-technician-overalls-blue-cap-repairs-air-conditioner-wall_353017-470.jpg?size=626&ext=jpg&ga=GA1.1.1563909822.1702403676&semt=ais',
  },
  {
    title: 'TV Repair',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 7000</>,
    imageUrl: 'https://img.freepik.com/free-photo/front-view-man-repairing-computer_23-2148419159.jpg?size=626&ext=jpg&ga=GA1.1.1563909822.1702403676&semt=ais',
  },
  {
    title: 'Tap Repair',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 800</>,
    imageUrl: 'https://img.freepik.com/free-photo/side-view-man-working-as-plumber_23-2150746310.jpg?size=626&ext=jpg&ga=GA1.1.1563909822.1702403676&semt=ais', 
  },
  {
    title: 'Fan Repair',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 500</>,
    imageUrl: 'https://img.freepik.com/premium-photo/electrician-repairs-cooling-fan-repair-equipment-room_353017-824.jpg?size=626&ext=jpg&ga=GA1.1.1563909822.1702403676&semt=ais', 
  },
  {
    title: 'Kitchen Cleaning',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 45000</>,
    imageUrl: 'https://img.freepik.com/free-photo/medium-shot-woman-cleaning_23-2148520961.jpg?size=626&ext=jpg&ga=GA1.1.1563909822.1702403676&semt=ais', 
  },
  {
    title: 'Carpet Cleaning',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 1000</>,
    imageUrl: 'https://img.freepik.com/free-photo/people-housework-housekeeping-concept-close-up-woman-with-legs-vacuum-cleaner-cleaning-carpet-home_231208-13612.jpg?size=626&ext=jpg&ga=GA1.1.1563909822.1702403676&semt=ais', 
  },
  {
    title: 'Full Home Cleaning',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 45000</>,
    imageUrl: 'https://img.freepik.com/free-photo/woman-cleaning-her-home_23-2148118468.jpg?size=626&ext=jpg&ga=GA1.1.1563909822.1702403676&semt=ais', 
  },
  {
    title: 'General Pest Control',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 5000</>,
    imageUrl: 'https://img.freepik.com/free-photo/medium-shot-people-with-equipment_23-2148926614.jpg?size=626&ext=jpg&ga=GA1.1.1563909822.1702403676&semt=ais', 
  },
  {
    title: 'Water Purifer Repair',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 650</>,
    imageUrl: 'https://img.freepik.com/free-photo/plumbing-professional-doing-his-job_23-2150721548.jpg?size=626&ext=jpg&ga=GA1.1.1563909822.1702403676&semt=ais', 
  },
  {
    title: 'Chimney Repair',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 500</>,
    imageUrl: 'https://img.freepik.com/free-photo/worker-repairing-water-heater_23-2149334225.jpg?size=626&ext=jpg&ga=GA1.1.1563909822.1702403676&semt=ais', 
  },
  {
    title: 'Tap Replacement',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 400</>,
    imageUrl: 'https://img.freepik.com/free-photo/close-up-mechanic-working_23-2148480380.jpg?size=626&ext=jpg&ga=GA1.1.1563909822.1702403676&semt=ais', 
  },
  {
    title: 'cooking Mad',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 69999</>,
    imageUrl: 'https://img.freepik.com/free-photo/young-woman-cooking-kitchen_1303-22159.jpg?size=626&ext=jpg&ga=GA1.1.1563909822.1702403676&semt=ais',
  },
  
];

export default function Maintenance() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1%', margin: '1rem' }}>
      {cardData.map((card, index) => (
        <Card key={index} sx={{ maxWidth: 850 ,marginBottom: '1rem', height:'100%'}}>
          <CardMedia component="img" width="200px" height="200"  style={{ objectFit: 'cover' }} alt={card.title} src={card.imageUrl} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"><PaymentIcon/>Book</Button>
            <Button size="small" ><ShareIcon />Share</Button>
            <Button size="small"><ShoppingCartIcon/>Add Cart</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}