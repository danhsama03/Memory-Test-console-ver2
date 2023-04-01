import { question } from "readline-sync";

function sleep(milliseconds: number): void {
    var start = new Date().getTime();
    while (new Date().getTime() - start < milliseconds) {}
};

function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

function randomMoiLuot(len: number): number[] {
    let mangRandom: number[] = [];
    let min: number = 1;
    let max: number = 9;
    for (let i: number = 0; i < len; i++) {
        mangRandom[i] = random(1, 9);
    }
    return mangRandom;
}


function main(): void {
    let n: number = Number(question("Nhap so luot choi: "));
    for (let z: number = 1; z <= n; z++) {
        let mangRandom: number[] = [];
        let min: number = 1;
        let max: number = 9;
        for (let i: number = 0; i < n; i++) {
            switch (z) {
                case 1:
                    min = 1;
                    max = 9;
                    break;
                case 2: 
                    min = 10;
                    max = 99;
                    break;
                case 3: 
                    min = 100;
                    max = 999;
                    break;
                case 4:
                    min = 1000;
                    max = 9999;
                    break;
                case 5: 
                    min = 10000;
                    max = 99999;
                    break;
            };
            mangRandom[i] = random(min, max);
        }
        let k = mangRandom;
        console.log(k);
        let bigFlag: boolean = false;
        console.log("DOAN LAN " + z);
        sleep(z * 1000);
        console.clear();
        let soDoan: number[] = [];
        let flag: boolean = false;
        for (let i = 0; i < n; i++) {
            soDoan[i] = Number(question(`Nhap so thu ${i + 1}: `));
            if (soDoan[i] == k[i]) {
                flag = true;
            } else {
                flag = false;
                console.log("Sai roi ahihi");
                break;
            };
        };
                
        if (flag == true) {
            bigFlag = true;
            console.log("Dung lan doan thu " + z);
            sleep(3000);
            console.clear();
        } else {
            bigFlag = false;
            console.log("Game Over");
            break;
        };
        if (z == n) {
            console.log("SIEU TRI NHO!!!");
        }
    }

};

main();