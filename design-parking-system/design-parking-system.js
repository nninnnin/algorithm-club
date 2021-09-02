/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) { // 생성자 함수
    this.parkingLot = { // parkingSystem 인스턴스가 갖게되는 속성값 정의
        big,
        medium,
        small
    };
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carTypeNumber) {
    const CAR_TYPES = {
        "1": "big",
        "2": "medium",
        "3": "small"
    };
    
    const carTypeString = CAR_TYPES[carTypeNumber];
    
    if (this.parkingLot[carTypeString]) {
        this.parkingLot[carTypeString] -= 1;
        
        return true;
    }
    
    return false;
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */