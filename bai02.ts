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
    }
	return arr;
};

/**
 * Ham chuc nang nhap so luong phan tu, goi ham nhap mang va in ra so giua phan tu hoac trung binh cong cua 2 phan tu chinh giua
 */
function cnChinhGiua(): void {
	let n = Number(question("Nhap so luong phan tu: "));
	let a = nhapMang(n);
    console.log(a);
	if (n % 2 == 1) {
        let k = Math.floor(n/2);
        console.log(a[k]);
    } else {
        let x = a[n/2];
        let y = a[n/2 - 1];
        console.log((x + y)/2);
    };
};

cnChinhGiua();

export {};