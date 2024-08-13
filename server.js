const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cron = require('node-cron');

const app = express();
const port = 3000;

// PostgreSQL connection pool setup
const pool = new Pool({
  user: 'u3m7grklvtlo6',
  host: '35.209.89.182',
  database: 'dbhk4x9gwus6mw',
  password: 'AekAds@24',
  port: 5432,
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Function to format dates for datetime-local input
const formatDateForInput = (date) => {
  if (!date) return '';
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

// Route to render the form
app.get('/form', (req, res) => {
  res.render('form');
});

// Route to handle form submission
app.post('/submit', async (req, res) => {
  const {
    playlistname,
    playlistdescription,
    screenid,
    slot1,
    slot1_updatetime,
    slot1_deletetime,
    slot2,
    slot2_updatetime,
    slot2_deletetime,
    slot3,
    slot3_updatetime,
    slot3_deletetime,
    slot4,
    slot4_updatetime,
    slot4_deletetime,
    slot5,
    slot5_updatetime,
    slot5_deletetime,
    slot6 ,
    slot6_updatetime ,
    slot6_deletetime ,

slot7 ,
    slot7_updatetime ,
    slot7_deletetime ,

slot8 ,
    slot8_updatetime ,
    slot8_deletetime ,

slot9 ,
    slot9_updatetime ,
    slot9_deletetime ,

slot10 ,
    slot10_updatetime ,
    slot10_deletetime ,

slot11 ,
    slot11_updatetime ,
    slot11_deletetime ,

slot12 ,
    slot12_updatetime ,
    slot12_deletetime ,

slot13 ,
    slot13_updatetime ,
    slot13_deletetime ,

slot14 ,
    slot14_updatetime ,
    slot14_deletetime ,

slot15 ,
    slot15_updatetime ,
    slot15_deletetime ,

slot16 ,
    slot16_updatetime ,
    slot16_deletetime ,

slot17 ,
    slot17_updatetime ,
    slot17_deletetime ,

slot18 ,
    slot18_updatetime ,
    slot18_deletetime ,

slot19 ,
    slot19_updatetime ,
    slot19_deletetime ,

slot20 ,
    slot20_updatetime ,
    slot20_deletetime ,

slot21 ,
    slot21_updatetime ,
    slot21_deletetime ,

slot22 ,
    slot22_updatetime ,
    slot22_deletetime ,

slot23 ,
    slot23_updatetime ,
    slot23_deletetime ,

slot24 ,
    slot24_updatetime ,
    slot24_deletetime ,

slot25 ,
    slot25_updatetime ,
    slot25_deletetime ,

slot26 ,
    slot26_updatetime ,
    slot26_deletetime ,

slot27 ,
    slot27_updatetime ,
    slot27_deletetime ,

slot28 ,
    slot28_updatetime ,
    slot28_deletetime ,

slot29 ,
    slot29_updatetime ,
    slot29_deletetime ,

slot30 ,
    slot30_updatetime ,
    slot30_deletetime ,

slot31 ,
    slot31_updatetime ,
    slot31_deletetime ,

slot32 ,
    slot32_updatetime ,
    slot32_deletetime ,

slot33 ,
    slot33_updatetime ,
    slot33_deletetime ,

slot34 ,
    slot34_updatetime ,
    slot34_deletetime ,

slot35 ,
    slot35_updatetime ,
    slot35_deletetime ,

slot36 ,
    slot36_updatetime ,
    slot36_deletetime ,

slot37 ,
    slot37_updatetime ,
    slot37_deletetime ,

slot38 ,
    slot38_updatetime ,
    slot38_deletetime ,

slot39 ,
    slot39_updatetime ,
    slot39_deletetime ,

slot40 ,
    slot40_updatetime ,
    slot40_deletetime ,

slot41 ,
    slot41_updatetime ,
    slot41_deletetime ,

slot42 ,
    slot42_updatetime ,
    slot42_deletetime ,

slot43 ,
    slot43_updatetime ,
    slot43_deletetime ,

slot44 ,
    slot44_updatetime ,
    slot44_deletetime ,

slot45 ,
    slot45_updatetime ,
    slot45_deletetime ,

slot46 ,
    slot46_updatetime ,
    slot46_deletetime ,

slot47 ,
    slot47_updatetime ,
    slot47_deletetime ,

slot48 ,
    slot48_updatetime ,
    slot48_deletetime ,

slot49 ,
    slot49_updatetime ,
    slot49_deletetime ,

slot50 ,
    slot50_updatetime ,
    slot50_deletetime ,

slot51 ,
    slot51_updatetime ,
    slot51_deletetime ,

slot52 ,
    slot52_updatetime ,
    slot52_deletetime ,

slot53 ,
    slot53_updatetime ,
    slot53_deletetime ,

slot54 ,
    slot54_updatetime ,
    slot54_deletetime ,

slot55 ,
    slot55_updatetime ,
    slot55_deletetime ,

slot56 ,
    slot56_updatetime ,
    slot56_deletetime ,

slot57 ,
    slot57_updatetime ,
    slot57_deletetime ,

slot58 ,
    slot58_updatetime ,
    slot58_deletetime ,

slot59 ,
    slot59_updatetime ,
    slot59_deletetime ,

slot60 ,
    slot60_updatetime ,
    slot60_deletetime ,

slot61 ,
    slot61_updatetime ,
    slot61_deletetime ,

slot62 ,
    slot62_updatetime ,
    slot62_deletetime ,

slot63 ,
    slot63_updatetime ,
    slot63_deletetime ,

slot64 ,
    slot64_updatetime ,
    slot64_deletetime ,

slot65 ,
    slot65_updatetime ,
    slot65_deletetime ,

slot66 ,
    slot66_updatetime ,
    slot66_deletetime ,

slot67 ,
    slot67_updatetime ,
    slot67_deletetime ,

slot68 ,
    slot68_updatetime ,
    slot68_deletetime ,

slot69 ,
    slot69_updatetime ,
    slot69_deletetime ,

slot70 ,
    slot70_updatetime ,
    slot70_deletetime ,

slot71 ,
    slot71_updatetime ,
    slot71_deletetime ,

slot72 ,
    slot72_updatetime ,
    slot72_deletetime ,

slot73 ,
    slot73_updatetime ,
    slot73_deletetime ,

slot74 ,
    slot74_updatetime ,
    slot74_deletetime ,

slot75 ,
    slot75_updatetime ,
    slot75_deletetime ,

slot76 ,
    slot76_updatetime ,
    slot76_deletetime ,

slot77 ,
    slot77_updatetime ,
    slot77_deletetime ,

slot78 ,
    slot78_updatetime ,
    slot78_deletetime ,

slot79 ,
    slot79_updatetime ,
    slot79_deletetime ,

slot80 ,
    slot80_updatetime ,
    slot80_deletetime ,

slot81 ,
    slot81_updatetime ,
    slot81_deletetime ,

slot82 ,
    slot82_updatetime ,
    slot82_deletetime ,

slot83 ,
    slot83_updatetime ,
    slot83_deletetime ,

slot84 ,
    slot84_updatetime ,
    slot84_deletetime ,

slot85 ,
    slot85_updatetime ,
    slot85_deletetime ,

slot86 ,
    slot86_updatetime ,
    slot86_deletetime ,

slot87 ,
    slot87_updatetime ,
    slot87_deletetime ,

slot88 ,
    slot88_updatetime ,
    slot88_deletetime ,

slot89 ,
    slot89_updatetime ,
    slot89_deletetime ,

slot90 ,
    slot90_updatetime ,
    slot90_deletetime ,

slot91 ,
    slot91_updatetime ,
    slot91_deletetime ,

slot92 ,
    slot92_updatetime ,
    slot92_deletetime ,

slot93 ,
    slot93_updatetime ,
    slot93_deletetime ,

slot94 ,
    slot94_updatetime ,
    slot94_deletetime ,

slot95 ,
    slot95_updatetime ,
    slot95_deletetime ,

slot96 ,
    slot96_updatetime ,
    slot96_deletetime ,

slot97 ,
    slot97_updatetime ,
    slot97_deletetime ,

slot98 ,
    slot98_updatetime ,
    slot98_deletetime ,

slot99 ,
    slot99_updatetime ,
    slot99_deletetime ,

slot100 ,
    slot100_updatetime ,
    slot100_deletetime ,
 
  
 layout_1 ,
 layout_2 ,
 layout_3 ,
 layout_4 ,
 layout_5 ,
 layout_6 ,
 layout_7 ,
 layout_8 ,
 layout_9 ,
 layout_10 ,
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  } = req.body;
  console.log('screen_id:', screenid);

  const screenidArray = screenid.split(',').map(id => parseInt(id.trim(), 10));
  const parseTimestamp = (value) => value ? new Date(value) : null;

  try {
    await pool.query(
      `INSERT INTO playlists1235 (playlistname, playlistdescription, screen_id, 
        slot1, slot1_updatetime, slot1_deletetime, slot1_update_status, slot1_delete_status, 
        slot2, slot2_updatetime, slot2_deletetime, slot2_update_status, slot2_delete_status, 
        slot3, slot3_updatetime, slot3_deletetime, slot3_update_status, slot3_delete_status, 
        slot4, slot4_updatetime, slot4_deletetime, slot4_update_status, slot4_delete_status, 
        slot5, slot5_updatetime, slot5_deletetime, slot5_update_status, slot5_delete_status,
        slot6, slot6_updatetime, slot6_deletetime, slot6_update_status, slot6_delete_status,
slot7, slot7_updatetime, slot7_deletetime, slot7_update_status, slot7_delete_status,
slot8, slot8_updatetime, slot8_deletetime, slot8_update_status, slot8_delete_status,
slot9, slot9_updatetime, slot9_deletetime, slot9_update_status, slot9_delete_status,
slot10, slot10_updatetime, slot10_deletetime, slot10_update_status, slot10_delete_status,
slot11, slot11_updatetime, slot11_deletetime, slot11_update_status, slot11_delete_status,
slot12, slot12_updatetime, slot12_deletetime, slot12_update_status, slot12_delete_status,
slot13, slot13_updatetime, slot13_deletetime, slot13_update_status, slot13_delete_status,
slot14, slot14_updatetime, slot14_deletetime, slot14_update_status, slot14_delete_status,
slot15, slot15_updatetime, slot15_deletetime, slot15_update_status, slot15_delete_status,
slot16, slot16_updatetime, slot16_deletetime, slot16_update_status, slot16_delete_status,
slot17, slot17_updatetime, slot17_deletetime, slot17_update_status, slot17_delete_status,
slot18, slot18_updatetime, slot18_deletetime, slot18_update_status, slot18_delete_status,
slot19, slot19_updatetime, slot19_deletetime, slot19_update_status, slot19_delete_status,
slot20, slot20_updatetime, slot20_deletetime, slot20_update_status, slot20_delete_status,
slot21, slot21_updatetime, slot21_deletetime, slot21_update_status, slot21_delete_status,
slot22, slot22_updatetime, slot22_deletetime, slot22_update_status, slot22_delete_status,
slot23, slot23_updatetime, slot23_deletetime, slot23_update_status, slot23_delete_status,
slot24, slot24_updatetime, slot24_deletetime, slot24_update_status, slot24_delete_status,
slot25, slot25_updatetime, slot25_deletetime, slot25_update_status, slot25_delete_status,
slot26, slot26_updatetime, slot26_deletetime, slot26_update_status, slot26_delete_status,
slot27, slot27_updatetime, slot27_deletetime, slot27_update_status, slot27_delete_status,
slot28, slot28_updatetime, slot28_deletetime, slot28_update_status, slot28_delete_status,
slot29, slot29_updatetime, slot29_deletetime, slot29_update_status, slot29_delete_status,
slot30, slot30_updatetime, slot30_deletetime, slot30_update_status, slot30_delete_status,
slot31, slot31_updatetime, slot31_deletetime, slot31_update_status, slot31_delete_status,
slot32, slot32_updatetime, slot32_deletetime, slot32_update_status, slot32_delete_status,
slot33, slot33_updatetime, slot33_deletetime, slot33_update_status, slot33_delete_status,
slot34, slot34_updatetime, slot34_deletetime, slot34_update_status, slot34_delete_status,
slot35, slot35_updatetime, slot35_deletetime, slot35_update_status, slot35_delete_status,
slot36, slot36_updatetime, slot36_deletetime, slot36_update_status, slot36_delete_status,
slot37, slot37_updatetime, slot37_deletetime, slot37_update_status, slot37_delete_status,
slot38, slot38_updatetime, slot38_deletetime, slot38_update_status, slot38_delete_status,
slot39, slot39_updatetime, slot39_deletetime, slot39_update_status, slot39_delete_status,
slot40, slot40_updatetime, slot40_deletetime, slot40_update_status, slot40_delete_status,
slot41, slot41_updatetime, slot41_deletetime, slot41_update_status, slot41_delete_status,
slot42, slot42_updatetime, slot42_deletetime, slot42_update_status, slot42_delete_status,
slot43, slot43_updatetime, slot43_deletetime, slot43_update_status, slot43_delete_status,
slot44, slot44_updatetime, slot44_deletetime, slot44_update_status, slot44_delete_status,
slot45, slot45_updatetime, slot45_deletetime, slot45_update_status, slot45_delete_status,
slot46, slot46_updatetime, slot46_deletetime, slot46_update_status, slot46_delete_status,
slot47, slot47_updatetime, slot47_deletetime, slot47_update_status, slot47_delete_status,
slot48, slot48_updatetime, slot48_deletetime, slot48_update_status, slot48_delete_status,
slot49, slot49_updatetime, slot49_deletetime, slot49_update_status, slot49_delete_status,
slot50, slot50_updatetime, slot50_deletetime, slot50_update_status, slot50_delete_status,
slot51, slot51_updatetime, slot51_deletetime, slot51_update_status, slot51_delete_status,
slot52, slot52_updatetime, slot52_deletetime, slot52_update_status, slot52_delete_status,
slot53, slot53_updatetime, slot53_deletetime, slot53_update_status, slot53_delete_status,
slot54, slot54_updatetime, slot54_deletetime, slot54_update_status, slot54_delete_status,
slot55, slot55_updatetime, slot55_deletetime, slot55_update_status, slot55_delete_status,
slot56, slot56_updatetime, slot56_deletetime, slot56_update_status, slot56_delete_status,
slot57, slot57_updatetime, slot57_deletetime, slot57_update_status, slot57_delete_status,
slot58, slot58_updatetime, slot58_deletetime, slot58_update_status, slot58_delete_status,
slot59, slot59_updatetime, slot59_deletetime, slot59_update_status, slot59_delete_status,
slot60, slot60_updatetime, slot60_deletetime, slot60_update_status, slot60_delete_status,
slot61, slot61_updatetime, slot61_deletetime, slot61_update_status, slot61_delete_status,
slot62, slot62_updatetime, slot62_deletetime, slot62_update_status, slot62_delete_status,
slot63, slot63_updatetime, slot63_deletetime, slot63_update_status, slot63_delete_status,
slot64, slot64_updatetime, slot64_deletetime, slot64_update_status, slot64_delete_status,
slot65, slot65_updatetime, slot65_deletetime, slot65_update_status, slot65_delete_status,
slot66, slot66_updatetime, slot66_deletetime, slot66_update_status, slot66_delete_status,
slot67, slot67_updatetime, slot67_deletetime, slot67_update_status, slot67_delete_status,
slot68, slot68_updatetime, slot68_deletetime, slot68_update_status, slot68_delete_status,
slot69, slot69_updatetime, slot69_deletetime, slot69_update_status, slot69_delete_status,
slot70, slot70_updatetime, slot70_deletetime, slot70_update_status, slot70_delete_status,
slot71, slot71_updatetime, slot71_deletetime, slot71_update_status, slot71_delete_status,
slot72, slot72_updatetime, slot72_deletetime, slot72_update_status, slot72_delete_status,
slot73, slot73_updatetime, slot73_deletetime, slot73_update_status, slot73_delete_status,
slot74, slot74_updatetime, slot74_deletetime, slot74_update_status, slot74_delete_status,
slot75, slot75_updatetime, slot75_deletetime, slot75_update_status, slot75_delete_status,
slot76, slot76_updatetime, slot76_deletetime, slot76_update_status, slot76_delete_status,
slot77, slot77_updatetime, slot77_deletetime, slot77_update_status, slot77_delete_status,
slot78, slot78_updatetime, slot78_deletetime, slot78_update_status, slot78_delete_status,
slot79, slot79_updatetime, slot79_deletetime, slot79_update_status, slot79_delete_status,
slot80, slot80_updatetime, slot80_deletetime, slot80_update_status, slot80_delete_status,
slot81, slot81_updatetime, slot81_deletetime, slot81_update_status, slot81_delete_status,
slot82, slot82_updatetime, slot82_deletetime, slot82_update_status, slot82_delete_status,
slot83, slot83_updatetime, slot83_deletetime, slot83_update_status, slot83_delete_status,
slot84, slot84_updatetime, slot84_deletetime, slot84_update_status, slot84_delete_status,
slot85, slot85_updatetime, slot85_deletetime, slot85_update_status, slot85_delete_status,
slot86, slot86_updatetime, slot86_deletetime, slot86_update_status, slot86_delete_status,
slot87, slot87_updatetime, slot87_deletetime, slot87_update_status, slot87_delete_status,
slot88, slot88_updatetime, slot88_deletetime, slot88_update_status, slot88_delete_status,
slot89, slot89_updatetime, slot89_deletetime, slot89_update_status, slot89_delete_status,
slot90, slot90_updatetime, slot90_deletetime, slot90_update_status, slot90_delete_status,
slot91, slot91_updatetime, slot91_deletetime, slot91_update_status, slot91_delete_status,
slot92, slot92_updatetime, slot92_deletetime, slot92_update_status, slot92_delete_status,
slot93, slot93_updatetime, slot93_deletetime, slot93_update_status, slot93_delete_status,
slot94, slot94_updatetime, slot94_deletetime, slot94_update_status, slot94_delete_status,
slot95, slot95_updatetime, slot95_deletetime, slot95_update_status, slot95_delete_status,
slot96, slot96_updatetime, slot96_deletetime, slot96_update_status, slot96_delete_status,
slot97, slot97_updatetime, slot97_deletetime, slot97_update_status, slot97_delete_status,
slot98, slot98_updatetime, slot98_deletetime, slot98_update_status, slot98_delete_status,
slot99, slot99_updatetime, slot99_deletetime, slot99_update_status, slot99_delete_status,
slot100, slot100_updatetime, slot100_deletetime, slot100_update_status, slot100_delete_status,
 layout_1 ,
 layout_2 ,
 layout_3 ,
 layout_4 ,
 layout_5 ,
 layout_6 ,
 layout_7 ,
 layout_8 ,
 layout_9 ,
 layout_10 ) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
$11, $12, $13, $14, $15, $16, $17, $18, $19, $20,
$21, $22, $23, $24, $25, $26, $27, $28, $29, $30,
$31, $32, $33, $34, $35, $36, $37, $38, $39, $40,
$41, $42, $43, $44, $45, $46, $47, $48, $49, $50,
$51, $52, $53, $54, $55, $56, $57, $58, $59, $60,
$61, $62, $63, $64, $65, $66, $67, $68, $69, $70,
$71, $72, $73, $74, $75, $76, $77, $78, $79, $80,
$81, $82, $83, $84, $85, $86, $87, $88, $89, $90,
$91, $92, $93, $94, $95, $96, $97, $98, $99, $100,
$101, $102, $103, $104, $105, $106, $107, $108, $109, $110,
$111, $112, $113, $114, $115, $116, $117, $118, $119, $120,
$121, $122, $123, $124, $125, $126, $127, $128, $129, $130,
$131, $132, $133, $134, $135, $136, $137, $138, $139, $140,
$141, $142, $143, $144, $145, $146, $147, $148, $149, $150,
$151, $152, $153, $154, $155, $156, $157, $158, $159, $160,
$161, $162, $163, $164, $165, $166, $167, $168, $169, $170,
$171, $172, $173, $174, $175, $176, $177, $178, $179, $180,
$181, $182, $183, $184, $185, $186, $187, $188, $189, $190,
$191, $192, $193, $194, $195, $196, $197, $198, $199, $200,
$201, $202, $203, $204, $205, $206, $207, $208, $209, $210,
$211, $212, $213, $214, $215, $216, $217, $218, $219, $220,
$221, $222, $223, $224, $225, $226, $227, $228, $229, $230,
$231, $232, $233, $234, $235, $236, $237, $238, $239, $240,
$241, $242, $243, $244, $245, $246, $247, $248, $249, $250,
$251, $252, $253, $254, $255, $256, $257, $258, $259, $260,
$261, $262, $263, $264, $265, $266, $267, $268, $269, $270,
$271, $272, $273, $274, $275, $276, $277, $278, $279, $280,
$281, $282, $283, $284, $285, $286, $287, $288, $289, $290,
$291, $292, $293, $294, $295, $296, $297, $298, $299, $300,
$301, $302, $303, $304, $305, $306, $307, $308, $309, $310,
$311, $312, $313, $314, $315, $316, $317, $318, $319, $320,
$321, $322, $323, $324, $325, $326, $327, $328, $329, $330,
$331, $332, $333, $334, $335, $336, $337, $338, $339, $340,
$341, $342, $343, $344, $345, $346, $347, $348, $349, $350,
$351, $352, $353, $354, $355, $356, $357, $358, $359, $360,
$361, $362, $363, $364, $365, $366, $367, $368, $369, $370,
$371, $372, $373, $374, $375, $376, $377, $378, $379, $380,
$381, $382, $383, $384, $385, $386, $387, $388, $389, $390,
$391, $392, $393, $394, $395, $396, $397, $398, $399, $400,
$401, $402, $403, $404, $405, $406, $407, $408, $409, $410,
$411, $412, $413, $414, $415, $416, $417, $418, $419, $420,
$421, $422, $423, $424, $425, $426, $427, $428, $429, $430,
$431, $432, $433, $434, $435, $436, $437, $438, $439, $440,
$441, $442, $443, $444, $445, $446, $447, $448, $449, $450,
$451, $452, $453, $454, $455, $456, $457, $458, $459, $460,
$461, $462, $463, $464, $465, $466, $467, $468, $469, $470,
$471, $472, $473, $474, $475, $476, $477, $478, $479, $480,
$481, $482, $483, $484, $485, $486, $487, $488, $489, $490,
$491, $492, $493, $494, $495, $496, $497, $498, $499, $500,
$501, $502, $503, $504, $505, $506, $507, $508, $509, $510,
$511, $512, $513)`,
      [
        playlistname,
        playlistdescription,
        `{${screenidArray.join(',')}}`,
        slot1,
        parseTimestamp(slot1_updatetime),
        parseTimestamp(slot1_deletetime),
        'pending',
        'pending',
        slot2,
        parseTimestamp(slot2_updatetime),
        parseTimestamp(slot2_deletetime),
        'pending',
        'pending',
        slot3,
        parseTimestamp(slot3_updatetime),
        parseTimestamp(slot3_deletetime),
        'pending',
        'pending',
        slot4,
        parseTimestamp(slot4_updatetime),
        parseTimestamp(slot4_deletetime),
        'pending',
        'pending',
        slot5,
        parseTimestamp(slot5_updatetime),
        parseTimestamp(slot5_deletetime),
        'pending',
        'pending',
        slot6,
parseTimestamp(slot6_updatetime),
parseTimestamp(slot6_deletetime),
'pending',
'pending',
slot7,
parseTimestamp(slot7_updatetime),
parseTimestamp(slot7_deletetime),
'pending',
'pending',
slot8,
parseTimestamp(slot8_updatetime),
parseTimestamp(slot8_deletetime),
'pending',
'pending',
slot9,
parseTimestamp(slot9_updatetime),
parseTimestamp(slot9_deletetime),
'pending',
'pending',
slot10,
parseTimestamp(slot10_updatetime),
parseTimestamp(slot10_deletetime),
'pending',
'pending',
slot11,
parseTimestamp(slot11_updatetime),
parseTimestamp(slot11_deletetime),
'pending',
'pending',
slot12,
parseTimestamp(slot12_updatetime),
parseTimestamp(slot12_deletetime),
'pending',
'pending',
slot13,
parseTimestamp(slot13_updatetime),
parseTimestamp(slot13_deletetime),
'pending',
'pending',
slot14,
parseTimestamp(slot14_updatetime),
parseTimestamp(slot14_deletetime),
'pending',
'pending',
slot15,
parseTimestamp(slot15_updatetime),
parseTimestamp(slot15_deletetime),
'pending',
'pending',
slot16,
parseTimestamp(slot16_updatetime),
parseTimestamp(slot16_deletetime),
'pending',
'pending',
slot17,
parseTimestamp(slot17_updatetime),
parseTimestamp(slot17_deletetime),
'pending',
'pending',
slot18,
parseTimestamp(slot18_updatetime),
parseTimestamp(slot18_deletetime),
'pending',
'pending',
slot19,
parseTimestamp(slot19_updatetime),
parseTimestamp(slot19_deletetime),
'pending',
'pending',
slot20,
parseTimestamp(slot20_updatetime),
parseTimestamp(slot20_deletetime),
'pending',
'pending',
slot21,
parseTimestamp(slot21_updatetime),
parseTimestamp(slot21_deletetime),
'pending',
'pending',
slot22,
parseTimestamp(slot22_updatetime),
parseTimestamp(slot22_deletetime),
'pending',
'pending',
slot23,
parseTimestamp(slot23_updatetime),
parseTimestamp(slot23_deletetime),
'pending',
'pending',
slot24,
parseTimestamp(slot24_updatetime),
parseTimestamp(slot24_deletetime),
'pending',
'pending',
slot25,
parseTimestamp(slot25_updatetime),
parseTimestamp(slot25_deletetime),
'pending',
'pending',
slot26,
parseTimestamp(slot26_updatetime),
parseTimestamp(slot26_deletetime),
'pending',
'pending',
slot27,
parseTimestamp(slot27_updatetime),
parseTimestamp(slot27_deletetime),
'pending',
'pending',
slot28,
parseTimestamp(slot28_updatetime),
parseTimestamp(slot28_deletetime),
'pending',
'pending',
slot29,
parseTimestamp(slot29_updatetime),
parseTimestamp(slot29_deletetime),
'pending',
'pending',
slot30,
parseTimestamp(slot30_updatetime),
parseTimestamp(slot30_deletetime),
'pending',
'pending',
slot31,
parseTimestamp(slot31_updatetime),
parseTimestamp(slot31_deletetime),
'pending',
'pending',
slot32,
parseTimestamp(slot32_updatetime),
parseTimestamp(slot32_deletetime),
'pending',
'pending',
slot33,
parseTimestamp(slot33_updatetime),
parseTimestamp(slot33_deletetime),
'pending',
'pending',
slot34,
parseTimestamp(slot34_updatetime),
parseTimestamp(slot34_deletetime),
'pending',
'pending',
slot35,
parseTimestamp(slot35_updatetime),
parseTimestamp(slot35_deletetime),
'pending',
'pending',
slot36,
parseTimestamp(slot36_updatetime),
parseTimestamp(slot36_deletetime),
'pending',
'pending',
slot37,
parseTimestamp(slot37_updatetime),
parseTimestamp(slot37_deletetime),
'pending',
'pending',
slot38,
parseTimestamp(slot38_updatetime),
parseTimestamp(slot38_deletetime),
'pending',
'pending',
slot39,
parseTimestamp(slot39_updatetime),
parseTimestamp(slot39_deletetime),
'pending',
'pending',
slot40,
parseTimestamp(slot40_updatetime),
parseTimestamp(slot40_deletetime),
'pending',
'pending',
slot41,
parseTimestamp(slot41_updatetime),
parseTimestamp(slot41_deletetime),
'pending',
'pending',
slot42,
parseTimestamp(slot42_updatetime),
parseTimestamp(slot42_deletetime),
'pending',
'pending',
slot43,
parseTimestamp(slot43_updatetime),
parseTimestamp(slot43_deletetime),
'pending',
'pending',
slot44,
parseTimestamp(slot44_updatetime),
parseTimestamp(slot44_deletetime),
'pending',
'pending',
slot45,
parseTimestamp(slot45_updatetime),
parseTimestamp(slot45_deletetime),
'pending',
'pending',
slot46,
parseTimestamp(slot46_updatetime),
parseTimestamp(slot46_deletetime),
'pending',
'pending',
slot47,
parseTimestamp(slot47_updatetime),
parseTimestamp(slot47_deletetime),
'pending',
'pending',
slot48,
parseTimestamp(slot48_updatetime),
parseTimestamp(slot48_deletetime),
'pending',
'pending',
slot49,
parseTimestamp(slot49_updatetime),
parseTimestamp(slot49_deletetime),
'pending',
'pending',
slot50,
parseTimestamp(slot50_updatetime),
parseTimestamp(slot50_deletetime),
'pending',
'pending',
slot51,
parseTimestamp(slot51_updatetime),
parseTimestamp(slot51_deletetime),
'pending',
'pending',
slot52,
parseTimestamp(slot52_updatetime),
parseTimestamp(slot52_deletetime),
'pending',
'pending',
slot53,
parseTimestamp(slot53_updatetime),
parseTimestamp(slot53_deletetime),
'pending',
'pending',
slot54,
parseTimestamp(slot54_updatetime),
parseTimestamp(slot54_deletetime),
'pending',
'pending',
slot55,
parseTimestamp(slot55_updatetime),
parseTimestamp(slot55_deletetime),
'pending',
'pending',
slot56,
parseTimestamp(slot56_updatetime),
parseTimestamp(slot56_deletetime),
'pending',
'pending',
slot57,
parseTimestamp(slot57_updatetime),
parseTimestamp(slot57_deletetime),
'pending',
'pending',
slot58,
parseTimestamp(slot58_updatetime),
parseTimestamp(slot58_deletetime),
'pending',
'pending',
slot59,
parseTimestamp(slot59_updatetime),
parseTimestamp(slot59_deletetime),
'pending',
'pending',
slot60,
parseTimestamp(slot60_updatetime),
parseTimestamp(slot60_deletetime),
'pending',
'pending',
slot61,
parseTimestamp(slot61_updatetime),
parseTimestamp(slot61_deletetime),
'pending',
'pending',
slot62,
parseTimestamp(slot62_updatetime),
parseTimestamp(slot62_deletetime),
'pending',
'pending',
slot63,
parseTimestamp(slot63_updatetime),
parseTimestamp(slot63_deletetime),
'pending',
'pending',
slot64,
parseTimestamp(slot64_updatetime),
parseTimestamp(slot64_deletetime),
'pending',
'pending',
slot65,
parseTimestamp(slot65_updatetime),
parseTimestamp(slot65_deletetime),
'pending',
'pending',
slot66,
parseTimestamp(slot66_updatetime),
parseTimestamp(slot66_deletetime),
'pending',
'pending',
slot67,
parseTimestamp(slot67_updatetime),
parseTimestamp(slot67_deletetime),
'pending',
'pending',
slot68,
parseTimestamp(slot68_updatetime),
parseTimestamp(slot68_deletetime),
'pending',
'pending',
slot69,
parseTimestamp(slot69_updatetime),
parseTimestamp(slot69_deletetime),
'pending',
'pending',
slot70,
parseTimestamp(slot70_updatetime),
parseTimestamp(slot70_deletetime),
'pending',
'pending',
slot71,
parseTimestamp(slot71_updatetime),
parseTimestamp(slot71_deletetime),
'pending',
'pending',
slot72,
parseTimestamp(slot72_updatetime),
parseTimestamp(slot72_deletetime),
'pending',
'pending',
slot73,
parseTimestamp(slot73_updatetime),
parseTimestamp(slot73_deletetime),
'pending',
'pending',
slot74,
parseTimestamp(slot74_updatetime),
parseTimestamp(slot74_deletetime),
'pending',
'pending',
slot75,
parseTimestamp(slot75_updatetime),
parseTimestamp(slot75_deletetime),
'pending',
'pending',
slot76,
parseTimestamp(slot76_updatetime),
parseTimestamp(slot76_deletetime),
'pending',
'pending',
slot77,
parseTimestamp(slot77_updatetime),
parseTimestamp(slot77_deletetime),
'pending',
'pending',
slot78,
parseTimestamp(slot78_updatetime),
parseTimestamp(slot78_deletetime),
'pending',
'pending',
slot79,
parseTimestamp(slot79_updatetime),
parseTimestamp(slot79_deletetime),
'pending',
'pending',
slot80,
parseTimestamp(slot80_updatetime),
parseTimestamp(slot80_deletetime),
'pending',
'pending',
slot81,
parseTimestamp(slot81_updatetime),
parseTimestamp(slot81_deletetime),
'pending',
'pending',
slot82,
parseTimestamp(slot82_updatetime),
parseTimestamp(slot82_deletetime),
'pending',
'pending',
slot83,
parseTimestamp(slot83_updatetime),
parseTimestamp(slot83_deletetime),
'pending',
'pending',
slot84,
parseTimestamp(slot84_updatetime),
parseTimestamp(slot84_deletetime),
'pending',
'pending',
slot85,
parseTimestamp(slot85_updatetime),
parseTimestamp(slot85_deletetime),
'pending',
'pending',
slot86,
parseTimestamp(slot86_updatetime),
parseTimestamp(slot86_deletetime),
'pending',
'pending',
slot87,
parseTimestamp(slot87_updatetime),
parseTimestamp(slot87_deletetime),
'pending',
'pending',
slot88,
parseTimestamp(slot88_updatetime),
parseTimestamp(slot88_deletetime),
'pending',
'pending',
slot89,
parseTimestamp(slot89_updatetime),
parseTimestamp(slot89_deletetime),
'pending',
'pending',
slot90,
parseTimestamp(slot90_updatetime),
parseTimestamp(slot90_deletetime),
'pending',
'pending',
slot91,
parseTimestamp(slot91_updatetime),
parseTimestamp(slot91_deletetime),
'pending',
'pending',
slot92,
parseTimestamp(slot92_updatetime),
parseTimestamp(slot92_deletetime),
'pending',
'pending',
slot93,
parseTimestamp(slot93_updatetime),
parseTimestamp(slot93_deletetime),
'pending',
'pending',
slot94,
parseTimestamp(slot94_updatetime),
parseTimestamp(slot94_deletetime),
'pending',
'pending',
slot95,
parseTimestamp(slot95_updatetime),
parseTimestamp(slot95_deletetime),
'pending',
'pending',
slot96,
parseTimestamp(slot96_updatetime),
parseTimestamp(slot96_deletetime),
'pending',
'pending',
slot97,
parseTimestamp(slot97_updatetime),
parseTimestamp(slot97_deletetime),
'pending',
'pending',
slot98,
parseTimestamp(slot98_updatetime),
parseTimestamp(slot98_deletetime),
'pending',
'pending',
slot99,
parseTimestamp(slot99_updatetime),
parseTimestamp(slot99_deletetime),
'pending',
'pending',
slot100,
parseTimestamp(slot100_updatetime),
parseTimestamp(slot100_deletetime),
'pending',
'pending',
layout_1 ,
layout_2 ,
layout_3 ,
layout_4 ,
layout_5 ,
layout_6 ,
layout_7 ,
layout_8 ,
layout_9 ,
layout_10 ,
      ]
    );
    res.send('Data inserted successfully.');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error inserting data');
  }
});

// Route to render the edit form for a specific playlist
app.get('/edit/:id', async (req, res) => {
  const playlistId = req.params.id;

  try {
    const result = await pool.query('SELECT * FROM playlists1235 WHERE id = $1', [playlistId]);

    if (result.rows.length === 0) {
      res.status(404).send('Playlist not found');
      return;
    }

    const playlist = result.rows[0];

    // Format dates for the input fields
    playlist.slot1_updatetime = formatDateForInput(playlist.slot1_updatetime);
    playlist.slot1_deletetime = formatDateForInput(playlist.slot1_deletetime);
    playlist.slot2_updatetime = formatDateForInput(playlist.slot2_updatetime);
    playlist.slot2_deletetime = formatDateForInput(playlist.slot2_deletetime);
    playlist.slot3_updatetime = formatDateForInput(playlist.slot3_updatetime);
    playlist.slot3_deletetime = formatDateForInput(playlist.slot3_deletetime);
    playlist.slot4_updatetime = formatDateForInput(playlist.slot4_updatetime);
    playlist.slot4_deletetime = formatDateForInput(playlist.slot4_deletetime);
    playlist.slot5_updatetime = formatDateForInput(playlist.slot5_updatetime);
    playlist.slot5_deletetime = formatDateForInput(playlist.slot5_deletetime);
    playlist.slot6_updatetime = formatDateForInput(playlist.slot6_updatetime);
playlist.slot6_deletetime = formatDateForInput(playlist.slot6_deletetime);

playlist.slot7_updatetime = formatDateForInput(playlist.slot7_updatetime);
playlist.slot7_deletetime = formatDateForInput(playlist.slot7_deletetime);

playlist.slot8_updatetime = formatDateForInput(playlist.slot8_updatetime);
playlist.slot8_deletetime = formatDateForInput(playlist.slot8_deletetime);

playlist.slot9_updatetime = formatDateForInput(playlist.slot9_updatetime);
playlist.slot9_deletetime = formatDateForInput(playlist.slot9_deletetime);

playlist.slot10_updatetime = formatDateForInput(playlist.slot10_updatetime);
playlist.slot10_deletetime = formatDateForInput(playlist.slot10_deletetime);

playlist.slot11_updatetime = formatDateForInput(playlist.slot11_updatetime);
playlist.slot11_deletetime = formatDateForInput(playlist.slot11_deletetime);

playlist.slot12_updatetime = formatDateForInput(playlist.slot12_updatetime);
playlist.slot12_deletetime = formatDateForInput(playlist.slot12_deletetime);

playlist.slot13_updatetime = formatDateForInput(playlist.slot13_updatetime);
playlist.slot13_deletetime = formatDateForInput(playlist.slot13_deletetime);

playlist.slot14_updatetime = formatDateForInput(playlist.slot14_updatetime);
playlist.slot14_deletetime = formatDateForInput(playlist.slot14_deletetime);

playlist.slot15_updatetime = formatDateForInput(playlist.slot15_updatetime);
playlist.slot15_deletetime = formatDateForInput(playlist.slot15_deletetime);

playlist.slot16_updatetime = formatDateForInput(playlist.slot16_updatetime);
playlist.slot16_deletetime = formatDateForInput(playlist.slot16_deletetime);

playlist.slot17_updatetime = formatDateForInput(playlist.slot17_updatetime);
playlist.slot17_deletetime = formatDateForInput(playlist.slot17_deletetime);

playlist.slot18_updatetime = formatDateForInput(playlist.slot18_updatetime);
playlist.slot18_deletetime = formatDateForInput(playlist.slot18_deletetime);

playlist.slot19_updatetime = formatDateForInput(playlist.slot19_updatetime);
playlist.slot19_deletetime = formatDateForInput(playlist.slot19_deletetime);

playlist.slot20_updatetime = formatDateForInput(playlist.slot20_updatetime);
playlist.slot20_deletetime = formatDateForInput(playlist.slot20_deletetime);

playlist.slot21_updatetime = formatDateForInput(playlist.slot21_updatetime);
playlist.slot21_deletetime = formatDateForInput(playlist.slot21_deletetime);

playlist.slot22_updatetime = formatDateForInput(playlist.slot22_updatetime);
playlist.slot22_deletetime = formatDateForInput(playlist.slot22_deletetime);

playlist.slot23_updatetime = formatDateForInput(playlist.slot23_updatetime);
playlist.slot23_deletetime = formatDateForInput(playlist.slot23_deletetime);

playlist.slot24_updatetime = formatDateForInput(playlist.slot24_updatetime);
playlist.slot24_deletetime = formatDateForInput(playlist.slot24_deletetime);

playlist.slot25_updatetime = formatDateForInput(playlist.slot25_updatetime);
playlist.slot25_deletetime = formatDateForInput(playlist.slot25_deletetime);

playlist.slot26_updatetime = formatDateForInput(playlist.slot26_updatetime);
playlist.slot26_deletetime = formatDateForInput(playlist.slot26_deletetime);

playlist.slot27_updatetime = formatDateForInput(playlist.slot27_updatetime);
playlist.slot27_deletetime = formatDateForInput(playlist.slot27_deletetime);

playlist.slot28_updatetime = formatDateForInput(playlist.slot28_updatetime);
playlist.slot28_deletetime = formatDateForInput(playlist.slot28_deletetime);

playlist.slot29_updatetime = formatDateForInput(playlist.slot29_updatetime);
playlist.slot29_deletetime = formatDateForInput(playlist.slot29_deletetime);

playlist.slot30_updatetime = formatDateForInput(playlist.slot30_updatetime);
playlist.slot30_deletetime = formatDateForInput(playlist.slot30_deletetime);

playlist.slot31_updatetime = formatDateForInput(playlist.slot31_updatetime);
playlist.slot31_deletetime = formatDateForInput(playlist.slot31_deletetime);

playlist.slot32_updatetime = formatDateForInput(playlist.slot32_updatetime);
playlist.slot32_deletetime = formatDateForInput(playlist.slot32_deletetime);

playlist.slot33_updatetime = formatDateForInput(playlist.slot33_updatetime);
playlist.slot33_deletetime = formatDateForInput(playlist.slot33_deletetime);

playlist.slot34_updatetime = formatDateForInput(playlist.slot34_updatetime);
playlist.slot34_deletetime = formatDateForInput(playlist.slot34_deletetime);

playlist.slot35_updatetime = formatDateForInput(playlist.slot35_updatetime);
playlist.slot35_deletetime = formatDateForInput(playlist.slot35_deletetime);

playlist.slot36_updatetime = formatDateForInput(playlist.slot36_updatetime);
playlist.slot36_deletetime = formatDateForInput(playlist.slot36_deletetime);

playlist.slot37_updatetime = formatDateForInput(playlist.slot37_updatetime);
playlist.slot37_deletetime = formatDateForInput(playlist.slot37_deletetime);

playlist.slot38_updatetime = formatDateForInput(playlist.slot38_updatetime);
playlist.slot38_deletetime = formatDateForInput(playlist.slot38_deletetime);

playlist.slot39_updatetime = formatDateForInput(playlist.slot39_updatetime);
playlist.slot39_deletetime = formatDateForInput(playlist.slot39_deletetime);

playlist.slot40_updatetime = formatDateForInput(playlist.slot40_updatetime);
playlist.slot40_deletetime = formatDateForInput(playlist.slot40_deletetime);

playlist.slot41_updatetime = formatDateForInput(playlist.slot41_updatetime);
playlist.slot41_deletetime = formatDateForInput(playlist.slot41_deletetime);

playlist.slot42_updatetime = formatDateForInput(playlist.slot42_updatetime);
playlist.slot42_deletetime = formatDateForInput(playlist.slot42_deletetime);

playlist.slot43_updatetime = formatDateForInput(playlist.slot43_updatetime);
playlist.slot43_deletetime = formatDateForInput(playlist.slot43_deletetime);

playlist.slot44_updatetime = formatDateForInput(playlist.slot44_updatetime);
playlist.slot44_deletetime = formatDateForInput(playlist.slot44_deletetime);

playlist.slot45_updatetime = formatDateForInput(playlist.slot45_updatetime);
playlist.slot45_deletetime = formatDateForInput(playlist.slot45_deletetime);

playlist.slot46_updatetime = formatDateForInput(playlist.slot46_updatetime);
playlist.slot46_deletetime = formatDateForInput(playlist.slot46_deletetime);

playlist.slot47_updatetime = formatDateForInput(playlist.slot47_updatetime);
playlist.slot47_deletetime = formatDateForInput(playlist.slot47_deletetime);

playlist.slot48_updatetime = formatDateForInput(playlist.slot48_updatetime);
playlist.slot48_deletetime = formatDateForInput(playlist.slot48_deletetime);

playlist.slot49_updatetime = formatDateForInput(playlist.slot49_updatetime);
playlist.slot49_deletetime = formatDateForInput(playlist.slot49_deletetime);

playlist.slot50_updatetime = formatDateForInput(playlist.slot50_updatetime);
playlist.slot50_deletetime = formatDateForInput(playlist.slot50_deletetime);

playlist.slot51_updatetime = formatDateForInput(playlist.slot51_updatetime);
playlist.slot51_deletetime = formatDateForInput(playlist.slot51_deletetime);

playlist.slot52_updatetime = formatDateForInput(playlist.slot52_updatetime);
playlist.slot52_deletetime = formatDateForInput(playlist.slot52_deletetime);

playlist.slot53_updatetime = formatDateForInput(playlist.slot53_updatetime);
playlist.slot53_deletetime = formatDateForInput(playlist.slot53_deletetime);

playlist.slot54_updatetime = formatDateForInput(playlist.slot54_updatetime);
playlist.slot54_deletetime = formatDateForInput(playlist.slot54_deletetime);

playlist.slot55_updatetime = formatDateForInput(playlist.slot55_updatetime);
playlist.slot55_deletetime = formatDateForInput(playlist.slot55_deletetime);

playlist.slot56_updatetime = formatDateForInput(playlist.slot56_updatetime);
playlist.slot56_deletetime = formatDateForInput(playlist.slot56_deletetime);

playlist.slot57_updatetime = formatDateForInput(playlist.slot57_updatetime);
playlist.slot57_deletetime = formatDateForInput(playlist.slot57_deletetime);

playlist.slot58_updatetime = formatDateForInput(playlist.slot58_updatetime);
playlist.slot58_deletetime = formatDateForInput(playlist.slot58_deletetime);

playlist.slot59_updatetime = formatDateForInput(playlist.slot59_updatetime);
playlist.slot59_deletetime = formatDateForInput(playlist.slot59_deletetime);

playlist.slot60_updatetime = formatDateForInput(playlist.slot60_updatetime);
playlist.slot60_deletetime = formatDateForInput(playlist.slot60_deletetime);

playlist.slot61_updatetime = formatDateForInput(playlist.slot61_updatetime);
playlist.slot61_deletetime = formatDateForInput(playlist.slot61_deletetime);

playlist.slot62_updatetime = formatDateForInput(playlist.slot62_updatetime);
playlist.slot62_deletetime = formatDateForInput(playlist.slot62_deletetime);

playlist.slot63_updatetime = formatDateForInput(playlist.slot63_updatetime);
playlist.slot63_deletetime = formatDateForInput(playlist.slot63_deletetime);

playlist.slot64_updatetime = formatDateForInput(playlist.slot64_updatetime);
playlist.slot64_deletetime = formatDateForInput(playlist.slot64_deletetime);

playlist.slot65_updatetime = formatDateForInput(playlist.slot65_updatetime);
playlist.slot65_deletetime = formatDateForInput(playlist.slot65_deletetime);

playlist.slot66_updatetime = formatDateForInput(playlist.slot66_updatetime);
playlist.slot66_deletetime = formatDateForInput(playlist.slot66_deletetime);

playlist.slot67_updatetime = formatDateForInput(playlist.slot67_updatetime);
playlist.slot67_deletetime = formatDateForInput(playlist.slot67_deletetime);

playlist.slot68_updatetime = formatDateForInput(playlist.slot68_updatetime);
playlist.slot68_deletetime = formatDateForInput(playlist.slot68_deletetime);

playlist.slot69_updatetime = formatDateForInput(playlist.slot69_updatetime);
playlist.slot69_deletetime = formatDateForInput(playlist.slot69_deletetime);

playlist.slot70_updatetime = formatDateForInput(playlist.slot70_updatetime);
playlist.slot70_deletetime = formatDateForInput(playlist.slot70_deletetime);

playlist.slot71_updatetime = formatDateForInput(playlist.slot71_updatetime);
playlist.slot71_deletetime = formatDateForInput(playlist.slot71_deletetime);

playlist.slot72_updatetime = formatDateForInput(playlist.slot72_updatetime);
playlist.slot72_deletetime = formatDateForInput(playlist.slot72_deletetime);

playlist.slot73_updatetime = formatDateForInput(playlist.slot73_updatetime);
playlist.slot73_deletetime = formatDateForInput(playlist.slot73_deletetime);

playlist.slot74_updatetime = formatDateForInput(playlist.slot74_updatetime);
playlist.slot74_deletetime = formatDateForInput(playlist.slot74_deletetime);

playlist.slot75_updatetime = formatDateForInput(playlist.slot75_updatetime);
playlist.slot75_deletetime = formatDateForInput(playlist.slot75_deletetime);

playlist.slot76_updatetime = formatDateForInput(playlist.slot76_updatetime);
playlist.slot76_deletetime = formatDateForInput(playlist.slot76_deletetime);

playlist.slot77_updatetime = formatDateForInput(playlist.slot77_updatetime);
playlist.slot77_deletetime = formatDateForInput(playlist.slot77_deletetime);

playlist.slot78_updatetime = formatDateForInput(playlist.slot78_updatetime);
playlist.slot78_deletetime = formatDateForInput(playlist.slot78_deletetime);

playlist.slot79_updatetime = formatDateForInput(playlist.slot79_updatetime);
playlist.slot79_deletetime = formatDateForInput(playlist.slot79_deletetime);

playlist.slot80_updatetime = formatDateForInput(playlist.slot80_updatetime);
playlist.slot80_deletetime = formatDateForInput(playlist.slot80_deletetime);

playlist.slot81_updatetime = formatDateForInput(playlist.slot81_updatetime);
playlist.slot81_deletetime = formatDateForInput(playlist.slot81_deletetime);

playlist.slot82_updatetime = formatDateForInput(playlist.slot82_updatetime);
playlist.slot82_deletetime = formatDateForInput(playlist.slot82_deletetime);

playlist.slot83_updatetime = formatDateForInput(playlist.slot83_updatetime);
playlist.slot83_deletetime = formatDateForInput(playlist.slot83_deletetime);

playlist.slot84_updatetime = formatDateForInput(playlist.slot84_updatetime);
playlist.slot84_deletetime = formatDateForInput(playlist.slot84_deletetime);

playlist.slot85_updatetime = formatDateForInput(playlist.slot85_updatetime);
playlist.slot85_deletetime = formatDateForInput(playlist.slot85_deletetime);

playlist.slot86_updatetime = formatDateForInput(playlist.slot86_updatetime);
playlist.slot86_deletetime = formatDateForInput(playlist.slot86_deletetime);

playlist.slot87_updatetime = formatDateForInput(playlist.slot87_updatetime);
playlist.slot87_deletetime = formatDateForInput(playlist.slot87_deletetime);

playlist.slot88_updatetime = formatDateForInput(playlist.slot88_updatetime);
playlist.slot88_deletetime = formatDateForInput(playlist.slot88_deletetime);

playlist.slot89_updatetime = formatDateForInput(playlist.slot89_updatetime);
playlist.slot89_deletetime = formatDateForInput(playlist.slot89_deletetime);

playlist.slot90_updatetime = formatDateForInput(playlist.slot90_updatetime);
playlist.slot90_deletetime = formatDateForInput(playlist.slot90_deletetime);

playlist.slot91_updatetime = formatDateForInput(playlist.slot91_updatetime);
playlist.slot91_deletetime = formatDateForInput(playlist.slot91_deletetime);

playlist.slot92_updatetime = formatDateForInput(playlist.slot92_updatetime);
playlist.slot92_deletetime = formatDateForInput(playlist.slot92_deletetime);

playlist.slot93_updatetime = formatDateForInput(playlist.slot93_updatetime);
playlist.slot93_deletetime = formatDateForInput(playlist.slot93_deletetime);

playlist.slot94_updatetime = formatDateForInput(playlist.slot94_updatetime);
playlist.slot94_deletetime = formatDateForInput(playlist.slot94_deletetime);

playlist.slot95_updatetime = formatDateForInput(playlist.slot95_updatetime);
playlist.slot95_deletetime = formatDateForInput(playlist.slot95_deletetime);

playlist.slot96_updatetime = formatDateForInput(playlist.slot96_updatetime);
playlist.slot96_deletetime = formatDateForInput(playlist.slot96_deletetime);

playlist.slot97_updatetime = formatDateForInput(playlist.slot97_updatetime);
playlist.slot97_deletetime = formatDateForInput(playlist.slot97_deletetime);

playlist.slot98_updatetime = formatDateForInput(playlist.slot98_updatetime);
playlist.slot98_deletetime = formatDateForInput(playlist.slot98_deletetime);

playlist.slot99_updatetime = formatDateForInput(playlist.slot99_updatetime);
playlist.slot99_deletetime = formatDateForInput(playlist.slot99_deletetime);

playlist.slot100_updatetime = formatDateForInput(playlist.slot100_updatetime);
playlist.slot100_deletetime = formatDateForInput(playlist.slot100_deletetime);


    res.render('edit-playlist', { playlist });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching playlist');
  }
});

// Route to handle the update of a playlist
app.post('/update-playlist', async (req, res) => {
  const {
    id,
    playlistname,
    playlistdescription,
    screenid,
    slot1,
    slot1_updatetime,
    slot1_deletetime,
    slot2,
    slot2_updatetime,
    slot2_deletetime,
    slot3,
    slot3_updatetime,
    slot3_deletetime,
    slot4,
    slot4_updatetime,
    slot4_deletetime,
    slot5,
    slot5_updatetime,
    slot5_deletetime,
    slot6 ,
    slot6_updatetime ,
    slot6_deletetime ,

slot7 ,
    slot7_updatetime ,
    slot7_deletetime ,

slot8 ,
    slot8_updatetime ,
    slot8_deletetime ,

slot9 ,
    slot9_updatetime ,
    slot9_deletetime ,

slot10 ,
    slot10_updatetime ,
    slot10_deletetime ,

slot11 ,
    slot11_updatetime ,
    slot11_deletetime ,

slot12 ,
    slot12_updatetime ,
    slot12_deletetime ,

slot13 ,
    slot13_updatetime ,
    slot13_deletetime ,

slot14 ,
    slot14_updatetime ,
    slot14_deletetime ,

slot15 ,
    slot15_updatetime ,
    slot15_deletetime ,

slot16 ,
    slot16_updatetime ,
    slot16_deletetime ,

slot17 ,
    slot17_updatetime ,
    slot17_deletetime ,

slot18 ,
    slot18_updatetime ,
    slot18_deletetime ,

slot19 ,
    slot19_updatetime ,
    slot19_deletetime ,

slot20 ,
    slot20_updatetime ,
    slot20_deletetime ,

slot21 ,
    slot21_updatetime ,
    slot21_deletetime ,

slot22 ,
    slot22_updatetime ,
    slot22_deletetime ,

slot23 ,
    slot23_updatetime ,
    slot23_deletetime ,

slot24 ,
    slot24_updatetime ,
    slot24_deletetime ,

slot25 ,
    slot25_updatetime ,
    slot25_deletetime ,

slot26 ,
    slot26_updatetime ,
    slot26_deletetime ,

slot27 ,
    slot27_updatetime ,
    slot27_deletetime ,

slot28 ,
    slot28_updatetime ,
    slot28_deletetime ,

slot29 ,
    slot29_updatetime ,
    slot29_deletetime ,

slot30 ,
    slot30_updatetime ,
    slot30_deletetime ,

slot31 ,
    slot31_updatetime ,
    slot31_deletetime ,

slot32 ,
    slot32_updatetime ,
    slot32_deletetime ,

slot33 ,
    slot33_updatetime ,
    slot33_deletetime ,

slot34 ,
    slot34_updatetime ,
    slot34_deletetime ,

slot35 ,
    slot35_updatetime ,
    slot35_deletetime ,

slot36 ,
    slot36_updatetime ,
    slot36_deletetime ,

slot37 ,
    slot37_updatetime ,
    slot37_deletetime ,

slot38 ,
    slot38_updatetime ,
    slot38_deletetime ,

slot39 ,
    slot39_updatetime ,
    slot39_deletetime ,

slot40 ,
    slot40_updatetime ,
    slot40_deletetime ,

slot41 ,
    slot41_updatetime ,
    slot41_deletetime ,

slot42 ,
    slot42_updatetime ,
    slot42_deletetime ,

slot43 ,
    slot43_updatetime ,
    slot43_deletetime ,

slot44 ,
    slot44_updatetime ,
    slot44_deletetime ,

slot45 ,
    slot45_updatetime ,
    slot45_deletetime ,

slot46 ,
    slot46_updatetime ,
    slot46_deletetime ,

slot47 ,
    slot47_updatetime ,
    slot47_deletetime ,

slot48 ,
    slot48_updatetime ,
    slot48_deletetime ,

slot49 ,
    slot49_updatetime ,
    slot49_deletetime ,

slot50 ,
    slot50_updatetime ,
    slot50_deletetime ,

slot51 ,
    slot51_updatetime ,
    slot51_deletetime ,

slot52 ,
    slot52_updatetime ,
    slot52_deletetime ,

slot53 ,
    slot53_updatetime ,
    slot53_deletetime ,

slot54 ,
    slot54_updatetime ,
    slot54_deletetime ,

slot55 ,
    slot55_updatetime ,
    slot55_deletetime ,

slot56 ,
    slot56_updatetime ,
    slot56_deletetime ,

slot57 ,
    slot57_updatetime ,
    slot57_deletetime ,

slot58 ,
    slot58_updatetime ,
    slot58_deletetime ,

slot59 ,
    slot59_updatetime ,
    slot59_deletetime ,

slot60 ,
    slot60_updatetime ,
    slot60_deletetime ,

slot61 ,
    slot61_updatetime ,
    slot61_deletetime ,

slot62 ,
    slot62_updatetime ,
    slot62_deletetime ,

slot63 ,
    slot63_updatetime ,
    slot63_deletetime ,

slot64 ,
    slot64_updatetime ,
    slot64_deletetime ,

slot65 ,
    slot65_updatetime ,
    slot65_deletetime ,

slot66 ,
    slot66_updatetime ,
    slot66_deletetime ,

slot67 ,
    slot67_updatetime ,
    slot67_deletetime ,

slot68 ,
    slot68_updatetime ,
    slot68_deletetime ,

slot69 ,
    slot69_updatetime ,
    slot69_deletetime ,

slot70 ,
    slot70_updatetime ,
    slot70_deletetime ,

slot71 ,
    slot71_updatetime ,
    slot71_deletetime ,

slot72 ,
    slot72_updatetime ,
    slot72_deletetime ,

slot73 ,
    slot73_updatetime ,
    slot73_deletetime ,

slot74 ,
    slot74_updatetime ,
    slot74_deletetime ,

slot75 ,
    slot75_updatetime ,
    slot75_deletetime ,

slot76 ,
    slot76_updatetime ,
    slot76_deletetime ,

slot77 ,
    slot77_updatetime ,
    slot77_deletetime ,

slot78 ,
    slot78_updatetime ,
    slot78_deletetime ,

slot79 ,
    slot79_updatetime ,
    slot79_deletetime ,

slot80 ,
    slot80_updatetime ,
    slot80_deletetime ,

slot81 ,
    slot81_updatetime ,
    slot81_deletetime ,

slot82 ,
    slot82_updatetime ,
    slot82_deletetime ,

slot83 ,
    slot83_updatetime ,
    slot83_deletetime ,

slot84 ,
    slot84_updatetime ,
    slot84_deletetime ,

slot85 ,
    slot85_updatetime ,
    slot85_deletetime ,

slot86 ,
    slot86_updatetime ,
    slot86_deletetime ,

slot87 ,
    slot87_updatetime ,
    slot87_deletetime ,

slot88 ,
    slot88_updatetime ,
    slot88_deletetime ,

slot89 ,
    slot89_updatetime ,
    slot89_deletetime ,

slot90 ,
    slot90_updatetime ,
    slot90_deletetime ,

slot91 ,
    slot91_updatetime ,
    slot91_deletetime ,

slot92 ,
    slot92_updatetime ,
    slot92_deletetime ,

slot93 ,
    slot93_updatetime ,
    slot93_deletetime ,

slot94 ,
    slot94_updatetime ,
    slot94_deletetime ,

slot95 ,
    slot95_updatetime ,
    slot95_deletetime ,

slot96 ,
    slot96_updatetime ,
    slot96_deletetime ,

slot97 ,
    slot97_updatetime ,
    slot97_deletetime ,

slot98 ,
    slot98_updatetime ,
    slot98_deletetime ,

slot99 ,
    slot99_updatetime ,
    slot99_deletetime ,

slot100 ,
    slot100_updatetime ,
    slot100_deletetime ,
  } = req.body;

  const screenidArray = screenid.split(',').map(id => parseInt(id.trim(), 10));
  const parseTimestamp = (value) => value ? new Date(value) : null;

  try {
    // Fetch existing playlist data
    const result = await pool.query('SELECT * FROM playlists1235 WHERE id = $1', [id]);
    const existingPlaylist = result.rows[0];

    const isSlotUpdated = (slot, slotTime, existingSlotTime) => {
      return slot !== existingPlaylist[slot] || new Date(slotTime).getTime() !== new Date(existingSlotTime).getTime();
    };

    const slot1_update_status = isSlotUpdated('slot1', slot1_updatetime, existingPlaylist.slot1_updatetime) ? 'pending' : existingPlaylist.slot1_update_status;
    const slot1_delete_status = isSlotUpdated('slot1', slot1_deletetime, existingPlaylist.slot1_deletetime) ? 'pending' : existingPlaylist.slot1_delete_status;

    const slot2_update_status = isSlotUpdated('slot2', slot2_updatetime, existingPlaylist.slot2_updatetime) ? 'pending' : existingPlaylist.slot2_update_status;
    const slot2_delete_status = isSlotUpdated('slot2', slot2_deletetime, existingPlaylist.slot2_deletetime) ? 'pending' : existingPlaylist.slot2_delete_status;

    const slot3_update_status = isSlotUpdated('slot3', slot3_updatetime, existingPlaylist.slot3_updatetime) ? 'pending' : existingPlaylist.slot3_update_status;
    const slot3_delete_status = isSlotUpdated('slot3', slot3_deletetime, existingPlaylist.slot3_deletetime) ? 'pending' : existingPlaylist.slot3_delete_status;

    const slot4_update_status = isSlotUpdated('slot4', slot4_updatetime, existingPlaylist.slot4_updatetime) ? 'pending' : existingPlaylist.slot4_update_status;
    const slot4_delete_status = isSlotUpdated('slot4', slot4_deletetime, existingPlaylist.slot4_deletetime) ? 'pending' : existingPlaylist.slot4_delete_status;

    const slot5_update_status = isSlotUpdated('slot5', slot5_updatetime, existingPlaylist.slot5_updatetime) ? 'pending' : existingPlaylist.slot5_update_status;
    const slot5_delete_status = isSlotUpdated('slot5', slot5_deletetime, existingPlaylist.slot5_deletetime) ? 'pending' : existingPlaylist.slot5_delete_status;

    const slot6_update_status = isSlotUpdated('slot6', slot6_updatetime, existingPlaylist.slot6_updatetime) ? 'pending' : existingPlaylist.slot6_update_status;
    const slot6_delete_status = isSlotUpdated('slot6', slot6_deletetime, existingPlaylist.slot6_deletetime) ? 'pending' : existingPlaylist.slot6_delete_status;

    const slot7_update_status = isSlotUpdated('slot7', slot7_updatetime, existingPlaylist.slot7_updatetime) ? 'pending' : existingPlaylist.slot7_update_status;
    const slot7_delete_status = isSlotUpdated('slot7', slot7_deletetime, existingPlaylist.slot7_deletetime) ? 'pending' : existingPlaylist.slot7_delete_status;

    const slot8_update_status = isSlotUpdated('slot8', slot8_updatetime, existingPlaylist.slot8_updatetime) ? 'pending' : existingPlaylist.slot8_update_status;
    const slot8_delete_status = isSlotUpdated('slot8', slot8_deletetime, existingPlaylist.slot8_deletetime) ? 'pending' : existingPlaylist.slot8_delete_status;

    const slot9_update_status = isSlotUpdated('slot9', slot9_updatetime, existingPlaylist.slot9_updatetime) ? 'pending' : existingPlaylist.slot9_update_status;
    const slot9_delete_status = isSlotUpdated('slot9', slot9_deletetime, existingPlaylist.slot9_deletetime) ? 'pending' : existingPlaylist.slot9_delete_status;

    const slot10_update_status = isSlotUpdated('slot10', slot10_updatetime, existingPlaylist.slot10_updatetime) ? 'pending' : existingPlaylist.slot10_update_status;
    const slot10_delete_status = isSlotUpdated('slot10', slot10_deletetime, existingPlaylist.slot10_deletetime) ? 'pending' : existingPlaylist.slot10_delete_status;

    const slot11_update_status = isSlotUpdated('slot11', slot11_updatetime, existingPlaylist.slot11_updatetime) ? 'pending' : existingPlaylist.slot11_update_status;
    const slot11_delete_status = isSlotUpdated('slot11', slot11_deletetime, existingPlaylist.slot11_deletetime) ? 'pending' : existingPlaylist.slot11_delete_status;

    const slot12_update_status = isSlotUpdated('slot12', slot12_updatetime, existingPlaylist.slot12_updatetime) ? 'pending' : existingPlaylist.slot12_update_status;
    const slot12_delete_status = isSlotUpdated('slot12', slot12_deletetime, existingPlaylist.slot12_deletetime) ? 'pending' : existingPlaylist.slot12_delete_status;

    const slot13_update_status = isSlotUpdated('slot13', slot13_updatetime, existingPlaylist.slot13_updatetime) ? 'pending' : existingPlaylist.slot13_update_status;
    const slot13_delete_status = isSlotUpdated('slot13', slot13_deletetime, existingPlaylist.slot13_deletetime) ? 'pending' : existingPlaylist.slot13_delete_status;

    const slot14_update_status = isSlotUpdated('slot14', slot14_updatetime, existingPlaylist.slot14_updatetime) ? 'pending' : existingPlaylist.slot14_update_status;
    const slot14_delete_status = isSlotUpdated('slot14', slot14_deletetime, existingPlaylist.slot14_deletetime) ? 'pending' : existingPlaylist.slot14_delete_status;

    const slot15_update_status = isSlotUpdated('slot15', slot15_updatetime, existingPlaylist.slot15_updatetime) ? 'pending' : existingPlaylist.slot15_update_status;
    const slot15_delete_status = isSlotUpdated('slot15', slot15_deletetime, existingPlaylist.slot15_deletetime) ? 'pending' : existingPlaylist.slot15_delete_status;

    const slot16_update_status = isSlotUpdated('slot16', slot16_updatetime, existingPlaylist.slot16_updatetime) ? 'pending' : existingPlaylist.slot16_update_status;
    const slot16_delete_status = isSlotUpdated('slot16', slot16_deletetime, existingPlaylist.slot16_deletetime) ? 'pending' : existingPlaylist.slot16_delete_status;

    const slot17_update_status = isSlotUpdated('slot17', slot17_updatetime, existingPlaylist.slot17_updatetime) ? 'pending' : existingPlaylist.slot17_update_status;
    const slot17_delete_status = isSlotUpdated('slot17', slot17_deletetime, existingPlaylist.slot17_deletetime) ? 'pending' : existingPlaylist.slot17_delete_status;

    const slot18_update_status = isSlotUpdated('slot18', slot18_updatetime, existingPlaylist.slot18_updatetime) ? 'pending' : existingPlaylist.slot18_update_status;
    const slot18_delete_status = isSlotUpdated('slot18', slot18_deletetime, existingPlaylist.slot18_deletetime) ? 'pending' : existingPlaylist.slot18_delete_status;

    const slot19_update_status = isSlotUpdated('slot19', slot19_updatetime, existingPlaylist.slot19_updatetime) ? 'pending' : existingPlaylist.slot19_update_status;
    const slot19_delete_status = isSlotUpdated('slot19', slot19_deletetime, existingPlaylist.slot19_deletetime) ? 'pending' : existingPlaylist.slot19_delete_status;

    const slot20_update_status = isSlotUpdated('slot20', slot20_updatetime, existingPlaylist.slot20_updatetime) ? 'pending' : existingPlaylist.slot20_update_status;
    const slot20_delete_status = isSlotUpdated('slot20', slot20_deletetime, existingPlaylist.slot20_deletetime) ? 'pending' : existingPlaylist.slot20_delete_status;

    const slot21_update_status = isSlotUpdated('slot21', slot21_updatetime, existingPlaylist.slot21_updatetime) ? 'pending' : existingPlaylist.slot21_update_status;
    const slot21_delete_status = isSlotUpdated('slot21', slot21_deletetime, existingPlaylist.slot21_deletetime) ? 'pending' : existingPlaylist.slot21_delete_status;

    const slot22_update_status = isSlotUpdated('slot22', slot22_updatetime, existingPlaylist.slot22_updatetime) ? 'pending' : existingPlaylist.slot22_update_status;
    const slot22_delete_status = isSlotUpdated('slot22', slot22_deletetime, existingPlaylist.slot22_deletetime) ? 'pending' : existingPlaylist.slot22_delete_status;

    const slot23_update_status = isSlotUpdated('slot23', slot23_updatetime, existingPlaylist.slot23_updatetime) ? 'pending' : existingPlaylist.slot23_update_status;
    const slot23_delete_status = isSlotUpdated('slot23', slot23_deletetime, existingPlaylist.slot23_deletetime) ? 'pending' : existingPlaylist.slot23_delete_status;

    const slot24_update_status = isSlotUpdated('slot24', slot24_updatetime, existingPlaylist.slot24_updatetime) ? 'pending' : existingPlaylist.slot24_update_status;
    const slot24_delete_status = isSlotUpdated('slot24', slot24_deletetime, existingPlaylist.slot24_deletetime) ? 'pending' : existingPlaylist.slot24_delete_status;

    const slot25_update_status = isSlotUpdated('slot25', slot25_updatetime, existingPlaylist.slot25_updatetime) ? 'pending' : existingPlaylist.slot25_update_status;
    const slot25_delete_status = isSlotUpdated('slot25', slot25_deletetime, existingPlaylist.slot25_deletetime) ? 'pending' : existingPlaylist.slot25_delete_status;

    const slot26_update_status = isSlotUpdated('slot26', slot26_updatetime, existingPlaylist.slot26_updatetime) ? 'pending' : existingPlaylist.slot26_update_status;
    const slot26_delete_status = isSlotUpdated('slot26', slot26_deletetime, existingPlaylist.slot26_deletetime) ? 'pending' : existingPlaylist.slot26_delete_status;

    const slot27_update_status = isSlotUpdated('slot27', slot27_updatetime, existingPlaylist.slot27_updatetime) ? 'pending' : existingPlaylist.slot27_update_status;
    const slot27_delete_status = isSlotUpdated('slot27', slot27_deletetime, existingPlaylist.slot27_deletetime) ? 'pending' : existingPlaylist.slot27_delete_status;

    const slot28_update_status = isSlotUpdated('slot28', slot28_updatetime, existingPlaylist.slot28_updatetime) ? 'pending' : existingPlaylist.slot28_update_status;
    const slot28_delete_status = isSlotUpdated('slot28', slot28_deletetime, existingPlaylist.slot28_deletetime) ? 'pending' : existingPlaylist.slot28_delete_status;

    const slot29_update_status = isSlotUpdated('slot29', slot29_updatetime, existingPlaylist.slot29_updatetime) ? 'pending' : existingPlaylist.slot29_update_status;
    const slot29_delete_status = isSlotUpdated('slot29', slot29_deletetime, existingPlaylist.slot29_deletetime) ? 'pending' : existingPlaylist.slot29_delete_status;

    const slot30_update_status = isSlotUpdated('slot30', slot30_updatetime, existingPlaylist.slot30_updatetime) ? 'pending' : existingPlaylist.slot30_update_status;
    const slot30_delete_status = isSlotUpdated('slot30', slot30_deletetime, existingPlaylist.slot30_deletetime) ? 'pending' : existingPlaylist.slot30_delete_status;

    const slot31_update_status = isSlotUpdated('slot31', slot31_updatetime, existingPlaylist.slot31_updatetime) ? 'pending' : existingPlaylist.slot31_update_status;
    const slot31_delete_status = isSlotUpdated('slot31', slot31_deletetime, existingPlaylist.slot31_deletetime) ? 'pending' : existingPlaylist.slot31_delete_status;

    const slot32_update_status = isSlotUpdated('slot32', slot32_updatetime, existingPlaylist.slot32_updatetime) ? 'pending' : existingPlaylist.slot32_update_status;
    const slot32_delete_status = isSlotUpdated('slot32', slot32_deletetime, existingPlaylist.slot32_deletetime) ? 'pending' : existingPlaylist.slot32_delete_status;

    const slot33_update_status = isSlotUpdated('slot33', slot33_updatetime, existingPlaylist.slot33_updatetime) ? 'pending' : existingPlaylist.slot33_update_status;
    const slot33_delete_status = isSlotUpdated('slot33', slot33_deletetime, existingPlaylist.slot33_deletetime) ? 'pending' : existingPlaylist.slot33_delete_status;

    const slot34_update_status = isSlotUpdated('slot34', slot34_updatetime, existingPlaylist.slot34_updatetime) ? 'pending' : existingPlaylist.slot34_update_status;
    const slot34_delete_status = isSlotUpdated('slot34', slot34_deletetime, existingPlaylist.slot34_deletetime) ? 'pending' : existingPlaylist.slot34_delete_status;

    const slot35_update_status = isSlotUpdated('slot35', slot35_updatetime, existingPlaylist.slot35_updatetime) ? 'pending' : existingPlaylist.slot35_update_status;
    const slot35_delete_status = isSlotUpdated('slot35', slot35_deletetime, existingPlaylist.slot35_deletetime) ? 'pending' : existingPlaylist.slot35_delete_status;

    const slot36_update_status = isSlotUpdated('slot36', slot36_updatetime, existingPlaylist.slot36_updatetime) ? 'pending' : existingPlaylist.slot36_update_status;
    const slot36_delete_status = isSlotUpdated('slot36', slot36_deletetime, existingPlaylist.slot36_deletetime) ? 'pending' : existingPlaylist.slot36_delete_status;

    const slot37_update_status = isSlotUpdated('slot37', slot37_updatetime, existingPlaylist.slot37_updatetime) ? 'pending' : existingPlaylist.slot37_update_status;
    const slot37_delete_status = isSlotUpdated('slot37', slot37_deletetime, existingPlaylist.slot37_deletetime) ? 'pending' : existingPlaylist.slot37_delete_status;

    const slot38_update_status = isSlotUpdated('slot38', slot38_updatetime, existingPlaylist.slot38_updatetime) ? 'pending' : existingPlaylist.slot38_update_status;
    const slot38_delete_status = isSlotUpdated('slot38', slot38_deletetime, existingPlaylist.slot38_deletetime) ? 'pending' : existingPlaylist.slot38_delete_status;

    const slot39_update_status = isSlotUpdated('slot39', slot39_updatetime, existingPlaylist.slot39_updatetime) ? 'pending' : existingPlaylist.slot39_update_status;
    const slot39_delete_status = isSlotUpdated('slot39', slot39_deletetime, existingPlaylist.slot39_deletetime) ? 'pending' : existingPlaylist.slot39_delete_status;

    const slot40_update_status = isSlotUpdated('slot40', slot40_updatetime, existingPlaylist.slot40_updatetime) ? 'pending' : existingPlaylist.slot40_update_status;
    const slot40_delete_status = isSlotUpdated('slot40', slot40_deletetime, existingPlaylist.slot40_deletetime) ? 'pending' : existingPlaylist.slot40_delete_status;

    const slot41_update_status = isSlotUpdated('slot41', slot41_updatetime, existingPlaylist.slot41_updatetime) ? 'pending' : existingPlaylist.slot41_update_status;
    const slot41_delete_status = isSlotUpdated('slot41', slot41_deletetime, existingPlaylist.slot41_deletetime) ? 'pending' : existingPlaylist.slot41_delete_status;

    const slot42_update_status = isSlotUpdated('slot42', slot42_updatetime, existingPlaylist.slot42_updatetime) ? 'pending' : existingPlaylist.slot42_update_status;
    const slot42_delete_status = isSlotUpdated('slot42', slot42_deletetime, existingPlaylist.slot42_deletetime) ? 'pending' : existingPlaylist.slot42_delete_status;

    const slot43_update_status = isSlotUpdated('slot43', slot43_updatetime, existingPlaylist.slot43_updatetime) ? 'pending' : existingPlaylist.slot43_update_status;
    const slot43_delete_status = isSlotUpdated('slot43', slot43_deletetime, existingPlaylist.slot43_deletetime) ? 'pending' : existingPlaylist.slot43_delete_status;

    const slot44_update_status = isSlotUpdated('slot44', slot44_updatetime, existingPlaylist.slot44_updatetime) ? 'pending' : existingPlaylist.slot44_update_status;
    const slot44_delete_status = isSlotUpdated('slot44', slot44_deletetime, existingPlaylist.slot44_deletetime) ? 'pending' : existingPlaylist.slot44_delete_status;

    const slot45_update_status = isSlotUpdated('slot45', slot45_updatetime, existingPlaylist.slot45_updatetime) ? 'pending' : existingPlaylist.slot45_update_status;
    const slot45_delete_status = isSlotUpdated('slot45', slot45_deletetime, existingPlaylist.slot45_deletetime) ? 'pending' : existingPlaylist.slot45_delete_status;

    const slot46_update_status = isSlotUpdated('slot46', slot46_updatetime, existingPlaylist.slot46_updatetime) ? 'pending' : existingPlaylist.slot46_update_status;
    const slot46_delete_status = isSlotUpdated('slot46', slot46_deletetime, existingPlaylist.slot46_deletetime) ? 'pending' : existingPlaylist.slot46_delete_status;

    const slot47_update_status = isSlotUpdated('slot47', slot47_updatetime, existingPlaylist.slot47_updatetime) ? 'pending' : existingPlaylist.slot47_update_status;
    const slot47_delete_status = isSlotUpdated('slot47', slot47_deletetime, existingPlaylist.slot47_deletetime) ? 'pending' : existingPlaylist.slot47_delete_status;

    const slot48_update_status = isSlotUpdated('slot48', slot48_updatetime, existingPlaylist.slot48_updatetime) ? 'pending' : existingPlaylist.slot48_update_status;
    const slot48_delete_status = isSlotUpdated('slot48', slot48_deletetime, existingPlaylist.slot48_deletetime) ? 'pending' : existingPlaylist.slot48_delete_status;

    const slot49_update_status = isSlotUpdated('slot49', slot49_updatetime, existingPlaylist.slot49_updatetime) ? 'pending' : existingPlaylist.slot49_update_status;
    const slot49_delete_status = isSlotUpdated('slot49', slot49_deletetime, existingPlaylist.slot49_deletetime) ? 'pending' : existingPlaylist.slot49_delete_status;

    const slot50_update_status = isSlotUpdated('slot50', slot50_updatetime, existingPlaylist.slot50_updatetime) ? 'pending' : existingPlaylist.slot50_update_status;
    const slot50_delete_status = isSlotUpdated('slot50', slot50_deletetime, existingPlaylist.slot50_deletetime) ? 'pending' : existingPlaylist.slot50_delete_status;

    const slot51_update_status = isSlotUpdated('slot51', slot51_updatetime, existingPlaylist.slot51_updatetime) ? 'pending' : existingPlaylist.slot51_update_status;
    const slot51_delete_status = isSlotUpdated('slot51', slot51_deletetime, existingPlaylist.slot51_deletetime) ? 'pending' : existingPlaylist.slot51_delete_status;

    const slot52_update_status = isSlotUpdated('slot52', slot52_updatetime, existingPlaylist.slot52_updatetime) ? 'pending' : existingPlaylist.slot52_update_status;
    const slot52_delete_status = isSlotUpdated('slot52', slot52_deletetime, existingPlaylist.slot52_deletetime) ? 'pending' : existingPlaylist.slot52_delete_status;

    const slot53_update_status = isSlotUpdated('slot53', slot53_updatetime, existingPlaylist.slot53_updatetime) ? 'pending' : existingPlaylist.slot53_update_status;
    const slot53_delete_status = isSlotUpdated('slot53', slot53_deletetime, existingPlaylist.slot53_deletetime) ? 'pending' : existingPlaylist.slot53_delete_status;

    const slot54_update_status = isSlotUpdated('slot54', slot54_updatetime, existingPlaylist.slot54_updatetime) ? 'pending' : existingPlaylist.slot54_update_status;
    const slot54_delete_status = isSlotUpdated('slot54', slot54_deletetime, existingPlaylist.slot54_deletetime) ? 'pending' : existingPlaylist.slot54_delete_status;

    const slot55_update_status = isSlotUpdated('slot55', slot55_updatetime, existingPlaylist.slot55_updatetime) ? 'pending' : existingPlaylist.slot55_update_status;
    const slot55_delete_status = isSlotUpdated('slot55', slot55_deletetime, existingPlaylist.slot55_deletetime) ? 'pending' : existingPlaylist.slot55_delete_status;

    const slot56_update_status = isSlotUpdated('slot56', slot56_updatetime, existingPlaylist.slot56_updatetime) ? 'pending' : existingPlaylist.slot56_update_status;
    const slot56_delete_status = isSlotUpdated('slot56', slot56_deletetime, existingPlaylist.slot56_deletetime) ? 'pending' : existingPlaylist.slot56_delete_status;

    const slot57_update_status = isSlotUpdated('slot57', slot57_updatetime, existingPlaylist.slot57_updatetime) ? 'pending' : existingPlaylist.slot57_update_status;
    const slot57_delete_status = isSlotUpdated('slot57', slot57_deletetime, existingPlaylist.slot57_deletetime) ? 'pending' : existingPlaylist.slot57_delete_status;

    const slot58_update_status = isSlotUpdated('slot58', slot58_updatetime, existingPlaylist.slot58_updatetime) ? 'pending' : existingPlaylist.slot58_update_status;
    const slot58_delete_status = isSlotUpdated('slot58', slot58_deletetime, existingPlaylist.slot58_deletetime) ? 'pending' : existingPlaylist.slot58_delete_status;

    const slot59_update_status = isSlotUpdated('slot59', slot59_updatetime, existingPlaylist.slot59_updatetime) ? 'pending' : existingPlaylist.slot59_update_status;
    const slot59_delete_status = isSlotUpdated('slot59', slot59_deletetime, existingPlaylist.slot59_deletetime) ? 'pending' : existingPlaylist.slot59_delete_status;

    const slot60_update_status = isSlotUpdated('slot60', slot60_updatetime, existingPlaylist.slot60_updatetime) ? 'pending' : existingPlaylist.slot60_update_status;
    const slot60_delete_status = isSlotUpdated('slot60', slot60_deletetime, existingPlaylist.slot60_deletetime) ? 'pending' : existingPlaylist.slot60_delete_status;

    const slot61_update_status = isSlotUpdated('slot61', slot61_updatetime, existingPlaylist.slot61_updatetime) ? 'pending' : existingPlaylist.slot61_update_status;
    const slot61_delete_status = isSlotUpdated('slot61', slot61_deletetime, existingPlaylist.slot61_deletetime) ? 'pending' : existingPlaylist.slot61_delete_status;

    const slot62_update_status = isSlotUpdated('slot62', slot62_updatetime, existingPlaylist.slot62_updatetime) ? 'pending' : existingPlaylist.slot62_update_status;
    const slot62_delete_status = isSlotUpdated('slot62', slot62_deletetime, existingPlaylist.slot62_deletetime) ? 'pending' : existingPlaylist.slot62_delete_status;

    const slot63_update_status = isSlotUpdated('slot63', slot63_updatetime, existingPlaylist.slot63_updatetime) ? 'pending' : existingPlaylist.slot63_update_status;
    const slot63_delete_status = isSlotUpdated('slot63', slot63_deletetime, existingPlaylist.slot63_deletetime) ? 'pending' : existingPlaylist.slot63_delete_status;

    const slot64_update_status = isSlotUpdated('slot64', slot64_updatetime, existingPlaylist.slot64_updatetime) ? 'pending' : existingPlaylist.slot64_update_status;
    const slot64_delete_status = isSlotUpdated('slot64', slot64_deletetime, existingPlaylist.slot64_deletetime) ? 'pending' : existingPlaylist.slot64_delete_status;

    const slot65_update_status = isSlotUpdated('slot65', slot65_updatetime, existingPlaylist.slot65_updatetime) ? 'pending' : existingPlaylist.slot65_update_status;
    const slot65_delete_status = isSlotUpdated('slot65', slot65_deletetime, existingPlaylist.slot65_deletetime) ? 'pending' : existingPlaylist.slot65_delete_status;

    const slot66_update_status = isSlotUpdated('slot66', slot66_updatetime, existingPlaylist.slot66_updatetime) ? 'pending' : existingPlaylist.slot66_update_status;
    const slot66_delete_status = isSlotUpdated('slot66', slot66_deletetime, existingPlaylist.slot66_deletetime) ? 'pending' : existingPlaylist.slot66_delete_status;

    const slot67_update_status = isSlotUpdated('slot67', slot67_updatetime, existingPlaylist.slot67_updatetime) ? 'pending' : existingPlaylist.slot67_update_status;
    const slot67_delete_status = isSlotUpdated('slot67', slot67_deletetime, existingPlaylist.slot67_deletetime) ? 'pending' : existingPlaylist.slot67_delete_status;

    const slot68_update_status = isSlotUpdated('slot68', slot68_updatetime, existingPlaylist.slot68_updatetime) ? 'pending' : existingPlaylist.slot68_update_status;
    const slot68_delete_status = isSlotUpdated('slot68', slot68_deletetime, existingPlaylist.slot68_deletetime) ? 'pending' : existingPlaylist.slot68_delete_status;

    const slot69_update_status = isSlotUpdated('slot69', slot69_updatetime, existingPlaylist.slot69_updatetime) ? 'pending' : existingPlaylist.slot69_update_status;
    const slot69_delete_status = isSlotUpdated('slot69', slot69_deletetime, existingPlaylist.slot69_deletetime) ? 'pending' : existingPlaylist.slot69_delete_status;

    const slot70_update_status = isSlotUpdated('slot70', slot70_updatetime, existingPlaylist.slot70_updatetime) ? 'pending' : existingPlaylist.slot70_update_status;
    const slot70_delete_status = isSlotUpdated('slot70', slot70_deletetime, existingPlaylist.slot70_deletetime) ? 'pending' : existingPlaylist.slot70_delete_status;

    const slot71_update_status = isSlotUpdated('slot71', slot71_updatetime, existingPlaylist.slot71_updatetime) ? 'pending' : existingPlaylist.slot71_update_status;
    const slot71_delete_status = isSlotUpdated('slot71', slot71_deletetime, existingPlaylist.slot71_deletetime) ? 'pending' : existingPlaylist.slot71_delete_status;

    const slot72_update_status = isSlotUpdated('slot72', slot72_updatetime, existingPlaylist.slot72_updatetime) ? 'pending' : existingPlaylist.slot72_update_status;
    const slot72_delete_status = isSlotUpdated('slot72', slot72_deletetime, existingPlaylist.slot72_deletetime) ? 'pending' : existingPlaylist.slot72_delete_status;

    const slot73_update_status = isSlotUpdated('slot73', slot73_updatetime, existingPlaylist.slot73_updatetime) ? 'pending' : existingPlaylist.slot73_update_status;
    const slot73_delete_status = isSlotUpdated('slot73', slot73_deletetime, existingPlaylist.slot73_deletetime) ? 'pending' : existingPlaylist.slot73_delete_status;

    const slot74_update_status = isSlotUpdated('slot74', slot74_updatetime, existingPlaylist.slot74_updatetime) ? 'pending' : existingPlaylist.slot74_update_status;
    const slot74_delete_status = isSlotUpdated('slot74', slot74_deletetime, existingPlaylist.slot74_deletetime) ? 'pending' : existingPlaylist.slot74_delete_status;

    const slot75_update_status = isSlotUpdated('slot75', slot75_updatetime, existingPlaylist.slot75_updatetime) ? 'pending' : existingPlaylist.slot75_update_status;
    const slot75_delete_status = isSlotUpdated('slot75', slot75_deletetime, existingPlaylist.slot75_deletetime) ? 'pending' : existingPlaylist.slot75_delete_status;

    const slot76_update_status = isSlotUpdated('slot76', slot76_updatetime, existingPlaylist.slot76_updatetime) ? 'pending' : existingPlaylist.slot76_update_status;
    const slot76_delete_status = isSlotUpdated('slot76', slot76_deletetime, existingPlaylist.slot76_deletetime) ? 'pending' : existingPlaylist.slot76_delete_status;

    const slot77_update_status = isSlotUpdated('slot77', slot77_updatetime, existingPlaylist.slot77_updatetime) ? 'pending' : existingPlaylist.slot77_update_status;
    const slot77_delete_status = isSlotUpdated('slot77', slot77_deletetime, existingPlaylist.slot77_deletetime) ? 'pending' : existingPlaylist.slot77_delete_status;

    const slot78_update_status = isSlotUpdated('slot78', slot78_updatetime, existingPlaylist.slot78_updatetime) ? 'pending' : existingPlaylist.slot78_update_status;
    const slot78_delete_status = isSlotUpdated('slot78', slot78_deletetime, existingPlaylist.slot78_deletetime) ? 'pending' : existingPlaylist.slot78_delete_status;

    const slot79_update_status = isSlotUpdated('slot79', slot79_updatetime, existingPlaylist.slot79_updatetime) ? 'pending' : existingPlaylist.slot79_update_status;
    const slot79_delete_status = isSlotUpdated('slot79', slot79_deletetime, existingPlaylist.slot79_deletetime) ? 'pending' : existingPlaylist.slot79_delete_status;

    const slot80_update_status = isSlotUpdated('slot80', slot80_updatetime, existingPlaylist.slot80_updatetime) ? 'pending' : existingPlaylist.slot80_update_status;
    const slot80_delete_status = isSlotUpdated('slot80', slot80_deletetime, existingPlaylist.slot80_deletetime) ? 'pending' : existingPlaylist.slot80_delete_status;

    const slot81_update_status = isSlotUpdated('slot81', slot81_updatetime, existingPlaylist.slot81_updatetime) ? 'pending' : existingPlaylist.slot81_update_status;
    const slot81_delete_status = isSlotUpdated('slot81', slot81_deletetime, existingPlaylist.slot81_deletetime) ? 'pending' : existingPlaylist.slot81_delete_status;

    const slot82_update_status = isSlotUpdated('slot82', slot82_updatetime, existingPlaylist.slot82_updatetime) ? 'pending' : existingPlaylist.slot82_update_status;
    const slot82_delete_status = isSlotUpdated('slot82', slot82_deletetime, existingPlaylist.slot82_deletetime) ? 'pending' : existingPlaylist.slot82_delete_status;

    const slot83_update_status = isSlotUpdated('slot83', slot83_updatetime, existingPlaylist.slot83_updatetime) ? 'pending' : existingPlaylist.slot83_update_status;
    const slot83_delete_status = isSlotUpdated('slot83', slot83_deletetime, existingPlaylist.slot83_deletetime) ? 'pending' : existingPlaylist.slot83_delete_status;

    const slot84_update_status = isSlotUpdated('slot84', slot84_updatetime, existingPlaylist.slot84_updatetime) ? 'pending' : existingPlaylist.slot84_update_status;
    const slot84_delete_status = isSlotUpdated('slot84', slot84_deletetime, existingPlaylist.slot84_deletetime) ? 'pending' : existingPlaylist.slot84_delete_status;

    const slot85_update_status = isSlotUpdated('slot85', slot85_updatetime, existingPlaylist.slot85_updatetime) ? 'pending' : existingPlaylist.slot85_update_status;
    const slot85_delete_status = isSlotUpdated('slot85', slot85_deletetime, existingPlaylist.slot85_deletetime) ? 'pending' : existingPlaylist.slot85_delete_status;

    const slot86_update_status = isSlotUpdated('slot86', slot86_updatetime, existingPlaylist.slot86_updatetime) ? 'pending' : existingPlaylist.slot86_update_status;
    const slot86_delete_status = isSlotUpdated('slot86', slot86_deletetime, existingPlaylist.slot86_deletetime) ? 'pending' : existingPlaylist.slot86_delete_status;

    const slot87_update_status = isSlotUpdated('slot87', slot87_updatetime, existingPlaylist.slot87_updatetime) ? 'pending' : existingPlaylist.slot87_update_status;
    const slot87_delete_status = isSlotUpdated('slot87', slot87_deletetime, existingPlaylist.slot87_deletetime) ? 'pending' : existingPlaylist.slot87_delete_status;

    const slot88_update_status = isSlotUpdated('slot88', slot88_updatetime, existingPlaylist.slot88_updatetime) ? 'pending' : existingPlaylist.slot88_update_status;
    const slot88_delete_status = isSlotUpdated('slot88', slot88_deletetime, existingPlaylist.slot88_deletetime) ? 'pending' : existingPlaylist.slot88_delete_status;

    const slot89_update_status = isSlotUpdated('slot89', slot89_updatetime, existingPlaylist.slot89_updatetime) ? 'pending' : existingPlaylist.slot89_update_status;
    const slot89_delete_status = isSlotUpdated('slot89', slot89_deletetime, existingPlaylist.slot89_deletetime) ? 'pending' : existingPlaylist.slot89_delete_status;

    const slot90_update_status = isSlotUpdated('slot90', slot90_updatetime, existingPlaylist.slot90_updatetime) ? 'pending' : existingPlaylist.slot90_update_status;
    const slot90_delete_status = isSlotUpdated('slot90', slot90_deletetime, existingPlaylist.slot90_deletetime) ? 'pending' : existingPlaylist.slot90_delete_status;

    const slot91_update_status = isSlotUpdated('slot91', slot91_updatetime, existingPlaylist.slot91_updatetime) ? 'pending' : existingPlaylist.slot91_update_status;
    const slot91_delete_status = isSlotUpdated('slot91', slot91_deletetime, existingPlaylist.slot91_deletetime) ? 'pending' : existingPlaylist.slot91_delete_status;

    const slot92_update_status = isSlotUpdated('slot92', slot92_updatetime, existingPlaylist.slot92_updatetime) ? 'pending' : existingPlaylist.slot92_update_status;
    const slot92_delete_status = isSlotUpdated('slot92', slot92_deletetime, existingPlaylist.slot92_deletetime) ? 'pending' : existingPlaylist.slot92_delete_status;

    const slot93_update_status = isSlotUpdated('slot93', slot93_updatetime, existingPlaylist.slot93_updatetime) ? 'pending' : existingPlaylist.slot93_update_status;
    const slot93_delete_status = isSlotUpdated('slot93', slot93_deletetime, existingPlaylist.slot93_deletetime) ? 'pending' : existingPlaylist.slot93_delete_status;

    const slot94_update_status = isSlotUpdated('slot94', slot94_updatetime, existingPlaylist.slot94_updatetime) ? 'pending' : existingPlaylist.slot94_update_status;
    const slot94_delete_status = isSlotUpdated('slot94', slot94_deletetime, existingPlaylist.slot94_deletetime) ? 'pending' : existingPlaylist.slot94_delete_status;

    const slot95_update_status = isSlotUpdated('slot95', slot95_updatetime, existingPlaylist.slot95_updatetime) ? 'pending' : existingPlaylist.slot95_update_status;
    const slot95_delete_status = isSlotUpdated('slot95', slot95_deletetime, existingPlaylist.slot95_deletetime) ? 'pending' : existingPlaylist.slot95_delete_status;

    const slot96_update_status = isSlotUpdated('slot96', slot96_updatetime, existingPlaylist.slot96_updatetime) ? 'pending' : existingPlaylist.slot96_update_status;
    const slot96_delete_status = isSlotUpdated('slot96', slot96_deletetime, existingPlaylist.slot96_deletetime) ? 'pending' : existingPlaylist.slot96_delete_status;

    const slot97_update_status = isSlotUpdated('slot97', slot97_updatetime, existingPlaylist.slot97_updatetime) ? 'pending' : existingPlaylist.slot97_update_status;
    const slot97_delete_status = isSlotUpdated('slot97', slot97_deletetime, existingPlaylist.slot97_deletetime) ? 'pending' : existingPlaylist.slot97_delete_status;

    const slot98_update_status = isSlotUpdated('slot98', slot98_updatetime, existingPlaylist.slot98_updatetime) ? 'pending' : existingPlaylist.slot98_update_status;
    const slot98_delete_status = isSlotUpdated('slot98', slot98_deletetime, existingPlaylist.slot98_deletetime) ? 'pending' : existingPlaylist.slot98_delete_status;

    const slot99_update_status = isSlotUpdated('slot99', slot99_updatetime, existingPlaylist.slot99_updatetime) ? 'pending' : existingPlaylist.slot99_update_status;
    const slot99_delete_status = isSlotUpdated('slot99', slot99_deletetime, existingPlaylist.slot99_deletetime) ? 'pending' : existingPlaylist.slot99_delete_status;

    const slot100_update_status = isSlotUpdated('slot100', slot100_updatetime, existingPlaylist.slot100_updatetime) ? 'pending' : existingPlaylist.slot100_update_status;
    const slot100_delete_status = isSlotUpdated('slot100', slot100_deletetime, existingPlaylist.slot100_deletetime) ? 'pending' : existingPlaylist.slot100_delete_status;


    await pool.query(
      `UPDATE playlists1235 SET 
        playlistname= $1, playlistdescription = $2, screen_id = $3,
            slot1 = $4, slot1_updatetime = $5, slot1_deletetime = $6, slot1_update_status = $7, slot1_delete_status = $8,
    slot2 = $9, slot2_updatetime = $10, slot2_deletetime = $11, slot2_update_status = $12, slot2_delete_status = $13,
    slot3 = $14, slot3_updatetime = $15, slot3_deletetime = $16, slot3_update_status = $17, slot3_delete_status = $18,
    slot4 = $19, slot4_updatetime = $20, slot4_deletetime = $21, slot4_update_status = $22, slot4_delete_status = $23,
    slot5 = $24, slot5_updatetime = $25, slot5_deletetime = $26, slot5_update_status = $27, slot5_delete_status = $28,

    slot6 = $29, slot6_updatetime = $30, slot6_deletetime = $31, slot6_update_status = $32, slot6_delete_status = $33,

    slot7 = $34, slot7_updatetime = $35, slot7_deletetime = $36, slot7_update_status = $37, slot7_delete_status = $38,

    slot8 = $39, slot8_updatetime = $40, slot8_deletetime = $41, slot8_update_status = $42, slot8_delete_status = $43,

    slot9 = $44, slot9_updatetime = $45, slot9_deletetime = $46, slot9_update_status = $47, slot9_delete_status = $48,

    slot10 = $49, slot10_updatetime = $50, slot10_deletetime = $51, slot10_update_status = $52, slot10_delete_status = $53,

    slot11 = $54, slot11_updatetime = $55, slot11_deletetime = $56, slot11_update_status = $57, slot11_delete_status = $58,

    slot12 = $59, slot12_updatetime = $60, slot12_deletetime = $61, slot12_update_status = $62, slot12_delete_status = $63,

    slot13 = $64, slot13_updatetime = $65, slot13_deletetime = $66, slot13_update_status = $67, slot13_delete_status = $68,

    slot14 = $69, slot14_updatetime = $70, slot14_deletetime = $71, slot14_update_status = $72, slot14_delete_status = $73,

    slot15 = $74, slot15_updatetime = $75, slot15_deletetime = $76, slot15_update_status = $77, slot15_delete_status = $78,

    slot16 = $79, slot16_updatetime = $80, slot16_deletetime = $81, slot16_update_status = $82, slot16_delete_status = $83,

    slot17 = $84, slot17_updatetime = $85, slot17_deletetime = $86, slot17_update_status = $87, slot17_delete_status = $88,

    slot18 = $89, slot18_updatetime = $90, slot18_deletetime = $91, slot18_update_status = $92, slot18_delete_status = $93,

    slot19 = $94, slot19_updatetime = $95, slot19_deletetime = $96, slot19_update_status = $97, slot19_delete_status = $98,

    slot20 = $99, slot20_updatetime = $100, slot20_deletetime = $101, slot20_update_status = $102, slot20_delete_status = $103,

    slot21 = $104, slot21_updatetime = $105, slot21_deletetime = $106, slot21_update_status = $107, slot21_delete_status = $108,

    slot22 = $109, slot22_updatetime = $110, slot22_deletetime = $111, slot22_update_status = $112, slot22_delete_status = $113,

    slot23 = $114, slot23_updatetime = $115, slot23_deletetime = $116, slot23_update_status = $117, slot23_delete_status = $118,

    slot24 = $119, slot24_updatetime = $120, slot24_deletetime = $121, slot24_update_status = $122, slot24_delete_status = $123,

    slot25 = $124, slot25_updatetime = $125, slot25_deletetime = $126, slot25_update_status = $127, slot25_delete_status = $128,

    slot26 = $129, slot26_updatetime = $130, slot26_deletetime = $131, slot26_update_status = $132, slot26_delete_status = $133,

    slot27 = $134, slot27_updatetime = $135, slot27_deletetime = $136, slot27_update_status = $137, slot27_delete_status = $138,

    slot28 = $139, slot28_updatetime = $140, slot28_deletetime = $141, slot28_update_status = $142, slot28_delete_status = $143,

    slot29 = $144, slot29_updatetime = $145, slot29_deletetime = $146, slot29_update_status = $147, slot29_delete_status = $148,

    slot30 = $149, slot30_updatetime = $150, slot30_deletetime = $151, slot30_update_status = $152, slot30_delete_status = $153,

    slot31 = $154, slot31_updatetime = $155, slot31_deletetime = $156, slot31_update_status = $157, slot31_delete_status = $158,

    slot32 = $159, slot32_updatetime = $160, slot32_deletetime = $161, slot32_update_status = $162, slot32_delete_status = $163,

    slot33 = $164, slot33_updatetime = $165, slot33_deletetime = $166, slot33_update_status = $167, slot33_delete_status = $168,

    slot34 = $169, slot34_updatetime = $170, slot34_deletetime = $171, slot34_update_status = $172, slot34_delete_status = $173,

    slot35 = $174, slot35_updatetime = $175, slot35_deletetime = $176, slot35_update_status = $177, slot35_delete_status = $178,

    slot36 = $179, slot36_updatetime = $180, slot36_deletetime = $181, slot36_update_status = $182, slot36_delete_status = $183,

    slot37 = $184, slot37_updatetime = $185, slot37_deletetime = $186, slot37_update_status = $187, slot37_delete_status = $188,

    slot38 = $189, slot38_updatetime = $190, slot38_deletetime = $191, slot38_update_status = $192, slot38_delete_status = $193,

    slot39 = $194, slot39_updatetime = $195, slot39_deletetime = $196, slot39_update_status = $197, slot39_delete_status = $198,

    slot40 = $199, slot40_updatetime = $200, slot40_deletetime = $201, slot40_update_status = $202, slot40_delete_status = $203,

    slot41 = $204, slot41_updatetime = $205, slot41_deletetime = $206, slot41_update_status = $207, slot41_delete_status = $208,

    slot42 = $209, slot42_updatetime = $210, slot42_deletetime = $211, slot42_update_status = $212, slot42_delete_status = $213,

    slot43 = $214, slot43_updatetime = $215, slot43_deletetime = $216, slot43_update_status = $217, slot43_delete_status = $218,

    slot44 = $219, slot44_updatetime = $220, slot44_deletetime = $221, slot44_update_status = $222, slot44_delete_status = $223,

    slot45 = $224, slot45_updatetime = $225, slot45_deletetime = $226, slot45_update_status = $227, slot45_delete_status = $228,

    slot46 = $229, slot46_updatetime = $230, slot46_deletetime = $231, slot46_update_status = $232, slot46_delete_status = $233,

    slot47 = $234, slot47_updatetime = $235, slot47_deletetime = $236, slot47_update_status = $237, slot47_delete_status = $238,

    slot48 = $239, slot48_updatetime = $240, slot48_deletetime = $241, slot48_update_status = $242, slot48_delete_status = $243,

    slot49 = $244, slot49_updatetime = $245, slot49_deletetime = $246, slot49_update_status = $247, slot49_delete_status = $248,

    slot50 = $249, slot50_updatetime = $250, slot50_deletetime = $251, slot50_update_status = $252, slot50_delete_status = $253,

    slot51 = $254, slot51_updatetime = $255, slot51_deletetime = $256, slot51_update_status = $257, slot51_delete_status = $258,

    slot52 = $259, slot52_updatetime = $260, slot52_deletetime = $261, slot52_update_status = $262, slot52_delete_status = $263,

    slot53 = $264, slot53_updatetime = $265, slot53_deletetime = $266, slot53_update_status = $267, slot53_delete_status = $268,

    slot54 = $269, slot54_updatetime = $270, slot54_deletetime = $271, slot54_update_status = $272, slot54_delete_status = $273,

    slot55 = $274, slot55_updatetime = $275, slot55_deletetime = $276, slot55_update_status = $277, slot55_delete_status = $278,

    slot56 = $279, slot56_updatetime = $280, slot56_deletetime = $281, slot56_update_status = $282, slot56_delete_status = $283,

    slot57 = $284, slot57_updatetime = $285, slot57_deletetime = $286, slot57_update_status = $287, slot57_delete_status = $288,

    slot58 = $289, slot58_updatetime = $290, slot58_deletetime = $291, slot58_update_status = $292, slot58_delete_status = $293,

    slot59 = $294, slot59_updatetime = $295, slot59_deletetime = $296, slot59_update_status = $297, slot59_delete_status = $298,

    slot60 = $299, slot60_updatetime = $300, slot60_deletetime = $301, slot60_update_status = $302, slot60_delete_status = $303,

    slot61 = $304, slot61_updatetime = $305, slot61_deletetime = $306, slot61_update_status = $307, slot61_delete_status = $308,

    slot62 = $309, slot62_updatetime = $310, slot62_deletetime = $311, slot62_update_status = $312, slot62_delete_status = $313,
  
    slot63 = $314, slot63_updatetime = $315, slot63_deletetime = $316, slot63_update_status = $317, slot63_delete_status = $318,

    slot64 = $319, slot64_updatetime = $320, slot64_deletetime = $321, slot64_update_status = $322, slot64_delete_status = $323,

    slot65 = $324, slot65_updatetime = $325, slot65_deletetime = $326, slot65_update_status = $327, slot65_delete_status = $328,

    slot66 = $329, slot66_updatetime = $330, slot66_deletetime = $331, slot66_update_status = $332, slot66_delete_status = $333,

    slot67 = $334, slot67_updatetime = $335, slot67_deletetime = $336, slot67_update_status = $337, slot67_delete_status = $338,

    slot68 = $339, slot68_updatetime = $340, slot68_deletetime = $341, slot68_update_status = $342, slot68_delete_status = $343,

    slot69 = $344, slot69_updatetime = $345, slot69_deletetime = $346, slot69_update_status = $347, slot69_delete_status = $348,

    slot70 = $349, slot70_updatetime = $350, slot70_deletetime = $351, slot70_update_status = $352, slot70_delete_status = $353,

    slot71 = $354, slot71_updatetime = $355, slot71_deletetime = $356, slot71_update_status = $357, slot71_delete_status = $358,

    slot72 = $359, slot72_updatetime = $360, slot72_deletetime = $361, slot72_update_status = $362, slot72_delete_status = $363,

    slot73 = $364, slot73_updatetime = $365, slot73_deletetime = $366, slot73_update_status = $367, slot73_delete_status = $368,

    slot74 = $369, slot74_updatetime = $370, slot74_deletetime = $371, slot74_update_status = $372, slot74_delete_status = $373,

    slot75 = $374, slot75_updatetime = $375, slot75_deletetime = $376, slot75_update_status = $377, slot75_delete_status = $378,

    slot76 = $379, slot76_updatetime = $380, slot76_deletetime = $381, slot76_update_status = $382, slot76_delete_status = $383,

    slot77 = $384, slot77_updatetime = $385, slot77_deletetime = $386, slot77_update_status = $387, slot77_delete_status = $388,

    slot78 = $389, slot78_updatetime = $390, slot78_deletetime = $391, slot78_update_status = $392, slot78_delete_status = $393,

    slot79 = $394, slot79_updatetime = $395, slot79_deletetime = $396, slot79_update_status = $397, slot79_delete_status = $398,

    slot80 = $399, slot80_updatetime = $400, slot80_deletetime = $401, slot80_update_status = $402, slot80_delete_status = $403,

    slot81 = $404, slot81_updatetime = $405, slot81_deletetime = $406, slot81_update_status = $407, slot81_delete_status = $408,

    slot82 = $409, slot82_updatetime = $410, slot82_deletetime = $411, slot82_update_status = $412, slot82_delete_status = $413,

    slot83 = $414, slot83_updatetime = $415, slot83_deletetime = $416, slot83_update_status = $417, slot83_delete_status = $418,

    slot84 = $419, slot84_updatetime = $420, slot84_deletetime = $421, slot84_update_status = $422, slot84_delete_status = $423,

    slot85 = $424, slot85_updatetime = $425, slot85_deletetime = $426, slot85_update_status = $427, slot85_delete_status = $428,

    slot86 = $429, slot86_updatetime = $430, slot86_deletetime = $431, slot86_update_status = $432, slot86_delete_status = $433,

    slot87 = $434, slot87_updatetime = $435, slot87_deletetime = $436, slot87_update_status = $437, slot87_delete_status = $438,

    slot88 = $439, slot88_updatetime = $440, slot88_deletetime = $441, slot88_update_status = $442, slot88_delete_status = $443,

    slot89 = $444, slot89_updatetime = $445, slot89_deletetime = $446, slot89_update_status = $447, slot89_delete_status = $448,

    slot90 = $449, slot90_updatetime = $450, slot90_deletetime = $451, slot90_update_status = $452, slot90_delete_status = $453,

    slot91 = $454, slot91_updatetime = $455, slot91_deletetime = $456, slot91_update_status = $457, slot91_delete_status = $458,

    slot92 = $459, slot92_updatetime = $460, slot92_deletetime = $461, slot92_update_status = $462, slot92_delete_status = $463,

    slot93 = $464, slot93_updatetime = $465, slot93_deletetime = $466, slot93_update_status = $467, slot93_delete_status = $468,

    slot94 = $469, slot94_updatetime = $470, slot94_deletetime = $471, slot94_update_status = $472, slot94_delete_status = $473,

    slot95 = $474, slot95_updatetime = $475, slot95_deletetime = $476, slot95_update_status = $477, slot95_delete_status = $478,

    slot96 = $479, slot96_updatetime = $480, slot96_deletetime = $481, slot96_update_status = $482, slot96_delete_status = $483,

    slot97 = $484, slot97_updatetime = $485, slot97_deletetime = $486, slot97_update_status = $487, slot97_delete_status = $488,

    slot98 = $489, slot98_updatetime = $490, slot98_deletetime = $491, slot98_update_status = $492, slot98_delete_status = $493,

    slot99 = $494, slot99_updatetime = $495, slot99_deletetime = $496, slot99_update_status = $497, slot99_delete_status = $498,

    slot100 = $499, slot100_updatetime = $500, slot100_deletetime = $501, slot100_update_status = $502, slot100_delete_status = $503

WHERE id = $504`,
      [
        playlistname,
        playlistdescription,
        `{${screenidArray.join(',')}}`,
        slot1,
        parseTimestamp(slot1_updatetime),
        parseTimestamp(slot1_deletetime),
        slot1_update_status,
        slot1_delete_status,
        slot2,
        parseTimestamp(slot2_updatetime),
        parseTimestamp(slot2_deletetime),
        slot2_update_status,
        slot2_delete_status,
        slot3,
        parseTimestamp(slot3_updatetime),
        parseTimestamp(slot3_deletetime),
        slot3_update_status,
        slot3_delete_status,
        slot4,
        parseTimestamp(slot4_updatetime),
        parseTimestamp(slot4_deletetime),
        slot4_update_status,
        slot4_delete_status,
        slot5,
        parseTimestamp(slot5_updatetime),
        parseTimestamp(slot5_deletetime),
        slot5_update_status,
        slot5_delete_status,
        slot6,
        parseTimestamp(slot6_updatetime),
        parseTimestamp(slot6_deletetime),
        slot6_update_status,
        slot6_delete_status,
    
        slot7,
        parseTimestamp(slot7_updatetime),
        parseTimestamp(slot7_deletetime),
        slot7_update_status,
        slot7_delete_status,
    
        slot8,
        parseTimestamp(slot8_updatetime),
        parseTimestamp(slot8_deletetime),
        slot8_update_status,
        slot8_delete_status,
    
        slot9,
        parseTimestamp(slot9_updatetime),
        parseTimestamp(slot9_deletetime),
        slot9_update_status,
        slot9_delete_status,
    
        slot10,
        parseTimestamp(slot10_updatetime),
        parseTimestamp(slot10_deletetime),
        slot10_update_status,
        slot10_delete_status,
    
        slot11,
        parseTimestamp(slot11_updatetime),
        parseTimestamp(slot11_deletetime),
        slot11_update_status,
        slot11_delete_status,
    
        slot12,
        parseTimestamp(slot12_updatetime),
        parseTimestamp(slot12_deletetime),
        slot12_update_status,
        slot12_delete_status,
    
        slot13,
        parseTimestamp(slot13_updatetime),
        parseTimestamp(slot13_deletetime),
        slot13_update_status,
        slot13_delete_status,
    
        slot14,
        parseTimestamp(slot14_updatetime),
        parseTimestamp(slot14_deletetime),
        slot14_update_status,
        slot14_delete_status,
    
        slot15,
        parseTimestamp(slot15_updatetime),
        parseTimestamp(slot15_deletetime),
        slot15_update_status,
        slot15_delete_status,
    
        slot16,
        parseTimestamp(slot16_updatetime),
        parseTimestamp(slot16_deletetime),
        slot16_update_status,
        slot16_delete_status,
    
        slot17,
        parseTimestamp(slot17_updatetime),
        parseTimestamp(slot17_deletetime),
        slot17_update_status,
        slot17_delete_status,
    
        slot18,
        parseTimestamp(slot18_updatetime),
        parseTimestamp(slot18_deletetime),
        slot18_update_status,
        slot18_delete_status,
    
        slot19,
        parseTimestamp(slot19_updatetime),
        parseTimestamp(slot19_deletetime),
        slot19_update_status,
        slot19_delete_status,
    
        slot20,
        parseTimestamp(slot20_updatetime),
        parseTimestamp(slot20_deletetime),
        slot20_update_status,
        slot20_delete_status,
    
        slot21,
        parseTimestamp(slot21_updatetime),
        parseTimestamp(slot21_deletetime),
        slot21_update_status,
        slot21_delete_status,
    
        slot22,
        parseTimestamp(slot22_updatetime),
        parseTimestamp(slot22_deletetime),
        slot22_update_status,
        slot22_delete_status,
    
        slot23,
        parseTimestamp(slot23_updatetime),
        parseTimestamp(slot23_deletetime),
        slot23_update_status,
        slot23_delete_status,
    
        slot24,
        parseTimestamp(slot24_updatetime),
        parseTimestamp(slot24_deletetime),
        slot24_update_status,
        slot24_delete_status,
    
        slot25,
        parseTimestamp(slot25_updatetime),
        parseTimestamp(slot25_deletetime),
        slot25_update_status,
        slot25_delete_status,
    
        slot26,
        parseTimestamp(slot26_updatetime),
        parseTimestamp(slot26_deletetime),
        slot26_update_status,
        slot26_delete_status,
    
        slot27,
        parseTimestamp(slot27_updatetime),
        parseTimestamp(slot27_deletetime),
        slot27_update_status,
        slot27_delete_status,
    
        slot28,
        parseTimestamp(slot28_updatetime),
        parseTimestamp(slot28_deletetime),
        slot28_update_status,
        slot28_delete_status,
    
        slot29,
        parseTimestamp(slot29_updatetime),
        parseTimestamp(slot29_deletetime),
        slot29_update_status,
        slot29_delete_status,
    
        slot30,
        parseTimestamp(slot30_updatetime),
        parseTimestamp(slot30_deletetime),
        slot30_update_status,
        slot30_delete_status,
    
        slot31,
        parseTimestamp(slot31_updatetime),
        parseTimestamp(slot31_deletetime),
        slot31_update_status,
        slot31_delete_status,
    
        slot32,
        parseTimestamp(slot32_updatetime),
        parseTimestamp(slot32_deletetime),
        slot32_update_status,
        slot32_delete_status,
    
        slot33,
        parseTimestamp(slot33_updatetime),
        parseTimestamp(slot33_deletetime),
        slot33_update_status,
        slot33_delete_status,
    
        slot34,
        parseTimestamp(slot34_updatetime),
        parseTimestamp(slot34_deletetime),
        slot34_update_status,
        slot34_delete_status,
    
        slot35,
        parseTimestamp(slot35_updatetime),
        parseTimestamp(slot35_deletetime),
        slot35_update_status,
        slot35_delete_status,
    
        slot36,
        parseTimestamp(slot36_updatetime),
        parseTimestamp(slot36_deletetime),
        slot36_update_status,
        slot36_delete_status,
    
        slot37,
        parseTimestamp(slot37_updatetime),
        parseTimestamp(slot37_deletetime),
        slot37_update_status,
        slot37_delete_status,
    
        slot38,
        parseTimestamp(slot38_updatetime),
        parseTimestamp(slot38_deletetime),
        slot38_update_status,
        slot38_delete_status,
    
        slot39,
        parseTimestamp(slot39_updatetime),
        parseTimestamp(slot39_deletetime),
        slot39_update_status,
        slot39_delete_status,
    
        slot40,
        parseTimestamp(slot40_updatetime),
        parseTimestamp(slot40_deletetime),
        slot40_update_status,
        slot40_delete_status,
    
        slot41,
        parseTimestamp(slot41_updatetime),
        parseTimestamp(slot41_deletetime),
        slot41_update_status,
        slot41_delete_status,
    
        slot42,
        parseTimestamp(slot42_updatetime),
        parseTimestamp(slot42_deletetime),
        slot42_update_status,
        slot42_delete_status,
    
        slot43,
        parseTimestamp(slot43_updatetime),
        parseTimestamp(slot43_deletetime),
        slot43_update_status,
        slot43_delete_status,
    
        slot44,
        parseTimestamp(slot44_updatetime),
        parseTimestamp(slot44_deletetime),
        slot44_update_status,
        slot44_delete_status,
    
        slot45,
        parseTimestamp(slot45_updatetime),
        parseTimestamp(slot45_deletetime),
        slot45_update_status,
        slot45_delete_status,
    
        slot46,
        parseTimestamp(slot46_updatetime),
        parseTimestamp(slot46_deletetime),
        slot46_update_status,
        slot46_delete_status,
    
        slot47,
        parseTimestamp(slot47_updatetime),
        parseTimestamp(slot47_deletetime),
        slot47_update_status,
        slot47_delete_status,
    
        slot48,
        parseTimestamp(slot48_updatetime),
        parseTimestamp(slot48_deletetime),
        slot48_update_status,
        slot48_delete_status,
    
        slot49,
        parseTimestamp(slot49_updatetime),
        parseTimestamp(slot49_deletetime),
        slot49_update_status,
        slot49_delete_status,
    
        slot50,
        parseTimestamp(slot50_updatetime),
        parseTimestamp(slot50_deletetime),
        slot50_update_status,
        slot50_delete_status,
    
        slot51,
        parseTimestamp(slot51_updatetime),
        parseTimestamp(slot51_deletetime),
        slot51_update_status,
        slot51_delete_status,
    
        slot52,
        parseTimestamp(slot52_updatetime),
        parseTimestamp(slot52_deletetime),
        slot52_update_status,
        slot52_delete_status,
    
        slot53,
        parseTimestamp(slot53_updatetime),
        parseTimestamp(slot53_deletetime),
        slot53_update_status,
        slot53_delete_status,
    
        slot54,
        parseTimestamp(slot54_updatetime),
        parseTimestamp(slot54_deletetime),
        slot54_update_status,
        slot54_delete_status,
    
        slot55,
        parseTimestamp(slot55_updatetime),
        parseTimestamp(slot55_deletetime),
        slot55_update_status,
        slot55_delete_status,
    
        slot56,
        parseTimestamp(slot56_updatetime),
        parseTimestamp(slot56_deletetime),
        slot56_update_status,
        slot56_delete_status,
    
        slot57,
        parseTimestamp(slot57_updatetime),
        parseTimestamp(slot57_deletetime),
        slot57_update_status,
        slot57_delete_status,
    
        slot58,
        parseTimestamp(slot58_updatetime),
        parseTimestamp(slot58_deletetime),
        slot58_update_status,
        slot58_delete_status,
    
        slot59,
        parseTimestamp(slot59_updatetime),
        parseTimestamp(slot59_deletetime),
        slot59_update_status,
        slot59_delete_status,
    
        slot60,
        parseTimestamp(slot60_updatetime),
        parseTimestamp(slot60_deletetime),
        slot60_update_status,
        slot60_delete_status,
    
        slot61,
        parseTimestamp(slot61_updatetime),
        parseTimestamp(slot61_deletetime),
        slot61_update_status,
        slot61_delete_status,
    
        slot62,
        parseTimestamp(slot62_updatetime),
        parseTimestamp(slot62_deletetime),
        slot62_update_status,
        slot62_delete_status,
    
        slot63,
        parseTimestamp(slot63_updatetime),
        parseTimestamp(slot63_deletetime),
        slot63_update_status,
        slot63_delete_status,
    
        slot64,
        parseTimestamp(slot64_updatetime),
        parseTimestamp(slot64_deletetime),
        slot64_update_status,
        slot64_delete_status,
    
        slot65,
        parseTimestamp(slot65_updatetime),
        parseTimestamp(slot65_deletetime),
        slot65_update_status,
        slot65_delete_status,
    
        slot66,
        parseTimestamp(slot66_updatetime),
        parseTimestamp(slot66_deletetime),
        slot66_update_status,
        slot66_delete_status,
    
        slot67,
        parseTimestamp(slot67_updatetime),
        parseTimestamp(slot67_deletetime),
        slot67_update_status,
        slot67_delete_status,
    
        slot68,
        parseTimestamp(slot68_updatetime),
        parseTimestamp(slot68_deletetime),
        slot68_update_status,
        slot68_delete_status,
    
        slot69,
        parseTimestamp(slot69_updatetime),
        parseTimestamp(slot69_deletetime),
        slot69_update_status,
        slot69_delete_status,
    
        slot70,
        parseTimestamp(slot70_updatetime),
        parseTimestamp(slot70_deletetime),
        slot70_update_status,
        slot70_delete_status,
    
        slot71,
        parseTimestamp(slot71_updatetime),
        parseTimestamp(slot71_deletetime),
        slot71_update_status,
        slot71_delete_status,
    
        slot72,
        parseTimestamp(slot72_updatetime),
        parseTimestamp(slot72_deletetime),
        slot72_update_status,
        slot72_delete_status,
    
        slot73,
        parseTimestamp(slot73_updatetime),
        parseTimestamp(slot73_deletetime),
        slot73_update_status,
        slot73_delete_status,
    
        slot74,
        parseTimestamp(slot74_updatetime),
        parseTimestamp(slot74_deletetime),
        slot74_update_status,
        slot74_delete_status,
    
        slot75,
        parseTimestamp(slot75_updatetime),
        parseTimestamp(slot75_deletetime),
        slot75_update_status,
        slot75_delete_status,
    
        slot76,
        parseTimestamp(slot76_updatetime),
        parseTimestamp(slot76_deletetime),
        slot76_update_status,
        slot76_delete_status,
    
        slot77,
        parseTimestamp(slot77_updatetime),
        parseTimestamp(slot77_deletetime),
        slot77_update_status,
        slot77_delete_status,
    
        slot78,
        parseTimestamp(slot78_updatetime),
        parseTimestamp(slot78_deletetime),
        slot78_update_status,
        slot78_delete_status,
    
        slot79,
        parseTimestamp(slot79_updatetime),
        parseTimestamp(slot79_deletetime),
        slot79_update_status,
        slot79_delete_status,
    
        slot80,
        parseTimestamp(slot80_updatetime),
        parseTimestamp(slot80_deletetime),
        slot80_update_status,
        slot80_delete_status,
    
        slot81,
        parseTimestamp(slot81_updatetime),
        parseTimestamp(slot81_deletetime),
        slot81_update_status,
        slot81_delete_status,
    
        slot82,
        parseTimestamp(slot82_updatetime),
        parseTimestamp(slot82_deletetime),
        slot82_update_status,
        slot82_delete_status,
    
        slot83,
        parseTimestamp(slot83_updatetime),
        parseTimestamp(slot83_deletetime),
        slot83_update_status,
        slot83_delete_status,
    
        slot84,
        parseTimestamp(slot84_updatetime),
        parseTimestamp(slot84_deletetime),
        slot84_update_status,
        slot84_delete_status,
    
        slot85,
        parseTimestamp(slot85_updatetime),
        parseTimestamp(slot85_deletetime),
        slot85_update_status,
        slot85_delete_status,
    
        slot86,
        parseTimestamp(slot86_updatetime),
        parseTimestamp(slot86_deletetime),
        slot86_update_status,
        slot86_delete_status,
    
        slot87,
        parseTimestamp(slot87_updatetime),
        parseTimestamp(slot87_deletetime),
        slot87_update_status,
        slot87_delete_status,
    
        slot88,
        parseTimestamp(slot88_updatetime),
        parseTimestamp(slot88_deletetime),
        slot88_update_status,
        slot88_delete_status,
    
        slot89,
        parseTimestamp(slot89_updatetime),
        parseTimestamp(slot89_deletetime),
        slot89_update_status,
        slot89_delete_status,
    
        slot90,
        parseTimestamp(slot90_updatetime),
        parseTimestamp(slot90_deletetime),
        slot90_update_status,
        slot90_delete_status,
    
        slot91,
        parseTimestamp(slot91_updatetime),
        parseTimestamp(slot91_deletetime),
        slot91_update_status,
        slot91_delete_status,
    
        slot92,
        parseTimestamp(slot92_updatetime),
        parseTimestamp(slot92_deletetime),
        slot92_update_status,
        slot92_delete_status,
    
        slot93,
        parseTimestamp(slot93_updatetime),
        parseTimestamp(slot93_deletetime),
        slot93_update_status,
        slot93_delete_status,
    
        slot94,
        parseTimestamp(slot94_updatetime),
        parseTimestamp(slot94_deletetime),
        slot94_update_status,
        slot94_delete_status,
    
        slot95,
        parseTimestamp(slot95_updatetime),
        parseTimestamp(slot95_deletetime),
        slot95_update_status,
        slot95_delete_status,
    
        slot96,
        parseTimestamp(slot96_updatetime),
        parseTimestamp(slot96_deletetime),
        slot96_update_status,
        slot96_delete_status,
    
        slot97,
        parseTimestamp(slot97_updatetime),
        parseTimestamp(slot97_deletetime),
        slot97_update_status,
        slot97_delete_status,
    
        slot98,
        parseTimestamp(slot98_updatetime),
        parseTimestamp(slot98_deletetime),
        slot98_update_status,
        slot98_delete_status,
    
        slot99,
        parseTimestamp(slot99_updatetime),
        parseTimestamp(slot99_deletetime),
        slot99_update_status,
        slot99_delete_status,
    
        slot100,
        parseTimestamp(slot100_updatetime),
        parseTimestamp(slot100_deletetime),
        slot100_update_status,
        slot100_delete_status,
        id,
      ]
    );
    res.send('Playlist updated successfully.');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating playlist');
  }
});



// Periodic task to check for updates and deletions
cron.schedule('* * * * *', async () => {
  // Every minute
  try {
    const now = new Date();

    // Check for update tasks
    const updateResult = await pool.query(
      `SELECT * FROM playlists1235 
       WHERE   (slot1_updatetime <= $1 AND slot1_updatetime IS NOT NULL AND slot1_update_status = 'pending')
  OR (slot2_updatetime <= $1 AND slot2_updatetime IS NOT NULL AND slot2_update_status = 'pending')
  OR (slot3_updatetime <= $1 AND slot3_updatetime IS NOT NULL AND slot3_update_status = 'pending')
  OR (slot4_updatetime <= $1 AND slot4_updatetime IS NOT NULL AND slot4_update_status = 'pending')
  OR (slot5_updatetime <= $1 AND slot5_updatetime IS NOT NULL AND slot5_update_status = 'pending')

  OR (slot6_updatetime <= $1 AND slot6_updatetime IS NOT NULL AND slot6_update_status = 'pending')

  OR (slot7_updatetime <= $1 AND slot7_updatetime IS NOT NULL AND slot7_update_status = 'pending')

  OR (slot8_updatetime <= $1 AND slot8_updatetime IS NOT NULL AND slot8_update_status = 'pending')

  OR (slot9_updatetime <= $1 AND slot9_updatetime IS NOT NULL AND slot9_update_status = 'pending')

  OR (slot10_updatetime <= $1 AND slot10_updatetime IS NOT NULL AND slot10_update_status = 'pending')

  OR (slot11_updatetime <= $1 AND slot11_updatetime IS NOT NULL AND slot11_update_status = 'pending')

  OR (slot12_updatetime <= $1 AND slot12_updatetime IS NOT NULL AND slot12_update_status = 'pending')

  OR (slot13_updatetime <= $1 AND slot13_updatetime IS NOT NULL AND slot13_update_status = 'pending')

  OR (slot14_updatetime <= $1 AND slot14_updatetime IS NOT NULL AND slot14_update_status = 'pending')

  OR (slot15_updatetime <= $1 AND slot15_updatetime IS NOT NULL AND slot15_update_status = 'pending')

  OR (slot16_updatetime <= $1 AND slot16_updatetime IS NOT NULL AND slot16_update_status = 'pending')

  OR (slot17_updatetime <= $1 AND slot17_updatetime IS NOT NULL AND slot17_update_status = 'pending')

  OR (slot18_updatetime <= $1 AND slot18_updatetime IS NOT NULL AND slot18_update_status = 'pending')

  OR (slot19_updatetime <= $1 AND slot19_updatetime IS NOT NULL AND slot19_update_status = 'pending')

  OR (slot20_updatetime <= $1 AND slot20_updatetime IS NOT NULL AND slot20_update_status = 'pending')

  OR (slot21_updatetime <= $1 AND slot21_updatetime IS NOT NULL AND slot21_update_status = 'pending')

  OR (slot22_updatetime <= $1 AND slot22_updatetime IS NOT NULL AND slot22_update_status = 'pending')

  OR (slot23_updatetime <= $1 AND slot23_updatetime IS NOT NULL AND slot23_update_status = 'pending')

  OR (slot24_updatetime <= $1 AND slot24_updatetime IS NOT NULL AND slot24_update_status = 'pending')

  OR (slot25_updatetime <= $1 AND slot25_updatetime IS NOT NULL AND slot25_update_status = 'pending')

  OR (slot26_updatetime <= $1 AND slot26_updatetime IS NOT NULL AND slot26_update_status = 'pending')

  OR (slot27_updatetime <= $1 AND slot27_updatetime IS NOT NULL AND slot27_update_status = 'pending')

  OR (slot28_updatetime <= $1 AND slot28_updatetime IS NOT NULL AND slot28_update_status = 'pending')

  OR (slot29_updatetime <= $1 AND slot29_updatetime IS NOT NULL AND slot29_update_status = 'pending')

  OR (slot30_updatetime <= $1 AND slot30_updatetime IS NOT NULL AND slot30_update_status = 'pending')

  OR (slot31_updatetime <= $1 AND slot31_updatetime IS NOT NULL AND slot31_update_status = 'pending')

  OR (slot32_updatetime <= $1 AND slot32_updatetime IS NOT NULL AND slot32_update_status = 'pending')

  OR (slot33_updatetime <= $1 AND slot33_updatetime IS NOT NULL AND slot33_update_status = 'pending')

  OR (slot34_updatetime <= $1 AND slot34_updatetime IS NOT NULL AND slot34_update_status = 'pending')

  OR (slot35_updatetime <= $1 AND slot35_updatetime IS NOT NULL AND slot35_update_status = 'pending')

  OR (slot36_updatetime <= $1 AND slot36_updatetime IS NOT NULL AND slot36_update_status = 'pending')

  OR (slot37_updatetime <= $1 AND slot37_updatetime IS NOT NULL AND slot37_update_status = 'pending')

  OR (slot38_updatetime <= $1 AND slot38_updatetime IS NOT NULL AND slot38_update_status = 'pending')

  OR (slot39_updatetime <= $1 AND slot39_updatetime IS NOT NULL AND slot39_update_status = 'pending')

  OR (slot40_updatetime <= $1 AND slot40_updatetime IS NOT NULL AND slot40_update_status = 'pending')

  OR (slot41_updatetime <= $1 AND slot41_updatetime IS NOT NULL AND slot41_update_status = 'pending')

  OR (slot42_updatetime <= $1 AND slot42_updatetime IS NOT NULL AND slot42_update_status = 'pending')

  OR (slot43_updatetime <= $1 AND slot43_updatetime IS NOT NULL AND slot43_update_status = 'pending')

  OR (slot44_updatetime <= $1 AND slot44_updatetime IS NOT NULL AND slot44_update_status = 'pending')

  OR (slot45_updatetime <= $1 AND slot45_updatetime IS NOT NULL AND slot45_update_status = 'pending')

  OR (slot46_updatetime <= $1 AND slot46_updatetime IS NOT NULL AND slot46_update_status = 'pending')

  OR (slot47_updatetime <= $1 AND slot47_updatetime IS NOT NULL AND slot47_update_status = 'pending')

  OR (slot48_updatetime <= $1 AND slot48_updatetime IS NOT NULL AND slot48_update_status = 'pending')

  OR (slot49_updatetime <= $1 AND slot49_updatetime IS NOT NULL AND slot49_update_status = 'pending')

  OR (slot50_updatetime <= $1 AND slot50_updatetime IS NOT NULL AND slot50_update_status = 'pending')

  OR (slot51_updatetime <= $1 AND slot51_updatetime IS NOT NULL AND slot51_update_status = 'pending')

  OR (slot52_updatetime <= $1 AND slot52_updatetime IS NOT NULL AND slot52_update_status = 'pending')

  OR (slot53_updatetime <= $1 AND slot53_updatetime IS NOT NULL AND slot53_update_status = 'pending')

  OR (slot54_updatetime <= $1 AND slot54_updatetime IS NOT NULL AND slot54_update_status = 'pending')

  OR (slot55_updatetime <= $1 AND slot55_updatetime IS NOT NULL AND slot55_update_status = 'pending')

  OR (slot56_updatetime <= $1 AND slot56_updatetime IS NOT NULL AND slot56_update_status = 'pending')

  OR (slot57_updatetime <= $1 AND slot57_updatetime IS NOT NULL AND slot57_update_status = 'pending')

  OR (slot58_updatetime <= $1 AND slot58_updatetime IS NOT NULL AND slot58_update_status = 'pending')

  OR (slot59_updatetime <= $1 AND slot59_updatetime IS NOT NULL AND slot59_update_status = 'pending')

  OR (slot60_updatetime <= $1 AND slot60_updatetime IS NOT NULL AND slot60_update_status = 'pending')

  OR (slot61_updatetime <= $1 AND slot61_updatetime IS NOT NULL AND slot61_update_status = 'pending')

  OR (slot62_updatetime <= $1 AND slot62_updatetime IS NOT NULL AND slot62_update_status = 'pending')

  OR (slot63_updatetime <= $1 AND slot63_updatetime IS NOT NULL AND slot63_update_status = 'pending')

  OR (slot64_updatetime <= $1 AND slot64_updatetime IS NOT NULL AND slot64_update_status = 'pending')

  OR (slot65_updatetime <= $1 AND slot65_updatetime IS NOT NULL AND slot65_update_status = 'pending')

  OR (slot66_updatetime <= $1 AND slot66_updatetime IS NOT NULL AND slot66_update_status = 'pending')

  OR (slot67_updatetime <= $1 AND slot67_updatetime IS NOT NULL AND slot67_update_status = 'pending')

  OR (slot68_updatetime <= $1 AND slot68_updatetime IS NOT NULL AND slot68_update_status = 'pending')

  OR (slot69_updatetime <= $1 AND slot69_updatetime IS NOT NULL AND slot69_update_status = 'pending')

  OR (slot70_updatetime <= $1 AND slot70_updatetime IS NOT NULL AND slot70_update_status = 'pending')

  OR (slot71_updatetime <= $1 AND slot71_updatetime IS NOT NULL AND slot71_update_status = 'pending')

  OR (slot72_updatetime <= $1 AND slot72_updatetime IS NOT NULL AND slot72_update_status = 'pending')

  OR (slot73_updatetime <= $1 AND slot73_updatetime IS NOT NULL AND slot73_update_status = 'pending')

  OR (slot74_updatetime <= $1 AND slot74_updatetime IS NOT NULL AND slot74_update_status = 'pending')

  OR (slot75_updatetime <= $1 AND slot75_updatetime IS NOT NULL AND slot75_update_status = 'pending')

  OR (slot76_updatetime <= $1 AND slot76_updatetime IS NOT NULL AND slot76_update_status = 'pending')

  OR (slot77_updatetime <= $1 AND slot77_updatetime IS NOT NULL AND slot77_update_status = 'pending')

  OR (slot78_updatetime <= $1 AND slot78_updatetime IS NOT NULL AND slot78_update_status = 'pending')

  OR (slot79_updatetime <= $1 AND slot79_updatetime IS NOT NULL AND slot79_update_status = 'pending')

  OR (slot80_updatetime <= $1 AND slot80_updatetime IS NOT NULL AND slot80_update_status = 'pending')

  OR (slot81_updatetime <= $1 AND slot81_updatetime IS NOT NULL AND slot81_update_status = 'pending')

  OR (slot82_updatetime <= $1 AND slot82_updatetime IS NOT NULL AND slot82_update_status = 'pending')

  OR (slot83_updatetime <= $1 AND slot83_updatetime IS NOT NULL AND slot83_update_status = 'pending')

  OR (slot84_updatetime <= $1 AND slot84_updatetime IS NOT NULL AND slot84_update_status = 'pending')

  OR (slot85_updatetime <= $1 AND slot85_updatetime IS NOT NULL AND slot85_update_status = 'pending')

  OR (slot86_updatetime <= $1 AND slot86_updatetime IS NOT NULL AND slot86_update_status = 'pending')

  OR (slot87_updatetime <= $1 AND slot87_updatetime IS NOT NULL AND slot87_update_status = 'pending')

  OR (slot88_updatetime <= $1 AND slot88_updatetime IS NOT NULL AND slot88_update_status = 'pending')

  OR (slot89_updatetime <= $1 AND slot89_updatetime IS NOT NULL AND slot89_update_status = 'pending')

  OR (slot90_updatetime <= $1 AND slot90_updatetime IS NOT NULL AND slot90_update_status = 'pending')

  OR (slot91_updatetime <= $1 AND slot91_updatetime IS NOT NULL AND slot91_update_status = 'pending')

  OR (slot92_updatetime <= $1 AND slot92_updatetime IS NOT NULL AND slot92_update_status = 'pending')

  OR (slot93_updatetime <= $1 AND slot93_updatetime IS NOT NULL AND slot93_update_status = 'pending')

  OR (slot94_updatetime <= $1 AND slot94_updatetime IS NOT NULL AND slot94_update_status = 'pending')

  OR (slot95_updatetime <= $1 AND slot95_updatetime IS NOT NULL AND slot95_update_status = 'pending')

  OR (slot96_updatetime <= $1 AND slot96_updatetime IS NOT NULL AND slot96_update_status = 'pending')

  OR (slot97_updatetime <= $1 AND slot97_updatetime IS NOT NULL AND slot97_update_status = 'pending')

  OR (slot98_updatetime <= $1 AND slot98_updatetime IS NOT NULL AND slot98_update_status = 'pending')

  OR (slot99_updatetime <= $1 AND slot99_updatetime IS NOT NULL AND slot99_update_status = 'pending')

  OR (slot100_updatetime <= $1 AND slot100_updatetime IS NOT NULL AND slot100_update_status = 'pending')`,
      [now]
    );

    for (const row of updateResult.rows) {
      // Update slots in screens123 table based on the update time
      if (row.slot1_updatetime <= now && row.slot1_updatetime !== null && row.slot1_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot1 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot1,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot1_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 1 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot2_updatetime <= now && row.slot2_updatetime !== null && row.slot2_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot2 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot2,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot2_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 2 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot3_updatetime <= now && row.slot3_updatetime !== null && row.slot3_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot3 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot3,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot3_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 3 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot4_updatetime <= now && row.slot4_updatetime !== null && row.slot4_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot4 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot4,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot4_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 4 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot5_updatetime <= now && row.slot5_updatetime !== null && row.slot5_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot5 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot5,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot5_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 5 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot6_updatetime <= now && row.slot6_updatetime !== null && row.slot6_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot6 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot6,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot6_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 6 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot7_updatetime <= now && row.slot7_updatetime !== null && row.slot7_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot7 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot7,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot7_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 7 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot8_updatetime <= now && row.slot8_updatetime !== null && row.slot8_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot8 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot8,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot8_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 8 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot9_updatetime <= now && row.slot9_updatetime !== null && row.slot9_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot9 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot9,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot9_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 9 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot10_updatetime <= now && row.slot10_updatetime !== null && row.slot10_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot10 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot10,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot10_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 10 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot11_updatetime <= now && row.slot11_updatetime !== null && row.slot11_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot11 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot11,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot11_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 11 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot12_updatetime <= now && row.slot12_updatetime !== null && row.slot12_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot12 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot12,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot12_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 12 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot13_updatetime <= now && row.slot13_updatetime !== null && row.slot13_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot13 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot13,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot13_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 13 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot14_updatetime <= now && row.slot14_updatetime !== null && row.slot14_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot14 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot14,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot14_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 14 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot15_updatetime <= now && row.slot15_updatetime !== null && row.slot15_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot15 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot15,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot15_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 15 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot16_updatetime <= now && row.slot16_updatetime !== null && row.slot16_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot16 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot16,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot16_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 16 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot17_updatetime <= now && row.slot17_updatetime !== null && row.slot17_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot17 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot17,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot17_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 17 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot18_updatetime <= now && row.slot18_updatetime !== null && row.slot18_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot18 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot18,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot18_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 18 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot19_updatetime <= now && row.slot19_updatetime !== null && row.slot19_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot19 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot19,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot19_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 19 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot20_updatetime <= now && row.slot20_updatetime !== null && row.slot20_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot20 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot20,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot20_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 20 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot21_updatetime <= now && row.slot21_updatetime !== null && row.slot21_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot21 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot21,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot21_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 21 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot22_updatetime <= now && row.slot22_updatetime !== null && row.slot22_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot22 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot22,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot22_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 22 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot23_updatetime <= now && row.slot23_updatetime !== null && row.slot23_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot23 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot23,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot23_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 23 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot24_updatetime <= now && row.slot24_updatetime !== null && row.slot24_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot24 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot24,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot24_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 24 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot25_updatetime <= now && row.slot25_updatetime !== null && row.slot25_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot25 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot25,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot25_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 25 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot26_updatetime <= now && row.slot26_updatetime !== null && row.slot26_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot26 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot26,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot26_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 26 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot27_updatetime <= now && row.slot27_updatetime !== null && row.slot27_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot27 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot27,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot27_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 27 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot28_updatetime <= now && row.slot28_updatetime !== null && row.slot28_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot28 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot28,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot28_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 28 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot29_updatetime <= now && row.slot29_updatetime !== null && row.slot29_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot29 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot29,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot29_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 29 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot30_updatetime <= now && row.slot30_updatetime !== null && row.slot30_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot30 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot30,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot30_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 30 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot31_updatetime <= now && row.slot31_updatetime !== null && row.slot31_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot31 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot31,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot31_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 31 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot32_updatetime <= now && row.slot32_updatetime !== null && row.slot32_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot32 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot32,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot32_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 32 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot33_updatetime <= now && row.slot33_updatetime !== null && row.slot33_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot33 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot33,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot33_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 33 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot34_updatetime <= now && row.slot34_updatetime !== null && row.slot34_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot34 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot34,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot34_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 34 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot35_updatetime <= now && row.slot35_updatetime !== null && row.slot35_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot35 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot35,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot35_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 35 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot36_updatetime <= now && row.slot36_updatetime !== null && row.slot36_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot36 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot36,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot36_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 36 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot37_updatetime <= now && row.slot37_updatetime !== null && row.slot37_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot37 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot37,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot37_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 37 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot38_updatetime <= now && row.slot38_updatetime !== null && row.slot38_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot38 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot38,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot38_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 38 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot39_updatetime <= now && row.slot39_updatetime !== null && row.slot39_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot39 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot39,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot39_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 39 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot40_updatetime <= now && row.slot40_updatetime !== null && row.slot40_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot40 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot40,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot40_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 40 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot41_updatetime <= now && row.slot41_updatetime !== null && row.slot41_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot41 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot41,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot41_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 41 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot42_updatetime <= now && row.slot42_updatetime !== null && row.slot42_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot42 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot42,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot42_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 42 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot43_updatetime <= now && row.slot43_updatetime !== null && row.slot43_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot43 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot43,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot43_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 43 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot44_updatetime <= now && row.slot44_updatetime !== null && row.slot44_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot44 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot44,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot44_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 44 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot45_updatetime <= now && row.slot45_updatetime !== null && row.slot45_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot45 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot45,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot45_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 45 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot46_updatetime <= now && row.slot46_updatetime !== null && row.slot46_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot46 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot46,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot46_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 46 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot47_updatetime <= now && row.slot47_updatetime !== null && row.slot47_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot47 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot47,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot47_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 47 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot48_updatetime <= now && row.slot48_updatetime !== null && row.slot48_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot48 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot48,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot48_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 48 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot49_updatetime <= now && row.slot49_updatetime !== null && row.slot49_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot49 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot49,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot49_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 49 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot50_updatetime <= now && row.slot50_updatetime !== null && row.slot50_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot50 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot50,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot50_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 50 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot51_updatetime <= now && row.slot51_updatetime !== null && row.slot51_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot51 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot51,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot51_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 51 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot52_updatetime <= now && row.slot52_updatetime !== null && row.slot52_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot52 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot52,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot52_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 52 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot53_updatetime <= now && row.slot53_updatetime !== null && row.slot53_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot53 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot53,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot53_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 53 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot54_updatetime <= now && row.slot54_updatetime !== null && row.slot54_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot54 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot54,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot54_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 54 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot55_updatetime <= now && row.slot55_updatetime !== null && row.slot55_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot55 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot55,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot55_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 55 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot56_updatetime <= now && row.slot56_updatetime !== null && row.slot56_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot56 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot56,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot56_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 56 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot57_updatetime <= now && row.slot57_updatetime !== null && row.slot57_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot57 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot57,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot57_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 57 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot58_updatetime <= now && row.slot58_updatetime !== null && row.slot58_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot58 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot58,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot58_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 58 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot59_updatetime <= now && row.slot59_updatetime !== null && row.slot59_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot59 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot59,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot59_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 59 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot60_updatetime <= now && row.slot60_updatetime !== null && row.slot60_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot60 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot60,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot60_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 60 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot61_updatetime <= now && row.slot61_updatetime !== null && row.slot61_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot61 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot61,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot61_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 61 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot62_updatetime <= now && row.slot62_updatetime !== null && row.slot62_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot62 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot62,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot62_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 62 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot63_updatetime <= now && row.slot63_updatetime !== null && row.slot63_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot63 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot63,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot63_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 63 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot64_updatetime <= now && row.slot64_updatetime !== null && row.slot64_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot64 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot64,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot64_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 64 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot65_updatetime <= now && row.slot65_updatetime !== null && row.slot65_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot65 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot65,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot65_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 65 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot66_updatetime <= now && row.slot66_updatetime !== null && row.slot66_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot66 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot66,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot66_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 66 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot67_updatetime <= now && row.slot67_updatetime !== null && row.slot67_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot67 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot67,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot67_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 67 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot68_updatetime <= now && row.slot68_updatetime !== null && row.slot68_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot68 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot68,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot68_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 68 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot69_updatetime <= now && row.slot69_updatetime !== null && row.slot69_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot69 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot69,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot69_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 69 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot70_updatetime <= now && row.slot70_updatetime !== null && row.slot70_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot70 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot70,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot70_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 70 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot71_updatetime <= now && row.slot71_updatetime !== null && row.slot71_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot71 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot71,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot71_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 71 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot72_updatetime <= now && row.slot72_updatetime !== null && row.slot72_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot72 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot72,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot72_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 72 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot73_updatetime <= now && row.slot73_updatetime !== null && row.slot73_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot73 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot73,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot73_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 73 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot74_updatetime <= now && row.slot74_updatetime !== null && row.slot74_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot74 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot74,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot74_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 74 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot75_updatetime <= now && row.slot75_updatetime !== null && row.slot75_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot75 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot75,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot75_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 75 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot76_updatetime <= now && row.slot76_updatetime !== null && row.slot76_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot76 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot76,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot76_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 76 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot77_updatetime <= now && row.slot77_updatetime !== null && row.slot77_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot77 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot77,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot77_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 77 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot78_updatetime <= now && row.slot78_updatetime !== null && row.slot78_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot78 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot78,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot78_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 78 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot79_updatetime <= now && row.slot79_updatetime !== null && row.slot79_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot79 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot79,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot79_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 79 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot80_updatetime <= now && row.slot80_updatetime !== null && row.slot80_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot80 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot80,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot80_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 80 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot81_updatetime <= now && row.slot81_updatetime !== null && row.slot81_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot81 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot81,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot81_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 81 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot82_updatetime <= now && row.slot82_updatetime !== null && row.slot82_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot82 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot82,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot82_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 82 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot83_updatetime <= now && row.slot83_updatetime !== null && row.slot83_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot83 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot83,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot83_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 83 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot84_updatetime <= now && row.slot84_updatetime !== null && row.slot84_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot84 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot84,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot84_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 84 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot85_updatetime <= now && row.slot85_updatetime !== null && row.slot85_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot85 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot85,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot85_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 85 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot86_updatetime <= now && row.slot86_updatetime !== null && row.slot86_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot86 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot86,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot86_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 86 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot87_updatetime <= now && row.slot87_updatetime !== null && row.slot87_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot87 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot87,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot87_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 87 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot88_updatetime <= now && row.slot88_updatetime !== null && row.slot88_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot88 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot88,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot88_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 88 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot89_updatetime <= now && row.slot89_updatetime !== null && row.slot89_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot89 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot89,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot89_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 89 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot90_updatetime <= now && row.slot90_updatetime !== null && row.slot90_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot90 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot90,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot90_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 90 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot91_updatetime <= now && row.slot91_updatetime !== null && row.slot91_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot91 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot91,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot91_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 91 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot92_updatetime <= now && row.slot92_updatetime !== null && row.slot92_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot92 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot92,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot92_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 92 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot93_updatetime <= now && row.slot93_updatetime !== null && row.slot93_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot93 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot93,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot93_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 93 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot94_updatetime <= now && row.slot94_updatetime !== null && row.slot94_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot94 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot94,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot94_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 94 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot95_updatetime <= now && row.slot95_updatetime !== null && row.slot95_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot95 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot95,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot95_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 95 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot96_updatetime <= now && row.slot96_updatetime !== null && row.slot96_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot96 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot96,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot96_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 96 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot97_updatetime <= now && row.slot97_updatetime !== null && row.slot97_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot97 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot97,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot97_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 97 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot98_updatetime <= now && row.slot98_updatetime !== null && row.slot98_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot98 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot98,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot98_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 98 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot99_updatetime <= now && row.slot99_updatetime !== null && row.slot99_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot99 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot99,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot99_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 99 data transferred to screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot100_updatetime <= now && row.slot100_updatetime !== null && row.slot100_update_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot100 = $1 WHERE id = ANY($2::INTEGER[])`, [
          row.slot100,
          row.screen_id,
        ]);
        await pool.query(`UPDATE playlists1235 SET slot100_update_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 100 data transferred to screens123 table for playlist ID ${row.id}`);
      }
    }






    
    // Check for delete tasks
    const deleteResult = await pool.query(
      `SELECT * FROM playlists1235 
       WHERE (slot1_deletetime <= $1 AND slot1_deletetime IS NOT NULL AND slot1_delete_status = 'pending')
  OR (slot2_deletetime <= $1 AND slot2_deletetime IS NOT NULL AND slot2_delete_status = 'pending')
  OR (slot3_deletetime <= $1 AND slot3_deletetime IS NOT NULL AND slot3_delete_status = 'pending')
  OR (slot4_deletetime <= $1 AND slot4_deletetime IS NOT NULL AND slot4_delete_status = 'pending')
  OR (slot5_deletetime <= $1 AND slot5_deletetime IS NOT NULL AND slot5_delete_status = 'pending')

  OR (slot6_deletetime <= $1 AND slot6_deletetime IS NOT NULL AND slot6_delete_status = 'pending')

  OR (slot7_deletetime <= $1 AND slot7_deletetime IS NOT NULL AND slot7_delete_status = 'pending')

  OR (slot8_deletetime <= $1 AND slot8_deletetime IS NOT NULL AND slot8_delete_status = 'pending')

  OR (slot9_deletetime <= $1 AND slot9_deletetime IS NOT NULL AND slot9_delete_status = 'pending')

  OR (slot10_deletetime <= $1 AND slot10_deletetime IS NOT NULL AND slot10_delete_status = 'pending')

  OR (slot11_deletetime <= $1 AND slot11_deletetime IS NOT NULL AND slot11_delete_status = 'pending')

  OR (slot12_deletetime <= $1 AND slot12_deletetime IS NOT NULL AND slot12_delete_status = 'pending')

  OR (slot13_deletetime <= $1 AND slot13_deletetime IS NOT NULL AND slot13_delete_status = 'pending')

  OR (slot14_deletetime <= $1 AND slot14_deletetime IS NOT NULL AND slot14_delete_status = 'pending')

  OR (slot15_deletetime <= $1 AND slot15_deletetime IS NOT NULL AND slot15_delete_status = 'pending')

  OR (slot16_deletetime <= $1 AND slot16_deletetime IS NOT NULL AND slot16_delete_status = 'pending')

  OR (slot17_deletetime <= $1 AND slot17_deletetime IS NOT NULL AND slot17_delete_status = 'pending')

  OR (slot18_deletetime <= $1 AND slot18_deletetime IS NOT NULL AND slot18_delete_status = 'pending')

  OR (slot19_deletetime <= $1 AND slot19_deletetime IS NOT NULL AND slot19_delete_status = 'pending')

  OR (slot20_deletetime <= $1 AND slot20_deletetime IS NOT NULL AND slot20_delete_status = 'pending')

  OR (slot21_deletetime <= $1 AND slot21_deletetime IS NOT NULL AND slot21_delete_status = 'pending')

  OR (slot22_deletetime <= $1 AND slot22_deletetime IS NOT NULL AND slot22_delete_status = 'pending')

  OR (slot23_deletetime <= $1 AND slot23_deletetime IS NOT NULL AND slot23_delete_status = 'pending')

  OR (slot24_deletetime <= $1 AND slot24_deletetime IS NOT NULL AND slot24_delete_status = 'pending')

  OR (slot25_deletetime <= $1 AND slot25_deletetime IS NOT NULL AND slot25_delete_status = 'pending')

  OR (slot26_deletetime <= $1 AND slot26_deletetime IS NOT NULL AND slot26_delete_status = 'pending')

  OR (slot27_deletetime <= $1 AND slot27_deletetime IS NOT NULL AND slot27_delete_status = 'pending')

  OR (slot28_deletetime <= $1 AND slot28_deletetime IS NOT NULL AND slot28_delete_status = 'pending')

  OR (slot29_deletetime <= $1 AND slot29_deletetime IS NOT NULL AND slot29_delete_status = 'pending')

  OR (slot30_deletetime <= $1 AND slot30_deletetime IS NOT NULL AND slot30_delete_status = 'pending')

  OR (slot31_deletetime <= $1 AND slot31_deletetime IS NOT NULL AND slot31_delete_status = 'pending')

  OR (slot32_deletetime <= $1 AND slot32_deletetime IS NOT NULL AND slot32_delete_status = 'pending')

  OR (slot33_deletetime <= $1 AND slot33_deletetime IS NOT NULL AND slot33_delete_status = 'pending')

  OR (slot34_deletetime <= $1 AND slot34_deletetime IS NOT NULL AND slot34_delete_status = 'pending')

  OR (slot35_deletetime <= $1 AND slot35_deletetime IS NOT NULL AND slot35_delete_status = 'pending')

  OR (slot36_deletetime <= $1 AND slot36_deletetime IS NOT NULL AND slot36_delete_status = 'pending')

  OR (slot37_deletetime <= $1 AND slot37_deletetime IS NOT NULL AND slot37_delete_status = 'pending')

  OR (slot38_deletetime <= $1 AND slot38_deletetime IS NOT NULL AND slot38_delete_status = 'pending')

  OR (slot39_deletetime <= $1 AND slot39_deletetime IS NOT NULL AND slot39_delete_status = 'pending')

  OR (slot40_deletetime <= $1 AND slot40_deletetime IS NOT NULL AND slot40_delete_status = 'pending')

  OR (slot41_deletetime <= $1 AND slot41_deletetime IS NOT NULL AND slot41_delete_status = 'pending')

  OR (slot42_deletetime <= $1 AND slot42_deletetime IS NOT NULL AND slot42_delete_status = 'pending')

  OR (slot43_deletetime <= $1 AND slot43_deletetime IS NOT NULL AND slot43_delete_status = 'pending')

  OR (slot44_deletetime <= $1 AND slot44_deletetime IS NOT NULL AND slot44_delete_status = 'pending')

  OR (slot45_deletetime <= $1 AND slot45_deletetime IS NOT NULL AND slot45_delete_status = 'pending')

  OR (slot46_deletetime <= $1 AND slot46_deletetime IS NOT NULL AND slot46_delete_status = 'pending')

  OR (slot47_deletetime <= $1 AND slot47_deletetime IS NOT NULL AND slot47_delete_status = 'pending')

  OR (slot48_deletetime <= $1 AND slot48_deletetime IS NOT NULL AND slot48_delete_status = 'pending')

  OR (slot49_deletetime <= $1 AND slot49_deletetime IS NOT NULL AND slot49_delete_status = 'pending')

  OR (slot50_deletetime <= $1 AND slot50_deletetime IS NOT NULL AND slot50_delete_status = 'pending')

  OR (slot51_deletetime <= $1 AND slot51_deletetime IS NOT NULL AND slot51_delete_status = 'pending')

  OR (slot52_deletetime <= $1 AND slot52_deletetime IS NOT NULL AND slot52_delete_status = 'pending')

  OR (slot53_deletetime <= $1 AND slot53_deletetime IS NOT NULL AND slot53_delete_status = 'pending')

  OR (slot54_deletetime <= $1 AND slot54_deletetime IS NOT NULL AND slot54_delete_status = 'pending')

  OR (slot55_deletetime <= $1 AND slot55_deletetime IS NOT NULL AND slot55_delete_status = 'pending')

  OR (slot56_deletetime <= $1 AND slot56_deletetime IS NOT NULL AND slot56_delete_status = 'pending')

  OR (slot57_deletetime <= $1 AND slot57_deletetime IS NOT NULL AND slot57_delete_status = 'pending')

  OR (slot58_deletetime <= $1 AND slot58_deletetime IS NOT NULL AND slot58_delete_status = 'pending')

  OR (slot59_deletetime <= $1 AND slot59_deletetime IS NOT NULL AND slot59_delete_status = 'pending')

  OR (slot60_deletetime <= $1 AND slot60_deletetime IS NOT NULL AND slot60_delete_status = 'pending')

  OR (slot61_deletetime <= $1 AND slot61_deletetime IS NOT NULL AND slot61_delete_status = 'pending')

  OR (slot62_deletetime <= $1 AND slot62_deletetime IS NOT NULL AND slot62_delete_status = 'pending')

  OR (slot63_deletetime <= $1 AND slot63_deletetime IS NOT NULL AND slot63_delete_status = 'pending')

  OR (slot64_deletetime <= $1 AND slot64_deletetime IS NOT NULL AND slot64_delete_status = 'pending')

  OR (slot65_deletetime <= $1 AND slot65_deletetime IS NOT NULL AND slot65_delete_status = 'pending')

  OR (slot66_deletetime <= $1 AND slot66_deletetime IS NOT NULL AND slot66_delete_status = 'pending')

  OR (slot67_deletetime <= $1 AND slot67_deletetime IS NOT NULL AND slot67_delete_status = 'pending')

  OR (slot68_deletetime <= $1 AND slot68_deletetime IS NOT NULL AND slot68_delete_status = 'pending')

  OR (slot69_deletetime <= $1 AND slot69_deletetime IS NOT NULL AND slot69_delete_status = 'pending')

  OR (slot70_deletetime <= $1 AND slot70_deletetime IS NOT NULL AND slot70_delete_status = 'pending')

  OR (slot71_deletetime <= $1 AND slot71_deletetime IS NOT NULL AND slot71_delete_status = 'pending')

  OR (slot72_deletetime <= $1 AND slot72_deletetime IS NOT NULL AND slot72_delete_status = 'pending')

  OR (slot73_deletetime <= $1 AND slot73_deletetime IS NOT NULL AND slot73_delete_status = 'pending')

  OR (slot74_deletetime <= $1 AND slot74_deletetime IS NOT NULL AND slot74_delete_status = 'pending')

  OR (slot75_deletetime <= $1 AND slot75_deletetime IS NOT NULL AND slot75_delete_status = 'pending')

  OR (slot76_deletetime <= $1 AND slot76_deletetime IS NOT NULL AND slot76_delete_status = 'pending')

  OR (slot77_deletetime <= $1 AND slot77_deletetime IS NOT NULL AND slot77_delete_status = 'pending')

  OR (slot78_deletetime <= $1 AND slot78_deletetime IS NOT NULL AND slot78_delete_status = 'pending')

  OR (slot79_deletetime <= $1 AND slot79_deletetime IS NOT NULL AND slot79_delete_status = 'pending')

  OR (slot80_deletetime <= $1 AND slot80_deletetime IS NOT NULL AND slot80_delete_status = 'pending')

  OR (slot81_deletetime <= $1 AND slot81_deletetime IS NOT NULL AND slot81_delete_status = 'pending')

  OR (slot82_deletetime <= $1 AND slot82_deletetime IS NOT NULL AND slot82_delete_status = 'pending')

  OR (slot83_deletetime <= $1 AND slot83_deletetime IS NOT NULL AND slot83_delete_status = 'pending')

  OR (slot84_deletetime <= $1 AND slot84_deletetime IS NOT NULL AND slot84_delete_status = 'pending')

  OR (slot85_deletetime <= $1 AND slot85_deletetime IS NOT NULL AND slot85_delete_status = 'pending')

  OR (slot86_deletetime <= $1 AND slot86_deletetime IS NOT NULL AND slot86_delete_status = 'pending')

  OR (slot87_deletetime <= $1 AND slot87_deletetime IS NOT NULL AND slot87_delete_status = 'pending')

  OR (slot88_deletetime <= $1 AND slot88_deletetime IS NOT NULL AND slot88_delete_status = 'pending')

  OR (slot89_deletetime <= $1 AND slot89_deletetime IS NOT NULL AND slot89_delete_status = 'pending')

  OR (slot90_deletetime <= $1 AND slot90_deletetime IS NOT NULL AND slot90_delete_status = 'pending')

  OR (slot91_deletetime <= $1 AND slot91_deletetime IS NOT NULL AND slot91_delete_status = 'pending')

  OR (slot92_deletetime <= $1 AND slot92_deletetime IS NOT NULL AND slot92_delete_status = 'pending')

  OR (slot93_deletetime <= $1 AND slot93_deletetime IS NOT NULL AND slot93_delete_status = 'pending')

  OR (slot94_deletetime <= $1 AND slot94_deletetime IS NOT NULL AND slot94_delete_status = 'pending')

  OR (slot95_deletetime <= $1 AND slot95_deletetime IS NOT NULL AND slot95_delete_status = 'pending')

  OR (slot96_deletetime <= $1 AND slot96_deletetime IS NOT NULL AND slot96_delete_status = 'pending')

  OR (slot97_deletetime <= $1 AND slot97_deletetime IS NOT NULL AND slot97_delete_status = 'pending')

  OR (slot98_deletetime <= $1 AND slot98_deletetime IS NOT NULL AND slot98_delete_status = 'pending')

  OR (slot99_deletetime <= $1 AND slot99_deletetime IS NOT NULL AND slot99_delete_status = 'pending')

  OR (slot100_deletetime <= $1 AND slot100_deletetime IS NOT NULL AND slot100_delete_status = 'pending')`,
      [now]
    );

    for (const row of deleteResult.rows) {
      // Delete slots from screens123 table based on the delete time
      if (row.slot1_deletetime <= now && row.slot1_deletetime !== null && row.slot1_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot1 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot1_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 1 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot2_deletetime <= now && row.slot2_deletetime !== null && row.slot2_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot2 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot2_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 2 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot3_deletetime <= now && row.slot3_deletetime !== null && row.slot3_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot3 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot3_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 3 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot4_deletetime <= now && row.slot4_deletetime !== null && row.slot4_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot4 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot4_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 4 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot5_deletetime <= now && row.slot5_deletetime !== null && row.slot5_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot5 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot5_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 5 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot6_deletetime <= now && row.slot6_deletetime !== null && row.slot6_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot6 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot6_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 6 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot7_deletetime <= now && row.slot7_deletetime !== null && row.slot7_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot7 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot7_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 7 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot8_deletetime <= now && row.slot8_deletetime !== null && row.slot8_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot8 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot8_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 8 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot9_deletetime <= now && row.slot9_deletetime !== null && row.slot9_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot9 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot9_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 9 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot10_deletetime <= now && row.slot10_deletetime !== null && row.slot10_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot10 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot10_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 10 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot11_deletetime <= now && row.slot11_deletetime !== null && row.slot11_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot11 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot11_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 11 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot12_deletetime <= now && row.slot12_deletetime !== null && row.slot12_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot12 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot12_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 12 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot13_deletetime <= now && row.slot13_deletetime !== null && row.slot13_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot13 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot13_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 13 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot14_deletetime <= now && row.slot14_deletetime !== null && row.slot14_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot14 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot14_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 14 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot15_deletetime <= now && row.slot15_deletetime !== null && row.slot15_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot15 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot15_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 15 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot16_deletetime <= now && row.slot16_deletetime !== null && row.slot16_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot16 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot16_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 16 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot17_deletetime <= now && row.slot17_deletetime !== null && row.slot17_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot17 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot17_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 17 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot18_deletetime <= now && row.slot18_deletetime !== null && row.slot18_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot18 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot18_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 18 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot19_deletetime <= now && row.slot19_deletetime !== null && row.slot19_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot19 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot19_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 19 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot20_deletetime <= now && row.slot20_deletetime !== null && row.slot20_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot20 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot20_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 20 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot21_deletetime <= now && row.slot21_deletetime !== null && row.slot21_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot21 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot21_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 21 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot22_deletetime <= now && row.slot22_deletetime !== null && row.slot22_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot22 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot22_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 22 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot23_deletetime <= now && row.slot23_deletetime !== null && row.slot23_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot23 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot23_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 23 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot24_deletetime <= now && row.slot24_deletetime !== null && row.slot24_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot24 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot24_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 24 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot25_deletetime <= now && row.slot25_deletetime !== null && row.slot25_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot25 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot25_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 25 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot26_deletetime <= now && row.slot26_deletetime !== null && row.slot26_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot26 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot26_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 26 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot27_deletetime <= now && row.slot27_deletetime !== null && row.slot27_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot27 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot27_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 27 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot28_deletetime <= now && row.slot28_deletetime !== null && row.slot28_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot28 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot28_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 28 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot29_deletetime <= now && row.slot29_deletetime !== null && row.slot29_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot29 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot29_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 29 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot30_deletetime <= now && row.slot30_deletetime !== null && row.slot30_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot30 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot30_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 30 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot31_deletetime <= now && row.slot31_deletetime !== null && row.slot31_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot31 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot31_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 31 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot32_deletetime <= now && row.slot32_deletetime !== null && row.slot32_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot32 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot32_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 32 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot33_deletetime <= now && row.slot33_deletetime !== null && row.slot33_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot33 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot33_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 33 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot34_deletetime <= now && row.slot34_deletetime !== null && row.slot34_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot34 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot34_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 34 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot35_deletetime <= now && row.slot35_deletetime !== null && row.slot35_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot35 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot35_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 35 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot36_deletetime <= now && row.slot36_deletetime !== null && row.slot36_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot36 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot36_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 36 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot37_deletetime <= now && row.slot37_deletetime !== null && row.slot37_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot37 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot37_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 37 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot38_deletetime <= now && row.slot38_deletetime !== null && row.slot38_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot38 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot38_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 38 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot39_deletetime <= now && row.slot39_deletetime !== null && row.slot39_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot39 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot39_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 39 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot40_deletetime <= now && row.slot40_deletetime !== null && row.slot40_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot40 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot40_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 40 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot41_deletetime <= now && row.slot41_deletetime !== null && row.slot41_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot41 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot41_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 41 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot42_deletetime <= now && row.slot42_deletetime !== null && row.slot42_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot42 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot42_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 42 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot43_deletetime <= now && row.slot43_deletetime !== null && row.slot43_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot43 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot43_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 43 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot44_deletetime <= now && row.slot44_deletetime !== null && row.slot44_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot44 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot44_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 44 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot45_deletetime <= now && row.slot45_deletetime !== null && row.slot45_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot45 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot45_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 45 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot46_deletetime <= now && row.slot46_deletetime !== null && row.slot46_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot46 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot46_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 46 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot47_deletetime <= now && row.slot47_deletetime !== null && row.slot47_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot47 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot47_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 47 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot48_deletetime <= now && row.slot48_deletetime !== null && row.slot48_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot48 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot48_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 48 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot49_deletetime <= now && row.slot49_deletetime !== null && row.slot49_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot49 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot49_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 49 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot50_deletetime <= now && row.slot50_deletetime !== null && row.slot50_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot50 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot50_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 50 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot51_deletetime <= now && row.slot51_deletetime !== null && row.slot51_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot51 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot51_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 51 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot52_deletetime <= now && row.slot52_deletetime !== null && row.slot52_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot52 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot52_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 52 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot53_deletetime <= now && row.slot53_deletetime !== null && row.slot53_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot53 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot53_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 53 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot54_deletetime <= now && row.slot54_deletetime !== null && row.slot54_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot54 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot54_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 54 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot55_deletetime <= now && row.slot55_deletetime !== null && row.slot55_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot55 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot55_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 55 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot56_deletetime <= now && row.slot56_deletetime !== null && row.slot56_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot56 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot56_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 56 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot57_deletetime <= now && row.slot57_deletetime !== null && row.slot57_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot57 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot57_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 57 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot58_deletetime <= now && row.slot58_deletetime !== null && row.slot58_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot58 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot58_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 58 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot59_deletetime <= now && row.slot59_deletetime !== null && row.slot59_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot59 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot59_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 59 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot60_deletetime <= now && row.slot60_deletetime !== null && row.slot60_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot60 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot60_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 60 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot61_deletetime <= now && row.slot61_deletetime !== null && row.slot61_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot61 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot61_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 61 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot62_deletetime <= now && row.slot62_deletetime !== null && row.slot62_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot62 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot62_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 62 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot63_deletetime <= now && row.slot63_deletetime !== null && row.slot63_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot63 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot63_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 63 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot64_deletetime <= now && row.slot64_deletetime !== null && row.slot64_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot64 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot64_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 64 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot65_deletetime <= now && row.slot65_deletetime !== null && row.slot65_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot65 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot65_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 65 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot66_deletetime <= now && row.slot66_deletetime !== null && row.slot66_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot66 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot66_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 66 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot67_deletetime <= now && row.slot67_deletetime !== null && row.slot67_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot67 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot67_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 67 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot68_deletetime <= now && row.slot68_deletetime !== null && row.slot68_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot68 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot68_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 68 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot69_deletetime <= now && row.slot69_deletetime !== null && row.slot69_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot69 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot69_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 69 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot70_deletetime <= now && row.slot70_deletetime !== null && row.slot70_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot70 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot70_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 70 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot71_deletetime <= now && row.slot71_deletetime !== null && row.slot71_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot71 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot71_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 71 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot72_deletetime <= now && row.slot72_deletetime !== null && row.slot72_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot72 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot72_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 72 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot73_deletetime <= now && row.slot73_deletetime !== null && row.slot73_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot73 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot73_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 73 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot74_deletetime <= now && row.slot74_deletetime !== null && row.slot74_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot74 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot74_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 74 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot75_deletetime <= now && row.slot75_deletetime !== null && row.slot75_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot75 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot75_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 75 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot76_deletetime <= now && row.slot76_deletetime !== null && row.slot76_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot76 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot76_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 76 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot77_deletetime <= now && row.slot77_deletetime !== null && row.slot77_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot77 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot77_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 77 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot78_deletetime <= now && row.slot78_deletetime !== null && row.slot78_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot78 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot78_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 78 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot79_deletetime <= now && row.slot79_deletetime !== null && row.slot79_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot79 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot79_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 79 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot80_deletetime <= now && row.slot80_deletetime !== null && row.slot80_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot80 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot80_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 80 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot81_deletetime <= now && row.slot81_deletetime !== null && row.slot81_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot81 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot81_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 81 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot82_deletetime <= now && row.slot82_deletetime !== null && row.slot82_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot82 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot82_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 82 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot83_deletetime <= now && row.slot83_deletetime !== null && row.slot83_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot83 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot83_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 83 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot84_deletetime <= now && row.slot84_deletetime !== null && row.slot84_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot84 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot84_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 84 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot85_deletetime <= now && row.slot85_deletetime !== null && row.slot85_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot85 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot85_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 85 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot86_deletetime <= now && row.slot86_deletetime !== null && row.slot86_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot86 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot86_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 86 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot87_deletetime <= now && row.slot87_deletetime !== null && row.slot87_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot87 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot87_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 87 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot88_deletetime <= now && row.slot88_deletetime !== null && row.slot88_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot88 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot88_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 88 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot89_deletetime <= now && row.slot89_deletetime !== null && row.slot89_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot89 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot89_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 89 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot90_deletetime <= now && row.slot90_deletetime !== null && row.slot90_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot90 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot90_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 90 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot91_deletetime <= now && row.slot91_deletetime !== null && row.slot91_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot91 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot91_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 91 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot92_deletetime <= now && row.slot92_deletetime !== null && row.slot92_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot92 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot92_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 92 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot93_deletetime <= now && row.slot93_deletetime !== null && row.slot93_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot93 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot93_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 93 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot94_deletetime <= now && row.slot94_deletetime !== null && row.slot94_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot94 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot94_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 94 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot95_deletetime <= now && row.slot95_deletetime !== null && row.slot95_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot95 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot95_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 95 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot96_deletetime <= now && row.slot96_deletetime !== null && row.slot96_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot96 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot96_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 96 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot97_deletetime <= now && row.slot97_deletetime !== null && row.slot97_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot97 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot97_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 97 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot98_deletetime <= now && row.slot98_deletetime !== null && row.slot98_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot98 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot98_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 98 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot99_deletetime <= now && row.slot99_deletetime !== null && row.slot99_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot99 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot99_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 99 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
      
      if (row.slot100_deletetime <= now && row.slot100_deletetime !== null && row.slot100_delete_status === 'pending') {
        await pool.query(`UPDATE screens123 SET slot100 = NULL WHERE id = ANY($1::INTEGER[])`, [row.screen_id]);
        await pool.query(`UPDATE playlists1235 SET slot100_delete_status = 'completed' WHERE id = $1`, [row.id]);
        console.log(`Slot 100 data set to NULL in screens123 table for playlist ID ${row.id}`);
      }
    }
  } catch (err) {
    console.error('Error during periodic task:', err);
  }
});

// Route to view data from playlist1235 and screens tables
app.get('/viewdata', async (req, res) => {
  try {
    const playlistResult = await pool.query('SELECT * FROM playlists1235 ORDER BY id ASC');
    const screensResult = await pool.query('SELECT * FROM screens123 ORDER BY id ASC');

    res.render('view-data', {
      playlists: playlistResult.rows,
      screens: screensResult.rows,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
