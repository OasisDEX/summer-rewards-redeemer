import { BigNumber } from "ethers";

import { HUNDRED_THOUSAND, MILLION } from "common/constants/constants";

export const BASE_WEEKLY_AMOUNT = MILLION.add(HUNDRED_THOUSAND);

export const dummyProcessedSnaphot: { address: string; amount: BigNumber }[] = [
  { address: "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955", amount: BASE_WEEKLY_AMOUNT.mul(2).div(10) },
  { address: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8", amount: BASE_WEEKLY_AMOUNT.mul(3).div(10) },
  { address: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC", amount: BASE_WEEKLY_AMOUNT.mul(1).div(10) },
  { address: "0x90F79bf6EB2c4f870365E785982E1f101E93b906", amount: BASE_WEEKLY_AMOUNT.mul(1).div(10) },
  { address: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65", amount: BASE_WEEKLY_AMOUNT.mul(1).div(10) },
  { address: "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc", amount: BASE_WEEKLY_AMOUNT.mul(2).div(100) },
  { address: "0x976EA74026E726554dB657fA54763abd0C3a0aa9", amount: BASE_WEEKLY_AMOUNT.mul(18).div(100) },
];

export const dummyProcessedSnaphot2: { address: string; amount: BigNumber }[] = [
  {
    address: "0x5ec89fb06dd4aff1d4bc43ac99fb2e76594db37e",
    amount: BigNumber.from("10559999999999999999997"),
  },
  {
    address: "0x5c5294453786968c6bc9349384a76751ef25042f",
    amount: BigNumber.from("114902857142857142857134"),
  },
  {
    address: "0x10649c79428d718621821cf6299e91920284743f",
    amount: BigNumber.from("4274285714285714285711"),
  },
  {
    address: "0x5e595618047260d3d486522dbfd61095e64fd4e4",
    amount: BigNumber.from("21119999999999999999999"),
  },
];

export const weeklyRewardData = {
  week: {
    id: "2795",
    days: [
      {
        id: "19565",
        borrowDailyRewards: [
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x12c260e672bd8321f6ab246b81a0b7185f3a6d80-19565",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.0667355958040972364760650436039874",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x1e6ee615adb41d8f07bdcf34889dab849d8a4130-19565",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x11d67fa925877813b744abc0917900c2b1d6eb81",
            },
            reward: "0.02294093970662091681523843159580004",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x38ea3693640452756c2ee9a22e607e4c4e0d3f3b-19565",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.5466478578867393738708677068197725",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x58667459ee28b008dccade72cd081d9df7263ec6-19565",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.01853794904388376929706385186989599",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xb96f4a285179cd96ee8665bcb7793cb1f19dd4d0-19565",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x6bdc44c885b166aeb687f2d247e419f5a19e1804",
            },
            reward: "0.01668389895102430912828046155124079",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xd16335a50ef275b4b3e691e01a52feae6e25c2d8-19565",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x157595f04c0da495d72ceb84390f444d469c3216",
            },
            reward: "0.04172686920915349602003468363011074",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xd9f7d5fb4aac74b72125e3b4426c8f246d3e9072-19565",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x14bdfda5b5b829f14332a52c15129386284ce36a",
            },
            reward: "0.00667355958040972364760650436039874",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xf0edc53c8bab4231081f1778456df0198c9bb584-19565",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x4fd0ff2c49671d4fe1927371cf833e8b3b7f44ea",
            },
            reward: "0.00198834730099935608530810090193572",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xf6a4062cfd0bee1c12c43b6ea0de7227bed3fd6e-19565",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.2780649825170718186595352156668581",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x01dc26b7ccbd2b007da34e720abeae02b99be553-19565",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.1138158289829478373291700098441506",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x1d63e226a1b3a514bd384b9e9d596071fc8076a7-19565",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.4730360302499322936775762130215125",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x2190842ddf2994c986e08045c02442071b774123-19565",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x53fe1b209c917eeeb996720fe5418572bc0e836c",
            },
            reward: "0.006948399662685116297462518838620567",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x31095e235e45c38ca1657e9798a7aef08cf929fa-19565",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.07893202068451689657960192162825119",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x6e407de25e1c9fd004768a5ca3d6a06b3d5da390-19565",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x4fd0ff2c49671d4fe1927371cf833e8b3b7f44ea",
            },
            reward: "0.03630281506261297273115936101507944",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x9831f3c9511332a83951e735aeaf9a37e000ed39-19565",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.04730089390208016985011146194977114",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x9fcc001800f9c040dcba47ad4840cc49d146c5c7-19565",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x42b2e881b164e4c283fb7b7e15b35cd256209133",
            },
            reward: "0.001251009798759215984341486629204067",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xb74d9b73d63931b029e1dbec784e05dee38c24d5-19565",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.1773753178955031229453877424843119",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xcfb80b3d81c85f401bf139288ae323fe2eff7a88-19565",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x7c0b689a3003e0dbd2d37ce15e8a2273d91bd7f6",
            },
            reward: "0.03843131887735900990748048950335335",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xe7b42d1a36d567d5314f3c990fcd178c556d37e7-19565",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xbdc88f7f9b16863c8709f97f872f4e6e16dd5f6e",
            },
            reward: "0.02660636488360336469770879508574524",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x0115f90c7f562b85444e5c48a277078437d06de4-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x4dc7970c0facd251e4398f706c45f3af877d029b",
            },
            reward: "0.003483266665396157185066911588132076",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x15990263fbf6f475d193ed629db99efd530c0d2c-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x25d9d6f36fb3773b98284624e2a58c0cb3c98cd4",
            },
            reward: "0.01339717948229291225024972998640204",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x1ede520dea27d98bc8d16df2d363c275d7b3dcf1-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x6b32080f61ce43bfdc37b6629706dae405d22389",
            },
            reward: "0.02679435896458582450049678187595604",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x225e341a7dfdfbd49924b5dbb08f531781d0f7af-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.239211180033683444408870542146465",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x2a07081522d2de69c7566cac45edfda9edf73236-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x1ef678435e3a1581732171df82476995cc041568",
            },
            reward: "0.002110862781170582623323773941172383",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x3363aca0a6bd542d146408246b5d1e3743b977d6-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x1f5f902be1f635b30425b690aa9fd5fa2b6fa79c",
            },
            reward: "0.2143548717166865960039555083297121",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x349a20e92ad725f665ce7813a89952978d278ba5-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xd790a1516f78e3fb52338084b5c5931a75bb19cf",
            },
            reward: "0.07125102242157040723071056713010354",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x40455c3ede1e00771066dcc38777fba73f8d4f64-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x73d31581106e3f6b9dd2579e8d9fec81eba22296",
            },
            reward: "0.005358871792917164900101498852669636",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x48d94176dc8a2169eef1b464e4c857c3080f001f-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x20eadfcaf91bd98674ff8fc341d148e1731576a4",
            },
            reward: "0.2679475742996950554303580749337316",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x51319451698f1c7357dcfd7d833803e6c7315209-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.05358871792917164900098820755821602",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x5bbbeee4878868bd8b15d819ac6d082e4227aafd-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xbdb7194a6f048f57e0bab51aaae0fb623615805b",
            },
            reward: "0.01607661537875149470029914036431284",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x65f335e81b687f8389d9245795885e10588492e2-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x07a1f6fc89223c5ebd4e4ddae89ac97629856a0f",
            },
            reward: "0.0075560769107120022337858676424197",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xa0c64805faea968e6d690f160c2ef8ae9a7dfb3d-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x0183d9be08db4024c2dc9aec10b9526fc6adeef7",
            },
            reward: "0.004019153844687873675076793663714236",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xacdd7f08f9d2b64bf7451171195e7c0dd7a887a2-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xac798df80b371569ec73e37124ffef7e26249667",
            },
            reward: "0.007502420510084030860141027154998277",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xaea1f7431c8d8bee7d6a74e4942a1d509166c849-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x8f767dbe1af8fc0eb2655260f2a4768a3ad49bdc",
            },
            reward: "0.013397179482292912250247051889554",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xb4f7667c4aa42935a8ed7d92e702097d086e829a-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x2abbf099b7d6d3b25912c5c78f6737456e8736d9",
            },
            reward: "0.008038307689375747350153587327428472",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xedbbe7ba1c8daa8f5dde37ce36b02e47341ffa13-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x10649c79428d718621821cf6299e91920284743f",
            },
            reward: "0.01375910933942315599557665488638631",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xf1f916d52cbca47bfa2c4f53fd48cc81228e7ade-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x7c0b689a3003e0dbd2d37ce15e8a2273d91bd7f6",
            },
            reward: "0.01607661537875149470029914036431284",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xfa62b642a718c6e88f3c7a3049040c79a9c5cd61-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x6144a12e348829abb59ead0364cf7c2e540aa715",
            },
            reward: "0.01607661537875149470029914036431284",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x002cd3ca0be3ea53528b7e7c9e34abb81fa2e9ac-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.02411827474289248625826207819530311",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x0052e87f43b4dbf7a881a9a7e3b4ad89dfd50d2f-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.01205913737144624313033635017925538",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x02b6e9b583356cc5d80604ff0f1bd676c2bd27f1-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.01929462568767136072884403677573845",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x51324b76b09a2fc065ad01d02677b7f1ecc7177b-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.5567168822584861721310995380210557",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x62a455e7f460f5cec4a3e64418bb32816895c2ab-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x30be05fe3ed386b8d8afb327b03f50c9d97dcb85",
            },
            reward: "0.04703063574864034820481636356244489",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa499dadf173dc74047b32eb906a355473f7e4624-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x915188a790dcdd06447244196694c9f8a7d2b4c0",
            },
            reward: "0.03617741211433872938859842837455849",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xac12f96c21cebf7e8743cd16a9be5ba8ec3d31ba-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.002978607695800470321761423882569948",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xb87b6092ac461e2dd171fab14e389810ace950ff-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xcb33844b365c53d3462271cee9b719b6fc8ba06a",
            },
            reward: "0.07114898303065569866525974868805813",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xdd010f2ca484bae51eacc0381af9e2d5c2583b3c-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.01326505110859086744324945408902053",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xe8a6fae00900d2c4f04bb009181ee33f9042daa2-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x1dac73f3d00052d7e815b41e7b1b5cb241aa4d70",
            },
            reward: "0.004583411431263620497387222962386214",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xecef821974f44490bb02c9383cf63c79e0cd77ec-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x7f8c24d538c695262afc1408ad4217967da1623a",
            },
            reward: "0.03014784342861560782403290882573271",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xf43f03c304bdbd098826c032b343ac021b98b16b-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xaf97e87375d97f45b1c5f4ea4cc87650f640581f",
            },
            reward: "0.01966158011289053720165838830092494",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xfc2cb559aa59e6c29ad243dba024833b1e149735-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xccd72bea12f3927063be3d8798a4b74082713cb5",
            },
            reward: "0.1628175552687078582046940581429515",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x049a615a01e115a4323e65c132851b0df5b5182b-19565",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf90db858c0697b34a5c400e3a12f30bb2c7dcb6d",
            },
            reward: "0.0276041953003403213426166642646917",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x7eb4951e8b4d13bd551616e617cf94aade909145-19565",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xb6462b67fe692223dffb61c8dc8ad080cba180cc",
            },
            reward: "0.03450522824651691288576119577288053",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x8539a3d18cab5e39538759d6d3c00e0faf75ea5d-19565",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.05855537233433920116713779421250116",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x919d51e658ccf344a816f70aef57e432d26781dc-19565",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x7092020d4c6c26f6e06ee1e8cb5b34f9d14341c7",
            },
            reward: "0.1035156847395507386572766897217907",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x9f00ccf7eaf33bde3fe055f4f5fa8c26414953f5-19565",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xc3b1f7ab9fabd729cdf9e90ea54ec447f9464269",
            },
            reward: "0.3065091593100355944068873495339468",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xbe95a322078a5bae5eadb0b6442974880d89e011-19565",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.01725273037200039849883093626990753",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xd38e65022d3912427e5522fd527cc261b038b272-19565",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xe520d9514a85d28fdcffc5092b58afdf64e8fbb4",
            },
            reward: "0.06901045649303382577151549394891017",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xd6398d422bc3ae37a09ea56c66e04b087733f69f-19565",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.3588935134316211682499400045948274",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xfd9af8d65a3bdfe2b31c7b0d8cdc5cf6cd6a04d0-19565",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xaf866405f474b84e893131dcaa34b51c90e51895",
            },
            reward: "0.024153659772561839020033871680544",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x0e5275ca7dc4bf97fc1a265948d37bb4c96c2cee-19565",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.03824277122078814241468476178409249",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x27192cfbe142d8067ec207ddc5f201b944b308e3-19565",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1239065787553535814235752033405782",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x34a0b597ec750bdf35044f33ac9e1b072b6baf37-19565",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1376739763948373126928626961085319",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xd54ab85d4525e2ad6593226f663949bb11f3f6cd-19565",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x051d091b254ecdbbb4eb8e6311b7939829380b27",
            },
            reward: "0.6879370475932284892255623543252955",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xec847b4317b7b076971a4d9ebb68370de88ee9f1-19565",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.01223962603579247424331498444150187",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x02da703f2ad773c23f13de85e4cb99b575d4f42c-19565",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x1dac73f3d00052d7e815b41e7b1b5cb241aa4d70",
            },
            reward: "0.00825381543296896260744138580281113",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x08a5433378862b6fc301d770b37bf7973acebd24-19565",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x92ec6e838dd90845d7d34dfaa82d6d00f66c8168",
            },
            reward: "0.006828121544215261789731601502222599",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x0d2807b752d53aa74ed99c89b98562118c444d22-19565",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xbdc88f7f9b16863c8709f97f872f4e6e16dd5f6e",
            },
            reward: "0.003386748285930769847707562275788723",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x4fed8be4cef8a73868bd45bfacea95bfb5aa70de-19565",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x2e3bd4e33281ec73b88233ab5f8b0e52a8d6f913",
            },
            reward: "0.002546889335992292647572108120699332",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x777460e2ace7b0a74c8d9ca968f104beecc76f7b-19565",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.009559387676516852025498224560268881",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xade0f7c5070b051bc78838f02ad3114027dd40f4-19565",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.9427953637019363401020998302108712",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xe11d019a01d47faf9ca8ac93749499b118f5abe0-19565",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.02662967402243952097994928752733815",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x1fdc3148c8380e60091ad58c52c42c6868c150eb-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.004413275223286517222365023730125974",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x2b928017cf8bd56a9a4dbcccbe4f0bae88cac00b-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.5146315212930341351071786509280813",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x5447a88b3be260be3d01c3af161b2f234f69fb70-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4a8df644eff45a5fe923cc4a2efec07614a1bfb7",
            },
            reward: "0.01544856087743020838824878839647086",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x8095abd47882bd9eded35cb273ab4e0ed1019c93-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf3e112e0c32e7a30da87517e98a22103ade76d01",
            },
            reward: "0.005046285481025898940145380954914338",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x898296ec830ca5291173f04fd70fdc158ecfa95c-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x1db91f586331d168e2da4c6bd73b689fb9f43516",
            },
            reward: "0.01675326865221886503461397090229123",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x90e115a069dfb68f752c6dd48450ef8b87a6919e-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x30be05fe3ed386b8d8afb327b03f50c9d97dcb85",
            },
            reward: "0.06767021313797374899690840235104287",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xb5f440f5a31b0496b3d456383825a4a5db9a8949-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.06767021313797374899837875876279294",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xec54688608916fb79455cabc3b6f9628e57063ab-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xccd72bea12f3927063be3d8798a4b74082713cb5",
            },
            reward: "0.3064540076987521863285805797284105",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xf2adbf6a1fcc9b1d89804ff6aa59669f6486c64f-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xdffd8bbf8dcaf236c4e009ff6013bfc98407b6c0",
            },
            reward: "0.001912654498304690983580444245870007",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x0e602ea998404154059a90878cdb571f52049e23-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x445bab4342fafcfee8baaec5bd7d6030770d4011",
            },
            reward: "0.01002402017238832381643093771237018",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1849d6a3b7e7c64f0b011f4263a598af9c5321a4-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6175e7a985caeac2db12fada99e626ebd6fe7bcc",
            },
            reward: "0.002024688211365798837994964946471593",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1b492bb36664d042c4e23456276cc91179b86e5f-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x33a74ed005785a83295d3ebe7e9fee647c3b4246",
            },
            reward: "0.002012033910044762594000603668151871",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x3298a83b2d3b7231771a18ba8a17078715cbcccb-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.02530860799461870802417081774257291",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x4311606cc02e6746d9d55e36d15aecbe2d263e83-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xff703ebb19c1a4e27ba14e8d7538fc113ca5f906",
            },
            reward: "0.00368986772220095802004302957714322",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x475308549bc8c8208c16e86cc5271e0c4795b616-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x83910f3e3e0064c15ff2fe043dd042855861d05d",
            },
            reward: "0.02530860922119453124293457510932138",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x4a4937a0fe899f3f5b05a9df320e2ad50a672099-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x915188a790dcdd06447244196694c9f8a7d2b4c0",
            },
            reward: "0.03163575330259060682517366044002743",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x4e0fa6a0150fe76e5ebeb6de07c3db2dbf07b181-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.003163588385451316536384878103714198",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x526b2133671787bbfed2de1ea0b806f6f81dc39d-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6b579bacffea19b002271d448a62b161f754401a",
            },
            reward: "0.005660522066925932099053162719637603",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x64f940e1c5f7e75eec2763420092e1e2c6228393-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x1db91f586331d168e2da4c6bd73b689fb9f43516",
            },
            reward: "0.02092514027580772155885792946556376",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6d9b3df93b5e49e3701950f81518200857eb8b07-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.1088269913609116874755112854445961",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6dd04d8cf38168ab9bb3076a53fe11604c846c1f-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x19865bbf18281ad5197ac06e45966dfd3e72a47f",
            },
            reward: "0.003922833409521235247429496708879019",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x818fe871c0f06a9b1e95887ffd3e232d1728fcd8-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.3908719926274070018844538443314029",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x99299a18d07ba4828bdca135f1b6c6ed13eca64f-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x5f0a0e3b30d304fba56e2eee3a442b0bb5c40275",
            },
            reward: "0.02487835905238944120729367558576258",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xa5c5994870fd0f1d3e06ea9a3ddeed1d3f2fd52e-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x3a762044a55802b57f12ed39d83dd1047d77b8f2",
            },
            reward: "0.002235572142880867823083141425275058",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xa6bcc97eb84b64c9cb66c42e68f6abc4cdb758a5-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xcb33844b365c53d3462271cee9b719b6fc8ba06a",
            },
            reward: "0.2606730150069728034652918614422762",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xaded6a47fd19a18363563dcc005c74cd5bebff42-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x25d9d6f36fb3773b98284624e2a58c0cb3c98cd4",
            },
            reward: "0.00506172052841449709435501349956048",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc51d2bf1798af65b1e3177d7de7bfc60c6428a97-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xa824dc3ae402dfd6a5de71c6fc30ff9e00411209",
            },
            reward: "0.004935177515204134665794580315496312",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc94b314d7421faccbbe89cb04e70542b1a325447-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x30be05fe3ed386b8d8afb327b03f50c9d97dcb85",
            },
            reward: "0.06074064634097396510316981413027463",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xf93b2208a5854fc3e85492c1503c43fa6bb7ec01-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x5c44368c0ad4c446842738bdbf8f2bbf9876546e",
            },
            reward: "0.008100860752735706478572727631502526",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x4bab58f19702caa5ba8a223da1a4f6a547f7184f-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x3f3429d28438cc14133966820b8a9ea61cf1d4f0",
            },
            reward: "0.3092664051467909243030518265327348",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x56c4f38f95355e86ee42033ad8aef733feaf40bd-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.09445467673889448622597098611134283",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x5f3e3ee5a0644d3b7aa1922767de8285facc9e0d-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xe520d9514a85d28fdcffc5092b58afdf64e8fbb4",
            },
            reward: "0.01062683567587431177612272327296284",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x69a4fa2c1d81b640a69b1f1ac22974578b64cc46-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.0000000005615869603524312382460850466621057",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x92a0aa27ad8572e125803ea0777af1885f25c9b9-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.009445474547734006994520283970386375",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x97bda93b2f4193a34819f418e50d007c6d80a0b7-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xbff78d2838243c9c6c18245d69e543a9ba6c2890",
            },
            reward: "0.5313417837937155888060193344003015",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xabb209661fb03f48f1174ed3b6c4a0a677298b61-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x42087c28f296d3b2dab56e3f5d1aca1388f2be5b",
            },
            reward: "0.0000000008685487840653033138431692343856404",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xd4373715a070bb95c5e7a066efeeade471c1372e-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.02833640302166834586779212189879162",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xdf8fd47da004c44237f6d61f12fbd2b4cc03fa98-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x521dea4e41d3582dffc931c4100d314d0a9f7ee4",
            },
            reward: "0.006494177357478746085408068646052285",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xe695153ee5688b3e75bd3c37ddf0bb39a869235a-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x23b83c2821d1e9fe5c40ce3c014d2420f2f1eeb7",
            },
            reward: "0.01003424228770784552338010307817339",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x1de001a02f1e5db163be5fe07dfceeaaed50af29-19565",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xd9da13de745bfa50ffaafd0a531b92f0511b72cf",
            },
            reward: "0.08217419615855422992634363193032226",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x2fa837f0ad17ea91a2991a608e68263491f2bfab-19565",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04725016279116868220765051435267707",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x69371c6efb2ab226fe8224f3abfe7abb6e80a9ba-19565",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.01438068587755703009817336678752164",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x745ee33177e31b12ce08d2b6256b4d0e351ff3a8-19565",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.7945642875102553456845167680642827",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xcd8cfc4784e971cd960baa91d266d0bd33755425-19565",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x0215c140840b896e1e371525d1f70cefbd09aafa",
            },
            reward: "0.0616306676624647120833157188651963",
          },
        ],
        earnDailyRewards: [
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x07ea5532ab74322c954aad2ecddeb4c82505a2ff-19565",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.06858632508963162109924338733335883",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x506ff697bb7f93f4eb09bccffb976416bbe38c52-19565",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x0f8c58edf65cbd972d175bfe481bc16fa8deee45",
            },
            reward: "0.5501824297625766043560278705199272",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xae9149de7b243d56bd9ce88329ecbb1177a2d5fa-19565",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x239168974aad75472b652046255050e50a0d5fc9",
            },
            reward: "0.3644842080233424902608621596921963",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xc75afc43dedb449e741f8005d76d5fa880a1cef9-19565",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x9599d89ed83e6db03d57c004f858ff82228604e4",
            },
            reward: "0.0137541210574846222739947984789508",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xdfaab0e92d3700c33a72fcdfbb90e349803561e8-19565",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xa968a0920bd35ad65f3bd78a934e45f020d6a1e3",
            },
            reward: "0.002992916066964662009871783975566903",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x1457f27c9ebbb7c5701f7e70839a8a5f477107bc-19565",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.03595630986843857431841634205002056",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x35e69e3fda9994dfb35bee5f7c48f16b65b9abb0-19565",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.4506740556998617762997481802961536",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x632a2770f96d7fd44702e00dcc355811f9b336d3-19565",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x157595f04c0da495d72ceb84390f444d469c3216",
            },
            reward: "0.06477958304133347711693625414606483",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x7d8fe7b235d862e3ce44dd499bb15ea25d7f352a-19565",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.3137679990056442398651348879483691",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xc581b9f298220a8293e7e399dae2dde88dbb1921-19565",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.1348220523847219323997643355593919",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x017a7ca1bfb339cbb6d6cecf3f787516975a7c3b-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x8f767dbe1af8fc0eb2655260f2a4768a3ad49bdc",
            },
            reward: "0.006150747916084546646253056595646979",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x05cfb65544eb5568b1438d94b2095fcea6b30b9d-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x1f5f902be1f635b30425b690aa9fd5fa2b6fa79c",
            },
            reward: "0.1230235458732054729630680434100025",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x06e7f912044524b49b2eb6b72c891e984d44e36d-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.123013327157575567857589954758323",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x098b98afa71f950ea862b4e0d91b183e7bc16b69-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x07a1f6fc89223c5ebd4e4ddae89ac97629856a0f",
            },
            reward: "0.006110250229260732819924386141810515",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x18877e98dcf273b46ae45dc90005b2de3dec4079-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x2757ae02f65db7ce8cf2b2261c58f07a0170e58e",
            },
            reward: "0.0006151177293660273648153402170500127",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x1aab626f725dfb8a1017ccb658ad308b71517346-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.0000000163050009089494889516150582846011",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x2abe8bfee84fcb968e2233c7307c9d1881e43157-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x47547895218274e121e4219a3fd23235377a9903",
            },
            reward: "0.01230198564485439852605868475573546",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x32dbb4885e665fcc2cb74fa2bc74f208d1b3a900-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xf7c7ca163ddfe69218377ab7086bdfc9a50f4e1e",
            },
            reward: "0.002460441568939241600880505130415598",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x3a71da5ea3dd8cbc10d3fe060c0669bc4eea2b12-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xac798df80b371569ec73e37124ffef7e26249667",
            },
            reward: "0.003444659284449753242965905215480071",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x54bba40e7f7b6cca98c0ce02095234aad54abe48-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.01230252924353539042458203113477327",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x57ccb41682e25faed21b3e992d6240e399ec9dcd-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x3e4dd7e5c37fe838eaffc89a551e1c311b7d14f8",
            },
            reward: "0.00123019804306051193988182389046015",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x5c4088920b657726013ae134737f6fee06e23216-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.00000009129430995789890545193498357603377",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x68c927dfc35367ab0909d4cf7386deeeb425d081-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xbdb7194a6f048f57e0bab51aaae0fb623615805b",
            },
            reward: "0.007381412752392328377784082604600152",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x73a2cff38d41ec035afa3038f4c6140ce69ba15c-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x5fcdc32dfc361a32e9d5ab9a384b890c62d0b8ac",
            },
            reward: "0.0003690706376196164188892041302300076",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x74c3f6f294b9825f98ca08816f2529fdf093d5bc-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x0745a468966c6be811dda6d1953fce2798efc1f1",
            },
            reward: "0.06148796788047627122251566803860143",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x829c190ec5468eeb29fa5621ca65a76aac2eaa44-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xa62d7ad2fddbad38a0aba25e40cdfe2edfa4d183",
            },
            reward: "0.01230157550177895633160073554305087",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x856926c82ba816e84bce9d7913de57c985cfbd61-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x3e4dd7e5c37fe838eaffc89a551e1c311b7d14f8",
            },
            reward: "0.01107178123407522770605724004084459",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x9b333d180d559797db6682e11e6e5e494b25fe5f-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xd50cbde55f8da4e8cf94f38deae2c722a5bd156b",
            },
            reward: "0.02411227495186071859481235591706963",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xbf5f2a7883572e0b23b387a848c417b9c31dd936-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xc24dc96768d7a96ca37aa3e65787f69afaf1a354",
            },
            reward: "0.01230147566584859853145508993776571",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xc3b5493dcaafdcb5fe6d627efd099dd0294ca4ad-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xc64844d9b3db280a6e46c1431e2229cd62dd2d69",
            },
            reward: "0.04141311725143459363438459164108151",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xc98d804cfacda3af5d07ca52f9c8137220f8f37e-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x4ea4309e5fcb06201ea54e0fb149de522138cdc7",
            },
            reward: "0.1230220201744534949926593181583895",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xcdac1a2879ae3b612a5667228e629ccc516a66c6-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.0000001161538544624088281425290929159267",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xd3696b74d9fdddce791bcb2c3eea1c137a0b8861-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xd9da13de745bfa50ffaafd0a531b92f0511b72cf",
            },
            reward: "0.1230405920821825778555701571057388",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xe7370c3a19a9676d142cc9641909afa0a888d215-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x5a1b8d6a57445deced8f816310fdb0aa6367cf10",
            },
            reward: "0.001615461958064148249003619626807219",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xf0afb9dea61d5bcaa96ea2f3ec1b074714a4531b-19565",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.2912302234663164954420256599269882",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x178ec3e0dca23e5c448b2ac7e4388592883a3d55-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x83910f3e3e0064c15ff2fe043dd042855861d05d",
            },
            reward: "0.000000119830124871521171065089360642155",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x17dc1526c6ff9cf0c702257775bfbab2385f6fae-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.01191629769648651385231949590681603",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x2815cb20c1063f27d6e5d04b6cd2904af5544bff-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xe793a7a7c7b7a4cefddb30f856b01f36e51b1b82",
            },
            reward: "0.0002383264136974290844421759020624549",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x2a6536e4edb891eba287e7d977421a6df8bb6dea-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xac798df80b371569ec73e37124ffef7e26249667",
            },
            reward: "0.004766519078594605540927798362726411",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x352cfc59b91088656ebaaab3b42febe1b45f868a-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xa4fd65694a9708c2d204bdf7acf8b9c09b105903",
            },
            reward: "0.003574889532146261794851910450615061",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x3ae3a0c9cc08cad459ef404f519072ec0b3ee71e-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.001194131091583262324327734539444578",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x3c21a1e9b544a56a450898b737a93b8220665e5a-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.01191636921924803953305356586979131",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x42474bffae9d0b4e9dc4e8ea48a5705eacdcb087-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xf44593dfae05bff213c876a8e1fdcc15a45964df",
            },
            reward: "0.01191629769648651385231949590681603",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x50cc056966b4f1eaef6157390940115d2a396188-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5d12aa6a6001fb326332c3801c6bd12449b6e44e",
            },
            reward: "0.000238281860087795572768153850540119",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x538112796335be43a765a5cde21f080c3296be64-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x915188a790dcdd06447244196694c9f8a7d2b4c0",
            },
            reward: "0.03574725801251967547071108376557146",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x5f070b42e7fb07786c606d7a162e36056bbfb3b5-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.002383178128019578996965238795386684",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x6030bec53dcf30ccdbced5f578befd80b9b10601-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x9578e8369369fa05e5f2fc8d80a234ad2f8608a8",
            },
            reward: "0.003574104553543082644009852959980391",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x6182164f9f39364908763e94adcc775a2931cb49-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xebe4d96a48c4d0659fadfcae5a132de3a5733374",
            },
            reward: "0.004766519078594605540927798362726411",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x650899474737713e9c247aea3aa777b3c2ed4964-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x7076106c13ca93805f2b16c52e64d3592d55457b",
            },
            reward: "0.00000005726168857319917090995937501452178",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x68ae6b8206610be3d862b4b26b1de35a058c965f-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xcdc8698745db38280d649fb9e7322d899c4a1bd0",
            },
            reward: "0.01191363196689288139349010555095752",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x6f09e208d0bcd35e1db162bed664f3848c7172b4-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x66a4f5d0b57d86bf1b9bfc63e991a9387791fdcd",
            },
            reward: "0.01906607631437842216371119345090564",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x8175279cef254dbf7d0d9cbfd193dd49bc1025d6-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x9cdbddf646a86ec987394c807defed498dbc7df4",
            },
            reward: "0.0002978413497666685426913993468156901",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x8c0ff2a44c53f823c703e83a75d287b37f5c9c12-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xe922bc2ad029b1efafc3eb3ff776219c3dfbb625",
            },
            reward: "0.005958148848243256926159747953408014",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x97f5ea81f39cb9a1d68366503dd282a8c0ba6d29-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.00000004468566386102506484759904757113391",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x98296fae90b58a3db28e7fdca20c96663043750c-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xb92a1d5c73a69a0d72820f6f6221c5a81edb7cc0",
            },
            reward: "0.005958148848243256926159747953408014",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x9b90a6e571e286bd10e4f5ef3d428cd89b911740-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.02383259539297302770463899181363206",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa5af820995e5383bfaeb7c6ba22f3eb55e35f768-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xb0d6ae7784a9f20c1e34218998f0fc5c24972441",
            },
            reward: "0.01191273964234542518952335954576566",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa641456aa2378540e3be55a2473ac8065170db51-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x9730299b10a30bdbaf81815c99b4657c685314ab",
            },
            reward: "0.0005958148848243256926159747953408014",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa64d42e8b130f306b8b8add558a095cdec8b8dee-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5e4568c4d8343052a06ec8aab1e124af08b73248",
            },
            reward: "0.0002979074424121628463079873976704007",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xab9c5fef3a48d4b8501b9e226589df4d81b08401-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.007149368389905025852616667060441445",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xb20f0e2b013655346c6d9c54b16decb7b934fc91-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.6094834816200600909831294159813127",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xb4b84f7205667c6f696add26462d51ba4305bc18-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x7f8c24d538c695262afc1408ad4217967da1623a",
            },
            reward: "0.03097340123176034705311432183347793",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xbafacc6f392410d2d47cb9ca25541e17fd4badc9-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xce27fa2d00b91c9486e3545c75cd7df86d4e3632",
            },
            reward: "0.002430811610704930254329015318880722",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xbc3f05481a54a949ebe764d095da703e9ac96c44-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x70e439584ef1ba300106b9c16543eaa1de676dc2",
            },
            reward: "0.02740206382117727559549943215040298",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xbd431752a75950788fe689d49d970f95a1732581-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xeb434da562e7a8ba045472fd1e134b420771ef7a",
            },
            reward: "0.02382822495534808216232188779434116",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xcd4d1da85c2894148772d088e14e226cc9580af0-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x3ac7084e8ce0757261b79f87a8e417d2df3d24d3",
            },
            reward: "0.05957977442975324009729356296720945",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xe316409d3df47accfdbf20c7cc12ea0a9fc1cb87-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.002740748470191898186033484058567686",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xe5766c80dea6a9b873d56f7149db185e8ab919ba-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x1dac73f3d00052d7e815b41e7b1b5cb241aa4d70",
            },
            reward: "0.001191629769648651385231949590681603",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xf00e853ed9216008355c3ef0843a7b20d3fde16c-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.02740630378342681953514214039607232",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xf073cde213b7a6da101ed7e20ee6e5e9a9973b07-19565",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xe1e2a52a21226ba37f28ba6cdf59f20156798f94",
            },
            reward: "0.03574889308945954155695848772044808",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x03431c179e431c9785cf82d0ea2729b9561ae76b-19565",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xef764bac8a438e7e498c2e5fccf0f174c3e3f8db",
            },
            reward: "0.421410344392391144411603534872845",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x0dbaa1361088a250de5a893bd2efbd3e24545ec8-19565",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xba842b7da417ba762d75e8f99e11c2980a8f8051",
            },
            reward: "0.003370529132413354825108064766378183",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x10119b4fc928a31ab4fd764f743e871f02797446-19565",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xb6462b67fe692223dffb61c8dc8ad080cba180cc",
            },
            reward: "0.028094022959492742960773568991523",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x13927d76c5a2c5985b25f4c0678d489f04126544-19565",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x59653fd9713a30c54237a6fd21fd97ba141abbe0",
            },
            reward: "0.005534549218783677807094637847941955",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x15eafdb60976e7d22c0ad6c77f05dc64db78f79c-19565",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x296e0c21db4061ebf971e55d5db85011e7ff9797",
            },
            reward: "0.01404545719505521983525280581458882",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x3910239862b50a5915d49b05c94d97b89265f055-19565",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x7ab29b393aad63e7119c004bb45eefeaa3e70da5",
            },
            reward: "0.002790860240796009085723246343617895",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x575879fa71ba697042e973be663758b06f63765e-19565",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x318e3835baa3f83ca734d9afb9996f702aa06a3d",
            },
            reward: "0.02775697469574914219038840657632792",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x6844a1d7903f14fba8c12a705577617a11a4ab93-19565",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x7092020d4c6c26f6e06ee1e8cb5b34f9d14341c7",
            },
            reward: "0.08428006690884675466549434924592864",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x71b4201c1f312f4f04be8be7b02e0ed224d784fb-19565",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.0140470114797463714803867844957615",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x77f66e4a6383893ecaf0803e52fa1e8b60d43fe9-19565",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xeefd6537adbda7b1a9da3f6607dda26b048489c2",
            },
            reward: "0.002870504263617164669032725353375788",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x92a95ea3d6c5b81fe85d704203ec1c19e3266a10-19565",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.0540054934825297949359913770438524",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xadbf773d6cb8373d64861c7ae4b02aacfbe2ba76-19565",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x37e1881f05f33f71e43bb8f284e0ed53e26520d0",
            },
            reward: "0.028094022959492742960773568991523",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xcef1a9a0dd2cdd92b5669f6b220799104efa865e-19565",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf71d161fdc3895f21612d79f15aa819b7a3d296a",
            },
            reward: "0.3137001630710858801723769296563359",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x0e3f1e786b42465ca7d68fede5389bfca714db42-19565",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xf1a1602c90d8e510bc583eabb53667e3afae4b52",
            },
            reward: "0.001520692011188938115711574989330543",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x0f3436efa3097f960a27b50e673db0b7de765577-19565",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.00000001493414597871352188008296620198465",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x1444e8c66fd6bc37262f26a33bc217b3e0403ab6-19565",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.3041442214728787667843384620799781",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x2643d4f4ffc86ee595c0d8a68a27bef82eab85e4-19565",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x20eadfcaf91bd98674ff8fc341d148e1731576a4",
            },
            reward: "0.1368667826316913976227411905793081",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x281a602477c5b328fcef497e47bb4a4a6b963614-19565",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x58e03d622a88b4012ee0a97235c6b110077fb867",
            },
            reward: "0.007603698519038412524184976563945292",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x2b947350d8e4a4aa1173ee0e4655b33fc8ba55ad-19565",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xde055950ccaaf115c8d76b33e6503ee403875ccb",
            },
            reward: "0.0009121625335546255115213698802237361",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x48a19d4eb3553a476ad6218e0625b606be7bc4fa-19565",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x4fd0ff2c49671d4fe1927371cf833e8b3b7f44ea",
            },
            reward: "0.000000004912245420233350759015591310706247",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x51a1f69f45791b8e5484dd9d526199d9f29223fa-19565",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x6b32080f61ce43bfdc37b6629706dae405d22389",
            },
            reward: "0.01520666855629376930844142263892858",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x5d63b70786f582eb96ab006a4e51f3b930e29e51-19565",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.01520742029241015529141568784214535",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x5dcf7edd434cb7f8b255b5d913783792e41b03d1-19565",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.000000005424644402337380153280238429687966",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x61a5471a19fcceb07ed651ea402a149ebd6fb0d1-19565",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1368667826316913976227411905793081",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x73933d5e77222f5987cfe3612eebbc88b7833c57-19565",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xdb10d21f28a34fd04e4425eac777483798f7e217",
            },
            reward: "0.005320010239552487834806597891745776",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xa0af774d47a46f8958b5289e21b1cb6210a62f62-19565",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x859e1dfb430a7156faef11947f2fc2a3c34b733a",
            },
            reward: "0.01216593623392812423313255027371628",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xa3fb5786e157d6b2618859b1921f8b71d4f5eedd-19565",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.0380179134861128857342270368434681",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xbfdfc5e00155cd27b8cc4cf7ab4cf5551b54a8f7-19565",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xb225bf7e4f1da339195972ca7e4a1d9ff52156ce",
            },
            reward: "0.007603710146205077645707843921072673",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xcfab8ff364d67af18cbec98b8d47398d503e4a0f-19565",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.00000001017385321376944663618362191289478",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xd29bc9af132fe09f0a6a342d6a5c27e12baaa14f-19565",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1429497507486554597393074657161662",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xdf2dba82533627d6688efe2e467a76099576a9e3-19565",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.0001520742029241015529141568784214535",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xf7e4255bea7efa35c7c9253a2cfbb2ee3ccef378-19565",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x4ea4309e5fcb06201ea54e0fb149de522138cdc7",
            },
            reward: "0.1754621408489853854251090447598238",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x17e337bac18fb13ee3b547a44c15cd77561ff594-19565",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.05366374172633895492526655291163334",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x2abdda4c66bc2156f81f7056bc87a904017bdad2-19565",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.0000007727971595978882965236681931649326",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x4c19b8a92d319ff5261a4f8621c897e8d9c36e0f-19565",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x37e1881f05f33f71e43bb8f284e0ed53e26520d0",
            },
            reward: "0.01341610596852786539535587034009239",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x4c29c31161b6313b716e36402a3d56f6e4a4964e-19565",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x5b191f5a2b4a867c4ed71858daccc51fc59c69c0",
            },
            reward: "0.0134499466836477166338396184939047",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x52448305da311c4a308ed72c7fb0134248abf373-19565",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x3f3429d28438cc14133966820b8a9ea61cf1d4f0",
            },
            reward: "0.1341599165172057287320461310490566",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x540b46c36557d3212e06e37182e5296bb486323c-19565",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x4adf9b737ab9c97f5728cbcf143483cf6c2f7df3",
            },
            reward: "0.006707730457458303241160182580751843",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x64943f1ac7b541c3b6bdf45464c9b4093e4a7fab-19565",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.006708052984263932697677935170046195",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x7602834c716948c438b9729fe0384b3aec52b3eb-19565",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xef764bac8a438e7e498c2e5fccf0f174c3e3f8db",
            },
            reward: "0.2012030230671015698017829243210895",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xa121d81b6b83075ad0ee5d4a35087af262712173-19565",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xf9f668901a13b2c817a9cc9d7fed50868b7af8be",
            },
            reward: "0.017099980842002057842805057353297",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xa988e47d6c2549c485ee612cb0d0dfced04b4eb1-19565",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.4695493580616359845647510318150738",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xb756db88231a365c7be83adb959cc6d3e2218ec7-19565",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x7139a445ecc1a597695cc9a077caaa41e0f18391",
            },
            reward: "0.0000000145125572791679269377367112713396",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xbf62dc76e06555ffadf4c7cd7353b055a6d09e52-19565",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x3cf08d6a9436a1798c18d24a70f5ad0bea31775e",
            },
            reward: "0.01341615655384131666915870826487826",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xc0558bcec4725c038256174fac0c1921fb145afa-19565",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xe3db0df6a4a62106a3dd5cef76c196a53f3e7e4d",
            },
            reward: "0.0134015842990236526406223146578263",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xd29721fd44d8e4cd02bae1453e40b2d72276859b-19565",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.004902164014391426264217362851147833",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xda2035f6b3d6618bbf5fc591b25b49b6ab175d39-19565",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.02012402493127807169029049557180241",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xf051ffec03e1842939c2fe40c1a8623da624b220-19565",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x6b32080f61ce43bfdc37b6629706dae405d22389",
            },
            reward: "0.00000005009303810212380774479938197272389",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xf220126d67557ff209c921f4d2744f85b218b664-19565",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.03219737649052843972099460841511336",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x065af1d2579d2896c87d1072bcecb64f70dbcc52-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x6bdc44c885b166aeb687f2d247e419f5a19e1804",
            },
            reward: "0.000000126903258362215891038752345971326",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x0ab511f268ecb706b956e0a6bb99f9268282e3dd-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x3ac7084e8ce0757261b79f87a8e417d2df3d24d3",
            },
            reward: "0.07345549326616119833916946514028824",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x0c0e979e5d699e51f4707527e3b4a1576406270b-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x7076106c13ca93805f2b16c52e64d3592d55457b",
            },
            reward: "0.01057759103032721256084040298020151",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x0c7a5ef0532c0e1b8b4984ee4e4e19283f2cf7cc-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x2068d14ee50772dd6e89c6f64f32adad0cc936ef",
            },
            reward: "0.008079735520876990967392166826295239",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x118954ab01883c2c245d7a9b737df80e8c4afbfe-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.004407649743879130709461095095943192",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x16d559ee5ca6f8f14c15ebd511809722f4b87702-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.01469153676594514457467794036265463",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x2b4f1f53c4bbf3fa77e2a7faf1cfc063f7c21523-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x1a918a8386f75f382e2a1b2e10b807c39728caf2",
            },
            reward: "0.00368741718574051196696436329221948",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x4820233ad8d7bb201f9462d242922d28926bc642-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x28af2a3c28b7ecf7d84a8ba0fddf7525a88e1f61",
            },
            reward: "0.004406747145598795090502576304241337",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x4f1122cc1723e5d60cc11c68be19972b8e3be8d1-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x7bfee91193d9df2ac0bfe90191d40f23c773c060",
            },
            reward: "0.0176286738271352241418441003603646",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x5ef7d0933cfb377f11f125ba0d74812c18f35520-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf9f061d9a5f04e223ed3c560e03a8ab0a70cc1c4",
            },
            reward: "0.02203664797984835950175083954208647",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x5f38bd14ffcf23f0f8b6ad90f3dfcd15077e2b8f-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x66a4f5d0b57d86bf1b9bfc63e991a9387791fdcd",
            },
            reward: "0.01175162961372524627295930660165746",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x6ffcd46a8194ec8d3617f3bee62334de71967033-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xe1e2a52a21226ba37f28ba6cdf59f20156798f94",
            },
            reward: "0.04407338948379609891149678829287644",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xab4632810f9b93eccc993fe804f9da57875649fe-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xdb10d21f28a34fd04e4425eac777483798f7e217",
            },
            reward: "0.002056069139447182971986092302356944",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xaee5b0711b31a7954406b40f2dbc079b2d6fb65f-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xab12253171a0d73df64b115cd43fe0a32feb9daa",
            },
            reward: "0.002791520484204719509342840405775894",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xb9134373f544527d15ce3cdd8cb1f78d72acf42a-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.03011675223912609131905948070751818",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xe60d6cc634782add49132dea0a70b0b014fd0500-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xd790a1516f78e3fb52338084b5c5931a75bb19cf",
            },
            reward: "0.0014693756706328386065255934134571",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xec6224e36c67b54e3daaa968cd1cff6781e003ac-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.7345195501421326697514476050621446",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xeedff03dd73862e59f5c48792ac9bd241ecd11dd-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.00000006295701074019518049931406703137208",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xfa16a59a3458e5008041109c2add292d9886c606-19565",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xd46c81245a0582891c2249daf2d68925977cf2a7",
            },
            reward: "0.01425003090115348239350780524350569",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x08a27f3ee826ef49d1673846416179c3584671f6-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xe793a7a7c7b7a4cefddb30f856b01f36e51b1b82",
            },
            reward: "0.0003705254117506218125439820163633309",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x0a3fe5d178018541441c6aa935d7804855cc053b-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x7eb12f04effc4901d7520e4ebd62de512743feca",
            },
            reward: "0.006572541577327796802453242409173069",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x0b03f8ac3ff960b3db43a3f549fe0c98bd0c6102-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf3e112e0c32e7a30da87517e98a22103ade76d01",
            },
            reward: "0.003717636325327604991492621162686196",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x12b9aadce493ff66d34298e3b5b86fcea8be8290-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6bdc44c885b166aeb687f2d247e419f5a19e1804",
            },
            reward: "0.00000005106707152081378403310233849434972",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1a87b773bbcf7dc73acb99d450acdcce534acfc5-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x43930ff04d18a5b59805151c1eb403c55870641e",
            },
            reward: "0.001075324859966249109710524063677967",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1af10c87e3083e47c88a81cb4c60542e82f47cb7-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x28af2a3c28b7ecf7d84a8ba0fddf7525a88e1f61",
            },
            reward: "0.003705265945542159008797097480954619",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1affd8e82ddc8ab62c34600edfe946ccc777e744-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.006175296982670567240400267793308504",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x359851db2b044d931b7d81169f5148a3237a8775-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xe1e2a52a21226ba37f28ba6cdf59f20156798f94",
            },
            reward: "0.03705102155918151257332130713279947",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x3f02c2c037b9a1bc72c086d257742da420801529-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x890d3b7e8cd72ddfe6288187bb6b87118c296a75",
            },
            reward: "0.008365742189156437344214214319692086",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x49677b6f91c52edb792c4568141a120920454277-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf9107317b0ff77ed5b7adea15e50514a3564002b",
            },
            reward: "0.0006422262852329593750829215671115773",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x542bb88299feff0b6a4f5a38f26c821647d43791-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xecc0da4bf963c23e9ec9740b1f06cb192c5195a1",
            },
            reward: "0.01234779214550074533130757826561151",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x5be1d28851c974f57731a63cfb44e75cb8016ff5-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x000f4432a40560bbff1b581a8b7aded8dab80026",
            },
            reward: "0.004322801954349341902851887105766371",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x637cae3aa6685b8e11af2a96983c7db86ba4e593-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.002964228299264535541389465378886003",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6d09db5cb9b73168bee7f041a92e9d5b1ecba6ae-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.01160536091337302503833199098287186",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6e81c8661e47fb8a97a2aac6165163556cf1b246-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.01235110669290940117747089201647741",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6ed53aec4ef64ff50a365378b6c185ae1305b681-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x56cfcaa14c2d63fef909e335733de4c6330306a7",
            },
            reward: "0.002470158010445215424517572189699567",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x7086d16f120ae26a4538b9d9d197da2c557a9ce0-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x3ac7084e8ce0757261b79f87a8e417d2df3d24d3",
            },
            reward: "0.06175308859536811364760546693435685",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x725fb45f9b24a54a9ca9247e102b9bedb9317abd-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xa824dc3ae402dfd6a5de71c6fc30ff9e00411209",
            },
            reward: "0.004939302501385470456062041229092623",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x7abdd8d610b791d2d55328acc5401edb26a4fb48-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x5f55980eaf5131f9fd487e1177cacb18d7609a21",
            },
            reward: "0.001876416453399360559046541209484609",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x7ae562345f402240f98b0e6f685dc3a50d4e6e4f-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x32cd06a20b528bced096945d6d165a61e75ccd2a",
            },
            reward: "0.01210195400366585739284795115439451",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x844ae5515519fce2ad9d6e1f588311066582a02b-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x429af9695a3936e2f22d05694775d12237f2723a",
            },
            reward: "0.00000005573802101721327007043304777351409",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x863d0124ad1eaa0d9d7cc4c1c1d15784d85c43c7-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x7076106c13ca93805f2b16c52e64d3592d55457b",
            },
            reward: "0.0000001055620647050715412321133946937683",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x8ea11e4b6507fc26e7e719f945ab750c94ed97f1-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x8522885d735f75b3faeea5cd39ab3d1291da2c77",
            },
            reward: "0.006174012541475896907445698475367468",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x92fad0c6a4d94ae419d4892f1e9814d9f7102301-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xd8fd1ad0da93d380c96b9de5f0b6624b03b7963a",
            },
            reward: "0.01195121377474875507341952692895672",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x9b9d6bd6eb6589f6f94d417a8385d8e926f8bd49-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4677b560974508e69f3611ccdef6c77af0509a47",
            },
            reward: "0.001234895520640479727238962410795548",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xb145acf3b9b16e91237785c4153318e0b50ea323-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xe1e2a52a21226ba37f28ba6cdf59f20156798f94",
            },
            reward: "0.006175171086471876729515025171119055",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc14673d36d6d073750125205b0171c2f7a9da115-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x83910f3e3e0064c15ff2fe043dd042855861d05d",
            },
            reward: "0.00455515555939504027836234253699582",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc4269d8cd43bced5b1e70df5cb4c454bfdf1d106-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x88a72a5b05cc9150a5e96d01d2eb794b98bdbfb9",
            },
            reward: "0.002449929111930842836916436269527747",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc6559e3789e904ca291f914d6857770a9dad2e25-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x3cf08d6a9436a1798c18d24a70f5ad0bea31775e",
            },
            reward: "0.01234831571230941925637496954210785",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc971308c20683f84d1e900a3e9e894651141f58d-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xb92a1d5c73a69a0d72820f6f6221c5a81edb7cc0",
            },
            reward: "0.006175163735784037362349824467748751",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xd84bfc499f039a5fa9e672cfc8619df5ec17f6b1-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.7408485138603651341860431186471677",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xdeff80691cc0331a7a2552e4ae0805b3507c2160-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xab12253171a0d73df64b115cd43fe0a32feb9daa",
            },
            reward: "0.00123507902789159771075945147968956",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xe286be5acaabea88d2f971892fd34e68fee3f8b5-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x1a918a8386f75f382e2a1b2e10b807c39728caf2",
            },
            reward: "0.0008365053246152539950282673750739506",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xe9bfa6621aa45febfbef539f9111399d33045677-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x771991fc8ce57682775ee73bb28b201f4016b090",
            },
            reward: "0.00617465712515897119721806416254079",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xec53a9b324680840fc6bdbc4d9e2a79a74d6c5bc-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xfa88c88f68fc7a66ccd512a34f7686fded60caf4",
            },
            reward: "0.002469033312537363606583458114079782",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xf09f4bd513f3245da1a22ddaa697f50cf0636276-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x1a918a8386f75f382e2a1b2e10b807c39728caf2",
            },
            reward: "0.0000001245550437695463598695202076900573",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xf931f5500021004c982c544fc470b6ac7efc7ed2-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x0dbc9a65c6fec050eeed9508a707ea4aa0aca4b9",
            },
            reward: "0.0001235078918621638645105138493334152",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xfd7e7d55d35161010a84ab8861796f43af2be503-19565",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.002840718786795179893831570988099086",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x119df0abcef03b4583156edc0eb8fa0c2943d938-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x3cf08d6a9436a1798c18d24a70f5ad0bea31775e",
            },
            reward: "0.009817118669636376328524778814951963",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x194d3864cdc46df1b8c03430c3c774c239b09cb8-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.4932987160059932003138023595351812",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x2410dde3c75a6294ffe6256ed9d64ebf5cd0bb2b-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x7bfee91193d9df2ac0bfe90191d40f23c773c060",
            },
            reward: "0.05279942253648208421867270335460642",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x28ac0e552679f1d79931abfdffbde7a41b3dcb0f-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.0000001027465148024108961330978291500543",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x44edd23e02c2fb360b09a26ca426283c6e27646c-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.0000001030919348363451107156381300494911",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x5893230d361de544a601fc75c7adc079a746dc29-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x296e0c21db4061ebf971e55d5db85011e7ff9797",
            },
            reward: "0.007401076179127278325184811273408439",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x5f19d66d8a4767a0aaf0ba2bb159f108cc0cbae5-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x37e1881f05f33f71e43bb8f284e0ed53e26520d0",
            },
            reward: "0.01057296597018182617883544467629777",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x65044baa1adf7b8db36b9fbd50ea9cf077afa0b7-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xef764bac8a438e7e498c2e5fccf0f174c3e3f8db",
            },
            reward: "0.1548826424428620206091036376745901",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x6e6b04be1bf327175605e243c82b81cc394811ca-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.02061652697470894101734373306420095",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x6ebe0f8884617fe1041ef3086a2b0b8b37cefeb7-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.0001057248944955750794567127362389721",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x73ea7f5feb14c57e44db56b2c49f289d2ae8cac2-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x4938a9a48139ffc440a07695eec11096f8146350",
            },
            reward: "0.005663094576924501212868053812629635",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x7805f6b40bf00011590b72bf3108d801bf7ea495-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x859e1dfb430a7156faef11947f2fc2a3c34b733a",
            },
            reward: "0.01224844416647745848484641798467878",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x78c0cb647acbc34604d96e91733eeec0865adcf4-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x486cd431523e776cf5cd074deecd7bdf29595f8c",
            },
            reward: "0.1057296597018182617883544467629777",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x796e892136842863b01d707e98ebed7b537e766e-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.005286482985090913089417722338148885",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x7f223a526bd08a59d47bb50c5860d882057d9ddf-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.000000007507033529554294712166147871766348",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x9ab69bede4cfe053b476391701e4f796f1b9a1c0-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x97836f9fc0fa0bd02fa5ddcc0194c78dc5217226",
            },
            reward: "0.01057065760145271008100706011084045",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x9fd4048078144ce72710d71d40adbd177875cf52-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x49543e53d159dd5c9d5e232556cfc2781a2d5044",
            },
            reward: "0.005286096518236848309563916073698945",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xd1d59fd62f91d22bbc39aea59ba97049f6a19e8a-19565",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x3f3429d28438cc14133966820b8a9ea61cf1d4f0",
            },
            reward: "0.1057211574310288366527166408854427",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x0779608cef74b957ec268103395e106219c70ea6-19565",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.01780141765684557438364400577133251",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x0893df19a2b08d98c07436b575b2a8bd650800e5-19565",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xd8fd1ad0da93d380c96b9de5f0b6624b03b7963a",
            },
            reward: "0.0009559608920496397128232030629193256",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x1546df38aad7928db0fa9e9e944b520a36720475-19565",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04524891211111340776647775845350152",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x238f85fc2dfa0c0e8451ee020ac98c233c18574e-19565",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x330e75e1f48b1ee968197cc870511665a4a5a832",
            },
            reward: "0.0000003610684956186484659619672388545772",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x349a20e92ad725f665ce7813a89952978d278ba5-19565",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xd790a1516f78e3fb52338084b5c5931a75bb19cf",
            },
            reward: "0.05224135176572552533010166631855233",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x4339d258b2b5872295b9bb02dc0b9f8c6ede3d48-19565",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.05912522960371786569669092611852628",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x4c0c6ba26e49bd0f2797096f8c5c6849812086b8-19565",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xeefd6537adbda7b1a9da3f6607dda26b048489c2",
            },
            reward: "0.005823245156541859927097752547721904",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x6f839a2ccba3a988eb4657e985c3eee6de487299-19565",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xf71181c9f91f85149d629f37b8c27afca0fd5ea1",
            },
            reward: "0.003556119122092546132161206583503708",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x804ce22ef01f41d63b2a34cb38ff84045f4ed876-19565",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x58e03d622a88b4012ee0a97235c6b110077fb867",
            },
            reward: "0.003547215547341945612368966501170952",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x9002145f2e70a9613113d39176dd663bb6c0f74d-19565",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x25d9d6f36fb3773b98284624e2a58c0cb3c98cd4",
            },
            reward: "0.01055562440116988859758208207555301",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x94f28f7ce31b5562e76a2a4cf4dea36240baec77-19565",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.02165963944100243215516642177700889",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xa6aa2940672cfb631e46ac00a9d31a77a3905b0b-19565",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.6897897819648051388474579609064511",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xa9a8894685c73b14a5ba6e16f82dccd4765195fc-19565",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04926964468669944934908774373970694",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xc76f1f036fdb749674e681762460065ca3671196-19565",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.00000008331132951366804778352050886458793",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xcda0f5a2a1d406029c648a3b97e1e1eac102c59b-19565",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xa4d4448f2328889d79015975a7b4de27649e1ff6",
            },
            reward: "0.001970847101228178207509124596618811",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xce0c79c6c04068a9de6bef5699f12a1cde7df01e-19565",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x50a708e5dfe836601931af3ff6169e5f4e5536ea",
            },
            reward: "0.001625943814102241306659000468259473",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xdfb0b97cef06f2752ab694b8330bd58425435637-19565",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x859e1dfb430a7156faef11947f2fc2a3c34b733a",
            },
            reward: "0.01576672789432476418578424696494034",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xef933fcbfb127d6cf939dea520193c56f43d7e62-19565",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xba842b7da417ba762d75e8f99e11c2980a8f8051",
            },
            reward: "0.001355522110940396197378500131986136",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xf0a5387b9ab9f429fd5b57e1df3f28248b9ae6b6-19565",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xba4074ca3e68095d9a490008fcb68e9ab205636a",
            },
            reward: "0.01970637235047401427549568849449904",
          },
        ],
        week: {
          id: "2795",
        },
      },
      {
        id: "19566",
        borrowDailyRewards: [
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x12c260e672bd8321f6ab246b81a0b7185f3a6d80-19566",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.06530554508446352331874567980358748",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x1e6ee615adb41d8f07bdcf34889dab849d8a4130-19566",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x11d67fa925877813b744abc0917900c2b1d6eb81",
            },
            reward: "0.04267705142885745427139462671074005",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x38ea3693640452756c2ee9a22e607e4c4e0d3f3b-19566",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.553328308840142818828242804018745",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x58667459ee28b008dccade72cd081d9df7263ec6-19566",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.01814070665694891716142242959441356",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xb96f4a285179cd96ee8665bcb7793cb1f19dd4d0-19566",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x6bdc44c885b166aeb687f2d247e419f5a19e1804",
            },
            reward: "0.001078675016792650581731661814781596",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xd16335a50ef275b4b3e691e01a52feae6e25c2d8-19566",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x157595f04c0da495d72ceb84390f444d469c3216",
            },
            reward: "0.04083272061241693633608221580823849",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xd9f7d5fb4aac74b72125e3b4426c8f246d3e9072-19566",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x14bdfda5b5b829f14332a52c15129386284ce36a",
            },
            reward: "0.006530554508446352331874567980358748",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xf6a4062cfd0bee1c12c43b6ea0de7227bed3fd6e-19566",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.2721064378519313471705060142691351",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x011293f0e159739c559493fbdae20cd590c664bc-19566",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x6bdc44c885b166aeb687f2d247e419f5a19e1804",
            },
            reward: "0.02412655328524987231045660994427682",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x01dc26b7ccbd2b007da34e720abeae02b99be553-19566",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.09094833986799152771526304980632171",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x177de1a4f8787f49ef20ec28605c3d9bdea497f0-19566",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x4fd0ff2c49671d4fe1927371cf833e8b3b7f44ea",
            },
            reward: "0.04396667836869702698388814182551307",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x1d63e226a1b3a514bd384b9e9d596071fc8076a7-19566",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.3779952404987710440805419352363513",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x2190842ddf2994c986e08045c02442071b774123-19566",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x53fe1b209c917eeeb996720fe5418572bc0e836c",
            },
            reward: "0.08976719259697865097112572556545066",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x31095e235e45c38ca1657e9798a7aef08cf929fa-19566",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.06307326764503306127146903252343217",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x6e407de25e1c9fd004768a5ca3d6a06b3d5da390-19566",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x4fd0ff2c49671d4fe1927371cf833e8b3b7f44ea",
            },
            reward: "0.0290089769760762588710200291007475",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x9831f3c9511332a83951e735aeaf9a37e000ed39-19566",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.03779735923472228077579556745944631",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x9fcc001800f9c040dcba47ad4840cc49d146c5c7-19566",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x42b2e881b164e4c283fb7b7e15b35cd256209133",
            },
            reward: "0.04960818538254083340655775375950445",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xb74d9b73d63931b029e1dbec784e05dee38c24d5-19566",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.1417376725215452378659581278066972",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xcfb80b3d81c85f401bf139288ae323fe2eff7a88-19566",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x7c0b689a3003e0dbd2d37ce15e8a2273d91bd7f6",
            },
            reward: "0.03070982904633480148646679134906425",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xe7b42d1a36d567d5314f3c990fcd178c556d37e7-19566",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xbdc88f7f9b16863c8709f97f872f4e6e16dd5f6e",
            },
            reward: "0.02126070457605940426145723562319453",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x0115f90c7f562b85444e5c48a277078437d06de4-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x4dc7970c0facd251e4398f706c45f3af877d029b",
            },
            reward: "0.003290492899334851498947856014860252",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x15990263fbf6f475d193ed629db99efd530c0d2c-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x25d9d6f36fb3773b98284624e2a58c0cb3c98cd4",
            },
            reward: "0.01265574192051865961133070731197265",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x1ede520dea27d98bc8d16df2d363c275d7b3dcf1-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x6b32080f61ce43bfdc37b6629706dae405d22389",
            },
            reward: "0.02531148384103731922265888474050292",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x225e341a7dfdfbd49924b5dbb08f531781d0f7af-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.2328691018876659250512397629267368",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x2a07081522d2de69c7566cac45edfda9edf73236-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x1ef678435e3a1581732171df82476995cc041568",
            },
            reward: "0.001994041702839901477420992494649512",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x3363aca0a6bd542d146408246b5d1e3743b977d6-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x1f5f902be1f635b30425b690aa9fd5fa2b6fa79c",
            },
            reward: "0.2024918707282985537812533687399267",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x349a20e92ad725f665ce7813a89952978d278ba5-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xd790a1516f78e3fb52338084b5c5931a75bb19cf",
            },
            reward: "0.06960658056285262786230750574035885",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x3ff988fd12069b3f3bce22fa68a2ee5cb1278e57-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x0658b634aae5e7dbfa7510d6940ffd497df06727",
            },
            reward: "0.002314460914176125877093309307672555",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x40455c3ede1e00771066dcc38777fba73f8d4f64-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x73d31581106e3f6b9dd2579e8d9fec81eba22296",
            },
            reward: "0.00506229676820746384453380085485449",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x48d94176dc8a2169eef1b464e4c857c3080f001f-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x20eadfcaf91bd98674ff8fc341d148e1731576a4",
            },
            reward: "0.2531186025422688594476254094844547",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x51319451698f1c7357dcfd7d833803e6c7315209-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.05062296768207463844531270971412107",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x5bbbeee4878868bd8b15d819ac6d082e4227aafd-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xbdb7194a6f048f57e0bab51aaae0fb623615805b",
            },
            reward: "0.0151868903046223915335963427976787",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x65f335e81b687f8389d9245795885e10588492e2-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x07a1f6fc89223c5ebd4e4ddae89ac97629856a0f",
            },
            reward: "0.007137902380120567872132971477236083",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xa0c64805faea968e6d690f160c2ef8ae9a7dfb3d-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x0183d9be08db4024c2dc9aec10b9526fc6adeef7",
            },
            reward: "0.003796722576155597883400983112001463",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xacdd7f08f9d2b64bf7451171195e7c0dd7a887a2-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xac798df80b371569ec73e37124ffef7e26249667",
            },
            reward: "0.007087215475490449382346309243419332",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xaea1f7431c8d8bee7d6a74e4942a1d509166c849-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x8f767dbe1af8fc0eb2655260f2a4768a3ad49bdc",
            },
            reward: "0.01265574192051865961132817742853027",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xb4f7667c4aa42935a8ed7d92e702097d086e829a-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x2abbf099b7d6d3b25912c5c78f6737456e8736d9",
            },
            reward: "0.007593445152311195766801966224002926",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xd0517b06167727e10d25be193e75d6becffd5504-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x396a6d7a33655c45044143cb8a812227bf279578",
            },
            reward: "0.04383301857001410514310711337347046",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xedbbe7ba1c8daa8f5dde37ce36b02e47341ffa13-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x10649c79428d718621821cf6299e91920284743f",
            },
            reward: "0.01299764156224732362036914341819292",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xf1f916d52cbca47bfa2c4f53fd48cc81228e7ade-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x7c0b689a3003e0dbd2d37ce15e8a2273d91bd7f6",
            },
            reward: "0.0151868903046223915335963427976787",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xfa62b642a718c6e88f3c7a3049040c79a9c5cd61-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x6144a12e348829abb59ead0364cf7c2e540aa715",
            },
            reward: "0.0151868903046223915335963427976787",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x002cd3ca0be3ea53528b7e7c9e34abb81fa2e9ac-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.02411827474289248625826207819530311",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x0052e87f43b4dbf7a881a9a7e3b4ad89dfd50d2f-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.01205913737144624313033635017925538",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x02b6e9b583356cc5d80604ff0f1bd676c2bd27f1-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.01929462568767136072884403677573845",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x51324b76b09a2fc065ad01d02677b7f1ecc7177b-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.5567168822584861721310995380210557",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x62a455e7f460f5cec4a3e64418bb32816895c2ab-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x30be05fe3ed386b8d8afb327b03f50c9d97dcb85",
            },
            reward: "0.04703063574864034820481636356244489",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa499dadf173dc74047b32eb906a355473f7e4624-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x915188a790dcdd06447244196694c9f8a7d2b4c0",
            },
            reward: "0.03617741211433872938859842837455849",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xac12f96c21cebf7e8743cd16a9be5ba8ec3d31ba-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.002978607695800470321761423882569948",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xb87b6092ac461e2dd171fab14e389810ace950ff-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xcb33844b365c53d3462271cee9b719b6fc8ba06a",
            },
            reward: "0.07114898303065569866525974868805813",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xdd010f2ca484bae51eacc0381af9e2d5c2583b3c-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.01326505110859086744324945408902053",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xe8a6fae00900d2c4f04bb009181ee33f9042daa2-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x1dac73f3d00052d7e815b41e7b1b5cb241aa4d70",
            },
            reward: "0.004583411431263620497387222962386214",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xecef821974f44490bb02c9383cf63c79e0cd77ec-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x7f8c24d538c695262afc1408ad4217967da1623a",
            },
            reward: "0.03014784342861560782403290882573271",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xf43f03c304bdbd098826c032b343ac021b98b16b-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xaf97e87375d97f45b1c5f4ea4cc87650f640581f",
            },
            reward: "0.01966158011289053720165838830092494",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xfc2cb559aa59e6c29ad243dba024833b1e149735-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xccd72bea12f3927063be3d8798a4b74082713cb5",
            },
            reward: "0.1628175552687078582046940581429515",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x049a615a01e115a4323e65c132851b0df5b5182b-19566",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf90db858c0697b34a5c400e3a12f30bb2c7dcb6d",
            },
            reward: "0.02337883703170803557105878184549127",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x7eb4951e8b4d13bd551616e617cf94aade909145-19566",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xb6462b67fe692223dffb61c8dc8ad080cba180cc",
            },
            reward: "0.02922353284130192836285711523170553",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x8539a3d18cab5e39538759d6d3c00e0faf75ea5d-19566",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04959233523168937243176940957873411",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x919d51e658ccf344a816f70aef57e432d26781dc-19566",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x7092020d4c6c26f6e06ee1e8cb5b34f9d14341c7",
            },
            reward: "0.08767059852390578508856550390944117",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x9f00ccf7eaf33bde3fe055f4f5fa8c26414953f5-19566",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xc3b1f7ab9fabd729cdf9e90ea54ec447f9464269",
            },
            reward: "0.4112268413414537907541347327566671",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xbe95a322078a5bae5eadb0b6442974880d89e011-19566",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.01461186487526496160168829647871485",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xd38e65022d3912427e5522fd527cc261b038b272-19566",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xe520d9514a85d28fdcffc5092b58afdf64e8fbb4",
            },
            reward: "0.05988162703478360366219315893656634",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xd6398d422bc3ae37a09ea56c66e04b087733f69f-19566",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.3039578901309811726737321443326345",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xfd9af8d65a3bdfe2b31c7b0d8cdc5cf6cd6a04d0-19566",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xaf866405f474b84e893131dcaa34b51c90e51895",
            },
            reward: "0.02045647298891134985400085693004518",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x0e5275ca7dc4bf97fc1a265948d37bb4c96c2cee-19566",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.03824277122078814241468476178409249",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x27192cfbe142d8067ec207ddc5f201b944b308e3-19566",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1239065787553535814235752033405782",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x34a0b597ec750bdf35044f33ac9e1b072b6baf37-19566",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1376739763948373126928626961085319",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xd54ab85d4525e2ad6593226f663949bb11f3f6cd-19566",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x051d091b254ecdbbb4eb8e6311b7939829380b27",
            },
            reward: "0.6879370475932284892255623543252955",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xec847b4317b7b076971a4d9ebb68370de88ee9f1-19566",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.01223962603579247424331498444150187",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x02da703f2ad773c23f13de85e4cb99b575d4f42c-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x1dac73f3d00052d7e815b41e7b1b5cb241aa4d70",
            },
            reward: "0.00825381543296896260744138580281113",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x08a5433378862b6fc301d770b37bf7973acebd24-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x92ec6e838dd90845d7d34dfaa82d6d00f66c8168",
            },
            reward: "0.006828121544215261789731601502222599",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x0d2807b752d53aa74ed99c89b98562118c444d22-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xbdc88f7f9b16863c8709f97f872f4e6e16dd5f6e",
            },
            reward: "0.003386748285930769847707562275788723",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x4fed8be4cef8a73868bd45bfacea95bfb5aa70de-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x2e3bd4e33281ec73b88233ab5f8b0e52a8d6f913",
            },
            reward: "0.002546889335992292647572108120699332",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x777460e2ace7b0a74c8d9ca968f104beecc76f7b-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.009559387676516852025498224560268881",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xade0f7c5070b051bc78838f02ad3114027dd40f4-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.9427953637019363401020998302108712",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xe11d019a01d47faf9ca8ac93749499b118f5abe0-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.02662967402243952097994928752733815",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x1fdc3148c8380e60091ad58c52c42c6868c150eb-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.004413275223286517222365023730125974",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x2b928017cf8bd56a9a4dbcccbe4f0bae88cac00b-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.5146315212930341351071786509280813",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x5447a88b3be260be3d01c3af161b2f234f69fb70-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4a8df644eff45a5fe923cc4a2efec07614a1bfb7",
            },
            reward: "0.01544856087743020838824878839647086",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x8095abd47882bd9eded35cb273ab4e0ed1019c93-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf3e112e0c32e7a30da87517e98a22103ade76d01",
            },
            reward: "0.005046285481025898940145380954914338",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x898296ec830ca5291173f04fd70fdc158ecfa95c-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x1db91f586331d168e2da4c6bd73b689fb9f43516",
            },
            reward: "0.01675326865221886503461397090229123",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x90e115a069dfb68f752c6dd48450ef8b87a6919e-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x30be05fe3ed386b8d8afb327b03f50c9d97dcb85",
            },
            reward: "0.06767021313797374899690840235104287",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xb5f440f5a31b0496b3d456383825a4a5db9a8949-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.06767021313797374899837875876279294",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xec54688608916fb79455cabc3b6f9628e57063ab-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xccd72bea12f3927063be3d8798a4b74082713cb5",
            },
            reward: "0.3064540076987521863285805797284105",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xf2adbf6a1fcc9b1d89804ff6aa59669f6486c64f-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xdffd8bbf8dcaf236c4e009ff6013bfc98407b6c0",
            },
            reward: "0.001912654498304690983580444245870007",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x0e602ea998404154059a90878cdb571f52049e23-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x445bab4342fafcfee8baaec5bd7d6030770d4011",
            },
            reward: "0.0116746874583660541193185297994042",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1849d6a3b7e7c64f0b011f4263a598af9c5321a4-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6175e7a985caeac2db12fada99e626ebd6fe7bcc",
            },
            reward: "0.00235809601954362321672082974811903",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1b492bb36664d042c4e23456276cc91179b86e5f-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x33a74ed005785a83295d3ebe7e9fee647c3b4246",
            },
            reward: "0.002343357919421475570152457795937991",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x3298a83b2d3b7231771a18ba8a17078715cbcccb-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.02947620647825164505056605064460052",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x4311606cc02e6746d9d55e36d15aecbe2d263e83-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xff703ebb19c1a4e27ba14e8d7538fc113ca5f906",
            },
            reward: "0.004297482614617031836284229773077064",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x475308549bc8c8208c16e86cc5271e0c4795b616-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x83910f3e3e0064c15ff2fe043dd042855861d05d",
            },
            reward: "0.02947620790680916327184688603930029",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x4a4937a0fe899f3f5b05a9df320e2ad50a672099-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x915188a790dcdd06447244196694c9f8a7d2b4c0",
            },
            reward: "0.03684525030536911273971926523550834",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x4e0fa6a0150fe76e5ebeb6de07c3db2dbf07b181-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.003684540235543153760443548385454276",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x526b2133671787bbfed2de1ea0b806f6f81dc39d-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6b579bacffea19b002271d448a62b161f754401a",
            },
            reward: "0.006592646946639084605501988074715909",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x64f940e1c5f7e75eec2763420092e1e2c6228393-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x1db91f586331d168e2da4c6bd73b689fb9f43516",
            },
            reward: "0.02437090793327056739680887862777206",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6d9b3df93b5e49e3701950f81518200857eb8b07-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.1267476610504697478210399731299847",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6dd04d8cf38168ab9bb3076a53fe11604c846c1f-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x19865bbf18281ad5197ac06e45966dfd3e72a47f",
            },
            reward: "0.004568811037865769981015601253720909",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x818fe871c0f06a9b1e95887ffd3e232d1728fcd8-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.4552373470599753488801234482450652",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x99299a18d07ba4828bdca135f1b6c6ed13eca64f-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x5f0a0e3b30d304fba56e2eee3a442b0bb5c40275",
            },
            reward: "0.02897510793261469062350378206118261",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xa5c5994870fd0f1d3e06ea9a3ddeed1d3f2fd52e-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x3a762044a55802b57f12ed39d83dd1047d77b8f2",
            },
            reward: "0.002603706458079213722233978862391399",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xa6bcc97eb84b64c9cb66c42e68f6abc4cdb758a5-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xcb33844b365c53d3462271cee9b719b6fc8ba06a",
            },
            reward: "0.1314091842056635201436323263910028",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xaded6a47fd19a18363563dcc005c74cd5bebff42-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x25d9d6f36fb3773b98284624e2a58c0cb3c98cd4",
            },
            reward: "0.005895240048859058041065537632559062",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc51d2bf1798af65b1e3177d7de7bfc60c6428a97-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xa824dc3ae402dfd6a5de71c6fc30ff9e00411209",
            },
            reward: "0.005747859047637581588639479390041911",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc94b314d7421faccbbe89cb04e70542b1a325447-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x30be05fe3ed386b8d8afb327b03f50c9d97dcb85",
            },
            reward: "0.07074288058630869645890576165473714",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xf93b2208a5854fc3e85492c1503c43fa6bb7ec01-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x5c44368c0ad4c446842738bdbf8f2bbf9876546e",
            },
            reward: "0.01695281875469546117247744725542457",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x4bab58f19702caa5ba8a223da1a4f6a547f7184f-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x3f3429d28438cc14133966820b8a9ea61cf1d4f0",
            },
            reward: "0.3092664051467909243030518265327348",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x56c4f38f95355e86ee42033ad8aef733feaf40bd-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.09445467673889448622597098611134283",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x5f3e3ee5a0644d3b7aa1922767de8285facc9e0d-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xe520d9514a85d28fdcffc5092b58afdf64e8fbb4",
            },
            reward: "0.01062683567587431177612272327296284",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x69a4fa2c1d81b640a69b1f1ac22974578b64cc46-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.0000000005615869603524312382460850466621057",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x92a0aa27ad8572e125803ea0777af1885f25c9b9-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.009445474547734006994520283970386375",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x97bda93b2f4193a34819f418e50d007c6d80a0b7-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xbff78d2838243c9c6c18245d69e543a9ba6c2890",
            },
            reward: "0.5313417837937155888060193344003015",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xabb209661fb03f48f1174ed3b6c4a0a677298b61-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x42087c28f296d3b2dab56e3f5d1aca1388f2be5b",
            },
            reward: "0.0000000008685487840653033138431692343856404",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xd4373715a070bb95c5e7a066efeeade471c1372e-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.02833640302166834586779212189879162",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xdf8fd47da004c44237f6d61f12fbd2b4cc03fa98-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x521dea4e41d3582dffc931c4100d314d0a9f7ee4",
            },
            reward: "0.006494177357478746085408068646052285",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xe695153ee5688b3e75bd3c37ddf0bb39a869235a-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x23b83c2821d1e9fe5c40ce3c014d2420f2f1eeb7",
            },
            reward: "0.01003424228770784552338010307817339",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x1de001a02f1e5db163be5fe07dfceeaaed50af29-19566",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xd9da13de745bfa50ffaafd0a531b92f0511b72cf",
            },
            reward: "0.08217419615855422992634363193032226",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x2fa837f0ad17ea91a2991a608e68263491f2bfab-19566",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04725016279116868220765051435267707",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x69371c6efb2ab226fe8224f3abfe7abb6e80a9ba-19566",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.01438068587755703009817336678752164",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x745ee33177e31b12ce08d2b6256b4d0e351ff3a8-19566",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.7945642875102553456845167680642827",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xcd8cfc4784e971cd960baa91d266d0bd33755425-19566",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x0215c140840b896e1e371525d1f70cefbd09aafa",
            },
            reward: "0.0616306676624647120833157188651963",
          },
        ],
        earnDailyRewards: [
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x07ea5532ab74322c954aad2ecddeb4c82505a2ff-19566",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.07432258326021799668728433789958895",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x506ff697bb7f93f4eb09bccffb976416bbe38c52-19566",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x0f8c58edf65cbd972d175bfe481bc16fa8deee45",
            },
            reward: "0.5405488498226016501042772279781114",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xae9149de7b243d56bd9ce88329ecbb1177a2d5fa-19566",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x239168974aad75472b652046255050e50a0d5fc9",
            },
            reward: "0.3581021653318545473740463618428353",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xc75afc43dedb449e741f8005d76d5fa880a1cef9-19566",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x9599d89ed83e6db03d57c004f858ff82228604e4",
            },
            reward: "0.01351328925780583197637910799406926",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xdfaab0e92d3700c33a72fcdfbb90e349803561e8-19566",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xa968a0920bd35ad65f3bd78a934e45f020d6a1e3",
            },
            reward: "0.01351311232751997385801296428539505",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x1457f27c9ebbb7c5701f7e70839a8a5f477107bc-19566",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.03595630986843857431841634205002056",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x35e69e3fda9994dfb35bee5f7c48f16b65b9abb0-19566",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.4506740556998617762997481802961536",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x632a2770f96d7fd44702e00dcc355811f9b336d3-19566",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x157595f04c0da495d72ceb84390f444d469c3216",
            },
            reward: "0.06477958304133347711693625414606483",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x7d8fe7b235d862e3ce44dd499bb15ea25d7f352a-19566",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.3137679990056442398651348879483691",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xc581b9f298220a8293e7e399dae2dde88dbb1921-19566",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.1348220523847219323997643355593919",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x017a7ca1bfb339cbb6d6cecf3f787516975a7c3b-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x8f767dbe1af8fc0eb2655260f2a4768a3ad49bdc",
            },
            reward: "0.006150747916084546646253056595646979",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x05cfb65544eb5568b1438d94b2095fcea6b30b9d-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x1f5f902be1f635b30425b690aa9fd5fa2b6fa79c",
            },
            reward: "0.1230235458732054729630680434100025",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x06e7f912044524b49b2eb6b72c891e984d44e36d-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.123013327157575567857589954758323",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x098b98afa71f950ea862b4e0d91b183e7bc16b69-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x07a1f6fc89223c5ebd4e4ddae89ac97629856a0f",
            },
            reward: "0.006110250229260732819924386141810515",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x18877e98dcf273b46ae45dc90005b2de3dec4079-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x2757ae02f65db7ce8cf2b2261c58f07a0170e58e",
            },
            reward: "0.0006151177293660273648153402170500127",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x1aab626f725dfb8a1017ccb658ad308b71517346-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.0000000163050009089494889516150582846011",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x2abe8bfee84fcb968e2233c7307c9d1881e43157-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x47547895218274e121e4219a3fd23235377a9903",
            },
            reward: "0.01230198564485439852605868475573546",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x32dbb4885e665fcc2cb74fa2bc74f208d1b3a900-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xf7c7ca163ddfe69218377ab7086bdfc9a50f4e1e",
            },
            reward: "0.002460441568939241600880505130415598",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x3a71da5ea3dd8cbc10d3fe060c0669bc4eea2b12-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xac798df80b371569ec73e37124ffef7e26249667",
            },
            reward: "0.003444659284449753242965905215480071",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x54bba40e7f7b6cca98c0ce02095234aad54abe48-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.01230252924353539042458203113477327",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x57ccb41682e25faed21b3e992d6240e399ec9dcd-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x3e4dd7e5c37fe838eaffc89a551e1c311b7d14f8",
            },
            reward: "0.00123019804306051193988182389046015",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x5c4088920b657726013ae134737f6fee06e23216-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.00000009129430995789890545193498357603377",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x68c927dfc35367ab0909d4cf7386deeeb425d081-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xbdb7194a6f048f57e0bab51aaae0fb623615805b",
            },
            reward: "0.007381412752392328377784082604600152",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x73a2cff38d41ec035afa3038f4c6140ce69ba15c-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x5fcdc32dfc361a32e9d5ab9a384b890c62d0b8ac",
            },
            reward: "0.0003690706376196164188892041302300076",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x74c3f6f294b9825f98ca08816f2529fdf093d5bc-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x0745a468966c6be811dda6d1953fce2798efc1f1",
            },
            reward: "0.06148796788047627122251566803860143",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x829c190ec5468eeb29fa5621ca65a76aac2eaa44-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xa62d7ad2fddbad38a0aba25e40cdfe2edfa4d183",
            },
            reward: "0.01230157550177895633160073554305087",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x856926c82ba816e84bce9d7913de57c985cfbd61-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x3e4dd7e5c37fe838eaffc89a551e1c311b7d14f8",
            },
            reward: "0.01107178123407522770605724004084459",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x9b333d180d559797db6682e11e6e5e494b25fe5f-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xd50cbde55f8da4e8cf94f38deae2c722a5bd156b",
            },
            reward: "0.02411227495186071859481235591706963",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xbf5f2a7883572e0b23b387a848c417b9c31dd936-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xc24dc96768d7a96ca37aa3e65787f69afaf1a354",
            },
            reward: "0.01230147566584859853145508993776571",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xc3b5493dcaafdcb5fe6d627efd099dd0294ca4ad-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xc64844d9b3db280a6e46c1431e2229cd62dd2d69",
            },
            reward: "0.04141311725143459363438459164108151",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xc98d804cfacda3af5d07ca52f9c8137220f8f37e-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x4ea4309e5fcb06201ea54e0fb149de522138cdc7",
            },
            reward: "0.1230220201744534949926593181583895",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xcdac1a2879ae3b612a5667228e629ccc516a66c6-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.0000001161538544624088281425290929159267",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xd3696b74d9fdddce791bcb2c3eea1c137a0b8861-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xd9da13de745bfa50ffaafd0a531b92f0511b72cf",
            },
            reward: "0.1230405920821825778555701571057388",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xe7370c3a19a9676d142cc9641909afa0a888d215-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x5a1b8d6a57445deced8f816310fdb0aa6367cf10",
            },
            reward: "0.001615461958064148249003619626807219",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xf0afb9dea61d5bcaa96ea2f3ec1b074714a4531b-19566",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.2912302234663164954420256599269882",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x178ec3e0dca23e5c448b2ac7e4388592883a3d55-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x83910f3e3e0064c15ff2fe043dd042855861d05d",
            },
            reward: "0.0000001208749730086433933517039491314952",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x17dc1526c6ff9cf0c702257775bfbab2385f6fae-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.01202020079650345125607792864791825",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x2815cb20c1063f27d6e5d04b6cd2904af5544bff-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xe793a7a7c7b7a4cefddb30f856b01f36e51b1b82",
            },
            reward: "0.0002404044797066714710885111401059472",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x2a6536e4edb891eba287e7d977421a6df8bb6dea-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xac798df80b371569ec73e37124ffef7e26249667",
            },
            reward: "0.0048080803186013805024311714591673",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x352cfc59b91088656ebaaab3b42febe1b45f868a-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xa4fd65694a9708c2d204bdf7acf8b9c09b105903",
            },
            reward: "0.003606060464097518286112234099861899",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x3c21a1e9b544a56a450898b737a93b8220665e5a-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.01202027294290134735759340613535364",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x42474bffae9d0b4e9dc4e8ea48a5705eacdcb087-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xf44593dfae05bff213c876a8e1fdcc15a45964df",
            },
            reward: "0.01202020079650345125607792864791825",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x50cc056966b4f1eaef6157390940115d2a396188-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5d12aa6a6001fb326332c3801c6bd12449b6e44e",
            },
            reward: "0.0002403595376157935514913165078977746",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x538112796335be43a765a5cde21f080c3296be64-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x915188a790dcdd06447244196694c9f8a7d2b4c0",
            },
            reward: "0.0360589530556622477690683043431264",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x5f070b42e7fb07786c606d7a162e36056bbfb3b5-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.002403958038164556819658149327503975",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x6030bec53dcf30ccdbced5f578befd80b9b10601-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x9578e8369369fa05e5f2fc8d80a234ad2f8608a8",
            },
            reward: "0.003605268640943087169874631646536611",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x6182164f9f39364908763e94adcc775a2931cb49-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xebe4d96a48c4d0659fadfcae5a132de3a5733374",
            },
            reward: "0.0048080803186013805024311714591673",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x650899474737713e9c247aea3aa777b3c2ed4964-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x7076106c13ca93805f2b16c52e64d3592d55457b",
            },
            reward: "0.00000005776097678389183238368181816507279",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x68ae6b8206610be3d862b4b26b1de35a058c965f-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xcdc8698745db38280d649fb9e7322d899c4a1bd0",
            },
            reward: "0.0120175118233172500273937916380495",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x6f09e208d0bcd35e1db162bed664f3848c7172b4-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x66a4f5d0b57d86bf1b9bfc63e991a9387791fdcd",
            },
            reward: "0.0192323212744055220097246858366692",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x8175279cef254dbf7d0d9cbfd193dd49bc1025d6-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x9cdbddf646a86ec987394c807defed498dbc7df4",
            },
            reward: "0.0003004383509781362895266495943704818",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x8c0ff2a44c53f823c703e83a75d287b37f5c9c12-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xe922bc2ad029b1efafc3eb3ff776219c3dfbb625",
            },
            reward: "0.006010100398251725628038964323959125",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x97f5ea81f39cb9a1d68366503dd282a8c0ba6d29-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.00000004507529654054802620904455078236299",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x98296fae90b58a3db28e7fdca20c96663043750c-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xb92a1d5c73a69a0d72820f6f6221c5a81edb7cc0",
            },
            reward: "0.006010100398251725628038964323959125",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x9b90a6e571e286bd10e4f5ef3d428cd89b911740-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.0240404015930069025121558572958365",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa4becfd89a985ea0cff9c1e90375bd1de1bde8ca-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xaf8a08ddaedd2378b8075f8b90cee4b066ae0df7",
            },
            reward: "0.0007361195196626903589773367558040642",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa5af820995e5383bfaeb7c6ba22f3eb55e35f768-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xb0d6ae7784a9f20c1e34218998f0fc5c24972441",
            },
            reward: "0.01201661171822510927369449811451066",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa641456aa2378540e3be55a2473ac8065170db51-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x9730299b10a30bdbaf81815c99b4657c685314ab",
            },
            reward: "0.0006010100398251725628038964323959125",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa64d42e8b130f306b8b8add558a095cdec8b8dee-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5e4568c4d8343052a06ec8aab1e124af08b73248",
            },
            reward: "0.0003005050199125862814019482161979563",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xab9c5fef3a48d4b8501b9e226589df4d81b08401-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.00721170667296867047142464749409946",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xb20f0e2b013655346c6d9c54b16decb7b934fc91-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.6147978187373773415665486246318602",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xb4b84f7205667c6f696add26462d51ba4305bc18-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x7f8c24d538c695262afc1408ad4217967da1623a",
            },
            reward: "0.03124347105445344862771390975099237",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xbafacc6f392410d2d47cb9ca25541e17fd4badc9-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xce27fa2d00b91c9486e3545c75cd7df86d4e3632",
            },
            reward: "0.002452006856774007252957553311336002",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xbc3f05481a54a949ebe764d095da703e9ac96c44-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x70e439584ef1ba300106b9c16543eaa1de676dc2",
            },
            reward: "0.02764099368432778761796483945491922",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xbd431752a75950788fe689d49d970f95a1732581-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xeb434da562e7a8ba045472fd1e134b420771ef7a",
            },
            reward: "0.02403599304773902720368159042491494",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xcd4d1da85c2894148772d088e14e226cc9580af0-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x3ac7084e8ce0757261b79f87a8e417d2df3d24d3",
            },
            reward: "0.06009927498430773721921808033669834",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xe316409d3df47accfdbf20c7cc12ea0a9fc1cb87-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.002764646183195793788897923589021198",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xe5766c80dea6a9b873d56f7149db185e8ab919ba-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x1dac73f3d00052d7e815b41e7b1b5cb241aa4d70",
            },
            reward: "0.001202020079650345125607792864791825",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xf00e853ed9216008355c3ef0843a7b20d3fde16c-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.02764527061655180712784786079174537",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xf073cde213b7a6da101ed7e20ee6e5e9a9973b07-19566",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xe1e2a52a21226ba37f28ba6cdf59f20156798f94",
            },
            reward: "0.02780961484626999440122388697299315",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x03431c179e431c9785cf82d0ea2729b9561ae76b-19566",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xef764bac8a438e7e498c2e5fccf0f174c3e3f8db",
            },
            reward: "0.379655177508683012360807032161545",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x0dbaa1361088a250de5a893bd2efbd3e24545ec8-19566",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xba842b7da417ba762d75e8f99e11c2980a8f8051",
            },
            reward: "0.003036562469555942730038225548108382",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x10119b4fc928a31ab4fd764f743e871f02797446-19566",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xb6462b67fe692223dffb61c8dc8ad080cba180cc",
            },
            reward: "0.02531034516724553415738713547743633",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x13927d76c5a2c5985b25f4c0678d489f04126544-19566",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x59653fd9713a30c54237a6fd21fd97ba141abbe0",
            },
            reward: "0.004986162048578793924360766575010946",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x15eafdb60976e7d22c0ad6c77f05dc64db78f79c-19566",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x296e0c21db4061ebf971e55d5db85011e7ff9797",
            },
            reward: "0.01265377230420824765450025965197923",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x3910239862b50a5915d49b05c94d97b89265f055-19566",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x7ab29b393aad63e7119c004bb45eefeaa3e70da5",
            },
            reward: "0.002514329688914171363194838038328525",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x575879fa71ba697042e973be663758b06f63765e-19566",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x318e3835baa3f83ca734d9afb9996f702aa06a3d",
            },
            reward: "0.02500669310909524874196918708538695",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x6844a1d7903f14fba8c12a705577617a11a4ab93-19566",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x7092020d4c6c26f6e06ee1e8cb5b34f9d14341c7",
            },
            reward: "0.07592923189594970556209373967422834",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x71b4201c1f312f4f04be8be7b02e0ed224d784fb-19566",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.01265517258362276707869356773871817",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x77f66e4a6383893ecaf0803e52fa1e8b60d43fe9-19566",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xeefd6537adbda7b1a9da3f6607dda26b048489c2",
            },
            reward: "0.002586082236102515557388169985313849",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x92a95ea3d6c5b81fe85d704203ec1c19e3266a10-19566",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.04865439467110546106403548738803937",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xadbf773d6cb8373d64861c7ae4b02aacfbe2ba76-19566",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x37e1881f05f33f71e43bb8f284e0ed53e26520d0",
            },
            reward: "0.02531034516724553415738713547743633",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xcef1a9a0dd2cdd92b5669f6b220799104efa865e-19566",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf71d161fdc3895f21612d79f15aa819b7a3d296a",
            },
            reward: "0.3817017311496930656481444551984686",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x0e3f1e786b42465ca7d68fede5389bfca714db42-19566",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xf1a1602c90d8e510bc583eabb53667e3afae4b52",
            },
            reward: "0.001520692011188938115711574989330543",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x0f3436efa3097f960a27b50e673db0b7de765577-19566",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.00000001493414597871352188008296620198465",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x1444e8c66fd6bc37262f26a33bc217b3e0403ab6-19566",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.3041442214728787667843384620799781",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x2643d4f4ffc86ee595c0d8a68a27bef82eab85e4-19566",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x20eadfcaf91bd98674ff8fc341d148e1731576a4",
            },
            reward: "0.1368667826316913976227411905793081",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x281a602477c5b328fcef497e47bb4a4a6b963614-19566",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x58e03d622a88b4012ee0a97235c6b110077fb867",
            },
            reward: "0.007603698519038412524184976563945292",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x2b947350d8e4a4aa1173ee0e4655b33fc8ba55ad-19566",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xde055950ccaaf115c8d76b33e6503ee403875ccb",
            },
            reward: "0.0009121625335546255115213698802237361",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x48a19d4eb3553a476ad6218e0625b606be7bc4fa-19566",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x4fd0ff2c49671d4fe1927371cf833e8b3b7f44ea",
            },
            reward: "0.000000004912245420233350759015591310706247",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x51a1f69f45791b8e5484dd9d526199d9f29223fa-19566",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x6b32080f61ce43bfdc37b6629706dae405d22389",
            },
            reward: "0.01520666855629376930844142263892858",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x5d63b70786f582eb96ab006a4e51f3b930e29e51-19566",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.01520742029241015529141568784214535",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x5dcf7edd434cb7f8b255b5d913783792e41b03d1-19566",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.000000005424644402337380153280238429687966",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x61a5471a19fcceb07ed651ea402a149ebd6fb0d1-19566",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1368667826316913976227411905793081",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x73933d5e77222f5987cfe3612eebbc88b7833c57-19566",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xdb10d21f28a34fd04e4425eac777483798f7e217",
            },
            reward: "0.005320010239552487834806597891745776",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xa0af774d47a46f8958b5289e21b1cb6210a62f62-19566",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x859e1dfb430a7156faef11947f2fc2a3c34b733a",
            },
            reward: "0.01216593623392812423313255027371628",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xa3fb5786e157d6b2618859b1921f8b71d4f5eedd-19566",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.0380179134861128857342270368434681",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xbfdfc5e00155cd27b8cc4cf7ab4cf5551b54a8f7-19566",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xb225bf7e4f1da339195972ca7e4a1d9ff52156ce",
            },
            reward: "0.007603710146205077645707843921072673",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xcfab8ff364d67af18cbec98b8d47398d503e4a0f-19566",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.00000001017385321376944663618362191289478",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xd29bc9af132fe09f0a6a342d6a5c27e12baaa14f-19566",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1429497507486554597393074657161662",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xdf2dba82533627d6688efe2e467a76099576a9e3-19566",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.0001520742029241015529141568784214535",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xf7e4255bea7efa35c7c9253a2cfbb2ee3ccef378-19566",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x4ea4309e5fcb06201ea54e0fb149de522138cdc7",
            },
            reward: "0.1754621408489853854251090447598238",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x17e337bac18fb13ee3b547a44c15cd77561ff594-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.05363599172858101066914384328944678",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x2abdda4c66bc2156f81f7056bc87a904017bdad2-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.0000007723975393187890940694044622153831",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x4c19b8a92d319ff5261a4f8621c897e8d9c36e0f-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x37e1881f05f33f71e43bb8f284e0ed53e26520d0",
            },
            reward: "0.01340916838090221047368732379382686",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x4c29c31161b6313b716e36402a3d56f6e4a4964e-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x5b191f5a2b4a867c4ed71858daccc51fc59c69c0",
            },
            reward: "0.01344299159668752980441978876799027",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x52448305da311c4a308ed72c7fb0134248abf373-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x3f3429d28438cc14133966820b8a9ea61cf1d4f0",
            },
            reward: "0.1340905412320915493933500086240505",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x540b46c36557d3212e06e37182e5296bb486323c-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x4adf9b737ab9c97f5728cbcf143483cf6c2f7df3",
            },
            reward: "0.006704261830426953276545511034993376",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x64943f1ac7b541c3b6bdf45464c9b4093e4a7fab-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.006704584190451105236843661896913431",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x7602834c716948c438b9729fe0384b3aec52b3eb-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xef764bac8a438e7e498c2e5fccf0f174c3e3f8db",
            },
            reward: "0.2010989791957763754169149581917165",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x8219adc2f9791e2d8a67882a4a73cc85e277c524-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xebfb476e0f9c8d74f0fce72b688d7177dcbb73c2",
            },
            reward: "0.0005171088870294735422033675399215147",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xa121d81b6b83075ad0ee5d4a35087af262712173-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xf9f668901a13b2c817a9cc9d7fed50868b7af8be",
            },
            reward: "0.01709113828994062483881523128507861",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xa988e47d6c2549c485ee612cb0d0dfced04b4eb1-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.4693065499156833282205522104649793",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xb756db88231a365c7be83adb959cc6d3e2218ec7-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x7139a445ecc1a597695cc9a077caaa41e0f18391",
            },
            reward: "0.00000001450505270682534492628239457758355",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xbf62dc76e06555ffadf4c7cd7353b055a6d09e52-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x3cf08d6a9436a1798c18d24a70f5ad0bea31775e",
            },
            reward: "0.01340921894005754660866490842995931",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xc0558bcec4725c038256174fac0c1921fb145afa-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xe3db0df6a4a62106a3dd5cef76c196a53f3e7e4d",
            },
            reward: "0.01339465422068235285225821858029119",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xd29721fd44d8e4cd02bae1453e40b2d72276859b-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.004899629061813908377661564847375464",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xda2035f6b3d6618bbf5fc591b25b49b6ab175d39-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.02011361861914330510885310960012736",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xf051ffec03e1842939c2fe40c1a8623da624b220-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x6b32080f61ce43bfdc37b6629706dae405d22389",
            },
            reward: "0.0000000500671345469428934909676689400109",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xf220126d67557ff209c921f4d2744f85b218b664-19566",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.03218072694100615362275380699880371",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x065af1d2579d2896c87d1072bcecb64f70dbcc52-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x6bdc44c885b166aeb687f2d247e419f5a19e1804",
            },
            reward: "0.0000001268636046858759328241241360476402",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x0ab511f268ecb706b956e0a6bb99f9268282e3dd-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x3ac7084e8ce0757261b79f87a8e417d2df3d24d3",
            },
            reward: "0.07343254050361624869783644289241511",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x0c0e979e5d699e51f4707527e3b4a1576406270b-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x7076106c13ca93805f2b16c52e64d3592d55457b",
            },
            reward: "0.01057428583252073981248844777650778",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x0c7a5ef0532c0e1b8b4984ee4e4e19283f2cf7cc-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x2068d14ee50772dd6e89c6f64f32adad0cc936ef",
            },
            reward: "0.008077210832217359884117869321826865",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x118954ab01883c2c245d7a9b737df80e8c4afbfe-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.004406272478089273563203431962173865",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x16d559ee5ca6f8f14c15ebd511809722f4b87702-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.01468694607653833230393338481064494",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x2b4f1f53c4bbf3fa77e2a7faf1cfc063f7c21523-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x1a918a8386f75f382e2a1b2e10b807c39728caf2",
            },
            reward: "0.003686264972239449576551095445433661",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x4820233ad8d7bb201f9462d242922d28926bc642-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x28af2a3c28b7ecf7d84a8ba0fddf7525a88e1f61",
            },
            reward: "0.004405370161845353205336428179324747",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x4f1122cc1723e5d60cc11c68be19972b8e3be8d1-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x7bfee91193d9df2ac0bfe90191d40f23c773c060",
            },
            reward: "0.01762316536553017488189272595379488",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x5ef7d0933cfb377f11f125ba0d74812c18f35520-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf9f061d9a5f04e223ed3c560e03a8ab0a70cc1c4",
            },
            reward: "0.02202976215108487460935093286772453",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x5f38bd14ffcf23f0f8b6ad90f3dfcd15077e2b8f-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x66a4f5d0b57d86bf1b9bfc63e991a9387791fdcd",
            },
            reward: "0.011747957562091712533133640020325",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x6ffcd46a8194ec8d3617f3bee62334de71967033-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xe1e2a52a21226ba37f28ba6cdf59f20156798f94",
            },
            reward: "0.04405961779704549519752162000780902",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xab4632810f9b93eccc993fe804f9da57875649fe-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xdb10d21f28a34fd04e4425eac777483798f7e217",
            },
            reward: "0.002055426676036546938120522428330148",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xaee5b0711b31a7954406b40f2dbc079b2d6fb65f-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xab12253171a0d73df64b115cd43fe0a32feb9daa",
            },
            reward: "0.002790648213065226251281776802653681",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xb9134373f544527d15ce3cdd8cb1f78d72acf42a-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.03010734160648266196611294158589019",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xc3006429aa36fc6d14ead73ac106d42ffcedd576-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xa0ce55801b0b88f2df2ef026eb8da79e9f0ad9c1",
            },
            reward: "0.0003124716957761320904642833578292897",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xe60d6cc634782add49132dea0a70b0b014fd0500-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xd790a1516f78e3fb52338084b5c5931a75bb19cf",
            },
            reward: "0.001468916532325303772112625299901727",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xec6224e36c67b54e3daaa968cd1cff6781e003ac-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.7342900335727190358712767965711244",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xeedff03dd73862e59f5c48792ac9bd241ecd11dd-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.00000006293733845628819555027744539371523",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xfa16a59a3458e5008041109c2add292d9886c606-19566",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xd46c81245a0582891c2249daf2d68925977cf2a7",
            },
            reward: "0.01424557816983293668113666031470872",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x08a27f3ee826ef49d1673846416179c3584671f6-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xe793a7a7c7b7a4cefddb30f856b01f36e51b1b82",
            },
            reward: "0.0003945089194425513509674686743653335",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x0b03f8ac3ff960b3db43a3f549fe0c98bd0c6102-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf3e112e0c32e7a30da87517e98a22103ade76d01",
            },
            reward: "0.003958272882434518853217154553547513",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x12b9aadce493ff66d34298e3b5b86fcea8be8290-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6bdc44c885b166aeb687f2d247e419f5a19e1804",
            },
            reward: "0.00000005437256006163232848979462852615345",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1af10c87e3083e47c88a81cb4c60542e82f47cb7-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x28af2a3c28b7ecf7d84a8ba0fddf7525a88e1f61",
            },
            reward: "0.003945101788070996875698050346121285",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1affd8e82ddc8ab62c34600edfe946ccc777e744-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.006575013919719704113657670658454344",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x359851db2b044d931b7d81169f5148a3237a8775-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xe1e2a52a21226ba37f28ba6cdf59f20156798f94",
            },
            reward: "0.01419710013533937617767290394384881",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x49677b6f91c52edb792c4568141a120920454277-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf9107317b0ff77ed5b7adea15e50514a3564002b",
            },
            reward: "0.0006837965488730973203484283496751191",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x542bb88299feff0b6a4f5a38f26c821647d43791-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xecc0da4bf963c23e9ec9740b1f06cb192c5195a1",
            },
            reward: "0.01314704466235451623519573371798925",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x5be1d28851c974f57731a63cfb44e75cb8016ff5-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x000f4432a40560bbff1b581a8b7aded8dab80026",
            },
            reward: "0.004602609899054099375809757710040477",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x637cae3aa6685b8e11af2a96983c7db86ba4e593-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.003156097979349782474325970408144197",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6d09db5cb9b73168bee7f041a92e9d5b1ecba6ae-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.01235655706323610728739234968692558",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6e81c8661e47fb8a97a2aac6165163556cf1b246-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.01315057375502983861033474786955586",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6ed53aec4ef64ff50a365378b6c185ae1305b681-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x56cfcaa14c2d63fef909e335733de4c6330306a7",
            },
            reward: "0.002630047323741943089702346475148712",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x7086d16f120ae26a4538b9d9d197da2c557a9ce0-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x3ac7084e8ce0757261b79f87a8e417d2df3d24d3",
            },
            reward: "0.0657502656535619688614417581580608",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x725fb45f9b24a54a9ca9247e102b9bedb9317abd-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xa824dc3ae402dfd6a5de71c6fc30ff9e00411209",
            },
            reward: "0.005259015524508631289390840319591999",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x7ae562345f402240f98b0e6f685dc3a50d4e6e4f-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x32cd06a20b528bced096945d6d165a61e75ccd2a",
            },
            reward: "0.01288529381715655915090064861146368",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x844ae5515519fce2ad9d6e1f588311066582a02b-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x429af9695a3936e2f22d05694775d12237f2723a",
            },
            reward: "0.00000005934585252729328374824405802689894",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x863d0124ad1eaa0d9d7cc4c1c1d15784d85c43c7-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x7076106c13ca93805f2b16c52e64d3592d55457b",
            },
            reward: "0.0000001123949255846217228329719104539856",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x8ea11e4b6507fc26e7e719f945ab750c94ed97f1-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x8522885d735f75b3faeea5cd39ab3d1291da2c77",
            },
            reward: "0.006573646338734090264131451011727802",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x9b9d6bd6eb6589f6f94d417a8385d8e926f8bd49-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4677b560974508e69f3611ccdef6c77af0509a47",
            },
            reward: "0.001314828300630057795400489121754195",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xb145acf3b9b16e91237785c4153318e0b50ea323-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xe1e2a52a21226ba37f28ba6cdf59f20156798f94",
            },
            reward: "0.002370785352270582511676648925324612",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc14673d36d6d073750125205b0171c2f7a9da115-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x83910f3e3e0064c15ff2fe043dd042855861d05d",
            },
            reward: "0.004850003375312765138350359898249438",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc6559e3789e904ca291f914d6857770a9dad2e25-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x3cf08d6a9436a1798c18d24a70f5ad0bea31775e",
            },
            reward: "0.01314760211879176851379580870835102",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc971308c20683f84d1e900a3e9e894651141f58d-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xb92a1d5c73a69a0d72820f6f6221c5a81edb7cc0",
            },
            reward: "0.006574872047978773788052546806030057",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xd84bfc499f039a5fa9e672cfc8619df5ec17f6b1-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.7888024340699816777302146397714042",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xdeff80691cc0331a7a2552e4ae0805b3507c2160-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xab12253171a0d73df64b115cd43fe0a32feb9daa",
            },
            reward: "0.001315023686007288422306186297305307",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xe9bfa6621aa45febfbef539f9111399d33045677-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x771991fc8ce57682775ee73bb28b201f4016b090",
            },
            reward: "0.006574332645271335509579939420229883",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xec53a9b324680840fc6bdbc4d9e2a79a74d6c5bc-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xfa88c88f68fc7a66ccd512a34f7686fded60caf4",
            },
            reward: "0.002628849825966474591718053801479065",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xf931f5500021004c982c544fc470b6ac7efc7ed2-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x0dbc9a65c6fec050eeed9508a707ea4aa0aca4b9",
            },
            reward: "0.0001315023569664462501539207701429819",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xfd7e7d55d35161010a84ab8861796f43af2be503-19566",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.003024593896876874871229054974471522",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x119df0abcef03b4583156edc0eb8fa0c2943d938-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x3cf08d6a9436a1798c18d24a70f5ad0bea31775e",
            },
            reward: "0.009817118669636376328524778814951963",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x194d3864cdc46df1b8c03430c3c774c239b09cb8-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.4932987160059932003138023595351812",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x2410dde3c75a6294ffe6256ed9d64ebf5cd0bb2b-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x7bfee91193d9df2ac0bfe90191d40f23c773c060",
            },
            reward: "0.05279942253648208421867270335460642",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x28ac0e552679f1d79931abfdffbde7a41b3dcb0f-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.0000001027465148024108961330978291500543",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x44edd23e02c2fb360b09a26ca426283c6e27646c-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.0000001030919348363451107156381300494911",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x5893230d361de544a601fc75c7adc079a746dc29-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x296e0c21db4061ebf971e55d5db85011e7ff9797",
            },
            reward: "0.007401076179127278325184811273408439",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x5f19d66d8a4767a0aaf0ba2bb159f108cc0cbae5-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x37e1881f05f33f71e43bb8f284e0ed53e26520d0",
            },
            reward: "0.01057296597018182617883544467629777",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x65044baa1adf7b8db36b9fbd50ea9cf077afa0b7-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xef764bac8a438e7e498c2e5fccf0f174c3e3f8db",
            },
            reward: "0.1548826424428620206091036376745901",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x6e6b04be1bf327175605e243c82b81cc394811ca-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.02061652697470894101734373306420095",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x6ebe0f8884617fe1041ef3086a2b0b8b37cefeb7-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.0001057248944955750794567127362389721",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x73ea7f5feb14c57e44db56b2c49f289d2ae8cac2-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x4938a9a48139ffc440a07695eec11096f8146350",
            },
            reward: "0.005663094576924501212868053812629635",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x7805f6b40bf00011590b72bf3108d801bf7ea495-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x859e1dfb430a7156faef11947f2fc2a3c34b733a",
            },
            reward: "0.01224844416647745848484641798467878",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x78c0cb647acbc34604d96e91733eeec0865adcf4-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x486cd431523e776cf5cd074deecd7bdf29595f8c",
            },
            reward: "0.1057296597018182617883544467629777",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x796e892136842863b01d707e98ebed7b537e766e-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.005286482985090913089417722338148885",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x7f223a526bd08a59d47bb50c5860d882057d9ddf-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.000000007507033529554294712166147871766348",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x9ab69bede4cfe053b476391701e4f796f1b9a1c0-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x97836f9fc0fa0bd02fa5ddcc0194c78dc5217226",
            },
            reward: "0.01057065760145271008100706011084045",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x9fd4048078144ce72710d71d40adbd177875cf52-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x49543e53d159dd5c9d5e232556cfc2781a2d5044",
            },
            reward: "0.005286096518236848309563916073698945",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xd1d59fd62f91d22bbc39aea59ba97049f6a19e8a-19566",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x3f3429d28438cc14133966820b8a9ea61cf1d4f0",
            },
            reward: "0.1057211574310288366527166408854427",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x0779608cef74b957ec268103395e106219c70ea6-19566",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.01665242354606438023323133519369187",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x1546df38aad7928db0fa9e9e944b520a36720475-19566",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04232831699126732037455389289128451",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x238f85fc2dfa0c0e8451ee020ac98c233c18574e-19566",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x330e75e1f48b1ee968197cc870511665a4a5a832",
            },
            reward: "0.0000003377632969512313785805573562529463",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x3013ce6d7300f7fbae144ff3c5b1f3f2d1e5ef8c-19566",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x3f7e19951dfe627d839b17c2b515324fc5103af4",
            },
            reward: "0.06693546261072904322541956660358696",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x349a20e92ad725f665ce7813a89952978d278ba5-19566",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xd790a1516f78e3fb52338084b5c5931a75bb19cf",
            },
            reward: "0.050699904124624197520008676933597",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x4339d258b2b5872295b9bb02dc0b9f8c6ede3d48-19566",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.05530898631777185184000946574574218",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x4c0c6ba26e49bd0f2797096f8c5c6849812086b8-19566",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xeefd6537adbda7b1a9da3f6607dda26b048489c2",
            },
            reward: "0.005447383271860517169667025849505131",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x804ce22ef01f41d63b2a34cb38ff84045f4ed876-19566",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x58e03d622a88b4012ee0a97235c6b110077fb867",
            },
            reward: "0.003318260199395258072262488033830589",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x9002145f2e70a9613113d39176dd663bb6c0f74d-19566",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x25d9d6f36fb3773b98284624e2a58c0cb3c98cd4",
            },
            reward: "0.00987431067063683257868893987113268",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x94f28f7ce31b5562e76a2a4cf4dea36240baec77-19566",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.02026161605662407633329266664803589",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xa6aa2940672cfb631e46ac00a9d31a77a3905b0b-19566",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.6452672381746018519056500150050645",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xa9a8894685c73b14a5ba6e16f82dccd4765195fc-19566",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04608953101954272623228916601333535",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xc76f1f036fdb749674e681762460065ca3671196-19566",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.00000007793399222414351869208262715480762",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xcda0f5a2a1d406029c648a3b97e1e1eac102c59b-19566",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xa4d4448f2328889d79015975a7b4de27649e1ff6",
            },
            reward: "0.001843638597039718280238030505855147",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xce0c79c6c04068a9de6bef5699f12a1cde7df01e-19566",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x50a708e5dfe836601931af3ff6169e5f4e5536ea",
            },
            reward: "0.00152099712373872592560026030800791",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xdfb0b97cef06f2752ab694b8330bd58425435637-19566",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x859e1dfb430a7156faef11947f2fc2a3c34b733a",
            },
            reward: "0.01474906301807249382400252419886458",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xef933fcbfb127d6cf939dea520193c56f43d7e62-19566",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xba842b7da417ba762d75e8f99e11c2980a8f8051",
            },
            reward: "0.001268029813836447697644547414424063",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xf0a5387b9ab9f429fd5b57e1df3f28248b9ae6b6-19566",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xba4074ca3e68095d9a490008fcb68e9ab205636a",
            },
            reward: "0.01843442276690538341254412614405821",
          },
        ],
        week: {
          id: "2795",
        },
      },
      {
        id: "19567",
        borrowDailyRewards: [
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x12c260e672bd8321f6ab246b81a0b7185f3a6d80-19567",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.06537606461205677106571397066721592",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x1e6ee615adb41d8f07bdcf34889dab849d8a4130-19567",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x11d67fa925877813b744abc0917900c2b1d6eb81",
            },
            reward: "0.04272313580809268333797538570034618",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x38ea3693640452756c2ee9a22e607e4c4e0d3f3b-19567",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.5539258147777000370714938269027463",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x58667459ee28b008dccade72cd081d9df7263ec6-19567",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.01816029571423342740411760712386452",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xd16335a50ef275b4b3e691e01a52feae6e25c2d8-19567",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x157595f04c0da495d72ceb84390f444d469c3216",
            },
            reward: "0.04087681340980819123124413018742823",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xd9f7d5fb4aac74b72125e3b4426c8f246d3e9072-19567",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x14bdfda5b5b829f14332a52c15129386284ce36a",
            },
            reward: "0.006537606461205677106571397066721592",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xf6a4062cfd0bee1c12c43b6ea0de7227bed3fd6e-19567",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.2724002692169032127828836823516773",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x011293f0e159739c559493fbdae20cd590c664bc-19567",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x6bdc44c885b166aeb687f2d247e419f5a19e1804",
            },
            reward: "0.02584890221708392882094558518385529",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x01dc26b7ccbd2b007da34e720abeae02b99be553-19567",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.09047115775979375028612808848505162",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x177de1a4f8787f49ef20ec28605c3d9bdea497f0-19567",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x4fd0ff2c49671d4fe1927371cf833e8b3b7f44ea",
            },
            reward: "0.04713380006390903821547185777336571",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x1d63e226a1b3a514bd384b9e9d596071fc8076a7-19567",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.3760119985175349466517296618035238",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x2190842ddf2994c986e08045c02442071b774123-19567",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x53fe1b209c917eeeb996720fe5418572bc0e836c",
            },
            reward: "0.08929620765901720831254280865204299",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x31095e235e45c38ca1657e9798a7aef08cf929fa-19567",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.06274233873671582359290334288570843",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x6e407de25e1c9fd004768a5ca3d6a06b3d5da390-19567",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x4fd0ff2c49671d4fe1927371cf833e8b3b7f44ea",
            },
            reward: "0.02885677447507187687459771624660188",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x9831f3c9511332a83951e735aeaf9a37e000ed39-19567",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.03759904639481654435110546482867663",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x9fcc001800f9c040dcba47ad4840cc49d146c5c7-19567",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x42b2e881b164e4c283fb7b7e15b35cd256209133",
            },
            reward: "0.04934790423261477299010285911156305",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xb74d9b73d63931b029e1dbec784e05dee38c24d5-19567",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.1409940120931850652498162274296233",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xcfb80b3d81c85f401bf139288ae323fe2eff7a88-19567",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x7c0b689a3003e0dbd2d37ce15e8a2273d91bd7f6",
            },
            reward: "0.03054870262019009741990445610602009",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xe7b42d1a36d567d5314f3c990fcd178c556d37e7-19567",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xbdc88f7f9b16863c8709f97f872f4e6e16dd5f6e",
            },
            reward: "0.0211491552300669472347519314939672",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x0115f90c7f562b85444e5c48a277078437d06de4-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x4dc7970c0facd251e4398f706c45f3af877d029b",
            },
            reward: "0.00303245725066280418580095876695793",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x15990263fbf6f475d193ed629db99efd530c0d2c-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x25d9d6f36fb3773b98284624e2a58c0cb3c98cd4",
            },
            reward: "0.01166329711793386225307397485245052",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x1ede520dea27d98bc8d16df2d363c275d7b3dcf1-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x6b32080f61ce43bfdc37b6629706dae405d22389",
            },
            reward: "0.0233265942358677245061456182112243",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x225e341a7dfdfbd49924b5dbb08f531781d0f7af-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.2146078469330032358300966467406004",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x2a07081522d2de69c7566cac45edfda9edf73236-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x1ef678435e3a1581732171df82476995cc041568",
            },
            reward: "0.001837671864030823071394793034955757",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x3363aca0a6bd542d146408246b5d1e3743b977d6-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x1f5f902be1f635b30425b690aa9fd5fa2b6fa79c",
            },
            reward: "0.1866127538869417960491486252340571",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x349a20e92ad725f665ce7813a89952978d278ba5-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xd790a1516f78e3fb52338084b5c5931a75bb19cf",
            },
            reward: "0.0641481341486362423918963699669325",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x3ff988fd12069b3f3bce22fa68a2ee5cb1278e57-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x0658b634aae5e7dbfa7510d6940ffd497df06727",
            },
            reward: "0.01109017229645212032152666857576286",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x40455c3ede1e00771066dcc38777fba73f8d4f64-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x73d31581106e3f6b9dd2579e8d9fec81eba22296",
            },
            reward: "0.004665318847173544901230988837186258",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x48d94176dc8a2169eef1b464e4c857c3080f001f-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x20eadfcaf91bd98674ff8fc341d148e1731576a4",
            },
            reward: "0.2332694113128457146424303293146529",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x4b0f729421d241bbc3665918bbe9f803402a0956-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xcbd6b0dee49eea88a3343ff4e5a2423586b4c1d6",
            },
            reward: "0.02324632647559323212639458890004385",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x51319451698f1c7357dcfd7d833803e6c7315209-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.04665318847173544901228657343509509",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x5bbbeee4878868bd8b15d819ac6d082e4227aafd-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xbdb7194a6f048f57e0bab51aaae0fb623615805b",
            },
            reward: "0.01399595654152063470368830352420528",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x65f335e81b687f8389d9245795885e10588492e2-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x07a1f6fc89223c5ebd4e4ddae89ac97629856a0f",
            },
            reward: "0.006578158497620631777605424309517744",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xa0c64805faea968e6d690f160c2ef8ae9a7dfb3d-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x0183d9be08db4024c2dc9aec10b9526fc6adeef7",
            },
            reward: "0.003498989135380158675923824501308881",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xacdd7f08f9d2b64bf7451171195e7c0dd7a887a2-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xac798df80b371569ec73e37124ffef7e26249667",
            },
            reward: "0.006531446386042962861722451774590062",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xaea1f7431c8d8bee7d6a74e4942a1d509166c849-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x8f767dbe1af8fc0eb2655260f2a4768a3ad49bdc",
            },
            reward: "0.01166329711793386225307164335877377",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xb4f7667c4aa42935a8ed7d92e702097d086e829a-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x2abbf099b7d6d3b25912c5c78f6737456e8736d9",
            },
            reward: "0.006997978270760317351847649002617761",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xd0517b06167727e10d25be193e75d6becffd5504-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x396a6d7a33655c45044143cb8a812227bf279578",
            },
            reward: "0.0866107026378530952508444134542448",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xedbbe7ba1c8daa8f5dde37ce36b02e47341ffa13-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x10649c79428d718621821cf6299e91920284743f",
            },
            reward: "0.01197838548897051842649354715641167",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xf1f916d52cbca47bfa2c4f53fd48cc81228e7ade-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x7c0b689a3003e0dbd2d37ce15e8a2273d91bd7f6",
            },
            reward: "0.01399595654152063470368830352420528",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xfa62b642a718c6e88f3c7a3049040c79a9c5cd61-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x6144a12e348829abb59ead0364cf7c2e540aa715",
            },
            reward: "0.01399595654152063470368830352420528",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x002cd3ca0be3ea53528b7e7c9e34abb81fa2e9ac-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.02411827474289248625826207819530311",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x0052e87f43b4dbf7a881a9a7e3b4ad89dfd50d2f-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.01205913737144624313033635017925538",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x02b6e9b583356cc5d80604ff0f1bd676c2bd27f1-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.01929462568767136072884403677573845",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x51324b76b09a2fc065ad01d02677b7f1ecc7177b-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.5567168822584861721310995380210557",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x62a455e7f460f5cec4a3e64418bb32816895c2ab-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x30be05fe3ed386b8d8afb327b03f50c9d97dcb85",
            },
            reward: "0.04703063574864034820481636356244489",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa499dadf173dc74047b32eb906a355473f7e4624-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x915188a790dcdd06447244196694c9f8a7d2b4c0",
            },
            reward: "0.03617741211433872938859842837455849",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xac12f96c21cebf7e8743cd16a9be5ba8ec3d31ba-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.002978607695800470321761423882569948",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xb87b6092ac461e2dd171fab14e389810ace950ff-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xcb33844b365c53d3462271cee9b719b6fc8ba06a",
            },
            reward: "0.07114898303065569866525974868805813",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xdd010f2ca484bae51eacc0381af9e2d5c2583b3c-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.01326505110859086744324945408902053",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xe8a6fae00900d2c4f04bb009181ee33f9042daa2-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x1dac73f3d00052d7e815b41e7b1b5cb241aa4d70",
            },
            reward: "0.004583411431263620497387222962386214",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xecef821974f44490bb02c9383cf63c79e0cd77ec-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x7f8c24d538c695262afc1408ad4217967da1623a",
            },
            reward: "0.03014784342861560782403290882573271",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xf43f03c304bdbd098826c032b343ac021b98b16b-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xaf97e87375d97f45b1c5f4ea4cc87650f640581f",
            },
            reward: "0.01966158011289053720165838830092494",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xfc2cb559aa59e6c29ad243dba024833b1e149735-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xccd72bea12f3927063be3d8798a4b74082713cb5",
            },
            reward: "0.1628175552687078582046940581429515",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x049a615a01e115a4323e65c132851b0df5b5182b-19567",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf90db858c0697b34a5c400e3a12f30bb2c7dcb6d",
            },
            reward: "0.02336098416846264396652510068298872",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x7eb4951e8b4d13bd551616e617cf94aade909145-19567",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xb6462b67fe692223dffb61c8dc8ad080cba180cc",
            },
            reward: "0.02920121677251478659956671616875386",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x8539a3d18cab5e39538759d6d3c00e0faf75ea5d-19567",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04955446486295759285946560169306616",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x919d51e658ccf344a816f70aef57e432d26781dc-19567",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x7092020d4c6c26f6e06ee1e8cb5b34f9d14341c7",
            },
            reward: "0.08760365031754435979869431118156942",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x9f00ccf7eaf33bde3fe055f4f5fa8c26414953f5-19567",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xc3b1f7ab9fabd729cdf9e90ea54ec447f9464269",
            },
            reward: "0.4109128147476011470677476359473274",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xbe95a322078a5bae5eadb0b6442974880d89e011-19567",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.01460070676568814883380859156798185",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xd38e65022d3912427e5522fd527cc261b038b272-19567",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xe520d9514a85d28fdcffc5092b58afdf64e8fbb4",
            },
            reward: "0.06059953292224347528311470388374466",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xd6398d422bc3ae37a09ea56c66e04b087733f69f-19567",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.3037257777022274949713797619577364",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xfd9af8d65a3bdfe2b31c7b0d8cdc5cf6cd6a04d0-19567",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xaf866405f474b84e893131dcaa34b51c90e51895",
            },
            reward: "0.02044085174076035061969757691683153",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x0e5275ca7dc4bf97fc1a265948d37bb4c96c2cee-19567",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.03824277122078814241468476178409249",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x27192cfbe142d8067ec207ddc5f201b944b308e3-19567",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1239065787553535814235752033405782",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x34a0b597ec750bdf35044f33ac9e1b072b6baf37-19567",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1376739763948373126928626961085319",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xd54ab85d4525e2ad6593226f663949bb11f3f6cd-19567",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x051d091b254ecdbbb4eb8e6311b7939829380b27",
            },
            reward: "0.6879370475932284892255623543252955",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xec847b4317b7b076971a4d9ebb68370de88ee9f1-19567",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.01223962603579247424331498444150187",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x02da703f2ad773c23f13de85e4cb99b575d4f42c-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x1dac73f3d00052d7e815b41e7b1b5cb241aa4d70",
            },
            reward: "0.00825381543296896260744138580281113",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x08a5433378862b6fc301d770b37bf7973acebd24-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x92ec6e838dd90845d7d34dfaa82d6d00f66c8168",
            },
            reward: "0.006828121544215261789731601502222599",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x0d2807b752d53aa74ed99c89b98562118c444d22-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xbdc88f7f9b16863c8709f97f872f4e6e16dd5f6e",
            },
            reward: "0.003386748285930769847707562275788723",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x4fed8be4cef8a73868bd45bfacea95bfb5aa70de-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x2e3bd4e33281ec73b88233ab5f8b0e52a8d6f913",
            },
            reward: "0.002546889335992292647572108120699332",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x777460e2ace7b0a74c8d9ca968f104beecc76f7b-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.009559387676516852025498224560268881",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xade0f7c5070b051bc78838f02ad3114027dd40f4-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.9427953637019363401020998302108712",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xe11d019a01d47faf9ca8ac93749499b118f5abe0-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.02662967402243952097994928752733815",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x1fdc3148c8380e60091ad58c52c42c6868c150eb-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.004413275223286517222365023730125974",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x2b928017cf8bd56a9a4dbcccbe4f0bae88cac00b-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.5146315212930341351071786509280813",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x5447a88b3be260be3d01c3af161b2f234f69fb70-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4a8df644eff45a5fe923cc4a2efec07614a1bfb7",
            },
            reward: "0.01544856087743020838824878839647086",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x8095abd47882bd9eded35cb273ab4e0ed1019c93-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf3e112e0c32e7a30da87517e98a22103ade76d01",
            },
            reward: "0.005046285481025898940145380954914338",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x898296ec830ca5291173f04fd70fdc158ecfa95c-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x1db91f586331d168e2da4c6bd73b689fb9f43516",
            },
            reward: "0.01675326865221886503461397090229123",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x90e115a069dfb68f752c6dd48450ef8b87a6919e-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x30be05fe3ed386b8d8afb327b03f50c9d97dcb85",
            },
            reward: "0.06767021313797374899690840235104287",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xb5f440f5a31b0496b3d456383825a4a5db9a8949-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.06767021313797374899837875876279294",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xec54688608916fb79455cabc3b6f9628e57063ab-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xccd72bea12f3927063be3d8798a4b74082713cb5",
            },
            reward: "0.3064540076987521863285805797284105",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xf2adbf6a1fcc9b1d89804ff6aa59669f6486c64f-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xdffd8bbf8dcaf236c4e009ff6013bfc98407b6c0",
            },
            reward: "0.001912654498304690983580444245870007",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x0e602ea998404154059a90878cdb571f52049e23-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x445bab4342fafcfee8baaec5bd7d6030770d4011",
            },
            reward: "0.01163252288434244708719977184646555",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1849d6a3b7e7c64f0b011f4263a598af9c5321a4-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6175e7a985caeac2db12fada99e626ebd6fe7bcc",
            },
            reward: "0.002349579464858506551056585070390081",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1b492bb36664d042c4e23456276cc91179b86e5f-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x33a74ed005785a83295d3ebe7e9fee647c3b4246",
            },
            reward: "0.002334894593203140883653901582863598",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x3298a83b2d3b7231771a18ba8a17078715cbcccb-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.02936974952217298429160110189375407",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x422e84f35d37ce696b4512a8e0e17b349cfe8426-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4f942119e6ab0a6e4368e795d1d64291a3ff0da4",
            },
            reward: "0.002053485715181468669909037828477753",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x4311606cc02e6746d9d55e36d15aecbe2d263e83-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xff703ebb19c1a4e27ba14e8d7538fc113ca5f906",
            },
            reward: "0.004281961725988074532901803197577931",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x475308549bc8c8208c16e86cc5271e0c4795b616-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x83910f3e3e0064c15ff2fe043dd042855861d05d",
            },
            reward: "0.02936975094557109079939254278170614",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x4a4937a0fe899f3f5b05a9df320e2ad50a672099-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x915188a790dcdd06447244196694c9f8a7d2b4c0",
            },
            reward: "0.03671217913841416483879324987479775",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x4e0fa6a0150fe76e5ebeb6de07c3db2dbf07b181-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.003671233063932903134098728537882261",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x526b2133671787bbfed2de1ea0b806f6f81dc39d-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6b579bacffea19b002271d448a62b161f754401a",
            },
            reward: "0.006568836788878169687480729742015044",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x64f940e1c5f7e75eec2763420092e1e2c6228393-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x1db91f586331d168e2da4c6bd73b689fb9f43516",
            },
            reward: "0.02428288939271096287964095545999322",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6d9b3df93b5e49e3701950f81518200857eb8b07-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.1262898962361447270418674615444075",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6dd04d8cf38168ab9bb3076a53fe11604c846c1f-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x19865bbf18281ad5197ac06e45966dfd3e72a47f",
            },
            reward: "0.004552310213163356441296114865544419",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x818fe871c0f06a9b1e95887ffd3e232d1728fcd8-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.4535932012199369671560866943792593",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x99299a18d07ba4828bdca135f1b6c6ed13eca64f-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x5f0a0e3b30d304fba56e2eee3a442b0bb5c40275",
            },
            reward: "0.02887046075575247393993609116919343",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xa5c5994870fd0f1d3e06ea9a3ddeed1d3f2fd52e-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x3a762044a55802b57f12ed39d83dd1047d77b8f2",
            },
            reward: "0.002594302850995175373862196830631728",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xa6bcc97eb84b64c9cb66c42e68f6abc4cdb758a5-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xcb33844b365c53d3462271cee9b719b6fc8ba06a",
            },
            reward: "0.1309345837253867673605512106226186",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xaded6a47fd19a18363563dcc005c74cd5bebff42-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x25d9d6f36fb3773b98284624e2a58c0cb3c98cd4",
            },
            reward: "0.005873948662146266376907586031529142",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc51d2bf1798af65b1e3177d7de7bfc60c6428a97-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xa824dc3ae402dfd6a5de71c6fc30ff9e00411209",
            },
            reward: "0.005727099945592609716090530756293399",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc94b314d7421faccbbe89cb04e70542b1a325447-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x30be05fe3ed386b8d8afb327b03f50c9d97dcb85",
            },
            reward: "0.07048738394575519648913270673383094",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xd0a066bf800c8d22472aac9495f2fbc51abe483b-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x58e03d622a88b4012ee0a97235c6b110077fb867",
            },
            reward: "0.001558137651523050308396677312338517",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xf93b2208a5854fc3e85492c1503c43fa6bb7ec01-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x5c44368c0ad4c446842738bdbf8f2bbf9876546e",
            },
            reward: "0.01689159155834949644014432193842955",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x4bab58f19702caa5ba8a223da1a4f6a547f7184f-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x3f3429d28438cc14133966820b8a9ea61cf1d4f0",
            },
            reward: "0.3092664051467909243030518265327348",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x56c4f38f95355e86ee42033ad8aef733feaf40bd-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.09445467673889448622597098611134283",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x5f3e3ee5a0644d3b7aa1922767de8285facc9e0d-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xe520d9514a85d28fdcffc5092b58afdf64e8fbb4",
            },
            reward: "0.01062683567587431177612272327296284",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x69a4fa2c1d81b640a69b1f1ac22974578b64cc46-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.0000000005615869603524312382460850466621057",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x92a0aa27ad8572e125803ea0777af1885f25c9b9-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.009445474547734006994520283970386375",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x97bda93b2f4193a34819f418e50d007c6d80a0b7-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xbff78d2838243c9c6c18245d69e543a9ba6c2890",
            },
            reward: "0.5313417837937155888060193344003015",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xabb209661fb03f48f1174ed3b6c4a0a677298b61-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x42087c28f296d3b2dab56e3f5d1aca1388f2be5b",
            },
            reward: "0.0000000008685487840653033138431692343856404",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xd4373715a070bb95c5e7a066efeeade471c1372e-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.02833640302166834586779212189879162",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xdf8fd47da004c44237f6d61f12fbd2b4cc03fa98-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x521dea4e41d3582dffc931c4100d314d0a9f7ee4",
            },
            reward: "0.006494177357478746085408068646052285",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xe695153ee5688b3e75bd3c37ddf0bb39a869235a-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x23b83c2821d1e9fe5c40ce3c014d2420f2f1eeb7",
            },
            reward: "0.01003424228770784552338010307817339",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x1de001a02f1e5db163be5fe07dfceeaaed50af29-19567",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xd9da13de745bfa50ffaafd0a531b92f0511b72cf",
            },
            reward: "0.08217419615855422992634363193032226",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x2fa837f0ad17ea91a2991a608e68263491f2bfab-19567",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04725016279116868220765051435267707",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x69371c6efb2ab226fe8224f3abfe7abb6e80a9ba-19567",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.01438068587755703009817336678752164",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x745ee33177e31b12ce08d2b6256b4d0e351ff3a8-19567",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.7945642875102553456845167680642827",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xcd8cfc4784e971cd960baa91d266d0bd33755425-19567",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x0215c140840b896e1e371525d1f70cefbd09aafa",
            },
            reward: "0.0616306676624647120833157188651963",
          },
        ],
        earnDailyRewards: [
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x07ea5532ab74322c954aad2ecddeb4c82505a2ff-19567",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.07432258326021799668728433789958895",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x506ff697bb7f93f4eb09bccffb976416bbe38c52-19567",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x0f8c58edf65cbd972d175bfe481bc16fa8deee45",
            },
            reward: "0.5405488498226016501042772279781114",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xae9149de7b243d56bd9ce88329ecbb1177a2d5fa-19567",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x239168974aad75472b652046255050e50a0d5fc9",
            },
            reward: "0.3581021653318545473740463618428353",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xc75afc43dedb449e741f8005d76d5fa880a1cef9-19567",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x9599d89ed83e6db03d57c004f858ff82228604e4",
            },
            reward: "0.01351328925780583197637910799406926",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xdfaab0e92d3700c33a72fcdfbb90e349803561e8-19567",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xa968a0920bd35ad65f3bd78a934e45f020d6a1e3",
            },
            reward: "0.01351311232751997385801296428539505",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x1457f27c9ebbb7c5701f7e70839a8a5f477107bc-19567",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.03595630986843857431841634205002056",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x35e69e3fda9994dfb35bee5f7c48f16b65b9abb0-19567",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.4506740556998617762997481802961536",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x632a2770f96d7fd44702e00dcc355811f9b336d3-19567",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x157595f04c0da495d72ceb84390f444d469c3216",
            },
            reward: "0.06477958304133347711693625414606483",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x7d8fe7b235d862e3ce44dd499bb15ea25d7f352a-19567",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.3137679990056442398651348879483691",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xc581b9f298220a8293e7e399dae2dde88dbb1921-19567",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.1348220523847219323997643355593919",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x017a7ca1bfb339cbb6d6cecf3f787516975a7c3b-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x8f767dbe1af8fc0eb2655260f2a4768a3ad49bdc",
            },
            reward: "0.006150747916084546646253056595646979",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x05cfb65544eb5568b1438d94b2095fcea6b30b9d-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x1f5f902be1f635b30425b690aa9fd5fa2b6fa79c",
            },
            reward: "0.1230235458732054729630680434100025",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x06e7f912044524b49b2eb6b72c891e984d44e36d-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.123013327157575567857589954758323",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x098b98afa71f950ea862b4e0d91b183e7bc16b69-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x07a1f6fc89223c5ebd4e4ddae89ac97629856a0f",
            },
            reward: "0.006110250229260732819924386141810515",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x18877e98dcf273b46ae45dc90005b2de3dec4079-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x2757ae02f65db7ce8cf2b2261c58f07a0170e58e",
            },
            reward: "0.0006151177293660273648153402170500127",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x1aab626f725dfb8a1017ccb658ad308b71517346-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.0000000163050009089494889516150582846011",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x2abe8bfee84fcb968e2233c7307c9d1881e43157-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x47547895218274e121e4219a3fd23235377a9903",
            },
            reward: "0.01230198564485439852605868475573546",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x32dbb4885e665fcc2cb74fa2bc74f208d1b3a900-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xf7c7ca163ddfe69218377ab7086bdfc9a50f4e1e",
            },
            reward: "0.002460441568939241600880505130415598",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x3a71da5ea3dd8cbc10d3fe060c0669bc4eea2b12-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xac798df80b371569ec73e37124ffef7e26249667",
            },
            reward: "0.003444659284449753242965905215480071",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x54bba40e7f7b6cca98c0ce02095234aad54abe48-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.01230252924353539042458203113477327",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x57ccb41682e25faed21b3e992d6240e399ec9dcd-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x3e4dd7e5c37fe838eaffc89a551e1c311b7d14f8",
            },
            reward: "0.00123019804306051193988182389046015",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x5c4088920b657726013ae134737f6fee06e23216-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.00000009129430995789890545193498357603377",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x68c927dfc35367ab0909d4cf7386deeeb425d081-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xbdb7194a6f048f57e0bab51aaae0fb623615805b",
            },
            reward: "0.007381412752392328377784082604600152",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x73a2cff38d41ec035afa3038f4c6140ce69ba15c-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x5fcdc32dfc361a32e9d5ab9a384b890c62d0b8ac",
            },
            reward: "0.0003690706376196164188892041302300076",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x74c3f6f294b9825f98ca08816f2529fdf093d5bc-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x0745a468966c6be811dda6d1953fce2798efc1f1",
            },
            reward: "0.06148796788047627122251566803860143",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x829c190ec5468eeb29fa5621ca65a76aac2eaa44-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xa62d7ad2fddbad38a0aba25e40cdfe2edfa4d183",
            },
            reward: "0.01230157550177895633160073554305087",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x856926c82ba816e84bce9d7913de57c985cfbd61-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x3e4dd7e5c37fe838eaffc89a551e1c311b7d14f8",
            },
            reward: "0.01107178123407522770605724004084459",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x9b333d180d559797db6682e11e6e5e494b25fe5f-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xd50cbde55f8da4e8cf94f38deae2c722a5bd156b",
            },
            reward: "0.02411227495186071859481235591706963",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xbf5f2a7883572e0b23b387a848c417b9c31dd936-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xc24dc96768d7a96ca37aa3e65787f69afaf1a354",
            },
            reward: "0.01230147566584859853145508993776571",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xc3b5493dcaafdcb5fe6d627efd099dd0294ca4ad-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xc64844d9b3db280a6e46c1431e2229cd62dd2d69",
            },
            reward: "0.04141311725143459363438459164108151",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xc98d804cfacda3af5d07ca52f9c8137220f8f37e-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x4ea4309e5fcb06201ea54e0fb149de522138cdc7",
            },
            reward: "0.1230220201744534949926593181583895",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xcdac1a2879ae3b612a5667228e629ccc516a66c6-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.0000001161538544624088281425290929159267",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xd3696b74d9fdddce791bcb2c3eea1c137a0b8861-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xd9da13de745bfa50ffaafd0a531b92f0511b72cf",
            },
            reward: "0.1230405920821825778555701571057388",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xe7370c3a19a9676d142cc9641909afa0a888d215-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x5a1b8d6a57445deced8f816310fdb0aa6367cf10",
            },
            reward: "0.001615461958064148249003619626807219",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xf0afb9dea61d5bcaa96ea2f3ec1b074714a4531b-19567",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.2912302234663164954420256599269882",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x178ec3e0dca23e5c448b2ac7e4388592883a3d55-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x83910f3e3e0064c15ff2fe043dd042855861d05d",
            },
            reward: "0.0000001214211428937362411163460858439541",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x17dc1526c6ff9cf0c702257775bfbab2385f6fae-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.01207451370780685067270215139535627",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x2815cb20c1063f27d6e5d04b6cd2904af5544bff-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xe793a7a7c7b7a4cefddb30f856b01f36e51b1b82",
            },
            reward: "0.0002414907400282999163284180828057914",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x2a6536e4edb891eba287e7d977421a6df8bb6dea-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xac798df80b371569ec73e37124ffef7e26249667",
            },
            reward: "0.004829805483122740269080860558142507",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x352cfc59b91088656ebaaab3b42febe1b45f868a-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xa4fd65694a9708c2d204bdf7acf8b9c09b105903",
            },
            reward: "0.003622354338505855638780206439064152",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x3c21a1e9b544a56a450898b737a93b8220665e5a-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.01207458618019604892705424109497451",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x42474bffae9d0b4e9dc4e8ea48a5705eacdcb087-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xf44593dfae05bff213c876a8e1fdcc15a45964df",
            },
            reward: "0.01207451370780685067270215139535627",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x50cc056966b4f1eaef6157390940115d2a396188-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5d12aa6a6001fb326332c3801c6bd12449b6e44e",
            },
            reward: "0.0002414455948679527785626385010661246",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x538112796335be43a765a5cde21f080c3296be64-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x915188a790dcdd06447244196694c9f8a7d2b4c0",
            },
            reward: "0.03622188433710767289023542580059257",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x5f070b42e7fb07786c606d7a162e36056bbfb3b5-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.002414820249363383539357561294128343",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x6030bec53dcf30ccdbced5f578befd80b9b10601-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x9578e8369369fa05e5f2fc8d80a234ad2f8608a8",
            },
            reward: "0.003621558937522610955201215516048172",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x6182164f9f39364908763e94adcc775a2931cb49-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xebe4d96a48c4d0659fadfcae5a132de3a5733374",
            },
            reward: "0.004829805483122740269080860558142507",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x650899474737713e9c247aea3aa777b3c2ed4964-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x7076106c13ca93805f2b16c52e64d3592d55457b",
            },
            reward: "0.00000005802196799876187003648778541672629",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x68ae6b8206610be3d862b4b26b1de35a058c965f-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xcdc8698745db38280d649fb9e7322d899c4a1bd0",
            },
            reward: "0.01207181258457718246217883854703406",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x6f09e208d0bcd35e1db162bed664f3848c7172b4-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x66a4f5d0b57d86bf1b9bfc63e991a9387791fdcd",
            },
            reward: "0.01931922193249096107632344223257003",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x8175279cef254dbf7d0d9cbfd193dd49bc1025d6-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x9cdbddf646a86ec987394c807defed498dbc7df4",
            },
            reward: "0.0003017958725191709234818821049155467",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x8c0ff2a44c53f823c703e83a75d287b37f5c9c12-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xe922bc2ad029b1efafc3eb3ff776219c3dfbb625",
            },
            reward: "0.006037256853903425336351075697678134",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x97f5ea81f39cb9a1d68366503dd282a8c0ba6d29-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.00000004527896789549688516101837805162333",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x98296fae90b58a3db28e7fdca20c96663043750c-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xb92a1d5c73a69a0d72820f6f6221c5a81edb7cc0",
            },
            reward: "0.006037256853903425336351075697678134",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x9b90a6e571e286bd10e4f5ef3d428cd89b911740-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.02414902741561370134540430279071254",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa4becfd89a985ea0cff9c1e90375bd1de1bde8ca-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xaf8a08ddaedd2378b8075f8b90cee4b066ae0df7",
            },
            reward: "0.001207451370780685067270215139535627",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa5af820995e5383bfaeb7c6ba22f3eb55e35f768-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xb0d6ae7784a9f20c1e34218998f0fc5c24972441",
            },
            reward: "0.01207090841238758960936656795969668",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa641456aa2378540e3be55a2473ac8065170db51-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x9730299b10a30bdbaf81815c99b4657c685314ab",
            },
            reward: "0.0006037256853903425336351075697678134",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa64d42e8b130f306b8b8add558a095cdec8b8dee-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5e4568c4d8343052a06ec8aab1e124af08b73248",
            },
            reward: "0.0003018628426951712668175537848839067",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xab9c5fef3a48d4b8501b9e226589df4d81b08401-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.007244292549985718240701520252657166",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xb20f0e2b013655346c6d9c54b16decb7b934fc91-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.6175757639617466240129482067067025",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xb4b84f7205667c6f696add26462d51ba4305bc18-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x7f8c24d538c695262afc1408ad4217967da1623a",
            },
            reward: "0.03138464372710002158108882841193839",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xbafacc6f392410d2d47cb9ca25541e17fd4badc9-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xce27fa2d00b91c9486e3545c75cd7df86d4e3632",
            },
            reward: "0.002463086175096712247162960671839535",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xbc3f05481a54a949ebe764d095da703e9ac96c44-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x70e439584ef1ba300106b9c16543eaa1de676dc2",
            },
            reward: "0.02776588867266703566089770476568035",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xbd431752a75950788fe689d49d970f95a1732581-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xeb434da562e7a8ba045472fd1e134b420771ef7a",
            },
            reward: "0.02414459895046826618920490006218027",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xcd4d1da85c2894148772d088e14e226cc9580af0-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x3ac7084e8ce0757261b79f87a8e417d2df3d24d3",
            },
            reward: "0.06037083172839896977919596829780047",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xe316409d3df47accfdbf20c7cc12ea0a9fc1cb87-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.002777138152795575654721494820931942",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xe5766c80dea6a9b873d56f7149db185e8ab919ba-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x1dac73f3d00052d7e815b41e7b1b5cb241aa4d70",
            },
            reward: "0.001207451370780685067270215139535627",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xf00e853ed9216008355c3ef0843a7b20d3fde16c-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.02777018493007908375961313366405614",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xf073cde213b7a6da101ed7e20ee6e5e9a9973b07-19567",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xe1e2a52a21226ba37f28ba6cdf59f20156798f94",
            },
            reward: "0.02294879647508985832593296119427863",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x03431c179e431c9785cf82d0ea2729b9561ae76b-19567",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xef764bac8a438e7e498c2e5fccf0f174c3e3f8db",
            },
            reward: "0.379655177508683012360807032161545",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x0dbaa1361088a250de5a893bd2efbd3e24545ec8-19567",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xba842b7da417ba762d75e8f99e11c2980a8f8051",
            },
            reward: "0.003036562469555942730038225548108382",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x10119b4fc928a31ab4fd764f743e871f02797446-19567",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xb6462b67fe692223dffb61c8dc8ad080cba180cc",
            },
            reward: "0.02531034516724553415738713547743633",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x13927d76c5a2c5985b25f4c0678d489f04126544-19567",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x59653fd9713a30c54237a6fd21fd97ba141abbe0",
            },
            reward: "0.004986162048578793924360766575010946",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x15eafdb60976e7d22c0ad6c77f05dc64db78f79c-19567",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x296e0c21db4061ebf971e55d5db85011e7ff9797",
            },
            reward: "0.01265377230420824765450025965197923",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x3910239862b50a5915d49b05c94d97b89265f055-19567",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x7ab29b393aad63e7119c004bb45eefeaa3e70da5",
            },
            reward: "0.002514329688914171363194838038328525",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x575879fa71ba697042e973be663758b06f63765e-19567",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x318e3835baa3f83ca734d9afb9996f702aa06a3d",
            },
            reward: "0.02500669310909524874196918708538695",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x6844a1d7903f14fba8c12a705577617a11a4ab93-19567",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x7092020d4c6c26f6e06ee1e8cb5b34f9d14341c7",
            },
            reward: "0.07592923189594970556209373967422834",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x71b4201c1f312f4f04be8be7b02e0ed224d784fb-19567",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.01265517258362276707869356773871817",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x77f66e4a6383893ecaf0803e52fa1e8b60d43fe9-19567",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xeefd6537adbda7b1a9da3f6607dda26b048489c2",
            },
            reward: "0.002586082236102515557388169985313849",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x92a95ea3d6c5b81fe85d704203ec1c19e3266a10-19567",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.04865439467110546106403548738803937",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xadbf773d6cb8373d64861c7ae4b02aacfbe2ba76-19567",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x37e1881f05f33f71e43bb8f284e0ed53e26520d0",
            },
            reward: "0.02531034516724553415738713547743633",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xcef1a9a0dd2cdd92b5669f6b220799104efa865e-19567",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf71d161fdc3895f21612d79f15aa819b7a3d296a",
            },
            reward: "0.3817017311496930656481444551984686",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x0e3f1e786b42465ca7d68fede5389bfca714db42-19567",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xf1a1602c90d8e510bc583eabb53667e3afae4b52",
            },
            reward: "0.001520692011188938115711574989330543",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x0f3436efa3097f960a27b50e673db0b7de765577-19567",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.00000001493414597871352188008296620198465",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x1444e8c66fd6bc37262f26a33bc217b3e0403ab6-19567",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.3041442214728787667843384620799781",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x2643d4f4ffc86ee595c0d8a68a27bef82eab85e4-19567",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x20eadfcaf91bd98674ff8fc341d148e1731576a4",
            },
            reward: "0.1368667826316913976227411905793081",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x281a602477c5b328fcef497e47bb4a4a6b963614-19567",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x58e03d622a88b4012ee0a97235c6b110077fb867",
            },
            reward: "0.007603698519038412524184976563945292",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x2b947350d8e4a4aa1173ee0e4655b33fc8ba55ad-19567",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xde055950ccaaf115c8d76b33e6503ee403875ccb",
            },
            reward: "0.0009121625335546255115213698802237361",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x48a19d4eb3553a476ad6218e0625b606be7bc4fa-19567",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x4fd0ff2c49671d4fe1927371cf833e8b3b7f44ea",
            },
            reward: "0.000000004912245420233350759015591310706247",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x51a1f69f45791b8e5484dd9d526199d9f29223fa-19567",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x6b32080f61ce43bfdc37b6629706dae405d22389",
            },
            reward: "0.01520666855629376930844142263892858",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x5d63b70786f582eb96ab006a4e51f3b930e29e51-19567",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.01520742029241015529141568784214535",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x5dcf7edd434cb7f8b255b5d913783792e41b03d1-19567",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.000000005424644402337380153280238429687966",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x61a5471a19fcceb07ed651ea402a149ebd6fb0d1-19567",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1368667826316913976227411905793081",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x73933d5e77222f5987cfe3612eebbc88b7833c57-19567",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xdb10d21f28a34fd04e4425eac777483798f7e217",
            },
            reward: "0.005320010239552487834806597891745776",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xa0af774d47a46f8958b5289e21b1cb6210a62f62-19567",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x859e1dfb430a7156faef11947f2fc2a3c34b733a",
            },
            reward: "0.01216593623392812423313255027371628",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xa3fb5786e157d6b2618859b1921f8b71d4f5eedd-19567",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.0380179134861128857342270368434681",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xbfdfc5e00155cd27b8cc4cf7ab4cf5551b54a8f7-19567",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xb225bf7e4f1da339195972ca7e4a1d9ff52156ce",
            },
            reward: "0.007603710146205077645707843921072673",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xcfab8ff364d67af18cbec98b8d47398d503e4a0f-19567",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.00000001017385321376944663618362191289478",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xd29bc9af132fe09f0a6a342d6a5c27e12baaa14f-19567",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1429497507486554597393074657161662",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xdf2dba82533627d6688efe2e467a76099576a9e3-19567",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.0001520742029241015529141568784214535",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xf7e4255bea7efa35c7c9253a2cfbb2ee3ccef378-19567",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x4ea4309e5fcb06201ea54e0fb149de522138cdc7",
            },
            reward: "0.1754621408489853854251090447598238",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x17e337bac18fb13ee3b547a44c15cd77561ff594-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.05153017334814262491543463051043061",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x2abdda4c66bc2156f81f7056bc87a904017bdad2-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.0000007420722133038669468446230409757883",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x4c19b8a92d319ff5261a4f8621c897e8d9c36e0f-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x37e1881f05f33f71e43bb8f284e0ed53e26520d0",
            },
            reward: "0.01288270709375404521434110905863478",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x4c29c31161b6313b716e36402a3d56f6e4a4964e-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x5b191f5a2b4a867c4ed71858daccc51fc59c69c0",
            },
            reward: "0.01291520236635810133299542503341477",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x52448305da311c4a308ed72c7fb0134248abf373-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x3f3429d28438cc14133966820b8a9ea61cf1d4f0",
            },
            reward: "0.1288259732196574110868015064065235",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x540b46c36557d3212e06e37182e5296bb486323c-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x4adf9b737ab9c97f5728cbcf143483cf6c2f7df3",
            },
            reward: "0.00644104384312419332348705690112527",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x64943f1ac7b541c3b6bdf45464c9b4093e4a7fab-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.00644135354687702260717055452931739",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x7602834c716948c438b9729fe0384b3aec52b3eb-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xef764bac8a438e7e498c2e5fccf0f174c3e3f8db",
            },
            reward: "0.1932035732746772460720303418542397",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x8219adc2f9791e2d8a67882a4a73cc85e277c524-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xebfb476e0f9c8d74f0fce72b688d7177dcbb73c2",
            },
            reward: "0.001288270709375404521434110905863478",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x8ce6fc3cca6deb3545af4e32a49a93a4c7a61e8a-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x11d67fa925877813b744abc0917900c2b1d6eb81",
            },
            reward: "0.03846982869928255012120709989083212",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xa121d81b6b83075ad0ee5d4a35087af262712173-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xf9f668901a13b2c817a9cc9d7fed50868b7af8be",
            },
            reward: "0.01642011810379959347356617683060907",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xa988e47d6c2549c485ee612cb0d0dfced04b4eb1-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.4508809680065499327192298530432703",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xb756db88231a365c7be83adb959cc6d3e2218ec7-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x7139a445ecc1a597695cc9a077caaa41e0f18391",
            },
            reward: "0.00000001393556558418892588658246904224142",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xbf62dc76e06555ffadf4c7cd7353b055a6d09e52-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x3cf08d6a9436a1798c18d24a70f5ad0bea31775e",
            },
            reward: "0.01288275566789157567427768769228801",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xc0558bcec4725c038256174fac0c1921fb145afa-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xe3db0df6a4a62106a3dd5cef76c196a53f3e7e4d",
            },
            reward: "0.01286876277822956062698490080380934",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xd29721fd44d8e4cd02bae1453e40b2d72276859b-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.004707263290189706194609449351383548",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xda2035f6b3d6618bbf5fc591b25b49b6ab175d39-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.01932393194755800705190521358014076",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xf051ffec03e1842939c2fe40c1a8623da624b220-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x6b32080f61ce43bfdc37b6629706dae405d22389",
            },
            reward: "0.0000000481014341135778787935748724230006",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xf220126d67557ff209c921f4d2744f85b218b664-19567",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.03091726999532002343077335882773481",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x065af1d2579d2896c87d1072bcecb64f70dbcc52-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x6bdc44c885b166aeb687f2d247e419f5a19e1804",
            },
            reward: "0.0000001268040109765567991637458743637671",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x0ab511f268ecb706b956e0a6bb99f9268282e3dd-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x3ac7084e8ce0757261b79f87a8e417d2df3d24d3",
            },
            reward: "0.07339804583917585525399375882568128",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x0c0e979e5d699e51f4707527e3b4a1576406270b-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x7076106c13ca93805f2b16c52e64d3592d55457b",
            },
            reward: "0.0105693186008413231565751012708981",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x0c7a5ef0532c0e1b8b4984ee4e4e19283f2cf7cc-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x2068d14ee50772dd6e89c6f64f32adad0cc936ef",
            },
            reward: "0.008073416592288292906188505804055544",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x118954ab01883c2c245d7a9b737df80e8c4afbfe-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.004404202647881545078800685235193791",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x16d559ee5ca6f8f14c15ebd511809722f4b87702-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.01468004693791273356386184899649433",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x2b4f1f53c4bbf3fa77e2a7faf1cfc063f7c21523-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x1a918a8386f75f382e2a1b2e10b807c39728caf2",
            },
            reward: "0.003684533362895911827959985079416993",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x4820233ad8d7bb201f9462d242922d28926bc642-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x28af2a3c28b7ecf7d84a8ba0fddf7525a88e1f61",
            },
            reward: "0.004403300755497344671875094367181871",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x4f1122cc1723e5d60cc11c68be19972b8e3be8d1-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x7bfee91193d9df2ac0bfe90191d40f23c773c060",
            },
            reward: "0.01761488694874801833595055667536163",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x5ef7d0933cfb377f11f125ba0d74812c18f35520-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf9f061d9a5f04e223ed3c560e03a8ab0a70cc1c4",
            },
            reward: "0.02201941375175275657619812764770438",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x5f38bd14ffcf23f0f8b6ad90f3dfcd15077e2b8f-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x66a4f5d0b57d86bf1b9bfc63e991a9387791fdcd",
            },
            reward: "0.01174243900245609186758134226192867",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x6ffcd46a8194ec8d3617f3bee62334de71967033-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xe1e2a52a21226ba37f28ba6cdf59f20156798f94",
            },
            reward: "0.04403892095446238687600651582361195",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xab4632810f9b93eccc993fe804f9da57875649fe-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xdb10d21f28a34fd04e4425eac777483798f7e217",
            },
            reward: "0.002054461146953861553192452728979767",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xaee5b0711b31a7954406b40f2dbc079b2d6fb65f-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xab12253171a0d73df64b115cd43fe0a32feb9daa",
            },
            reward: "0.002789337316383446216198982865382848",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xb9134373f544527d15ce3cdd8cb1f78d72acf42a-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.03009319879406210065413744111852933",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xc3006429aa36fc6d14ead73ac106d42ffcedd576-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xa0ce55801b0b88f2df2ef026eb8da79e9f0ad9c1",
            },
            reward: "0.0007820712166098466315685521341914548",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xe60d6cc634782add49132dea0a70b0b014fd0500-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xd790a1516f78e3fb52338084b5c5931a75bb19cf",
            },
            reward: "0.001468226514214449873143811978145493",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xec6224e36c67b54e3daaa968cd1cff6781e003ac-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.7339451035439292948081063361782517",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xeedff03dd73862e59f5c48792ac9bd241ecd11dd-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.00000006290777387421147687349009580187435",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xfa16a59a3458e5008041109c2add292d9886c606-19567",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xd46c81245a0582891c2249daf2d68925977cf2a7",
            },
            reward: "0.01423888636214988938038486377302067",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x08a27f3ee826ef49d1673846416179c3584671f6-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xe793a7a7c7b7a4cefddb30f856b01f36e51b1b82",
            },
            reward: "0.0003995721173397986742523038568073972",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x0b03f8ac3ff960b3db43a3f549fe0c98bd0c6102-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf3e112e0c32e7a30da87517e98a22103ade76d01",
            },
            reward: "0.004009074063212364400393226209692491",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x12b9aadce493ff66d34298e3b5b86fcea8be8290-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6bdc44c885b166aeb687f2d247e419f5a19e1804",
            },
            reward: "0.00000005507038720369292725586561015760586",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1af10c87e3083e47c88a81cb4c60542e82f47cb7-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x28af2a3c28b7ecf7d84a8ba0fddf7525a88e1f61",
            },
            reward: "0.003995733928672564376318649218243703",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1affd8e82ddc8ab62c34600edfe946ccc777e744-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.006659398822093361308950322450108542",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x49677b6f91c52edb792c4568141a120920454277-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf9107317b0ff77ed5b7adea15e50514a3564002b",
            },
            reward: "0.0006925725158481695032919695310156982",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x542bb88299feff0b6a4f5a38f26c821647d43791-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xecc0da4bf963c23e9ec9740b1f06cb192c5195a1",
            },
            reward: "0.01331577618047458609006113140704526",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x5be1d28851c974f57731a63cfb44e75cb8016ff5-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x000f4432a40560bbff1b581a8b7aded8dab80026",
            },
            reward: "0.004661680616126020898590544270397376",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x637cae3aa6685b8e11af2a96983c7db86ba4e593-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.003196603904222483242838452791781388",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6d09db5cb9b73168bee7f041a92e9d5b1ecba6ae-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.01251514332239647637267993935903454",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6d77d2ff5fb75f27032a4dd9f93de3138a29ceb5-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf927f23ce9d81270b5c6802ea4d7da1a346fafe2",
            },
            reward: "0.003632866576682500604677997224168098",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6e81c8661e47fb8a97a2aac6165163556cf1b246-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.01331935056615529382303959958398643",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6ed53aec4ef64ff50a365378b6c185ae1305b681-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x56cfcaa14c2d63fef909e335733de4c6330306a7",
            },
            reward: "0.002663801820593490971140674002709636",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x7086d16f120ae26a4538b9d9d197da2c557a9ce0-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x3ac7084e8ce0757261b79f87a8e417d2df3d24d3",
            },
            reward: "0.06659411630026210245022569128567431",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x725fb45f9b24a54a9ca9247e102b9bedb9317abd-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xa824dc3ae402dfd6a5de71c6fc30ff9e00411209",
            },
            reward: "0.005326510668554824738608970632315196",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x7ae562345f402240f98b0e6f685dc3a50d4e6e4f-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x32cd06a20b528bced096945d6d165a61e75ccd2a",
            },
            reward: "0.01305066597820332968721357743831081",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x844ae5515519fce2ad9d6e1f588311066582a02b-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x429af9695a3936e2f22d05694775d12237f2723a",
            },
            reward: "0.00000006010750779265743520842013835638263",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x863d0124ad1eaa0d9d7cc4c1c1d15784d85c43c7-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x7076106c13ca93805f2b16c52e64d3592d55457b",
            },
            reward: "0.0000001138374221235730951660876217552958",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x8ea11e4b6507fc26e7e719f945ab750c94ed97f1-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x8522885d735f75b3faeea5cd39ab3d1291da2c77",
            },
            reward: "0.006658013689329246583753128617840042",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x9b9d6bd6eb6589f6f94d417a8385d8e926f8bd49-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4677b560974508e69f3611ccdef6c77af0509a47",
            },
            reward: "0.001331703041754791253142642743198577",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc0d6f11604e9a6e41667937db52e555b15e406b1-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x53dc3204f2f294f6a5649a36ac295f74a0db92e0",
            },
            reward: "0.0003134755974822655973456830399711089",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc14673d36d6d073750125205b0171c2f7a9da115-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x83910f3e3e0064c15ff2fe043dd042855861d05d",
            },
            reward: "0.004912249184422036622320594975187921",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc6559e3789e904ca291f914d6857770a9dad2e25-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x3cf08d6a9436a1798c18d24a70f5ad0bea31775e",
            },
            reward: "0.01331634079140726749859123446735918",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc971308c20683f84d1e900a3e9e894651141f58d-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xb92a1d5c73a69a0d72820f6f6221c5a81edb7cc0",
            },
            reward: "0.006659255129545181879197810644421131",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xd84bfc499f039a5fa9e672cfc8619df5ec17f6b1-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.7989260653206264189304079238695687",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xdeff80691cc0331a7a2552e4ae0805b3507c2160-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xab12253171a0d73df64b115cd43fe0a32feb9daa",
            },
            reward: "0.001331900934742832162486173553316582",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xe9bfa6621aa45febfbef539f9111399d33045677-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x771991fc8ce57682775ee73bb28b201f4016b090",
            },
            reward: "0.006658708804047105736047877657379808",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xec53a9b324680840fc6bdbc4d9e2a79a74d6c5bc-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xfa88c88f68fc7a66ccd512a34f7686fded60caf4",
            },
            reward: "0.002662588953917802732069331024727892",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xf931f5500021004c982c544fc470b6ac7efc7ed2-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x0dbc9a65c6fec050eeed9508a707ea4aa0aca4b9",
            },
            reward: "0.0001331900816906841645100691802441197",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xfd7e7d55d35161010a84ab8861796f43af2be503-19567",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.00306341207487987977438685059212383",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x119df0abcef03b4583156edc0eb8fa0c2943d938-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x3cf08d6a9436a1798c18d24a70f5ad0bea31775e",
            },
            reward: "0.009817118669636376328524778814951963",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x194d3864cdc46df1b8c03430c3c774c239b09cb8-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.4932987160059932003138023595351812",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x2410dde3c75a6294ffe6256ed9d64ebf5cd0bb2b-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x7bfee91193d9df2ac0bfe90191d40f23c773c060",
            },
            reward: "0.05279942253648208421867270335460642",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x28ac0e552679f1d79931abfdffbde7a41b3dcb0f-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.0000001027465148024108961330978291500543",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x44edd23e02c2fb360b09a26ca426283c6e27646c-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.0000001030919348363451107156381300494911",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x5893230d361de544a601fc75c7adc079a746dc29-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x296e0c21db4061ebf971e55d5db85011e7ff9797",
            },
            reward: "0.007401076179127278325184811273408439",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x5f19d66d8a4767a0aaf0ba2bb159f108cc0cbae5-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x37e1881f05f33f71e43bb8f284e0ed53e26520d0",
            },
            reward: "0.01057296597018182617883544467629777",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x65044baa1adf7b8db36b9fbd50ea9cf077afa0b7-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xef764bac8a438e7e498c2e5fccf0f174c3e3f8db",
            },
            reward: "0.1548826424428620206091036376745901",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x6e6b04be1bf327175605e243c82b81cc394811ca-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.02061652697470894101734373306420095",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x6ebe0f8884617fe1041ef3086a2b0b8b37cefeb7-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.0001057248944955750794567127362389721",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x73ea7f5feb14c57e44db56b2c49f289d2ae8cac2-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x4938a9a48139ffc440a07695eec11096f8146350",
            },
            reward: "0.005663094576924501212868053812629635",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x7805f6b40bf00011590b72bf3108d801bf7ea495-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x859e1dfb430a7156faef11947f2fc2a3c34b733a",
            },
            reward: "0.01224844416647745848484641798467878",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x78c0cb647acbc34604d96e91733eeec0865adcf4-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x486cd431523e776cf5cd074deecd7bdf29595f8c",
            },
            reward: "0.1057296597018182617883544467629777",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x796e892136842863b01d707e98ebed7b537e766e-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.005286482985090913089417722338148885",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x7f223a526bd08a59d47bb50c5860d882057d9ddf-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.000000007507033529554294712166147871766348",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x9ab69bede4cfe053b476391701e4f796f1b9a1c0-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x97836f9fc0fa0bd02fa5ddcc0194c78dc5217226",
            },
            reward: "0.01057065760145271008100706011084045",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x9fd4048078144ce72710d71d40adbd177875cf52-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x49543e53d159dd5c9d5e232556cfc2781a2d5044",
            },
            reward: "0.005286096518236848309563916073698945",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xd1d59fd62f91d22bbc39aea59ba97049f6a19e8a-19567",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x3f3429d28438cc14133966820b8a9ea61cf1d4f0",
            },
            reward: "0.1057211574310288366527166408854427",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x0779608cef74b957ec268103395e106219c70ea6-19567",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.01784702223563025931612523890088214",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x1546df38aad7928db0fa9e9e944b520a36720475-19567",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04536483307971665886782433015867346",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x238f85fc2dfa0c0e8451ee020ac98c233c18574e-19567",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x330e75e1f48b1ee968197cc870511665a4a5a832",
            },
            reward: "0.0000003619934992881610532867958542858225",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x349a20e92ad725f665ce7813a89952978d278ba5-19567",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xd790a1516f78e3fb52338084b5c5931a75bb19cf",
            },
            reward: "0.05433697466038449536071551684646564",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x4339d258b2b5872295b9bb02dc0b9f8c6ede3d48-19567",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.05927669962951035857532601837796252",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x4c0c6ba26e49bd0f2797096f8c5c6849812086b8-19567",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xeefd6537adbda7b1a9da3f6607dda26b048489c2",
            },
            reward: "0.005838163442694307114710367063841131",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x804ce22ef01f41d63b2a34cb38ff84045f4ed876-19567",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x58e03d622a88b4012ee0a97235c6b110077fb867",
            },
            reward: "0.003556302984871551930776298241439744",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x9002145f2e70a9613113d39176dd663bb6c0f74d-19567",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x25d9d6f36fb3773b98284624e2a58c0cb3c98cd4",
            },
            reward: "0.01058266633759901211230539715952457",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x94f28f7ce31b5562e76a2a4cf4dea36240baec77-19567",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.02171512820894082227767230166763936",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xa6aa2940672cfb631e46ac00a9d31a77a3905b0b-19567",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.6915569205749364234698826460109044",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xa9a8894685c73b14a5ba6e16f82dccd4765195fc-19567",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04939586617288226242646509993226764",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xc76f1f036fdb749674e681762460065ca3671196-19567",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.0000000835247607225584173833459237925517",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xcda0f5a2a1d406029c648a3b97e1e1eac102c59b-19567",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xa4d4448f2328889d79015975a7b4de27649e1ff6",
            },
            reward: "0.001975896117752205716927220806038875",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xce0c79c6c04068a9de6bef5699f12a1cde7df01e-19567",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x50a708e5dfe836601931af3ff6169e5f4e5536ea",
            },
            reward: "0.001630109239811534860821465505393969",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xdfb0b97cef06f2752ab694b8330bd58425435637-19567",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x859e1dfb430a7156faef11947f2fc2a3c34b733a",
            },
            reward: "0.01580711990120276228675360490079001",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xef933fcbfb127d6cf939dea520193c56f43d7e62-19567",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xba842b7da417ba762d75e8f99e11c2980a8f8051",
            },
            reward: "0.001358994756551797347443278995773483",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xf0a5387b9ab9f429fd5b57e1df3f28248b9ae6b6-19567",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xba4074ca3e68095d9a490008fcb68e9ab205636a",
            },
            reward: "0.01975685713925553761678054529062496",
          },
        ],
        week: {
          id: "2795",
        },
      },
      {
        id: "19568",
        borrowDailyRewards: [
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x12c260e672bd8321f6ab246b81a0b7185f3a6d80-19568",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.06398540179230863852655135945048562",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x1e6ee615adb41d8f07bdcf34889dab849d8a4130-19568",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x11d67fa925877813b744abc0917900c2b1d6eb81",
            },
            reward: "0.04181434025938650682362963910564083",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x38ea3693640452756c2ee9a22e607e4c4e0d3f3b-19568",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.5421428474167681650991623566570605",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x58667459ee28b008dccade72cd081d9df7263ec6-19568",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.01777399457794939601015888228218991",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x7bdb7d593e9460d27ef095be6a1f35c6d6e38120-19568",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x47547895218274e121e4219a3fd23235377a9903",
            },
            reward: "0.0212717426171238824959671435539922",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xd16335a50ef275b4b3e691e01a52feae6e25c2d8-19568",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x157595f04c0da495d72ceb84390f444d469c3216",
            },
            reward: "0.04000729235594655332236239847859102",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xd9f7d5fb4aac74b72125e3b4426c8f246d3e9072-19568",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x14bdfda5b5b829f14332a52c15129386284ce36a",
            },
            reward: "0.006398540179230863852655135945048562",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xf6a4062cfd0bee1c12c43b6ea0de7227bed3fd6e-19568",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.2666058408012859938695130845269913",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x011293f0e159739c559493fbdae20cd590c664bc-19568",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x6bdc44c885b166aeb687f2d247e419f5a19e1804",
            },
            reward: "0.02074256007181231501430173547878015",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x01dc26b7ccbd2b007da34e720abeae02b99be553-19568",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.07259896025134310207886984747516455",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x177de1a4f8787f49ef20ec28605c3d9bdea497f0-19568",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x4fd0ff2c49671d4fe1927371cf833e8b3b7f44ea",
            },
            reward: "0.03782271568160692623990174529781675",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x1d63e226a1b3a514bd384b9e9d596071fc8076a7-19568",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.301732406330872992238309180692076",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x2190842ddf2994c986e08045c02442071b774123-19568",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x53fe1b209c917eeeb996720fe5418572bc0e836c",
            },
            reward: "0.07165611661171526977526128157363849",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x31095e235e45c38ca1657e9798a7aef08cf929fa-19568",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.05034785304855947151795321065692091",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x6e407de25e1c9fd004768a5ca3d6a06b3d5da390-19568",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x4fd0ff2c49671d4fe1927371cf833e8b3b7f44ea",
            },
            reward: "0.0231562397892595661940343603280664",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x7bb380a98d12de220f088211b0362c47bebb8c66-19568",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x7092020d4c6c26f6e06ee1e8cb5b34f9d14341c7",
            },
            reward: "0.197545803005001712189922787730229",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x9831f3c9511332a83951e735aeaf9a37e000ed39-19568",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.03017151258253019545089879548642621",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x9fcc001800f9c040dcba47ad4840cc49d146c5c7-19568",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x42b2e881b164e4c283fb7b7e15b35cd256209133",
            },
            reward: "0.03959943286436896485596286711382902",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xb74d9b73d63931b029e1dbec784e05dee38c24d5-19568",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.1131412367553398992384412804905196",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xcfb80b3d81c85f401bf139288ae323fe2eff7a88-19568",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x7c0b689a3003e0dbd2d37ce15e8a2273d91bd7f6",
            },
            reward: "0.02451393463032364479415947112556354",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xe7b42d1a36d567d5314f3c990fcd178c556d37e7-19568",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xbdc88f7f9b16863c8709f97f872f4e6e16dd5f6e",
            },
            reward: "0.01697122837726594041198343655096936",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x0115f90c7f562b85444e5c48a277078437d06de4-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x4dc7970c0facd251e4398f706c45f3af877d029b",
            },
            reward: "0.003018134432321302428331576417343789",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x15990263fbf6f475d193ed629db99efd530c0d2c-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x25d9d6f36fb3773b98284624e2a58c0cb3c98cd4",
            },
            reward: "0.01160820935508193241665330484975938",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x1ede520dea27d98bc8d16df2d363c275d7b3dcf1-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x6b32080f61ce43bfdc37b6629706dae405d22389",
            },
            reward: "0.02321641871016386483330428921788857",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x225e341a7dfdfbd49924b5dbb08f531781d0f7af-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.2135942170770142083431818668196725",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x2a07081522d2de69c7566cac45edfda9edf73236-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x1ef678435e3a1581732171df82476995cc041568",
            },
            reward: "0.001828992223032075440550160022850235",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x3363aca0a6bd542d146408246b5d1e3743b977d6-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x1f5f902be1f635b30425b690aa9fd5fa2b6fa79c",
            },
            reward: "0.1857313496813109186664180703716971",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x349a20e92ad725f665ce7813a89952978d278ba5-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xd790a1516f78e3fb52338084b5c5931a75bb19cf",
            },
            reward: "0.06384515145295062829158273450634071",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x3ff988fd12069b3f3bce22fa68a2ee5cb1278e57-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x0658b634aae5e7dbfa7510d6940ffd497df06727",
            },
            reward: "0.01103779150092950549012945438166965",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x40455c3ede1e00771066dcc38777fba73f8d4f64-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x73d31581106e3f6b9dd2579e8d9fec81eba22296",
            },
            reward: "0.004643283742032772966662714228881874",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x48d94176dc8a2169eef1b464e4c857c3080f001f-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x20eadfcaf91bd98674ff8fc341d148e1731576a4",
            },
            reward: "0.2321676396713385885966135974303189",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x4b0f729421d241bbc3665918bbe9f803402a0956-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xcbd6b0dee49eea88a3343ff4e5a2423586b4c1d6",
            },
            reward: "0.02785970245219663779996700344677044",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x51319451698f1c7357dcfd7d833803e6c7315209-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.04643283742032772966660393747251673",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x5bbbeee4878868bd8b15d819ac6d082e4227aafd-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xbdb7194a6f048f57e0bab51aaae0fb623615805b",
            },
            reward: "0.01392985122609831889998350172338522",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x65f335e81b687f8389d9245795885e10588492e2-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x07a1f6fc89223c5ebd4e4ddae89ac97629856a0f",
            },
            reward: "0.006547088721068156634915654973166076",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xa0c64805faea968e6d690f160c2ef8ae9a7dfb3d-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x0183d9be08db4024c2dc9aec10b9526fc6adeef7",
            },
            reward: "0.003482462806524579724997615792068956",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xacdd7f08f9d2b64bf7451171195e7c0dd7a887a2-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xac798df80b371569ec73e37124ffef7e26249667",
            },
            reward: "0.006500597238845882153326871727782544",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xaea1f7431c8d8bee7d6a74e4942a1d509166c849-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x8f767dbe1af8fc0eb2655260f2a4768a3ad49bdc",
            },
            reward: "0.01160820935508193241665098436812918",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xb4f7667c4aa42935a8ed7d92e702097d086e829a-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x2abbf099b7d6d3b25912c5c78f6737456e8736d9",
            },
            reward: "0.006964925613049159449995231584137912",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xd0517b06167727e10d25be193e75d6becffd5504-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x396a6d7a33655c45044143cb8a812227bf279578",
            },
            reward: "0.08620162535900912842237038846563412",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xedbbe7ba1c8daa8f5dde37ce36b02e47341ffa13-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x10649c79428d718621821cf6299e91920284743f",
            },
            reward: "0.0119218095094260395577940387532157",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xf1f916d52cbca47bfa2c4f53fd48cc81228e7ade-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x7c0b689a3003e0dbd2d37ce15e8a2273d91bd7f6",
            },
            reward: "0.01392985122609831889998350172338522",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xfa62b642a718c6e88f3c7a3049040c79a9c5cd61-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x6144a12e348829abb59ead0364cf7c2e540aa715",
            },
            reward: "0.01392985122609831889998350172338522",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x002cd3ca0be3ea53528b7e7c9e34abb81fa2e9ac-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.02411827474289248625826207819530311",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x0052e87f43b4dbf7a881a9a7e3b4ad89dfd50d2f-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.01205913737144624313033635017925538",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x02b6e9b583356cc5d80604ff0f1bd676c2bd27f1-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.01929462568767136072884403677573845",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x51324b76b09a2fc065ad01d02677b7f1ecc7177b-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.5567168822584861721310995380210557",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x62a455e7f460f5cec4a3e64418bb32816895c2ab-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x30be05fe3ed386b8d8afb327b03f50c9d97dcb85",
            },
            reward: "0.04703063574864034820481636356244489",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa499dadf173dc74047b32eb906a355473f7e4624-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x915188a790dcdd06447244196694c9f8a7d2b4c0",
            },
            reward: "0.03617741211433872938859842837455849",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xac12f96c21cebf7e8743cd16a9be5ba8ec3d31ba-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.002978607695800470321761423882569948",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xb87b6092ac461e2dd171fab14e389810ace950ff-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xcb33844b365c53d3462271cee9b719b6fc8ba06a",
            },
            reward: "0.07114898303065569866525974868805813",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xdd010f2ca484bae51eacc0381af9e2d5c2583b3c-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.01326505110859086744324945408902053",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xe8a6fae00900d2c4f04bb009181ee33f9042daa2-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x1dac73f3d00052d7e815b41e7b1b5cb241aa4d70",
            },
            reward: "0.004583411431263620497387222962386214",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xecef821974f44490bb02c9383cf63c79e0cd77ec-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x7f8c24d538c695262afc1408ad4217967da1623a",
            },
            reward: "0.03014784342861560782403290882573271",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xf43f03c304bdbd098826c032b343ac021b98b16b-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xaf97e87375d97f45b1c5f4ea4cc87650f640581f",
            },
            reward: "0.01966158011289053720165838830092494",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xfc2cb559aa59e6c29ad243dba024833b1e149735-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xccd72bea12f3927063be3d8798a4b74082713cb5",
            },
            reward: "0.1628175552687078582046940581429515",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x049a615a01e115a4323e65c132851b0df5b5182b-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf90db858c0697b34a5c400e3a12f30bb2c7dcb6d",
            },
            reward: "0.02171173919761533947337598983174056",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x7eb4951e8b4d13bd551616e617cf94aade909145-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xb6462b67fe692223dffb61c8dc8ad080cba180cc",
            },
            reward: "0.02713966150765963676400656582068769",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x8539a3d18cab5e39538759d6d3c00e0faf75ea5d-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.0460560055784984035885199641184903",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x863e5784aab5fef8ac407d9d6e29471381fd135a-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x4d940a53ff1f2515b577c5afc9cdfbbe588c4231",
            },
            reward: "0.02547762316645007754168588600743723",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x919d51e658ccf344a816f70aef57e432d26781dc-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x7092020d4c6c26f6e06ee1e8cb5b34f9d14341c7",
            },
            reward: "0.1265396272067230697984660676719395",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x9f00ccf7eaf33bde3fe055f4f5fa8c26414953f5-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xc3b1f7ab9fabd729cdf9e90ea54ec447f9464269",
            },
            reward: "0.3819030826107983861451153204053028",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xbe95a322078a5bae5eadb0b6442974880d89e011-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.01356992218784336724606211401244455",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xd38e65022d3912427e5522fd527cc261b038b272-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xe520d9514a85d28fdcffc5092b58afdf64e8fbb4",
            },
            reward: "0.05632131098660133236225612918596519",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xd6398d422bc3ae37a09ea56c66e04b087733f69f-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.2822832645024486413457065530885571",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xfd9af8d65a3bdfe2b31c7b0d8cdc5cf6cd6a04d0-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xaf866405f474b84e893131dcaa34b51c90e51895",
            },
            reward: "0.01899776305536174573480540985743513",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x0e5275ca7dc4bf97fc1a265948d37bb4c96c2cee-19568",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.03824277122078814241468476178409249",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x27192cfbe142d8067ec207ddc5f201b944b308e3-19568",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1239065787553535814235752033405782",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x34a0b597ec750bdf35044f33ac9e1b072b6baf37-19568",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1376739763948373126928626961085319",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xd54ab85d4525e2ad6593226f663949bb11f3f6cd-19568",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x051d091b254ecdbbb4eb8e6311b7939829380b27",
            },
            reward: "0.6879370475932284892255623543252955",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xec847b4317b7b076971a4d9ebb68370de88ee9f1-19568",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.01223962603579247424331498444150187",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x02da703f2ad773c23f13de85e4cb99b575d4f42c-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x1dac73f3d00052d7e815b41e7b1b5cb241aa4d70",
            },
            reward: "0.00825381543296896260744138580281113",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x08a5433378862b6fc301d770b37bf7973acebd24-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x92ec6e838dd90845d7d34dfaa82d6d00f66c8168",
            },
            reward: "0.006828121544215261789731601502222599",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x0d2807b752d53aa74ed99c89b98562118c444d22-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xbdc88f7f9b16863c8709f97f872f4e6e16dd5f6e",
            },
            reward: "0.003386748285930769847707562275788723",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x4fed8be4cef8a73868bd45bfacea95bfb5aa70de-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x2e3bd4e33281ec73b88233ab5f8b0e52a8d6f913",
            },
            reward: "0.002546889335992292647572108120699332",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x777460e2ace7b0a74c8d9ca968f104beecc76f7b-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.009559387676516852025498224560268881",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xade0f7c5070b051bc78838f02ad3114027dd40f4-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.9427953637019363401020998302108712",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xe11d019a01d47faf9ca8ac93749499b118f5abe0-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.02662967402243952097994928752733815",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x1fdc3148c8380e60091ad58c52c42c6868c150eb-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.004413275223286517222365023730125974",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x2b928017cf8bd56a9a4dbcccbe4f0bae88cac00b-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.5146315212930341351071786509280813",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x5447a88b3be260be3d01c3af161b2f234f69fb70-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4a8df644eff45a5fe923cc4a2efec07614a1bfb7",
            },
            reward: "0.01544856087743020838824878839647086",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x8095abd47882bd9eded35cb273ab4e0ed1019c93-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf3e112e0c32e7a30da87517e98a22103ade76d01",
            },
            reward: "0.005046285481025898940145380954914338",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x898296ec830ca5291173f04fd70fdc158ecfa95c-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x1db91f586331d168e2da4c6bd73b689fb9f43516",
            },
            reward: "0.01675326865221886503461397090229123",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x90e115a069dfb68f752c6dd48450ef8b87a6919e-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x30be05fe3ed386b8d8afb327b03f50c9d97dcb85",
            },
            reward: "0.06767021313797374899690840235104287",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xb5f440f5a31b0496b3d456383825a4a5db9a8949-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.06767021313797374899837875876279294",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xec54688608916fb79455cabc3b6f9628e57063ab-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xccd72bea12f3927063be3d8798a4b74082713cb5",
            },
            reward: "0.3064540076987521863285805797284105",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xf2adbf6a1fcc9b1d89804ff6aa59669f6486c64f-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xdffd8bbf8dcaf236c4e009ff6013bfc98407b6c0",
            },
            reward: "0.001912654498304690983580444245870007",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x0e602ea998404154059a90878cdb571f52049e23-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x445bab4342fafcfee8baaec5bd7d6030770d4011",
            },
            reward: "0.01141172016960283815709013859280528",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1849d6a3b7e7c64f0b011f4263a598af9c5321a4-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6175e7a985caeac2db12fada99e626ebd6fe7bcc",
            },
            reward: "0.002304980925960680714040788141636748",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1b492bb36664d042c4e23456276cc91179b86e5f-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x33a74ed005785a83295d3ebe7e9fee647c3b4246",
            },
            reward: "0.002290574795173426458147139415668168",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x3298a83b2d3b7231771a18ba8a17078715cbcccb-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.02881226766804769142330682023562625",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x422e84f35d37ce696b4512a8e0e17b349cfe8426-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4f942119e6ab0a6e4368e795d1d64291a3ff0da4",
            },
            reward: "0.01627302956647579163646038783316373",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x4311606cc02e6746d9d55e36d15aecbe2d263e83-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xff703ebb19c1a4e27ba14e8d7538fc113ca5f906",
            },
            reward: "0.004200683676255468059050379863153164",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x475308549bc8c8208c16e86cc5271e0c4795b616-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x83910f3e3e0064c15ff2fe043dd042855861d05d",
            },
            reward: "0.02881226906442756902263174852270487",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x4a4937a0fe899f3f5b05a9df320e2ad50a672099-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x915188a790dcdd06447244196694c9f8a7d2b4c0",
            },
            reward: "0.03601532696813563613582887765524375",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x4e0fa6a0150fe76e5ebeb6de07c3db2dbf07b181-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.003601547559333612660316364029213148",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x526b2133671787bbfed2de1ea0b806f6f81dc39d-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6b579bacffea19b002271d448a62b161f754401a",
            },
            reward: "0.006444150423754573103693845354905793",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x64f940e1c5f7e75eec2763420092e1e2c6228393-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x1db91f586331d168e2da4c6bd73b689fb9f43516",
            },
            reward: "0.02382196376609137533919834959919596",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6d9b3df93b5e49e3701950f81518200857eb8b07-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.1238927247703865883037379998915697",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6dd04d8cf38168ab9bb3076a53fe11604c846c1f-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x19865bbf18281ad5197ac06e45966dfd3e72a47f",
            },
            reward: "0.004465900544048818882104127213021812",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x818fe871c0f06a9b1e95887ffd3e232d1728fcd8-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.4449833225880538177347541624039843",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x99299a18d07ba4828bdca135f1b6c6ed13eca64f-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x5f0a0e3b30d304fba56e2eee3a442b0bb5c40275",
            },
            reward: "0.02832245615055768003570211907055054",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xa5c5994870fd0f1d3e06ea9a3ddeed1d3f2fd52e-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x3a762044a55802b57f12ed39d83dd1047d77b8f2",
            },
            reward: "0.002545059095530272864512625112467629",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xa6bcc97eb84b64c9cb66c42e68f6abc4cdb758a5-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xcb33844b365c53d3462271cee9b719b6fc8ba06a",
            },
            reward: "0.1284492491313942402340556595462147",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xaded6a47fd19a18363563dcc005c74cd5bebff42-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x25d9d6f36fb3773b98284624e2a58c0cb3c98cd4",
            },
            reward: "0.005762452314901701784382023788012197",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc51d2bf1798af65b1e3177d7de7bfc60c6428a97-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xa824dc3ae402dfd6a5de71c6fc30ff9e00411209",
            },
            reward: "0.005618391007029159238404574717760513",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc94b314d7421faccbbe89cb04e70542b1a325447-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x30be05fe3ed386b8d8afb327b03f50c9d97dcb85",
            },
            reward: "0.06914942777882042137946674341648141",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xd0a066bf800c8d22472aac9495f2fbc51abe483b-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x58e03d622a88b4012ee0a97235c6b110077fb867",
            },
            reward: "0.006251538196130496321352950544735472",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xf93b2208a5854fc3e85492c1503c43fa6bb7ec01-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x5c44368c0ad4c446842738bdbf8f2bbf9876546e",
            },
            reward: "0.01657096383988814051176217505188479",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x4bab58f19702caa5ba8a223da1a4f6a547f7184f-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x3f3429d28438cc14133966820b8a9ea61cf1d4f0",
            },
            reward: "0.3088790046080017979622664784208824",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x56c4f38f95355e86ee42033ad8aef733feaf40bd-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.09433635870612130974881140539404786",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x5f3e3ee5a0644d3b7aa1922767de8285facc9e0d-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xe520d9514a85d28fdcffc5092b58afdf64e8fbb4",
            },
            reward: "0.01061352403969933444363370396980636",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x69a4fa2c1d81b640a69b1f1ac22974578b64cc46-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.0000000005608834921211688842167963303891663",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x92a0aa27ad8572e125803ea0777af1885f25c9b9-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.009433642735846212938278648953949435",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x97bda93b2f4193a34819f418e50d007c6d80a0b7-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xbff78d2838243c9c6c18245d69e543a9ba6c2890",
            },
            reward: "0.5306762019849667221815685155878702",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xabb209661fb03f48f1174ed3b6c4a0a677298b61-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x42087c28f296d3b2dab56e3f5d1aca1388f2be5b",
            },
            reward: "0.0000000008674608021141055004937442361036589",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xcb02af99f8dc40c1111a9d968c737b5b6691dd67-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xeefd6537adbda7b1a9da3f6607dda26b048489c2",
            },
            reward: "0.001252643456715738814087727758331267",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xd4373715a070bb95c5e7a066efeeade471c1372e-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.02830090761183639292464424664883773",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xdf8fd47da004c44237f6d61f12fbd2b4cc03fa98-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x521dea4e41d3582dffc931c4100d314d0a9f7ee4",
            },
            reward: "0.006486042468705148826664779400398054",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xe695153ee5688b3e75bd3c37ddf0bb39a869235a-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x23b83c2821d1e9fe5c40ce3c014d2420f2f1eeb7",
            },
            reward: "0.01002167295976304792477010915533606",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x1de001a02f1e5db163be5fe07dfceeaaed50af29-19568",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xd9da13de745bfa50ffaafd0a531b92f0511b72cf",
            },
            reward: "0.08217419615855422992634363193032226",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x2fa837f0ad17ea91a2991a608e68263491f2bfab-19568",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04725016279116868220765051435267707",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x69371c6efb2ab226fe8224f3abfe7abb6e80a9ba-19568",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.01438068587755703009817336678752164",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x745ee33177e31b12ce08d2b6256b4d0e351ff3a8-19568",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.7945642875102553456845167680642827",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xcd8cfc4784e971cd960baa91d266d0bd33755425-19568",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x0215c140840b896e1e371525d1f70cefbd09aafa",
            },
            reward: "0.0616306676624647120833157188651963",
          },
        ],
        earnDailyRewards: [
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x07ea5532ab74322c954aad2ecddeb4c82505a2ff-19568",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.07432258326021799668728433789958895",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x506ff697bb7f93f4eb09bccffb976416bbe38c52-19568",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x0f8c58edf65cbd972d175bfe481bc16fa8deee45",
            },
            reward: "0.5405488498226016501042772279781114",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xae9149de7b243d56bd9ce88329ecbb1177a2d5fa-19568",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x239168974aad75472b652046255050e50a0d5fc9",
            },
            reward: "0.3581021653318545473740463618428353",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xc75afc43dedb449e741f8005d76d5fa880a1cef9-19568",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x9599d89ed83e6db03d57c004f858ff82228604e4",
            },
            reward: "0.01351328925780583197637910799406926",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xdfaab0e92d3700c33a72fcdfbb90e349803561e8-19568",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xa968a0920bd35ad65f3bd78a934e45f020d6a1e3",
            },
            reward: "0.01351311232751997385801296428539505",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x0ae6abb39189622e46afb4a5b44b8a9f6ec85737-19568",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.0003433472722055167554498748761736076",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x1457f27c9ebbb7c5701f7e70839a8a5f477107bc-19568",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.0272218115983068339139241677972003",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x35e69e3fda9994dfb35bee5f7c48f16b65b9abb0-19568",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.3411964209173512233827184255717776",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x632a2770f96d7fd44702e00dcc355811f9b336d3-19568",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x157595f04c0da495d72ceb84390f444d469c3216",
            },
            reward: "0.04904334208433135487425363272240142",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x63f15eb8e817f8a6f60a237b786dc92eb7e8fd6e-19568",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x97d157a8dc39e9e17ae498b308bc69b4bb790125",
            },
            reward: "0.00038577199035972661817314503662899",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x6658b6c07482b477642e47e37fa00f0d807f5fd9-19568",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x7092020d4c6c26f6e06ee1e8cb5b34f9d14341c7",
            },
            reward: "0.1765463313541897568682818165396995",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x6cc60ac6c98450d736382cdb3774d04c7594296b-19568",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.05278655056103007345276977220900669",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x7d8fe7b235d862e3ce44dd499bb15ea25d7f352a-19568",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.2375475510629836038357828020479023",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xa12113b62c021aae956b91ff56b97e4b1c279122-19568",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x3f3429d28438cc14133966820b8a9ea61cf1d4f0",
            },
            reward: "0.01285776178150109181141374678206365",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xc581b9f298220a8293e7e399dae2dde88dbb1921-19568",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.102071111377740818487232616417146",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x017a7ca1bfb339cbb6d6cecf3f787516975a7c3b-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x8f767dbe1af8fc0eb2655260f2a4768a3ad49bdc",
            },
            reward: "0.006150747916084546646253056595646979",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x05cfb65544eb5568b1438d94b2095fcea6b30b9d-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x1f5f902be1f635b30425b690aa9fd5fa2b6fa79c",
            },
            reward: "0.1230235458732054729630680434100025",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x06e7f912044524b49b2eb6b72c891e984d44e36d-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.123013327157575567857589954758323",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x098b98afa71f950ea862b4e0d91b183e7bc16b69-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x07a1f6fc89223c5ebd4e4ddae89ac97629856a0f",
            },
            reward: "0.006110250229260732819924386141810515",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x18877e98dcf273b46ae45dc90005b2de3dec4079-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x2757ae02f65db7ce8cf2b2261c58f07a0170e58e",
            },
            reward: "0.0006151177293660273648153402170500127",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x1aab626f725dfb8a1017ccb658ad308b71517346-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.0000000163050009089494889516150582846011",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x2abe8bfee84fcb968e2233c7307c9d1881e43157-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x47547895218274e121e4219a3fd23235377a9903",
            },
            reward: "0.01230198564485439852605868475573546",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x32dbb4885e665fcc2cb74fa2bc74f208d1b3a900-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xf7c7ca163ddfe69218377ab7086bdfc9a50f4e1e",
            },
            reward: "0.002460441568939241600880505130415598",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x3a71da5ea3dd8cbc10d3fe060c0669bc4eea2b12-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xac798df80b371569ec73e37124ffef7e26249667",
            },
            reward: "0.003444659284449753242965905215480071",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x54bba40e7f7b6cca98c0ce02095234aad54abe48-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.01230252924353539042458203113477327",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x57ccb41682e25faed21b3e992d6240e399ec9dcd-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x3e4dd7e5c37fe838eaffc89a551e1c311b7d14f8",
            },
            reward: "0.00123019804306051193988182389046015",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x5c4088920b657726013ae134737f6fee06e23216-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.00000009129430995789890545193498357603377",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x68c927dfc35367ab0909d4cf7386deeeb425d081-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xbdb7194a6f048f57e0bab51aaae0fb623615805b",
            },
            reward: "0.007381412752392328377784082604600152",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x73a2cff38d41ec035afa3038f4c6140ce69ba15c-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x5fcdc32dfc361a32e9d5ab9a384b890c62d0b8ac",
            },
            reward: "0.0003690706376196164188892041302300076",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x74c3f6f294b9825f98ca08816f2529fdf093d5bc-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x0745a468966c6be811dda6d1953fce2798efc1f1",
            },
            reward: "0.06148796788047627122251566803860143",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x829c190ec5468eeb29fa5621ca65a76aac2eaa44-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xa62d7ad2fddbad38a0aba25e40cdfe2edfa4d183",
            },
            reward: "0.01230157550177895633160073554305087",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x856926c82ba816e84bce9d7913de57c985cfbd61-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x3e4dd7e5c37fe838eaffc89a551e1c311b7d14f8",
            },
            reward: "0.01107178123407522770605724004084459",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x9b333d180d559797db6682e11e6e5e494b25fe5f-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xd50cbde55f8da4e8cf94f38deae2c722a5bd156b",
            },
            reward: "0.02411227495186071859481235591706963",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xbf5f2a7883572e0b23b387a848c417b9c31dd936-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xc24dc96768d7a96ca37aa3e65787f69afaf1a354",
            },
            reward: "0.01230147566584859853145508993776571",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xc3b5493dcaafdcb5fe6d627efd099dd0294ca4ad-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xc64844d9b3db280a6e46c1431e2229cd62dd2d69",
            },
            reward: "0.04141311725143459363438459164108151",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xc98d804cfacda3af5d07ca52f9c8137220f8f37e-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x4ea4309e5fcb06201ea54e0fb149de522138cdc7",
            },
            reward: "0.1230220201744534949926593181583895",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xcdac1a2879ae3b612a5667228e629ccc516a66c6-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.0000001161538544624088281425290929159267",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xd3696b74d9fdddce791bcb2c3eea1c137a0b8861-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xd9da13de745bfa50ffaafd0a531b92f0511b72cf",
            },
            reward: "0.1230405920821825778555701571057388",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xe7370c3a19a9676d142cc9641909afa0a888d215-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x5a1b8d6a57445deced8f816310fdb0aa6367cf10",
            },
            reward: "0.001615461958064148249003619626807219",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xf0afb9dea61d5bcaa96ea2f3ec1b074714a4531b-19568",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.2912302234663164954420256599269882",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x178ec3e0dca23e5c448b2ac7e4388592883a3d55-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x83910f3e3e0064c15ff2fe043dd042855861d05d",
            },
            reward: "0.0000001214211428937362411163460858439541",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x17dc1526c6ff9cf0c702257775bfbab2385f6fae-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.01207451370780685067270215139535627",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x2815cb20c1063f27d6e5d04b6cd2904af5544bff-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xe793a7a7c7b7a4cefddb30f856b01f36e51b1b82",
            },
            reward: "0.0002414907400282999163284180828057914",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x2a6536e4edb891eba287e7d977421a6df8bb6dea-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xac798df80b371569ec73e37124ffef7e26249667",
            },
            reward: "0.004829805483122740269080860558142507",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x352cfc59b91088656ebaaab3b42febe1b45f868a-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xa4fd65694a9708c2d204bdf7acf8b9c09b105903",
            },
            reward: "0.003622354338505855638780206439064152",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x3c21a1e9b544a56a450898b737a93b8220665e5a-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.01207458618019604892705424109497451",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x42474bffae9d0b4e9dc4e8ea48a5705eacdcb087-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xf44593dfae05bff213c876a8e1fdcc15a45964df",
            },
            reward: "0.01207451370780685067270215139535627",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x497e2f7567a2f46755badacfed456c7d1cd68638-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x0658b634aae5e7dbfa7510d6940ffd497df06727",
            },
            reward: "0.0003862019012085477853740819700222434",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x50cc056966b4f1eaef6157390940115d2a396188-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5d12aa6a6001fb326332c3801c6bd12449b6e44e",
            },
            reward: "0.0002414455948679527785626385010661246",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x538112796335be43a765a5cde21f080c3296be64-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x915188a790dcdd06447244196694c9f8a7d2b4c0",
            },
            reward: "0.03622188433710767289023542580059257",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x5f070b42e7fb07786c606d7a162e36056bbfb3b5-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.002414820249363383539357561294128343",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x6030bec53dcf30ccdbced5f578befd80b9b10601-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x9578e8369369fa05e5f2fc8d80a234ad2f8608a8",
            },
            reward: "0.003621558937522610955201215516048172",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x6182164f9f39364908763e94adcc775a2931cb49-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xebe4d96a48c4d0659fadfcae5a132de3a5733374",
            },
            reward: "0.004829805483122740269080860558142507",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x650899474737713e9c247aea3aa777b3c2ed4964-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x7076106c13ca93805f2b16c52e64d3592d55457b",
            },
            reward: "0.00000005802196799876187003648778541672629",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x68ae6b8206610be3d862b4b26b1de35a058c965f-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xcdc8698745db38280d649fb9e7322d899c4a1bd0",
            },
            reward: "0.01207181258457718246217883854703406",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x6f09e208d0bcd35e1db162bed664f3848c7172b4-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x66a4f5d0b57d86bf1b9bfc63e991a9387791fdcd",
            },
            reward: "0.01931922193249096107632344223257003",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x8175279cef254dbf7d0d9cbfd193dd49bc1025d6-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x9cdbddf646a86ec987394c807defed498dbc7df4",
            },
            reward: "0.0003017958725191709234818821049155467",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x8c0ff2a44c53f823c703e83a75d287b37f5c9c12-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xe922bc2ad029b1efafc3eb3ff776219c3dfbb625",
            },
            reward: "0.006037256853903425336351075697678134",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x97f5ea81f39cb9a1d68366503dd282a8c0ba6d29-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.00000004527896789549688516101837805162333",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x98296fae90b58a3db28e7fdca20c96663043750c-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xb92a1d5c73a69a0d72820f6f6221c5a81edb7cc0",
            },
            reward: "0.006037256853903425336351075697678134",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x9b90a6e571e286bd10e4f5ef3d428cd89b911740-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.02414902741561370134540430279071254",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa4becfd89a985ea0cff9c1e90375bd1de1bde8ca-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xaf8a08ddaedd2378b8075f8b90cee4b066ae0df7",
            },
            reward: "0.0008212494695721372818961331695133833",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa5af820995e5383bfaeb7c6ba22f3eb55e35f768-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xb0d6ae7784a9f20c1e34218998f0fc5c24972441",
            },
            reward: "0.01207090841238758960936656795969668",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa641456aa2378540e3be55a2473ac8065170db51-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x9730299b10a30bdbaf81815c99b4657c685314ab",
            },
            reward: "0.0006037256853903425336351075697678134",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa64d42e8b130f306b8b8add558a095cdec8b8dee-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5e4568c4d8343052a06ec8aab1e124af08b73248",
            },
            reward: "0.0003018628426951712668175537848839067",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xab9c5fef3a48d4b8501b9e226589df4d81b08401-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.007244292549985718240701520252657166",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xb20f0e2b013655346c6d9c54b16decb7b934fc91-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.6175757639617466240129482067067025",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xb4b84f7205667c6f696add26462d51ba4305bc18-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x7f8c24d538c695262afc1408ad4217967da1623a",
            },
            reward: "0.03138464372710002158108882841193839",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xbafacc6f392410d2d47cb9ca25541e17fd4badc9-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xce27fa2d00b91c9486e3545c75cd7df86d4e3632",
            },
            reward: "0.002463086175096712247162960671839535",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xbc3f05481a54a949ebe764d095da703e9ac96c44-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x70e439584ef1ba300106b9c16543eaa1de676dc2",
            },
            reward: "0.02776588867266703566089770476568035",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xbd431752a75950788fe689d49d970f95a1732581-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xeb434da562e7a8ba045472fd1e134b420771ef7a",
            },
            reward: "0.02414459895046826618920490006218027",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xcd4d1da85c2894148772d088e14e226cc9580af0-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x3ac7084e8ce0757261b79f87a8e417d2df3d24d3",
            },
            reward: "0.06037083172839896977919596829780047",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xe316409d3df47accfdbf20c7cc12ea0a9fc1cb87-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.002777138152795575654721494820931942",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xe5766c80dea6a9b873d56f7149db185e8ab919ba-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x1dac73f3d00052d7e815b41e7b1b5cb241aa4d70",
            },
            reward: "0.001207451370780685067270215139535627",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xf00e853ed9216008355c3ef0843a7b20d3fde16c-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.02777018493007908375961313366405614",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xf073cde213b7a6da101ed7e20ee6e5e9a9973b07-19568",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xe1e2a52a21226ba37f28ba6cdf59f20156798f94",
            },
            reward: "0.02294879647508985832593296119427863",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x03431c179e431c9785cf82d0ea2729b9561ae76b-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xef764bac8a438e7e498c2e5fccf0f174c3e3f8db",
            },
            reward: "0.375850200283693754445662837083205",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x0dbaa1361088a250de5a893bd2efbd3e24545ec8-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xba842b7da417ba762d75e8f99e11c2980a8f8051",
            },
            reward: "0.003006129456328687983303070086600501",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x10119b4fc928a31ab4fd764f743e871f02797446-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xb6462b67fe692223dffb61c8dc8ad080cba180cc",
            },
            reward: "0.02505668001891291696304418913888033",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x13927d76c5a2c5985b25f4c0678d489f04126544-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x59653fd9713a30c54237a6fd21fd97ba141abbe0",
            },
            reward: "0.004936189773317213479193423881460319",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x15eafdb60976e7d22c0ad6c77f05dc64db78f79c-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x296e0c21db4061ebf971e55d5db85011e7ff9797",
            },
            reward: "0.01252695376391160950544269779688863",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x2d1728752f30d604ad144007ac952c578973bccd-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.06272587702382959224063301771552854",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x3910239862b50a5915d49b05c94d97b89265f055-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x7ab29b393aad63e7119c004bb45eefeaa3e70da5",
            },
            reward: "0.002489130593078809171108809749056372",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x3ec36f3a55b31d168fdffaf5d21ab103ffb6e760-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x87474eb5e6f15c5b770c7a68b37342830211ea9c",
            },
            reward: "0.0117611019419680485451186908216616",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x575879fa71ba697042e973be663758b06f63765e-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x318e3835baa3f83ca734d9afb9996f702aa06a3d",
            },
            reward: "0.02475607122010434439735619980465426",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x6844a1d7903f14fba8c12a705577617a11a4ab93-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x7092020d4c6c26f6e06ee1e8cb5b34f9d14341c7",
            },
            reward: "0.01070346793579709146537468003865329",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x71b4201c1f312f4f04be8be7b02e0ed224d784fb-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.01252834000945645848152209456944017",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x77f66e4a6383893ecaf0803e52fa1e8b60d43fe9-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xeefd6537adbda7b1a9da3f6607dda26b048489c2",
            },
            reward: "0.002560164022435867177815871597030323",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x92a95ea3d6c5b81fe85d704203ec1c19e3266a10-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.04816677096784393777651816609082479",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xadbf773d6cb8373d64861c7ae4b02aacfbe2ba76-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x37e1881f05f33f71e43bb8f284e0ed53e26520d0",
            },
            reward: "0.02505668001891291696304418913888033",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xcef1a9a0dd2cdd92b5669f6b220799104efa865e-19568",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf71d161fdc3895f21612d79f15aa819b7a3d296a",
            },
            reward: "0.3778762429704087514048620624872355",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x0e3f1e786b42465ca7d68fede5389bfca714db42-19568",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xf1a1602c90d8e510bc583eabb53667e3afae4b52",
            },
            reward: "0.001520688161207956645343043570271174",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x0f3436efa3097f960a27b50e673db0b7de765577-19568",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.00000001493410816949405501616471072727741",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x1444e8c66fd6bc37262f26a33bc217b3e0403ab6-19568",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.3041434514619497429647241265451092",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x2643d4f4ffc86ee595c0d8a68a27bef82eab85e4-19568",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x20eadfcaf91bd98674ff8fc341d148e1731576a4",
            },
            reward: "0.1368664361220061688088776761484162",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x281a602477c5b328fcef497e47bb4a4a6b963614-19568",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x58e03d622a88b4012ee0a97235c6b110077fb867",
            },
            reward: "0.007603679268529781098790906425167638",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x2b947350d8e4a4aa1173ee0e4655b33fc8ba55ad-19568",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xde055950ccaaf115c8d76b33e6503ee403875ccb",
            },
            reward: "0.0009121602242057367451089134041158175",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x48a19d4eb3553a476ad6218e0625b606be7bc4fa-19568",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x4fd0ff2c49671d4fe1927371cf833e8b3b7f44ea",
            },
            reward: "0.000000004912232983756204129490679429746127",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x51a1f69f45791b8e5484dd9d526199d9f29223fa-19568",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x6b32080f61ce43bfdc37b6629706dae405d22389",
            },
            reward: "0.01520663005712082535291692004043239",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x5d63b70786f582eb96ab006a4e51f3b930e29e51-19568",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.01520738179133401875654196401649069",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x5dcf7edd434cb7f8b255b5d913783792e41b03d1-19568",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.00000000542463066860456208576823901145547",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x61a5471a19fcceb07ed651ea402a149ebd6fb0d1-19568",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1368664361220061688088776761484162",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x73933d5e77222f5987cfe3612eebbc88b7833c57-19568",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xdb10d21f28a34fd04e4425eac777483798f7e217",
            },
            reward: "0.005319996770725077154128900208020127",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xa0af774d47a46f8958b5289e21b1cb6210a62f62-19568",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x859e1dfb430a7156faef11947f2fc2a3c34b733a",
            },
            reward: "0.01216590543306721500523357121319255",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xa3fb5786e157d6b2618859b1921f8b71d4f5eedd-19568",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.03802034896463867743272769404938235",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xbfdfc5e00155cd27b8cc4cf7ab4cf5551b54a8f7-19568",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xb225bf7e4f1da339195972ca7e4a1d9ff52156ce",
            },
            reward: "0.007603690895667009378270982008245345",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xcfab8ff364d67af18cbec98b8d47398d503e4a0f-19568",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.00000001017382745632409078168109427636664",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xd29bc9af132fe09f0a6a342d6a5c27e12baaa14f-19568",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1429493888385397763114944617550125",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xdf2dba82533627d6688efe2e467a76099576a9e3-19568",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.0001520738179133401875654196401649069",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xf7e4255bea7efa35c7c9253a2cfbb2ee3ccef378-19568",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x4ea4309e5fcb06201ea54e0fb149de522138cdc7",
            },
            reward: "0.1754616966262892271704857317228394",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x17e337bac18fb13ee3b547a44c15cd77561ff594-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.0515209819329473582727689869472925",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x2abdda4c66bc2156f81f7056bc87a904017bdad2-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.0000007419398501974736290380088330489548",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x4c19b8a92d319ff5261a4f8621c897e8d9c36e0f-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x37e1881f05f33f71e43bb8f284e0ed53e26520d0",
            },
            reward: "0.01288040921074601205136355112184796",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x4c29c31161b6313b716e36402a3d56f6e4a4964e-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x5b191f5a2b4a867c4ed71858daccc51fc59c69c0",
            },
            reward: "0.01291289868718205667585680989407862",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x52448305da311c4a308ed72c7fb0134248abf373-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x3f3429d28438cc14133966820b8a9ea61cf1d4f0",
            },
            reward: "0.1288029945853765533329113458676212",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x540b46c36557d3212e06e37182e5296bb486323c-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x4adf9b737ab9c97f5728cbcf143483cf6c2f7df3",
            },
            reward: "0.006439894956861903963721026735591655",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x64943f1ac7b541c3b6bdf45464c9b4093e4a7fab-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.006440204605373006025681775560923979",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x7602834c716948c438b9729fe0384b3aec52b3eb-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xef764bac8a438e7e498c2e5fccf0f174c3e3f8db",
            },
            reward: "0.1931691116351407532483611315544956",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x8219adc2f9791e2d8a67882a4a73cc85e277c524-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xebfb476e0f9c8d74f0fce72b688d7177dcbb73c2",
            },
            reward: "0.001288040921074601205136355112184796",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x8ce6fc3cca6deb3545af4e32a49a93a4c7a61e8a-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x11d67fa925877813b744abc0917900c2b1d6eb81",
            },
            reward: "0.03864133642869559907681695132701117",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xa121d81b6b83075ad0ee5d4a35087af262712173-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xf9f668901a13b2c817a9cc9d7fed50868b7af8be",
            },
            reward: "0.0164171892542879165164992631701917",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xa988e47d6c2549c485ee612cb0d0dfced04b4eb1-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.4508005445592505590888178822643007",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xb756db88231a365c7be83adb959cc6d3e2218ec7-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x7139a445ecc1a597695cc9a077caaa41e0f18391",
            },
            reward: "0.00000001393307990325787647059348145189896",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xbf62dc76e06555ffadf4c7cd7353b055a6d09e52-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x3cf08d6a9436a1798c18d24a70f5ad0bea31775e",
            },
            reward: "0.0128804577762193941728483681300405",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xc0558bcec4725c038256174fac0c1921fb145afa-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xe3db0df6a4a62106a3dd5cef76c196a53f3e7e4d",
            },
            reward: "0.012866467382463181658052876947767",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xd29721fd44d8e4cd02bae1453e40b2d72276859b-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.004706423657630326690217052764633092",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xda2035f6b3d6618bbf5fc591b25b49b6ab175d39-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.01932048514600088624324370637563317",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xf051ffec03e1842939c2fe40c1a8623da624b220-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x6b32080f61ce43bfdc37b6629706dae405d22389",
            },
            reward: "0.00000004809285428114768975497040527842953",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xf220126d67557ff209c921f4d2744f85b218b664-19568",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.03091175529496550989850765265366657",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x065af1d2579d2896c87d1072bcecb64f70dbcc52-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x6bdc44c885b166aeb687f2d247e419f5a19e1804",
            },
            reward: "0.0000001269185237046614930198440065129652",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x0ab511f268ecb706b956e0a6bb99f9268282e3dd-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x3ac7084e8ce0757261b79f87a8e417d2df3d24d3",
            },
            reward: "0.07346432931397975004339274114923714",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x0c0e979e5d699e51f4707527e3b4a1576406270b-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x7076106c13ca93805f2b16c52e64d3592d55457b",
            },
            reward: "0.01057886342121308400624855472549015",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x0c7a5ef0532c0e1b8b4984ee4e4e19283f2cf7cc-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x2068d14ee50772dd6e89c6f64f32adad0cc936ef",
            },
            reward: "0.00808070744178105504087373844306894",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x118954ab01883c2c245d7a9b737df80e8c4afbfe-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.004408179945259212987801473389731535",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x16d559ee5ca6f8f14c15ebd511809722f4b87702-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.01469330402820994926548747523445055",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x2b4f1f53c4bbf3fa77e2a7faf1cfc063f7c21523-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x1a918a8386f75f382e2a1b2e10b807c39728caf2",
            },
            reward: "0.003687860749497712440099271658953723",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x4820233ad8d7bb201f9462d242922d28926bc642-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x28af2a3c28b7ecf7d84a8ba0fddf7525a88e1f61",
            },
            reward: "0.003504208579749102811657302387692281",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x4f1122cc1723e5d60cc11c68be19972b8e3be8d1-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x7bfee91193d9df2ac0bfe90191d40f23c773c060",
            },
            reward: "0.01763079440107718656552167520348324",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x5ef7d0933cfb377f11f125ba0d74812c18f35520-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf9f061d9a5f04e223ed3c560e03a8ab0a70cc1c4",
            },
            reward: "0.02203929879419392501301782234477114",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x5f38bd14ffcf23f0f8b6ad90f3dfcd15077e2b8f-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x66a4f5d0b57d86bf1b9bfc63e991a9387791fdcd",
            },
            reward: "0.01175304323109537997386091393612981",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x6ffcd46a8194ec8d3617f3bee62334de71967033-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xe1e2a52a21226ba37f28ba6cdf59f20156798f94",
            },
            reward: "0.04407869112373735402364107513965951",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xab4632810f9b93eccc993fe804f9da57875649fe-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xdb10d21f28a34fd04e4425eac777483798f7e217",
            },
            reward: "0.002056316466426100326958622338260368",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xaee5b0711b31a7954406b40f2dbc079b2d6fb65f-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xab12253171a0d73df64b115cd43fe0a32feb9daa",
            },
            reward: "0.002791856279492289410109690847632409",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xb9134373f544527d15ce3cdd8cb1f78d72acf42a-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.03012037501873169751779102387118723",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xc3006429aa36fc6d14ead73ac106d42ffcedd576-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xa0ce55801b0b88f2df2ef026eb8da79e9f0ad9c1",
            },
            reward: "0.0007827774806144032980745903956820094",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xe60d6cc634782add49132dea0a70b0b014fd0500-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xd790a1516f78e3fb52338084b5c5931a75bb19cf",
            },
            reward: "0.00146955242356324346364424194247361",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xec6224e36c67b54e3daaa968cd1cff6781e003ac-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.7346079063641132365768754416229892",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xeedff03dd73862e59f5c48792ac9bd241ecd11dd-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.00000006296458391318304340890717068720079",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xfa16a59a3458e5008041109c2add292d9886c606-19568",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xd46c81245a0582891c2249daf2d68925977cf2a7",
            },
            reward: "0.01425174505415769939040791661792995",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x08a27f3ee826ef49d1673846416179c3584671f6-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xe793a7a7c7b7a4cefddb30f856b01f36e51b1b82",
            },
            reward: "0.000398788312761602225257574834488646",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x0b03f8ac3ff960b3db43a3f549fe0c98bd0c6102-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf3e112e0c32e7a30da87517e98a22103ade76d01",
            },
            reward: "0.004001209824270981427951083991871047",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x0e78c099b7ed855f56a4e732672d3434f6c2108e-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x056590f16d5b314a132bbcfb1283fec5d5c6e670",
            },
            reward: "0.00100832553113638932680784887191929",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x12b9aadce493ff66d34298e3b5b86fcea8be8290-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6bdc44c885b166aeb687f2d247e419f5a19e1804",
            },
            reward: "0.0000000549623605928756405282354429211397",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1af10c87e3083e47c88a81cb4c60542e82f47cb7-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x28af2a3c28b7ecf7d84a8ba0fddf7525a88e1f61",
            },
            reward: "0.001261010182380699381905488552710731",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1affd8e82ddc8ab62c34600edfe946ccc777e744-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.006646335680151567662653245960165036",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x49677b6f91c52edb792c4568141a120920454277-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf9107317b0ff77ed5b7adea15e50514a3564002b",
            },
            reward: "0.0006912139588190432889952839632604241",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x542bb88299feff0b6a4f5a38f26c821647d43791-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xecc0da4bf963c23e9ec9740b1f06cb192c5195a1",
            },
            reward: "0.01328965582352380430422430003696958",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x5be1d28851c974f57731a63cfb44e75cb8016ff5-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x000f4432a40560bbff1b581a8b7aded8dab80026",
            },
            reward: "0.004652536217779772018964305637235887",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x5de37e57eb3356939d22b7d6860853208e3df746-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x50422d5a52d9a4adaf8123ffd46a323056e4fb37",
            },
            reward: "0.001738076312440652351462276700268046",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x637cae3aa6685b8e11af2a96983c7db86ba4e593-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.003190333414701114759828106837372264",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6d09db5cb9b73168bee7f041a92e9d5b1ecba6ae-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.01249059349470032339879193775151663",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6d77d2ff5fb75f27032a4dd9f93de3138a29ceb5-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf927f23ce9d81270b5c6802ea4d7da1a346fafe2",
            },
            reward: "0.00531373872005116973964363028680179",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6e81c8661e47fb8a97a2aac6165163556cf1b246-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.01329322319765455847516159205347678",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6ed53aec4ef64ff50a365378b6c185ae1305b681-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x56cfcaa14c2d63fef909e335733de4c6330306a7",
            },
            reward: "0.002658576480856850512379718101327026",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x7086d16f120ae26a4538b9d9d197da2c557a9ce0-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x3ac7084e8ce0757261b79f87a8e417d2df3d24d3",
            },
            reward: "0.06646348462960250100161672878624248",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x725fb45f9b24a54a9ca9247e102b9bedb9317abd-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xa824dc3ae402dfd6a5de71c6fc30ff9e00411209",
            },
            reward: "0.005316062133067362030009004947929185",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x7ae562345f402240f98b0e6f685dc3a50d4e6e4f-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x32cd06a20b528bced096945d6d165a61e75ccd2a",
            },
            reward: "0.0130250656640214233070539494177622",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x844ae5515519fce2ad9d6e1f588311066582a02b-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x429af9695a3936e2f22d05694775d12237f2723a",
            },
            reward: "0.00000005998960031676667171955658583839578",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x863d0124ad1eaa0d9d7cc4c1c1d15784d85c43c7-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x7076106c13ca93805f2b16c52e64d3592d55457b",
            },
            reward: "0.0000001136141175215789081864804702776955",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x8ea11e4b6507fc26e7e719f945ab750c94ed97f1-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x8522885d735f75b3faeea5cd39ab3d1291da2c77",
            },
            reward: "0.006644953264477446981660312878722301",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x9b9d6bd6eb6589f6f94d417a8385d8e926f8bd49-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4677b560974508e69f3611ccdef6c77af0509a47",
            },
            reward: "0.001329090760027340555190871987068474",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc0d6f11604e9a6e41667937db52e555b15e406b1-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x53dc3204f2f294f6a5649a36ac295f74a0db92e0",
            },
            reward: "0.0005669558951039468629253059297899797",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc14673d36d6d073750125205b0171c2f7a9da115-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x83910f3e3e0064c15ff2fe043dd042855861d05d",
            },
            reward: "0.004902613268318517583514354865933932",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc6559e3789e904ca291f914d6857770a9dad2e25-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x3cf08d6a9436a1798c18d24a70f5ad0bea31775e",
            },
            reward: "0.01329021932691015119434180981076886",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc971308c20683f84d1e900a3e9e894651141f58d-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xb92a1d5c73a69a0d72820f6f6221c5a81edb7cc0",
            },
            reward: "0.006646192269472097855530003466289613",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xd84bfc499f039a5fa9e672cfc8619df5ec17f6b1-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.7973588841273845087207330451682843",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xdeff80691cc0331a7a2552e4ae0805b3507c2160-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xab12253171a0d73df64b115cd43fe0a32feb9daa",
            },
            reward: "0.001329288264826558250091174219370157",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xe9bfa6621aa45febfbef539f9111399d33045677-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x771991fc8ce57682775ee73bb28b201f4016b090",
            },
            reward: "0.006645647015651468648402667615955355",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xec53a9b324680840fc6bdbc4d9e2a79a74d6c5bc-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xfa88c88f68fc7a66ccd512a34f7686fded60caf4",
            },
            reward: "0.002657365993352310338953611636038375",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xf931f5500021004c982c544fc470b6ac7efc7ed2-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x0dbc9a65c6fec050eeed9508a707ea4aa0aca4b9",
            },
            reward: "0.0001329288147221715965617290321475057",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xfd7e7d55d35161010a84ab8861796f43af2be503-19568",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.003057402855755234978168602385815086",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x119df0abcef03b4583156edc0eb8fa0c2943d938-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x3cf08d6a9436a1798c18d24a70f5ad0bea31775e",
            },
            reward: "0.009807425700499628826470133719872588",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x194d3864cdc46df1b8c03430c3c774c239b09cb8-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.4928116556586193644266603443960504",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x2410dde3c75a6294ffe6256ed9d64ebf5cd0bb2b-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x7bfee91193d9df2ac0bfe90191d40f23c773c060",
            },
            reward: "0.05274729082754521265525881778916838",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x28ac0e552679f1d79931abfdffbde7a41b3dcb0f-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.000000102645067643585319078737587822505",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x44edd23e02c2fb360b09a26ca426283c6e27646c-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.0000001029901466257465226876531896279314",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x49e3a45e3d3d986c6108c7dff1027a2337b41edc-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xeefd6537adbda7b1a9da3f6607dda26b048489c2",
            },
            reward: "0.0009873537707888914882419625266041377",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x5893230d361de544a601fc75c7adc079a746dc29-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x296e0c21db4061ebf971e55d5db85011e7ff9797",
            },
            reward: "0.007393768698653921165619056907819664",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x5f19d66d8a4767a0aaf0ba2bb159f108cc0cbae5-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x37e1881f05f33f71e43bb8f284e0ed53e26520d0",
            },
            reward: "0.01056252671236274452231293843974238",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x65044baa1adf7b8db36b9fbd50ea9cf077afa0b7-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xef764bac8a438e7e498c2e5fccf0f174c3e3f8db",
            },
            reward: "0.1547297184818163131851658243317018",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x6e6b04be1bf327175605e243c82b81cc394811ca-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.02059617116905989124713009239217146",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x6ebe0f8884617fe1041ef3086a2b0b8b37cefeb7-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.0001056205066223286156843302626705941",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x73ea7f5feb14c57e44db56b2c49f289d2ae8cac2-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x4938a9a48139ffc440a07695eec11096f8146350",
            },
            reward: "0.005657503099139640684481314010287464",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x7805f6b40bf00011590b72bf3108d801bf7ea495-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x859e1dfb430a7156faef11947f2fc2a3c34b733a",
            },
            reward: "0.01223635061894338976524424539957055",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x78c0cb647acbc34604d96e91733eeec0865adcf4-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x486cd431523e776cf5cd074deecd7bdf29595f8c",
            },
            reward: "0.1056252671236274452231293843974238",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x796e892136842863b01d707e98ebed7b537e766e-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.005281263356181372261156469219871189",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x7f223a526bd08a59d47bb50c5860d882057d9ddf-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.000000007499621431691450638008987160466398",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x9ab69bede4cfe053b476391701e4f796f1b9a1c0-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x97836f9fc0fa0bd02fa5ddcc0194c78dc5217226",
            },
            reward: "0.01056022062281019748842495454220485",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x9fd4048078144ce72710d71d40adbd177875cf52-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x49543e53d159dd5c9d5e232556cfc2781a2d5044",
            },
            reward: "0.005280877270906813127083287490438827",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xd1d59fd62f91d22bbc39aea59ba97049f6a19e8a-19568",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x3f3429d28438cc14133966820b8a9ea61cf1d4f0",
            },
            reward: "0.1056167732475871442946444397746373",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x0779608cef74b957ec268103395e106219c70ea6-19568",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.01784702223563025931612523890088214",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x1546df38aad7928db0fa9e9e944b520a36720475-19568",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04536483307971665886782433015867346",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x238f85fc2dfa0c0e8451ee020ac98c233c18574e-19568",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x330e75e1f48b1ee968197cc870511665a4a5a832",
            },
            reward: "0.0000003619934992881610532867958542858225",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x349a20e92ad725f665ce7813a89952978d278ba5-19568",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xd790a1516f78e3fb52338084b5c5931a75bb19cf",
            },
            reward: "0.05433697466038449536071551684646564",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x4339d258b2b5872295b9bb02dc0b9f8c6ede3d48-19568",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.05927669962951035857532601837796252",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x4c0c6ba26e49bd0f2797096f8c5c6849812086b8-19568",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xeefd6537adbda7b1a9da3f6607dda26b048489c2",
            },
            reward: "0.005838163442694307114710367063841131",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x804ce22ef01f41d63b2a34cb38ff84045f4ed876-19568",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x58e03d622a88b4012ee0a97235c6b110077fb867",
            },
            reward: "0.003556302984871551930776298241439744",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x9002145f2e70a9613113d39176dd663bb6c0f74d-19568",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x25d9d6f36fb3773b98284624e2a58c0cb3c98cd4",
            },
            reward: "0.01058266633759901211230539715952457",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x94f28f7ce31b5562e76a2a4cf4dea36240baec77-19568",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.02171512820894082227767230166763936",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xa6aa2940672cfb631e46ac00a9d31a77a3905b0b-19568",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.6915569205749364234698826460109044",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xa9a8894685c73b14a5ba6e16f82dccd4765195fc-19568",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04939586617288226242646509993226764",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xc76f1f036fdb749674e681762460065ca3671196-19568",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.0000000835247607225584173833459237925517",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xcda0f5a2a1d406029c648a3b97e1e1eac102c59b-19568",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xa4d4448f2328889d79015975a7b4de27649e1ff6",
            },
            reward: "0.001975896117752205716927220806038875",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xce0c79c6c04068a9de6bef5699f12a1cde7df01e-19568",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x50a708e5dfe836601931af3ff6169e5f4e5536ea",
            },
            reward: "0.001630109239811534860821465505393969",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xdfb0b97cef06f2752ab694b8330bd58425435637-19568",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x859e1dfb430a7156faef11947f2fc2a3c34b733a",
            },
            reward: "0.01580711990120276228675360490079001",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xef933fcbfb127d6cf939dea520193c56f43d7e62-19568",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xba842b7da417ba762d75e8f99e11c2980a8f8051",
            },
            reward: "0.001358994756551797347443278995773483",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xf0a5387b9ab9f429fd5b57e1df3f28248b9ae6b6-19568",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xba4074ca3e68095d9a490008fcb68e9ab205636a",
            },
            reward: "0.01975685713925553761678054529062496",
          },
        ],
        week: {
          id: "2795",
        },
      },
      {
        id: "19569",
        borrowDailyRewards: [
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x12c260e672bd8321f6ab246b81a0b7185f3a6d80-19569",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.05849077694951802004792733909599748",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x1e6ee615adb41d8f07bdcf34889dab849d8a4130-19569",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x11d67fa925877813b744abc0917900c2b1d6eb81",
            },
            reward: "0.03822361321324107504144374955439437",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x38ea3693640452756c2ee9a22e607e4c4e0d3f3b-19569",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.5765343757867407492992308966726355",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x58667459ee28b008dccade72cd081d9df7263ec6-19569",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.01624768655411878075848266414704622",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x7bdb7d593e9460d27ef095be6a1f35c6d6e38120-19569",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x47547895218274e121e4219a3fd23235377a9903",
            },
            reward: "0.02437115706229917502808938381450309",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xd16335a50ef275b4b3e691e01a52feae6e25c2d8-19569",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x157595f04c0da495d72ceb84390f444d469c3216",
            },
            reward: "0.03657174211613864761221632738132996",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xd9f7d5fb4aac74b72125e3b4426c8f246d3e9072-19569",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x14bdfda5b5b829f14332a52c15129386284ce36a",
            },
            reward: "0.005849077694951802004792733909599748",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xf6a4062cfd0bee1c12c43b6ea0de7227bed3fd6e-19569",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.2437115706229917502078169054244936",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x011293f0e159739c559493fbdae20cd590c664bc-19569",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x6bdc44c885b166aeb687f2d247e419f5a19e1804",
            },
            reward: "0.01928327940550954833637176972507024",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x01dc26b7ccbd2b007da34e720abeae02b99be553-19569",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.06749147791928341873926386257825859",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x177de1a4f8787f49ef20ec28605c3d9bdea497f0-19569",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x4fd0ff2c49671d4fe1927371cf833e8b3b7f44ea",
            },
            reward: "0.03516181184186150462905799386836098",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x1d63e226a1b3a514bd384b9e9d596071fc8076a7-19569",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.3066116886219037897396455946909141",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x2190842ddf2994c986e08045c02442071b774123-19569",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x53fe1b209c917eeeb996720fe5418572bc0e836c",
            },
            reward: "0.06661496521903298490715348438290461",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x31095e235e45c38ca1657e9798a7aef08cf929fa-19569",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.0468057806963883203877078686434289",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x6e407de25e1c9fd004768a5ca3d6a06b3d5da390-19569",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x4fd0ff2c49671d4fe1927371cf833e8b3b7f44ea",
            },
            reward: "0.02152715191815065939512456531969137",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x7bb380a98d12de220f088211b0362c47bebb8c66-19569",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x7092020d4c6c26f6e06ee1e8cb5b34f9d14341c7",
            },
            reward: "0.2278933020651128420797957351625034",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x9831f3c9511332a83951e735aeaf9a37e000ed39-19569",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.0280488862127683985129878184415328",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x9fcc001800f9c040dcba47ad4840cc49d146c5c7-19569",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x42b2e881b164e4c283fb7b7e15b35cd256209133",
            },
            reward: "0.03681353341051822848287798530804782",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xb74d9b73d63931b029e1dbec784e05dee38c24d5-19569",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.1051815240300520810542522260816604",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xcfb80b3d81c85f401bf139288ae323fe2eff7a88-19569",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x7c0b689a3003e0dbd2d37ce15e8a2273d91bd7f6",
            },
            reward: "0.02278933020651128419045808025787085",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xe7b42d1a36d567d5314f3c990fcd178c556d37e7-19569",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xbdc88f7f9b16863c8709f97f872f4e6e16dd5f6e",
            },
            reward: "0.01577726845290693954530301553975588",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x0115f90c7f562b85444e5c48a277078437d06de4-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x4dc7970c0facd251e4398f706c45f3af877d029b",
            },
            reward: "0.003034029718984655638089717700159581",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x15990263fbf6f475d193ed629db99efd530c0d2c-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x25d9d6f36fb3773b98284624e2a58c0cb3c98cd4",
            },
            reward: "0.01166934507301790630033842884687985",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x1ede520dea27d98bc8d16df2d363c275d7b3dcf1-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x6b32080f61ce43bfdc37b6629706dae405d22389",
            },
            reward: "0.02333869014603581260067452499109642",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x225e341a7dfdfbd49924b5dbb08f531781d0f7af-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.2147191309555064824708405950882913",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x2a07081522d2de69c7566cac45edfda9edf73236-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x1ef678435e3a1581732171df82476995cc041568",
            },
            reward: "0.001838624781270304215284584449464221",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x3363aca0a6bd542d146408246b5d1e3743b977d6-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x1f5f902be1f635b30425b690aa9fd5fa2b6fa79c",
            },
            reward: "0.1867095211682865008053798710101284",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x349a20e92ad725f665ce7813a89952978d278ba5-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xd790a1516f78e3fb52338084b5c5931a75bb19cf",
            },
            reward: "0.06418139790159848465185086149585443",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x3ff988fd12069b3f3bce22fa68a2ee5cb1278e57-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x0658b634aae5e7dbfa7510d6940ffd497df06727",
            },
            reward: "0.01109592306000080147847679825896017",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x40455c3ede1e00771066dcc38777fba73f8d4f64-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x73d31581106e3f6b9dd2579e8d9fec81eba22296",
            },
            reward: "0.004667738029207162520136771160349901",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x48d94176dc8a2169eef1b464e4c857c3080f001f-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x20eadfcaf91bd98674ff8fc341d148e1731576a4",
            },
            reward: "0.233390372213338611381413427522852",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x4b0f729421d241bbc3665918bbe9f803402a0956-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xcbd6b0dee49eea88a3343ff4e5a2423586b4c1d6",
            },
            reward: "0.02800642817524297512081129615144632",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x51319451698f1c7357dcfd7d833803e6c7315209-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.04667738029207162520134438457686629",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x5bbbeee4878868bd8b15d819ac6d082e4227aafd-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xbdb7194a6f048f57e0bab51aaae0fb623615805b",
            },
            reward: "0.01400321408762148756040564807572316",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x65f335e81b687f8389d9245795885e10588492e2-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x07a1f6fc89223c5ebd4e4ddae89ac97629856a0f",
            },
            reward: "0.006581569574842368542136647668604479",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xa0c64805faea968e6d690f160c2ef8ae9a7dfb3d-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x0183d9be08db4024c2dc9aec10b9526fc6adeef7",
            },
            reward: "0.003500803521905371890103161545928244",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xacdd7f08f9d2b64bf7451171195e7c0dd7a887a2-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xac798df80b371569ec73e37124ffef7e26249667",
            },
            reward: "0.006534833240890027528190546543424553",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xaea1f7431c8d8bee7d6a74e4942a1d509166c849-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x8f767dbe1af8fc0eb2655260f2a4768a3ad49bdc",
            },
            reward: "0.01166934507301790630033609614421657",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xb4f7667c4aa42935a8ed7d92e702097d086e829a-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x2abbf099b7d6d3b25912c5c78f6737456e8736d9",
            },
            reward: "0.007001607043810743780206323091856488",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xd0517b06167727e10d25be193e75d6becffd5504-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x396a6d7a33655c45044143cb8a812227bf279578",
            },
            reward: "0.08665561426396144431164321825133072",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xedbbe7ba1c8daa8f5dde37ce36b02e47341ffa13-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x10649c79428d718621821cf6299e91920284743f",
            },
            reward: "0.006718003504146352581525801275120572",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xf1f916d52cbca47bfa2c4f53fd48cc81228e7ade-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x7c0b689a3003e0dbd2d37ce15e8a2273d91bd7f6",
            },
            reward: "0.01400321408762148756040564807572316",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xfa62b642a718c6e88f3c7a3049040c79a9c5cd61-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x6144a12e348829abb59ead0364cf7c2e540aa715",
            },
            reward: "0.01400321408762148756040564807572316",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x002cd3ca0be3ea53528b7e7c9e34abb81fa2e9ac-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.02411827474289248625826207819530311",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x0052e87f43b4dbf7a881a9a7e3b4ad89dfd50d2f-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.01205913737144624313033635017925538",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x02b6e9b583356cc5d80604ff0f1bd676c2bd27f1-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.01929462568767136072884403677573845",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x51324b76b09a2fc065ad01d02677b7f1ecc7177b-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.5567168822584861721310995380210557",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x62a455e7f460f5cec4a3e64418bb32816895c2ab-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x30be05fe3ed386b8d8afb327b03f50c9d97dcb85",
            },
            reward: "0.04703063574864034820481636356244489",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa499dadf173dc74047b32eb906a355473f7e4624-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x915188a790dcdd06447244196694c9f8a7d2b4c0",
            },
            reward: "0.03617741211433872938859842837455849",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xac12f96c21cebf7e8743cd16a9be5ba8ec3d31ba-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.002978607695800470321761423882569948",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xb87b6092ac461e2dd171fab14e389810ace950ff-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xcb33844b365c53d3462271cee9b719b6fc8ba06a",
            },
            reward: "0.07114898303065569866525974868805813",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xdd010f2ca484bae51eacc0381af9e2d5c2583b3c-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.01326505110859086744324945408902053",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xe8a6fae00900d2c4f04bb009181ee33f9042daa2-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x1dac73f3d00052d7e815b41e7b1b5cb241aa4d70",
            },
            reward: "0.004583411431263620497387222962386214",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xecef821974f44490bb02c9383cf63c79e0cd77ec-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x7f8c24d538c695262afc1408ad4217967da1623a",
            },
            reward: "0.03014784342861560782403290882573271",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xf43f03c304bdbd098826c032b343ac021b98b16b-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xaf97e87375d97f45b1c5f4ea4cc87650f640581f",
            },
            reward: "0.01966158011289053720165838830092494",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xfc2cb559aa59e6c29ad243dba024833b1e149735-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xccd72bea12f3927063be3d8798a4b74082713cb5",
            },
            reward: "0.1628175552687078582046940581429515",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x049a615a01e115a4323e65c132851b0df5b5182b-19569",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf90db858c0697b34a5c400e3a12f30bb2c7dcb6d",
            },
            reward: "0.02032543649497249019634940627446253",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x7eb4951e8b4d13bd551616e617cf94aade909145-19569",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xb6462b67fe692223dffb61c8dc8ad080cba180cc",
            },
            reward: "0.02540678392680637261436356898551542",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x8539a3d18cab5e39538759d6d3c00e0faf75ea5d-19569",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04311531232379041432657574600925224",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x863e5784aab5fef8ac407d9d6e29471381fd135a-19569",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x4d940a53ff1f2515b577c5afc9cdfbbe588c4231",
            },
            reward: "0.03811017589020955892154408377392897",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x919d51e658ccf344a816f70aef57e432d26781dc-19569",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x7092020d4c6c26f6e06ee1e8cb5b34f9d14341c7",
            },
            reward: "0.128365818085427476055948130423885",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x9f00ccf7eaf33bde3fe055f4f5fa8c26414953f5-19569",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xc3b1f7ab9fabd729cdf9e90ea54ec447f9464269",
            },
            reward: "0.3575184273442532600637255562183476",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xbe95a322078a5bae5eadb0b6442974880d89e011-19569",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.01270347755932062768874927137676412",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xd38e65022d3912427e5522fd527cc261b038b272-19569",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xe520d9514a85d28fdcffc5092b58afdf64e8fbb4",
            },
            reward: "0.05454893116522994699590695386453573",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xd6398d422bc3ae37a09ea56c66e04b087733f69f-19569",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.3021208884612253923067820229608411",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xfd9af8d65a3bdfe2b31c7b0d8cdc5cf6cd6a04d0-19569",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xaf866405f474b84e893131dcaa34b51c90e51895",
            },
            reward: "0.0177847487487644608300552601124673",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x0e5275ca7dc4bf97fc1a265948d37bb4c96c2cee-19569",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.03824277122078814241468476178409249",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x27192cfbe142d8067ec207ddc5f201b944b308e3-19569",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1239065787553535814235752033405782",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x34a0b597ec750bdf35044f33ac9e1b072b6baf37-19569",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1376739763948373126928626961085319",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xd54ab85d4525e2ad6593226f663949bb11f3f6cd-19569",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x051d091b254ecdbbb4eb8e6311b7939829380b27",
            },
            reward: "0.6879370475932284892255623543252955",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xec847b4317b7b076971a4d9ebb68370de88ee9f1-19569",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.01223962603579247424331498444150187",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x02da703f2ad773c23f13de85e4cb99b575d4f42c-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x1dac73f3d00052d7e815b41e7b1b5cb241aa4d70",
            },
            reward: "0.007964630053828056610492904752093522",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x08a5433378862b6fc301d770b37bf7973acebd24-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x92ec6e838dd90845d7d34dfaa82d6d00f66c8168",
            },
            reward: "0.006588887588280557499630897415645571",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x0d2807b752d53aa74ed99c89b98562118c444d22-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xbdc88f7f9b16863c8709f97f872f4e6e16dd5f6e",
            },
            reward: "0.003268088243787156519817588946115125",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x4fed8be4cef8a73868bd45bfacea95bfb5aa70de-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x2e3bd4e33281ec73b88233ab5f8b0e52a8d6f913",
            },
            reward: "0.002457655070428647947364467688580752",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x777460e2ace7b0a74c8d9ca968f104beecc76f7b-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.009224459524556220995939729471380603",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xade0f7c5070b051bc78838f02ad3114027dd40f4-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.9097630482935505828133136282489108",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xd32409572812b6722979198f157aae7ed32c5dd8-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xf2eaeb6a0c248bcd69fd314180d69907b9be7491",
            },
            reward: "0.03503656963127460336488410320123465",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xe11d019a01d47faf9ca8ac93749499b118f5abe0-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.02569666159429417424855668027603902",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x1fdc3148c8380e60091ad58c52c42c6868c150eb-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.004413275223286517222365023730125974",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x2b928017cf8bd56a9a4dbcccbe4f0bae88cac00b-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.5146315212930341351071786509280813",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x5447a88b3be260be3d01c3af161b2f234f69fb70-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4a8df644eff45a5fe923cc4a2efec07614a1bfb7",
            },
            reward: "0.01544856087743020838824878839647086",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x8095abd47882bd9eded35cb273ab4e0ed1019c93-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf3e112e0c32e7a30da87517e98a22103ade76d01",
            },
            reward: "0.005046285481025898940145380954914338",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x898296ec830ca5291173f04fd70fdc158ecfa95c-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x1db91f586331d168e2da4c6bd73b689fb9f43516",
            },
            reward: "0.01675326865221886503461397090229123",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x90e115a069dfb68f752c6dd48450ef8b87a6919e-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x30be05fe3ed386b8d8afb327b03f50c9d97dcb85",
            },
            reward: "0.06767021313797374899690840235104287",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xb5f440f5a31b0496b3d456383825a4a5db9a8949-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.06767021313797374899837875876279294",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xec54688608916fb79455cabc3b6f9628e57063ab-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xccd72bea12f3927063be3d8798a4b74082713cb5",
            },
            reward: "0.3064540076987521863285805797284105",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xf2adbf6a1fcc9b1d89804ff6aa59669f6486c64f-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xdffd8bbf8dcaf236c4e009ff6013bfc98407b6c0",
            },
            reward: "0.001912654498304690983580444245870007",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x0e602ea998404154059a90878cdb571f52049e23-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x445bab4342fafcfee8baaec5bd7d6030770d4011",
            },
            reward: "0.004588932447616645395121930057853541",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1849d6a3b7e7c64f0b011f4263a598af9c5321a4-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6175e7a985caeac2db12fada99e626ebd6fe7bcc",
            },
            reward: "0.00233155332968513814255733789916949",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1b492bb36664d042c4e23456276cc91179b86e5f-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x33a74ed005785a83295d3ebe7e9fee647c3b4246",
            },
            reward: "0.002316981121374606027718965031193605",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x3298a83b2d3b7231771a18ba8a17078715cbcccb-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.02914442278485127183014291828045903",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x422e84f35d37ce696b4512a8e0e17b349cfe8426-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4f942119e6ab0a6e4368e795d1d64291a3ff0da4",
            },
            reward: "0.01646062917157022592399576100381163",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x4311606cc02e6746d9d55e36d15aecbe2d263e83-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xff703ebb19c1a4e27ba14e8d7538fc113ca5f906",
            },
            reward: "0.004249110221268058943935456952199292",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x475308549bc8c8208c16e86cc5271e0c4795b616-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x83910f3e3e0064c15ff2fe043dd042855861d05d",
            },
            reward: "0.02914442419732897021504022344673785",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x4a4937a0fe899f3f5b05a9df320e2ad50a672099-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x915188a790dcdd06447244196694c9f8a7d2b4c0",
            },
            reward: "0.03185661250267754395438935959350268",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x4e0fa6a0150fe76e5ebeb6de07c3db2dbf07b181-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.003643067111491971635697718834101438",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x526b2133671787bbfed2de1ea0b806f6f81dc39d-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6b579bacffea19b002271d448a62b161f754401a",
            },
            reward: "0.006518440221467224959439180872518839",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x64f940e1c5f7e75eec2763420092e1e2c6228393-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x1db91f586331d168e2da4c6bd73b689fb9f43516",
            },
            reward: "0.02409658939599247693998800894820277",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6d9b3df93b5e49e3701950f81518200857eb8b07-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.1253209914705761750856269282342262",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6dd04d8cf38168ab9bb3076a53fe11604c846c1f-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x19865bbf18281ad5197ac06e45966dfd3e72a47f",
            },
            reward: "0.004517384576264955149839380381427607",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x818fe871c0f06a9b1e95887ffd3e232d1728fcd8-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.4501132029984663531312495883225242",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x99299a18d07ba4828bdca135f1b6c6ed13eca64f-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x5f0a0e3b30d304fba56e2eee3a442b0bb5c40275",
            },
            reward: "0.0286489645961697367749953295293194",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xa5c5994870fd0f1d3e06ea9a3ddeed1d3f2fd52e-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x3a762044a55802b57f12ed39d83dd1047d77b8f2",
            },
            reward: "0.002574399181180155812066372818948367",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xa6bcc97eb84b64c9cb66c42e68f6abc4cdb758a5-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xcb33844b365c53d3462271cee9b719b6fc8ba06a",
            },
            reward: "0.1299300445981073753016178079890874",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xaded6a47fd19a18363563dcc005c74cd5bebff42-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x25d9d6f36fb3773b98284624e2a58c0cb3c98cd4",
            },
            reward: "0.005828883324212845355665098455543309",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc51d2bf1798af65b1e3177d7de7bfc60c6428a97-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xa824dc3ae402dfd6a5de71c6fc30ff9e00411209",
            },
            reward: "0.005683161241107524220389803038631937",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc94b314d7421faccbbe89cb04e70542b1a325447-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x30be05fe3ed386b8d8afb327b03f50c9d97dcb85",
            },
            reward: "0.0699465998905541442344818520170206",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xd0a066bf800c8d22472aac9495f2fbc51abe483b-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x58e03d622a88b4012ee0a97235c6b110077fb867",
            },
            reward: "0.006323607511314616673026223593413598",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xf93b2208a5854fc3e85492c1503c43fa6bb7ec01-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x5c44368c0ad4c446842738bdbf8f2bbf9876546e",
            },
            reward: "0.01676199810672198429301475470010718",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x4bab58f19702caa5ba8a223da1a4f6a547f7184f-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x3f3429d28438cc14133966820b8a9ea61cf1d4f0",
            },
            reward: "0.3042368929254869627476698436574749",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x56c4f38f95355e86ee42033ad8aef733feaf40bd-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.09291858700165936428436689092160818",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x5f3e3ee5a0644d3b7aa1922767de8285facc9e0d-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xe520d9514a85d28fdcffc5092b58afdf64e8fbb4",
            },
            reward: "0.01045401444790992874639558320123803",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x69a4fa2c1d81b640a69b1f1ac22974578b64cc46-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.0000000005524540301879768579995906668523747",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x92a0aa27ad8572e125803ea0777af1885f25c9b9-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.009291865462223101671559010210600811",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x97bda93b2f4193a34819f418e50d007c6d80a0b7-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xbff78d2838243c9c6c18245d69e543a9ba6c2890",
            },
            reward: "0.5227007223954964373196642307751302",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xabb209661fb03f48f1174ed3b6c4a0a677298b61-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x42087c28f296d3b2dab56e3f5d1aca1388f2be5b",
            },
            reward: "0.0000000008544238204366747143301304459738577",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xcb02af99f8dc40c1111a9d968c737b5b6691dd67-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xeefd6537adbda7b1a9da3f6607dda26b048489c2",
            },
            reward: "0.01626271763632633231490532670416974",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xd4373715a070bb95c5e7a066efeeade471c1372e-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.02787557610049780928531087990780306",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xdf8fd47da004c44237f6d61f12fbd2b4cc03fa98-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x521dea4e41d3582dffc931c4100d314d0a9f7ee4",
            },
            reward: "0.006388564384833845345019265089226222",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xe695153ee5688b3e75bd3c37ddf0bb39a869235a-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x23b83c2821d1e9fe5c40ce3c014d2420f2f1eeb7",
            },
            reward: "0.009871058238688367660457397203027716",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x1de001a02f1e5db163be5fe07dfceeaaed50af29-19569",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xd9da13de745bfa50ffaafd0a531b92f0511b72cf",
            },
            reward: "0.08217419615855422992634363193032226",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x2fa837f0ad17ea91a2991a608e68263491f2bfab-19569",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04725016279116868220765051435267707",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x69371c6efb2ab226fe8224f3abfe7abb6e80a9ba-19569",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.01438068587755703009817336678752164",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x745ee33177e31b12ce08d2b6256b4d0e351ff3a8-19569",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.7945642875102553456845167680642827",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xcd8cfc4784e971cd960baa91d266d0bd33755425-19569",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x0215c140840b896e1e371525d1f70cefbd09aafa",
            },
            reward: "0.0616306676624647120833157188651963",
          },
        ],
        earnDailyRewards: [
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x07ea5532ab74322c954aad2ecddeb4c82505a2ff-19569",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.07432258326021799668728433789958895",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x506ff697bb7f93f4eb09bccffb976416bbe38c52-19569",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x0f8c58edf65cbd972d175bfe481bc16fa8deee45",
            },
            reward: "0.5405488498226016501042772279781114",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xae9149de7b243d56bd9ce88329ecbb1177a2d5fa-19569",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x239168974aad75472b652046255050e50a0d5fc9",
            },
            reward: "0.3581021653318545473740463618428353",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xc75afc43dedb449e741f8005d76d5fa880a1cef9-19569",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x9599d89ed83e6db03d57c004f858ff82228604e4",
            },
            reward: "0.01351328925780583197637910799406926",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xdfaab0e92d3700c33a72fcdfbb90e349803561e8-19569",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xa968a0920bd35ad65f3bd78a934e45f020d6a1e3",
            },
            reward: "0.01351311232751997385801296428539505",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x1457f27c9ebbb7c5701f7e70839a8a5f477107bc-19569",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.02505620209058623778640977003464763",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x35e69e3fda9994dfb35bee5f7c48f16b65b9abb0-19569",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.3140528118129221511956259995411959",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x441b3504d51b2a3b29920270814ce570485ec470-19569",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xef47003f0e276eb0fb60b626e80554dd7adcdd11",
            },
            reward: "0.2465239517785827094658248317260659",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x632a2770f96d7fd44702e00dcc355811f9b336d3-19569",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x157595f04c0da495d72ceb84390f444d469c3216",
            },
            reward: "0.0451417381251434335330742783169565",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x6658b6c07482b477642e47e37fa00f0d807f5fd9-19569",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x7092020d4c6c26f6e06ee1e8cb5b34f9d14341c7",
            },
            reward: "0.04333388190910257347257830403121264",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x6cc60ac6c98450d736382cdb3774d04c7594296b-19569",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.01283510197231047711138444362591498",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x7d8fe7b235d862e3ce44dd499bb15ea25d7f352a-19569",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.04679022996612378516406741012883102",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xc581b9f298220a8293e7e399dae2dde88dbb1921-19569",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.02010515685339998157051215790911811",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xee68b40644ce585e732b659ff79cb79f1ed01717-19569",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x3cb07d1f0620090bb667df1a5c90b4b80f8ede73",
            },
            reward: "0.2461609254918286507005228046860573",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x017a7ca1bfb339cbb6d6cecf3f787516975a7c3b-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x8f767dbe1af8fc0eb2655260f2a4768a3ad49bdc",
            },
            reward: "0.006149364794036504740397939638183783",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x05cfb65544eb5568b1438d94b2095fcea6b30b9d-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x1f5f902be1f635b30425b690aa9fd5fa2b6fa79c",
            },
            reward: "0.1229958815011572288094864046767931",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x06e7f912044524b49b2eb6b72c891e984d44e36d-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.1229856650834154965279496203855634",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x098b98afa71f950ea862b4e0d91b183e7bc16b69-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x07a1f6fc89223c5ebd4e4ddae89ac97629856a0f",
            },
            reward: "0.006108876213949677197533917118184688",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x18877e98dcf273b46ae45dc90005b2de3dec4079-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x2757ae02f65db7ce8cf2b2261c58f07a0170e58e",
            },
            reward: "0.0006149794075057861440474320233839655",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x1aab626f725dfb8a1017ccb658ad308b71517346-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.00000001630133439447707216948156621917233",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x2abe8bfee84fcb968e2233c7307c9d1881e43157-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x47547895218274e121e4219a3fd23235377a9903",
            },
            reward: "0.01229921929061386826668040886778193",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x32dbb4885e665fcc2cb74fa2bc74f208d1b3a900-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xf7c7ca163ddfe69218377ab7086bdfc9a50f4e1e",
            },
            reward: "0.002459888288097895557021777028262945",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x3a15c7a50bb53cc2685e18c7c6e0e2812ec3453e-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x0d9f37c75f7df825a7f02bd39df333485853f4a9",
            },
            reward: "0.0002248705469500652194394433615637806",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x3a71da5ea3dd8cbc10d3fe060c0669bc4eea2b12-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xac798df80b371569ec73e37124ffef7e26249667",
            },
            reward: "0.003443884682032402406665619330950207",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x54bba40e7f7b6cca98c0ce02095234aad54abe48-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.01229976276705552744922151258176571",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x57ccb41682e25faed21b3e992d6240e399ec9dcd-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x3e4dd7e5c37fe838eaffc89a551e1c311b7d14f8",
            },
            reward: "0.001229921407753712022677128886476578",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x5c4088920b657726013ae134737f6fee06e23216-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.00000009127378055648524393942948079667293",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x68c927dfc35367ab0909d4cf7386deeeb425d081-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xbdb7194a6f048f57e0bab51aaae0fb623615805b",
            },
            reward: "0.007379752890069433728569184280607586",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x73a2cff38d41ec035afa3038f4c6140ce69ba15c-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x5fcdc32dfc361a32e9d5ab9a384b890c62d0b8ac",
            },
            reward: "0.0003689876445034716864284592140303793",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x74c3f6f294b9825f98ca08816f2529fdf093d5bc-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x0745a468966c6be811dda6d1953fce2798efc1f1",
            },
            reward: "0.06147414104750814048096856671909159",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x829c190ec5468eeb29fa5621ca65a76aac2eaa44-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xa62d7ad2fddbad38a0aba25e40cdfe2edfa4d183",
            },
            reward: "0.01229880923976752377469058982386749",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x856926c82ba816e84bce9d7913de57c985cfbd61-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x3e4dd7e5c37fe838eaffc89a551e1c311b7d14f8",
            },
            reward: "0.01106929151657340974153016742953232",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x9b333d180d559797db6682e11e6e5e494b25fe5f-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xd50cbde55f8da4e8cf94f38deae2c722a5bd156b",
            },
            reward: "0.02410685281140408331751266436259794",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xbf5f2a7883572e0b23b387a848c417b9c31dd936-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xc24dc96768d7a96ca37aa3e65787f69afaf1a354",
            },
            reward: "0.0122987094262873262393720834121135",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xc3b5493dcaafdcb5fe6d627efd099dd0294ca4ad-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xc64844d9b3db280a6e46c1431e2229cd62dd2d69",
            },
            reward: "0.04140380466110735635570158384886196",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xc98d804cfacda3af5d07ca52f9c8137220f8f37e-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x4ea4309e5fcb06201ea54e0fb149de522138cdc7",
            },
            reward: "0.1229943561454899636773957848035059",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xcdac1a2879ae3b612a5667228e629ccc516a66c6-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.0000001161277348816255079956408966221415",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xd3696b74d9fdddce791bcb2c3eea1c137a0b8861-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xd9da13de745bfa50ffaafd0a531b92f0511b72cf",
            },
            reward: "0.1230129238769439975952995697071474",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xe7370c3a19a9676d142cc9641909afa0a888d215-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x5a1b8d6a57445deced8f816310fdb0aa6367cf10",
            },
            reward: "0.001615098688250061340664156951050194",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xf0afb9dea61d5bcaa96ea2f3ec1b074714a4531b-19569",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.29116473436667723513292188099674",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x178ec3e0dca23e5c448b2ac7e4388592883a3d55-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x83910f3e3e0064c15ff2fe043dd042855861d05d",
            },
            reward: "0.0000001214211428937362411163460858439541",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x17dc1526c6ff9cf0c702257775bfbab2385f6fae-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.01207451370780685067270215139535627",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x2815cb20c1063f27d6e5d04b6cd2904af5544bff-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xe793a7a7c7b7a4cefddb30f856b01f36e51b1b82",
            },
            reward: "0.0002414907400282999163284180828057914",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x2a6536e4edb891eba287e7d977421a6df8bb6dea-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xac798df80b371569ec73e37124ffef7e26249667",
            },
            reward: "0.004829805483122740269080860558142507",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x352cfc59b91088656ebaaab3b42febe1b45f868a-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xa4fd65694a9708c2d204bdf7acf8b9c09b105903",
            },
            reward: "0.003622354338505855638780206439064152",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x3c21a1e9b544a56a450898b737a93b8220665e5a-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.01207458618019604892705424109497451",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x42474bffae9d0b4e9dc4e8ea48a5705eacdcb087-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xf44593dfae05bff213c876a8e1fdcc15a45964df",
            },
            reward: "0.01207451370780685067270215139535627",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x497e2f7567a2f46755badacfed456c7d1cd68638-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x0658b634aae5e7dbfa7510d6940ffd497df06727",
            },
            reward: "0.001207451370780685067270215139535627",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x50cc056966b4f1eaef6157390940115d2a396188-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5d12aa6a6001fb326332c3801c6bd12449b6e44e",
            },
            reward: "0.0002414455948679527785626385010661246",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x538112796335be43a765a5cde21f080c3296be64-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x915188a790dcdd06447244196694c9f8a7d2b4c0",
            },
            reward: "0.03622188433710767289023542580059257",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x5f070b42e7fb07786c606d7a162e36056bbfb3b5-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.002414820249363383539357561294128343",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x6030bec53dcf30ccdbced5f578befd80b9b10601-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x9578e8369369fa05e5f2fc8d80a234ad2f8608a8",
            },
            reward: "0.003621558937522610955201215516048172",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x6182164f9f39364908763e94adcc775a2931cb49-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xebe4d96a48c4d0659fadfcae5a132de3a5733374",
            },
            reward: "0.004829805483122740269080860558142507",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x650899474737713e9c247aea3aa777b3c2ed4964-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x7076106c13ca93805f2b16c52e64d3592d55457b",
            },
            reward: "0.00000005802196799876187003648778541672629",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x68ae6b8206610be3d862b4b26b1de35a058c965f-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xcdc8698745db38280d649fb9e7322d899c4a1bd0",
            },
            reward: "0.01207181258457718246217883854703406",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x6f09e208d0bcd35e1db162bed664f3848c7172b4-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x66a4f5d0b57d86bf1b9bfc63e991a9387791fdcd",
            },
            reward: "0.01931922193249096107632344223257003",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x8175279cef254dbf7d0d9cbfd193dd49bc1025d6-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x9cdbddf646a86ec987394c807defed498dbc7df4",
            },
            reward: "0.0003017958725191709234818821049155467",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x8c0ff2a44c53f823c703e83a75d287b37f5c9c12-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xe922bc2ad029b1efafc3eb3ff776219c3dfbb625",
            },
            reward: "0.006037256853903425336351075697678134",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x97f5ea81f39cb9a1d68366503dd282a8c0ba6d29-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.00000004527896789549688516101837805162333",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x98296fae90b58a3db28e7fdca20c96663043750c-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xb92a1d5c73a69a0d72820f6f6221c5a81edb7cc0",
            },
            reward: "0.006037256853903425336351075697678134",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x9b90a6e571e286bd10e4f5ef3d428cd89b911740-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.02414902741561370134540430279071254",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa5af820995e5383bfaeb7c6ba22f3eb55e35f768-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xb0d6ae7784a9f20c1e34218998f0fc5c24972441",
            },
            reward: "0.01207090841238758960936656795969668",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa641456aa2378540e3be55a2473ac8065170db51-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x9730299b10a30bdbaf81815c99b4657c685314ab",
            },
            reward: "0.0006037256853903425336351075697678134",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa64d42e8b130f306b8b8add558a095cdec8b8dee-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5e4568c4d8343052a06ec8aab1e124af08b73248",
            },
            reward: "0.0003018628426951712668175537848839067",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xab9c5fef3a48d4b8501b9e226589df4d81b08401-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.007244292549985718240701520252657166",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xb20f0e2b013655346c6d9c54b16decb7b934fc91-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.6175757639617466240129482067067025",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xb4b84f7205667c6f696add26462d51ba4305bc18-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x7f8c24d538c695262afc1408ad4217967da1623a",
            },
            reward: "0.03138464372710002158108882841193839",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xbafacc6f392410d2d47cb9ca25541e17fd4badc9-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xce27fa2d00b91c9486e3545c75cd7df86d4e3632",
            },
            reward: "0.002463086175096712247162960671839535",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xbc3f05481a54a949ebe764d095da703e9ac96c44-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x70e439584ef1ba300106b9c16543eaa1de676dc2",
            },
            reward: "0.02776588867266703566089770476568035",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xbd431752a75950788fe689d49d970f95a1732581-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xeb434da562e7a8ba045472fd1e134b420771ef7a",
            },
            reward: "0.02414459895046826618920490006218027",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xcd4d1da85c2894148772d088e14e226cc9580af0-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x3ac7084e8ce0757261b79f87a8e417d2df3d24d3",
            },
            reward: "0.06037083172839896977919596829780047",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xe316409d3df47accfdbf20c7cc12ea0a9fc1cb87-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.002777138152795575654721494820931942",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xe5766c80dea6a9b873d56f7149db185e8ab919ba-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x1dac73f3d00052d7e815b41e7b1b5cb241aa4d70",
            },
            reward: "0.001207451370780685067270215139535627",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xf00e853ed9216008355c3ef0843a7b20d3fde16c-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.02777018493007908375961313366405614",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xf073cde213b7a6da101ed7e20ee6e5e9a9973b07-19569",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xe1e2a52a21226ba37f28ba6cdf59f20156798f94",
            },
            reward: "0.02294879647508985832593296119427863",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x03431c179e431c9785cf82d0ea2729b9561ae76b-19569",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xef764bac8a438e7e498c2e5fccf0f174c3e3f8db",
            },
            reward: "0.3635516890181787426041717687937778",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x0dbaa1361088a250de5a893bd2efbd3e24545ec8-19569",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xba842b7da417ba762d75e8f99e11c2980a8f8051",
            },
            reward: "0.002907763360058554191139730666265401",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x10119b4fc928a31ab4fd764f743e871f02797446-19569",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xb6462b67fe692223dffb61c8dc8ad080cba180cc",
            },
            reward: "0.02423677926787858284027811791958519",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x13927d76c5a2c5985b25f4c0678d489f04126544-19569",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x59653fd9713a30c54237a6fd21fd97ba141abbe0",
            },
            reward: "0.00477466854626973770492589150590727",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x15eafdb60976e7d22c0ad6c77f05dc64db78f79c-19569",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x296e0c21db4061ebf971e55d5db85011e7ff9797",
            },
            reward: "0.01211704874890359536358654239006722",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x2d1728752f30d604ad144007ac952c578973bccd-19569",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.09694711707151433136111247167834075",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x3910239862b50a5915d49b05c94d97b89265f055-19569",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x7ab29b393aad63e7119c004bb45eefeaa3e70da5",
            },
            reward: "0.002407681652471058419353228234131593",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x3ec36f3a55b31d168fdffaf5d21ab103ffb6e760-19569",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x87474eb5e6f15c5b770c7a68b37342830211ea9c",
            },
            reward: "0.01817758445090893713020858843968889",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x575879fa71ba697042e973be663758b06f63765e-19569",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x318e3835baa3f83ca734d9afb9996f702aa06a3d",
            },
            reward: "0.02394600694300528985977465194299729",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x71b4201c1f312f4f04be8be7b02e0ed224d784fb-19569",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.01211838963393929142013905895979259",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x77f66e4a6383893ecaf0803e52fa1e8b60d43fe9-19569",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xeefd6537adbda7b1a9da3f6607dda26b048489c2",
            },
            reward: "0.00247639073710110406694015728872457",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x92a95ea3d6c5b81fe85d704203ec1c19e3266a10-19569",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.04659066544781393969073438429957219",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xadbf773d6cb8373d64861c7ae4b02aacfbe2ba76-19569",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x37e1881f05f33f71e43bb8f284e0ed53e26520d0",
            },
            reward: "0.02423677926787858284027811791958519",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xcef1a9a0dd2cdd92b5669f6b220799104efa865e-19569",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf71d161fdc3895f21612d79f15aa819b7a3d296a",
            },
            reward: "0.365511435854078252507357289961564",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x0e3f1e786b42465ca7d68fede5389bfca714db42-19569",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xf1a1602c90d8e510bc583eabb53667e3afae4b52",
            },
            reward: "0.001520650464992064030733583286097894",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x0f3436efa3097f960a27b50e673db0b7de765577-19569",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.00000001493373796909394555425041472159547",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x1444e8c66fd6bc37262f26a33bc217b3e0403ab6-19569",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.3041359120745190370158937844471699",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x2643d4f4ffc86ee595c0d8a68a27bef82eab85e4-19569",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x20eadfcaf91bd98674ff8fc341d148e1731576a4",
            },
            reward: "0.1368630433509857055661720083798401",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x281a602477c5b328fcef497e47bb4a4a6b963614-19569",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x58e03d622a88b4012ee0a97235c6b110077fb867",
            },
            reward: "0.007603490781539090638986196908177938",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x2b947350d8e4a4aa1173ee0e4655b33fc8ba55ad-19569",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xde055950ccaaf115c8d76b33e6503ee403875ccb",
            },
            reward: "0.000912137612739679824189513841971391",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x48a19d4eb3553a476ad6218e0625b606be7bc4fa-19569",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x4fd0ff2c49671d4fe1927371cf833e8b3b7f44ea",
            },
            reward: "0.0000000049121112148098848494767416317087",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x51a1f69f45791b8e5484dd9d526199d9f29223fa-19569",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x6b32080f61ce43bfdc37b6629706dae405d22389",
            },
            reward: "0.01520625310119767474283342091571016",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x5d63b70786f582eb96ab006a4e51f3b930e29e51-19569",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.01520700481677618950735244537553779",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x5dcf7edd434cb7f8b255b5d913783792e41b03d1-19569",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.000000005424496197873456386165208340111356",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x61a5471a19fcceb07ed651ea402a149ebd6fb0d1-19569",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1368630433509857055661720083798401",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x73933d5e77222f5987cfe3612eebbc88b7833c57-19569",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xdb10d21f28a34fd04e4425eac777483798f7e217",
            },
            reward: "0.005319864893755207168824350841511888",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xa0af774d47a46f8958b5289e21b1cb6210a62f62-19569",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x859e1dfb430a7156faef11947f2fc2a3c34b733a",
            },
            reward: "0.01216560385342095160588195630043023",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xa3fb5786e157d6b2618859b1921f8b71d4f5eedd-19569",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.03804419540043977263093201921483246",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xbfdfc5e00155cd27b8cc4cf7ab4cf5551b54a8f7-19569",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xb225bf7e4f1da339195972ca7e4a1d9ff52156ce",
            },
            reward: "0.007603502408388094753676222687768896",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xcfab8ff364d67af18cbec98b8d47398d503e4a0f-19569",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.00000001017357525813774917264121459230604",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xd29bc9af132fe09f0a6a342d6a5c27e12baaa14f-19569",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1429458452776961813691129865300552",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xdf2dba82533627d6688efe2e467a76099576a9e3-19569",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.0001520700481677618950735244537553779",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xf7e4255bea7efa35c7c9253a2cfbb2ee3ccef378-19569",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x4ea4309e5fcb06201ea54e0fb149de522138cdc7",
            },
            reward: "0.1754573471204762437691300159037213",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x17e337bac18fb13ee3b547a44c15cd77561ff594-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.0515209819329473582727689869472925",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x2abdda4c66bc2156f81f7056bc87a904017bdad2-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.0000007419398501974736290380088330489548",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x4c19b8a92d319ff5261a4f8621c897e8d9c36e0f-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x37e1881f05f33f71e43bb8f284e0ed53e26520d0",
            },
            reward: "0.01288040921074601205136355112184796",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x4c29c31161b6313b716e36402a3d56f6e4a4964e-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x5b191f5a2b4a867c4ed71858daccc51fc59c69c0",
            },
            reward: "0.01291289868718205667585680989407862",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x52448305da311c4a308ed72c7fb0134248abf373-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x3f3429d28438cc14133966820b8a9ea61cf1d4f0",
            },
            reward: "0.1288029945853765533329113458676212",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x540b46c36557d3212e06e37182e5296bb486323c-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x4adf9b737ab9c97f5728cbcf143483cf6c2f7df3",
            },
            reward: "0.006439894956861903963721026735591655",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x64943f1ac7b541c3b6bdf45464c9b4093e4a7fab-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.006440204605373006025681775560923979",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x7602834c716948c438b9729fe0384b3aec52b3eb-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xef764bac8a438e7e498c2e5fccf0f174c3e3f8db",
            },
            reward: "0.1931691116351407532483611315544956",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x8219adc2f9791e2d8a67882a4a73cc85e277c524-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xebfb476e0f9c8d74f0fce72b688d7177dcbb73c2",
            },
            reward: "0.001288040921074601205136355112184796",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x8ce6fc3cca6deb3545af4e32a49a93a4c7a61e8a-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x11d67fa925877813b744abc0917900c2b1d6eb81",
            },
            reward: "0.03864133642869559907681695132701117",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xa121d81b6b83075ad0ee5d4a35087af262712173-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xf9f668901a13b2c817a9cc9d7fed50868b7af8be",
            },
            reward: "0.0164171892542879165164992631701917",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xa988e47d6c2549c485ee612cb0d0dfced04b4eb1-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.4508005445592505590888178822643007",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xb756db88231a365c7be83adb959cc6d3e2218ec7-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x7139a445ecc1a597695cc9a077caaa41e0f18391",
            },
            reward: "0.00000001393307990325787647059348145189896",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xbf62dc76e06555ffadf4c7cd7353b055a6d09e52-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x3cf08d6a9436a1798c18d24a70f5ad0bea31775e",
            },
            reward: "0.0128804577762193941728483681300405",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xc0558bcec4725c038256174fac0c1921fb145afa-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xe3db0df6a4a62106a3dd5cef76c196a53f3e7e4d",
            },
            reward: "0.012866467382463181658052876947767",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xd29721fd44d8e4cd02bae1453e40b2d72276859b-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.004706423657630326690217052764633092",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xda2035f6b3d6618bbf5fc591b25b49b6ab175d39-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.01932048514600088624324370637563317",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xf051ffec03e1842939c2fe40c1a8623da624b220-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x6b32080f61ce43bfdc37b6629706dae405d22389",
            },
            reward: "0.00000004809285428114768975497040527842953",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xf220126d67557ff209c921f4d2744f85b218b664-19569",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.03091175529496550989850765265366657",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x065af1d2579d2896c87d1072bcecb64f70dbcc52-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x6bdc44c885b166aeb687f2d247e419f5a19e1804",
            },
            reward: "0.0000001269866751616794381559270728157142",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x0ab511f268ecb706b956e0a6bb99f9268282e3dd-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x3ac7084e8ce0757261b79f87a8e417d2df3d24d3",
            },
            reward: "0.07350377746493086271017551139087956",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x0c0e979e5d699e51f4707527e3b4a1576406270b-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x7076106c13ca93805f2b16c52e64d3592d55457b",
            },
            reward: "0.01058454395495004423026527364028666",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x0c7a5ef0532c0e1b8b4984ee4e4e19283f2cf7cc-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x2068d14ee50772dd6e89c6f64f32adad0cc936ef",
            },
            reward: "0.008085046540360350163048116115697282",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x118954ab01883c2c245d7a9b737df80e8c4afbfe-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.004410547006246825680609032514787703",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x16d559ee5ca6f8f14c15ebd511809722f4b87702-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.01470119389368191403221766115349162",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x2b4f1f53c4bbf3fa77e2a7faf1cfc063f7c21523-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x1a918a8386f75f382e2a1b2e10b807c39728caf2",
            },
            reward: "0.003689841020588340712701047623011692",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x4820233ad8d7bb201f9462d242922d28926bc642-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x28af2a3c28b7ecf7d84a8ba0fddf7525a88e1f61",
            },
            reward: "0.002969120098452450766597163218104644",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x4f1122cc1723e5d60cc11c68be19972b8e3be8d1-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x7bfee91193d9df2ac0bfe90191d40f23c773c060",
            },
            reward: "0.0176402616111560972793639981470519",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x5ef7d0933cfb377f11f125ba0d74812c18f35520-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf9f061d9a5f04e223ed3c560e03a8ab0a70cc1c4",
            },
            reward: "0.02205113323947925881305265341726387",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x5f38bd14ffcf23f0f8b6ad90f3dfcd15077e2b8f-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x66a4f5d0b57d86bf1b9bfc63e991a9387791fdcd",
            },
            reward: "0.01175935426432531210688028090231596",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x6ffcd46a8194ec8d3617f3bee62334de71967033-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xe1e2a52a21226ba37f28ba6cdf59f20156798f94",
            },
            reward: "0.04410236006453371102909453162389981",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xab4632810f9b93eccc993fe804f9da57875649fe-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xdb10d21f28a34fd04e4425eac777483798f7e217",
            },
            reward: "0.002057420646960086352743749315864243",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xaee5b0711b31a7954406b40f2dbc079b2d6fb65f-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xab12253171a0d73df64b115cd43fe0a32feb9daa",
            },
            reward: "0.00279335542294021395240962821409298",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xb9134373f544527d15ce3cdd8cb1f78d72acf42a-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.03013654876062165371117195967026062",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xc3006429aa36fc6d14ead73ac106d42ffcedd576-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xa0ce55801b0b88f2df2ef026eb8da79e9f0ad9c1",
            },
            reward: "0.0007831978087451405178907888901410175",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xe60d6cc634782add49132dea0a70b0b014fd0500-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xd790a1516f78e3fb52338084b5c5931a75bb19cf",
            },
            reward: "0.001470341529328948246112463895244569",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xec6224e36c67b54e3daaa968cd1cff6781e003ac-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.7350023688719825882293330651112301",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xeedff03dd73862e59f5c48792ac9bd241ecd11dd-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.00000006299839401441143083295558514499734",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xfa16a59a3458e5008041109c2add292d9886c606-19569",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xd46c81245a0582891c2249daf2d68925977cf2a7",
            },
            reward: "0.0142593978156470253754640862737178",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x08a27f3ee826ef49d1673846416179c3584671f6-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xe793a7a7c7b7a4cefddb30f856b01f36e51b1b82",
            },
            reward: "0.0003983840803861435310191556191714819",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x0b03f8ac3ff960b3db43a3f549fe0c98bd0c6102-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf3e112e0c32e7a30da87517e98a22103ade76d01",
            },
            reward: "0.003997153991890204951250257499228543",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x0e78c099b7ed855f56a4e732672d3434f6c2108e-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x056590f16d5b314a132bbcfb1283fec5d5c6e670",
            },
            reward: "0.001326728572731650496938362500299861",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x12b9aadce493ff66d34298e3b5b86fcea8be8290-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6bdc44c885b166aeb687f2d247e419f5a19e1804",
            },
            reward: "0.00000005490664791305957674785747311474334",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1affd8e82ddc8ab62c34600edfe946ccc777e744-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.006639598611952456104170113445490682",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x49677b6f91c52edb792c4568141a120920454277-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf9107317b0ff77ed5b7adea15e50514a3564002b",
            },
            reward: "0.0006905133087458535479943104505251109",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x542bb88299feff0b6a4f5a38f26c821647d43791-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xecc0da4bf963c23e9ec9740b1f06cb192c5195a1",
            },
            reward: "0.01327618474382899145181661725605387",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x5be1d28851c974f57731a63cfb44e75cb8016ff5-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x000f4432a40560bbff1b581a8b7aded8dab80026",
            },
            reward: "0.004647820167416618518175866543706414",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x5de37e57eb3356939d22b7d6860853208e3df746-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x50422d5a52d9a4adaf8123ffd46a323056e4fb37",
            },
            reward: "0.002653311411891830010278983141682991",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x637cae3aa6685b8e11af2a96983c7db86ba4e593-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.003187099528417439163787580730281895",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6d09db5cb9b73168bee7f041a92e9d5b1ecba6ae-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.01247793238574182188645525236838172",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6d77d2ff5fb75f27032a4dd9f93de3138a29ceb5-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf927f23ce9d81270b5c6802ea4d7da1a346fafe2",
            },
            reward: "0.005308352440773077648728279830335938",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6e81c8661e47fb8a97a2aac6165163556cf1b246-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.01327974850188557073409046993743915",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6ed53aec4ef64ff50a365378b6c185ae1305b681-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x56cfcaa14c2d63fef909e335733de4c6330306a7",
            },
            reward: "0.002655881610792195855716199638220728",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x7086d16f120ae26a4538b9d9d197da2c557a9ce0-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x3ac7084e8ce0757261b79f87a8e417d2df3d24d3",
            },
            reward: "0.06639611381803825216840131227253805",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x725fb45f9b24a54a9ca9247e102b9bedb9317abd-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xa824dc3ae402dfd6a5de71c6fc30ff9e00411209",
            },
            reward: "0.005310673498658157386863038997634929",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x7abdd8d610b791d2d55328acc5401edb26a4fb48-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x5f55980eaf5131f9fd487e1177cacb18d7609a21",
            },
            reward: "0.00103696143222667486121273038133981",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x7ae562345f402240f98b0e6f685dc3a50d4e6e4f-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x32cd06a20b528bced096945d6d165a61e75ccd2a",
            },
            reward: "0.01301186278654135936350289186192605",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x844ae5515519fce2ad9d6e1f588311066582a02b-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x429af9695a3936e2f22d05694775d12237f2723a",
            },
            reward: "0.00000005992879176781262839778959651265188",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x863d0124ad1eaa0d9d7cc4c1c1d15784d85c43c7-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x7076106c13ca93805f2b16c52e64d3592d55457b",
            },
            reward: "0.0000001134989523997794481163422276675466",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x8ea11e4b6507fc26e7e719f945ab750c94ed97f1-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x8522885d735f75b3faeea5cd39ab3d1291da2c77",
            },
            reward: "0.006638217597566071142751533034878935",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x9b9d6bd6eb6589f6f94d417a8385d8e926f8bd49-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4677b560974508e69f3611ccdef6c77af0509a47",
            },
            reward: "0.001327743525171320010267705918081387",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc0d6f11604e9a6e41667937db52e555b15e406b1-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x53dc3204f2f294f6a5649a36ac295f74a0db92e0",
            },
            reward: "0.0005663811994046895356659359338655259",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc14673d36d6d073750125205b0171c2f7a9da115-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x83910f3e3e0064c15ff2fe043dd042855861d05d",
            },
            reward: "0.004897643726975433051655668209041812",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc6559e3789e904ca291f914d6857770a9dad2e25-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x3cf08d6a9436a1798c18d24a70f5ad0bea31775e",
            },
            reward: "0.01327674767601927979998384673142944",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc971308c20683f84d1e900a3e9e894651141f58d-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xb92a1d5c73a69a0d72820f6f6221c5a81edb7cc0",
            },
            reward: "0.006639455346641438112436561299327967",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xd84bfc499f039a5fa9e672cfc8619df5ec17f6b1-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.7965506400903618140549667471749586",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xdeff80691cc0331a7a2552e4ae0805b3507c2160-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xab12253171a0d73df64b115cd43fe0a32feb9daa",
            },
            reward: "0.001327940829769499717405445526672232",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xe9bfa6621aa45febfbef539f9111399d33045677-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x771991fc8ce57682775ee73bb28b201f4016b090",
            },
            reward: "0.006638910645518167598052555334254885",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xec53a9b324680840fc6bdbc4d9e2a79a74d6c5bc-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xfa88c88f68fc7a66ccd512a34f7686fded60caf4",
            },
            reward: "0.002654672350300142670238201464236246",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xf931f5500021004c982c544fc470b6ac7efc7ed2-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x0dbc9a65c6fec050eeed9508a707ea4aa0aca4b9",
            },
            reward: "0.0001327940712283867758913500431783182",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xfd7e7d55d35161010a84ab8861796f43af2be503-19569",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.003054303714733379198629764866520149",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x119df0abcef03b4583156edc0eb8fa0c2943d938-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x3cf08d6a9436a1798c18d24a70f5ad0bea31775e",
            },
            reward: "0.0096739237760018556356823378260529",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x194d3864cdc46df1b8c03430c3c774c239b09cb8-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.4861033403010013164102980544515886",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x2410dde3c75a6294ffe6256ed9d64ebf5cd0bb2b-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x7bfee91193d9df2ac0bfe90191d40f23c773c060",
            },
            reward: "0.05202927724757363203296010386115418",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x28ac0e552679f1d79931abfdffbde7a41b3dcb0f-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.0000001012478290114410400252990280392675",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x44edd23e02c2fb360b09a26ca426283c6e27646c-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.0000001015882106642898322738269330236659",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x49e3a45e3d3d986c6108c7dff1027a2337b41edc-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xeefd6537adbda7b1a9da3f6607dda26b048489c2",
            },
            reward: "0.01458624454417689102220356516313838",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x5893230d361de544a601fc75c7adc079a746dc29-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x296e0c21db4061ebf971e55d5db85011e7ff9797",
            },
            reward: "0.007293122272088445511101782581569191",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x5f19d66d8a4767a0aaf0ba2bb159f108cc0cbae5-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x37e1881f05f33f71e43bb8f284e0ed53e26520d0",
            },
            reward: "0.01041874610298349358728826083081313",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x65044baa1adf7b8db36b9fbd50ea9cf077afa0b7-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xef764bac8a438e7e498c2e5fccf0f174c3e3f8db",
            },
            reward: "0.1526234863445421242803059770330219",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x6e6b04be1bf327175605e243c82b81cc394811ca-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.02031580927060421702191064158901461",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x6ebe0f8884617fe1041ef3086a2b0b8b37cefeb7-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.0001041827653300553200371852072501524",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x73ea7f5feb14c57e44db56b2c49f289d2ae8cac2-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x4938a9a48139ffc440a07695eec11096f8146350",
            },
            reward: "0.005580491294548678468163388138705463",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x7805f6b40bf00011590b72bf3108d801bf7ea495-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x859e1dfb430a7156faef11947f2fc2a3c34b733a",
            },
            reward: "0.01206978536457952138851382892136553",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x78c0cb647acbc34604d96e91733eeec0865adcf4-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x486cd431523e776cf5cd074deecd7bdf29595f8c",
            },
            reward: "0.1041874610298349358728826083081313",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x796e892136842863b01d707e98ebed7b537e766e-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.005209373051491746793644130415406565",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x7f223a526bd08a59d47bb50c5860d882057d9ddf-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.000000007397534102690880391334287050049046",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x9ab69bede4cfe053b476391701e4f796f1b9a1c0-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x97836f9fc0fa0bd02fa5ddcc0194c78dc5217226",
            },
            reward: "0.01041647140468515850768547222606321",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x9fd4048078144ce72710d71d40adbd177875cf52-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x49543e53d159dd5c9d5e232556cfc2781a2d5044",
            },
            reward: "0.005208992221737723621392206157014042",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xd1d59fd62f91d22bbc39aea59ba97049f6a19e8a-19569",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x3f3429d28438cc14133966820b8a9ea61cf1d4f0",
            },
            reward: "0.1041790827752464261041777668294628",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x0779608cef74b957ec268103395e106219c70ea6-19569",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.01784702223563025931612523890088214",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x1546df38aad7928db0fa9e9e944b520a36720475-19569",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04536483307971665886782433015867346",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x238f85fc2dfa0c0e8451ee020ac98c233c18574e-19569",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x330e75e1f48b1ee968197cc870511665a4a5a832",
            },
            reward: "0.0000003619934992881610532867958542858225",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x349a20e92ad725f665ce7813a89952978d278ba5-19569",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xd790a1516f78e3fb52338084b5c5931a75bb19cf",
            },
            reward: "0.05433697466038449536071551684646564",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x4339d258b2b5872295b9bb02dc0b9f8c6ede3d48-19569",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.05927669962951035857532601837796252",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x4c0c6ba26e49bd0f2797096f8c5c6849812086b8-19569",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xeefd6537adbda7b1a9da3f6607dda26b048489c2",
            },
            reward: "0.005838163442694307114710367063841131",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x804ce22ef01f41d63b2a34cb38ff84045f4ed876-19569",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x58e03d622a88b4012ee0a97235c6b110077fb867",
            },
            reward: "0.003556302984871551930776298241439744",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x9002145f2e70a9613113d39176dd663bb6c0f74d-19569",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x25d9d6f36fb3773b98284624e2a58c0cb3c98cd4",
            },
            reward: "0.01058266633759901211230539715952457",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x94f28f7ce31b5562e76a2a4cf4dea36240baec77-19569",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.02171512820894082227767230166763936",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xa6aa2940672cfb631e46ac00a9d31a77a3905b0b-19569",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.6915569205749364234698826460109044",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xa9a8894685c73b14a5ba6e16f82dccd4765195fc-19569",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04939586617288226242646509993226764",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xc76f1f036fdb749674e681762460065ca3671196-19569",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.0000000835247607225584173833459237925517",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xcda0f5a2a1d406029c648a3b97e1e1eac102c59b-19569",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xa4d4448f2328889d79015975a7b4de27649e1ff6",
            },
            reward: "0.001975896117752205716927220806038875",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xce0c79c6c04068a9de6bef5699f12a1cde7df01e-19569",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x50a708e5dfe836601931af3ff6169e5f4e5536ea",
            },
            reward: "0.001630109239811534860821465505393969",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xdfb0b97cef06f2752ab694b8330bd58425435637-19569",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x859e1dfb430a7156faef11947f2fc2a3c34b733a",
            },
            reward: "0.01580711990120276228675360490079001",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xef933fcbfb127d6cf939dea520193c56f43d7e62-19569",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xba842b7da417ba762d75e8f99e11c2980a8f8051",
            },
            reward: "0.001358994756551797347443278995773483",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xf0a5387b9ab9f429fd5b57e1df3f28248b9ae6b6-19569",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xba4074ca3e68095d9a490008fcb68e9ab205636a",
            },
            reward: "0.01975685713925553761678054529062496",
          },
        ],
        week: {
          id: "2795",
        },
      },
      {
        id: "19570",
        borrowDailyRewards: [
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x12c260e672bd8321f6ab246b81a0b7185f3a6d80-19570",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.05847219215290408461706701398817417",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x1e6ee615adb41d8f07bdcf34889dab849d8a4130-19570",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x11d67fa925877813b744abc0917900c2b1d6eb81",
            },
            reward: "0.03821146808345367402052692368071056",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x38ea3693640452756c2ee9a22e607e4c4e0d3f3b-19570",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.5766689272991234461622921421891194",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x58667459ee28b008dccade72cd081d9df7263ec6-19570",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.01624252403165278778148935232311209",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x7bdb7d593e9460d27ef095be6a1f35c6d6e38120-19570",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x47547895218274e121e4219a3fd23235377a9903",
            },
            reward: "0.024363413397043368598561668421124",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xd16335a50ef275b4b3e691e01a52feae6e25c2d8-19570",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x157595f04c0da495d72ceb84390f444d469c3216",
            },
            reward: "0.03656012185009854444579322712216523",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xd9f7d5fb4aac74b72125e3b4426c8f246d3e9072-19570",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x14bdfda5b5b829f14332a52c15129386284ce36a",
            },
            reward: "0.005847219215290408461706701398817417",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xf6a4062cfd0bee1c12c43b6ea0de7227bed3fd6e-19570",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.2436341339704336859125629708767772",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x011293f0e159739c559493fbdae20cd590c664bc-19570",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x6bdc44c885b166aeb687f2d247e419f5a19e1804",
            },
            reward: "0.01927809452415857353459226472444621",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x01dc26b7ccbd2b007da34e720abeae02b99be553-19570",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.06747333083455500693315337439893518",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x177de1a4f8787f49ef20ec28605c3d9bdea497f0-19570",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x4fd0ff2c49671d4fe1927371cf833e8b3b7f44ea",
            },
            reward: "0.03515235754632123134114812059631058",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x1d63e226a1b3a514bd384b9e9d596071fc8076a7-19570",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.3067981266259925035506190787694919",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x2190842ddf2994c986e08045c02442071b774123-19570",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x53fe1b209c917eeeb996720fe5418572bc0e836c",
            },
            reward: "0.06659705381072961741016553871404963",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x31095e235e45c38ca1657e9798a7aef08cf929fa-19570",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04679319557461794445070116839542356",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x6e407de25e1c9fd004768a5ca3d6a06b3d5da390-19570",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x4fd0ff2c49671d4fe1927371cf833e8b3b7f44ea",
            },
            reward: "0.02152136370515157116187074546565878",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x7bb380a98d12de220f088211b0362c47bebb8c66-19570",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x7092020d4c6c26f6e06ee1e8cb5b34f9d14341c7",
            },
            reward: "0.2278320261946013216956385211340531",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x9831f3c9511332a83951e735aeaf9a37e000ed39-19570",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.02804134443815724781142454897053585",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x9fcc001800f9c040dcba47ad4840cc49d146c5c7-19570",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x42b2e881b164e4c283fb7b7e15b35cd256209133",
            },
            reward: "0.03680363500066636749770539551516947",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xb74d9b73d63931b029e1dbec784e05dee38c24d5-19570",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.1051532428590467639538466055989902",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xcfb80b3d81c85f401bf139288ae323fe2eff7a88-19570",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x7c0b689a3003e0dbd2d37ce15e8a2273d91bd7f6",
            },
            reward: "0.02278320261946013215204707002794024",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xe7b42d1a36d567d5314f3c990fcd178c556d37e7-19570",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xbdc88f7f9b16863c8709f97f872f4e6e16dd5f6e",
            },
            reward: "0.01577302626654171850708756768899536",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x0115f90c7f562b85444e5c48a277078437d06de4-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x4dc7970c0facd251e4398f706c45f3af877d029b",
            },
            reward: "0.002967212471934609588351662335870978",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x06dae1c84025e6a3aee5482a859acb6447309cf5-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x519e19eac9ead404343c68224dd2a22c5c25f992",
            },
            reward: "0.02545428635973681390927196614972843",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x15990263fbf6f475d193ed629db99efd530c0d2c-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x25d9d6f36fb3773b98284624e2a58c0cb3c98cd4",
            },
            reward: "0.01141235566128695995519220827432839",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x1ede520dea27d98bc8d16df2d363c275d7b3dcf1-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x6b32080f61ce43bfdc37b6629706dae405d22389",
            },
            reward: "0.02282471132257391991038213521818975",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x225e341a7dfdfbd49924b5dbb08f531781d0f7af-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.2099904557122638089269579042123246",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x2a07081522d2de69c7566cac45edfda9edf73236-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x1ef678435e3a1581732171df82476995cc041568",
            },
            reward: "0.001798133468520873592081141874515022",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x3363aca0a6bd542d146408246b5d1e3743b977d6-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x1f5f902be1f635b30425b690aa9fd5fa2b6fa79c",
            },
            reward: "0.1825976905805913592830411124322488",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x349a20e92ad725f665ce7813a89952978d278ba5-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xd790a1516f78e3fb52338084b5c5931a75bb19cf",
            },
            reward: "0.06276795613707827975354687952170452",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x3ff988fd12069b3f3bce22fa68a2ee5cb1278e57-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x0658b634aae5e7dbfa7510d6940ffd497df06727",
            },
            reward: "0.01085156189646002798216221838561691",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x40455c3ede1e00771066dcc38777fba73f8d4f64-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x73d31581106e3f6b9dd2579e8d9fec81eba22296",
            },
            reward: "0.004564942264514783982078252108011569",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x48d94176dc8a2169eef1b464e4c857c3080f001f-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x20eadfcaf91bd98674ff8fc341d148e1731576a4",
            },
            reward: "0.2282505075436874579705651431279072",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x4b0f729421d241bbc3665918bbe9f803402a0956-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xcbd6b0dee49eea88a3343ff4e5a2423586b4c1d6",
            },
            reward: "0.02738965358708870389246038732620132",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x51319451698f1c7357dcfd7d833803e6c7315209-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.04564942264514783982075970777544545",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x5bbbeee4878868bd8b15d819ac6d082e4227aafd-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xbdb7194a6f048f57e0bab51aaae0fb623615805b",
            },
            reward: "0.01369482679354435194623019366310066",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x65f335e81b687f8389d9245795885e10588492e2-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x07a1f6fc89223c5ebd4e4ddae89ac97629856a0f",
            },
            reward: "0.006436626248312766692148718199313612",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xa0c64805faea968e6d690f160c2ef8ae9a7dfb3d-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x0183d9be08db4024c2dc9aec10b9526fc6adeef7",
            },
            reward: "0.003423706698386087986559259413625433",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xacdd7f08f9d2b64bf7451171195e7c0dd7a887a2-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xac798df80b371569ec73e37124ffef7e26249667",
            },
            reward: "0.006390919170320697574908640419029387",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xaea1f7431c8d8bee7d6a74e4942a1d509166c849-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x8f767dbe1af8fc0eb2655260f2a4768a3ad49bdc",
            },
            reward: "0.01141235566128695995518992694386136",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xb4f7667c4aa42935a8ed7d92e702097d086e829a-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x2abbf099b7d6d3b25912c5c78f6737456e8736d9",
            },
            reward: "0.006847413396772175973118518827250865",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xd0517b06167727e10d25be193e75d6becffd5504-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x396a6d7a33655c45044143cb8a812227bf279578",
            },
            reward: "0.08474723164321168061488892103181646",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xe98487af8344963ea19ad477a2f50c174f3a71fa-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x3d0d2b7ce092bfdbb02e1ae1e904d16459613776",
            },
            reward: "0.003136796210789188263478478882699062",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xf1f916d52cbca47bfa2c4f53fd48cc81228e7ade-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x7c0b689a3003e0dbd2d37ce15e8a2273d91bd7f6",
            },
            reward: "0.01369640773294630048039643021410961",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xfa62b642a718c6e88f3c7a3049040c79a9c5cd61-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x6144a12e348829abb59ead0364cf7c2e540aa715",
            },
            reward: "0.01369482679354435194623019366310066",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x002cd3ca0be3ea53528b7e7c9e34abb81fa2e9ac-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.02411827474289248625826207819530311",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x0052e87f43b4dbf7a881a9a7e3b4ad89dfd50d2f-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.01205913737144624313033635017925538",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x02b6e9b583356cc5d80604ff0f1bd676c2bd27f1-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.01929462568767136072884403677573845",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x51324b76b09a2fc065ad01d02677b7f1ecc7177b-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.5567168822584861721310995380210557",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x62a455e7f460f5cec4a3e64418bb32816895c2ab-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x30be05fe3ed386b8d8afb327b03f50c9d97dcb85",
            },
            reward: "0.04703063574864034820481636356244489",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa499dadf173dc74047b32eb906a355473f7e4624-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x915188a790dcdd06447244196694c9f8a7d2b4c0",
            },
            reward: "0.03617741211433872938859842837455849",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xac12f96c21cebf7e8743cd16a9be5ba8ec3d31ba-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.002978607695800470321761423882569948",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xb87b6092ac461e2dd171fab14e389810ace950ff-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xcb33844b365c53d3462271cee9b719b6fc8ba06a",
            },
            reward: "0.07114898303065569866525974868805813",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xdd010f2ca484bae51eacc0381af9e2d5c2583b3c-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.01326505110859086744324945408902053",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xe8a6fae00900d2c4f04bb009181ee33f9042daa2-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x1dac73f3d00052d7e815b41e7b1b5cb241aa4d70",
            },
            reward: "0.004583411431263620497387222962386214",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xecef821974f44490bb02c9383cf63c79e0cd77ec-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x7f8c24d538c695262afc1408ad4217967da1623a",
            },
            reward: "0.03014784342861560782403290882573271",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xf43f03c304bdbd098826c032b343ac021b98b16b-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xaf97e87375d97f45b1c5f4ea4cc87650f640581f",
            },
            reward: "0.01966158011289053720165838830092494",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xfc2cb559aa59e6c29ad243dba024833b1e149735-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xccd72bea12f3927063be3d8798a4b74082713cb5",
            },
            reward: "0.1628175552687078582046940581429515",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x049a615a01e115a4323e65c132851b0df5b5182b-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf90db858c0697b34a5c400e3a12f30bb2c7dcb6d",
            },
            reward: "0.02028302463221630127346561011250944",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x68037dd52f350790e70dde3f8add1e2334fcb4a4-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x51318c2f3e7d9735eae7e9c9838bb972742470e5",
            },
            reward: "0.00101574936869775807867219028619844",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x7eb4951e8b4d13bd551616e617cf94aade909145-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xb6462b67fe692223dffb61c8dc8ad080cba180cc",
            },
            reward: "0.02535376912275793847644549078573027",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x8539a3d18cab5e39538759d6d3c00e0faf75ea5d-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04302534620132022159452876569867105",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x863e5784aab5fef8ac407d9d6e29471381fd135a-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x4d940a53ff1f2515b577c5afc9cdfbbe588c4231",
            },
            reward: "0.03803065368413690771466696912366673",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x919d51e658ccf344a816f70aef57e432d26781dc-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x7092020d4c6c26f6e06ee1e8cb5b34f9d14341c7",
            },
            reward: "0.1280979648729972436872586708360912",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x9f00ccf7eaf33bde3fe055f4f5fa8c26414953f5-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xc3b1f7ab9fabd729cdf9e90ea54ec447f9464269",
            },
            reward: "0.356772415199466920364945253122283",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xbe95a322078a5bae5eadb0b6442974880d89e011-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.01267696997868857093517113896149028",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xd38e65022d3912427e5522fd527cc261b038b272-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xe520d9514a85d28fdcffc5092b58afdf64e8fbb4",
            },
            reward: "0.05515443319336682402823504917036397",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xd6398d422bc3ae37a09ea56c66e04b087733f69f-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.3018420353604207569130982581200272",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xfd9af8d65a3bdfe2b31c7b0d8cdc5cf6cd6a04d0-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xaf866405f474b84e893131dcaa34b51c90e51895",
            },
            reward: "0.01774763838593055693351260378296839",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x0e5275ca7dc4bf97fc1a265948d37bb4c96c2cee-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.03824277122078814241468476178409249",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x27192cfbe142d8067ec207ddc5f201b944b308e3-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1239065787553535814235752033405782",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x34a0b597ec750bdf35044f33ac9e1b072b6baf37-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1376739763948373126928626961085319",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xd54ab85d4525e2ad6593226f663949bb11f3f6cd-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x051d091b254ecdbbb4eb8e6311b7939829380b27",
            },
            reward: "0.6879370475932284892255623543252955",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xec847b4317b7b076971a4d9ebb68370de88ee9f1-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.01223962603579247424331498444150187",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x02da703f2ad773c23f13de85e4cb99b575d4f42c-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x1dac73f3d00052d7e815b41e7b1b5cb241aa4d70",
            },
            reward: "0.007791427984779478040295424969700091",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x08a5433378862b6fc301d770b37bf7973acebd24-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x92ec6e838dd90845d7d34dfaa82d6d00f66c8168",
            },
            reward: "0.006445602971756505660440539671079905",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x0d2807b752d53aa74ed99c89b98562118c444d22-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xbdc88f7f9b16863c8709f97f872f4e6e16dd5f6e",
            },
            reward: "0.003197019073991226807579157068939144",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x4fed8be4cef8a73868bd45bfacea95bfb5aa70de-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x2e3bd4e33281ec73b88233ab5f8b0e52a8d6f913",
            },
            reward: "0.002404209908465176611346417648344299",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x777460e2ace7b0a74c8d9ca968f104beecc76f7b-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.009023860693887356324935158096216618",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xade0f7c5070b051bc78838f02ad3114027dd40f4-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.8899789727943187876834571938747141",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xd32409572812b6722979198f157aae7ed32c5dd8-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xf2eaeb6a0c248bcd69fd314180d69907b9be7491",
            },
            reward: "0.05602105498295109679623174053522711",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xe11d019a01d47faf9ca8ac93749499b118f5abe0-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.02513785158985037207571436813577873",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x1fdc3148c8380e60091ad58c52c42c6868c150eb-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.004413275223286517222365023730125974",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x2b928017cf8bd56a9a4dbcccbe4f0bae88cac00b-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.5146315212930341351071786509280813",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x5447a88b3be260be3d01c3af161b2f234f69fb70-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4a8df644eff45a5fe923cc4a2efec07614a1bfb7",
            },
            reward: "0.01544856087743020838824878839647086",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x8095abd47882bd9eded35cb273ab4e0ed1019c93-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf3e112e0c32e7a30da87517e98a22103ade76d01",
            },
            reward: "0.005046285481025898940145380954914338",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x898296ec830ca5291173f04fd70fdc158ecfa95c-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x1db91f586331d168e2da4c6bd73b689fb9f43516",
            },
            reward: "0.01675326865221886503461397090229123",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x90e115a069dfb68f752c6dd48450ef8b87a6919e-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x30be05fe3ed386b8d8afb327b03f50c9d97dcb85",
            },
            reward: "0.06767021313797374899690840235104287",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xb5f440f5a31b0496b3d456383825a4a5db9a8949-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.06767021313797374899837875876279294",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xec54688608916fb79455cabc3b6f9628e57063ab-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xccd72bea12f3927063be3d8798a4b74082713cb5",
            },
            reward: "0.3064540076987521863285805797284105",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xf2adbf6a1fcc9b1d89804ff6aa59669f6486c64f-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xdffd8bbf8dcaf236c4e009ff6013bfc98407b6c0",
            },
            reward: "0.001912654498304690983580444245870007",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1849d6a3b7e7c64f0b011f4263a598af9c5321a4-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6175e7a985caeac2db12fada99e626ebd6fe7bcc",
            },
            reward: "0.002383552179834698244542093743423558",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1b492bb36664d042c4e23456276cc91179b86e5f-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x33a74ed005785a83295d3ebe7e9fee647c3b4246",
            },
            reward: "0.002368654978710731379034036130596419",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x3298a83b2d3b7231771a18ba8a17078715cbcccb-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.02979440854918699994546939079383096",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x422e84f35d37ce696b4512a8e0e17b349cfe8426-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4f942119e6ab0a6e4368e795d1d64291a3ff0da4",
            },
            reward: "0.01682773799072622883841517875871839",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x4311606cc02e6746d9d55e36d15aecbe2d263e83-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xff703ebb19c1a4e27ba14e8d7538fc113ca5f906",
            },
            reward: "0.004343874875737497882302068200870737",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x475308549bc8c8208c16e86cc5271e0c4795b616-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x83910f3e3e0064c15ff2fe043dd042855861d05d",
            },
            reward: "0.02979440999316610781681855342688714",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x4a4937a0fe899f3f5b05a9df320e2ad50a672099-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x915188a790dcdd06447244196694c9f8a7d2b4c0",
            },
            reward: "0.01495612710976943687735912529606485",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x4e0fa6a0150fe76e5ebeb6de07c3db2dbf07b181-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.003724315650139313604844936883752046",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x526b2133671787bbfed2de1ea0b806f6f81dc39d-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6b579bacffea19b002271d448a62b161f754401a",
            },
            reward: "0.006663816006772857614504730605328987",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x64f940e1c5f7e75eec2763420092e1e2c6228393-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x1db91f586331d168e2da4c6bd73b689fb9f43516",
            },
            reward: "0.02463399719411772977072733621444941",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6d9b3df93b5e49e3701950f81518200857eb8b07-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.1281159296661150305655940745121895",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6dd04d8cf38168ab9bb3076a53fe11604c846c1f-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x19865bbf18281ad5197ac06e45966dfd3e72a47f",
            },
            reward: "0.004618132348429727847404391979835274",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x818fe871c0f06a9b1e95887ffd3e232d1728fcd8-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.4601517334043809924508037928073887",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x99299a18d07ba4828bdca135f1b6c6ed13eca64f-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x5f0a0e3b30d304fba56e2eee3a442b0bb5c40275",
            },
            reward: "0.02928790053557518856473901255529994",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xa5c5994870fd0f1d3e06ea9a3ddeed1d3f2fd52e-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x3a762044a55802b57f12ed39d83dd1047d77b8f2",
            },
            reward: "0.0026318140365656060334200950774889",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xa6bcc97eb84b64c9cb66c42e68f6abc4cdb758a5-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xcb33844b365c53d3462271cee9b719b6fc8ba06a",
            },
            reward: "0.1328277749793785732387434521181016",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xaded6a47fd19a18363563dcc005c74cd5bebff42-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x25d9d6f36fb3773b98284624e2a58c0cb3c98cd4",
            },
            reward: "0.005958880449586745610610746546266698",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc51d2bf1798af65b1e3177d7de7bfc60c6428a97-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xa824dc3ae402dfd6a5de71c6fc30ff9e00411209",
            },
            reward: "0.005809908438347076968930951039254856",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc94b314d7421faccbbe89cb04e70542b1a325447-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x30be05fe3ed386b8d8afb327b03f50c9d97dcb85",
            },
            reward: "0.07150656539504094729308251918975931",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xd0a066bf800c8d22472aac9495f2fbc51abe483b-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x58e03d622a88b4012ee0a97235c6b110077fb867",
            },
            reward: "0.006464638091743110062882291775258096",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xf93b2208a5854fc3e85492c1503c43fa6bb7ec01-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x5c44368c0ad4c446842738bdbf8f2bbf9876546e",
            },
            reward: "0.01713582812667539938977122234523462",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x4bab58f19702caa5ba8a223da1a4f6a547f7184f-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x3f3429d28438cc14133966820b8a9ea61cf1d4f0",
            },
            reward: "0.3042368929254869627476698436574749",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x56c4f38f95355e86ee42033ad8aef733feaf40bd-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.09291858700165936428436689092160818",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x5f3e3ee5a0644d3b7aa1922767de8285facc9e0d-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xe520d9514a85d28fdcffc5092b58afdf64e8fbb4",
            },
            reward: "0.01045401444790992874639558320123803",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x69a4fa2c1d81b640a69b1f1ac22974578b64cc46-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.0000000005524540301879768579995906668523747",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x92a0aa27ad8572e125803ea0777af1885f25c9b9-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.009291865462223101671559010210600811",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x97bda93b2f4193a34819f418e50d007c6d80a0b7-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xbff78d2838243c9c6c18245d69e543a9ba6c2890",
            },
            reward: "0.5227007223954964373196642307751302",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xabb209661fb03f48f1174ed3b6c4a0a677298b61-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x42087c28f296d3b2dab56e3f5d1aca1388f2be5b",
            },
            reward: "0.0000000008544238204366747143301304459738577",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xcb02af99f8dc40c1111a9d968c737b5b6691dd67-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xeefd6537adbda7b1a9da3f6607dda26b048489c2",
            },
            reward: "0.01626271763632633231490532670416974",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xd4373715a070bb95c5e7a066efeeade471c1372e-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.02787557610049780928531087990780306",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xdf8fd47da004c44237f6d61f12fbd2b4cc03fa98-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x521dea4e41d3582dffc931c4100d314d0a9f7ee4",
            },
            reward: "0.006388564384833845345019265089226222",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xe695153ee5688b3e75bd3c37ddf0bb39a869235a-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x23b83c2821d1e9fe5c40ce3c014d2420f2f1eeb7",
            },
            reward: "0.009871058238688367660457397203027716",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x1de001a02f1e5db163be5fe07dfceeaaed50af29-19570",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xd9da13de745bfa50ffaafd0a531b92f0511b72cf",
            },
            reward: "0.08086189981488124554782975350985075",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x2fa837f0ad17ea91a2991a608e68263491f2bfab-19570",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04649559239355671619000498753371231",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x69371c6efb2ab226fe8224f3abfe7abb6e80a9ba-19570",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.01415103079872650489112373285212504",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x745ee33177e31b12ce08d2b6256b4d0e351ff3a8-19570",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.7818753430720164585723839490251295",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xca4f58ad764c39cf999f1d97f91093556df3d72d-19570",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xa8c602638e910a5eee8bcf190acf3e2d4c022338",
            },
            reward: "0.01596968884418318691747336985555443",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xcd8cfc4784e971cd960baa91d266d0bd33755425-19570",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x0215c140840b896e1e371525d1f70cefbd09aafa",
            },
            reward: "0.060646445076635887881184207223628",
          },
        ],
        earnDailyRewards: [
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x07ea5532ab74322c954aad2ecddeb4c82505a2ff-19570",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.07432258326021799668728433789958895",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x506ff697bb7f93f4eb09bccffb976416bbe38c52-19570",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x0f8c58edf65cbd972d175bfe481bc16fa8deee45",
            },
            reward: "0.5405488498226016501042772279781114",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xae9149de7b243d56bd9ce88329ecbb1177a2d5fa-19570",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x239168974aad75472b652046255050e50a0d5fc9",
            },
            reward: "0.3581021653318545473740463618428353",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xc75afc43dedb449e741f8005d76d5fa880a1cef9-19570",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x9599d89ed83e6db03d57c004f858ff82228604e4",
            },
            reward: "0.01351328925780583197637910799406926",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xdfaab0e92d3700c33a72fcdfbb90e349803561e8-19570",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xa968a0920bd35ad65f3bd78a934e45f020d6a1e3",
            },
            reward: "0.01351311232751997385801296428539505",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x1457f27c9ebbb7c5701f7e70839a8a5f477107bc-19570",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.02505151447545037923348244385319273",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x35e69e3fda9994dfb35bee5f7c48f16b65b9abb0-19570",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.3140144460898723345118588441524668",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x441b3504d51b2a3b29920270814ce570485ec470-19570",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xef47003f0e276eb0fb60b626e80554dd7adcdd11",
            },
            reward: "0.07014019936085654828970540273760495",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x632a2770f96d7fd44702e00dcc355811f9b336d3-19570",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x157595f04c0da495d72ceb84390f444d469c3216",
            },
            reward: "0.0451332928270839208552833138740869",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x6658b6c07482b477642e47e37fa00f0d807f5fd9-19570",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x7092020d4c6c26f6e06ee1e8cb5b34f9d14341c7",
            },
            reward: "0.1579243808283005527879427465163097",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xc581b9f298220a8293e7e399dae2dde88dbb1921-19570",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.07461436550009579222858048929949866",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xee68b40644ce585e732b659ff79cb79f1ed01717-19570",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x3cb07d1f0620090bb667df1a5c90b4b80f8ede73",
            },
            reward: "0.3131218009183404720931467595668402",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x017a7ca1bfb339cbb6d6cecf3f787516975a7c3b-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x8f767dbe1af8fc0eb2655260f2a4768a3ad49bdc",
            },
            reward: "0.005993759549584089054903468223060907",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x05cfb65544eb5568b1438d94b2095fcea6b30b9d-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x1f5f902be1f635b30425b690aa9fd5fa2b6fa79c",
            },
            reward: "0.1198835593591714026874625836509363",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x06e7f912044524b49b2eb6b72c891e984d44e36d-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.1198736014605179625699627546353354",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x098b98afa71f950ea862b4e0d91b183e7bc16b69-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x07a1f6fc89223c5ebd4e4ddae89ac97629856a0f",
            },
            reward: "0.005954295503837467156594647966672037",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x18877e98dcf273b46ae45dc90005b2de3dec4079-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x2757ae02f65db7ce8cf2b2261c58f07a0170e58e",
            },
            reward: "0.0005994177967958570134373129182546817",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x1aab626f725dfb8a1017ccb658ad308b71517346-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.00000001588884087550205875233744066270892",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x2abe8bfee84fcb968e2233c7307c9d1881e43157-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x47547895218274e121e4219a3fd23235377a9903",
            },
            reward: "0.01198799641013915423113949941935396",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x32dbb4885e665fcc2cb74fa2bc74f208d1b3a900-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xf7c7ca163ddfe69218377ab7086bdfc9a50f4e1e",
            },
            reward: "0.002397642587734451625514488849899674",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x3a15c7a50bb53cc2685e18c7c6e0e2812ec3453e-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x0d9f37c75f7df825a7f02bd39df333485853f4a9",
            },
            reward: "0.00119871061568297575021307047444341",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x3a71da5ea3dd8cbc10d3fe060c0669bc4eea2b12-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xac798df80b371569ec73e37124ffef7e26249667",
            },
            reward: "0.003356739662056799275248952342226217",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x54bba40e7f7b6cca98c0ce02095234aad54abe48-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.01198852613430112421427161904103176",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x57ccb41682e25faed21b3e992d6240e399ec9dcd-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x3e4dd7e5c37fe838eaffc89a551e1c311b7d14f8",
            },
            reward: "0.001198799132897555639409648955012374",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x5c4088920b657726013ae134737f6fee06e23216-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.00000008896416331774841967126589331409109",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x68c927dfc35367ab0909d4cf7386deeeb425d081-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xbdb7194a6f048f57e0bab51aaae0fb623615805b",
            },
            reward: "0.00719301356155028416124775501905618",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x73a2cff38d41ec035afa3038f4c6140ce69ba15c-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x5fcdc32dfc361a32e9d5ab9a384b890c62d0b8ac",
            },
            reward: "0.000359650678077514208062387750952809",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x74c3f6f294b9825f98ca08816f2529fdf093d5bc-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x0745a468966c6be811dda6d1953fce2798efc1f1",
            },
            reward: "0.05991858221084970167731126781553171",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x829c190ec5468eeb29fa5621ca65a76aac2eaa44-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xa62d7ad2fddbad38a0aba25e40cdfe2edfa4d183",
            },
            reward: "0.01198759673533396527965219095523588",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x82cc4b6919b50755ad3b1de81c75ab180f9ee5ec-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.02432474907446695112121866017260804",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x856926c82ba816e84bce9d7913de57c985cfbd61-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x3e4dd7e5c37fe838eaffc89a551e1c311b7d14f8",
            },
            reward: "0.01078919107204915021975251546108466",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x9b333d180d559797db6682e11e6e5e494b25fe5f-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xd50cbde55f8da4e8cf94f38deae2c722a5bd156b",
            },
            reward: "0.02349684627408908977531659514647279",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xbf5f2a7883572e0b23b387a848c417b9c31dd936-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xc24dc96768d7a96ca37aa3e65787f69afaf1a354",
            },
            reward: "0.01198749944756195159543392850670736",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xc3b5493dcaafdcb5fe6d627efd099dd0294ca4ad-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xc64844d9b3db280a6e46c1431e2229cd62dd2d69",
            },
            reward: "0.04035611122262415024998010289758112",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xc98d804cfacda3af5d07ca52f9c8137220f8f37e-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x4ea4309e5fcb06201ea54e0fb149de522138cdc7",
            },
            reward: "0.1198820726015300201388325941424602",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xcdac1a2879ae3b612a5667228e629ccc516a66c6-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.000000113189206240181995213128828516764",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xd3696b74d9fdddce791bcb2c3eea1c137a0b8861-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xd9da13de745bfa50ffaafd0a531b92f0511b72cf",
            },
            reward: "0.1199001704899208105714232361557017",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xe7370c3a19a9676d142cc9641909afa0a888d215-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x5a1b8d6a57445deced8f816310fdb0aa6367cf10",
            },
            reward: "0.001574229779896527289578702123197617",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xf0afb9dea61d5bcaa96ea2f3ec1b074714a4531b-19570",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.2837970205971206110615583806450207",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x178ec3e0dca23e5c448b2ac7e4388592883a3d55-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x83910f3e3e0064c15ff2fe043dd042855861d05d",
            },
            reward: "0.0000001214211428937362411163460858439541",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x17dc1526c6ff9cf0c702257775bfbab2385f6fae-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.01207451370780685067270215139535627",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x2815cb20c1063f27d6e5d04b6cd2904af5544bff-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xe793a7a7c7b7a4cefddb30f856b01f36e51b1b82",
            },
            reward: "0.0002414907400282999163284180828057914",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x2a6536e4edb891eba287e7d977421a6df8bb6dea-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xac798df80b371569ec73e37124ffef7e26249667",
            },
            reward: "0.004829805483122740269080860558142507",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x352cfc59b91088656ebaaab3b42febe1b45f868a-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xa4fd65694a9708c2d204bdf7acf8b9c09b105903",
            },
            reward: "0.003622354338505855638780206439064152",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x3c21a1e9b544a56a450898b737a93b8220665e5a-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.01207458618019604892705424109497451",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x42474bffae9d0b4e9dc4e8ea48a5705eacdcb087-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xf44593dfae05bff213c876a8e1fdcc15a45964df",
            },
            reward: "0.01207451370780685067270215139535627",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x497e2f7567a2f46755badacfed456c7d1cd68638-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x0658b634aae5e7dbfa7510d6940ffd497df06727",
            },
            reward: "0.001207451370780685067270215139535627",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x50cc056966b4f1eaef6157390940115d2a396188-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5d12aa6a6001fb326332c3801c6bd12449b6e44e",
            },
            reward: "0.0002414455948679527785626385010661246",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x538112796335be43a765a5cde21f080c3296be64-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x915188a790dcdd06447244196694c9f8a7d2b4c0",
            },
            reward: "0.03622188433710767289023542580059257",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x5f070b42e7fb07786c606d7a162e36056bbfb3b5-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.002414820249363383539357561294128343",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x6030bec53dcf30ccdbced5f578befd80b9b10601-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x9578e8369369fa05e5f2fc8d80a234ad2f8608a8",
            },
            reward: "0.003621558937522610955201215516048172",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x6182164f9f39364908763e94adcc775a2931cb49-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xebe4d96a48c4d0659fadfcae5a132de3a5733374",
            },
            reward: "0.004829805483122740269080860558142507",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x650899474737713e9c247aea3aa777b3c2ed4964-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x7076106c13ca93805f2b16c52e64d3592d55457b",
            },
            reward: "0.00000005802196799876187003648778541672629",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x68ae6b8206610be3d862b4b26b1de35a058c965f-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xcdc8698745db38280d649fb9e7322d899c4a1bd0",
            },
            reward: "0.01207181258457718246217883854703406",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x6f09e208d0bcd35e1db162bed664f3848c7172b4-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x66a4f5d0b57d86bf1b9bfc63e991a9387791fdcd",
            },
            reward: "0.01931922193249096107632344223257003",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x8175279cef254dbf7d0d9cbfd193dd49bc1025d6-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x9cdbddf646a86ec987394c807defed498dbc7df4",
            },
            reward: "0.0003017958725191709234818821049155467",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x8c0ff2a44c53f823c703e83a75d287b37f5c9c12-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xe922bc2ad029b1efafc3eb3ff776219c3dfbb625",
            },
            reward: "0.006037256853903425336351075697678134",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x97f5ea81f39cb9a1d68366503dd282a8c0ba6d29-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.00000004527896789549688516101837805162333",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x98296fae90b58a3db28e7fdca20c96663043750c-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xb92a1d5c73a69a0d72820f6f6221c5a81edb7cc0",
            },
            reward: "0.006037256853903425336351075697678134",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x9b90a6e571e286bd10e4f5ef3d428cd89b911740-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.02414902741561370134540430279071254",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa5af820995e5383bfaeb7c6ba22f3eb55e35f768-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xb0d6ae7784a9f20c1e34218998f0fc5c24972441",
            },
            reward: "0.01207090841238758960936656795969668",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa641456aa2378540e3be55a2473ac8065170db51-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x9730299b10a30bdbaf81815c99b4657c685314ab",
            },
            reward: "0.0006037256853903425336351075697678134",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa64d42e8b130f306b8b8add558a095cdec8b8dee-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5e4568c4d8343052a06ec8aab1e124af08b73248",
            },
            reward: "0.0003018628426951712668175537848839067",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xab9c5fef3a48d4b8501b9e226589df4d81b08401-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.007244292549985718240701520252657166",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xb20f0e2b013655346c6d9c54b16decb7b934fc91-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.6175757639617466240129482067067025",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xb4b84f7205667c6f696add26462d51ba4305bc18-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x7f8c24d538c695262afc1408ad4217967da1623a",
            },
            reward: "0.03138464372710002158108882841193839",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xbafacc6f392410d2d47cb9ca25541e17fd4badc9-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xce27fa2d00b91c9486e3545c75cd7df86d4e3632",
            },
            reward: "0.002463086175096712247162960671839535",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xbc3f05481a54a949ebe764d095da703e9ac96c44-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x70e439584ef1ba300106b9c16543eaa1de676dc2",
            },
            reward: "0.02776588867266703566089770476568035",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xbd431752a75950788fe689d49d970f95a1732581-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xeb434da562e7a8ba045472fd1e134b420771ef7a",
            },
            reward: "0.02414459895046826618920490006218027",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xcd4d1da85c2894148772d088e14e226cc9580af0-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x3ac7084e8ce0757261b79f87a8e417d2df3d24d3",
            },
            reward: "0.06037083172839896977919596829780047",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xe316409d3df47accfdbf20c7cc12ea0a9fc1cb87-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.002777138152795575654721494820931942",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xe5766c80dea6a9b873d56f7149db185e8ab919ba-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x1dac73f3d00052d7e815b41e7b1b5cb241aa4d70",
            },
            reward: "0.001207451370780685067270215139535627",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xf00e853ed9216008355c3ef0843a7b20d3fde16c-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.02777018493007908375961313366405614",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xf073cde213b7a6da101ed7e20ee6e5e9a9973b07-19570",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xe1e2a52a21226ba37f28ba6cdf59f20156798f94",
            },
            reward: "0.02294879647508985832593296119427863",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x03431c179e431c9785cf82d0ea2729b9561ae76b-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xef764bac8a438e7e498c2e5fccf0f174c3e3f8db",
            },
            reward: "0.3635516890181787426041717687937778",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x0dbaa1361088a250de5a893bd2efbd3e24545ec8-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xba842b7da417ba762d75e8f99e11c2980a8f8051",
            },
            reward: "0.002907763360058554191139730666265401",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x10119b4fc928a31ab4fd764f743e871f02797446-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xb6462b67fe692223dffb61c8dc8ad080cba180cc",
            },
            reward: "0.02423677926787858284027811791958519",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x13927d76c5a2c5985b25f4c0678d489f04126544-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x59653fd9713a30c54237a6fd21fd97ba141abbe0",
            },
            reward: "0.00477466854626973770492589150590727",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x15eafdb60976e7d22c0ad6c77f05dc64db78f79c-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x296e0c21db4061ebf971e55d5db85011e7ff9797",
            },
            reward: "0.01211704874890359536358654239006722",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x2d1728752f30d604ad144007ac952c578973bccd-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.09694711707151433136111247167834075",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x3910239862b50a5915d49b05c94d97b89265f055-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x7ab29b393aad63e7119c004bb45eefeaa3e70da5",
            },
            reward: "0.002407681652471058419353228234131593",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x3ec36f3a55b31d168fdffaf5d21ab103ffb6e760-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x87474eb5e6f15c5b770c7a68b37342830211ea9c",
            },
            reward: "0.01817758445090893713020858843968889",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x575879fa71ba697042e973be663758b06f63765e-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x318e3835baa3f83ca734d9afb9996f702aa06a3d",
            },
            reward: "0.02394600694300528985977465194299729",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x71b4201c1f312f4f04be8be7b02e0ed224d784fb-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.01211838963393929142013905895979259",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x77f66e4a6383893ecaf0803e52fa1e8b60d43fe9-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xeefd6537adbda7b1a9da3f6607dda26b048489c2",
            },
            reward: "0.00247639073710110406694015728872457",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x92a95ea3d6c5b81fe85d704203ec1c19e3266a10-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.04659066544781393969073438429957219",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xadbf773d6cb8373d64861c7ae4b02aacfbe2ba76-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x37e1881f05f33f71e43bb8f284e0ed53e26520d0",
            },
            reward: "0.02423677926787858284027811791958519",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xcef1a9a0dd2cdd92b5669f6b220799104efa865e-19570",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf71d161fdc3895f21612d79f15aa819b7a3d296a",
            },
            reward: "0.365511435854078252507357289961564",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x0e3f1e786b42465ca7d68fede5389bfca714db42-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xf1a1602c90d8e510bc583eabb53667e3afae4b52",
            },
            reward: "0.001510899508542524063356990536227077",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x0f3436efa3097f960a27b50e673db0b7de765577-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.00000001483797748243520741045086048768645",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x1444e8c66fd6bc37262f26a33bc217b3e0403ab6-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.3021856834706069415446987957547333",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x2643d4f4ffc86ee595c0d8a68a27bef82eab85e4-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x20eadfcaf91bd98674ff8fc341d148e1731576a4",
            },
            reward: "0.1359854284052828961175161943956767",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x281a602477c5b328fcef497e47bb4a4a6b963614-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x58e03d622a88b4012ee0a97235c6b110077fb867",
            },
            reward: "0.007554734470222240312326659683514614",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x2b947350d8e4a4aa1173ee0e4655b33fc8ba55ad-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xde055950ccaaf115c8d76b33e6503ee403875ccb",
            },
            reward: "0.0009062886590566528787366758412157811",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x48a19d4eb3553a476ad6218e0625b606be7bc4fa-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x4fd0ff2c49671d4fe1927371cf833e8b3b7f44ea",
            },
            reward: "0.000000004880612995045648615417429937417537",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x51a1f69f45791b8e5484dd9d526199d9f29223fa-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x6b32080f61ce43bfdc37b6629706dae405d22389",
            },
            reward: "0.01510874514972295210375644559724416",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x5d63b70786f582eb96ab006a4e51f3b930e29e51-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.01510949204503143290194624382174185",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x5dcf7edd434cb7f8b255b5d913783792e41b03d1-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.000000005389712381734331177064805548712372",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x61a5471a19fcceb07ed651ea402a149ebd6fb0d1-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1359854284052828961175161943956767",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x73933d5e77222f5987cfe3612eebbc88b7833c57-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xdb10d21f28a34fd04e4425eac777483798f7e217",
            },
            reward: "0.005285752011083833830277969901220477",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xa0af774d47a46f8958b5289e21b1cb6210a62f62-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x859e1dfb430a7156faef11947f2fc2a3c34b733a",
            },
            reward: "0.01208759363602514632155699505739348",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xa3fb5786e157d6b2618859b1921f8b71d4f5eedd-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.03780024236780816588853310028926989",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xbfdfc5e00155cd27b8cc4cf7ab4cf5551b54a8f7-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xb225bf7e4f1da339195972ca7e4a1d9ff52156ce",
            },
            reward: "0.007554746022515716450973121910870926",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xcfab8ff364d67af18cbec98b8d47398d503e4a0f-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.00000001010833864291155632131985854787796",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xd29bc9af132fe09f0a6a342d6a5c27e12baaa14f-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1420292252232954692782946919243734",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xdf2dba82533627d6688efe2e467a76099576a9e3-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.0001510949204503143290194624382174185",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xf22796f247a3aa1633ce936aad31affaddf9c451-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xc1a4e84588c397adb26486ba0dde28ac8bb54759",
            },
            reward: "0.006412358838551932221492289866853339",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xf7e4255bea7efa35c7c9253a2cfbb2ee3ccef378-19570",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x4ea4309e5fcb06201ea54e0fb149de522138cdc7",
            },
            reward: "0.1743322516498793835132546443328164",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x17e337bac18fb13ee3b547a44c15cd77561ff594-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.05025391105746356217370480149863976",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x2abdda4c66bc2156f81f7056bc87a904017bdad2-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.0000007236931021683013182794994424768856",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x451279bcfbe48691c38e995901e487314190412a-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x0745a468966c6be811dda6d1953fce2798efc1f1",
            },
            reward: "0.02459329826308127660279276223208432",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x4c19b8a92d319ff5261a4f8621c897e8d9c36e0f-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x37e1881f05f33f71e43bb8f284e0ed53e26520d0",
            },
            reward: "0.01256363746527559607634334479356085",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x4c29c31161b6313b716e36402a3d56f6e4a4964e-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x5b191f5a2b4a867c4ed71858daccc51fc59c69c0",
            },
            reward: "0.01259532791832723770450819178036594",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x52448305da311c4a308ed72c7fb0134248abf373-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x3f3429d28438cc14133966820b8a9ea61cf1d4f0",
            },
            reward: "0.12563530412236034506879869644993",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x540b46c36557d3212e06e37182e5296bb486323c-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x4adf9b737ab9c97f5728cbcf143483cf6c2f7df3",
            },
            reward: "0.00628151669940488622825473761612084",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x64943f1ac7b541c3b6bdf45464c9b4093e4a7fab-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.006281818732637798038171672396780423",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x7602834c716948c438b9729fe0384b3aec52b3eb-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xef764bac8a438e7e498c2e5fccf0f174c3e3f8db",
            },
            reward: "0.1884184460574832929425795000499144",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x8219adc2f9791e2d8a67882a4a73cc85e277c524-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xebfb476e0f9c8d74f0fce72b688d7177dcbb73c2",
            },
            reward: "0.001256363746527559607634334479356085",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x8ce6fc3cca6deb3545af4e32a49a93a4c7a61e8a-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x11d67fa925877813b744abc0917900c2b1d6eb81",
            },
            reward: "0.03769101851662062034013302800866838",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xa121d81b6b83075ad0ee5d4a35087af262712173-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xf9f668901a13b2c817a9cc9d7fed50868b7af8be",
            },
            reward: "0.01601343642231576090056215846704555",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xa988e47d6c2549c485ee612cb0d0dfced04b4eb1-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.4397138723097454486765981754586478",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xb756db88231a365c7be83adb959cc6d3e2218ec7-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x7139a445ecc1a597695cc9a077caaa41e0f18391",
            },
            reward: "0.00000001359041951347371189574718930547567",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xbf62dc76e06555ffadf4c7cd7353b055a6d09e52-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x3cf08d6a9436a1798c18d24a70f5ad0bea31775e",
            },
            reward: "0.01256368483636380602357987730712378",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xc0558bcec4725c038256174fac0c1921fb145afa-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xe3db0df6a4a62106a3dd5cef76c196a53f3e7e4d",
            },
            reward: "0.01255003851253405799316164117796889",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xd29721fd44d8e4cd02bae1453e40b2d72276859b-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.004590677176865802148004219502534173",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xda2035f6b3d6618bbf5fc591b25b49b6ab175d39-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.0188453306922178550428043053592875",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xf051ffec03e1842939c2fe40c1a8623da624b220-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x6b32080f61ce43bfdc37b6629706dae405d22389",
            },
            reward: "0.00000004691009237148851933905844967928846",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xf220126d67557ff209c921f4d2744f85b218b664-19570",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.03015153327716104116881903911688992",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x065af1d2579d2896c87d1072bcecb64f70dbcc52-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x6bdc44c885b166aeb687f2d247e419f5a19e1804",
            },
            reward: "0.0000001269866751616794381559270728157142",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x0ab511f268ecb706b956e0a6bb99f9268282e3dd-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x3ac7084e8ce0757261b79f87a8e417d2df3d24d3",
            },
            reward: "0.07350377746493086271017551139087956",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x0c0e979e5d699e51f4707527e3b4a1576406270b-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x7076106c13ca93805f2b16c52e64d3592d55457b",
            },
            reward: "0.01058454395495004423026527364028666",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x0c7a5ef0532c0e1b8b4984ee4e4e19283f2cf7cc-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x2068d14ee50772dd6e89c6f64f32adad0cc936ef",
            },
            reward: "0.008085046540360350163048116115697282",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x118954ab01883c2c245d7a9b737df80e8c4afbfe-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.004410547006246825680609032514787703",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x16d559ee5ca6f8f14c15ebd511809722f4b87702-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.01470119389368191403221766115349162",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x2b4f1f53c4bbf3fa77e2a7faf1cfc063f7c21523-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x1a918a8386f75f382e2a1b2e10b807c39728caf2",
            },
            reward: "0.003689841020588340712701047623011692",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x4820233ad8d7bb201f9462d242922d28926bc642-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x28af2a3c28b7ecf7d84a8ba0fddf7525a88e1f61",
            },
            reward: "0.002969120098452450766597163218104644",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x4f1122cc1723e5d60cc11c68be19972b8e3be8d1-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x7bfee91193d9df2ac0bfe90191d40f23c773c060",
            },
            reward: "0.0176402616111560972793639981470519",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x5ef7d0933cfb377f11f125ba0d74812c18f35520-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf9f061d9a5f04e223ed3c560e03a8ab0a70cc1c4",
            },
            reward: "0.02205113323947925881305265341726387",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x5f38bd14ffcf23f0f8b6ad90f3dfcd15077e2b8f-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x66a4f5d0b57d86bf1b9bfc63e991a9387791fdcd",
            },
            reward: "0.01175935426432531210688028090231596",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x6ffcd46a8194ec8d3617f3bee62334de71967033-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xe1e2a52a21226ba37f28ba6cdf59f20156798f94",
            },
            reward: "0.04410236006453371102909453162389981",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xab4632810f9b93eccc993fe804f9da57875649fe-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xdb10d21f28a34fd04e4425eac777483798f7e217",
            },
            reward: "0.002057420646960086352743749315864243",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xaee5b0711b31a7954406b40f2dbc079b2d6fb65f-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xab12253171a0d73df64b115cd43fe0a32feb9daa",
            },
            reward: "0.00279335542294021395240962821409298",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xb9134373f544527d15ce3cdd8cb1f78d72acf42a-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.03013654876062165371117195967026062",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xc3006429aa36fc6d14ead73ac106d42ffcedd576-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xa0ce55801b0b88f2df2ef026eb8da79e9f0ad9c1",
            },
            reward: "0.0007831978087451405178907888901410175",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xe60d6cc634782add49132dea0a70b0b014fd0500-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xd790a1516f78e3fb52338084b5c5931a75bb19cf",
            },
            reward: "0.001470341529328948246112463895244569",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xec6224e36c67b54e3daaa968cd1cff6781e003ac-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.7350023688719825882293330651112301",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xeedff03dd73862e59f5c48792ac9bd241ecd11dd-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.00000006299839401441143083295558514499734",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xfa16a59a3458e5008041109c2add292d9886c606-19570",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xd46c81245a0582891c2249daf2d68925977cf2a7",
            },
            reward: "0.0142593978156470253754640862737178",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x08a27f3ee826ef49d1673846416179c3584671f6-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xe793a7a7c7b7a4cefddb30f856b01f36e51b1b82",
            },
            reward: "0.0004084937308815423168168215746867514",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x0b03f8ac3ff960b3db43a3f549fe0c98bd0c6102-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf3e112e0c32e7a30da87517e98a22103ade76d01",
            },
            reward: "0.004098588340861001743722224459283324",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x0e78c099b7ed855f56a4e732672d3434f6c2108e-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x056590f16d5b314a132bbcfb1283fec5d5c6e670",
            },
            reward: "0.001360396489781889065931540548819634",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x12b9aadce493ff66d34298e3b5b86fcea8be8290-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6bdc44c885b166aeb687f2d247e419f5a19e1804",
            },
            reward: "0.00000005629999430314855260105143125518886",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1a87b773bbcf7dc73acb99d450acdcce534acfc5-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x43930ff04d18a5b59805151c1eb403c55870641e",
            },
            reward: "0.0008224825357035778591770152337439221",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1affd8e82ddc8ab62c34600edfe946ccc777e744-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.006808089334100571651368680224836324",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x49677b6f91c52edb792c4568141a120920454277-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf9107317b0ff77ed5b7adea15e50514a3564002b",
            },
            reward: "0.0007080362183136144255802843406215231",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x542bb88299feff0b6a4f5a38f26c821647d43791-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xecc0da4bf963c23e9ec9740b1f06cb192c5195a1",
            },
            reward: "0.01361308974149446764286493853910193",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x5be1d28851c974f57731a63cfb44e75cb8016ff5-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x000f4432a40560bbff1b581a8b7aded8dab80026",
            },
            reward: "0.00476576623948983934619233912892993",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x5de37e57eb3356939d22b7d6860853208e3df746-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x50422d5a52d9a4adaf8123ffd46a323056e4fb37",
            },
            reward: "0.002720643547763523533677716731277103",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x637cae3aa6685b8e11af2a96983c7db86ba4e593-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.003267977414640001390343301894445175",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6d09db5cb9b73168bee7f041a92e9d5b1ecba6ae-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.01279458041847143240037888387103229",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6d77d2ff5fb75f27032a4dd9f93de3138a29ceb5-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf927f23ce9d81270b5c6802ea4d7da1a346fafe2",
            },
            reward: "0.005443060604388943554416048270360372",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6e81c8661e47fb8a97a2aac6165163556cf1b246-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.01361674393576618698996191288809593",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6ed53aec4ef64ff50a365378b6c185ae1305b681-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x56cfcaa14c2d63fef909e335733de4c6330306a7",
            },
            reward: "0.002723278969683245904448038989404775",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x7086d16f120ae26a4538b9d9d197da2c557a9ce0-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x3ac7084e8ce0757261b79f87a8e417d2df3d24d3",
            },
            reward: "0.06808102428007897254033620076552274",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x725fb45f9b24a54a9ca9247e102b9bedb9317abd-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xa824dc3ae402dfd6a5de71c6fc30ff9e00411209",
            },
            reward: "0.005445440562930834180990597413281713",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x7abdd8d610b791d2d55328acc5401edb26a4fb48-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x5f55980eaf5131f9fd487e1177cacb18d7609a21",
            },
            reward: "0.002137599863394532907935635709016886",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x7ae562345f402240f98b0e6f685dc3a50d4e6e4f-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x32cd06a20b528bced096945d6d165a61e75ccd2a",
            },
            reward: "0.01334206018031903062873273791265179",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x844ae5515519fce2ad9d6e1f588311066582a02b-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x429af9695a3936e2f22d05694775d12237f2723a",
            },
            reward: "0.00000006144958330847076363081259947076809",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x863d0124ad1eaa0d9d7cc4c1c1d15784d85c43c7-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x7076106c13ca93805f2b16c52e64d3592d55457b",
            },
            reward: "0.0000001163791747702202907061485596765905",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x8ea11e4b6507fc26e7e719f945ab750c94ed97f1-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x8522885d735f75b3faeea5cd39ab3d1291da2c77",
            },
            reward: "0.006806673274205435594828793612810615",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x9b9d6bd6eb6589f6f94d417a8385d8e926f8bd49-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4677b560974508e69f3611ccdef6c77af0509a47",
            },
            reward: "0.001361437198307054178271482358322503",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc0d6f11604e9a6e41667937db52e555b15e406b1-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x53dc3204f2f294f6a5649a36ac295f74a0db92e0",
            },
            reward: "0.0005807540527767323986640076449311927",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc14673d36d6d073750125205b0171c2f7a9da115-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x83910f3e3e0064c15ff2fe043dd042855861d05d",
            },
            reward: "0.0050219294822764777167851772055384",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc4269d8cd43bced5b1e70df5cb4c454bfdf1d106-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x88a72a5b05cc9150a5e96d01d2eb794b98bdbfb9",
            },
            reward: "0.001874445623777447466725786141913211",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc6559e3789e904ca291f914d6857770a9dad2e25-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x3cf08d6a9436a1798c18d24a70f5ad0bea31775e",
            },
            reward: "0.0136136669590138557591132212148174",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc971308c20683f84d1e900a3e9e894651141f58d-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xb92a1d5c73a69a0d72820f6f6221c5a81edb7cc0",
            },
            reward: "0.006807942433196933837475862130540334",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xd84bfc499f039a5fa9e672cfc8619df5ec17f6b1-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.7150705839056625071833223589966985",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xdeff80691cc0331a7a2552e4ae0805b3507c2160-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xab12253171a0d73df64b115cd43fe0a32feb9daa",
            },
            reward: "0.001361639509833539852208045721978155",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xe9bfa6621aa45febfbef539f9111399d33045677-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x771991fc8ce57682775ee73bb28b201f4016b090",
            },
            reward: "0.006807383909387838682483424703182226",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xec53a9b324680840fc6bdbc4d9e2a79a74d6c5bc-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xfa88c88f68fc7a66ccd512a34f7686fded60caf4",
            },
            reward: "0.002722039022219663379518270410908351",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xf2a4d8d3d89db7811d3bef8ddf070d07d37d31de-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x915188a790dcdd06447244196694c9f8a7d2b4c0",
            },
            reward: "0.002806616220920291302273632189587717",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xf931f5500021004c982c544fc470b6ac7efc7ed2-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x0dbc9a65c6fec050eeed9508a707ea4aa0aca4b9",
            },
            reward: "0.0001361639389366516980253487615635347",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xfd7e7d55d35161010a84ab8861796f43af2be503-19570",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.07287113793266998102782273239950538",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x119df0abcef03b4583156edc0eb8fa0c2943d938-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x3cf08d6a9436a1798c18d24a70f5ad0bea31775e",
            },
            reward: "0.0096739237760018556356823378260529",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x194d3864cdc46df1b8c03430c3c774c239b09cb8-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.4861033403010013164102980544515886",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x2410dde3c75a6294ffe6256ed9d64ebf5cd0bb2b-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x7bfee91193d9df2ac0bfe90191d40f23c773c060",
            },
            reward: "0.05202927724757363203296010386115418",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x28ac0e552679f1d79931abfdffbde7a41b3dcb0f-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.0000001012478290114410400252990280392675",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x44edd23e02c2fb360b09a26ca426283c6e27646c-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.0000001015882106642898322738269330236659",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x49e3a45e3d3d986c6108c7dff1027a2337b41edc-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xeefd6537adbda7b1a9da3f6607dda26b048489c2",
            },
            reward: "0.01458624454417689102220356516313838",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x5893230d361de544a601fc75c7adc079a746dc29-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x296e0c21db4061ebf971e55d5db85011e7ff9797",
            },
            reward: "0.007293122272088445511101782581569191",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x5f19d66d8a4767a0aaf0ba2bb159f108cc0cbae5-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x37e1881f05f33f71e43bb8f284e0ed53e26520d0",
            },
            reward: "0.01041874610298349358728826083081313",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x65044baa1adf7b8db36b9fbd50ea9cf077afa0b7-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xef764bac8a438e7e498c2e5fccf0f174c3e3f8db",
            },
            reward: "0.1526234863445421242803059770330219",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x6e6b04be1bf327175605e243c82b81cc394811ca-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.02031580927060421702191064158901461",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x6ebe0f8884617fe1041ef3086a2b0b8b37cefeb7-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.0001041827653300553200371852072501524",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x73ea7f5feb14c57e44db56b2c49f289d2ae8cac2-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x4938a9a48139ffc440a07695eec11096f8146350",
            },
            reward: "0.005580491294548678468163388138705463",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x7805f6b40bf00011590b72bf3108d801bf7ea495-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x859e1dfb430a7156faef11947f2fc2a3c34b733a",
            },
            reward: "0.01206978536457952138851382892136553",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x78c0cb647acbc34604d96e91733eeec0865adcf4-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x486cd431523e776cf5cd074deecd7bdf29595f8c",
            },
            reward: "0.1041874610298349358728826083081313",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x796e892136842863b01d707e98ebed7b537e766e-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.005209373051491746793644130415406565",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x7f223a526bd08a59d47bb50c5860d882057d9ddf-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.000000007397534102690880391334287050049046",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x9ab69bede4cfe053b476391701e4f796f1b9a1c0-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x97836f9fc0fa0bd02fa5ddcc0194c78dc5217226",
            },
            reward: "0.01041647140468515850768547222606321",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x9fd4048078144ce72710d71d40adbd177875cf52-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x49543e53d159dd5c9d5e232556cfc2781a2d5044",
            },
            reward: "0.005208992221737723621392206157014042",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xd1d59fd62f91d22bbc39aea59ba97049f6a19e8a-19570",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x3f3429d28438cc14133966820b8a9ea61cf1d4f0",
            },
            reward: "0.1041790827752464261041777668294628",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x0779608cef74b957ec268103395e106219c70ea6-19570",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.01784702223563025931612523890088214",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x1546df38aad7928db0fa9e9e944b520a36720475-19570",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04536483307971665886782433015867346",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x238f85fc2dfa0c0e8451ee020ac98c233c18574e-19570",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x330e75e1f48b1ee968197cc870511665a4a5a832",
            },
            reward: "0.0000003619934992881610532867958542858225",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x349a20e92ad725f665ce7813a89952978d278ba5-19570",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xd790a1516f78e3fb52338084b5c5931a75bb19cf",
            },
            reward: "0.05433697466038449536071551684646564",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x4339d258b2b5872295b9bb02dc0b9f8c6ede3d48-19570",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.05927669962951035857532601837796252",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x4c0c6ba26e49bd0f2797096f8c5c6849812086b8-19570",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xeefd6537adbda7b1a9da3f6607dda26b048489c2",
            },
            reward: "0.005838163442694307114710367063841131",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x804ce22ef01f41d63b2a34cb38ff84045f4ed876-19570",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x58e03d622a88b4012ee0a97235c6b110077fb867",
            },
            reward: "0.003556302984871551930776298241439744",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x9002145f2e70a9613113d39176dd663bb6c0f74d-19570",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x25d9d6f36fb3773b98284624e2a58c0cb3c98cd4",
            },
            reward: "0.01058266633759901211230539715952457",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x94f28f7ce31b5562e76a2a4cf4dea36240baec77-19570",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.02171512820894082227767230166763936",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xa6aa2940672cfb631e46ac00a9d31a77a3905b0b-19570",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.6915569205749364234698826460109044",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xa9a8894685c73b14a5ba6e16f82dccd4765195fc-19570",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04939586617288226242646509993226764",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xc76f1f036fdb749674e681762460065ca3671196-19570",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.0000000835247607225584173833459237925517",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xcda0f5a2a1d406029c648a3b97e1e1eac102c59b-19570",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xa4d4448f2328889d79015975a7b4de27649e1ff6",
            },
            reward: "0.001975896117752205716927220806038875",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xce0c79c6c04068a9de6bef5699f12a1cde7df01e-19570",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x50a708e5dfe836601931af3ff6169e5f4e5536ea",
            },
            reward: "0.001630109239811534860821465505393969",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xdfb0b97cef06f2752ab694b8330bd58425435637-19570",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x859e1dfb430a7156faef11947f2fc2a3c34b733a",
            },
            reward: "0.01580711990120276228675360490079001",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xef933fcbfb127d6cf939dea520193c56f43d7e62-19570",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xba842b7da417ba762d75e8f99e11c2980a8f8051",
            },
            reward: "0.001358994756551797347443278995773483",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xf0a5387b9ab9f429fd5b57e1df3f28248b9ae6b6-19570",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xba4074ca3e68095d9a490008fcb68e9ab205636a",
            },
            reward: "0.01975685713925553761678054529062496",
          },
        ],
        week: {
          id: "2795",
        },
      },
      {
        id: "19571",
        borrowDailyRewards: [
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x12c260e672bd8321f6ab246b81a0b7185f3a6d80-19571",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.05847219215290408461706701398817417",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x1e6ee615adb41d8f07bdcf34889dab849d8a4130-19571",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x11d67fa925877813b744abc0917900c2b1d6eb81",
            },
            reward: "0.03821146808345367402052692368071056",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x38ea3693640452756c2ee9a22e607e4c4e0d3f3b-19571",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.5766689272991234461622921421891194",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x58667459ee28b008dccade72cd081d9df7263ec6-19571",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.01624252403165278778148935232311209",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x7bdb7d593e9460d27ef095be6a1f35c6d6e38120-19571",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x47547895218274e121e4219a3fd23235377a9903",
            },
            reward: "0.024363413397043368598561668421124",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xd16335a50ef275b4b3e691e01a52feae6e25c2d8-19571",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x157595f04c0da495d72ceb84390f444d469c3216",
            },
            reward: "0.03656012185009854444579322712216523",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xd9f7d5fb4aac74b72125e3b4426c8f246d3e9072-19571",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x14bdfda5b5b829f14332a52c15129386284ce36a",
            },
            reward: "0.005847219215290408461706701398817417",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xf6a4062cfd0bee1c12c43b6ea0de7227bed3fd6e-19571",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.2436341339704336859125629708767772",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x011293f0e159739c559493fbdae20cd590c664bc-19571",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x6bdc44c885b166aeb687f2d247e419f5a19e1804",
            },
            reward: "0.01927809452415857353459226472444621",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x01dc26b7ccbd2b007da34e720abeae02b99be553-19571",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.06747333083455500693315337439893518",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x177de1a4f8787f49ef20ec28605c3d9bdea497f0-19571",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x4fd0ff2c49671d4fe1927371cf833e8b3b7f44ea",
            },
            reward: "0.03515235754632123134114812059631058",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x1d63e226a1b3a514bd384b9e9d596071fc8076a7-19571",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.3067981266259925035506190787694919",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x2190842ddf2994c986e08045c02442071b774123-19571",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x53fe1b209c917eeeb996720fe5418572bc0e836c",
            },
            reward: "0.06659705381072961741016553871404963",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x31095e235e45c38ca1657e9798a7aef08cf929fa-19571",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04679319557461794445070116839542356",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x6e407de25e1c9fd004768a5ca3d6a06b3d5da390-19571",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x4fd0ff2c49671d4fe1927371cf833e8b3b7f44ea",
            },
            reward: "0.02152136370515157116187074546565878",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x7bb380a98d12de220f088211b0362c47bebb8c66-19571",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x7092020d4c6c26f6e06ee1e8cb5b34f9d14341c7",
            },
            reward: "0.2278320261946013216956385211340531",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x9831f3c9511332a83951e735aeaf9a37e000ed39-19571",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.02804134443815724781142454897053585",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x9fcc001800f9c040dcba47ad4840cc49d146c5c7-19571",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x42b2e881b164e4c283fb7b7e15b35cd256209133",
            },
            reward: "0.03680363500066636749770539551516947",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xb74d9b73d63931b029e1dbec784e05dee38c24d5-19571",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.1051532428590467639538466055989902",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xcfb80b3d81c85f401bf139288ae323fe2eff7a88-19571",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x7c0b689a3003e0dbd2d37ce15e8a2273d91bd7f6",
            },
            reward: "0.02278320261946013215204707002794024",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xe7b42d1a36d567d5314f3c990fcd178c556d37e7-19571",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xbdc88f7f9b16863c8709f97f872f4e6e16dd5f6e",
            },
            reward: "0.01577302626654171850708756768899536",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x0115f90c7f562b85444e5c48a277078437d06de4-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x4dc7970c0facd251e4398f706c45f3af877d029b",
            },
            reward: "0.002285358799217683252947388377199697",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x06dae1c84025e6a3aee5482a859acb6447309cf5-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x519e19eac9ead404343c68224dd2a22c5c25f992",
            },
            reward: "0.1054780984254315347513385857407232",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x15990263fbf6f475d193ed629db99efd530c0d2c-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x25d9d6f36fb3773b98284624e2a58c0cb3c98cd4",
            },
            reward: "0.008789841535452627895946492810675622",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x1ede520dea27d98bc8d16df2d363c275d7b3dcf1-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x6b32080f61ce43bfdc37b6629706dae405d22389",
            },
            reward: "0.01757968307090525579189122853158903",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x225e341a7dfdfbd49924b5dbb08f531781d0f7af-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.1617354807762917973788873982152256",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x2a07081522d2de69c7566cac45edfda9edf73236-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x1ef678435e3a1581732171df82476995cc041568",
            },
            reward: "0.001384929519985703481805251822154006",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x3363aca0a6bd542d146408246b5d1e3743b977d6-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x1f5f902be1f635b30425b690aa9fd5fa2b6fa79c",
            },
            reward: "0.1406374645672420463351175286243768",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x349a20e92ad725f665ce7813a89952978d278ba5-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xd790a1516f78e3fb52338084b5c5931a75bb19cf",
            },
            reward: "0.04834412844498945342769780355478598",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x3ff988fd12069b3f3bce22fa68a2ee5cb1278e57-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x0658b634aae5e7dbfa7510d6940ffd497df06727",
            },
            reward: "0.008357915956440069438652526859867435",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x40455c3ede1e00771066dcc38777fba73f8d4f64-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x73d31581106e3f6b9dd2579e8d9fec81eba22296",
            },
            reward: "0.003515936614181051158379651378127574",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x48d94176dc8a2169eef1b464e4c857c3080f001f-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x20eadfcaf91bd98674ff8fc341d148e1731576a4",
            },
            reward: "0.1757994450261814348513520740008795",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x4b0f729421d241bbc3665918bbe9f803402a0956-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xcbd6b0dee49eea88a3343ff4e5a2423586b4c1d6",
            },
            reward: "0.02109561968508630695027087990971661",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x51319451698f1c7357dcfd7d833803e6c7315209-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.03515936614181051158377894288365365",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x5bbbeee4878868bd8b15d819ac6d082e4227aafd-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xbdb7194a6f048f57e0bab51aaae0fb623615805b",
            },
            reward: "0.0105478098425431534751354399548583",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x65f335e81b687f8389d9245795885e10588492e2-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x07a1f6fc89223c5ebd4e4ddae89ac97629856a0f",
            },
            reward: "0.004957515032371857714540869122104057",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x8a04964be3902d0da1f6000615c53a594b52cb6c-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x11d67fa925877813b744abc0917900c2b1d6eb81",
            },
            reward: "0.1427732450827688683626196389369931",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xa0c64805faea968e6d690f160c2ef8ae9a7dfb3d-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x0183d9be08db4024c2dc9aec10b9526fc6adeef7",
            },
            reward: "0.002636952460635788368785177806036233",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xacdd7f08f9d2b64bf7451171195e7c0dd7a887a2-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xac798df80b371569ec73e37124ffef7e26249667",
            },
            reward: "0.00492231125985347162173080909347372",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xaea1f7431c8d8bee7d6a74e4942a1d509166c849-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x8f767dbe1af8fc0eb2655260f2a4768a3ad49bdc",
            },
            reward: "0.008789841535452627895944735720913412",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xb4f7667c4aa42935a8ed7d92e702097d086e829a-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x2abbf099b7d6d3b25912c5c78f6737456e8736d9",
            },
            reward: "0.005273904921271576737570355612072466",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xd0517b06167727e10d25be193e75d6becffd5504-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x396a6d7a33655c45044143cb8a812227bf279578",
            },
            reward: "0.06527265350124252971157632975801258",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xe98487af8344963ea19ad477a2f50c174f3a71fa-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x3d0d2b7ce092bfdbb02e1ae1e904d16459613776",
            },
            reward: "0.003564966350265805916783231113978829",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xf1f916d52cbca47bfa2c4f53fd48cc81228e7ade-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x7c0b689a3003e0dbd2d37ce15e8a2273d91bd7f6",
            },
            reward: "0.0105497216078356904221122202177243",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xfa62b642a718c6e88f3c7a3049040c79a9c5cd61-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x6144a12e348829abb59ead0364cf7c2e540aa715",
            },
            reward: "0.0105478098425431534751354399548583",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x002cd3ca0be3ea53528b7e7c9e34abb81fa2e9ac-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.02411827474289248625826207819530311",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x0052e87f43b4dbf7a881a9a7e3b4ad89dfd50d2f-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.01205913737144624313033635017925538",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x02b6e9b583356cc5d80604ff0f1bd676c2bd27f1-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.01929462568767136072884403677573845",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x51324b76b09a2fc065ad01d02677b7f1ecc7177b-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.5567168822584861721310995380210557",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x62a455e7f460f5cec4a3e64418bb32816895c2ab-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x30be05fe3ed386b8d8afb327b03f50c9d97dcb85",
            },
            reward: "0.04703063574864034820481636356244489",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa499dadf173dc74047b32eb906a355473f7e4624-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x915188a790dcdd06447244196694c9f8a7d2b4c0",
            },
            reward: "0.03617741211433872938859842837455849",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xac12f96c21cebf7e8743cd16a9be5ba8ec3d31ba-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.002978607695800470321761423882569948",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xb87b6092ac461e2dd171fab14e389810ace950ff-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xcb33844b365c53d3462271cee9b719b6fc8ba06a",
            },
            reward: "0.07114898303065569866525974868805813",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xdd010f2ca484bae51eacc0381af9e2d5c2583b3c-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.01326505110859086744324945408902053",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xe8a6fae00900d2c4f04bb009181ee33f9042daa2-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x1dac73f3d00052d7e815b41e7b1b5cb241aa4d70",
            },
            reward: "0.004583411431263620497387222962386214",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xecef821974f44490bb02c9383cf63c79e0cd77ec-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x7f8c24d538c695262afc1408ad4217967da1623a",
            },
            reward: "0.03014784342861560782403290882573271",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xf43f03c304bdbd098826c032b343ac021b98b16b-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xaf97e87375d97f45b1c5f4ea4cc87650f640581f",
            },
            reward: "0.01966158011289053720165838830092494",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xfc2cb559aa59e6c29ad243dba024833b1e149735-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xccd72bea12f3927063be3d8798a4b74082713cb5",
            },
            reward: "0.1628175552687078582046940581429515",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x049a615a01e115a4323e65c132851b0df5b5182b-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf90db858c0697b34a5c400e3a12f30bb2c7dcb6d",
            },
            reward: "0.01996699313996525867636289021619062",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x68037dd52f350790e70dde3f8add1e2334fcb4a4-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x51318c2f3e7d9735eae7e9c9838bb972742470e5",
            },
            reward: "0.01498001640059227920555414787157056",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x7eb4951e8b4d13bd551616e617cf94aade909145-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xb6462b67fe692223dffb61c8dc8ad080cba180cc",
            },
            reward: "0.02495872993923661606246348622927651",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x8539a3d18cab5e39538759d6d3c00e0faf75ea5d-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.0423549647068845374580012920026636",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x863e5784aab5fef8ac407d9d6e29471381fd135a-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x4d940a53ff1f2515b577c5afc9cdfbbe588c4231",
            },
            reward: "0.03743809490885492409369398203107422",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x919d51e658ccf344a816f70aef57e432d26781dc-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x7092020d4c6c26f6e06ee1e8cb5b34f9d14341c7",
            },
            reward: "0.1261020598377672278792876559834244",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x9f00ccf7eaf33bde3fe055f4f5fa8c26414953f5-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xc3b1f7ab9fabd729cdf9e90ea54ec447f9464269",
            },
            reward: "0.351213514551562126909648704080357",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xbe95a322078a5bae5eadb0b6442974880d89e011-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.01247944905603371091046006645348699",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xd38e65022d3912427e5522fd527cc261b038b272-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xe520d9514a85d28fdcffc5092b58afdf64e8fbb4",
            },
            reward: "0.05589605697630523600954714537380677",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xd6398d422bc3ae37a09ea56c66e04b087733f69f-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.2971390095253324515512554410099515",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xfd9af8d65a3bdfe2b31c7b0d8cdc5cf6cd6a04d0-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xaf866405f474b84e893131dcaa34b51c90e51895",
            },
            reward: "0.01747111095746563124372518874819788",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x0e5275ca7dc4bf97fc1a265948d37bb4c96c2cee-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.03824277122078814241468476178409249",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x27192cfbe142d8067ec207ddc5f201b944b308e3-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1239065787553535814235752033405782",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x34a0b597ec750bdf35044f33ac9e1b072b6baf37-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1376739763948373126928626961085319",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xd54ab85d4525e2ad6593226f663949bb11f3f6cd-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x051d091b254ecdbbb4eb8e6311b7939829380b27",
            },
            reward: "0.6879370475932284892255623543252955",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xec847b4317b7b076971a4d9ebb68370de88ee9f1-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.01223962603579247424331498444150187",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x02da703f2ad773c23f13de85e4cb99b575d4f42c-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x1dac73f3d00052d7e815b41e7b1b5cb241aa4d70",
            },
            reward: "0.007791427984779478040295424969700091",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x08a5433378862b6fc301d770b37bf7973acebd24-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x92ec6e838dd90845d7d34dfaa82d6d00f66c8168",
            },
            reward: "0.006445602971756505660440539671079905",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x0d2807b752d53aa74ed99c89b98562118c444d22-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xbdc88f7f9b16863c8709f97f872f4e6e16dd5f6e",
            },
            reward: "0.003197019073991226807579157068939144",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x4fed8be4cef8a73868bd45bfacea95bfb5aa70de-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x2e3bd4e33281ec73b88233ab5f8b0e52a8d6f913",
            },
            reward: "0.002404209908465176611346417648344299",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x777460e2ace7b0a74c8d9ca968f104beecc76f7b-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.009023860693887356324935158096216618",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xade0f7c5070b051bc78838f02ad3114027dd40f4-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.8899789727943187876834571938747141",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xd32409572812b6722979198f157aae7ed32c5dd8-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xf2eaeb6a0c248bcd69fd314180d69907b9be7491",
            },
            reward: "0.05602105498295109679623174053522711",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xe11d019a01d47faf9ca8ac93749499b118f5abe0-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.02513785158985037207571436813577873",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x1fdc3148c8380e60091ad58c52c42c6868c150eb-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.004413275223286517222365023730125974",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x2b928017cf8bd56a9a4dbcccbe4f0bae88cac00b-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.5146315212930341351071786509280813",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x5447a88b3be260be3d01c3af161b2f234f69fb70-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4a8df644eff45a5fe923cc4a2efec07614a1bfb7",
            },
            reward: "0.01544856087743020838824878839647086",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x8095abd47882bd9eded35cb273ab4e0ed1019c93-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf3e112e0c32e7a30da87517e98a22103ade76d01",
            },
            reward: "0.005046285481025898940145380954914338",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x898296ec830ca5291173f04fd70fdc158ecfa95c-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x1db91f586331d168e2da4c6bd73b689fb9f43516",
            },
            reward: "0.01675326865221886503461397090229123",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x90e115a069dfb68f752c6dd48450ef8b87a6919e-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x30be05fe3ed386b8d8afb327b03f50c9d97dcb85",
            },
            reward: "0.06767021313797374899690840235104287",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xb5f440f5a31b0496b3d456383825a4a5db9a8949-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.06767021313797374899837875876279294",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xec54688608916fb79455cabc3b6f9628e57063ab-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xccd72bea12f3927063be3d8798a4b74082713cb5",
            },
            reward: "0.3064540076987521863285805797284105",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xf2adbf6a1fcc9b1d89804ff6aa59669f6486c64f-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xdffd8bbf8dcaf236c4e009ff6013bfc98407b6c0",
            },
            reward: "0.001912654498304690983580444245870007",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1849d6a3b7e7c64f0b011f4263a598af9c5321a4-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6175e7a985caeac2db12fada99e626ebd6fe7bcc",
            },
            reward: "0.002413613926935427007214058862614506",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1b492bb36664d042c4e23456276cc91179b86e5f-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x33a74ed005785a83295d3ebe7e9fee647c3b4246",
            },
            reward: "0.002398528839892080586920639635470242",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x3298a83b2d3b7231771a18ba8a17078715cbcccb-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.03017018046741853885538652074557876",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x422e84f35d37ce696b4512a8e0e17b349cfe8426-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4f942119e6ab0a6e4368e795d1d64291a3ff0da4",
            },
            reward: "0.01703997215452356603110137164710688",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x4311606cc02e6746d9d55e36d15aecbe2d263e83-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xff703ebb19c1a4e27ba14e8d7538fc113ca5f906",
            },
            reward: "0.004398660530969382256727392114891216",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x475308549bc8c8208c16e86cc5271e0c4795b616-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x83910f3e3e0064c15ff2fe043dd042855861d05d",
            },
            reward: "0.03017018192960934568881792390423944",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x4a4937a0fe899f3f5b05a9df320e2ad50a672099-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x915188a790dcdd06447244196694c9f8a7d2b4c0",
            },
            reward: "0.01514475621324953058347092512864792",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x4e0fa6a0150fe76e5ebeb6de07c3db2dbf07b181-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.003771287323822387229730918138324747",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x526b2133671787bbfed2de1ea0b806f6f81dc39d-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6b579bacffea19b002271d448a62b161f754401a",
            },
            reward: "0.006747861136229720052711154334710794",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x64f940e1c5f7e75eec2763420092e1e2c6228393-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x1db91f586331d168e2da4c6bd73b689fb9f43516",
            },
            reward: "0.02494468516646200897372690278272095",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6d9b3df93b5e49e3701950f81518200857eb8b07-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.1297317485727792015582215967454374",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6dd04d8cf38168ab9bb3076a53fe11604c846c1f-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x19865bbf18281ad5197ac06e45966dfd3e72a47f",
            },
            reward: "0.004676376983437389825063718896076998",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x818fe871c0f06a9b1e95887ffd3e232d1728fcd8-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.4659552417792317561357950408656001",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x99299a18d07ba4828bdca135f1b6c6ed13eca64f-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x5f0a0e3b30d304fba56e2eee3a442b0bb5c40275",
            },
            reward: "0.02965728429249920085289279082039208",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xa5c5994870fd0f1d3e06ea9a3ddeed1d3f2fd52e-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x3a762044a55802b57f12ed39d83dd1047d77b8f2",
            },
            reward: "0.002665006902512795076277156092332189",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xa6bcc97eb84b64c9cb66c42e68f6abc4cdb758a5-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xcb33844b365c53d3462271cee9b719b6fc8ba06a",
            },
            reward: "0.1218908580778345642768668542892581",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xaded6a47fd19a18363563dcc005c74cd5bebff42-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x25d9d6f36fb3773b98284624e2a58c0cb3c98cd4",
            },
            reward: "0.006034034817338567517281269743075675",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc51d2bf1798af65b1e3177d7de7bfc60c6428a97-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xa824dc3ae402dfd6a5de71c6fc30ff9e00411209",
            },
            reward: "0.005883183946905103327916870913923661",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc94b314d7421faccbbe89cb04e70542b1a325447-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x30be05fe3ed386b8d8afb327b03f50c9d97dcb85",
            },
            reward: "0.07240841780806281017269687589772093",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xd0a066bf800c8d22472aac9495f2fbc51abe483b-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x58e03d622a88b4012ee0a97235c6b110077fb867",
            },
            reward: "0.006546171156995827424673379961024803",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xf93b2208a5854fc3e85492c1503c43fa6bb7ec01-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x5c44368c0ad4c446842738bdbf8f2bbf9876546e",
            },
            reward: "0.01735194797329079656650663848085258",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x4bab58f19702caa5ba8a223da1a4f6a547f7184f-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x3f3429d28438cc14133966820b8a9ea61cf1d4f0",
            },
            reward: "0.3042368929254869627476698436574749",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x56c4f38f95355e86ee42033ad8aef733feaf40bd-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.09291858700165936428436689092160818",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x5f3e3ee5a0644d3b7aa1922767de8285facc9e0d-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xe520d9514a85d28fdcffc5092b58afdf64e8fbb4",
            },
            reward: "0.01045401444790992874639558320123803",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x69a4fa2c1d81b640a69b1f1ac22974578b64cc46-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.0000000005524540301879768579995906668523747",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x92a0aa27ad8572e125803ea0777af1885f25c9b9-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.009291865462223101671559010210600811",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x97bda93b2f4193a34819f418e50d007c6d80a0b7-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xbff78d2838243c9c6c18245d69e543a9ba6c2890",
            },
            reward: "0.5227007223954964373196642307751302",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xabb209661fb03f48f1174ed3b6c4a0a677298b61-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x42087c28f296d3b2dab56e3f5d1aca1388f2be5b",
            },
            reward: "0.0000000008544238204366747143301304459738577",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xcb02af99f8dc40c1111a9d968c737b5b6691dd67-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xeefd6537adbda7b1a9da3f6607dda26b048489c2",
            },
            reward: "0.01626271763632633231490532670416974",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xd4373715a070bb95c5e7a066efeeade471c1372e-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.02787557610049780928531087990780306",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xdf8fd47da004c44237f6d61f12fbd2b4cc03fa98-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x521dea4e41d3582dffc931c4100d314d0a9f7ee4",
            },
            reward: "0.006388564384833845345019265089226222",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xe695153ee5688b3e75bd3c37ddf0bb39a869235a-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x23b83c2821d1e9fe5c40ce3c014d2420f2f1eeb7",
            },
            reward: "0.009871058238688367660457397203027716",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x1de001a02f1e5db163be5fe07dfceeaaed50af29-19571",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xd9da13de745bfa50ffaafd0a531b92f0511b72cf",
            },
            reward: "0.08052002899423798339901753832876796",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x2fa837f0ad17ea91a2991a608e68263491f2bfab-19571",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04629901667168684045443795163152825",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x69371c6efb2ab226fe8224f3abfe7abb6e80a9ba-19571",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.01409120256660254990769864641382207",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x745ee33177e31b12ce08d2b6256b4d0e351ff3a8-19571",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.7785697026432273942803304635485047",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xca4f58ad764c39cf999f1d97f91093556df3d72d-19571",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xa8c602638e910a5eee8bcf190acf3e2d4c022338",
            },
            reward: "0.02013000724855949584975589357823761",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xcd8cfc4784e971cd960baa91d266d0bd33755425-19571",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x0215c140840b896e1e371525d1f70cefbd09aafa",
            },
            reward: "0.06039004187568573610875950649913942",
          },
        ],
        earnDailyRewards: [
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x07ea5532ab74322c954aad2ecddeb4c82505a2ff-19571",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.07325168169596195442733728063647508",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x355f4f2dc5ec9c234ac72505c3aa9d78f97b45d5-19571",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.01440883130375871144680122353086568",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0x506ff697bb7f93f4eb09bccffb976416bbe38c52-19571",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x0f8c58edf65cbd972d175bfe481bc16fa8deee45",
            },
            reward: "0.5327601726340669808514396216419375",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xae9149de7b243d56bd9ce88329ecbb1177a2d5fa-19571",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x239168974aad75472b652046255050e50a0d5fc9",
            },
            reward: "0.3529423316420771439768387238597234",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xc75afc43dedb449e741f8005d76d5fa880a1cef9-19571",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0x9599d89ed83e6db03d57c004f858ff82228604e4",
            },
            reward: "0.01331857855253121298025806505131032",
          },
          {
            id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6-0xdfaab0e92d3700c33a72fcdfbb90e349803561e8-19571",
            pool: {
              id: "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6",
            },
            user: {
              id: "0xa968a0920bd35ad65f3bd78a934e45f020d6a1e3",
            },
            reward: "0.0133184041716039963173250852796881",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x1457f27c9ebbb7c5701f7e70839a8a5f477107bc-19571",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
            },
            reward: "0.01979459077212959468750919072507598",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x35e69e3fda9994dfb35bee5f7c48f16b65b9abb0-19571",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.2481064253653038403300030945849197",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x441b3504d51b2a3b29920270814ce570485ec470-19571",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0xef47003f0e276eb0fb60b626e80554dd7adcdd11",
            },
            reward: "0.2140351043334323107692582299798711",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x632a2770f96d7fd44702e00dcc355811f9b336d3-19571",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x157595f04c0da495d72ceb84390f444d469c3216",
            },
            reward: "0.03565946366440884678921470016027266",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0x6658b6c07482b477642e47e37fa00f0d807f5fd9-19571",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x7092020d4c6c26f6e06ee1e8cb5b34f9d14341c7",
            },
            reward: "0.1607904485745991587269589266263304",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xc581b9f298220a8293e7e399dae2dde88dbb1921-19571",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.07421886750956263255684244900345119",
          },
          {
            id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4-0xee68b40644ce585e732b659ff79cb79f1ed01717-19571",
            pool: {
              id: "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4",
            },
            user: {
              id: "0x3cb07d1f0620090bb667df1a5c90b4b80f8ede73",
            },
            reward: "0.247395099780563616140213408920079",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x017a7ca1bfb339cbb6d6cecf3f787516975a7c3b-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x8f767dbe1af8fc0eb2655260f2a4768a3ad49bdc",
            },
            reward: "0.005608869348378978502918709793701712",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x05cfb65544eb5568b1438d94b2095fcea6b30b9d-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x1f5f902be1f635b30425b690aa9fd5fa2b6fa79c",
            },
            reward: "0.112185217959049984761165078181287",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x06e7f912044524b49b2eb6b72c891e984d44e36d-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.112175899508406528397464909119011",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x098b98afa71f950ea862b4e0d91b183e7bc16b69-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x07a1f6fc89223c5ebd4e4ddae89ac97629856a0f",
            },
            reward: "0.005571939492464652928042805552346745",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x18877e98dcf273b46ae45dc90005b2de3dec4079-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x2757ae02f65db7ce8cf2b2261c58f07a0170e58e",
            },
            reward: "0.0005609260897952499238058253909064351",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x1aab626f725dfb8a1017ccb658ad308b71517346-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.00000001486853648876496849764960506483822",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x2abe8bfee84fcb968e2233c7307c9d1881e43157-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x47547895218274e121e4219a3fd23235377a9903",
            },
            reward: "0.0112181853571307340129025641067974",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x32dbb4885e665fcc2cb74fa2bc74f208d1b3a900-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xf7c7ca163ddfe69218377ab7086bdfc9a50f4e1e",
            },
            reward: "0.002243677596250085066211743936162725",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x3a15c7a50bb53cc2685e18c7c6e0e2812ec3453e-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x0d9f37c75f7df825a7f02bd39df333485853f4a9",
            },
            reward: "0.00112173522715759898707262693672902",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x3a71da5ea3dd8cbc10d3fe060c0669bc4eea2b12-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xac798df80b371569ec73e37124ffef7e26249667",
            },
            reward: "0.003141186102853399573312622189076037",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x54bba40e7f7b6cca98c0ce02095234aad54abe48-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.01121868106497329759222949563405715",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x57ccb41682e25faed21b3e992d6240e399ec9dcd-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x3e4dd7e5c37fe838eaffc89a551e1c311b7d14f8",
            },
            reward: "0.001121818060225484647669895803981605",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x5c4088920b657726013ae134737f6fee06e23216-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.00000008325131574084010999531704308669814",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x68c927dfc35367ab0909d4cf7386deeeb425d081-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xbdb7194a6f048f57e0bab51aaae0fb623615805b",
            },
            reward: "0.006731113077542999085669904690877222",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x73a2cff38d41ec035afa3038f4c6140ce69ba15c-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x5fcdc32dfc361a32e9d5ab9a384b890c62d0b8ac",
            },
            reward: "0.0003365556538771499542834952345438611",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x74c3f6f294b9825f98ca08816f2529fdf093d5bc-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x0745a468966c6be811dda6d1953fce2798efc1f1",
            },
            reward: "0.05607090113984991620853125364801543",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x829c190ec5468eeb29fa5621ca65a76aac2eaa44-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xa62d7ad2fddbad38a0aba25e40cdfe2edfa4d183",
            },
            reward: "0.01121781134750528962813381874310323",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x82cc4b6919b50755ad3b1de81c75ab180f9ee5ec-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.1121843912568232929301252048928175",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x856926c82ba816e84bce9d7913de57c985cfbd61-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x3e4dd7e5c37fe838eaffc89a551e1c311b7d14f8",
            },
            reward: "0.01009636149018019866122649498026397",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0x9b333d180d559797db6682e11e6e5e494b25fe5f-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xd50cbde55f8da4e8cf94f38deae2c722a5bd156b",
            },
            reward: "0.02198799263801901240517946292015595",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xbf5f2a7883572e0b23b387a848c417b9c31dd936-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xc24dc96768d7a96ca37aa3e65787f69afaf1a354",
            },
            reward: "0.01121772030708267916483440868625168",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xc3b5493dcaafdcb5fe6d627efd099dd0294ca4ad-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xc64844d9b3db280a6e46c1431e2229cd62dd2d69",
            },
            reward: "0.03776463726711496543991733378417603",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xc98d804cfacda3af5d07ca52f9c8137220f8f37e-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x4ea4309e5fcb06201ea54e0fb149de522138cdc7",
            },
            reward: "0.08697732239810581969482117500828104",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xcdac1a2879ae3b612a5667228e629ccc516a66c6-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
            },
            reward: "0.0000001059207437662321624939064273796145",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xd3696b74d9fdddce791bcb2c3eea1c137a0b8861-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0xd9da13de745bfa50ffaafd0a531b92f0511b72cf",
            },
            reward: "0.1122007624034561228945380793764224",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xe7370c3a19a9676d142cc9641909afa0a888d215-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x5a1b8d6a57445deced8f816310fdb0aa6367cf10",
            },
            reward: "0.001473140369866808049530431469103208",
          },
          {
            id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566-0xf0afb9dea61d5bcaa96ea2f3ec1b074714a4531b-19571",
            pool: {
              id: "0x1c50ce3550d1846134f3b7c09785e7005f6a1566",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.265572950803293755653171673048856",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x178ec3e0dca23e5c448b2ac7e4388592883a3d55-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x83910f3e3e0064c15ff2fe043dd042855861d05d",
            },
            reward: "0.0000001214211428937362411163460858439541",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x17dc1526c6ff9cf0c702257775bfbab2385f6fae-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.01207451370780685067270215139535627",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x2815cb20c1063f27d6e5d04b6cd2904af5544bff-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xe793a7a7c7b7a4cefddb30f856b01f36e51b1b82",
            },
            reward: "0.0002414907400282999163284180828057914",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x2a6536e4edb891eba287e7d977421a6df8bb6dea-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xac798df80b371569ec73e37124ffef7e26249667",
            },
            reward: "0.004829805483122740269080860558142507",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x352cfc59b91088656ebaaab3b42febe1b45f868a-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xa4fd65694a9708c2d204bdf7acf8b9c09b105903",
            },
            reward: "0.003622354338505855638780206439064152",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x3c21a1e9b544a56a450898b737a93b8220665e5a-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.01207458618019604892705424109497451",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x42474bffae9d0b4e9dc4e8ea48a5705eacdcb087-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xf44593dfae05bff213c876a8e1fdcc15a45964df",
            },
            reward: "0.01207451370780685067270215139535627",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x497e2f7567a2f46755badacfed456c7d1cd68638-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x0658b634aae5e7dbfa7510d6940ffd497df06727",
            },
            reward: "0.001207451370780685067270215139535627",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x50cc056966b4f1eaef6157390940115d2a396188-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5d12aa6a6001fb326332c3801c6bd12449b6e44e",
            },
            reward: "0.0002414455948679527785626385010661246",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x538112796335be43a765a5cde21f080c3296be64-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x915188a790dcdd06447244196694c9f8a7d2b4c0",
            },
            reward: "0.03622188433710767289023542580059257",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x5f070b42e7fb07786c606d7a162e36056bbfb3b5-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.002414820249363383539357561294128343",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x6030bec53dcf30ccdbced5f578befd80b9b10601-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x9578e8369369fa05e5f2fc8d80a234ad2f8608a8",
            },
            reward: "0.003621558937522610955201215516048172",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x6182164f9f39364908763e94adcc775a2931cb49-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xebe4d96a48c4d0659fadfcae5a132de3a5733374",
            },
            reward: "0.004829805483122740269080860558142507",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x650899474737713e9c247aea3aa777b3c2ed4964-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x7076106c13ca93805f2b16c52e64d3592d55457b",
            },
            reward: "0.00000005802196799876187003648778541672629",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x68ae6b8206610be3d862b4b26b1de35a058c965f-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xcdc8698745db38280d649fb9e7322d899c4a1bd0",
            },
            reward: "0.01207181258457718246217883854703406",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x6f09e208d0bcd35e1db162bed664f3848c7172b4-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x66a4f5d0b57d86bf1b9bfc63e991a9387791fdcd",
            },
            reward: "0.01931922193249096107632344223257003",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x8175279cef254dbf7d0d9cbfd193dd49bc1025d6-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x9cdbddf646a86ec987394c807defed498dbc7df4",
            },
            reward: "0.0003017958725191709234818821049155467",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x8c0ff2a44c53f823c703e83a75d287b37f5c9c12-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xe922bc2ad029b1efafc3eb3ff776219c3dfbb625",
            },
            reward: "0.006037256853903425336351075697678134",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x97f5ea81f39cb9a1d68366503dd282a8c0ba6d29-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.00000004527896789549688516101837805162333",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x98296fae90b58a3db28e7fdca20c96663043750c-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xb92a1d5c73a69a0d72820f6f6221c5a81edb7cc0",
            },
            reward: "0.006037256853903425336351075697678134",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0x9b90a6e571e286bd10e4f5ef3d428cd89b911740-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5baac7ccda079839c9524b90df81720834fc039f",
            },
            reward: "0.02414902741561370134540430279071254",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa5af820995e5383bfaeb7c6ba22f3eb55e35f768-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xb0d6ae7784a9f20c1e34218998f0fc5c24972441",
            },
            reward: "0.01207090841238758960936656795969668",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa641456aa2378540e3be55a2473ac8065170db51-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x9730299b10a30bdbaf81815c99b4657c685314ab",
            },
            reward: "0.0006037256853903425336351075697678134",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xa64d42e8b130f306b8b8add558a095cdec8b8dee-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x5e4568c4d8343052a06ec8aab1e124af08b73248",
            },
            reward: "0.0003018628426951712668175537848839067",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xab9c5fef3a48d4b8501b9e226589df4d81b08401-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.007244292549985718240701520252657166",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xb20f0e2b013655346c6d9c54b16decb7b934fc91-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.6175757639617466240129482067067025",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xb4b84f7205667c6f696add26462d51ba4305bc18-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x7f8c24d538c695262afc1408ad4217967da1623a",
            },
            reward: "0.03138464372710002158108882841193839",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xbafacc6f392410d2d47cb9ca25541e17fd4badc9-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xce27fa2d00b91c9486e3545c75cd7df86d4e3632",
            },
            reward: "0.002463086175096712247162960671839535",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xbc3f05481a54a949ebe764d095da703e9ac96c44-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x70e439584ef1ba300106b9c16543eaa1de676dc2",
            },
            reward: "0.02776588867266703566089770476568035",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xbd431752a75950788fe689d49d970f95a1732581-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xeb434da562e7a8ba045472fd1e134b420771ef7a",
            },
            reward: "0.02414459895046826618920490006218027",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xcd4d1da85c2894148772d088e14e226cc9580af0-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x3ac7084e8ce0757261b79f87a8e417d2df3d24d3",
            },
            reward: "0.06037083172839896977919596829780047",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xe316409d3df47accfdbf20c7cc12ea0a9fc1cb87-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.002777138152795575654721494820931942",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xe5766c80dea6a9b873d56f7149db185e8ab919ba-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x1dac73f3d00052d7e815b41e7b1b5cb241aa4d70",
            },
            reward: "0.001207451370780685067270215139535627",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xf00e853ed9216008355c3ef0843a7b20d3fde16c-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.02777018493007908375961313366405614",
          },
          {
            id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91-0xf073cde213b7a6da101ed7e20ee6e5e9a9973b07-19571",
            pool: {
              id: "0x37d3a44c905663d7b77c9b574b941d4fbf713a91",
            },
            user: {
              id: "0xe1e2a52a21226ba37f28ba6cdf59f20156798f94",
            },
            reward: "0.02294879647508985832593296119427863",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x03431c179e431c9785cf82d0ea2729b9561ae76b-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xef764bac8a438e7e498c2e5fccf0f174c3e3f8db",
            },
            reward: "0.3635516890181787426041717687937778",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x0dbaa1361088a250de5a893bd2efbd3e24545ec8-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xba842b7da417ba762d75e8f99e11c2980a8f8051",
            },
            reward: "0.002907763360058554191139730666265401",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x10119b4fc928a31ab4fd764f743e871f02797446-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xb6462b67fe692223dffb61c8dc8ad080cba180cc",
            },
            reward: "0.02423677926787858284027811791958519",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x13927d76c5a2c5985b25f4c0678d489f04126544-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x59653fd9713a30c54237a6fd21fd97ba141abbe0",
            },
            reward: "0.00477466854626973770492589150590727",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x15eafdb60976e7d22c0ad6c77f05dc64db78f79c-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x296e0c21db4061ebf971e55d5db85011e7ff9797",
            },
            reward: "0.01211704874890359536358654239006722",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x2d1728752f30d604ad144007ac952c578973bccd-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.09694711707151433136111247167834075",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x3910239862b50a5915d49b05c94d97b89265f055-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x7ab29b393aad63e7119c004bb45eefeaa3e70da5",
            },
            reward: "0.002407681652471058419353228234131593",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x3ec36f3a55b31d168fdffaf5d21ab103ffb6e760-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x87474eb5e6f15c5b770c7a68b37342830211ea9c",
            },
            reward: "0.01817758445090893713020858843968889",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x575879fa71ba697042e973be663758b06f63765e-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x318e3835baa3f83ca734d9afb9996f702aa06a3d",
            },
            reward: "0.02394600694300528985977465194299729",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x71b4201c1f312f4f04be8be7b02e0ed224d784fb-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.01211838963393929142013905895979259",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x77f66e4a6383893ecaf0803e52fa1e8b60d43fe9-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xeefd6537adbda7b1a9da3f6607dda26b048489c2",
            },
            reward: "0.00247639073710110406694015728872457",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0x92a95ea3d6c5b81fe85d704203ec1c19e3266a10-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.04659066544781393969073438429957219",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xadbf773d6cb8373d64861c7ae4b02aacfbe2ba76-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0x37e1881f05f33f71e43bb8f284e0ed53e26520d0",
            },
            reward: "0.02423677926787858284027811791958519",
          },
          {
            id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5-0xcef1a9a0dd2cdd92b5669f6b220799104efa865e-19571",
            pool: {
              id: "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5",
            },
            user: {
              id: "0xf71d161fdc3895f21612d79f15aa819b7a3d296a",
            },
            reward: "0.365511435854078252507357289961564",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x0e3f1e786b42465ca7d68fede5389bfca714db42-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xf1a1602c90d8e510bc583eabb53667e3afae4b52",
            },
            reward: "0.00147546235227866401434689782546293",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x0f3436efa3097f960a27b50e673db0b7de765577-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.00000001448996245978693301149851657129048",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x1444e8c66fd6bc37262f26a33bc217b3e0403ab6-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.2950981166103998010969496014364196",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x2643d4f4ffc86ee595c0d8a68a27bef82eab85e4-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x20eadfcaf91bd98674ff8fc341d148e1731576a4",
            },
            reward: "0.1327959794387831266276518789393211",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x281a602477c5b328fcef497e47bb4a4a6b963614-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x58e03d622a88b4012ee0a97235c6b110077fb867",
            },
            reward: "0.007377543131923714023215507188773773",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x2b947350d8e4a4aa1173ee0e4655b33fc8ba55ad-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xde055950ccaaf115c8d76b33e6503ee403875ccb",
            },
            reward: "0.0008850322534191029065258355657720227",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x48a19d4eb3553a476ad6218e0625b606be7bc4fa-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x4fd0ff2c49671d4fe1927371cf833e8b3b7f44ea",
            },
            reward: "0.000000004766141420734463468388051313107895",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x51a1f69f45791b8e5484dd9d526199d9f29223fa-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x6b32080f61ce43bfdc37b6629706dae405d22389",
            },
            reward: "0.01475437944916219851167461046080668",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x5d63b70786f582eb96ab006a4e51f3b930e29e51-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.01475510882653145851418354210436901",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x5dcf7edd434cb7f8b255b5d913783792e41b03d1-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.000000005263300215465891849748325891531758",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x61a5471a19fcceb07ed651ea402a149ebd6fb0d1-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1327959794387831266276518789393211",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0x73933d5e77222f5987cfe3612eebbc88b7833c57-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xdb10d21f28a34fd04e4425eac777483798f7e217",
            },
            reward: "0.005161778167072540698254246990844426",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xa0af774d47a46f8958b5289e21b1cb6210a62f62-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x859e1dfb430a7156faef11947f2fc2a3c34b733a",
            },
            reward: "0.0118040870612251668113468336834952",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xa3fb5786e157d6b2618859b1921f8b71d4f5eedd-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.03691366249401366714758337965136136",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xbfdfc5e00155cd27b8cc4cf7ab4cf5551b54a8f7-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xb225bf7e4f1da339195972ca7e4a1d9ff52156ce",
            },
            reward: "0.007377554413265729257091771052184503",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xcfab8ff364d67af18cbec98b8d47398d503e4a0f-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.000000009871254194851594528566124060975069",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xd29bc9af132fe09f0a6a342d6a5c27e12baaa14f-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.1386980229693957100333252957810687",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xdf2dba82533627d6688efe2e467a76099576a9e3-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.0001475510882653145851418354210436901",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xf22796f247a3aa1633ce936aad31affaddf9c451-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0xc1a4e84588c397adb26486ba0dde28ac8bb54759",
            },
            reward: "0.02971630480094309119768507515095109",
          },
          {
            id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e-0xf7e4255bea7efa35c7c9253a2cfbb2ee3ccef378-19571",
            pool: {
              id: "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e",
            },
            user: {
              id: "0x4ea4309e5fcb06201ea54e0fb149de522138cdc7",
            },
            reward: "0.1702434031138792971084889516077871",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x17e337bac18fb13ee3b547a44c15cd77561ff594-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xae362a72935dac355be989bf490a7d929f88c295",
            },
            reward: "0.0478260178227413645347672817785778",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x2abdda4c66bc2156f81f7056bc87a904017bdad2-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.0000006887296625116263350904800901963801",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x451279bcfbe48691c38e995901e487314190412a-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x0745a468966c6be811dda6d1953fce2798efc1f1",
            },
            reward: "0.07171765699292866929176534558439275",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x4c19b8a92d319ff5261a4f8621c897e8d9c36e0f-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x37e1881f05f33f71e43bb8f284e0ed53e26520d0",
            },
            reward: "0.01195665644104117047813257034369278",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x4c29c31161b6313b716e36402a3d56f6e4a4964e-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x5b191f5a2b4a867c4ed71858daccc51fc59c69c0",
            },
            reward: "0.01198681584835029501564214445303471",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x52448305da311c4a308ed72c7fb0134248abf373-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x3f3429d28438cc14133966820b8a9ea61cf1d4f0",
            },
            reward: "0.1195655456000404690360635582940279",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x540b46c36557d3212e06e37182e5296bb486323c-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x4adf9b737ab9c97f5728cbcf143483cf6c2f7df3",
            },
            reward: "0.005978040779275190765850204763082345",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x64943f1ac7b541c3b6bdf45464c9b4093e4a7fab-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.005978328220520585239066285171846388",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x7602834c716948c438b9729fe0384b3aec52b3eb-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xef764bac8a438e7e498c2e5fccf0f174c3e3f8db",
            },
            reward: "0.1793154755452629822311615109948899",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x8219adc2f9791e2d8a67882a4a73cc85e277c524-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xebfb476e0f9c8d74f0fce72b688d7177dcbb73c2",
            },
            reward: "0.001195665644104117047813257034369278",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0x8ce6fc3cca6deb3545af4e32a49a93a4c7a61e8a-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x11d67fa925877813b744abc0917900c2b1d6eb81",
            },
            reward: "0.0358700703169540488137117381623092",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xa121d81b6b83075ad0ee5d4a35087af262712173-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xf9f668901a13b2c817a9cc9d7fed50868b7af8be",
            },
            reward: "0.015239786906560901315041080304086",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xa988e47d6c2549c485ee612cb0d0dfced04b4eb1-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.4184701857323247710490585419908931",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xb756db88231a365c7be83adb959cc6d3e2218ec7-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x7139a445ecc1a597695cc9a077caaa41e0f18391",
            },
            reward: "0.00000001293383205790096031910728211254749",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xbf62dc76e06555ffadf4c7cd7353b055a6d09e52-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x3cf08d6a9436a1798c18d24a70f5ad0bea31775e",
            },
            reward: "0.01195670152351259088142133020193237",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xc0558bcec4725c038256174fac0c1921fb145afa-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xe3db0df6a4a62106a3dd5cef76c196a53f3e7e4d",
            },
            reward: "0.01194371448801698242668006088148637",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xd29721fd44d8e4cd02bae1453e40b2d72276859b-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x22e86ab483084053562ce713e94431c29d1adb8b",
            },
            reward: "0.004368889980088990165986284309637819",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xda2035f6b3d6618bbf5fc591b25b49b6ab175d39-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.01793486521936302130186564324181505",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xf051ffec03e1842939c2fe40c1a8623da624b220-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0x6b32080f61ce43bfdc37b6629706dae405d22389",
            },
            reward: "0.00000004464374745400143865210595783218394",
          },
          {
            id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0-0xf220126d67557ff209c921f4d2744f85b218b664-19571",
            pool: {
              id: "0x8519be08b8d83baeb11eba52a7889967dced9ae0",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.0286948366316718268772391007965961",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x065af1d2579d2896c87d1072bcecb64f70dbcc52-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x6bdc44c885b166aeb687f2d247e419f5a19e1804",
            },
            reward: "0.0000001269866751616794381559270728157142",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x0ab511f268ecb706b956e0a6bb99f9268282e3dd-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x3ac7084e8ce0757261b79f87a8e417d2df3d24d3",
            },
            reward: "0.07350377746493086271017551139087956",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x0c0e979e5d699e51f4707527e3b4a1576406270b-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x7076106c13ca93805f2b16c52e64d3592d55457b",
            },
            reward: "0.01058454395495004423026527364028666",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x0c7a5ef0532c0e1b8b4984ee4e4e19283f2cf7cc-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x2068d14ee50772dd6e89c6f64f32adad0cc936ef",
            },
            reward: "0.008085046540360350163048116115697282",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x118954ab01883c2c245d7a9b737df80e8c4afbfe-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.004410547006246825680609032514787703",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x16d559ee5ca6f8f14c15ebd511809722f4b87702-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.01470119389368191403221766115349162",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x2b4f1f53c4bbf3fa77e2a7faf1cfc063f7c21523-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x1a918a8386f75f382e2a1b2e10b807c39728caf2",
            },
            reward: "0.003689841020588340712701047623011692",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x4820233ad8d7bb201f9462d242922d28926bc642-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x28af2a3c28b7ecf7d84a8ba0fddf7525a88e1f61",
            },
            reward: "0.002969120098452450766597163218104644",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x4f1122cc1723e5d60cc11c68be19972b8e3be8d1-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x7bfee91193d9df2ac0bfe90191d40f23c773c060",
            },
            reward: "0.0176402616111560972793639981470519",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x5ef7d0933cfb377f11f125ba0d74812c18f35520-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xf9f061d9a5f04e223ed3c560e03a8ab0a70cc1c4",
            },
            reward: "0.02205113323947925881305265341726387",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x5f38bd14ffcf23f0f8b6ad90f3dfcd15077e2b8f-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x66a4f5d0b57d86bf1b9bfc63e991a9387791fdcd",
            },
            reward: "0.01175935426432531210688028090231596",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0x6ffcd46a8194ec8d3617f3bee62334de71967033-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xe1e2a52a21226ba37f28ba6cdf59f20156798f94",
            },
            reward: "0.04410236006453371102909453162389981",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xab4632810f9b93eccc993fe804f9da57875649fe-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xdb10d21f28a34fd04e4425eac777483798f7e217",
            },
            reward: "0.002057420646960086352743749315864243",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xaee5b0711b31a7954406b40f2dbc079b2d6fb65f-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xab12253171a0d73df64b115cd43fe0a32feb9daa",
            },
            reward: "0.00279335542294021395240962821409298",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xb9134373f544527d15ce3cdd8cb1f78d72acf42a-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.03013654876062165371117195967026062",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xc3006429aa36fc6d14ead73ac106d42ffcedd576-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xa0ce55801b0b88f2df2ef026eb8da79e9f0ad9c1",
            },
            reward: "0.0007831978087451405178907888901410175",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xe60d6cc634782add49132dea0a70b0b014fd0500-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xd790a1516f78e3fb52338084b5c5931a75bb19cf",
            },
            reward: "0.001470341529328948246112463895244569",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xec6224e36c67b54e3daaa968cd1cff6781e003ac-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.7350023688719825882293330651112301",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xeedff03dd73862e59f5c48792ac9bd241ecd11dd-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.00000006299839401441143083295558514499734",
          },
          {
            id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda-0xfa16a59a3458e5008041109c2add292d9886c606-19571",
            pool: {
              id: "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda",
            },
            user: {
              id: "0xd46c81245a0582891c2249daf2d68925977cf2a7",
            },
            reward: "0.0142593978156470253754640862737178",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x08a27f3ee826ef49d1673846416179c3584671f6-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xe793a7a7c7b7a4cefddb30f856b01f36e51b1b82",
            },
            reward: "0.0003194677733389523822111295352625171",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x0b03f8ac3ff960b3db43a3f549fe0c98bd0c6102-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf3e112e0c32e7a30da87517e98a22103ade76d01",
            },
            reward: "0.003205353698481982785577831164507862",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x0c0f27020418cf8966939c666a939369a45be65d-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x3f9c50665dda1b64146fa0074ad4d87e75829e90",
            },
            reward: "0.0008272932588264630727860786486147735",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x0e78c099b7ed855f56a4e732672d3434f6c2108e-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x056590f16d5b314a132bbcfb1283fec5d5c6e670",
            },
            reward: "0.001063915562451498084850565082514637",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x12b9aadce493ff66d34298e3b5b86fcea8be8290-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6bdc44c885b166aeb687f2d247e419f5a19e1804",
            },
            reward: "0.00000004403013426964508268300182610846208",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x1affd8e82ddc8ab62c34600edfe946ccc777e744-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x6ed88188da646b6fe64022895de4045c35eba48e",
            },
            reward: "0.00532435378032396608518339967478432",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x49677b6f91c52edb792c4568141a120920454277-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf9107317b0ff77ed5b7adea15e50514a3564002b",
            },
            reward: "0.0005537288261923809373526395533138543",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x542bb88299feff0b6a4f5a38f26c821647d43791-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xecc0da4bf963c23e9ec9740b1f06cb192c5195a1",
            },
            reward: "0.01064629182580945784697356729071608",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x5be1d28851c974f57731a63cfb44e75cb8016ff5-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x000f4432a40560bbff1b581a8b7aded8dab80026",
            },
            reward: "0.003727128750539573124334269260214883",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x5de37e57eb3356939d22b7d6860853208e3df746-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x50422d5a52d9a4adaf8123ffd46a323056e4fb37",
            },
            reward: "0.0021277142598426919489143213474652",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x637cae3aa6685b8e11af2a96983c7db86ba4e593-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
            },
            reward: "0.002555763746297926473550430164391651",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6d09db5cb9b73168bee7f041a92e9d5b1ecba6ae-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
            },
            reward: "0.01000616608796999466713691746815093",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6d77d2ff5fb75f27032a4dd9f93de3138a29ceb5-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xf927f23ce9d81270b5c6802ea4d7da1a346fafe2",
            },
            reward: "0.004256815515088922344281519040519279",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6e81c8661e47fb8a97a2aac6165163556cf1b246-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
            },
            reward: "0.01064914963541357307893101457229848",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x6ed53aec4ef64ff50a365378b6c185ae1305b681-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x56cfcaa14c2d63fef909e335733de4c6330306a7",
            },
            reward: "0.002129775325432818525815917511198124",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x7086d16f120ae26a4538b9d9d197da2c557a9ce0-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x3ac7084e8ce0757261b79f87a8e417d2df3d24d3",
            },
            reward: "0.05324364020582509563094530510553815",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x725fb45f9b24a54a9ca9247e102b9bedb9317abd-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xa824dc3ae402dfd6a5de71c6fc30ff9e00411209",
            },
            reward: "0.004258676792260486333057123033296107",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x7abdd8d610b791d2d55328acc5401edb26a4fb48-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x5f55980eaf5131f9fd487e1177cacb18d7609a21",
            },
            reward: "0.001671737451575065566402307332943091",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x7ae562345f402240f98b0e6f685dc3a50d4e6e4f-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x32cd06a20b528bced096945d6d165a61e75ccd2a",
            },
            reward: "0.01043432967346284377835733456913724",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x844ae5515519fce2ad9d6e1f588311066582a02b-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x429af9695a3936e2f22d05694775d12237f2723a",
            },
            reward: "0.00000004805743654816671380998734537843535",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x863d0124ad1eaa0d9d7cc4c1c1d15784d85c43c7-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x7076106c13ca93805f2b16c52e64d3592d55457b",
            },
            reward: "0.00000009101582965944852121583847828179415",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x8ea11e4b6507fc26e7e719f945ab750c94ed97f1-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x8522885d735f75b3faeea5cd39ab3d1291da2c77",
            },
            reward: "0.005323246332479815712908839777027521",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0x9b9d6bd6eb6589f6f94d417a8385d8e926f8bd49-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4677b560974508e69f3611ccdef6c77af0509a47",
            },
            reward: "0.001064729461931697883013677250819297",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc0d6f11604e9a6e41667937db52e555b15e406b1-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x53dc3204f2f294f6a5649a36ac295f74a0db92e0",
            },
            reward: "0.0004541861724481568041680042136558228",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc14673d36d6d073750125205b0171c2f7a9da115-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x83910f3e3e0064c15ff2fe043dd042855861d05d",
            },
            reward: "0.003927464507486756544913649901527603",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc6559e3789e904ca291f914d6857770a9dad2e25-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x3cf08d6a9436a1798c18d24a70f5ad0bea31775e",
            },
            reward: "0.01064674324619050802589598373806471",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xc971308c20683f84d1e900a3e9e894651141f58d-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xb92a1d5c73a69a0d72820f6f6221c5a81edb7cc0",
            },
            reward: "0.005324238894583895176940346009616232",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xd84bfc499f039a5fa9e672cfc8619df5ec17f6b1-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.5480441197921096994547612652234503",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xdeff80691cc0331a7a2552e4ae0805b3507c2160-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xab12253171a0d73df64b115cd43fe0a32feb9daa",
            },
            reward: "0.001064887682261659140501099545829548",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xe9bfa6621aa45febfbef539f9111399d33045677-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x771991fc8ce57682775ee73bb28b201f4016b090",
            },
            reward: "0.005323802093859283416159154250256925",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xec53a9b324680840fc6bdbc4d9e2a79a74d6c5bc-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0xfa88c88f68fc7a66ccd512a34f7686fded60caf4",
            },
            reward: "0.002128805608579653742732875102365512",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xf2a4d8d3d89db7811d3bef8ddf070d07d37d31de-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x915188a790dcdd06447244196694c9f8a7d2b4c0",
            },
            reward: "0.02126933566395593781007245030111589",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xf931f5500021004c982c544fc470b6ac7efc7ed2-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x0dbc9a65c6fec050eeed9508a707ea4aa0aca4b9",
            },
            reward: "0.0001064887588048875324643227022375252",
          },
          {
            id: "0xad24fc773e125edb223c38a39657cb64bc7c178e-0xfd7e7d55d35161010a84ab8861796f43af2be503-19571",
            pool: {
              id: "0xad24fc773e125edb223c38a39657cb64bc7c178e",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.2683204665127738788284889528015162",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x119df0abcef03b4583156edc0eb8fa0c2943d938-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x3cf08d6a9436a1798c18d24a70f5ad0bea31775e",
            },
            reward: "0.0096739237760018556356823378260529",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x194d3864cdc46df1b8c03430c3c774c239b09cb8-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.4861033403010013164102980544515886",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x2410dde3c75a6294ffe6256ed9d64ebf5cd0bb2b-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x7bfee91193d9df2ac0bfe90191d40f23c773c060",
            },
            reward: "0.05202927724757363203296010386115418",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x28ac0e552679f1d79931abfdffbde7a41b3dcb0f-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.0000001012478290114410400252990280392675",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x44edd23e02c2fb360b09a26ca426283c6e27646c-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.0000001015882106642898322738269330236659",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x49e3a45e3d3d986c6108c7dff1027a2337b41edc-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xeefd6537adbda7b1a9da3f6607dda26b048489c2",
            },
            reward: "0.01458624454417689102220356516313838",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x5893230d361de544a601fc75c7adc079a746dc29-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x296e0c21db4061ebf971e55d5db85011e7ff9797",
            },
            reward: "0.007293122272088445511101782581569191",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x5f19d66d8a4767a0aaf0ba2bb159f108cc0cbae5-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x37e1881f05f33f71e43bb8f284e0ed53e26520d0",
            },
            reward: "0.01041874610298349358728826083081313",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x65044baa1adf7b8db36b9fbd50ea9cf077afa0b7-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xef764bac8a438e7e498c2e5fccf0f174c3e3f8db",
            },
            reward: "0.1526234863445421242803059770330219",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x6e6b04be1bf327175605e243c82b81cc394811ca-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.02031580927060421702191064158901461",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x6ebe0f8884617fe1041ef3086a2b0b8b37cefeb7-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x42009b6fcdf29dd571383fc3560846c796367904",
            },
            reward: "0.0001041827653300553200371852072501524",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x73ea7f5feb14c57e44db56b2c49f289d2ae8cac2-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x4938a9a48139ffc440a07695eec11096f8146350",
            },
            reward: "0.005580491294548678468163388138705463",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x7805f6b40bf00011590b72bf3108d801bf7ea495-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x859e1dfb430a7156faef11947f2fc2a3c34b733a",
            },
            reward: "0.01206978536457952138851382892136553",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x78c0cb647acbc34604d96e91733eeec0865adcf4-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x486cd431523e776cf5cd074deecd7bdf29595f8c",
            },
            reward: "0.1041874610298349358728826083081313",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x796e892136842863b01d707e98ebed7b537e766e-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.005209373051491746793644130415406565",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x7f223a526bd08a59d47bb50c5860d882057d9ddf-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
            },
            reward: "0.000000007397534102690880391334287050049046",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x9ab69bede4cfe053b476391701e4f796f1b9a1c0-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x97836f9fc0fa0bd02fa5ddcc0194c78dc5217226",
            },
            reward: "0.01041647140468515850768547222606321",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0x9fd4048078144ce72710d71d40adbd177875cf52-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x49543e53d159dd5c9d5e232556cfc2781a2d5044",
            },
            reward: "0.005208992221737723621392206157014042",
          },
          {
            id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f-0xd1d59fd62f91d22bbc39aea59ba97049f6a19e8a-19571",
            pool: {
              id: "0xdb30a08ebc49af1baf87f57824f85056ced33d5f",
            },
            user: {
              id: "0x3f3429d28438cc14133966820b8a9ea61cf1d4f0",
            },
            reward: "0.1041790827752464261041777668294628",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x0779608cef74b957ec268103395e106219c70ea6-19571",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
            },
            reward: "0.01670858771790339703476902571960015",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x1546df38aad7928db0fa9e9e944b520a36720475-19571",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04247107908608058674424139759031865",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x238f85fc2dfa0c0e8451ee020ac98c233c18574e-19571",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x330e75e1f48b1ee968197cc870511665a4a5a832",
            },
            reward: "0.0000003389024822354878085711783356111823",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x349a20e92ad725f665ce7813a89952978d278ba5-19571",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xd790a1516f78e3fb52338084b5c5931a75bb19cf",
            },
            reward: "0.05087090134431418373676183503995287",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x4339d258b2b5872295b9bb02dc0b9f8c6ede3d48-19571",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
            },
            reward: "0.05549552873925183680374018367994858",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x4c0c6ba26e49bd0f2797096f8c5c6849812086b8-19571",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xeefd6537adbda7b1a9da3f6607dda26b048489c2",
            },
            reward: "0.005465755839031141838440535465756819",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x6f839a2ccba3a988eb4657e985c3eee6de487299-19571",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xf71181c9f91f85149d629f37b8c27afca0fd5ea1",
            },
            reward: "0.06378848542330283000046128251947526",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x804ce22ef01f41d63b2a34cb38ff84045f4ed876-19571",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x58e03d622a88b4012ee0a97235c6b110077fb867",
            },
            reward: "0.003329451803760224595678037723519689",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x9002145f2e70a9613113d39176dd663bb6c0f74d-19571",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x25d9d6f36fb3773b98284624e2a58c0cb3c98cd4",
            },
            reward: "0.009907614080183399982508507186061065",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0x94f28f7ce31b5562e76a2a4cf4dea36240baec77-19571",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
            },
            reward: "0.02032995306971964854525783803608099",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xa6aa2940672cfb631e46ac00a9d31a77a3905b0b-19571",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x4873cf6f707064135b5522b80763239e73da103e",
            },
            reward: "0.6474435520274578984596455706505144",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xa9a8894685c73b14a5ba6e16f82dccd4765195fc-19571",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
            },
            reward: "0.04624497868354194488160335091068945",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xc76f1f036fdb749674e681762460065ca3671196-19571",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
            },
            reward: "0.00000007819684274072264302549427165214318",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xcda0f5a2a1d406029c648a3b97e1e1eac102c59b-19571",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xa4d4448f2328889d79015975a7b4de27649e1ff6",
            },
            reward: "0.001849856697047008490404661170504286",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xce0c79c6c04068a9de6bef5699f12a1cde7df01e-19571",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x50a708e5dfe836601931af3ff6169e5f4e5536ea",
            },
            reward: "0.001526127040329425512102855051198586",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xdfb0b97cef06f2752ab694b8330bd58425435637-19571",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0x859e1dfb430a7156faef11947f2fc2a3c34b733a",
            },
            reward: "0.01479880766380048981433071564798629",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xef933fcbfb127d6cf939dea520193c56f43d7e62-19571",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xba842b7da417ba762d75e8f99e11c2980a8f8051",
            },
            reward: "0.001272306539333148044218689865916282",
          },
          {
            id: "0xe0ffabea66627a588efb6c870677baa23a53b948-0xf0a5387b9ab9f429fd5b57e1df3f28248b9ae6b6-19571",
            pool: {
              id: "0xe0ffabea66627a588efb6c870677baa23a53b948",
            },
            user: {
              id: "0xba4074ca3e68095d9a490008fcb68e9ab205636a",
            },
            reward: "0.01849659714561785930538391706986934",
          },
        ],
        week: {
          id: "2795",
        },
      },
    ],
  },
};

export const weeklyRewardSnapshot = [
  { address: "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161", amount: "0x04c3099d1ff1083f3c58" },
  { address: "0x11d67fa925877813b744abc0917900c2b1d6eb81", amount: "0xb4cc531f23eeccbc8b" },
  { address: "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739", amount: "0x0ad4feed0e9b1007a591" },
  { address: "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb", amount: "0xd4785f2591176a6a2d" },
  { address: "0x6bdc44c885b166aeb687f2d247e419f5a19e1804", amount: "0x18ee14522df0cb023b" },
  { address: "0x157595f04c0da495d72ceb84390f444d469c3216", amount: "0x8ceb2cdbf1bf774ed3" },
  { address: "0x14bdfda5b5b829f14332a52c15129386284ce36a", amount: "0x07714eb45ddfb4f48c" },
  { address: "0x4fd0ff2c49671d4fe1927371cf833e8b3b7f44ea", amount: "0x4743591c13f3390a3d" },
  { address: "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2", amount: "0x03457a46ed8bcc0efec9" },
  { address: "0x53fe1b209c917eeeb996720fe5418572bc0e836c", amount: "0x4df145cf63dddb6ffc" },
  { address: "0x42b2e881b164e4c283fb7b7e15b35cd256209133", amount: "0x2aa1e43ef410be0ed8" },
  { address: "0x22e86ab483084053562ce713e94431c29d1adb8b", amount: "0x0154d9ba350f56c885a8" },
  { address: "0x7c0b689a3003e0dbd2d37ce15e8a2273d91bd7f6", amount: "0x3b5e7539f964850ff6" },
  { address: "0xbdc88f7f9b16863c8709f97f872f4e6e16dd5f6e", amount: "0x1e9f0b21291fc726d4" },
  { address: "0x4dc7970c0facd251e4398f706c45f3af877d029b", amount: "0x05c13cbbda54019245" },
  { address: "0x25d9d6f36fb3773b98284624e2a58c0cb3c98cd4", amount: "0x445fa86c13cfc03b63" },
  { address: "0x6b32080f61ce43bfdc37b6629706dae405d22389", amount: "0x5791a39e1aadd5223c" },
  { address: "0x1ef678435e3a1581732171df82476995cc041568", amount: "0x037cc87a20e4085245" },
  { address: "0x1f5f902be1f635b30425b690aa9fd5fa2b6fa79c", amount: "0x02bc8bcaa290c9e6bff6" },
  { address: "0xd790a1516f78e3fb52338084b5c5931a75bb19cf", amount: "0x0117266bbeb9d62d2b63" },
  { address: "0x73d31581106e3f6b9dd2579e8d9fec81eba22296", amount: "0x08da84d2539cfec921" },
  { address: "0x20eadfcaf91bd98674ff8fc341d148e1731576a4", amount: "0x0340699162134530b242" },
  { address: "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5", amount: "0xe69b52f5b651d036bd" },
  { address: "0xbdb7194a6f048f57e0bab51aaae0fb623615805b", amount: "0x2f584c7d8d39b4491f" },
  { address: "0x07a1f6fc89223c5ebd4e4ddae89ac97629856a0f", amount: "0x1db045485d5a3ec91f" },
  { address: "0x0183d9be08db4024c2dc9aec10b9526fc6adeef7", amount: "0x06a3e39db8db1d8921" },
  { address: "0xac798df80b371569ec73e37124ffef7e26249667", amount: "0x2ac754ae3ec4791ff5" },
  { address: "0x8f767dbe1af8fc0eb2655260f2a4768a3ad49bdc", amount: "0x2773f081d67ff1448c" },
  { address: "0x2abbf099b7d6d3b25912c5c78f6737456e8736d9", amount: "0x0d47c73ba08b477ffd" },
  { address: "0x10649c79428d718621821cf6299e91920284743f", amount: "0x0fa3efbeb04f5b648f" },
  { address: "0x6144a12e348829abb59ead0364cf7c2e540aa715", amount: "0x1a8f8e7758811536d8" },
  { address: "0x5baac7ccda079839c9524b90df81720834fc039f", amount: "0x0102aed51b48ec01d480" },
  { address: "0x6ed88188da646b6fe64022895de4045c35eba48e", amount: "0xc46020886fdd179fed" },
  { address: "0x4873cf6f707064135b5522b80763239e73da103e", amount: "0x5dd75d4e63d06f6b656b" },
  { address: "0x30be05fe3ed386b8d8afb327b03f50c9d97dcb85", amount: "0x020e9dbef32ebf49123d" },
  { address: "0x915188a790dcdd06447244196694c9f8a7d2b4c0", amount: "0x01648466dacee8679916" },
  { address: "0xcb33844b365c53d3462271cee9b719b6fc8ba06a", amount: "0x027350cf7b606ae7cdb1" },
  { address: "0xc3ca3618f578094dda63efd6f30abe3de685e91c", amount: "0x036cab48b0794e610110" },
  { address: "0x1dac73f3d00052d7e815b41e7b1b5cb241aa4d70", amount: "0x259059bbbbfca5d483" },
  { address: "0x7f8c24d538c695262afc1408ad4217967da1623a", amount: "0xdcb386083b5eda523f" },
  { address: "0xaf97e87375d97f45b1c5f4ea4cc87650f640581f", amount: "0x3846f7bb278234dffd" },
  { address: "0xccd72bea12f3927063be3d8798a4b74082713cb5", amount: "0x053f316c0a55976c5ffa" },
  { address: "0xf90db858c0697b34a5c400e3a12f30bb2c7dcb6d", amount: "0x355f394af8a816748f" },
  { address: "0xb6462b67fe692223dffb61c8dc8ad080cba180cc", amount: "0x9ceb40bdc4afb0a6d2" },
  { address: "0x7092020d4c6c26f6e06ee1e8cb5b34f9d14341c7", amount: "0x02aa6754263e4b456a3d" },
  { address: "0xc3b1f7ab9fabd729cdf9e90ea54ec447f9464269", amount: "0x036dca0c237d5d2f3ffa" },
  { address: "0xe520d9514a85d28fdcffc5092b58afdf64e8fbb4", amount: "0xa55ad7a9d6d931048d" },
  { address: "0xaf866405f474b84e893131dcaa34b51c90e51895", amount: "0x2eb350b8fd63724ffd" },
  { address: "0xae362a72935dac355be989bf490a7d929f88c295", amount: "0x075c4de77f4e64223fe6" },
  { address: "0x051d091b254ecdbbb4eb8e6311b7939829380b27", amount: "0x0520b7f63dc307ac3ff8" },
  { address: "0x92ec6e838dd90845d7d34dfaa82d6d00f66c8168", amount: "0x0ff1cd27095262fffd" },
  { address: "0x2e3bd4e33281ec73b88233ab5f8b0e52a8d6f913", amount: "0x05f2830c97ea49cb6b" },
  { address: "0x4a8df644eff45a5fe923cc4a2efec07614a1bfb7", amount: "0x2c37e3c0fee40e5ffa" },
  { address: "0xf3e112e0c32e7a30da87517e98a22103ade76d01", amount: "0x1eff1f22fab61aa91e" },
  { address: "0x1db91f586331d168e2da4c6bd73b689fb9f43516", amount: "0x7445238a6130aaedb3" },
  { address: "0xdffd8bbf8dcaf236c4e009ff6013bfc98407b6c0", amount: "0x05797e01cc7de99ffe" },
  { address: "0x445bab4342fafcfee8baaec5bd7d6030770d4011", amount: "0x142bf8a66fdd2e8922" },
  { address: "0x6175e7a985caeac2db12fada99e626ebd6fe7bcc", amount: "0x069c3be826eee38490" },
  { address: "0x33a74ed005785a83295d3ebe7e9fee647c3b4246", amount: "0x0691a8552b8fc9c921" },
  { address: "0xff703ebb19c1a4e27ba14e8d7538fc113ca5f906", amount: "0x0c0bfda0489993648e" },
  { address: "0x83910f3e3e0064c15ff2fe043dd042855861d05d", amount: "0x66e929a705db933240" },
  { address: "0x6b579bacffea19b002271d448a62b161f754401a", amount: "0x127b1030ea94e38db3" },
  { address: "0x19865bbf18281ad5197ac06e45966dfd3e72a47f", amount: "0x0cceb41224574e6920" },
  { address: "0x5f0a0e3b30d304fba56e2eee3a442b0bb5c40275", amount: "0x513953e37ecbe2a921" },
  { address: "0x3a762044a55802b57f12ed39d83dd1047d77b8f2", amount: "0x074c7da29c5ee04921" },
  { address: "0xa824dc3ae402dfd6a5de71c6fc30ff9e00411209", amount: "0x261ac7fa8d605d591c" },
  { address: "0x5c44368c0ad4c446842738bdbf8f2bbf9876546e", amount: "0x2ce21ae4ee1fafd6d6" },
  { address: "0x3f3429d28438cc14133966820b8a9ea61cf1d4f0", amount: "0x06237a91515f3c23e916" },
  { address: "0xbff78d2838243c9c6c18245d69e543a9ba6c2890", amount: "0x04ea51f2f8dbe828891d" },
  { address: "0x42087c28f296d3b2dab56e3f5d1aca1388f2be5b", amount: "0x223e68067923" },
  { address: "0x521dea4e41d3582dffc931c4100d314d0a9f7ee4", amount: "0x0f6124d14a24afa247" },
  { address: "0x23b83c2821d1e9fe5c40ce3c014d2420f2f1eeb7", amount: "0x17c355b44faafa7ffd" },
  { address: "0xd9da13de745bfa50ffaafd0a531b92f0511b72cf", amount: "0x01f672402f4b7c7bbb67" },
  { address: "0x0215c140840b896e1e371525d1f70cefbd09aafa", amount: "0x74ff3433c19d414923" },
  { address: "0x0f8c58edf65cbd972d175bfe481bc16fa8deee45", amount: "0x03c77a3c07b8c7a9c2d5" },
  { address: "0x239168974aad75472b652046255050e50a0d5fc9", amount: "0x0280eeef652d02f75ad5" },
  { address: "0x9599d89ed83e6db03d57c004f858ff82228604e4", amount: "0x182fa86ddfcb6aae45" },
  { address: "0xa968a0920bd35ad65f3bd78a934e45f020d6a1e3", amount: "0x156f8c923c2cf4a3fe" },
  { address: "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8", amount: "0x01e3047efeab6c7075a9" },
  { address: "0x2757ae02f65db7ce8cf2b2261c58f07a0170e58e", amount: "0x01bb652ac5b0069ffa" },
  { address: "0x214f14d1bae354174e940d53b60c59fa6ff5aaac", amount: "0xb3e6dc91753a5a6b61" },
  { address: "0x47547895218274e121e4219a3fd23235377a9903", amount: "0x32b7a8a9b5593d3a41" },
  { address: "0xf7c7ca163ddfe69218377ab7086bdfc9a50f4e1e", amount: "0x06ed8f41f2bc62048e" },
  { address: "0x42009b6fcdf29dd571383fc3560846c796367904", amount: "0x72c8caa2dd3c898a32" },
  { address: "0x3e4dd7e5c37fe838eaffc89a551e1c311b7d14f8", amount: "0x22a3a21dcb2434d242" },
  { address: "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588", amount: "0xad6764f88554349234" },
  { address: "0x5fcdc32dfc361a32e9d5ab9a384b890c62d0b8ac", amount: "0x010a097ffea685b6d8" },
  { address: "0x0745a468966c6be811dda6d1953fce2798efc1f1", amount: "0xde5c6d8cc71d16f369" },
  { address: "0xa62d7ad2fddbad38a0aba25e40cdfe2edfa4d183", amount: "0x22a3579b7361a92db3" },
  { address: "0xd50cbde55f8da4e8cf94f38deae2c722a5bd156b", amount: "0x43e4d8aa52d2c43244" },
  { address: "0xc24dc96768d7a96ca37aa3e65787f69afaf1a354", amount: "0x22a3452f122fc11246" },
  { address: "0xc64844d9b3db280a6e46c1431e2229cd62dd2d69", amount: "0x749bcf1e736ad8891f" },
  { address: "0x4ea4309e5fcb06201ea54e0fb149de522138cdc7", amount: "0x0343b7a5f901cda7e486" },
  { address: "0x5a1b8d6a57445deced8f816310fdb0aa6367cf10", amount: "0x048c791e136ed64db4" },
  { address: "0xe793a7a7c7b7a4cefddb30f856b01f36e51b1b82", amount: "0x02af1881386dc23242" },
  { address: "0xa4fd65694a9708c2d204bdf7acf8b9c09b105903", amount: "0x0f8364cd46f0f8d243" },
  { address: "0xf44593dfae05bff213c876a8e1fdcc15a45964df", amount: "0x33b5fa773a507556d9" },
  { address: "0x5d12aa6a6001fb326332c3801c6bd12449b6e44e", amount: "0x0108b5e875dd018490" },
  { address: "0x9578e8369369fa05e5f2fc8d80a234ad2f8608a8", amount: "0x0f82858f1a97eb9244" },
  { address: "0xebe4d96a48c4d0659fadfcae5a132de3a5733374", amount: "0x14af30fc5e1d2cf244" },
  { address: "0x7076106c13ca93805f2b16c52e64d3592d55457b", amount: "0x2d6be42a15482866d0" },
  { address: "0xcdc8698745db38280d649fb9e7322d899c4a1bd0", amount: "0x33b3045967adbae48e" },
  { address: "0x66a4f5d0b57d86bf1b9bfc63e991a9387791fdcd", amount: "0x85331120bfb874f48b" },
  { address: "0x9cdbddf646a86ec987394c807defed498dbc7df4", amount: "0x014ae043b07be6b6d8" },
  { address: "0xe922bc2ad029b1efafc3eb3ff776219c3dfbb625", amount: "0x19dafd3b82d063adb2" },
  { address: "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65", amount: "0x285e534853523b" },
  { address: "0xb92a1d5c73a69a0d72820f6f6221c5a81edb7cc0", amount: "0x35599edc768b188ff7" },
  { address: "0xb0d6ae7784a9f20c1e34218998f0fc5c24972441", amount: "0x33b20693f7badfbffe" },
  { address: "0x9730299b10a30bdbaf81815c99b4657c685314ab", amount: "0x0295e61f28fa3f66d8" },
  { address: "0x5e4568c4d8343052a06ec8aab1e124af08b73248", amount: "0x014af30f875134348e" },
  { address: "0xce27fa2d00b91c9486e3545c75cd7df86d4e3632", amount: "0x0a8c6c02fb71a94244" },
  { address: "0x70e439584ef1ba300106b9c16543eaa1de676dc2", amount: "0x76e954028112f3cffc" },
  { address: "0xeb434da562e7a8ba045472fd1e134b420771ef7a", amount: "0x67671a025a936ce91f" },
  { address: "0x3ac7084e8ce0757261b79f87a8e417d2df3d24d3", amount: "0x0350ebec5c7c49c68ff5" },
  { address: "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422", amount: "0x0219bcc7a8a7e47c06c6" },
  { address: "0xe1e2a52a21226ba37f28ba6cdf59f20156798f94", amount: "0x014f4a273f769de23b63" },
  { address: "0xef764bac8a438e7e498c2e5fccf0f174c3e3f8db", amount: "0x0a21781363be02927c86" },
  { address: "0xba842b7da417ba762d75e8f99e11c2980a8f8051", amount: "0x0ea349b6aa9300ddae" },
  { address: "0x59653fd9713a30c54237a6fd21fd97ba141abbe0", amount: "0x11c5310299abcca920" },
  { address: "0x296e0c21db4061ebf971e55d5db85011e7ff9797", amount: "0x476867086f9f29b91b" },
  { address: "0x7ab29b393aad63e7119c004bb45eefeaa3e70da5", amount: "0x08f5fb731728c4f921" },
  { address: "0x318e3835baa3f83ca734d9afb9996f702aa06a3d", amount: "0x591f30a3f6b9fe736c" },
  { address: "0xeefd6537adbda7b1a9da3f6607dda26b048489c2", amount: "0x4187f75980d982c919" },
  { address: "0x37e1881f05f33f71e43bb8f284e0ed53e26520d0", amount: "0xadc9554e8a6e2b6a3b" },
  { address: "0xf71d161fdc3895f21612d79f15aa819b7a3d296a", amount: "0x051823cbd1fa8ae1fa43" },
  { address: "0xf1a1602c90d8e510bc583eabb53667e3afae4b52", amount: "0x045484b81a5b059b6b" },
  { address: "0x58e03d622a88b4012ee0a97235c6b110077fb867", amount: "0x2abc6a5e3a471cf23f" },
  { address: "0xde055950ccaaf115c8d76b33e6503ee403875ccb", amount: "0x0298ed47693de2fffe" },
  { address: "0xdb10d21f28a34fd04e4425eac777483798f7e217", amount: "0x17fa3f32bcadcf1b65" },
  { address: "0x859e1dfb430a7156faef11947f2fc2a3c34b733a", amount: "0x7a91952f8e57d257f2" },
  { address: "0xb225bf7e4f1da339195972ca7e4a1d9ff52156ce", amount: "0x15a6c6447e5f6cadb4" },
  { address: "0x5b191f5a2b4a867c4ed71858daccc51fc59c69c0", amount: "0x2e1c916a39b64cd921" },
  { address: "0x4adf9b737ab9c97f5728cbcf143483cf6c2f7df3", amount: "0x16ff2687b9e3ca3245" },
  { address: "0xf9f668901a13b2c817a9cc9d7fed50868b7af8be", amount: "0x3aa014b21e0ad49245" },
  { address: "0x7139a445ecc1a597695cc9a077caaa41e0f18391", amount: "0x03428abcd996d6" },
  { address: "0x3cf08d6a9436a1798c18d24a70f5ad0bea31775e", amount: "0x87e03c483bc4b72117" },
  { address: "0xe3db0df6a4a62106a3dd5cef76c196a53f3e7e4d", amount: "0x2df21f3a422d1fa36a" },
  { address: "0x2068d14ee50772dd6e89c6f64f32adad0cc936ef", amount: "0x22b1df002171af5b6b" },
  { address: "0x1a918a8386f75f382e2a1b2e10b807c39728caf2", amount: "0x1058dc227be870cdb2" },
  { address: "0x28af2a3c28b7ecf7d84a8ba0fddf7525a88e1f61", amount: "0x17a284b9771113b91e" },
  { address: "0x7bfee91193d9df2ac0bfe90191d40f23c773c060", amount: "0x0107667401a8f7a3c7f6" },
  { address: "0xf9f061d9a5f04e223ed3c560e03a8ab0a70cc1c4", amount: "0x5ea063ea25d7b4548e" },
  { address: "0xab12253171a0d73df64b115cd43fe0a32feb9daa", amount: "0x117c6f3e6b310d7b64" },
  { address: "0xd46c81245a0582891c2249daf2d68925977cf2a7", amount: "0x3d30bcd955df9696d6" },
  { address: "0x7eb12f04effc4901d7520e4ebd62de512743feca", amount: "0x040800a033ebb64fff" },
  { address: "0x43930ff04d18a5b59805151c1eb403c55870641e", amount: "0x0129fd0eda09a71fff" },
  { address: "0x890d3b7e8cd72ddfe6288187bb6b87118c296a75", amount: "0x052190ddcbf90156db" },
  { address: "0xf9107317b0ff77ed5b7adea15e50514a3564002b", amount: "0x02dc0738770d0cc6d6" },
  { address: "0xecc0da4bf963c23e9ec9740b1f06cb192c5195a1", amount: "0x36fa5f762fbd7e5ffb" },
  { address: "0x000f4432a40560bbff1b581a8b7aded8dab80026", amount: "0x133f41678fcf5fe48f" },
  { address: "0x56cfcaa14c2d63fef909e335733de4c6330306a7", amount: "0x0aff8ed8e4c782b6d8" },
  { address: "0x5f55980eaf5131f9fd487e1177cacb18d7609a21", amount: "0x041f95113d0b90b923" },
  { address: "0x32cd06a20b528bced096945d6d165a61e75ccd2a", amount: "0x35e228d01f8298effc" },
  { address: "0x429af9695a3936e2f22d05694775d12237f2723a", amount: "0x1043096f4ec921" },
  { address: "0x8522885d735f75b3faeea5cd39ab3d1291da2c77", amount: "0x1b7d51b7034f635245" },
  { address: "0xd8fd1ad0da93d380c96b9de5f0b6624b03b7963a", amount: "0x07b89d72d5fe9a1491" },
  { address: "0x4677b560974508e69f3611ccdef6c77af0509a47", amount: "0x057f91e21944bb9db4" },
  { address: "0x88a72a5b05cc9150a5e96d01d2eb794b98bdbfb9", amount: "0x02a7005f6311be2248" },
  { address: "0x771991fc8ce57682775ee73bb28b201f4016b090", amount: "0x1b7e0dcd4e02c176d8" },
  { address: "0xfa88c88f68fc7a66ccd512a34f7686fded60caf4", amount: "0x0afe46aa15ab3c6db3" },
  { address: "0x0dbc9a65c6fec050eeed9508a707ea4aa0aca4b9", amount: "0x8cc72374f1e9d244" },
  { address: "0x4938a9a48139ffc440a07695eec11096f8146350", amount: "0x1421dd25679fa14368" },
  { address: "0x486cd431523e776cf5cd074deecd7bdf29595f8c", amount: "0x0177de59c028069f36d7" },
  { address: "0x97836f9fc0fa0bd02fa5ddcc0194c78dc5217226", amount: "0x2594225ec3abf3e6d8" },
  { address: "0x49543e53d159dd5c9d5e232556cfc2781a2d5044", amount: "0x12cac40c23c998d48f" },
  { address: "0x330e75e1f48b1ee968197cc870511665a4a5a832", amount: "0x429c3bce686db4" },
  { address: "0xf71181c9f91f85149d629f37b8c27afca0fd5ea1", amount: "0x1b898290da430c8923" },
  { address: "0xa4d4448f2328889d79015975a7b4de27649e1ff6", amount: "0x058c440900073bbffe" },
  { address: "0x50a708e5dfe836601931af3ff6169e5f4e5536ea", amount: "0x0493b732b9e4eecdb2" },
  { address: "0xba4074ca3e68095d9a490008fcb68e9ab205636a", amount: "0x37792531e80a572920" },
  { address: "0x0658b634aae5e7dbfa7510d6940ffd497df06727", amount: "0x116203930f40b0d91e" },
  { address: "0x396a6d7a33655c45044143cb8a812227bf279578", amount: "0x7b9332af5565c0bffc" },
  { address: "0xaf8a08ddaedd2378b8075f8b90cee4b066ae0df7", amount: "0x01b21fdf7f7f506922" },
  { address: "0xebfb476e0f9c8d74f0fce72b688d7177dcbb73c2", amount: "0x037e258aabbe7c1b6a" },
  { address: "0xa0ce55801b0b88f2df2ef026eb8da79e9f0ad9c1", amount: "0x0297b2caa37fafd6d7" },
  { address: "0x3f7e19951dfe627d839b17c2b515324fc5103af4", amount: "0x1b5eae8a0ba4d8bb6d" },
  { address: "0xcbd6b0dee49eea88a3343ff4e5a2423586b4c1d6", amount: "0x22c876f56822cc76d9" },
  { address: "0x4f942119e6ab0a6e4368e795d1d64291a3ff0da4", amount: "0x1c12aa23400ba876d9" },
  { address: "0xf927f23ce9d81270b5c6802ea4d7da1a346fafe2", amount: "0x0eb152814fb0737ffd" },
  { address: "0x53dc3204f2f294f6a5649a36ac295f74a0db92e0", amount: "0x0185ad935ac0b43491" },
  { address: "0x4d940a53ff1f2515b577c5afc9cdfbbe588c4231", amount: "0x2f62277a8f4a1e6fff" },
  { address: "0x97d157a8dc39e9e17ae498b308bc69b4bb790125", amount: "0x193d1ae1c0960d24" },
  { address: "0x87474eb5e6f15c5b770c7a68b37342830211ea9c", amount: "0x21e2663e85d560a5b5" },
  { address: "0x056590f16d5b314a132bbcfb1283fec5d5c6e670", amount: "0x02eb4d780f594ff247" },
  { address: "0x50422d5a52d9a4adaf8123ffd46a323056e4fb37", amount: "0x05aaccab53fb243923" },
  { address: "0xf2eaeb6a0c248bcd69fd314180d69907b9be7491", amount: "0x321df075cb435ec248" },
  { address: "0xef47003f0e276eb0fb60b626e80554dd7adcdd11", amount: "0x87a064607ff09bc5b5" },
  { address: "0x3cb07d1f0620090bb667df1a5c90b4b80f8ede73", amount: "0xce27f97ec1bdf5e123" },
  { address: "0x0d9f37c75f7df825a7f02bd39df333485853f4a9", amount: "0x010a70665d46c4bb6d" },
  { address: "0x519e19eac9ead404343c68224dd2a22c5c25f992", amount: "0x23b12cceea47aaadb6" },
  { address: "0x3d0d2b7ce092bfdbb02e1ae1e904d16459613776", amount: "0x01d3af7cc6e2b6db6d" },
  { address: "0x51318c2f3e7d9735eae7e9c9838bb972742470e5", amount: "0x057356ef08018db6db" },
  { address: "0xa8c602638e910a5eee8bcf190acf3e2d4c022338", amount: "0x09d73bc2867a51fffe" },
  { address: "0xc1a4e84588c397adb26486ba0dde28ac8bb54759", amount: "0x0ec5e1e6a4fb2e6923" },
  { address: "0x3f9c50665dda1b64146fa0074ad4d87e75829e90", amount: "0x81e63997e02c4fff" },
];