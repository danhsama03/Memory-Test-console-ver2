import { question } from "readline-sync";

/**
 * Ham nhap cac cot diem
 * @param len So luong cot diem
 * @returns Tra ve mang
 */
function nhapDiem(len: number): number[] {
	let arr: number[] = [];
	for (let i: number = 0; i < len; i++) {
		arr[i] = Number(question(`- Nhap diem thu ${i+1}: `));
	}
	return arr;
}

/**
 * Ham tinh diem trung binh
 * @param diem Diem tung cot nhap tu may tinh
 * @returns Tra ve diem
 */
function dtb(diem: number[]): number {
    return (diem[0] + diem[1] + diem[2])/3;
}

/**
 * Ham chuc nang goi ham nhap diem, ham tinh diem tb va in ra ket qua
 */
function cnDTB(): void {
	let d = nhapDiem(3);
	let kq = dtb(d);
	console.log(kq);
}

cnDTB();


export {};