import getRandomColor from './getRandomColor';

const getLanguageColor = (language) => {
  switch (language) {
    case "Java":
      return "brown";
    
    case "JavaScript":
      return "yellow";

    case "HTML":
      return "orange";

      case "Shell": 
        return "green";

      case "Dart":
        return "blue";
      
        case "CSS": 
        return "purple";

        case "C++":
          return "pink";

        case "TypeScript":
          return "#7159c1";
        
        case "Objective-C":
          return "#D54";
      
    default:
      return getRandomColor();
  }
}

export default getLanguageColor;