
var closedCheck = function () {

    var id;
    var week_tbl = new Array(7);
    var retstring = "";

    /* 2次元配列の作成 */
    for(let y = 0; y < 7; y++) {
        week_tbl[y] = new Array(5).fill(0);
    }
    
    /* 2次元配列に休業曜日値を格納 */
    for(let y = 0; y < 7; y++) {
        for(let x = 0; x < 5; x++) {
            id = getWeekId(y) + "-" + (x + 1);
            console.log(id);
            var stat = document.getElementById(id).checked;
            console.log("id:" + stat);
            week_tbl[x][y] = stat;
        }
    }
    
    /** わかりやすく日曜日から土曜日まで判定していく */
    
    for(let y = 0; y < 7; y++) {
        if (!week_tbl[0][y]&&!week_tbl[1][y]&&!week_tbl[2][y]&&!week_tbl[3][y]&&!week_tbl[4][y]) {
            retstring = retstring + getWeekName(y) + "は休みません" + "\n";
        }
    }



    document.getElementById("result").value = retstring;

}


/** WeekID */
function getWeekId(idx) {
    var weekliteral = ["sun-week", "mon-week", "tue-week", "wed-week", "thu-week", "fri-week", "sat-week"];
    return weekliteral[idx];
}

/** WeekID */
function getWeekName(idx) {
    var weekliteral = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];
    return weekliteral[idx];
}