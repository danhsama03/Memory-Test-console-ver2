import { question } from "readline-sync";
/**
 * Ham nhap cac phan tu theo so luong
 * @param len So luong phan tu 
 * @returns Tra ve mang
 */
function nhapMang(len: number): number[] {
	let arr: number[] = [];
	for (let i = 0; i < len; i++) {
        arr[i] = Number(question(`Nhap phan tu vi tri ${i}: `));
    };
	return arr;
};

/**
 * Ham tinh tong am
 * @param arr Mang
 */
function tinhTongAm(arr: number[]): void {
    let s: number = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < 0) {
            s = s + arr[i];
        };
    };
    console.log(s);
};

/**
 * Ham chuc nang nhap so luong phan tu, goi ham nhap mang, ham tinh tong am
 */
function main(): void {
    let n: number = Number(question("Nhap so luong phan tu: "));
    let a: number[] = nhapMang(n);
    tinhTongAm(a);
};

main();

export {};