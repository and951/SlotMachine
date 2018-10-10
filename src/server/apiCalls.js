/*!
 * Use is subject to license terms.
 * Filename: url.consntant.js
 */

/*
 * Author:      andresjimqui@gmail.com
 * Date:        30/09/2018
 * Description: This module manage all the API calls and their response. 
 */
import config from '../config/env'
import { getUrl } from '../utils/generalFunctions'
import {
  GET_SlotMachine_BY_GEOLOC,
} from '../utils/url.constants'


/**
 * Fetch SlotMachine forecast for 5 days with data every 3 hours by geographic coordinates. All SlotMachine data can be obtained in JSON.
 * @param {*} lat 
 * @param {*} lon 
 */
export const getSlotMachineByGeoloc = (lat, lon) => {
  return new Promise((resolve, reject) => {
    const finalURL = getUrl(
      GET_SlotMachine_BY_GEOLOC,
      {
        lat: lat,
        lon: lon,
        key: config.server.SlotMachine_api.key
      }
    )
    console.log(finalURL)
    fetch(finalURL)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));

  })
}

