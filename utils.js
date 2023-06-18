export const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export const duplicateArray = (array) => array.reduce((res, current) => res.concat([current, current]), []);

export const createMemeArray = (initialCount) => {

    const images = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
    
        shuffle(images);
    
        switch (initialCount) {
            case 16:
                return images.slice(0, 8);
            case 20:
                return images.slice(0, 10);
            case 24:
                return images.slice(0, 12);
            case 28:
                return images.slice(0, 14);
            case 36:
                return images;
            default:
                break;
        }
       }
