function data(input) {
    let budget=Number(input[0]);
    let gpuCount=Number(input[1]);
    let cpuCount=Number(input[2]);
    let ramCount=Number(input[3]);

    let sumGpu=gpuCount*250;

    let oneCpu=sumGpu*0.35;
    let sumCpu=cpuCount*oneCpu;

    let oneRam=sumGpu*0.10;
    let sumRam=ramCount*oneRam;

    let allSum=sumGpu+sumCpu+sumRam;
    if(gpuCount>cpuCount){
        let discount=allSum*0.15;
        allSum=allSum-discount;
    }
    let diff=Math.abs(allSum-budget);
    if(allSum<budget){
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else{
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }
    
}
data(["920.45",
"3",
"1",
"1"])
;
