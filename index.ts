import { question } from "readline-sync";

function sleep(milliseconds: number): void {
    var start = new Date().getTime();
    while (new Date().getTime() - start < milliseconds) {}
};

function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

function randomLan1(): number[] {
    let mangLanRandom1: number[] = [];
    for (let i: number = 0; i < 5; i++) {
        mangLanRandom1[i] = random(1, 9);
    };
    return mangLanRandom1;
};

let x1: number[] = randomLan1();

function doanLan1(): boolean {
    let bigFlag: boolean = false;
    console.log("DOAN LAN 1");
    console.log(x1);
    sleep(1000);
    console.clear();
	let soDoanLan1: number[] = [];
    let flag: boolean = false;
	for (let i = 0; i < 5; i++) {
        soDoanLan1[i] = Number(question(`Nhap phan tu vi tri ${i}: `));
        if (soDoanLan1[i] == x1[i]) {
            flag = true;
        } else {
            flag = false;
            break;
        };
    };
    
    if (flag == true) {
        bigFlag = true;
        console.log("Dung lan doan thu 1");
        sleep(3000);
        console.clear();
    } else {
        bigFlag = false;
        console.log("Sai roi ahihi");
    };
    return bigFlag;
};

function randomLan2(): number[] {
    let mangLanRandom2: number[] = [];
    for (let i: number = 0; i < 5; i++) {
        mangLanRandom2[i] = random(10, 99);
    };
    return mangLanRandom2;
};

let x2: number[] = randomLan2();

function doanLan2(): boolean {
    let bigFlag2: boolean = false;
    console.log("DOAN LAN 2");
    console.log(x2);
    sleep(2000);
    console.clear();
	let soDoanLan2: number[] = [];
    let flag2: boolean = false;
	for (let i = 0; i < 5; i++) {
        soDoanLan2[i] = Number(question(`Nhap phan tu vi tri ${i}: `));
        if (soDoanLan2[i] == x2[i]) {
            flag2 = true;
        } else {
            flag2 = false;
            break;
        };
    };
    
    if (flag2 == true) {
        bigFlag2 = true;
        console.log("Dung lan doan thu 2");
        sleep(3000);
        console.clear();
    } else {
        bigFlag2 = false;
        console.log("Sai roi ahihi");
    };
    return bigFlag2;
};

function randomLan3(): number[] {
    let mangLanRandom3: number[] = [];
    for (let i: number = 0; i < 5; i++) {
        mangLanRandom3[i] = random(100, 999);
    };
    return mangLanRandom3;
};

let x3: number[] = randomLan3();

function doanLan3(): boolean {
    let bigFlag3: boolean = false;
    console.log("DOAN LAN 3");
    console.log(x3);
    sleep(3000);
    console.clear();
	let soDoanLan3: number[] = [];
    let flag3: boolean = false;
	for (let i = 0; i < 5; i++) {
        soDoanLan3[i] = Number(question(`Nhap phan tu vi tri ${i}: `));
        if (soDoanLan3[i] == x3[i]) {
            flag3 = true;
        } else {
            flag3 = false;
            break;
        };
    };
    
    if (flag3 == true) {
        bigFlag3 = true;
        console.log("Dung lan doan thu 3");
        sleep(3000);
        console.clear();
    } else {
        bigFlag3 = false;
        console.log("Sai roi ahihi");
    };
    return bigFlag3;
};

function randomLan4(): number[] {
    let mangLanRandom4: number[] = [];
    for (let i: number = 0; i < 5; i++) {
        mangLanRandom4[i] = random(1000, 9999);
    };
    return mangLanRandom4;
};

let x4: number[] = randomLan4();

function doanLan4(): boolean {
    let bigFlag4: boolean = false;
    console.log("DOAN LAN 4");
    console.log(x4);
    sleep(4000);
    console.clear();
	let soDoanLan4: number[] = [];
    let flag4: boolean = false;
	for (let i = 0; i < 5; i++) {
        soDoanLan4[i] = Number(question(`Nhap phan tu vi tri ${i}: `));
        if (soDoanLan4[i] == x4[i]) {
            flag4 = true;
        } else {
            flag4 = false;
            break;
        };
    };
    
    if (flag4 == true) {
        bigFlag4 = true;
        console.log("Dung lan doan thu 4");
        sleep(3000);
        console.clear();
    } else {
        bigFlag4 = false;
        console.log("Sai roi ahihi");
    };
    return bigFlag4;
};

function randomLan5(): number[] {
    let mangLanRandom5: number[] = [];
    for (let i: number = 0; i < 5; i++) {
        mangLanRandom5[i] = random(10000, 99999);
    };
    return mangLanRandom5;
};

let x5: number[] = randomLan5();

function doanLan5(): boolean {
    let bigFlag5: boolean = false;
    console.log("DOAN LAN 5");
    console.log(x5);
    sleep(5000);
    console.clear();
	let soDoanLan5: number[] = [];
    let flag5: boolean = false;
	for (let i = 0; i < 5; i++) {
        soDoanLan5[i] = Number(question(`Nhap phan tu vi tri ${i}: `));
        if (soDoanLan5[i] == x5[i]) {
            flag5 = true;
        } else {
            flag5 = false;
            break;
        };
    };
    
    if (flag5 == true) {
        bigFlag5 = true;
        console.log("Dung lan doan thu 5.");
        sleep(3000);
        console.clear();
    } else {
        bigFlag5 = false;
        console.log("Sai roi ahihi");
    };
    return bigFlag5;
};

function main(): void {
    if (doanLan1() == true) {
        if (doanLan2() == true) {
            if (doanLan3() == true) {
                if (doanLan4() == true) {
                    if (doanLan5() == true) {
                        console.log("SIEU TRI NHO!!!");
                    };
                };
            };
        };
    };
};

main();


