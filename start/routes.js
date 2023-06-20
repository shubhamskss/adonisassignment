'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const axios = require('axios');
const coingeckoCollection=require('./schema')

Route.get('/coingecko', async ({ response }) => {
    try {
      const coingeckoResponse = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin');
      const data = coingeckoResponse.data;
      let dataNeddedToBeSaved={}
      dataNeddedToBeSaved.id=data.id||"",
      dataNeddedToBeSaved.symbol=data.symbol||"",
      dataNeddedToBeSaved.name=data.name||"",
      dataNeddedToBeSaved.platforms=data.platforms||{}
    let createCoingeckoData=await coingeckoCollection.create(dataNeddedToBeSaved)
      return response.json(createCoingeckoData);
    } catch (error) {
      console.error('Error fetching data from Coingecko API:', error.message);
      return response.status(500).send('Internal Server Error');
    }
  });
  

