import express from 'express';

const routes = express.Router();

routes.get('/users', (req, res)=>{  
  return res.json({message: 'Oi Leozera!'});
});

export default routes;
