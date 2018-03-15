
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('parkades').del()
    .then(function () {
      // Inserts seed entries
      return knex('parkades').insert([
        {
          name: 'Pacific Spirit Park', 
          latitude: '49.259022', 
          longitude: '-123.222092', 
          spot_count_regular: '4', 
          spot_count_handicap: '0', 
          occupied_regular: '0', 
          occupied_handicap: '0', 
          pay_to_park: false, 
          open_time: '07:00:00.00', 
          close_time: '17:00:00.00', 
          notes: "Dual-head ChargePoint station in unpaved parking lot (outside the gate to Cleveland Trail) Charging is free, 2 hour limit. If you don't have an RFID card or the ChargePoint app, you can call the 800 number shown on the front of the EVSE. There is also a standard outlet a few feet to the right of the ChargePoint. Public washroom facilities in the building next to the parking lot.", 
          address_id: 1 
        },
        {
          name: 'University Hill Secondary School', 
          latitude: '49.253980', 
          longitude: '-123.240157', 
          spot_count_regular: 8, 
          spot_count_handicap: 0, 
          occupied_regular: 2, 
          occupied_handicap: 0, 
          pay_to_park: true, 
          open_time: '17:00:00.00', 
          close_time: '07:30:00.00', 
          notes: "Station is available to the public during non-school hours: weekdays 5:00pm to 7:30am and weekends anytime. Parking is paid during non-school hours. Charger is a Leviton CTHG2 providing 30A at 195V. Station requires a ChargePoint card or credit card with RFID payment (Visa payWave/MasterCard PayPass) to activate. Charging is free, card is only to unlock the station.", 
          address_id: '2'
        },
        {
          name: 'Thunderbird Parkade', 
          latitude: '49.261748', 
          longitude: '-123.243013', 
          spot_count_regular: 8, 
          spot_count_handicap: 0, 
          occupied_regular: 0, 
          occupied_handicap: 0, 
          pay_to_park: true, 
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00', 
          notes: 'Free to charge, but pay parking: 6am-5pm $1.75 per half hour $14.00 max', 
          address_id: '3'
        },
        {
          name: 'West Parkade', 
          latitude: '49.262841', 
          longitude: '-123.255401', 
          spot_count_regular: 4, 
          spot_count_handicap: 1, 
          occupied_regular: 0, 
          occupied_handicap: 0, 
          pay_to_park: true, 
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00', 
          notes: 'Parking payment required 5 x Level2 chargers at Level4.', 
          address_id: '4'
        },
        {
          name: 'UBC Alumni Centre / AMS Student Nest', 
          latitude: '49.266622', 
          longitude: '-123.249869', 
          spot_count_regular: 4, 
          spot_count_handicap: 1, 
          occupied_regular: 2, 
          occupied_handicap: 1, 
          pay_to_park: true, 
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00', 
          notes: 'Short Term parking only, Max 30min or 2h depending on the spot. $1.75 parking per half hour. Access the parking lot from University Blvd just west of War Memorial Gym.', 
          address_id: '5'
        },
        {
          name: 'North Parkade', 
          latitude: '49.268970', 
          longitude: '-123.250840', 
          spot_count_regular: 5, 
          spot_count_handicap: 0, 
          occupied_regular: 5, 
          occupied_handicap: 0, 
          pay_to_park: true, 
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00', 
          notes: 'Parking payment required. Take a left as you enter the lot, then left again towards the 2h Short-term parking area. The EV chargers are located near the exit.', 
          address_id: '6'
        }
      ]);
    });
};