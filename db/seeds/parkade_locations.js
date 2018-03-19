
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
          address_id: 2
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
          address_id: 3
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
          address_id: 4
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
          address_id: 5
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
          address_id: 6
        },
        // id 7
        {
          name:"Jordan's",
          latitude:49.263089,
          longitude:-123.137586,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:1,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"Jordans Interiors has an exclusive selection of luxury, stylish living room, bedroom and dining furniture. Collections from iconic furniture brands in BC.",
          address_id:7
        },
        // id 8
        {
          name:"1596 Johnston Street",
          latitude:49.27201,
          longitude:-123.13505,
          spot_count_regular:1,
          spot_count_handicap:1,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00', 
          notes:"",
          address_id:9
        },
        // id 9
        {
          name:"455 10th Avenue Bikeway",
          latitude:49.26249,
          longitude:-123.11377,
          spot_count_regular:1,
          spot_count_handicap:1,
          occupied_regular:1,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"A top priority of Transportation 2040 is to upgrade the 10th Avenue Corridor to be more safe, convenient, comfortable, and fun for people of all ages and abilities to walk and cycle. The 10th Avenue local-street bikeway runs from Victoria Drive to Trafalgar Street, linking many key destinations like Vancouver General Hospital.",
          address_id:10
        },
        // id 10
        {
          name:"Opus Hotel Vancouver",
          latitude:49.274642,
          longitude:-123.122561,
          spot_count_regular:2,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"A 7-minute walk from both the False Creek waterfront and the Contemporary Art Gallery, this laid-back hotel is next to Yaletown-Roundhouse Station.",
          address_id:11
        },
        //id 11
        {
          name:"Best Western Plus Chateau Granville",
          latitude:49.2777147190703,
          longitude:-123.124657461882,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"$12 2 hours. Imperial Parking Canada Corporation. PayByPhone/Verrus users can pay by calling 604-662-7275 (Location ID 641)",
          address_id:13
        },
        // id 12
        {
          name:"BC Place",
          latitude:49.2764428,
          longitude:-123.1121063,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"Parking. Our central location in Downtown Vancouver provides guests with a wide selection of public parking near the stadium. The cost to park in lots closest to the stadium during events ranges from $10.00 to $30.00. Other nearby parking lots vary from $3.00 to $6.00.",
          address_id:15
        },
        //id 13
        {
          name:"The Fairmont Hotel Vancouver",
          latitude:49.283791,
          longitude:-123.120989,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:1,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"Fairmont Vancouver Airport is a tenant of the Vancouver International Airport. All prices subject to change. Valet parking for hotel guests: $43.75/night, inclusive of taxes, with in-and-out privileges. Self Parking in the YVR Terminal Parkade is available to guests for $28.50 per night, inclusive",
          address_id:18
        },
        // id 14
        {
          name:"900 west Georgia Street",
          latitude:49.284034,
          longitude:-123.120691,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:1,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"",
          address_id:19
        },
        // id 15
        {
          name:"Science World British Columbia",
          latitude:49.273181,
          longitude:-123.10283700000002,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"Science World encourages all visitors to take transit, but for those visitors who decide to drive, our prices are as follows: $4 1 hour, $8 2 hours, $10 4 hours, $15 Until 6pm, $7 After 6pm",
          address_id:20
        },
        // id 16
        {
          name:"Diamond Parking",
          latitude:49.284829,
          longitude:-123.122178,
          spot_count_regular:3,
          spot_count_handicap:1,
          occupied_regular:2,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"",
          address_id:22
        },
        // id 17
        {
          name:"745 Thurlow Street",
          latitude:49.2853837,
          longitude:-123.1244987,
          spot_count_regular:8,
          spot_count_handicap:2,
          occupied_regular:3,
          occupied_handicap:1,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"",
          address_id:23
        },
        // id 18
        {
          name:"Shangri-la Hotel, Vancouver",
          latitude:49.28571,
          longitude:-123.123763,
          spot_count_regular:6,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"Our quality five star hotel Shangri-La Hotel, Vancouver provides high-level of comfort and personalised services just like home.",
          address_id:24
        },
        // id 19
        {
          name:"Shangri-La Hotel",
          latitude:49.2858707,
          longitude:-123.1237314,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:1,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"Our quality five star hotel Shangri-La Hotel, Vancouver provides high-level of comfort and personalised services just like home.",
          address_id:26
        },
        // id 20
        {
          name:"The Victorian Hotel",
          latitude:49.282416,
          longitude:-123.112165,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"We have limited on-site parking. Due to the limited spaces they are given on a first in basis. We do not reserve them. If a space on-site is available the cost will be $20CAD (excluding tax) per night.",
          address_id:27
        },
        // id 21
        {
          name:"BC Easy Park-Pacific Centre",
          latitude:49.284989,
          longitude:-123.11607,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"$3.75 per half hour | Maximum $35. Located under the north end of the Pacific Centre Mall with entrance off southbound Howe St between Pender & Dunsmuir. Multi-level parkade below grade. Unattended facility. Height restriction of 6ft 6”. 367 stalls.",
          address_id:28
        },
        // id 22
        {
          name:"BC-Easy Park-Hornby Street",
          latitude:49.285609,
          longitude:-123.117458,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '05:00:00.00', 
          close_time: '21:59:59.00',
          notes:"$3.50 per half hour | Maximum $29.00. Located beneath the YWCA and Bentall V, between Dunsmuir and West Pender. Multi-level parkade below grade. Monday to Friday | 5:00am to 10:00pm Saturday & Sun | 7:45am to 10:00pm. Unattended facility. Please purchase ticket at pay stations. Height restriction of 6ft 6”. 972 stalls",
          address_id:29
        },
        // id 23
        {
          name:"Loden Hotel",
          latitude:49.287521,
          longitude:-123.123521,
          spot_count_regular:6,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"Enjoy a natural stay on Canada's West Coast. When can we expect you? Guests. 1, 2, 3, 4. Discover your city sanctuary in Vancouver – recognized as Canada's #1 city by Condé Nast Traveler and Trip Advisor. Steps from the harbour and equally close to the downtown core, the Loden Hotel is your ideal home for a true luxury experience.",
          address_id:30
        },
        // id 24
        {
          name:"Pender Gateway",
          latitude:49.2870038295434,
          longitude:-123.119641636245,
          spot_count_regular:4,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"",
          address_id:31
        },
        // id 25
        {
          name:"Coast Coal Harbour Hotel",
          latitude:49.2884189,
          longitude:-123.1221991,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"offers convenient access to the Gastown district, the renowned shopping on Robson Street, and the incredible array of arts and entertainment that Vancouver has to offer. Our close proximity to The Vancouver Convention Centre is ideal for our business travelers.",
          address_id:32
        },
        // id 26
        {
          name:"200 Granville Street",
          latitude:49.28611,
          longitude:-123.11253,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"",
          address_id:33
        },
        // id 27
        {
          name:"Broughton St",
          latitude:49.29000092,
          longitude:-123.1266403,
          spot_count_regular:3,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"",
          address_id:36
        },
        // id 28
        {
          name:"Fairmont Pacific Rim",
          latitude:49.288078,
          longitude:-123.117272,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"Fairmont Pacific Rim offers on-site parking. Valet Parking. 0-2 Hours: $28; 2-3 Hours: $38; 3-4 Hours: $48; 8PM - 3AM: $28; 24 Hours (Overnight): $55; Willow Stream Spa validated parking $15 for 4 hours, after that regular rates will be applied.",
          address_id:37
        },
        // id 29
        {
          name:"Fairmont Pacific Rim Hotel",
          latitude:49.2882824,
          longitude:-123.11709000000002,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:1,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"Set in a striking contemporary building, this high-end hotel is a 5-minute walk from both the harbour and Canada Place convention centre/ferry terminal, and 13 minutes from Vancouver Art Gallery. Posh rooms provide 24/7 room service, flat-screens and Nepresso machines, as well as minibars and Wi-Fi (fee). Upgraded rooms and suites add soaking/whirlpool tubs, plus patios with fire pits and harbour views. Club level rooms come with butlers, free breakfast, and a private lounge serving appetizers/drinks.",
          address_id:38
        },
        // id 30
        {
          name:"Times Square Suites Hotel",
          latitude:49.2917388,
          longitude:-123.135607,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"A 1-minute walk from bicycle rentals and a 4-minute walk from Stanley Park's waterfront walking/biking trails, this casual hotel in a Victorian-style building has a clock tower. Apartment-style studios, 1- and 2-bedroom suites featuring traditional decor include full kitchens with cookware, washer/dryers, TVs, DVD players and free WiFi. Some rooms have pull-out sofas, fireplaces and balconies. Larger suites have separate living areas.",
          address_id:39
        },
        // id 31
        {
          name:"Oakridge Centre",
          latitude:49.232488,
          longitude:-123.119316,
          spot_count_regular:2,
          spot_count_handicap:0,
          occupied_regular:1,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"Fashion is in the details. How to arrive APROPOS. Location. Oakridge Centre is easily accessible at the South/West corner of Cambie St. and 41st Avenue in the heart of Vancouver. There is plenty of free parking in both the surface parking lot and in the parkades.",
          address_id:40
        },
        // id 32
        {
          name:"Jericho Village Shops",
          latitude:49.2672946,
          longitude:-123.1857467,
          spot_count_regular:2,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '07:00:00.00', 
          close_time: '20:59:59.00',
          notes:"Imperial Parking Canada Corporation",
          address_id:42
        },
        // id 33
        {
          name:"252 Raymur Ave",
          latitude:49.28243,
          longitude:-123.08201,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"",
          address_id:43
        },
        // id 34
        {
          name:"Canadian Tire",
          latitude:49.2105057,
          longitude:-123.106978,
          spot_count_regular:2,
          spot_count_handicap:0,
          occupied_regular:1,
          occupied_handicap:0,
          pay_to_park:false,
          open_time: '08:00:00.00', 
          close_time: '20:59:59.00',
          notes:"Canadian Tire Corporation, Limited is a Canadian retail company which sells a wide range of automotive, hardware, sports and leisure, and home products. Some stores also sell toys and food products.",
          address_id:45
        },
        // id 35
        {
          name:"Airport Square",
          latitude:49.2039,
          longitude:-123.1343,
          spot_count_regular:2,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"Closed during the evening and weekend. Open for monthly parkers. Clearance on ground level: 6'6. Clearance on next level: 5'10. Two dedicated car charging stalls with maximum time of 4 hours.",
          address_id:47
        },
        // id 36
        {
          name:"788 Copping Street",
          latitude:49.31665706,
          longitude:-123.09349231,
          spot_count_regular:1,
          spot_count_handicap:1,
          occupied_regular:1,
          occupied_handicap:1,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"",
          address_id:48
        },
        // id 37
        {
          name:"Park Royal South",
          latitude:49.3259121586466,
          longitude:-123.136385679245,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:1,
          occupied_handicap:0,
          pay_to_park:false,
          open_time: '07:00:00.00', 
          close_time: '19:59:59.00',
          notes:"Free Parking. With nearly 5,000 free parking spaces conveniently located throughout Park Royal North, South & The Village you will never have far to travel to get shopping.",
          address_id:49
        },
        // id 38
        {
          name:"River Rock Casino",
          latitude:49.19598,
          longitude:-123.1272826,
          spot_count_regular:2,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"Complimentary self-parking available. Additional self-parking available in the South Tower at $2.50 per day. River Rock Casino Resort offers Complimentary parking for vehicles up to 6’8”. Our over-height vehicles may use our Valet service at a cost of $21.. There are two Electric Vehicle Charging Stations on P1 of the South Tower.",
          address_id:51
        },
        // id 39
        {
          name:"McArthurGlen Designer Outlet Mall",
          latitude:49.195894,
          longitude:-123.127263,
          spot_count_regular:1,
          spot_count_handicap:1,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '07:00:00.00', 
          close_time: '20:59:59.00',
          notes:"The parking lot is single-leveled and spans from Templeton Street down to the west end of the outlet, providing 2,000 parking spaces.",
          address_id:52
        },
        // id 40
        {
          name:"Natures Path",
          latitude:49.1950567,
          longitude:-123.1239313,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:false,
          open_time: '06:00:00.00', 
          close_time: '21:59:59.00',
          notes:"As pioneers of the organic movement we believe organic food and farming is the best way to care for our bodies and for the planet. We always have and always will use our voice to stand for what we believe is right – and what organic truly means.",
          address_id:53
        },
        // id 41
        {
          name:"Natures Path Foods Inc.",
          latitude:49.194613,
          longitude:-123.124052,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:false,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"As pioneers of the organic movement we believe organic food and farming is the best way to care for our bodies and for the planet. We always have and always will use our voice to stand for what we believe is right – and what organic truly means.",
          address_id:54
        },
        // id 42
        {
          name:"Carleton Rescue Equipment Ltd.",
          latitude:49.2350696733984,
          longitude:-123.037516228711,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '06:00:00.00', 
          close_time: '19:59:59.00',
          notes:"",
          address_id:56
        },
        // id 43
        {
          name:"West Vancouver Municipal Hall",
          latitude:49.331298,
          longitude:-123.1595,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '06:00:00.00', 
          close_time: '18:59:59.00',
          notes:"",
          address_id:58
        },
        // id 44
        {
          name:"1315 Kootenay Street",
          latitude:49.2727,
          longitude:-123.02822,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"",
          address_id:60
        },
        // id 45
        {
          name:"Best Western Plus Abercorn Inn",
          latitude:49.191756,
          longitude:-123.121494,
          spot_count_regular:2,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"Welcome to the historic Abercorn Inn Vancouver Airport – comfort and world class guest services, truly your “home a way from home” accommodation in Richmond, British Columbia. This 100-guestroom hotel is centrally located in Richmond where guests can experience shopping, dining, and entertainment at its finest.",
          address_id:62
        },
        // id 46
        {
          name:"Best Western Plus Abercorn Inn",
          latitude:49.1917643,
          longitude:-123.1209056,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"Welcome to the historic Abercorn Inn Vancouver Airport – comfort and world class guest services, truly your “home a way from home” accommodation in Richmond, British Columbia. This 100-guestroom hotel is centrally located in Richmond where guests can experience shopping, dining, and entertainment at its finest.",
          address_id:63
        },
        // id 47
        {
          name:"Park'N Fly",
          latitude:49.191674,
          longitude:-123.1519,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"tart and end your trip at Park’N Fly, Canada’s leading airport parking company. With a network that spans coast-to-coast, we currently operate in Vancouver, Edmonton, Winnipeg, Toronto, Ottawa, Montréal, and Halifax. Our goal is to provide our customers with cost-effective parking options while enjoying a park happy experience with every stay.",
          address_id:64
        },
        // id 48
        {
          name:"Pacific Gateway Hotel",
          latitude:49.190913,
          longitude:-123.140723,
          spot_count_regular:2,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"Pacific Gateway Hotel is one of the closest hotels to the Vancouver International Airport - YVR. Enjoy our complimentary airport shuttle service 24/7.",
          address_id:65
        },
        // id 49
        {
          name:"YVR East Lot",
          latitude:49.1937,
          longitude:-123.1678,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"",
          address_id:66
        },
        // id 50
        {
          name:"YVR Centre Lot",
          latitude:49.194028,
          longitude:-123.169708,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"",
          address_id:67
        },
        // id 51
        {
          name:"West Vancouver Community Centre",
          latitude:49.33123,
          longitude:-123.169322,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '05:30:00.00', 
          close_time: '22:00:00.00',
          notes:"There is a 3-hour parking limit. In addition to parking at the Community Centre, visitors may take advantage of an additional 41 public parking stalls at The Westerleigh Retirement Residence on the corner of Marine Drive and 22nd Street. This public parking is open to all, including West Vancouver recreation facility users.",
          address_id:68
        },
        // id 52
        {
          name:"Vancouver International Airport",
          latitude:49.194,
          longitude:-123.1785,
          spot_count_regular:1,
          spot_count_handicap:1,
          occupied_regular:0,
          occupied_handicap:1,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"$4.25 (Self-Serve) | $4.75 (Cashier)  Multi-level, covered parking, just steps away from the terminal. P1 provides hourly parking only (4 hours maximum), perfect for dropping off or picking up travellers.",
          address_id:70
        },
        // id 53
        {
          name:"Aberdeen Centre",
          latitude:49.18379,
          longitude:-123.133567,
          spot_count_regular:3,
          spot_count_handicap:0,
          occupied_regular:2,
          occupied_handicap:0,
          pay_to_park:false,
          open_time: '06:00:00.00', 
          close_time: '22:59:59.00',
          notes:"Located in the heart of Richmond, Aberdeen Centre is the city’s only Shoppertainment destination with a distinctive retail concept, integrating Shopping + Dining + Entertainment as one. We are the first shopping mall in Canada to break the Guinness World Records® ! Our 380,000 square feet shopping space features more than 160 stores offering the latest fashion, furniture and lifestyle products, Asian herbs and teas and fresh groceries and culinary ingredients.",
          address_id:72
        },
        // id 54
        {
          name:"Aberdeen Centre",
          latitude:49.1835,
          longitude:-123.1344,
          spot_count_regular:2,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:false,
          open_time: '06:00:00.00', 
          close_time: '22:59:59.00',
          notes:"Located in the heart of Richmond, Aberdeen Centre is the city’s only Shoppertainment destination with a distinctive retail concept, integrating Shopping + Dining + Entertainment as one. We are the first shopping mall in Canada to break the Guinness World Records® ! Our 380,000 square feet shopping space features more than 160 stores offering the latest fashion, furniture and lifestyle products, Asian herbs and teas and fresh groceries and culinary ingredients.",
          address_id:73
        },
        // id 55
        {
          name:"East 23rd Street",
          latitude:49.3307811660026,
          longitude:-123.071725577005,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"",
          address_id:75
        },
        // id 56
        {
          name:"Auto West BMW north",
          latitude:49.184225,
          longitude:-123.103679,
          spot_count_regular:2,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:false,
          open_time: '06:00:00.00', 
          close_time: '21:59:59.00',
          notes:"When you think BMW, think Auto West BMW. Conveniently located in Richmond BC. Serving the Greater Vancouver Area since 1986. Exceptional BMW Sales & Service.",
          address_id:77
        },
        // id 57
        {
          name:"IKEA",
          latitude:49.190212,
          longitude:-123.078965,
          spot_count_regular:1,
          spot_count_handicap:1,
          occupied_regular:1,
          occupied_handicap:0,
          pay_to_park:false,
          open_time: '07:00:00.00', 
          close_time: '19:59:59.00',
          notes:"Find affordable home furnishings and furniture, all in one store. Shop quality home furniture, décor, furnishings, and accessories.",
          address_id:78
        },
        // id 58
        {
          name:"1484 Rupert St",
          latitude:49.30812454,
          longitude:-123.0323563,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"",
          address_id:79
        },
        // id 59
        {
          name:"Auto West BMW south",
          latitude:49.183196,
          longitude:-123.104026,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:false,
          open_time: '06:00:00.00', 
          close_time: '21:59:59.00',
          notes:"When you think BMW, think Auto West BMW. Conveniently located in Richmond BC. Serving the Greater Vancouver Area since 1986. Exceptional BMW Sales & Service.",
          address_id:80
        },
        // id 60
        {
          name:"Central Garden Station 2",
          latitude:49.1787,
          longitude:-123.122816,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"",
          address_id:82
        },
        // id 61
        {
          name:"Walmart Supercentre",
          latitude:49.17841,
          longitude:-123.121,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:1,
          occupied_handicap:0,
          pay_to_park:false,
          open_time: '06:00:00.00', 
          close_time: '23:59:59.00',
          notes:"Check regular or holiday hours for the North Vancouver Supercentre Walmart store. View the flyer or get directions for your next shopping trip!",
          address_id:83
        },
        // id 62
        {
          name:"BMW",
          latitude:49.183979,
          longitude:-123.07941,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:false,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"",
          address_id:85
        },
        // id 63
        {
          name:"British Columbia Institute of Technology",
          latitude:49.2511975,
          longitude:-123.00324280000001,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:1,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '04:30:00.00', 
          close_time: '21:59:59.00',
          notes:"British Columbia Institute of Technology is one of BC's largest post-secondary institutions. In Vancouver, BCIT offers courses and programs in technology, trades, engineering, business, and health.",
          address_id:86
        },
        // id 64
        {
          name:"Richmond Olympic Oval",
          latitude:49.175,
          longitude:-123.152,
          spot_count_regular:1,
          spot_count_handicap:1,
          occupied_regular:1,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '05:00:00.00', 
          close_time: '21:59:59.00',
          notes:"The Richmond Olympic Oval is an indoor multi-sports arena in the Canadian city of Richmond, British Columbia. The oval was built for the 2010 Winter Olympics and was originally configured with an speed skating rink.",
          address_id:88
        },
        // id 65
        {
          name:"Metro Vancouver",
          latitude:49.231084,
          longitude:-123.00747639999997,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"",
          address_id:89
        },
        // id 66
        {
          name:"NEDCO",
          latitude:49.1827016,
          longitude:-123.069251,
          spot_count_regular:3,
          spot_count_handicap:1,
          occupied_regular:2,
          occupied_handicap:0,
          pay_to_park:false,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"Nedco is one of the largest electrical wholesale suppliers providing a wide range of products for residential electricians and commercial contractors and large industrial organisations across Canada. We carry comprehensive product solutions for Lighting, Datacom, Wire & Cable, Power Management and Electrical Supplies.",
          address_id:91
        },
        // id 67
        {
          name:"Hilton Vancouver Metrotown",
          latitude:49.228695,
          longitude:-123.004435,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"Our Vancouver Metrotown Hotel is located in the high-tech sector near Simon Fraser University, close to BC Place Stadium, Rogers Arena and Metropolis Mall.",
          address_id:92
        },
        // id 68
        {
          name:"Sheraton Vancouver Airport Hotel",
          latitude:49.17057,
          longitude:-123.14319,
          spot_count_regular:3,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"Sheraton Vancouver Airport Hotel welcomes you with spacious rooms, stunningly appointed new event venues, and a free shuttle to and from YVR.",
          address_id:93
        },
        // id 69
        {
          name:"Bosa Properties",
          latitude:49.2296183,
          longitude:-123.00277570000003,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:false,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"",
          address_id:95
        },
        // id 70
        {
          name:"Richmond Public Works Yard",
          latitude:49.170927,
          longitude:-123.165711,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:1,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"",
          address_id:96
        },
        // id 71
        {
          name:"Mercedes Benz",
          latitude:49.17349,
          longitude:-123.078308,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:false,
          open_time: '06:00:00.00', 
          close_time: '20:59:59.00',
          notes:"Mercedes-Benz Vancouver Retail Group has locations in Vancouver and Richmond offering drivers a stellar selection of new and pre-owned vehicles. Visit us today!",
          address_id:98
        },
        // id 72
        {
          name:"MDA Richmond",
          latitude:49.174808,
          longitude:-123.071637,
          spot_count_regular:2,
          spot_count_handicap:0,
          occupied_regular:2,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"",
          address_id:99
        },
        // id 73
        {
          name:"Terra West parking",
          latitude:49.1698,
          longitude:-123.1816,
          spot_count_regular:3,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"",
          address_id:100
        },
        // id 74
        {
          name:"Crestwood C",
          latitude:49.173703,
          longitude:-123.070479,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"",
          address_id:101
        },
        // id 75
        {
          name:"Crestwood B",
          latitude:49.173703,
          longitude:-123.070479,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"",
          address_id:102
        },
        // id 76
        {
          name:"Richmond City Hall Annex",
          latitude:49.163735,
          longitude:-123.13931,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:true,
          open_time: '00:00:00.00', 
          close_time: '23:59:59.00',
          notes:"Short term, 30 minute public parking is provided at the plaza level and is located directly adjacent to the north side of City Hall.",
          address_id:105
        },
        // id 77
        {
          name:"Applewood Nissan",
          latitude:49.170984,
          longitude:-123.077177,
          spot_count_regular:1,
          spot_count_handicap:0,
          occupied_regular:0,
          occupied_handicap:0,
          pay_to_park:false,
          open_time: '07:00:00.00', 
          close_time: '20:59:59.00',
          notes:"Discover our new Nissan cars & SUVs and used vehicles for sale in Surrey. Learn more about our promotions and service department!",
          address_id:106
        }
      ]);
    });
};