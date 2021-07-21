#include <stdio.h>

int main(void) {
	int number, i, j, index, temp, array[1001];
	
	// 수의 개수
	scanf("%d", &number);
	
	// N개의 줄에 데이터 입력
	for(i = 0; i < number; i++) {
		scanf("%d", &array[i]);
	} 
	
	// 버블 정렬
	for(i = 0; i < number - 1; i++) {
		for(j = 0; j < number - i - 1; j++ ) {
			if(array[j] > array[j+1]) {
				temp = array[j];
				array[j] = array[j+1];
				array[j+1] = temp;
			}
		}
	} 
	
	// 출력 
	for(i = 0; i < number; i++) {
		printf("%d\n", array[i]);
	}
}