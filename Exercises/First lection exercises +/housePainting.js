function data(input) {
    let heightHouseX=Number(input[0]);
    let widthSideWallY=Number(input[1]);
    let heightRoofH=Number(input[2]);

    let sideWall=heightHouseX*widthSideWallY;
    let window=1.5*1.5;
    let allSideWall=2*sideWall-2*window;
    let frontBackWall=(heightHouseX*heightHouseX)*2-2.4;
    let areaAllWalls=frontBackWall+allSideWall;
    let greenPaint=areaAllWalls/3.4;

    let sideRoof=2*sideWall;
    let frontBackRoof=2*(heightHouseX*heightRoofH/2);
    let allRoof=sideRoof+frontBackRoof;
    let redPaint=allRoof/4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}
data(['6','10','5.2']);