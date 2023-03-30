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
 * Ham tim ton tai duong
 * @param arr Mang
 */
function tonTaiDuong(arr: number[]): void {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > 0) {
            console.log("Yes");
            break;
        };
    };
};

/**
 * Ham chuc nang nhap so luong phan tu, goi ham nhap mang, ham tim ton tai duong
 */
function main(): void {
    let n: number = Number(question("Nhap so luong phan tu: "));
    let a: number[] = nhapMang(n);
    tonTaiDuong(a);
};

main();

export {};