function KMBMaker(elem) {
    var num = elem;
    sqrtNum = 1;
    var arrayRdc = ['', ' K', ' M', ' B', ' T', ' q', ' Q', ' s', ' S', ' O', ' N'];
    for (i = 1000; ; i = i * 1000) {
        if (num < i) {
            var numStr = +(num / (i / 1000)).toFixed(3);
            var text = numStr + arrayRdc[sqrtNum - 1];
            break;
        } else if (isNaN(num)) {
            break;
        }
        sqrtNum++;

    }
    return text;
}
