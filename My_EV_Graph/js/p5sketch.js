// Given the CSV file "data.csv"
// in the project's "assets" folder:

var table;
var row;
var Exit_Velocity;
var Launch_Angle;

var x;
var y;

function preload() {
    //table is comma separated value "csv"
    //and has no header specifying the columns labels
    table = loadTable("assets/Giants_Statcast_Data.csv", "csv", "noHeader");
}

function setup() {
    //setup look
    createCanvas(1000, 600);
    background(254, 90, 29);
    rectMode(CORNERS);
    //location variables

    x = 50;
    y = height - 50;

    //draw graph lines
    stroke(255);
    for (var i = 20; i < y; i += 10) {
        line(20, i, 500, i);
    }

    //iterate thorough all rows of CSV file
    for (var r = 0; r < table.getRowCount(); r++) {
        row = table.getRow(r);
        //print it column by column
        //note: a row is an object, not an array
        Exit_Velocity = row.getNum(0);
        Launch_Angle = row.getNum(1);

        print(Exit_Velocity); //optional but helpful
        print(Launch_Angle);

        Exit_Velocity = map(Exit_Velocity, 80, 100, 100, 200); //remap the time variable
        Launch_Angle = map(Launch_Angle, 0, 25, 0, 50); //remap the Launch_Angle variable


        line(x-30, y-10, 3 * Exit_Velocity, 10 * Launch_Angle);

    }
    noStroke();
}

function draw() {
    //nothing here
}
