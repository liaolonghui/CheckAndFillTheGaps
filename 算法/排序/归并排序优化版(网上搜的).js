const array = [52, 2, 23, 32, 21, 100, 12, 11, 8, 42, 302, 23, 25, 28, 82]

console.log(array);
var len = array.length;
sort(0,len);
console.log(array);

function sort(begin,end) {
    if (end - begin < 2) {
        return;
    }
    let mid = (begin + end) >> 1;
    sort(begin, mid);
    sort(mid, end);
    merge(begin,mid,end);
}
function merge(begin,mid,end) {
    let li = 0,le = mid - begin;
    let ri = mid,re = end;
    let ai = begin;
    let leftArray = [];
    for (let i = li;i<le;i++) {
        leftArray[i] = array[begin + i];
    }
    while(li < le){
        if(ri < re && array[ri] < leftArray[li]){
            array[ai++] = array[ri++];
        }else{
            array[ai++] = leftArray[li++];
        }
    }
}