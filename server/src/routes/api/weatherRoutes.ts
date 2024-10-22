import { Router } from 'express';
const router = Router();

// import HistoryService from '../../service/historyService.js';
// import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', async (_req, res) => {
  
  try {
    // TODO: GET weather data from city name
  // TODO: save city to search history
  res.status(200).json([])  
  } catch (error) {
   console.log(error);
   res.status(500).json(error)
    
  }
});

// TODO: GET search history
router.get('/history', async (_req, res) => {
  try {
    
  res.status(200).json([])  
  } catch (error) {
   console.log(error);
   res.status(500).json(error)
    
  }
});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (_req, res) => {
  try {
    
  res.status(200).json([])  
  } catch (error) {
   console.log(error);
   res.status(500).json(error)
    
  }
});

export default router;
