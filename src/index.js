import express from 'express'

// here we import the function that signs our requests
import { signRequest } from './sign';

const app = express();


app.use(express.static('public'));
app.get('/', (request, response) => {
  response.sendFile('index.html', { root: __dirname });
});


app.post('/pay', async(request, response) => {
  const signedRequest = await signRequest();
  return response.send(signedRequest)
  
});



const listener = app.listen(8080, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
