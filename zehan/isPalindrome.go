func isPalindrome(x int) bool {
    if ( x < 0 ){
        return false
    }
    reverse := 0;
    original := x;
    lastDigit := 0;
    for x > 0 {
        lastDigit = x % 10;
        x = x / 10;
        reverse = 10 * reverse + lastDigit;
    }
    
    if ( reverse == original ) {
        return true;
    }
    return false;
}
