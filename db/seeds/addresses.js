
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('addresses').del()
    .then(function () {
      // Inserts seed entries
      return knex('addresses').insert([
        {
          street_line_1: '4915 W 16th Ave',
          street_line_2: '',
          city: 'Vancouver',
          province: 'BC',
          postal_code: 'V6T2H2',
          country: 'Canada'
        },
        {
          street_line_1: '3228 Ross Drive',
          street_line_2: '',
          city: 'Vancouver',
          province: 'BC',
          postal_code: 'V6S0C6',
          country: 'Canada'
        },
        {
          street_line_1: '6085 Thunderbird Boulevard',
          street_line_2: '',
          city: 'Vancouver',
          province: 'BC',
          postal_code: 'V6T1Z35',
          country: 'Canada'
        },
        {
          street_line_1: '2140 Lower Mall',
          street_line_2: '',
          city: 'Vancouver',
          province: 'BC',
          postal_code: 'V6T1Z2',
          country: 'Canada'
        },
        {
          street_line_1: '6133 University Blvd',
          street_line_2: '',
          city: 'Vancouver',
          province: 'BC',
          postal_code: 'V6T1Z1',
          country: 'Canada'
        },
        {
          street_line_1: '6115 Student Union Boulevard',
          street_line_2: '',
          city: 'Vancouver',
          province: 'BC',
          postal_code: 'V6T1Z1',
          country: 'Canada'
        },
        {
          street_line_1:"1470 W Broadway",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6H1H4",
          country:"Canada"
        },
        {
          street_line_1:"1580 W. Broadway",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6J5K8",
          country:"Canada"
        },
        {
          street_line_1:"1596 Johnston Street",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6H3R9",
          country:"Canada"
        },
        {
          street_line_1:"455 10th Avenue Bikeway",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V5Z 2V2",
          country:"Canada"
        },
        {
          street_line_1:"322 Davie St",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6B 5Z6",
          country:"Canada"
        },
        {
          street_line_1:"1155 Beach Ave",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6E1V2",
          country:"Canada"
        },
        {
          street_line_1:"1100 Granville Street",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6Z 2B6",
          country:"Canada"
        },
        {
          street_line_1:"Beach Avenue and Broughton Street",
          street_line_2:"",
          city:"vancouver",
          province:"BC",
          postal_code:"V6G1B9",
          country:"Canada"
        },
        {
          street_line_1:"777 Pacific Boulevard",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:" BC V6B ",
          country:"Canada"
        },
        {
          street_line_1:"Beach Avenue and Cardero Street",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6G1B9",
          country:"Canada"
        },
        {
          street_line_1:"350 W. Georgia",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6B6B1",
          country:"Canada"
        },
        {
          street_line_1:"900 W Georgia St",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6C2W6",
          country:"Canada"
        },
        {
          street_line_1:"900 west Georgia Street",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6C2W6",
          country:"Canada"
        },
        {
          street_line_1:"1455 Quebec St",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6A3Z7",
          country:"Canada"
        },
        {
          street_line_1:"333 Dunsmuir Street",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6B5R4",
          country:"Canada"
        },
        {
          street_line_1:"1030 W Georgia St",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6E2Y3",
          country:"Canada"
        },
        {
          street_line_1:"745 Thurlow Street",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6E",
          country:"Canada"
        },
        {
          street_line_1:"1128 W Georgia St",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6E0A8",
          country:"Canada"
        },
        {
          street_line_1:"701-799 BC-1A",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6Z2H7",
          country:"Canada"
        },
        {
          street_line_1:"1128 West Georgia Street",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6E0A8",
          country:"Canada"
        },
        {
          street_line_1:"514 Homer St",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6B2V6",
          country:"Canada"
        },
        {
          street_line_1:"701 W Georgia Street",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V7Y1G5",
          country:"Canada"
        },
        {
          street_line_1:"535 Hornby Street",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6C2E8",
          country:"Canada"
        },
        {
          street_line_1:"1177 Melville St",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6E0A3",
          country:"Canada"
        },
        {
          street_line_1:"1050 W Pender St",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V7X",
          country:"Canada"
        },
        {
          street_line_1:"1180 W Hastings St",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6E4R5",
          country:"Canada"
        },
        {
          street_line_1:"200 Granville Street",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6C1S4",
          country:"Canada"
        },
        {
          street_line_1:"160 Water Street",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6B",
          country:"Canada"
        },
        {
          street_line_1:"900 Denman Street",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6G2L8",
          country:"Canada"
        },
        {
          street_line_1:"Broughton St",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6E4N1",
          country:"Canada"
        },
        {
          street_line_1:"1038 Canada PL",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6C0B9",
          country:"Canada"
        },
        {
          street_line_1:"1038 Canada Place",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6C0B9",
          country:"Canada"
        },
        {
          street_line_1:"1821 Robson St",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6G3E4",
          country:"Canada"
        },
        {
          street_line_1:"650 W 41st Ave",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V5Z2M9",
          country:"Canada"
        },
        {
          street_line_1:"5733 Cambie St",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V5Z4H2",
          country:"Canada"
        },
        {
          street_line_1:"2083 Alma Street",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6R4N6",
          country:"Canada"
        },
        {
          street_line_1:"252 Raymur Ave",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6A3K8",
          country:"Canada"
        },
        {
          street_line_1:"100 W 49th Ave",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V5Y",
          country:"Canada"
        },
        {
          street_line_1:"8277 Ontario Street",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V5X0A7",
          country:"Canada"
        },
        {
          street_line_1:"4915 West 16th Avenue",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6T2H2",
          country:"Canada"
        },
        {
          street_line_1:"1200 73rd Ave",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6P6G5",
          country:"Canada"
        },
        {
          street_line_1:"788 Copping Street",
          street_line_2:"",
          city:"North Vancouver",
          province:"BC",
          postal_code:"V7M3N2",
          country:"Canada"
        },
        {
          street_line_1:"100 Main Street",
          street_line_2:"",
          city:"West Vancouver",
          province:"BC",
          postal_code:"V6A",
          country:"Canada"
        },
        {
          street_line_1:"1357 Bewicke Ave",
          street_line_2:"",
          city:"North Vancouver",
          province:"BC",
          postal_code:"V7M3B7",
          country:"Canada"
        },
        {
          street_line_1:"8811 River Rd",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V6X 3P8",
          country:"Canada"
        },
        {
          street_line_1:"7899 Templeton Station Rd.",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V7B 0B7",
          country:"Canada"
        },
        {
          street_line_1:"9100 Van Horne Way",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V6X 1W3",
          country:"Canada"
        },
        {
          street_line_1:"9100 Van Horne Way",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V6X 1W3",
          country:"Canada"
        },
        {
          street_line_1:"3228 Ross Drive",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6S 0C6",
          country:"Canada"
        },
        {
          street_line_1:"3201 Kingsway Vancouver",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V5R5K3",
          country:"Canada"
        },
        {
          street_line_1:"112 13 St W",
          street_line_2:"",
          city:"North Vancouver",
          province:"BC",
          postal_code:"V7M 1H9",
          country:"Canada"
        },
        {
          street_line_1:"750 17th Street",
          street_line_2:"",
          city:"West Vancouver",
          province:"BC",
          postal_code:"V7V 3T3",
          country:"Canada"
        },
        {
          street_line_1:"6085 Thunderbird Blvd",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V6T 2A1",
          country:"Canada"
        },
        {
          street_line_1:"1315 Kootenay Street",
          street_line_2:"",
          city:"Vancouver",
          province:"BC",
          postal_code:"V5K 4Y3",
          country:"Canada"
        },
        {
          street_line_1:"120-126 14th St W",
          street_line_2:"",
          city:"North Vancouver",
          province:"BC",
          postal_code:"V7M 2M9",
          country:"Canada"
        },
        {
          street_line_1:"9260 Bridgeport Rd",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V6X 1S1",
          country:"Canada"
        },
        {
          street_line_1:"9260 Bridgeport RD",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V6X 1S1",
          country:"Canada"
        },
        {
          street_line_1:"6380 Miller Road ",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V7B1B3",
          country:"Canada"
        },
        {
          street_line_1:"3500 Cessna DR",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V7B 1C7",
          country:"Canada"
        },
        {
          street_line_1:"3011 Aylmer Road",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V7B 1B3",
          country:"Canada"
        },
        {
          street_line_1:"North Service Road",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"",
          country:"Canada"
        },
        {
          street_line_1:"2121 Marine Drive",
          street_line_2:"",
          city:"West Vancouver",
          province:"BC",
          postal_code:"V7V 4Y2",
          country:"Canada"
        },
        {
          street_line_1:"231 E 15 St",
          street_line_2:"",
          city:"North Vancouver",
          province:"BC",
          postal_code:"V7L 4P7",
          country:"Canada"
        },
        {
          street_line_1:"3211 Grant McConcachie Way",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V7B 0A4",
          country:"Canada"
        },
        {
          street_line_1:"212 Brooksbank Ave",
          street_line_2:"",
          city:"North Vancouver",
          province:"BC",
          postal_code:"V7J 2B8",
          country:"Canada"
        },
        {
          street_line_1:"4151 Hazelbridge Wy",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V6X 4J7",
          country:"Canada"
        },
        {
          street_line_1:"4151 Hazelbridge Way",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V6X 4J7",
          country:"Canada"
        },
        {
          street_line_1:"3935 Kincaid St",
          street_line_2:"",
          city:"Burnaby",
          province:"BC",
          postal_code:"V5G 1V7",
          country:"Canada"
        },
        {
          street_line_1:"East 23rd Street",
          street_line_2:"",
          city:"North Vancouver City",
          province:"BC",
          postal_code:"V7L2A4",
          country:"Canada"
        },
        {
          street_line_1:"10700 Cambie Rd",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V6X 1K8",
          country:"Canada"
        },
        {
          street_line_1:"10780 Cambie Rd",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V6X 1K8",
          country:"Canada"
        },
        {
          street_line_1:"3320 Jacombs Road",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:" V6V 1Z6",
          country:"Canada"
        },
        {
          street_line_1:"1484 Rupert St",
          street_line_2:"",
          city:"North Vancouver",
          province:"BC",
          postal_code:"V7J 1G1",
          country:"Canada"
        },
        {
          street_line_1:"10780 Cambie Rd",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V6X 1K8",
          country:"Canada"
        },
        {
          street_line_1:"4331 Dominion St",
          street_line_2:"",
          city:"Burnaby",
          province:"BC",
          postal_code:"V5G 1B2",
          country:"Canada"
        },
        {
          street_line_1:"9200 Alexandra Rd",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V6X 1C5",
          country:"Canada"
        },
        {
          street_line_1:"9251 Alderbridge Way",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V6X 0N1",
          country:"Canada"
        },
        {
          street_line_1:"12554-12600 Cambie Road",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V6V 1X4",
          country:"Canada"
        },
        {
          street_line_1:"13091 Vanier Place",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V6V 2J1",
          country:"Canada"
        },
        {
          street_line_1:"3700 Willingdon Avenue",
          street_line_2:"",
          city:"Burnaby",
          province:"BC",
          postal_code:"V5G 3H2",
          country:"Canada"
        },
        {
          street_line_1:"4567 Lougheed Hwy",
          street_line_2:"",
          city:"Burnaby",
          province:"BC",
          postal_code:"V5C",
          country:"Canada"
        },
        {
          street_line_1:"6111 River Road",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V7C",
          country:"Canada"
        },
        {
          street_line_1:"4330 Kingsway",
          street_line_2:"",
          city:"Burnaby",
          province:"BC",
          postal_code:"V5H 4G8",
          country:"Canada"
        },
        {
          street_line_1:"4567 Canada Way",
          street_line_2:"",
          city:"Burnaby",
          province:"BC",
          postal_code:"V5G 4T1",
          country:"Canada"
        },
        {
          street_line_1:"4455 No 6 Road",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V6V 1P6",
          country:"Canada"
        },
        {
          street_line_1:"6083 Mckay Ave",
          street_line_2:"",
          city:"Burnaby",
          province:"BC",
          postal_code:"V5H 2W7",
          country:"Canada"
        },
        {
          street_line_1:"7551 Westminster Highway",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V6X 1A3",
          country:"Canada"
        },
        {
          street_line_1:"2055 Purcell Way",
          street_line_2:"",
          city:"North Vancouver",
          province:"BC",
          postal_code:"V7J",
          country:"Canada"
        },
        {
          street_line_1:"4555 Kingsway",
          street_line_2:"",
          city:" Burnaby ",
          province:"BC",
          postal_code:"V5H 4V8",
          country:"Canada"
        },
        {
          street_line_1:"5599 Lynas Lane ",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:" V7C B52",
          country:"Canada"
        },
        {
          street_line_1:"4700 Kingsway",
          street_line_2:"",
          city:"Burnaby",
          province:"BC",
          postal_code:"V5H 4M1",
          country:"Canada"
        },
        {
          street_line_1:"5691 Parkwood Way",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V6V 2M6",
          country:"Canada"
        },
        {
          street_line_1:" 13800 Commerce Parkway",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V6V 2J3",
          country:"Canada"
        },
        {
          street_line_1:"6011 No 1 Rd",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V7C",
          country:"Canada"
        },
        {
          street_line_1:"13511 Commerce Parkway",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V6V 3A4",
          country:"Canada"
        },
        {
          street_line_1:"13700 International Pl",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V6V 2X8",
          country:"Canada"
        },
        {
          street_line_1:"Capilano River Regional Park",
          street_line_2:"",
          city:"North Vancouver",
          province:"BC",
          postal_code:"",
          country:"Canada"
        },
        {
          street_line_1:"6911 No 3 Road",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V6Y",
          country:"Canada"
        },
        {
          street_line_1:"6900 Minoru",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V6Y 3E3",
          country:"Canada"
        },
        {
          street_line_1:"13220 Smallwood Place",
          street_line_2:"",
          city:"Richmond",
          province:"BC",
          postal_code:"V6V 1W8",
          country:"Canada"
        },
        {
          street_line_1: '128 W Hastings St',
          street_line_2: '#300',
          city: 'Vancouver',
          province: 'BC',
          postal_code: 'V6B1G8',
          country: 'Canada'
        }
      ]);
    });
};
