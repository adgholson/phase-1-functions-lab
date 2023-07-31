function distanceFromHqInBlocks(location) {
    const hqLocation = 42; 
    return Math.abs(location - hqLocation);
  }

  function distanceFromHqInFeet(location) {
    const hqLocation = 42;
    const feetInBlock = 264;
    return Math.abs(location - hqLocation) * feetInBlock;
  }

  function distanceTravelledInFeet(start, destination) {
    const feetInBlock = 264; 
    return Math.abs(destination - start) * feetInBlock;
  }

  function calculatesFarePrice(start, destination) {
    const feetInBlock = 264;
    const distanceInFeet = Math.abs(destination - start) * feetInBlock;
  
    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    }
        return 'cannot travel that far';
  }