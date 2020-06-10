$(document).ready(() => {
  $("body").append("<div class='output'></div>");
  const output = new Output();
  const table = new Table();

  const data = [
    [
      "Естонія",
      409.3000026,
      9.088607963,
      0,
      0,
      0,
      0,
      85.78579494,
      84.92999999,
      1.19,
      0.28,
      0.57,
      0.38,
      0,
      1.070000008,
      100,
      77.63745825,
      90.22327993,
      4.680000002,
      54.20427014,
      0.399999999,
      1.282999998,
      5.250000049,
      7.272513419,
      0.1119403,
      16534.22053,
      8.000000002,
      5.7,
    ],
    [
      "Великобританія",
      1894.999996,
      126.5141,
      0.66,
      12.31602002,
      58.63303,
      116.8,
      212.665381,
      139.1700001,
      5.6,
      0.83,
      0.42,
      0.31,
      0.15,
      1.48,
      50.61999999,
      170.2383,
      191.9153001,
      4.94,
      122.9896699,
      8.980999998,
      2.744000001,
      95.78400007,
      118.7450357,
      0.3194394,
      38960.75793,
      10,
      8,
    ],
    [
      "Кіпр",
      1531.700006,
      20.45717001,
      3.6,
      6.023267048,
      18.23202004,
      74.02000007,
      326.1306058,
      247.4700004,
      7.41,
      1.66,
      0.42,
      1.46,
      0,
      3.150000008,
      89.63999999,
      259.7197001,
      315.4939,
      0.739999998,
      249.9900999,
      2.164999998,
      2.071000001,
      54.12757175,
      11.41648572,
      1.047858,
      29371.99995,
      8.000000002,
      6.3,
    ],
    [
      "Австрія",
      844.5999999,
      18.47795001,
      0.6,
      47.96738993,
      33.80901004,
      78.74999998,
      135.3379342,
      64.46000031,
      3.36,
      0.72,
      0.4,
      0.55,
      0.02,
      1.659999996,
      62.41999998,
      101.9308999,
      133.2735,
      7.520000002,
      94.10752995,
      2.319,
      2.29,
      4.916999936,
      19.72286956,
      0.0867086,
      49581.46483,
      4.999999996,
      5,
    ],
    [
      "Бельгія",
      1248.500002,
      50.51060004,
      0.14,
      54.15469991,
      59.09740996,
      73.36999999,
      116.8127553,
      95.59000033,
      3.26,
      0.76,
      0.78,
      0.31,
      0.1,
      0.760000003,
      64.81000001,
      113.1701001,
      114.6699999,
      2.080000001,
      105.2099999,
      5.400999998,
      2.193,
      4.244000031,
      44.73880501,
      0.143532,
      46512.8899,
      8.000000002,
      7,
    ],
    [
      "Болгарія",
      531.600003,
      14.94543005,
      0,
      0,
      0,
      0,
      71.33534462,
      70.16000049,
      1.1,
      0.41,
      0.44,
      0.44,
      0,
      -0.18,
      46.74999998,
      71.9810899,
      5.667447891,
      1.410000003,
      60.72115007,
      0.300999998,
      1.74,
      6.109000043,
      15.41360307,
      0.5256822,
      7286.64187,
      10,
      6,
    ],
    [
      "Чехія",
      446.1999981,
      19.63743999,
      0,
      12.80878995,
      25.44498003,
      0,
      67.7427244,
      86.50000046,
      1.16,
      0.46,
      0.23,
      0.210000001,
      0.01,
      0.340000004,
      82.02000001,
      73.64158993,
      17.7554301,
      1.880000001,
      63.14626998,
      1.858000003,
      1.866,
      6.497000011,
      17.75477724,
      0.0142234,
      20580.17767,
      1.999999999,
      5,
    ],
    [
      "Данія",
      1241.999998,
      63.66660007,
      1.470000001,
      181.3134,
      39.22585003,
      46.88000005,
      205.4463868,
      103.0399998,
      4.77,
      0.47,
      0.69,
      0.58,
      0.07,
      2.309999993,
      80.26,
      79.88492004,
      9.972725114,
      1.579999998,
      54.00638998,
      6.923,
      2.627,
      49.70099998,
      53.81299295,
      0.3336921,
      59889.00506,
      7.000000003,
      6.3,
    ],
    [
      "Фінляндія",
      870.9000003,
      50.96427996,
      0.27,
      21.42964995,
      12.24705998,
      36.51999994,
      101.5151275,
      105.2800004,
      3.36,
      0.44,
      0.46,
      0.34,
      0.06,
      0.360000002,
      91.39000002,
      70.45972001,
      99.91080011,
      2.409999997,
      62.41531001,
      1.698,
      1.539,
      74.99199996,
      54.3662734,
      0.2246148,
      48842.96234,
      6.000000004,
      5.7,
    ],
    [
      "Франція",
      1100.699995,
      65.11216001,
      0.2,
      56.25756003,
      63.08984999,
      62.26999993,
      133.1441296,
      57.76000009,
      4.21,
      0.58,
      0.45,
      0.44,
      0.09,
      0.880000006,
      48.57,
      92.12949001,
      131.5351001,
      2.640000003,
      83.85566987,
      6.238000002,
      2.400000002,
      0.250000054,
      56.43482352,
      0.1364681,
      42521.81298,
      10,
      5.3,
    ],
    [
      "Німечина",
      798.500003,
      37.47539999,
      0.850000001,
      24.01973,
      50.05026999,
      56.46999996,
      124.8,
      53.00000034,
      3.26,
      0.67,
      0.32,
      0.35,
      0.05,
      0.360000002,
      65.12999997,
      122.7084999,
      126.8706,
      7.79,
      113.9844001,
      3.381,
      1.955000001,
      5.463999936,
      32.89401427,
      0.0819813,
      44021.21964,
      4.999999996,
      5,
    ],
    [
      "Греція",
      502.999995,
      18.99356007,
      0.55,
      34.08704993,
      53.26057001,
      100.7500001,
      153.2189102,
      41.12,
      2.22,
      0.89,
      0.06,
      0.53,
      0,
      0.399999997,
      73.46999998,
      102.0614001,
      148.4469,
      1.890000001,
      91.26222994,
      0.974000001,
      1.087000001,
      0.034000006,
      11.61774999,
      0.2432767,
      25630.79456,
      1,
      3.3,
    ],
    [
      "Угорщина",
      661.9000059,
      17.07626993,
      0,
      5.917048038,
      43.60548998,
      27.04,
      76.46969975,
      78.06000017,
      1.14,
      0.27,
      0.34,
      0.24,
      0.03,
      1.230000005,
      82.81000001,
      62.24831005,
      16.52876997,
      3.670000002,
      44.80343999,
      1.585000002,
      1.237999999,
      3.767000067,
      13.53524128,
      0.0521512,
      13909.01609,
      1.999999999,
      4.3,
    ],
    [
      "Ірландія",
      2833.500007,
      16.46205998,
      1.77,
      113.4721,
      29.41169001,
      184.27,
      222.0397021,
      255.4200005,
      8.4,
      0.73,
      0.31,
      0.64,
      0.03,
      1.000000008,
      72.09999999,
      114.1478001,
      236.3152,
      3.270000002,
      105.7173999,
      6.081000003,
      1.928000002,
      46.21599994,
      48.93260471,
      0.1069757,
      48248.94136,
      10,
      8.3,
    ],
    [
      "Італія",
      715.1999963,
      17.48958999,
      1.01,
      37.79219995,
      91.15987,
      53.04000003,
      157.1798256,
      41.66999988,
      2.58,
      0.63,
      0.6,
      0.57,
      0.01,
      0.609999997,
      56.01,
      97.49988002,
      153.3932999,
      1.51,
      88.21340009,
      4.673,
      1.942,
      4.862999958,
      19.68067882,
      0.0472272,
      36103.89061,
      7.000000003,
      6,
    ],
    [
      "Латвія",
      366.3999979,
      4.313915,
      0,
      0,
      0,
      0,
      78.88455164,
      74.08999978,
      1.47,
      0.22,
      0.12,
      0.41,
      0,
      0.010000002,
      35.3,
      46.86970007,
      3.724934,
      2.080000001,
      38.91395991,
      0.299000002,
      1.227999999,
      0.799999956,
      3.787550889,
      0.1441441,
      13806.97429,
      4.999999996,
      5.7,
    ],
    [
      "Литва",
      326.7,
      11.86387005,
      0,
      0,
      0,
      0,
      57.27487357,
      61.91000034,
      0.8,
      0.26,
      0.24,
      0.25,
      0,
      0.900000003,
      79.36,
      46.73312004,
      5.804731039,
      1.680000001,
      37.97095999,
      0.537,
      0.989,
      0,
      9.501483804,
      0.1030284,
      14154.60905,
      4.999999996,
      5.7,
    ],
    [
      "Люкс",
      14847.5,
      148.9615,
      0.339999999,
      3.217498934,
      0.014186208,
      167.73,
      172.3997917,
      1052.27,
      25.67,
      0.63,
      0.26,
      1.25,
      0.3,
      15.76,
      45.55999999,
      330.6032,
      181.4180999,
      1.3,
      325.1813,
      3.387,
      5.258,
      1.941999998,
      114.2298907,
      0.5996131,
      114210.815,
      6.000000004,
      4.3,
    ],
    [
      "Мальта",
      1429.900007,
      33.30106003,
      0,
      7.270358926,
      62.72130996,
      0,
      154.594611,
      248.5099996,
      7.99,
      1.2,
      0.48,
      0.84,
      0,
      3.859999998,
      82.39000002,
      156.2890999,
      157.7099001,
      1.329999999,
      144.3796,
      3.160000002,
      1.554999999,
      0,
      37.41618897,
      0.477327,
      21963.81165,
      2.999999998,
      5.7,
    ],
    [
      "Нідерланди",
      1793.000002,
      78.00842996,
      0.440000001,
      71.79541002,
      47.94241997,
      163.74,
      211.3721047,
      116.4199997,
      4.7,
      0.65,
      0.33,
      0.61,
      0.1,
      1.670000002,
      83.14000001,
      138.6615999,
      211.8918,
      2.620000003,
      130.9941999,
      3.133000003,
      1.728999999,
      135.503,
      71.13388477,
      0.0646861,
      50085.05994,
      2.999999998,
      4.3,
    ],
    [
      "Польща",
      342.4000051,
      32.66825997,
      0.87,
      2.068004977,
      37.17706997,
      13.03,
      66.05804804,
      54.04999973,
      0.84,
      0.3,
      0.19,
      0.15,
      0.06,
      1.950000002,
      43.79000001,
      55.0600201,
      14.09643005,
      1.660000001,
      48.05887999,
      1.820000003,
      1.49,
      15.02099997,
      26.80921532,
      0.1980846,
      13382.07216,
      7.000000003,
      6,
    ],
    [
      "Португалія",
      1011.499999,
      31.53028994,
      0.51,
      69.46089991,
      48.77021002,
      86.96000002,
      203.9267338,
      79.47999957,
      3.35,
      0.89,
      0.59,
      0.68,
      0.01,
      0.379999999,
      72.14999998,
      143.4399,
      212.9994,
      2.969999998,
      131.3753,
      4.195999997,
      1.733000001,
      7.74000006,
      25.9657157,
      0.0432453,
      22503.90949,
      6.000000004,
      6,
    ],
    [
      "Румунія",
      326.7,
      15.46294005,
      0,
      0,
      0,
      0,
      54.11890128,
      58.5999998,
      0.67,
      0.19,
      0.33,
      0.2,
      0.02,
      0.049999997,
      64.56000003,
      36.43735,
      48.55728994,
      1.840000002,
      30.83591,
      0.292,
      1.051000002,
      1.185000023,
      11.60760122,
      0.5923328,
      8539.261231,
      9.000000001,
      6,
    ],
    [
      "Словаччина",
      331.7000051,
      4.784327027,
      0,
      4.963100945,
      29.25427004,
      12.08000007,
      54.10935936,
      72.1199995,
      0.84,
      0.37,
      0.04,
      0.23,
      0,
      -4.76e-9,
      66.59999999,
      65.84169005,
      66.39987003,
      2.020000003,
      53.78367,
      1.657999998,
      1.337,
      8.396000029,
      4.931909574,
      0.1488971,
      17789.56261,
      2.999999998,
      4.7,
    ],
    [
      "Словенія",
      501.4000062,
      16.45051001,
      0,
      7.347167996,
      10.50850999,
      0,
      93.39442151,
      71.15999953,
      1.47,
      0.45,
      0.29,
      0.57,
      0,
      0.1,
      60.67000001,
      68.13714002,
      103.6839999,
      2.73,
      57.55829995,
      1.701999999,
      2.458999998,
      2.942999955,
      12.58832423,
      0.3216374,
      24478.28178,
      2.999999998,
      6.7,
    ],
    [
      "Іспанія",
      879.0999977,
      76.48269997,
      0.8,
      54.45197991,
      45.28131003,
      76.67999998,
      230.9100912,
      47.00000005,
      3.37,
      0.71,
      0.41,
      0.8,
      0.03,
      1.160000005,
      57.63000002,
      163.9209999,
      232.1764,
      1.670000001,
      154.277,
      2.774999998,
      2.130999998,
      7.794000038,
      69.80594573,
      0.7009841,
      31984.72559,
      4.999999996,
      5,
    ],
    [
      "Швеція",
      1082.300007,
      103.7069,
      0.830000001,
      55.18615993,
      25.85557001,
      78.64,
      142.4270425,
      51.70000017,
      2.95,
      0.36,
      0.7,
      0.53,
      0.08,
      1.41,
      92.96,
      83.84826008,
      9.442534905,
      1.9,
      57.99769992,
      5.883000001,
      1.611999999,
      9.213000056,
      87.17621058,
      0.3596742,
      57071.20431,
      8.000000002,
      6.3,
    ],
  ];
  $("form").submit(function (event) {
    event.preventDefault();
    output.empty();
    const formData = new FormData(this);
    switch (formData.get("type")) {
      case "forel":
        forelMethod.data = data;
        forelMethod.minClusters = +formData.get("minClusters");
        forelMethod(data, table, output);
        break;
      case "k-means":
        kMeans(data, +formData.get("minClusters"), table, output);
        console.log(2);
        break;
    }
  });
});

// generally
function getHeadersByCounter(amount, text = "") {
  const result = [];
  for (let i = 1; i <= amount; i++) {
    result.push(`${text}${i}`);
  }
  return result;
}

function getUniqueData(array) {
  return [...new Set(array)];
}
